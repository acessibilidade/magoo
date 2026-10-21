import { readFile, writeFile, mkdir } from "node:fs/promises";
import { posix } from "node:path";
import { load } from "cheerio";
import { format } from "prettier";
import { root } from "../lib/paths.js";

export const localeConfig = JSON.parse(
  await readFile(new URL("content/locales/locales.json", root), "utf8"),
);
export const locales = localeConfig.languages;
if (!locales.some((locale) => locale.id === localeConfig.default))
  throw new Error("Idioma padrão não cadastrado.");
if (new Set(locales.map((locale) => locale.id)).size !== locales.length)
  throw new Error("IDs de idiomas duplicados.");
for (const locale of locales) {
  if (!/^[a-z]{2}(?:-[a-z]{2})?$/.test(locale.id))
    throw new Error(`ID de idioma inválido: ${locale.id}`);
  if (locale.id !== localeConfig.default && !locale.dictionary)
    throw new Error(`Dicionário obrigatório: ${locale.id}`);
}
const dictionaries = new Map();
for (const locale of locales) {
  if (!locale.dictionary) continue;
  const dictionary = JSON.parse(
    await readFile(
      new URL(`content/locales/${locale.dictionary}`, root),
      "utf8",
    ),
  );
  if (dictionary.locale !== locale.lang)
    throw new Error(`Idioma divergente no dicionário: ${locale.id}`);
  dictionaries.set(locale.id, dictionary.strings);
}
export const normalize = (value) => value.replace(/\s+/g, " ").trim();
export const localizedPath = (locale, path = "") => {
  const segments =
    locales.find((entry) => entry.id === locale)?.routeSegments || {};
  const translated = path
    .split("/")
    .map((part) => {
      const extension = part.endsWith(".html") ? ".html" : "";
      const stem = extension ? part.slice(0, -5) : part;
      return (segments[stem] || stem) + extension;
    })
    .join("/");
  return `/${locale}${path && path !== "index.html" ? `/${translated}` : ""}`;
};
export const localizedUrl = (locale, path = "") =>
  `https://magoo.cc${localizedPath(locale, path)}`;

// Only prose is translated. Code, icon names and explicit no-translate regions stay intact.
const keyNames = new Set([
  "barra de espaço",
  "Barra de espaço",
  "BARRA DE ESPAÇO",
  "espaço",
  "Espaço",
  "setas direcionais",
  "Setas direcionais",
  "setas",
  "seta para direita",
  "seta para esquerda",
  "seta para cima",
  "seta para baixo",
  "Seta para a direita",
  "Seta para a esquerda",
]);
export function visitMessages($, visit) {
  $("*")
    .contents()
    .each((_, node) => {
      if (node.type !== "text") return;
      if (
        $(node).parents('script,style,pre,.material-icons,[translate="no"]')
          .length
      )
        return;
      if (
        $(node).parents("code").length &&
        !$(node).closest('code[data-interaction-label="true"]').length &&
        !keyNames.has(normalize(node.data))
      )
        return;
      if (normalize(node.data)) node.data = visit(node.data);
    });
  $("*").each((_, element) => {
    if ($(element).closest('[translate="no"]').length) return;
    for (const attribute of [
      "alt",
      "title",
      "aria-label",
      "label",
      "placeholder",
    ]) {
      const value = $(element).attr(attribute);
      if (value) $(element).attr(attribute, visit(value));
    }
  });
  $(
    'meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[property="og:image:alt"],meta[name="twitter:title"],meta[name="twitter:description"],meta[name="twitter:image:alt"]',
  ).each((_, element) => {
    $(element).attr("content", visit($(element).attr("content")));
  });
}

function rewriteLocalUrls($, path, locale) {
  // Same-site content links are navigation within the current language.
  $("a[href]").each((_, element) => {
    const value = $(element).attr("href");
    if (!/^https?:\/\//i.test(value)) return;
    const url = new URL(value);
    if (["magoo.cc", "www.magoo.cc"].includes(url.hostname))
      $(element)
        .attr("href", url.pathname + url.search + url.hash)
        .removeAttr("target")
        .removeAttr("rel");
  });
  const base = new URL(path || "index.html", "https://magoo.cc/");
  const rewrite = (value) => {
    if (!value || /^(?:#|[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return value;
    const url = new URL(value, base);
    const target = url.pathname.slice(1);
    if (
      target === "" ||
      target === "index.html" ||
      target === "404.html" ||
      target === "CHANGELOG.md" ||
      target.startsWith("componentes/") ||
      target.startsWith("categorias/")
    )
      return localizedPath(locale.id, target) + url.search + url.hash;
    return url.pathname + url.search + url.hash;
  };
  $("a[href],link[href],form[action],script[src],img[src],option[value]").each(
    (_, element) => {
      const attributes = element.attribs;
      const attribute =
        element.name === "option"
          ? "value"
          : attributes.href !== undefined
            ? "href"
            : attributes.action !== undefined
              ? "action"
              : "src";
      if (attributes[attribute] !== undefined)
        $(element).attr(attribute, rewrite(attributes[attribute]));
    },
  );
}

export function localizePage(html, path, locale) {
  const $ = load(html, { scriptingEnabled: false });
  const strings = dictionaries.get(locale.id);
  if (strings)
    visitMessages($, (value) => {
      const key = normalize(value);
      if (!Object.hasOwn(strings, key) || !strings[key])
        throw new Error(
          `Tradução ausente (${locale.id}, ${path || "home"}): ${key}`,
        );
      const translated = value.replace(/\S[\s\S]*\S|\S/, () => strings[key]);
      // A translated inline fragment may contain only punctuation after code.
      return /^[.,;:!?)]/.test(strings[key])
        ? translated.trimStart()
        : translated;
    });
  $("html").attr("lang", locale.lang);
  // Expose language on content containers as well as the document for screen readers.
  // Nested language choices retain their own, more specific language attributes.
  $("body, header, main, footer").attr("lang", locale.lang);
  rewriteLocalUrls($, path, locale);
  if (locale.initiativeImage) {
    $(".initiative").addClass("initiative-logo-only");
    $(".initiative img").attr(locale.initiativeImage);
  }

  const canonical = localizedUrl(locale.id, path);
  $('link[rel="canonical"]').attr("href", canonical);
  $('meta[property="og:url"]').attr("content", localizedUrl(locale.id, path));
  $('meta[property="og:locale"]').attr(
    "content",
    locale.lang.replace("-", "_"),
  );
  $(
    'link[rel="alternate"][hreflang],meta[property="og:locale:alternate"]',
  ).remove();
  for (const other of locales) {
    $("<link>")
      .attr({
        rel: "alternate",
        hreflang: other.lang,
        href: localizedUrl(other.id, path),
      })
      .appendTo("head");
    if (other.id !== locale.id)
      $("<meta>")
        .attr({
          property: "og:locale:alternate",
          content: other.lang.replace("-", "_"),
        })
        .appendTo("head");
  }
  $("<link>")
    .attr({
      rel: "alternate",
      hreflang: "x-default",
      href: localizedUrl(localeConfig.default, path),
    })
    .appendTo("head");
  const mainNavigation = $(".utility-bar > nav");
  const mainList = $("<ul>")
    .addClass("main-menu")
    .attr({ "aria-label": locale.ui.mainMenu, role: "list" });
  mainNavigation.children("a").each((_, element) => {
    $("<li>").append(element).appendTo(mainList);
  });
  mainNavigation.empty().append(mainList);
  const controls = $("<div>").addClass("language-controls");
  const native = $("<div>")
    .addClass("language-selector notranslate")
    .attr({ translate: "no" });
  $("<span>")
    .attr("id", "language-label")
    .addClass("language-label")
    .text(locale.selectLabel)
    .appendTo(native);
  const options = $("<ul>")
    .addClass("language-options")
    .attr({ "aria-labelledby": "language-label", role: "list" })
    .appendTo(native);
  for (const other of locales) {
    const link = $("<button>")
      .addClass("language-option")
      .attr({
        type: "submit",
        "data-url": localizedPath(other.id, path),
        "aria-pressed": String(other.id === locale.id),
        lang: other.lang,
        "data-language": other.id,
      });
    $("<span>")
      .addClass("language-option-label")
      .text(other.label)
      .appendTo(link);
    if (other.id === locale.id) {
      $("<span>")
        .addClass("material-icons")
        .attr("aria-hidden", "true")
        .text("check")
        .prependTo(link);
    }
    const item = $("<li>").appendTo(options);
    const form = $("<form>")
      .attr({ action: localizedPath(other.id, path), method: "get" })
      .appendTo(item);
    link.appendTo(form);
  }
  native.appendTo(controls);
  const translation = $(".translation-control");
  translation
    .find("#translation-label")
    .addClass("sr-only")
    .text(locale.otherLabel);
  translation.attr({
    "data-page-language": locale.googleLanguage,
    "data-other-label": locale.otherLabel,
  });
  translation.before(controls);
  translation.appendTo(controls);
  $("<script>")
    .attr({ src: `/js/locales/${locale.id}.js`, defer: "" })
    .insertBefore('script[src="/js/main.js"],script[src="/js/translate.js"]');
  // One runtime script per page, even when both main and translation scripts exist.
  $(`script[src="/js/locales/${locale.id}.js"]`).slice(1).remove();
  if (!$("script[src='/js/languages.js']").length)
    $("<script>").attr({ src: "/js/languages.js", defer: "" }).appendTo("head");
  return $.html();
}

export async function writeLocalizedPages(html, path = "") {
  for (const locale of locales) {
    const destination = path
      ? localizedPath(locale.id, path).slice(1)
      : `${locale.id}/index.html`;
    await mkdir(new URL(posix.dirname(destination) + "/", root), {
      recursive: true,
    });
    if (path && destination !== `${locale.id}/${path}`) {
      await mkdir(new URL(posix.dirname(`${locale.id}/${path}`) + "/", root), {
        recursive: true,
      });
      const alias = load(localizePage(html, path, locale), {
        scriptingEnabled: false,
      });
      alias("html").attr("data-route-redirect", localizedPath(locale.id, path));
      alias('meta[name="robots"]').remove();
      alias("<meta>")
        .attr({ name: "robots", content: "noindex, follow" })
        .appendTo("head");
      alias("<script>")
        .attr({ src: "/js/route-redirect.js", defer: "" })
        .appendTo("head");
      await writeFile(
        new URL(`${locale.id}/${path}`, root),
        await format(alias.html(), {
          parser: "html",
          printWidth: 10000,
          htmlWhitespaceSensitivity: "css",
        }),
      );
    }
    await writeFile(
      new URL(destination, root),
      await format(localizePage(html, path, locale), {
        parser: "html",
        printWidth: 10000,
        htmlWhitespaceSensitivity: "css",
      }),
    );
  }
}
export async function writeLocaleRuntime() {
  await mkdir(new URL("js/locales/", root), { recursive: true });
  for (const locale of locales) {
    const source = `"use strict";\nwindow.magooMessages = ${JSON.stringify(locale.ui, null, 2)};\n`;
    await writeFile(
      new URL(`js/locales/${locale.id}.js`, root),
      await format(source, { parser: "babel", printWidth: 90 }),
    );
  }
}

export async function writeLocaleRouting() {
  const path = new URL(".htaccess", root);
  const current = await readFile(path, "utf8");
  const ids = locales.map((locale) => locale.id).join("|");
  const rules = `# BEGIN MAGOO LANGUAGES (gerado por npm run build)
RewriteRule ^$ /${localeConfig.default} [R=302,L]
RewriteRule ^index\\.html$ /${localeConfig.default} [R=301,L]
RewriteCond %{THE_REQUEST} \\s/+(?:${ids})/(?:index\\.html)?[?\\s]
RewriteRule ^(${ids})/(?:index\\.html)?$ /$1 [R=301,L]
RewriteRule ^(${ids})$ /$1/index.html [END]
RewriteRule ^componentes/(.+\\.html)$ /${localeConfig.default}/componentes/$1 [R=301,L]
# END MAGOO LANGUAGES`;
  const marker = /# BEGIN MAGOO LANGUAGES[\s\S]*?# END MAGOO LANGUAGES\n?/;
  const updated = marker.test(current)
    ? current.replace(marker, () => rules + "\n")
    : current.replace(
        /(RewriteRule \^\(\.\*\)\$ https:\/\/magoo\.cc\/\$1 \[R,L\]\n)/,
        (match) => match + "\n" + rules + "\n",
      );
  if (updated === current && !marker.test(current))
    throw new Error("Local de inserção de rotas não encontrado.");
  await writeFile(
    path,
    updated.replace(
      /errordocument 404 .*$/im,
      `ErrorDocument 404 /${localeConfig.default}/404.html`,
    ),
  );
  for (const locale of locales) {
    await writeFile(
      new URL(`${locale.id}/.htaccess`, root),
      `DirectorySlash Off\nDirectoryIndex index.html\nErrorDocument 404 /${locale.id}/404.html\nRewriteEngine On\nRewriteOptions AllowNoSlash\nRewriteCond %{THE_REQUEST} \\s/+${locale.id}/(?:index\\.html)?[?\\s]\nRewriteRule ^ /${locale.id} [R=301,L]\nRewriteCond %{REQUEST_URI} ^/${locale.id}/?$\nRewriteRule ^ /${locale.id}/index.html [END]\n` +
        (locale.routeSegments
          ? "" +
            Object.entries(
              JSON.parse(
                await readFile(new URL("content/catalog.json", root), "utf8"),
              ).components,
            )
              .map(([, component]) => component.path)
              .filter(Boolean)
              .filter(
                (path) =>
                  localizedPath(locale.id, path) !== `/${locale.id}/${path}`,
              )
              .map(
                (path) =>
                  `RewriteRule ^${path.replaceAll(".", "\\.")}$ ${localizedPath(locale.id, path)} [R=301,L]`,
              )
              .join("\n") +
            "\n"
          : ""),
    );
  }
}

export async function writeLocalizedChangelog(entries) {
  for (const locale of locales) {
    const strings = dictionaries.get(locale.id);
    const translate = (value) => {
      if (!strings) return value;
      if (!Object.hasOwn(strings, value))
        throw new Error(`Tradução ausente no changelog: ${value}`);
      return strings[value];
    };
    await writeFile(
      new URL(`${locale.id}/CHANGELOG.md`, root),
      `# ${translate("Registro de alterações (changelog)")}\n\n` +
        entries
          .map(
            (entry) =>
              `## ${entry.version}\n\n${entry.changes.map((change) => `- ${translate(change)}`).join("\n")}\n`,
          )
          .join("\n"),
    );
  }
}
