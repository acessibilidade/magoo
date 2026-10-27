import test from "node:test";
import assert from "node:assert/strict";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { fileURLToPath } from "node:url";
import { root } from "../js/lib/paths.js";
import { catalog, components } from "../js/lib/catalog.js";

test("MCP real via stdio: descoberta, busca, leitura, referências e erros", async () => {
  const client = new Client({ name: "magoo-test", version: "1.0.0" });
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [fileURLToPath(new URL("js/mcp/server.js", root))],
    cwd: "/tmp",
    stderr: "pipe",
  });
  try {
    await client.connect(transport);
    assert.equal(client.getServerVersion().version, catalog.contentVersion);
    const { tools } = await client.listTools();
    assert.equal(tools.length, 4);
    assert.ok(tools.every((t) => t.annotations.readOnlyHint));
    const list = await client.callTool({
      name: "search_components",
      arguments: { query: "PAGINACAO" },
    });
    assert.ok(
      list.structuredContent.components.some((c) => c.id === "paginacao"),
    );
    const resources = await client.listResources();
    assert.equal(resources.resources.length, components.length + 1);
    for (const c of components) {
      const r = await client.callTool({
        name: "get_component",
        arguments: { id: c.id },
      });
      assert.equal(r.structuredContent.id, c.id);
      assert.equal(r.structuredContent.sections.length, 5);
      assert.equal(r.structuredContent.contentVersion, catalog.contentVersion);
      {
        assert.ok(
          r.structuredContent.sections[0].items.some((item) =>
            item.id.startsWith(`${c.id}.designer-guide.`),
          ),
        );
      }
    }
    const criteria = await client.callTool({
      name: "get_acceptance_criteria",
      arguments: { id: "alertas" },
    });
    assert.equal(criteria.structuredContent.section.id, "acceptance-criteria");
    assert.ok(criteria.structuredContent.section.items.length);
    const refs = await client.callTool({
      name: "get_references",
      arguments: { id: "alertas" },
    });
    assert.ok(
      refs.structuredContent.section.references.some((r) =>
        r.url.includes("w3.org"),
      ),
    );
    const resource = await client.readResource({
      uri: "magoo://components/alertas",
    });
    assert.equal(JSON.parse(resource.contents[0].text).id, "alertas");
    const missing = await client.callTool({
      name: "get_component",
      arguments: { id: "../../package.json" },
    });
    assert.equal(missing.isError, true);
    const wrong = await client.callTool({
      name: "get_component",
      arguments: { id: 12 },
    });
    assert.equal(wrong.isError, true);
    const oversized = await client.callTool({
      name: "search_components",
      arguments: {
        query: "modal",
        extra: Array.from({ length: 100 }, () => "item"),
      },
    });
    assert.equal(oversized.isError, true);
    assert.match(oversized.content[0].text, /maximum of 100 elements/);
    const afterRejection = await client.callTool({
      name: "search_components",
      arguments: { query: "modal" },
    });
    assert.ok(
      afterRejection.structuredContent.components.some((c) => c.id === "modal"),
    );
  } finally {
    await client.close();
  }
});
