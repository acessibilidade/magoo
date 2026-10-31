import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
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
  await writeFile(
    new URL("catalogo.md", refsDir),
    catalogMarkdown(entries, contentCatalog),
  );
  for (const component of entries) {
    await writeFile(
      new URL(`${component.id}.md`, componentsDir),
      componentMarkdown(component),
    );
  }
  const skillPath = new URL("SKILL.md", skillDir);
  try {
    const skillText = await readFile(skillPath, "utf8");
    const updated = skillText
      .replace(
        /versão do conteúdo \([0-9]+\.[0-9]+\.[0-9]+\)/,
        `versão do conteúdo (${contentCatalog.contentVersion})`,
      )
      .replace(
        /A versão deste conteúdo é [0-9]+\.[0-9]+\.[0-9]+\./,
        `A versão deste conteúdo é ${contentCatalog.contentVersion}.`,
      );
    if (updated !== skillText) await writeFile(skillPath, updated);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  validateContent();
  await writeSkillReferences();
}

