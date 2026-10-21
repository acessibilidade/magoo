import Ajv from "ajv";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { root } from "../lib/paths.js";
import { catalog, components, flatten, textOf } from "../lib/catalog.js";
import { validateInteractionContent } from "../lib/interaction-rules.js";
const schema = JSON.parse(
  await readFile(new URL("content/component.schema.json", root), "utf8"),
);
const validate = new Ajv({ allErrors: true }).compile(schema);
const packageVersion = JSON.parse(
  await readFile(new URL("package.json", root), "utf8"),
).version;
const lock = await readFile(new URL("package-lock.json", root), "utf8")
  .then(JSON.parse)
  .catch((error) => {
    if (error.code === "ENOENT") return null;
    throw error;
  });
export function validateGherkin(component) {
  const section = component.sections.find(
    (entry) => entry.id === "acceptance-criteria",
  );
  const blocks =
    section?.blocks.filter((block) => block.type === "element") || [];
  const fail = (reason) => {
    throw new Error(`Gherkin fora do padrão: ${component.id}: ${reason}`);
  };
  const hasClass = (node, name) =>
    (node?.attributes.class || "").split(/\s+/).includes(name);
  if (
    section?.title !== "Gherkin" ||
    blocks[0]?.tag !== "h2" ||
    textOf([blocks[0]]) !== "Gherkin" ||
    !hasClass(blocks[0], "titulo-mobile")
  )
    fail("título Gherkin ausente ou divergente");
  if (
    blocks[1]?.tag !== "p" ||
    !hasClass(blocks[1], "mt-3") ||
    !textOf([blocks[1]]).includes("BDD")
  )
    fail("introdução BDD ausente");
  if (blocks[2]?.tag !== "h3" || !textOf([blocks[2]]).startsWith("Cenário:"))
    fail("contexto do cenário ausente");
  for (const title of [
    "Navegação por teclado",
    "Leitor de telas para desktop",
    "Leitor de telas para dispositivos móveis",
  ])
    if (
      !blocks.some(
        (block) => block.tag === "h4" && textOf([block]).startsWith(title),
      )
    )
      fail(`grupo obrigatório ausente: ${title}`);
  for (const [index, block] of blocks.entries()) {
    if (
      block.tag === "p" &&
      /^DAD[OA]S?\b/.test(textOf([block])) &&
      /QUANDO.*ENTÃO/.test(textOf([block]))
    )
      fail("cenário em parágrafo corrido; separe os passos em lista");
    if (block.tag !== "h4") continue;
    const list = blocks[index + 1];
    if (
      !hasClass(block, "mt-4") ||
      list?.tag !== "ol" ||
      !hasClass(list, "lista-detalhe") ||
      !hasClass(list, "link-padrao")
    )
      fail(`grupo sem título e lista padronizados: ${textOf([block])}`);
    const steps = list.children.filter((child) => child.type === "element");
    if (
      steps.length < 2 ||
      steps.some((step) => step.tag !== "li" || !textOf([step]))
    )
      fail(`passos ausentes ou inválidos: ${textOf([block])}`);
    if (
      steps.some((step) => /^DAD[OA]S?\b.*QUANDO.*ENTÃO/.test(textOf([step])))
    )
      fail("Dado, Quando e Então não podem ficar no mesmo item");
  }
}

export function validateReferenceLinks(component) {
  const references = component.sections.find(
    (section) => section.id === "references",
  );
  const blocks = references.blocks.filter((node) => node.type === "element");
  const standard = components.find((entry) => entry.id === "titulos")
    .sections.find((section) => section.id === "references")
    .blocks.filter((node) => node.type === "element");
  if (
    blocks[0]?.tag !== "h2" ||
    textOf([blocks[0]]) !== "Referências" ||
    !textOf([blocks[1]]).startsWith("Referências adicionais sobre componentes do tipo") ||
    ![2, 3].every((index) => textOf([blocks[index]]) === textOf([standard[index]]))
  )
    throw new Error(`Introdução de referências fora do padrão: ${component.id}`);
  const rawText = (node) =>
    node.type === "text" ? node.value : node.children.map(rawText).join("");
  for (const link of flatten(references.blocks).filter(
    (node) => node.tag === "a",
  )) {
    const url = new URL(link.attributes.href, "https://magoo.cc");
    const internal = ["magoo.cc", "www.magoo.cc"].includes(url.hostname);
    const nodes = flatten(link.children);
    const icons = nodes.filter((node) =>
      (node.attributes.class || "").split(/\s+/).includes("material-icons"),
    );
    const labels = nodes.filter(
      (node) =>
        (node.attributes.class || "").split(/\s+/).includes("sr-only") &&
        node.attributes["aria-hidden"] !== "true" &&
        rawText(node).trim(),
    );
    if (internal) {
      if (
        link.attributes.target === "_blank" ||
        icons.length ||
        labels.some((node) =>
          /externo|nova aba|nova janela/i.test(rawText(node)),
        )
      )
        throw new Error(
          `Referência interna fora do padrão: ${component.id}: ${link.id}`,
        );
    } else if (
      link.attributes.target !== "_blank" ||
      !["noopener", "noreferrer"].every((token) =>
        (link.attributes.rel || "").split(/\s+/).includes(token),
      ) ||
      icons.length !== 1 ||
      icons[0].attributes["aria-hidden"] !== "true" ||
      rawText(icons[0]) !== "open_in_new" ||
      labels.length !== 1 ||
      !/link externo, abre em uma nova aba/.test(rawText(labels[0]))
    ) {
      throw new Error(
        `Referência externa fora do padrão: ${component.id}: ${link.id}`,
      );
    }
  }
}

export function validateContent() {
  if (
    [
      catalog.contentVersion,
      ...(lock ? [lock.version, lock.packages[""].version] : []),
    ].some((v) => v !== packageVersion)
  )
    throw new Error("Versões divergentes entre pacote, lockfile e catálogo");
  const ids = new Set();
  for (const c of components) {
    if (c.contentVersion !== catalog.contentVersion)
      throw new Error(`Versão divergente: ${c.id}`);
    if (!validate(c))
      throw new Error(`${c.id}: ${JSON.stringify(validate.errors)}`);
    validateGherkin(c);
    validateInteractionContent(c);
    validateReferenceLinks(c);
    if (ids.has(c.id)) throw new Error(`ID duplicado: ${c.id}`);
    ids.add(c.id);
    if (c.sections.length !== new Set(c.sections.map((s) => s.id)).size)
      throw new Error(`Seção duplicada: ${c.id}`);
    if (c.path !== `componentes/${c.category}/${c.id}.html`)
      throw new Error(`Caminho inválido: ${c.id}`);
    const entry = catalog.components.find((e) => e.id === c.id);
    if (!entry || ["name", "category", "path"].some((k) => entry[k] !== c[k]))
      throw new Error(`Catálogo divergente: ${c.id}`);
    const nodes = flatten(c.sections.flatMap((s) => s.blocks)),
      nodeIds = new Set();
    for (const n of nodes) {
      if (nodeIds.has(n.id)) throw new Error(`ID de bloco duplicado: ${n.id}`);
      nodeIds.add(n.id);
      if (
        ![
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "ol",
          "ul",
          "li",
          "strong",
          "em",
          "b",
          "i",
          "span",
          "small",
          "br",
          "code",
          "a",
          "div",
          "pre",
          "blockquote",
          "kbd",
          "table",
          "thead",
          "tbody",
          "tr",
          "th",
          "td",
          "caption",
          "hr",
        ].includes(n.tag)
      )
        throw new Error(`Elemento não permitido: ${n.tag}`);
      for (const [key, value] of Object.entries(n.attributes)) {
        if (key === "style" || key.toLowerCase().startsWith("on"))
          throw new Error(`Atributo não permitido: ${key}`);
        if (["href", "src"].includes(key) && !/^(https?:\/\/|#)/.test(value))
          throw new Error(`URL não permitida: ${value}`);
      }
    }
  }
  return { components: components.length, version: catalog.contentVersion };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  console.log(validateContent());
