import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { load } from "cheerio";
import { catalog, components, flatten, search } from "../js/lib/catalog.js";
import { root } from "../js/lib/paths.js";
import { localizedPath } from "../js/build/i18n.js";
import { validateContent, validateGherkin } from "../js/build/validate.js";
import { validateInteractionContent } from "../js/lib/interaction-rules.js";

test("Base completa e IDs únicos validados", () => {
  assert.equal(validateContent().components, 37);
  assert.equal(catalog.planned.length, 0);
  assert.equal(search("", "formularios").length, 13);
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
            .some((el) => {
              const url = new URL(link.attributes.href, "https://magoo.cc");
              const expected = ["magoo.cc", "www.magoo.cc"].includes(
                url.hostname,
              )
                ? localizedPath("pt-br", url.pathname.slice(1)) +
                  url.search +
                  url.hash
                : link.attributes.href;
              return el.attribs.href === expected;
            }),
        );
    }
    assert.equal($(".page-source-note").length, 1);
    const sourceNote = $(".page-source-note").clone();
    sourceNote.find(".sr-only, .material-icons").remove();
    assert.equal(
      sourceNote
        .text()
        .replace(/\s+/g, " ")
        .replace(/\s+([.,])/g, "$1")
        .trim(),
      "Conteúdo autoral de Marcelo Sales, originalmente utilizado nas aulas do curso AccessBoost. As interações representam o formato padrão da indústria, mas em casos específicos podem ser customizadas (desde que haja instruções suficientes para que as pessoas compreendam a mudança de comportamento).",
    );
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
      const pathname = new URL(
        target,
        `https://magoo.cc/${c.path}`,
      ).pathname.slice(1);
      await readFile(
        new URL(
          /^(pt-br|en)$/.test(pathname) ? `${pathname}/index.html` : pathname,
          root,
        ),
      );
    }
  }
});

test("Gherkin rejeita perda de grupos, introdução e passos em lista", () => {
  const original = components.find(
    (component) => component.id === "carregamento-progresso",
  );
  const changed = (mutate) => {
    const component = structuredClone(original);
    const section = component.sections.find(
      (entry) => entry.id === "acceptance-criteria",
    );
    mutate(section);
    assert.throws(() => validateGherkin(component), /Gherkin fora do padrão/);
  };
  const text = (node) =>
    node.type === "text" ? node.value : node.children.map(text).join("");
  for (const group of [
    "Navegação por teclado",
    "Leitor de telas para desktop",
    "Leitor de telas para dispositivos móveis",
  ])
    changed((section) => {
      section.blocks = section.blocks.filter(
        (block) => !(block.tag === "h4" && text(block) === group),
      );
    });
  changed((section) => {
    section.blocks = section.blocks.filter(
      (block) => !(block.tag === "p" && text(block).includes("BDD")),
    );
  });
  changed((section) => {
    section.blocks.find((block) => block.tag === "ol").tag = "p";
  });
  changed((section) => {
    section.blocks.push({
      type: "element",
      id: "regression.paragraph",
      tag: "p",
      attributes: {},
      children: [
        {
          type: "text",
          value:
            "DADO um contexto, QUANDO interajo, ENTÃO percebo o resultado.",
        },
      ],
    });
  });
  changed((section) => {
    section.blocks
      .find((block) => block.tag === "ol")
      .children.find((block) => block.tag === "li").children = [
      {
        type: "text",
        value: "DADO um contexto, QUANDO interajo, ENTÃO percebo o resultado.",
      },
    ];
  });
});

test("Métodos rejeitam teclas e gestos sem code e atributos ARIA fora das notas", () => {
  const original = components.find(
    (component) => component.id === "indicador-etapas",
  );
  for (const value of [
    "Tab percorre controles.",
    "Shift + Tab retorna.",
    "tocar duas vezes ativa o botão.",
    "deslizar o dedo percorre controles.",
    "Use aria-current para identificar a etapa.",
  ]) {
    const component = structuredClone(original);
    component.sections
      .find((section) => section.id === "interaction-methods")
      .blocks.push({
        type: "element",
        id: "regression.methods",
        tag: "p",
        attributes: {},
        children: [{ type: "text", value }],
      });
    assert.throws(
      () => validateInteractionContent(component),
      /sem code|Métodos de interação/,
    );
  }
});

test("Validação rejeita componente com snapshot divergente", () => {
  const original = components[0].contentVersion;
  try {
    components[0].contentVersion = "0.0.0";
    assert.throws(() => validateContent(), /Versão divergente/);
  } finally {
    components[0].contentVersion = original;
  }
});
