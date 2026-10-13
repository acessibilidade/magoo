import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import { load } from "cheerio";
import { components } from "../js/lib/catalog.js";
import { root } from "../js/lib/paths.js";
import {
  locales,
  localizePage,
  localizedPath,
  localizedUrl,
} from "../js/build/i18n.js";

test("Todas as páginas têm idiomas, destinos locais válidos e SEO correspondente", async () => {
  for (const locale of locales) {
    for (const path of ["", "404.html", ...components.map((c) => c.path)]) {
      const file = path
        ? localizedPath(locale.id, path).slice(1)
        : `${locale.id}/index.html`;
      const $ = load(await readFile(new URL(file, root), "utf8"), {
        scriptingEnabled: false,
      });
      assert.equal($("html").attr("lang"), locale.lang, file);
      for (const container of $("body, header, main, footer").toArray())
        assert.equal(container.attribs.lang, locale.lang, file);
      assert.equal($('[data-language="pt-br"]').attr("lang"), "pt-BR");
      assert.equal($('[data-language="en"]').attr("lang"), "en-US");
      assert.equal($(".language-option").length, locales.length);
      assert.equal(
        $('.language-option[aria-pressed="true"]').attr("data-language"),
        locale.id,
      );
      assert.equal($(".language-label").text(), locale.selectLabel);
      assert.equal($(".main-menu").prop("tagName"), "UL");
      assert.equal($(".main-menu").attr("aria-label"), locale.ui.mainMenu);
      assert.equal($(".main-menu > li > a").length, $(".main-menu a").length);
      assert.equal($(".language-options").prop("tagName"), "UL");
      assert.equal(
        $(".language-options").attr("aria-labelledby"),
        "language-label",
      );
      assert.equal(
        $(".language-options > li > form > button").length,
        locales.length,
      );
      assert.equal($("#translation-label.sr-only").length, 1);
      assert.ok(
        !/<[a-zA-Z](?:[^"'<>]|"[^"]*"|'[^']*')*\n(?:[^"'<>]|"[^"]*"|'[^']*')*>/.test(
          $.html(),
        ),
        file,
      );
      assert.equal($("#translation-label").text(), locale.otherLabel);
      assert.equal(
        $(".translation-control").attr("data-page-language"),
        locale.googleLanguage,
      );
      assert.equal(
        $('link[rel="canonical"]').attr("href"),
        localizedUrl(locale.id, path),
      );
      assert.equal(
        $('meta[property="og:url"]').attr("content"),
        localizedUrl(locale.id, path),
      );
      assert.equal(
        $('meta[property="og:locale"]').attr("content"),
        locale.lang.replace("-", "_"),
      );
      assert.equal(
        $('meta[name="twitter:card"]').attr("content"),
        "summary_large_image",
      );
      for (const other of locales) {
        assert.equal(
          $(`link[hreflang="${other.lang}"]`).attr("href"),
          localizedUrl(other.id, path),
        );
        assert.equal(
          $(`[data-language="${other.id}"]`).attr("data-url"),
          localizedPath(other.id, path),
        );
      }
      assert.equal($("style,[style],script:not([src])").length, 0, file);
      const ids = $("[id]")
        .map((_, el) => el.attribs.id)
        .get();
      assert.equal(ids.length, new Set(ids).size, file);
      assert.equal($(".language-options script").length, 0);
      for (const element of $(
        "a[href],link[href],script[src],img[src],form[action],option[value]",
      ).toArray()) {
        const target =
          element.attribs.href ??
          element.attribs.src ??
          element.attribs.action ??
          element.attribs.value;
        if (!target || /^(https?:|\/\/|mailto:)/.test(target)) continue;
        if (target.startsWith("#")) {
          assert.ok(ids.includes(target.slice(1)), `${file}: ${target}`);
          continue;
        }
        assert.ok(target.startsWith("/"), `${file}: ${target}`);
        const pathname = new URL(target, "https://magoo.cc").pathname.slice(1);
        const destination = locales.some((other) => other.id === pathname)
          ? `${pathname}/index.html`
          : pathname;
        await readFile(new URL(destination, root));
        if (
          pathname.includes("componentes/") &&
          !$(element).closest(".language-options").length
        )
          assert.ok(pathname.startsWith(locale.id + "/"));
      }
    }
  }
});

test("Inglês contém a documentação completa e preserva referências e painéis", async () => {
  const strings = JSON.parse(
    await readFile(new URL("content/locales/en.json", root), "utf8"),
  ).strings;
  for (const c of components) {
    const pt = load(await readFile(new URL(`pt-br/${c.path}`, root), "utf8"));
    const en = load(
      await readFile(
        new URL(localizedPath("en", c.path).slice(1), root),
        "utf8",
      ),
    );
    assert.equal(en("h1").text(), strings[c.name]);
    for (const section of c.sections) {
      const selector = `#${section.panelId}`;
      assert.equal(en(selector).length, 1);
      assert.equal(en(`${selector} *`).length, pt(`${selector} *`).length);
      const links = ($) =>
        $(`${selector} a[href^="https:"]`)
          .map((_, element) => element.attribs.href)
          .get();
      assert.deepEqual(links(en), links(pt));
      assert.ok(
        !/Questionamentos|QUANDO|OUÇO|VEJO|Projetando/.test(
          en(selector).text(),
        ),
        c.id,
      );
    }
  }
});

test("Build rejeita novos textos sem tradução, em vez de publicar português em /en", () => {
  assert.throws(
    () =>
      localizePage(
        "<html><body><p>Texto novo sem tradução de teste</p></body></html>",
        "test.html",
        locales.find((locale) => locale.id === "en"),
      ),
    /Tradução ausente/,
  );
});

test("Troca de idioma mantém consulta e âncora atuais e limpa a tradução automática", async () => {
  const listeners = new Map();
  const link = {
    dataset: { url: "/en/componentes/estrutura/listas.html" },
    form: {
      addEventListener(event, callback) {
        listeners.set(event, callback);
      },
    },
  };
  const cookies = [];
  let navigated;
  const document = {
    querySelectorAll: () => [link],
    set cookie(value) {
      cookies.push(value);
    },
  };
  const window = {
    location: {
      href: "https://magoo.cc/pt-br/componentes/estrutura/listas.html",
      assign(value) {
        navigated = value;
      },
      hostname: "magoo.cc",
      pathname: "/pt-br/componentes/estrutura/listas.html",
      search: "?source=library",
      hash: "#aba-ref-conteudo",
    },
  };
  vm.runInNewContext(await readFile(new URL("js/languages.js", root), "utf8"), {
    document,
    window,
    URL,
  });
  window.location.hash = "#aba-metodo-conteudo";
  let prevented = false;
  listeners.get("submit")({
    preventDefault() {
      prevented = true;
    },
  });
  assert.equal(prevented, true);
  assert.equal(
    navigated,
    "https://magoo.cc/en/componentes/estrutura/listas.html?source=library#aba-metodo-conteudo",
  );
  assert.ok(
    cookies.some((cookie) =>
      cookie.includes("googtrans=; Max-Age=0; path=/; domain=.magoo.cc"),
    ),
  );
});

test("Rotas geradas preservam referências de captura e evitam DirectorySlash", async () => {
  const routing = await readFile(new URL(".htaccess", root), "utf8");
  assert.ok(routing.includes("RewriteRule ^$ /pt-br [R=302,L]"));
  assert.ok(routing.includes("RewriteRule ^(pt-br|en)$ /$1/index.html [END]"));
  assert.ok(
    routing.includes(
      "RewriteRule ^componentes/(.+\\.html)$ /pt-br/componentes/$1 [R=301,L]",
    ),
  );
  for (const locale of locales) {
    const config = await readFile(
      new URL(`${locale.id}/.htaccess`, root),
      "utf8",
    );
    assert.ok(config.includes("DirectorySlash Off"));
    assert.ok(config.includes("RewriteOptions AllowNoSlash"));
    assert.ok(config.includes(`RewriteCond %{REQUEST_URI} ^/${locale.id}/?$`));
    assert.ok(config.includes(`RewriteRule ^ /${locale.id}/index.html [END]`));
    assert.ok(config.includes(`ErrorDocument 404 /${locale.id}/404.html`));
  }
});

test("URLs inglesas traduzidas mantêm canônica própria e aliases antigos", async () => {
  assert.equal(
    localizedPath("en", "componentes/mensagens/toasts.html"),
    "/en/components/messages/toasts.html",
  );
  for (const c of components) {
    const page = load(
      await readFile(
        new URL(localizedPath("en", c.path).slice(1), root),
        "utf8",
      ),
    );
    assert.equal(
      page('link[rel="canonical"]').attr("href"),
      localizedUrl("en", c.path),
    );
    assert.equal(
      page('[data-language="pt-br"]').attr("data-url"),
      localizedPath("pt-br", c.path),
    );
    const alias = load(await readFile(new URL(`en/${c.path}`, root), "utf8"));
    assert.equal(
      alias("html").attr("data-route-redirect"),
      localizedPath("en", c.path),
    );
    assert.equal(
      alias('meta[name="robots"]').attr("content"),
      "noindex, follow",
    );
  }
});
