import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { crc32, deflateRawSync, inflateRawSync } from "node:zlib";
import { catalog, components, textOf } from "../lib/catalog.js";
import { root } from "../lib/paths.js";
import { validateContent } from "./validate.js";

const isHidden = (node) =>
  node.attributes?.["aria-hidden"] === "true" ||
  (node.attributes?.class || "").split(/\s+/).includes("sr-only");

const normalizeLine = (line) =>
  line
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:])/g, "$1")
    .trim();

const normalizeInline = (text) =>
  text.split("\n").map(normalizeLine).filter(Boolean).join("\n");

function inlineMarkdown(nodes) {
  return nodes
    .map((node, index) => {
      if (node.type === "text") {
        let text = node.value.replace(/\s+/g, " ");
        const prev = nodes[index - 1];
        const next = nodes[index + 1];
        if (
          prev?.type === "element" &&
          ["code", "kbd"].includes(prev.tag) &&
          /^[A-Za-zÀ-ÿ0-9]/.test(text)
        )
          text = ` ${text}`;
        if (
          next?.type === "element" &&
          ["code", "kbd"].includes(next.tag) &&
          /[A-Za-zÀ-ÿ0-9;]$/.test(text)
        )
          text = `${text} `;
        return text;
      }
      if (isHidden(node)) return "";
      if (node.tag === "br") return "\n";
      if (node.tag === "a") {
        const label = textOf([node])
          .replaceAll("[", "\\[")
          .replaceAll("]", "\\]");
        return label ? `[${label}](${node.attributes.href})` : "";
      }
      const inner = inlineMarkdown(node.children).trim();
      if (!inner) return "";
      if (node.tag === "code" || node.tag === "kbd") return `\`${inner}\``;
      if (node.tag === "strong" || node.tag === "b") return `**${inner}**`;
      if (node.tag === "em" || node.tag === "i") return `*${inner}*`;
      return inlineMarkdown(node.children);
    })
    .join("");
}

function collectHeadingLevels(nodes, sectionTitle) {
  const levels = [];
  for (const node of nodes) {
    if (node.type !== "element" || isHidden(node)) continue;
    if (node.tag === "div")
      levels.push(...collectHeadingLevels(node.children, sectionTitle));
    else if (/^h[2-6]$/.test(node.tag)) {
      const text = normalizeInline(inlineMarkdown(node.children));
      if (text.toLowerCase() === sectionTitle.toLowerCase()) continue;
      levels.push(Number(node.tag[1]));
    }
  }
  return levels;
}

export function markdownOf(
  nodes,
  { sectionTitle = "", headingOffset = null } = {},
) {
  if (headingOffset === null) {
    const levels = collectHeadingLevels(nodes, sectionTitle);
    headingOffset = levels.length ? 3 - Math.min(...levels) : 0;
  }
  const blocks = [];
  for (const node of nodes) {
    if (node.type !== "element" || isHidden(node)) continue;
    if (node.tag === "div") {
      blocks.push(markdownOf(node.children, { sectionTitle, headingOffset }));
      continue;
    }
    if (/^h[2-6]$/.test(node.tag)) {
      const text = normalizeInline(inlineMarkdown(node.children));
      if (!text || text.toLowerCase() === sectionTitle.toLowerCase()) continue;
      const level = Math.min(6, Math.max(3, Number(node.tag[1]) + headingOffset));
      blocks.push(`${"#".repeat(level)} ${text}`);
      continue;
    }
    if (node.tag === "p") {
      const text = normalizeInline(inlineMarkdown(node.children));
      if (text) blocks.push(text);
      continue;
    }
    if (node.tag === "ul" || node.tag === "ol") {
      const items = node.children.filter(
        (child) => child.type === "element" && child.tag === "li",
      );
      blocks.push(
        items
          .map((li, index) => {
            const prefix = node.tag === "ol" ? `${index + 1}. ` : "- ";
            const inlineChildren = li.children.filter(
              (child) =>
                !(
                  child.type === "element" &&
                  (child.tag === "ul" || child.tag === "ol")
                ),
            );
            const nestedLists = li.children.filter(
              (child) =>
                child.type === "element" &&
                (child.tag === "ul" || child.tag === "ol"),
            );
            const head = `${prefix}${normalizeInline(inlineMarkdown(inlineChildren))}`;
            if (!nestedLists.length) return head;
            const nested = nestedLists
              .map((list) =>
                markdownOf([list], { sectionTitle, headingOffset })
                  .split("\n")
                  .map((line) => `   ${line}`)
                  .join("\n"),
              )
              .join("\n");
            return `${head}\n\n${nested}`;
          })
          .join("\n"),
      );
    }
  }
  return blocks.filter(Boolean).join("\n\n");
}

export function componentMarkdown(component) {
  const header = [
    `# ${component.name}`,
    "",
    `- ID: \`${component.id}\``,
    `- Categoria: ${component.category}`,
    `- Versão do conteúdo: ${component.contentVersion}`,
    `- Autoria: ${component.author} (biblioteca Magoo, licença MIT)`,
    `- Fonte original: ${component.source.originalUrl}`,
    "- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.",
    "",
    `Resumo: ${component.summary}`,
  ].join("\n");
  const sections = component.sections
    .map(
      (section) =>
        `## ${section.title}\n\n${markdownOf(section.blocks, { sectionTitle: section.title })}`,
    )
    .join("\n\n");
  return `${header}\n\n${sections}\n`;
}

export function catalogMarkdown(entries = components, contentCatalog = catalog) {
  const categories = [...new Set(entries.map((entry) => entry.category))];
  const groups = categories
    .map((category) => {
      const items = entries
        .filter((entry) => entry.category === category)
        .map((entry) => `- ${entry.name} (\`${entry.id}\`)`)
        .join("\n");
      return `## ${category}\n${items}`;
    })
    .join("\n\n");
  return [
    "# Catálogo Magoo",
    "",
    `Versão do conteúdo nesta cópia: ${contentCatalog.contentVersion}. Autoria: ${contentCatalog.author}.`,
    "",
    "Use os IDs abaixo para abrir references/componentes/<id>.md.",
    "",
    groups,
    "",
  ].join("\n");
}

export function createZipArchive(files) {
  const dosTime = 0;
  const dosDate = (46 << 9) | (1 << 5) | 1;
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const { name, content } of files) {
    const nameBuf = Buffer.from(name, "utf8");
    const uncompressed = Buffer.isBuffer(content)
      ? content
      : Buffer.from(content, "utf8");
    const compressed = deflateRawSync(uncompressed);
    const crc = crc32(uncompressed);

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0x0800, 6);
    localHeader.writeUInt16LE(8, 8);
    localHeader.writeUInt16LE(dosTime, 10);
    localHeader.writeUInt16LE(dosDate, 12);
    localHeader.writeUInt32LE(crc, 14);
    localHeader.writeUInt32LE(compressed.length, 18);
    localHeader.writeUInt32LE(uncompressed.length, 22);
    localHeader.writeUInt16LE(nameBuf.length, 26);
    localHeader.writeUInt16LE(0, 28);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE((3 << 8) | 20, 4);
    centralHeader.writeUInt16LE(20, 6);
    centralHeader.writeUInt16LE(0x0800, 8);
    centralHeader.writeUInt16LE(8, 10);
    centralHeader.writeUInt16LE(dosTime, 12);
    centralHeader.writeUInt16LE(dosDate, 14);
    centralHeader.writeUInt32LE(crc, 16);
    centralHeader.writeUInt32LE(compressed.length, 20);
    centralHeader.writeUInt32LE(uncompressed.length, 24);
    centralHeader.writeUInt16LE(nameBuf.length, 28);
    centralHeader.writeUInt16LE(0, 30);
    centralHeader.writeUInt16LE(0, 32);
    centralHeader.writeUInt16LE(0, 34);
    centralHeader.writeUInt16LE(0, 36);
    centralHeader.writeUInt32LE((0o100644 << 16) >>> 0, 38);
    centralHeader.writeUInt32LE(offset, 42);

    localParts.push(localHeader, nameBuf, compressed);
    centralParts.push(centralHeader, nameBuf);
    offset += localHeader.length + nameBuf.length + compressed.length;
  }

  const centralDir = Buffer.concat(centralParts);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(files.length, 8);
  eocd.writeUInt16LE(files.length, 10);
  eocd.writeUInt32LE(centralDir.length, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, centralDir, eocd]);
}

export function readZipEntries(buffer) {
  const entries = new Map();
  let eocdOffset = buffer.length - 22;
  while (eocdOffset >= 0 && buffer.readUInt32LE(eocdOffset) !== 0x06054b50) {
    eocdOffset--;
  }
  if (eocdOffset < 0) throw new Error("Arquivo ZIP inválido.");
  const totalEntries = buffer.readUInt16LE(eocdOffset + 10);
  let centralOffset = buffer.readUInt32LE(eocdOffset + 16);

  for (let i = 0; i < totalEntries; i++) {
    if (buffer.readUInt32LE(centralOffset) !== 0x02014b50)
      throw new Error("Cabeçalho central ZIP inválido.");
    const method = buffer.readUInt16LE(centralOffset + 10);
    const compressedSize = buffer.readUInt32LE(centralOffset + 20);
    const nameLen = buffer.readUInt16LE(centralOffset + 28);
    const extraLen = buffer.readUInt16LE(centralOffset + 30);
    const commentLen = buffer.readUInt16LE(centralOffset + 32);
    const localOffset = buffer.readUInt32LE(centralOffset + 42);
    const name = buffer
      .subarray(centralOffset + 46, centralOffset + 46 + nameLen)
      .toString("utf8");

    const localNameLen = buffer.readUInt16LE(localOffset + 26);
    const localExtraLen = buffer.readUInt16LE(localOffset + 28);
    const dataStart = localOffset + 30 + localNameLen + localExtraLen;
    const raw = buffer.subarray(dataStart, dataStart + compressedSize);
    const content =
      method === 8
        ? inflateRawSync(raw).toString("utf8")
        : raw.toString("utf8");
    entries.set(name, content);
    centralOffset += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

export async function writeSkillReferences({
  outputRoot = root,
  entries = components,
  contentCatalog = catalog,
} = {}) {
  const skillDir = new URL("skills/magoo-interacao/", outputRoot);
  const refsDir = new URL("references/", skillDir);
  const componentsDir = new URL("componentes/", refsDir);
  await mkdir(componentsDir, { recursive: true });
  const existing = await readdir(componentsDir);
  const validFiles = new Set(entries.map((entry) => `${entry.id}.md`));
  for (const file of existing) {
    if (file.endsWith(".md") && !validFiles.has(file))
      await rm(new URL(file, componentsDir), { force: true });
  }
  const catalogMd = catalogMarkdown(entries, contentCatalog);
  await writeFile(new URL("catalogo.md", refsDir), catalogMd);
  const componentFiles = [];
  for (const component of entries) {
    const md = componentMarkdown(component);
    await writeFile(new URL(`${component.id}.md`, componentsDir), md);
    componentFiles.push({
      name: `magoo-interacao/references/componentes/${component.id}.md`,
      content: md,
    });
  }
  const skillPath = new URL("SKILL.md", skillDir);
  let skillText;
  let hasLocalSkillFile = true;
  try {
    skillText = await readFile(skillPath, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    hasLocalSkillFile = false;
    skillText = await readFile(
      new URL("skills/magoo-interacao/SKILL.md", root),
      "utf8",
    );
  }
  const updatedSkillText = skillText
    .replace(
      /versão do conteúdo \([0-9]+\.[0-9]+\.[0-9]+\)/,
      `versão do conteúdo (${contentCatalog.contentVersion})`,
    )
    .replace(
      /A versão deste conteúdo é [0-9]+\.[0-9]+\.[0-9]+\./,
      `A versão deste conteúdo é ${contentCatalog.contentVersion}.`,
    );
  if (hasLocalSkillFile && updatedSkillText !== skillText) {
    await writeFile(skillPath, updatedSkillText);
  }
  const licenseText = await readFile(new URL("LICENSE", root), "utf8");
  const downloadsDir = new URL("downloads/", outputRoot);
  await mkdir(downloadsDir, { recursive: true });
  const zipBuffer = createZipArchive([
    { name: "magoo-interacao/SKILL.md", content: updatedSkillText },
    {
      name: "magoo-interacao/references/catalogo.md",
      content: catalogMd,
    },
    ...componentFiles,
    { name: "magoo-interacao/LICENSE", content: licenseText },
  ]);
  await writeFile(new URL("magoo-interacao.zip", downloadsDir), zipBuffer);
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  validateContent();
  await writeSkillReferences();
}

