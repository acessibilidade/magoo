// Migração inicial, deliberadamente bloqueada se a base já existir.
import { readFile, writeFile, readdir, mkdir, access } from "node:fs/promises";
import { load } from "cheerio";
import { root } from "../lib/paths.js";
try {
  await access(new URL("content/catalog.json", root));
  throw new Error("Base já existe; edite content/, não reimporte HTML.");
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
const sections = [
  "interaction-design",
  "interaction-methods",
  "acceptance-criteria",
  "considerations",
  "references",
];
const catalog = {
  schemaVersion: "1.0.0",
  contentVersion: "1.0.0",
  language: "pt-BR",
  author: "Marcelo Sales",
  components: [],
  planned: [],
};
for (const category of (await readdir(new URL("componentes/", root)))
  .filter((n) => !n.startsWith("."))
  .sort()) {
  for (const file of (await readdir(new URL(`componentes/${category}/`, root)))
    .filter((n) => n.endsWith(".html") && !n.startsWith("."))
    .sort()) {
    const path = `componentes/${category}/${file}`,
      html = await readFile(new URL(path, root), "utf8"),
      $ = load(html),
      id = file.slice(0, -5);
    const component = {
      schemaVersion: "1.0.0",
      contentVersion: "1.0.0",
      id,
      name: $(".component-heading h1").text().trim(),
      category,
      summary: $(".component-heading > p")
        .eq(1)
        .text()
        .replace(/\s+/g, " ")
        .trim(),
      author: "Marcelo Sales",
      language: "pt-BR",
      path,
      source: {
        kind: "educational-guidance",
        originalUrl: `https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-${id}.html`,
        note: "Conteúdo migrado sem nova revisão normativa. Adaptações dependem do contexto; não constitui certificação de acessibilidade.",
      },
      sections: [],
    };
    $('[role="tabpanel"]').each((i, el) => {
      let seq = 0;
      function node(n) {
        if (n.type === "text") return { type: "text", value: n.data };
        if (n.type !== "tag") return null;
        return {
          type: "element",
          id: `${id}.${sections[i]}.${++seq}`,
          tag: n.name,
          attributes: n.attribs,
          children: (n.children || []).map(node).filter(Boolean),
        };
      }
      component.sections.push({
        id: sections[i],
        title: $(`[aria-controls="${el.attribs.id}"]`).text().trim(),
        panelId: el.attribs.id,
        blocks: el.children.map(node).filter(Boolean),
      });
      $(el).html(`MAGOO_SECTION_${i}`);
    });
    const entry = { id, name: component.name, category, path };
    catalog.components.push(entry);
    await writeFile(
      new URL(`content/componentes/${id}.json`, root),
      JSON.stringify(component, null, 2) + "\n",
    );
    await mkdir(new URL(`templates/componentes/${category}/`, root), {
      recursive: true,
    });
    await writeFile(new URL(`templates/${path}`, root), $.html());
  }
}
const home = await readFile(new URL("index.html", root), "utf8"),
  $ = load(home);
$(".category").each((_, el) =>
  $(el)
    .find(".upcoming")
    .each((__, li) =>
      catalog.planned.push({
        category: $(el).find("h3").text().trim(),
        name: $(li).clone().children().remove().end().text().trim(),
        status: "in-development",
      }),
    ),
);
await writeFile(new URL("templates/index.html", root), home);
await writeFile(
  new URL("content/catalog.json", root),
  JSON.stringify(catalog, null, 2) + "\n",
);
console.log(`Migrados ${catalog.components.length} componentes.`);
