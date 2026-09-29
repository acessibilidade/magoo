import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";
import { catalog, components, flatten, search } from "../js/lib/catalog.js";
import { root } from "../js/lib/paths.js";
import { validateContent } from "../js/build/validate.js";

test("Base completa e IDs únicos validados", () => {
  assert.equal(validateContent().components, 23);
  assert.equal(catalog.planned.length, 5);
  assert.equal(search("", "formularios").length, 6);
});
test("HTML gerado contém as cinco seções e todos os links de referência", async () => {
  for (const c of components) {
    const $ = load(await readFile(new URL(c.path, root), "utf8"));
    assert.equal($(".component-heading h1").text(), c.name);
    assert.equal($('[role="tabpanel"]').length, 5);
    for (const s of c.sections) {
      assert.equal($(`#${s.panelId}`).length, 1);
      for (const link of flatten(s.blocks).filter((n) => n.tag === "a"))
        assert.ok(
          $(`#${s.panelId} a`)
            .toArray()
            .some((el) => el.attribs.href === link.attributes.href),
        );
    }
    assert.equal($(".page-source-note").length, 1);
    assert.equal($(".reference-shortcut a").attr("href"), "#aba-ref-conteudo");
  }
});

test("Geração preserva todo o texto da fonte, IDs HTML e destinos locais", async () => {
  const rawText = (nodes) =>
    nodes
      .map((n) => (n.type === "text" ? n.value : rawText(n.children)))
      .join("");
  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  for (const c of components) {
    const $ = load(await readFile(new URL(c.path, root), "utf8"));
    const ids = $("[id]")
      .toArray()
      .map((el) => el.attribs.id);
    assert.equal(ids.length, new Set(ids).size, c.id);
    for (const section of c.sections)
      assert.equal(
        normalize($(`#${section.panelId}`).text()),
        normalize(rawText(section.blocks)),
        `${c.id}/${section.id}`,
      );
    assert.equal($("style, [style], script:not([src])").length, 0);
    assert.ok(!$.html().includes("MAGOO_SECTION_"));
    for (const el of $(
      "a[href], link[href], script[src], img[src]",
    ).toArray()) {
      const target = el.attribs.href || el.attribs.src;
      if (/^https?:/.test(target)) continue;
      if (target.startsWith("#")) {
        assert.ok(ids.includes(target.slice(1)), target);
        continue;
      }
      await readFile(new URL(target.split("#")[0], new URL(c.path, root)));
    }
  }
});
