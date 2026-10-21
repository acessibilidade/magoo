import { readFile } from "node:fs/promises";
import { textOf } from "./catalog.js";

const terms = JSON.parse(
  await readFile(new URL("interaction-tokens.json", import.meta.url), "utf8"),
);
const namedInteraction = new RegExp(
  `(?<![\\p{L}\\p{N}_])(?:${terms.map((term) => term.pt).join("|")})(?![\\p{L}\\p{N}_])`,
  "u",
);

export function findUnmarkedInteractionTokens(nodes) {
  const issues = [];
  function visit(node, parentId) {
    if (node.type === "text") {
      const match = namedInteraction.exec(node.value);
      if (match) issues.push({ id: parentId, token: match[0] });
      return;
    }
    if (
      /^(?:code|pre|h[2-6])$/.test(node.tag) ||
      node.attributes["aria-hidden"] === "true" ||
      (node.attributes.class || "").split(/\s+/).includes("sr-only")
    )
      return;
    // Adjacent text nodes form a single word in HTML (for example Tab + bar).
    let pending = "";
    const flush = () => {
      if (pending) visit({ type: "text", value: pending }, node.id);
      pending = "";
    };
    for (const child of node.children) {
      if (child.type === "text") pending += child.value;
      else {
        flush();
        visit(child, node.id);
      }
    }
    flush();
  }
  nodes.forEach((node) => visit(node));
  return issues;
}

export function validateInteractionContent(component) {
  const issues = findUnmarkedInteractionTokens(
    component.sections.flatMap((section) => section.blocks),
  );
  if (issues.length)
    throw new Error(
      `Tecla ou gesto sem code: ${component.id}: ${issues[0].id}: ${issues[0].token}`,
    );
  const methods = component.sections.find(
    (section) => section.id === "interaction-methods",
  );
  if (
    !methods ||
    /\baria-[a-z-]+|\btabindex\b|\brole\s*=/.test(textOf(methods.blocks))
  )
    throw new Error(
      `Métodos de interação: ${component.id}: mantenha instruções ARIA e atributos de implementação em Pontos de atenção`,
    );
}
