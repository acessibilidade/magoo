import Ajv from "ajv";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { root } from "../lib/paths.js";
import { catalog, components, flatten } from "../lib/catalog.js";
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
