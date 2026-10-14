export const categoryNames = {
  estrutura: "Estrutura",
  mensagens: "Mensagens",
  navegacao: "Navegação",
  "elementos-ocultos": "Elementos ocultos",
  formularios: "Formulários",
};
export const categoryPath = (category) => `categorias/${category}.html`;
export const categoryPaths = (entries) =>
  [...new Set(entries.map((c) => c.category))].map(categoryPath);
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
export function breadcrumb(category, component) {
  const items = [`<li><a href="/index.html">Índice geral</a></li>`];
  const name = escape(categoryNames[category]);
  if (component) {
    items.push(
      `<li><span class="breadcrumb-separator" aria-hidden="true" translate="no">/</span><a href="/${categoryPath(category)}">${name}</a></li>`,
    );
    items.push(
      `<li><span class="breadcrumb-separator" aria-hidden="true" translate="no">/</span><span aria-current="page">${escape(component.name)}</span></li>`,
    );
  } else {
    items.push(
      `<li><span class="breadcrumb-separator" aria-hidden="true" translate="no">/</span><span aria-current="page">${name}</span></li>`,
    );
  }
  return `<nav class="page-breadcrumb" aria-label="Trilha de navegação"><ol>${items.join("")}</ol></nav>`;
}
export function categoryIndex(entries) {
  return `<h2>Componentes desta categoria</h2><ul class="category-component-list">${entries.map((c) => `<li><h3><a href="/${c.path}">${escape(c.name)}</a></h3><p>${escape(c.summary)}</p></li>`).join("")}</ul>`;
}
