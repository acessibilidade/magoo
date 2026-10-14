import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";
import { catalog } from "../js/lib/catalog.js";
import { root } from "../js/lib/paths.js";

test("Changelog da home preserva versões, alterações e nomes dos novos componentes", async () => {
  const entries = JSON.parse(
    await readFile(new URL("content/changelog.json", root), "utf8"),
  );
  const $ = load(await readFile(new URL("index.html", root), "utf8"));
  assert.equal(entries[0].version, catalog.contentVersion);
  assert.equal($("#changelog").prop("tagName"), "DIALOG");
  assert.equal($("#changelog").attr("aria-labelledby"), "changelog-title");
  assert.equal($(".changelog-entry").length, entries.length);
  entries.forEach((entry, i) => {
    const section = $(".changelog-entry").eq(i);
    assert.equal(section.find("h3").text(), `Versão ${entry.version}`);
    assert.deepEqual(
      section
        .find("li")
        .toArray()
        .map((el) => $(el).text().replace(/\s+/g, " ").trim()),
      entry.changes,
    );
  });
  for (const name of [
    'Input "text"',
    'Input "email"',
    'Input "search"',
    'Input "password"',
    "Validação de formulários",
    "Tabbar",
  ])
    assert.ok(
      $(".changelog-entries").text().replace(/\s+/g, " ").includes(name),
    );
  assert.equal($("style, [style], script:not([src])").length, 0);
});

test("Abrir e fechar o changelog gerencia foco e bloqueio de rolagem", async () => {
  const events = new Map();
  const listen = (name) => (event, fn) => events.set(`${name}:${event}`, fn);
  const classes = new Set();
  let focused;
  const trigger = {
    hidden: true,
    addEventListener: listen("trigger"),
    focus() {
      focused = "trigger";
    },
  };
  const heading = {
    focus() {
      focused = "heading";
    },
  };
  const close = { addEventListener: listen("close") };
  const dialog = {
    open: false,
    showModal() {
      this.open = true;
    },
    close() {
      this.open = false;
      events.get("dialog:close")();
    },
    addEventListener: listen("dialog"),
    querySelector() {
      return close;
    },
  };
  const document = {
    querySelector(selector) {
      return selector === ".changelog-dialog"
        ? dialog
        : selector === ".changelog-trigger"
          ? trigger
          : null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return heading;
    },
    body: {
      classList: {
        contains: (name) => classes.has(name),
        add: (name) => classes.add(name),
        remove: (name) => classes.delete(name),
      },
    },
  };
  vm.runInNewContext(await readFile(new URL("js/main.js", root), "utf8"), {
    document,
    window: {
      matchMedia() {
        return { matches: false };
      },
      addEventListener() {},
      location: { hash: "" },
    },
  });
  assert.equal(trigger.hidden, false);
  events.get("trigger:click")();
  assert.equal(dialog.open, true);
  assert.equal(focused, "heading");
  assert.ok(classes.has("changelog-open"));
  events.get("close:click")();
  assert.equal(dialog.open, false);
  assert.equal(focused, "trigger");
  assert.ok(!classes.has("changelog-open"));
});

test("Home mostra contagem do catálogo e setas em todos os links de componentes", async () => {
  const $ = load(await readFile(new URL("index.html", root), "utf8"));
  assert.equal(
    $(".catalog-count").text(),
    `${catalog.components.length} componentes · ${new Set(catalog.components.map((c) => c.category)).size} categorias`,
  );
  const links = $(".category ul a[href]");
  assert.equal(
    $(".category > h3 > a[href]").length,
    new Set(catalog.components.map((c) => c.category)).size,
  );
  assert.equal(links.length, catalog.components.length);
  links.each((_, el) => {
    const icon = $(el).children(".material-icons");
    assert.equal(icon.length, 1);
    assert.equal(icon.text().trim(), "north_east");
    assert.equal(icon.attr("aria-hidden"), "true");
  });
});
