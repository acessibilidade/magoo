# Changelog

## 1.4.0

- Adds US English as the second native website language, with a translated homepage and documentation for all 29 components; Brazilian Portuguese remains the primary language.
- Centralizes translations and routes in JSON files to simplify adding languages, with Portuguese at /pt-br and English at /en.
- Translates English URLs, preserves the component and section when switching languages, and redirects previous routes.
- Maintains a canonical URL for each language and updates hreflang, the sitemap, Open Graph, and Twitter Cards.
- Adds lists and accessible names to the main menu and language selection, with native buttons, selection state, and a responsive layout.
- Keeps Google Translate for other languages, with the Select other languages label associated with the combo box for screen readers only.
- Displays only the Tudo é Acessibilidade logo in the English footer, removing the institutional phrase and divider from the image.
- Standardizes HTML indentation and keeps opening tags and their attributes on one line, with automatic checks after the build.
- Fixes Apache rules to serve /en and /pt-br without trailing slashes and prevent the English homepage access error.
- Updates deployment documentation and static discovery for agents; the MCP server and the guidance it retrieves remain in Brazilian Portuguese.

## 1.3.4

- Fixes the arrows on homepage links and automatically updates the component and category counts.

## 1.3.3

- Reviews the Gherkin guidance and fixes punctuation in the introductions to eight components.

## 1.3.2

- Adds the changelog to the homepage, with a history of changes in a modal.

## 1.3.1

- Fixes code markup in the Tabbar guide and restores the author's text on internal pages.

## 1.3.0

- Adds Tabbar under Structure, with guidance on navigating between destinations and switching panels.

## 1.2.0

- Adds Form validation under Messages, with errors next to fields, an error summary, and guidance on correcting errors.

## 1.1.3

- Expands the references for the four input types with design systems and specific examples.

## 1.1.2

- Standardizes the Gherkin for the four input types, including keyboards and screen readers on desktop and mobile devices.

## 1.1.1

- Adds code markup to mentions of keys and key combinations in the guidance.

## 1.1.0

- Adds Input "text", Input "email", Input "search" and Input "password" under Forms.
- Includes rules for showing and hiding passwords, with a text button and guidance on icons.

## 1.0.1

- Updates installation and usage instructions, anchor navigation, translation, license, FAQ, and guidance by role.
