---
name: magoo-figma-native
description: Review and document component states and behaviors in Figma Design or Make using Marcelo Sales’s Magoo educational library. Use for interaction decisions and design annotations, not accessibility certification.
---

# Magoo in the Figma agent

Turn Marcelo Sales’s educational guidance into concrete design decisions using the capabilities available within Figma. This skill is a single file and does not depend on Codex, other skills, or a local MCP installation. The library is an external source: importing this skill does not include its content or guarantee internet access. Respond in the user’s language. The structured library sources are in Brazilian Portuguese; translate explanations as needed while preserving IDs, references, conditions, and meaning.

## Consult the source

Read the catalog at https://magoo.cc/content/catalog.json to discover components, their IDs, and the published version. For each relevant component, read the complete JSON at https://magoo.cc/content/componentes/ID.json, replacing ID with the identifier confirmed in the catalog. The index at https://magoo.cc/llms.txt also links to structured sources. Do not invent IDs or coverage.

Use the URL-reading capabilities available in the environment. If you cannot access the library, ask the user to attach the catalog and the relevant component JSON files, or provide the complete content of the corresponding pages at https://magoo.cc/pt-br. Continue only the visual inspection that does not depend on those sources, and explain that Magoo recommendations are pending. Do not replace consultation with general knowledge attributed to Magoo. Do not request installation of a STDIO server or Codex tools within Figma.

Record authorship, contentVersion, consulted block IDs, source URLs, and relevant references. Use quick guides in interaction-design when available, preserving the complete guidance and its conditions. Identify these guides as adaptations. Do not hardcode a version or component count in this skill: read the available source. If the catalog and components differ, report the discrepancy and explicitly use a coherent snapshot supplied by the user, without mixing revisions. If the supplied source lacks a version or IDs, state that these fields are unavailable.

## Inspect the design

Identify the indicated selection, screen, or component. Inspect the states, text, variants, and context accessible in the file. If no target can be identified, prepare the library guidance and ask for the component needed for design inspection. Do not conclude that a behavior is missing without inspecting the relevant states. Distinguish observations from information reported by the user.

Explain in plain language when to use the component, what to draw, how it behaves, what to document, and how to review it. Explain focus as the indication of which element receives the next keyboard action. Preserve source conditions and exceptions, including cases where closing something could cause data loss. Do not generate code unless explicitly requested, including in Make.

For each finding, provide the observed element, evidence, proposed change, and source with version and IDs. Classify it as **visible in the design**, **needs documentation**, or **needs implementation verification**. Separate original guidance, quick-guide adaptations, and your own product-specific suggestions. Do not attribute your own suggestions to the library’s author.

## Document when requested

Use available native capabilities to create or update an identifiable documentation area next to the indicated component. Include necessary states, navigation order, actions, exceptions, pending decisions, and sources. Reuse existing annotations and preserve components, styles, and variables. Change the design only within the user’s request. If you cannot write documentation in the file or current environment, provide the text in chat and explain the limitation; do not claim the file was changed.

Check the content and organization of the changes made. Consider small and large screens, enlarged text, and virtual keyboards for fields. Mark any state or screen size you could not inspect as pending. Keyboard navigation, semantics, and screen reader announcements require implementation verification; design or prototype intent does not prove these behaviors. Never present this consultation as accessibility testing or certification.

Example: “/magoo-figma-native Review the selected modal. Consult Magoo, explain pending decisions, and document its behavior next to the component.”

Library author: Marcelo Sales. Project: https://magoo.cc. Original content license: MIT, https://github.com/acessibilidade/magoo/blob/master/LICENSE. External references retain their own licenses.
