import { readFile } from "node:fs/promises";
import { root } from "./paths.js";
export const catalog = JSON.parse(
  await readFile(new URL("content/catalog.json", root), "utf8"),
);
export const components = await Promise.all(
  catalog.components.map((c) =>
    readFile(new URL(`content/componentes/${c.id}.json`, root), "utf8").then(
      JSON.parse,
    ),
  ),
);
export function getComponent(id) {
  const c = components.find((c) => c.id === id);
  if (!c) throw new Error(`Componente não encontrado: ${id}`);
  return c;
}
export function textOf(nodes) {
  return nodes
    .map((n) =>
      n.type === "text"
        ? n.value
        : n.attributes?.["aria-hidden"] === "true" ||
            n.attributes?.class?.split(" ").includes("sr-only")
          ? ""
          : textOf(n.children),
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
export function flatten(nodes) {
  return nodes.flatMap((n) =>
    n.type === "element" ? [n, ...flatten(n.children)] : [],
  );
}
export function readable(c) {
  return {
    ...c,
    sections: c.sections.map((s) => ({
      id: s.id,
      title: s.title,
      items: flatten(s.blocks)
        .filter((n) => /^(h[2-6]|p|li)$/.test(n.tag))
        .map((n) => ({ id: n.id, type: n.tag, text: textOf([n]) })),
      references: flatten(s.blocks)
        .filter(
          (n) => n.tag === "a" && /^https?:/.test(n.attributes.href || ""),
        )
        .map((n) => ({ id: n.id, label: textOf([n]), url: n.attributes.href })),
    })),
  };
}
export function search(query = "", category) {
  const normalize = (s) =>
    s
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return components
    .filter(
      (c) =>
        (!category || c.category === category) &&
        terms.every((t) =>
          normalize(
            `${c.name} ${c.summary} ${c.sections.map((s) => textOf(s.blocks)).join(" ")}`,
          ).includes(t),
        ),
    )
    .map((c) => ({
      id: c.id,
      name: c.name,
      category: c.category,
      summary: c.summary,
      path: c.path,
      contentVersion: c.contentVersion,
    }));
}
