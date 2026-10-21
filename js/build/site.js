import {
  categoryNames,
  categoryPath,
  breadcrumb,
  categoryIndex,
} from "./categories.js";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { load } from "cheerio";
import { format } from "prettier";
import { catalog, components } from "../lib/catalog.js";
import { root } from "../lib/paths.js";
import { validateContent } from "./validate.js";
import { canonicalUrl, writeDiscovery } from "./discovery.js";
import {
  writeLocalizedPages,
  writeLocaleRuntime,
  localizePage,
  locales,
  localeConfig,
  writeLocaleRouting,
  writeLocalizedChangelog,
} from "./i18n.js";
validateContent();
await mkdir(new URL("downloads/", root), { recursive: true });
await copyFile(
  new URL("skills/magoo-figma-native/SKILL.md", root),
  new URL("downloads/magoo-figma-native.md", root),
);
await copyFile(
  new URL("skills/magoo-figma-native/SKILL.en.md", root),
  new URL("downloads/magoo-figma-native.en.md", root),
);
await writeLocaleRuntime();
const defaultLocale = locales.find(
  (locale) => locale.id === localeConfig.default,
);
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
  const url = canonicalUrl(path);
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
// Complete navigation from the catalog so new entries appear in every shell.
function completeCatalogNavigation($, sidebarPrefix = "../") {
  for (const [category, name] of Object.entries(categoryNames)) {
    const entries = components.filter(
      (component) => component.category === category,
    );
    $(".sidebar nav h3").each((_, heading) => {
      if ($(heading).text().trim() !== name) return;
      const list = $(heading).next("ul");
      for (const component of entries) {
        const href = `${sidebarPrefix}${category}/${component.id}.html`;
        if (!list.find(`a[href="${href}"]`).length)
          list.append(
            $("<li>").append($("<a>").attr("href", href).text(component.name)),
          );
      }
    });
    $(".category > h3").each((_, heading) => {
      if ($(heading).text().trim() !== name) return;
      const list = $(heading).siblings("ul");
      for (const component of entries) {
        if (!list.find(`a[href="${component.path}"]`).length)
          list.append(
            $("<li>").append(
              $("<a>").attr("href", component.path).text(component.name),
            ),
          );
      }
    });
    const group = $(".component-picker optgroup").filter(
      (_, element) => $(element).attr("label") === name,
    );
    for (const component of entries) {
      if (!group.find(`option[value="${component.path}"]`).length)
        group.append(
          $("<option>").attr("value", component.path).text(component.name),
        );
    }
  }
}
const standardSourceNote = await readFile(
  new URL("templates/component-source-note.html", root),
  "utf8",
);
for (const c of components) {
  let html = await readFile(new URL(`templates/${c.path}`, root), "utf8");
  c.sections.forEach((s, i) => {
    html = html.replace(`MAGOO_SECTION_${i}`, () => htmlOf(s.blocks));
  });
  const $ = load(html);
  $(".page-source-note").replaceWith(standardSourceNote);
  completeCatalogNavigation($);
  $(".sidebar a[aria-current]").removeAttr("aria-current");
  $(`.sidebar a[href="../${c.category}/${c.id}.html"]`).attr(
    "aria-current",
    "page",
  );
  updateSharingMetadata($, c.path);
  $(".component-heading .eyebrow").replaceWith(breadcrumb(c.category, c));
  $(".component-heading h1").text(c.name);
  $(".component-heading > p").eq(0).text(c.summary);
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
  await writeLocalizedPages($.html(), c.path);
  await writeFile(
    new URL(c.path, root),
    await format(localizePage($.html(), c.path, defaultLocale), {
      parser: "html",
      printWidth: 10000,
      htmlWhitespaceSensitivity: "css",
    }),
  );
}
for (const [category, name] of Object.entries(categoryNames)) {
  const path = categoryPath(category);
  const $ = load(
    await readFile(new URL("templates/category.html", root), "utf8"),
  );
  completeCatalogNavigation($, "/componentes/");
  $(".component-heading .eyebrow").replaceWith(breadcrumb(category));
  $(".component-heading h1").text(name);
  $(".component-heading > p").text(
    "Explore os componentes desta categoria e consulte suas orientações de interação.",
  );
  $("#conteudo").html(
    categoryIndex(components.filter((c) => c.category === category)),
  );
  $("title").text(`${name} | Magoo`);
  $('meta[property="og:title"],meta[name="twitter:title"]').attr(
    "content",
    `${name} | Magoo`,
  );
  $(
    'meta[name="description"],meta[property="og:description"],meta[name="twitter:description"]',
  ).attr(
    "content",
    "Explore os componentes desta categoria e consulte suas orientações de interação.",
  );
  updateSharingMetadata($, path);
  await writeLocalizedPages($.html(), path);
}
const $ = load(await readFile(new URL("templates/index.html", root), "utf8"));
completeCatalogNavigation($);
const changelog = JSON.parse(
  await readFile(new URL("content/changelog.json", root), "utf8"),
);
if (changelog[0]?.version !== catalog.contentVersion)
  throw new Error("Changelog divergente da versão do catálogo.");
$(".changelog-entries").html(
  changelog
    .map(
      (entry) =>
        `<section class="changelog-entry" aria-labelledby="version-${escape(entry.version.replaceAll(".", "-"))}"><h3 id="version-${escape(entry.version.replaceAll(".", "-"))}">Versão ${escape(entry.version)}</h3><ul>${entry.changes.map((change) => `<li>${escape(change)}</li>`).join("")}</ul></section>`,
    )
    .join(""),
);
await writeFile(
  new URL("CHANGELOG.md", root),
  "# Histórico de versões\n\n" +
    changelog
      .map(
        (entry) =>
          `## ${entry.version}\n\n${entry.changes.map((change) => `- ${change}`).join("\n")}\n`,
      )
      .join("\n"),
);
updateSharingMetadata($, "");
updateLinks($, "");
$(".category > h3").each((_, element) => {
  const name = $(element).text().trim();
  const category = Object.keys(categoryNames).find(
    (key) => categoryNames[key] === name,
  );
  if (category)
    $(element)
      .empty()
      .append(
        $("<a>")
          .attr("href", `/${categoryPath(category)}`)
          .text(name),
      );
});
$(".category a[href]").each((_, el) => {
  if (!$(el).children(".material-icons").length)
    $(el).append(
      '<span class="material-icons notranslate" aria-hidden="true" translate="no">north_east</span>',
    );
});
$(".catalog-count").text(
  `${components.length} componentes · ${new Set(components.map((c) => c.category)).size} categorias`,
);
for (const c of components) $(`option[value="${c.path}"]`).text(c.name);
$(".material-version").text(`Versão do material: ${catalog.contentVersion}`);
await writeLocalizedPages($.html());
await writeFile(
  new URL("index.html", root),
  await format(localizePage($.html(), "", defaultLocale), {
    parser: "html",
    printWidth: 10000,
    htmlWhitespaceSensitivity: "css",
  }),
);
const errorPage = load(
  await readFile(new URL("templates/404.html", root), "utf8"),
);
updateSharingMetadata(errorPage, "404.html");
await writeLocalizedPages(errorPage.html(), "404.html");
await writeFile(
  new URL("404.html", root),
  await format(localizePage(errorPage.html(), "404.html", defaultLocale), {
    parser: "html",
    printWidth: 10000,
    htmlWhitespaceSensitivity: "css",
  }),
);
await writeLocalizedChangelog(changelog);
await writeLocaleRouting();
await writeDiscovery();
console.log(
  `Site gerado: ${components.length} componentes; conteúdo ${catalog.contentVersion}.`,
);
