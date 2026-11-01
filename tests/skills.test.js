import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { components, catalog } from "../js/lib/catalog.js";
import { root } from "../js/lib/paths.js";
import {
  catalogMarkdown,
  componentMarkdown,
  readZipEntries,
  writeSkillReferences,
} from "../js/build/skills.js";

test("Referências Markdown da skill sincronizam catálogo, componentes e versão", async () => {
  const currentCatalogMd = await readFile(
    new URL("skills/magoo-interacao/references/catalogo.md", root),
    "utf8",
  );
  assert.equal(currentCatalogMd, catalogMarkdown());
  const zipEntries = readZipEntries(
    await readFile(new URL("downloads/magoo-interacao.zip", root)),
  );
  assert.equal(
    zipEntries.get("magoo-interacao/SKILL.md"),
    await readFile(new URL("skills/magoo-interacao/SKILL.md", root), "utf8"),
  );
  assert.equal(
    zipEntries.get("magoo-interacao/references/catalogo.md"),
    currentCatalogMd,
  );
  assert.equal(
    zipEntries.get("magoo-interacao/LICENSE"),
    await readFile(new URL("LICENSE", root), "utf8"),
  );
  for (const c of components) {
    const md = await readFile(
      new URL(`skills/magoo-interacao/references/componentes/${c.id}.md`, root),
      "utf8",
    );
    assert.equal(md, componentMarkdown(c), c.id);
    assert.equal(
      zipEntries.get(`magoo-interacao/references/componentes/${c.id}.md`),
      md,
      c.id,
    );
    assert.ok(!/open_in_new|eastseta|westseta|northseta|southseta/.test(md));
    for (const s of c.sections) assert.ok(md.includes(`## ${s.title}`));
  }
  const directory = await mkdtemp(join(tmpdir(), "magoo-skills-"));
  const outputRoot = pathToFileURL(directory + "/");
  try {
    const added = {
      ...components[0],
      id: "novo",
      name: "Novo",
      contentVersion: "2.0.0",
    };
    await writeSkillReferences({
      outputRoot,
      entries: [...components, added],
      contentCatalog: { ...catalog, contentVersion: "2.0.0" },
    });
    const generatedCatalog = await readFile(
      new URL("skills/magoo-interacao/references/catalogo.md", outputRoot),
      "utf8",
    );
    assert.ok(generatedCatalog.includes("2.0.0"));
    assert.ok(generatedCatalog.includes("- Novo (`novo`)"));
    const generatedNovo = await readFile(
      new URL(
        "skills/magoo-interacao/references/componentes/novo.md",
        outputRoot,
      ),
      "utf8",
    );
    assert.ok(generatedNovo.startsWith("# Novo\n"));
    const generatedZip = readZipEntries(
      await readFile(new URL("downloads/magoo-interacao.zip", outputRoot)),
    );
    assert.ok(
      generatedZip
        .get("magoo-interacao/SKILL.md")
        .includes("versão do conteúdo (2.0.0)"),
    );
    assert.equal(
      generatedZip.get("magoo-interacao/references/componentes/novo.md"),
      generatedNovo,
    );
    await writeSkillReferences({ outputRoot });
    await assert.rejects(
      readFile(
        new URL(
          "skills/magoo-interacao/references/componentes/novo.md",
          outputRoot,
        ),
        "utf8",
      ),
    );
    const cleanedZip = readZipEntries(
      await readFile(new URL("downloads/magoo-interacao.zip", outputRoot)),
    );
    assert.ok(!cleanedZip.has("magoo-interacao/references/componentes/novo.md"));
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});