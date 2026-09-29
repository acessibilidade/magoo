#!/usr/bin/env node
import { realpathSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  catalog,
  components,
  getComponent,
  readable,
  search,
} from "../lib/catalog.js";
import { validateContent } from "../build/validate.js";
export function createServer() {
  validateContent();
  const server = new McpServer(
    { name: "magoo", version: "1.0.0" },
    {
      instructions:
        "Biblioteca educacional de comportamentos de interação, somente leitura. Cite autor, versão, identificadores e referências. Não trate orientações como certificação nem afirme ter testado uma implementação. Diferencie conteúdo original de adaptações propostas.",
    },
  );
  const annotations = {
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
    openWorldHint: false,
  };
  const result = (data) => ({
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
    structuredContent: data,
  });
  const envelope = (c) => ({
    schemaVersion: c.schemaVersion,
    contentVersion: c.contentVersion,
    author: c.author,
    componentId: c.id,
    name: c.name,
    path: c.path,
    source: c.source,
  });
  function register(name, description, inputSchema, handler) {
    server.registerTool(
      name,
      { description, inputSchema, annotations },
      async (args) => {
        try {
          return result(handler(args));
        } catch (e) {
          return {
            isError: true,
            content: [{ type: "text", text: e.message }],
          };
        }
      },
    );
  }
  register(
    "search_components",
    "Busca componentes por termos (sem distinção de acento) e categoria. Sem consulta, lista todos.",
    {
      query: z.string().max(200).optional(),
      category: z
        .enum([
          "estrutura",
          "mensagens",
          "navegacao",
          "elementos-ocultos",
          "formularios",
        ])
        .optional(),
    },
    (args) => ({
      contentVersion: catalog.contentVersion,
      components: search(args.query, args.category),
    }),
  );
  register(
    "get_component",
    "Retorna o conteúdo legível completo, com IDs estáveis e fontes. Não gera novas orientações.",
    { id: z.string().max(100) },
    ({ id }) => readable(getComponent(id)),
  );
  register(
    "get_acceptance_criteria",
    "Retorna os cenários originais da seção Gherkin. Preserva o texto educacional; não executa testes.",
    { id: z.string().max(100) },
    ({ id }) => {
      const c = readable(getComponent(id));
      return {
        ...envelope(c),
        section: c.sections.find((s) => s.id === "acceptance-criteria"),
      };
    },
  );
  register(
    "get_references",
    "Retorna a seção de referências e seus links, sem acessar sites externos.",
    { id: z.string().max(100) },
    ({ id }) => {
      const c = readable(getComponent(id));
      return {
        ...envelope(c),
        section: c.sections.find((s) => s.id === "references"),
      };
    },
  );
  server.registerResource(
    "catalog",
    "magoo://catalog",
    {
      mimeType: "application/json",
      description: "Catálogo, versão e itens em desenvolvimento.",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "application/json",
          text: JSON.stringify(catalog, null, 2),
        },
      ],
    }),
  );
  for (const c of components)
    server.registerResource(
      c.id,
      `magoo://components/${c.id}`,
      { mimeType: "application/json", description: c.summary, title: c.name },
      async (uri) => ({
        contents: [
          {
            uri: uri.href,
            mimeType: "application/json",
            text: JSON.stringify(readable(c), null, 2),
          },
        ],
      }),
    );
  return server;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href
) {
  try {
    await createServer().connect(new StdioServerTransport());
  } catch (e) {
    console.error(`Magoo MCP: ${e.message}`);
    process.exitCode = 1;
  }
}
