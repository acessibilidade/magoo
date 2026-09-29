import { readFile, writeFile } from "node:fs/promises";
import { load } from "cheerio";
import { format } from "prettier";
import { catalog, components } from "../lib/catalog.js";
import { root } from "../lib/paths.js";
import { validateContent } from "./validate.js";
validateContent();
const escape = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
export function htmlOf(nodes) {
  return nodes
    .map((n) =>
      n.type === "text"
        ? escape(n.value)
        : `<${n.tag}${Object.entries(n.attributes)
            .map(([k, v]) => ` ${k}="${escape(v)}"`)
            .join(
              "",
            )}>${["br", "hr"].includes(n.tag) ? "" : htmlOf(n.children) + `</${n.tag}>`}`,
    )
    .join("");
}
function updateSharingMetadata($, path) {
  const url = new URL(path, "https://magoo.cc/").href;
  const image = "https://magoo.cc/img/magoo-share.jpg";
  const metadata = {
    "og:url": url,
    "og:image": image,
    "og:image:secure_url": image,
    "og:image:type": "image/jpeg",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:alt": "Magoo — Sua biblioteca pré-design system",
  };
  for (const [property, content] of Object.entries(metadata)) {
    $(`meta[property="${property}"]`).remove();
    $("<meta>").attr({ property, content }).appendTo("head");
  }
  const tags = {
    "twitter:card": "summary_large_image",
    "twitter:image": image,
    "twitter:image:alt": "Magoo — Sua biblioteca pré-design system",
    author: "Marcelo Sales",
  };
  for (const [name, content] of Object.entries(tags)) {
    $(`meta[name="${name}"]`).remove();
    $("<meta>").attr({ name, content }).appendTo("head");
  }
  $('link[rel="canonical"]').remove();
  $("<link>").attr({ rel: "canonical", href: url }).appendTo("head");
}
function updateLinks($, prefix) {
  for (const c of components) {
    $(`a[href="${prefix}${c.path}"]`).each((_, el) => {
      const icon = $(el).children().toArray();
      $(el).empty().text(c.name);
      $(el).append(icon);
    });
  }
}
for (const c of components) {
  let html = await readFile(new URL(`templates/${c.path}`, root), "utf8");
  c.sections.forEach((s, i) => {
    html = html.replace(`MAGOO_SECTION_${i}`, () => htmlOf(s.blocks));
  });
  const $ = load(html);
  updateSharingMetadata($, c.path);
  $(".component-heading h1").text(c.name);
  $(".component-heading > p").eq(1).text(c.summary);
  $("title").text(`${c.name} | Magoo`);
  $(
    'meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]',
  ).attr("content", c.summary);
  $('meta[property="og:title"],meta[name="twitter:title"]').attr(
    "content",
    `${c.name} | Magoo`,
  );
  for (const other of components) {
    $(`.sidebar a[href="../${other.category}/${other.id}.html"]`).each(
      (_, el) => {
        const children = $(el).children().toArray();
        $(el).empty().text(other.name).append(children);
      },
    );
  }
  for (const section of c.sections)
    $(`[aria-controls="${section.panelId}"]`).text(section.title);
  await writeFile(
    new URL(c.path, root),
    await format($.html(), { parser: "html", printWidth: 90 }),
  );
}
const $ = load(await readFile(new URL("templates/index.html", root), "utf8"));
updateSharingMetadata($, "");
updateLinks($, "");
for (const c of components) $(`option[value="${c.path}"]`).text(c.name);
$(".material-version").text(`Versão do material: ${catalog.contentVersion}`);
await writeFile(
  new URL("index.html", root),
  await format($.html(), { parser: "html", printWidth: 90 }),
);
const errorPage = load(
  await readFile(new URL("templates/404.html", root), "utf8"),
);
updateSharingMetadata(errorPage, "404.html");
await writeFile(
  new URL("404.html", root),
  await format(errorPage.html(), { parser: "html", printWidth: 90 }),
);
console.log(
  `Site gerado: ${components.length} componentes; conteúdo ${catalog.contentVersion}.`,
);
