import { categoryPaths } from "../js/build/categories.js";
import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { load } from "cheerio";
import { components, catalog } from "../js/lib/catalog.js";
import { root } from "../js/lib/paths.js";
import { locales, localizedUrl } from "../js/build/i18n.js";
import { canonicalUrl, writeDiscovery } from "../js/build/discovery.js";
import {
  catalogMarkdown,
  componentMarkdown,
  readZipEntries,
  writeSkillReferences,
} from "../js/build/skills.js";

test("Sitemap publicado inclui somente páginas com canônica própria", async () => {
  const $ = load(await readFile(new URL("sitemap.xml", root), "utf8"), {
    xml: true,
  });
  const urls = $("loc")
    .map((_, el) => $(el).text())
    .get();
  assert.deepEqual(
    urls,
    locales.flatMap((locale) => [
      localizedUrl(locale.id),
      ...categoryPaths(components).map((path) => localizedUrl(locale.id, path)),
      ...components.map((c) => localizedUrl(locale.id, c.path)),
    ]),
  );
  for (const url of urls) {
    const page = /^\/(pt-br|en)$/.test(new URL(url).pathname)
      ? new URL(url).pathname.slice(1) + "/index.html"
      : new URL(url).pathname.slice(1);
    const html = load(await readFile(new URL(page, root), "utf8"));
    assert.equal(html('link[rel="canonical"]').length, 1);
    assert.equal(html('link[rel="canonical"]').attr("href"), url);
    assert.ok(
      !/noindex/.test(html('meta[name="robots"]').attr("content") || ""),
    );
  }
});

test("Nova inclusão e revisão do catálogo atualizam descoberta sem listas manuais", async () => {
  const directory = await mkdtemp(join(tmpdir(), "magoo-discovery-"));
  const outputRoot = pathToFileURL(directory + "/");
  try {
    const added = {
      ...components[0],
      id: "novo",
      path: "componentes/elementos-ocultos/novo.html",
      name: "Novo",
      summary: "Informação nova",
      contentVersion: "2.0.0",
    };
    await writeDiscovery({
      outputRoot,
      entries: [...components, added],
      contentCatalog: { ...catalog, contentVersion: "2.0.0" },
    });
    const xml = await readFile(new URL("sitemap.xml", outputRoot), "utf8");
    assert.ok(xml.includes(canonicalUrl(added.path)));
    assert.ok(!/lastmod|404.html|index.html|templates\//.test(xml));
    const llms = await readFile(new URL("llms.txt", outputRoot), "utf8");
    assert.ok(llms.startsWith("# Magoo\n\n> "));
    assert.ok(llms.includes("/content/componentes/novo.json"));
    assert.ok(llms.includes("Informação nova"));
    const manifest = JSON.parse(
      await readFile(new URL(".well-known/ard.json", outputRoot), "utf8"),
    );
    const entry = manifest.entries[0];
    assert.equal(entry.metadata.contentVersion, "2.0.0");
    assert.equal(entry.metadata.componentCount, components.length + 1);
    assert.equal(entry.identifier, "urn:air:magoo.cc:server:magoo-mcp");
    assert.ok(entry.data && !Object.hasOwn(entry, "url"));
    assert.ok(
      entry.representativeQueries.length >= 2 &&
        entry.representativeQueries.length <= 5,
    );
    assert.equal(entry.data.transport, "stdio");
    assert.deepEqual(entry.capabilities, entry.data.tools);
    const pkg = JSON.parse(
      await readFile(new URL("package.json", root), "utf8"),
    );
    assert.deepEqual(entry.data.installation.args, [
      "-y",
      `${pkg.name}@${pkg.version}`,
    ]);
    const robots = await readFile(new URL("robots.txt", outputRoot), "utf8");
    assert.ok(robots.includes("Sitemap: https://magoo.cc/sitemap.xml"));
    assert.deepEqual(robots.split("\n").filter(Boolean), [
      "User-agent: *",
      "Allow: /",
      "Sitemap: https://magoo.cc/sitemap.xml",
    ]);
    await writeDiscovery({ outputRoot });
    assert.ok(
      !(await readFile(new URL("sitemap.xml", outputRoot), "utf8")).includes(
        canonicalUrl(added.path),
      ),
    );
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("Manifestos ARD e legado compartilham versão do contrato e conteúdo", async () => {
  const ard = await readFile(new URL(".well-known/ard.json", root), "utf8");
  const legacy = await readFile(
    new URL(".well-known/ai-catalog.json", root),
    "utf8",
  );
  assert.equal(legacy, ard);
  const manifest = JSON.parse(ard);
  assert.equal(manifest.specVersion, "1.0");
  assert.equal(manifest.entries[0].version, catalog.contentVersion);
  const headers = await readFile(new URL(".htaccess", root), "utf8");
  assert.ok(headers.includes('rel=\\"ai-catalog\\"'));
});

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
