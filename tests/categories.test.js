import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";
import { components } from "../js/lib/catalog.js";
import { categoryNames, categoryPath } from "../js/build/categories.js";
import { locales, localizedPath } from "../js/build/i18n.js";
import { root } from "../js/lib/paths.js";

test("Índice marca somente o componente aberto em todas as rotas", async () => {
  for (const component of components) {
    const paths = new Set([
      component.path,
      ...locales.flatMap((locale) => [
        localizedPath(locale.id, component.path).slice(1),
        `${locale.id}/${component.path}`,
      ]),
    ]);
    for (const path of paths) {
      const $ = load(await readFile(new URL(path, root), "utf8"));
      const current = $(".sidebar a[aria-current]");
      const locale = locales.find((entry) => path.startsWith(`${entry.id}/`));
      assert.equal(current.length, 1, path);
      assert.equal(current.attr("aria-current"), "page", path);
      assert.equal(
        current.attr("href"),
        localizedPath(locale?.id || "pt-br", component.path),
        path,
      );
    }
  }
});

test("Todo componente fica acessível pelo seletor e pelos índices laterais nos dois idiomas", async () => {
  for (const locale of locales) {
    const expected = components
      .map((component) => localizedPath(locale.id, component.path))
      .sort();
    const home = load(
      await readFile(new URL(`${locale.id}/index.html`, root), "utf8"),
    );
    assert.deepEqual(
      home(".component-picker option[value]")
        .map((_, element) => home(element).attr("value"))
        .get()
        .filter(Boolean)
        .sort(),
      expected,
    );
    for (const component of components) {
      const $ = load(
        await readFile(
          new URL(localizedPath(locale.id, component.path).slice(1), root),
          "utf8",
        ),
      );
      assert.deepEqual(
        $(".sidebar nav a[href]")
          .map((_, element) => $(element).attr("href"))
          .get()
          .sort(),
        expected,
        `${locale.id}/${component.id}`,
      );
    }
  }
});

test("Categorias listam somente seus componentes e breadcrumbs seguem a hierarquia", async () => {
  for (const locale of locales) {
    for (const category of Object.keys(categoryNames)) {
      const $ = load(
        await readFile(
          new URL(
            localizedPath(locale.id, categoryPath(category)).slice(1),
            root,
          ),
          "utf8",
        ),
      );
      assert.equal($(".page-breadcrumb ol > li").length, 2);
      assert.deepEqual(
        $(".sidebar nav a[href]")
          .map((_, element) => $(element).attr("href"))
          .get()
          .sort(),
        components
          .map((component) => localizedPath(locale.id, component.path))
          .sort(),
      );
      assert.equal($("[aria-current=page]").length, 1);
      assert.equal(
        $(".page-breadcrumb [aria-current='page']").closest("a").length,
        0,
      );
      assert.deepEqual(
        $(".category-component-list a")
          .map((_, el) => $(el).attr("href"))
          .get(),
        components
          .filter((c) => c.category === category)
          .map((c) => localizedPath(locale.id, c.path)),
      );
      assert.ok(
        $(".category-component-list p")
          .toArray()
          .every((el) => $(el).text().trim()),
      );
    }
    for (const component of components) {
      const $ = load(
        await readFile(
          new URL(localizedPath(locale.id, component.path).slice(1), root),
          "utf8",
        ),
      );
      const nav = $(".page-breadcrumb");
      assert.equal(nav.find("ol > li").length, 3);
      assert.deepEqual(
        nav
          .find("a")
          .map((_, el) => $(el).attr("href"))
          .get(),
        [
          localizedPath(locale.id),
          localizedPath(locale.id, categoryPath(component.category)),
        ],
      );
      assert.equal(nav.find("li:last-child a").length, 0);
      assert.equal(nav.find("[aria-current='page']").length, 1);
      assert.equal(nav.find("[tabindex]").length, 0);
      assert.equal(
        nav.find(".breadcrumb-separator[aria-hidden='true']").length,
        2,
      );
    }
  }
});
