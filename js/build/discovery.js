import { categoryPaths } from "./categories.js";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { catalog, components } from "../lib/catalog.js";
import { root } from "../lib/paths.js";
import { validateContent } from "./validate.js";

import { locales, localeConfig, localizedUrl } from "./i18n.js";

export const canonicalUrl = (path = "") =>
  localizedUrl(localeConfig.default, path);
const xmlEscape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
    .replaceAll(">", "&gt;");
const label = (value) =>
  value.replaceAll("[", "\\[").replaceAll("]", "\\]").replace(/\s+/g, " ");

export async function writeDiscovery({
  outputRoot = root,
  entries = components,
  contentCatalog = catalog,
} = {}) {
  const pkg = JSON.parse(await readFile(new URL("package.json", root), "utf8"));
  const paths = ["", ...categoryPaths(entries), ...entries.map((c) => c.path)];
  const urls = locales.flatMap((locale) =>
    paths.map((path) => localizedUrl(locale.id, path)),
  );
  if (new Set(urls).size !== urls.length)
    throw new Error("URLs duplicadas no sitemap.");
  await writeFile(
    new URL("sitemap.xml", outputRoot),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${locales.flatMap((locale) => paths.map((path) => `  <url><loc>${xmlEscape(localizedUrl(locale.id, path))}</loc>${locales.map((other) => `<xhtml:link rel="alternate" hreflang="${other.lang}" href="${xmlEscape(localizedUrl(other.id, path))}"/>`).join("")}<xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(canonicalUrl(path))}"/></url>`)).join("\n")}\n</urlset>\n`,
  );
  await writeFile(
    new URL("robots.txt", outputRoot),
    "User-agent: *\nAllow: /\n\nSitemap: https://magoo.cc/sitemap.xml\n",
  );
  const instructions =
    "Material educacional, não certificação de acessibilidade. Cite Marcelo Sales, a versão consultada, os IDs e as referências. Diferencie conteúdo original de adaptações. A consulta não executa testes nem comprova conformidade de uma implementação.";
  await writeFile(
    new URL("llms.txt", outputRoot),
    `# Magoo\n\n> Biblioteca educacional de comportamentos de interação de componentes, de Marcelo Sales.\n\nVersão do conteúdo: ${contentCatalog.contentVersion}. Idioma: ${contentCatalog.language}. Licença MIT para o conteúdo autoral; referências externas conservam suas próprias licenças.\n\n${instructions}\n\nOs arquivos JSON contêm a fonte completa das cinco seções, com IDs estáveis e referências. O MCP é somente de leitura, executado localmente por STDIO; não há endpoint HTTP MCP. Instalação: Node.js 20.19 ou superior, comando npx, argumentos -y ${pkg.name}@${pkg.version}.\n\n## Catálogo e integração\n\n- [Catálogo JSON](https://magoo.cc/content/catalog.json): componentes publicados, versão e itens planejados.\n- [Manifesto ARD](https://magoo.cc/.well-known/ard.json): descoberta do MCP local e instruções de instalação.\n- [Documentação do projeto](https://github.com/acessibilidade/magoo/blob/master/README.md): desenvolvimento, MCP e autoria.\n\n## Componentes — fonte estruturada\n\n${entries.map((c) => `- [${label(c.name)}](https://magoo.cc/content/componentes/${c.id}.json): ${label(c.summary)} Versão ${c.contentVersion}.`).join("\n")}\n\n## Optional\n\n- [Biblioteca HTML](https://magoo.cc/pt-br): navegação visual pelas páginas canônicas.\n- [Histórico](https://github.com/acessibilidade/magoo/blob/master/CHANGELOG.md): revisões do conteúdo.\n- [Licença](https://github.com/acessibilidade/magoo/blob/master/LICENSE): condições de uso.\n`,
  );
  const tools = [
    "search_components",
    "get_component",
    "get_acceptance_criteria",
    "get_references",
  ];
  const manifest = {
    specVersion: "1.0",
    entries: [
      {
        "@context": "https://agenticresourcediscovery.org/context/v1",
        identifier: "urn:air:magoo.cc:server:magoo-mcp",
        displayName: "Magoo MCP",
        type: "application/agent-card+json",
        description:
          "Consulta local, somente de leitura, da biblioteca educacional de comportamentos de interação Magoo.",
        version: pkg.version,
        capabilities: tools,
        tags: [
          "accessibility",
          "interaction-design",
          "pt-BR",
          "read-only",
          "mcp",
        ],
        representativeQueries: [
          "Consulte os comportamentos por teclado do componente Modal no Magoo.",
          "Recupere os critérios de aceite de Accordion, com IDs, autoria e versão.",
          "Mostre as referências do componente Alertas e diferencie o material original de sugestões.",
        ],
        data: {
          name: "magoo",
          version: pkg.version,
          protocol: "mcp",
          transport: "stdio",
          installation: {
            package: pkg.name,
            runtime: "Node.js >=20.19",
            command: "npx",
            args: ["-y", `${pkg.name}@${pkg.version}`],
          },
          tools,
          resources: ["magoo://catalog", "magoo://components/{id}"],
          instructions,
          documentation:
            "https://github.com/acessibilidade/magoo/blob/master/README.md",
        },
        metadata: {
          author: "Marcelo Sales",
          contentVersion: contentCatalog.contentVersion,
          language: contentCatalog.language,
          license: "MIT",
          componentCount: entries.length,
        },
      },
    ],
  };
  await mkdir(new URL(".well-known/", outputRoot), { recursive: true });
  const manifestJson = JSON.stringify(manifest, null, 2) + "\n";
  for (const filename of ["ard.json", "ai-catalog.json"]) {
    await writeFile(
      new URL(`.well-known/${filename}`, outputRoot),
      manifestJson,
    );
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  validateContent();
  await writeDiscovery();
}
