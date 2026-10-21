# Publicação via FTP — Magoo 1.5.1

Snapshot preparado localmente; não publicado. Inclui o ajuste anterior da chamada da home. Caminhos relativos à raiz do site. Manter a estrutura de pastas.

## Enviar

Os JSON de conteúdo também são públicos e usados pela descoberta de agentes; enviar todos os listados para manter a versão do snapshot consistente.

- `.well-known/ai-catalog.json`
- `.well-known/ard.json`
- `CHANGELOG.md`
- `componentes/estrutura/tabelas.html`
- `componentes/formularios/input-search.html`
- `componentes/formularios/select.html`
- `componentes/navegacao/menu.html`
- `content/catalog.json`
- `content/changelog.json`
- `content/componentes/abas.json`
- `content/componentes/accordion.json`
- `content/componentes/alertas.json`
- `content/componentes/botao.json`
- `content/componentes/breadcrumb.json`
- `content/componentes/carrossel.json`
- `content/componentes/checkbox.json`
- `content/componentes/detalhes-mais-informacoes.json`
- `content/componentes/dialogs.json`
- `content/componentes/drag-drop.json`
- `content/componentes/input-email.json`
- `content/componentes/input-password.json`
- `content/componentes/input-search.json`
- `content/componentes/input-text.json`
- `content/componentes/links.json`
- `content/componentes/listas.json`
- `content/componentes/menu.json`
- `content/componentes/modal.json`
- `content/componentes/paginacao.json`
- `content/componentes/radio-button.json`
- `content/componentes/select.json`
- `content/componentes/slider.json`
- `content/componentes/switch.json`
- `content/componentes/tabbar.json`
- `content/componentes/tabelas.json`
- `content/componentes/titulos.json`
- `content/componentes/toasts.json`
- `content/componentes/tooltip-popover.json`
- `content/componentes/validacao-formularios.json`
- `en/CHANGELOG.md`
- `en/componentes/estrutura/tabelas.html`
- `en/componentes/formularios/input-search.html`
- `en/componentes/formularios/select.html`
- `en/componentes/navegacao/menu.html`
- `en/components/forms/input-search.html`
- `en/components/forms/select.html`
- `en/components/navigation/menu.html`
- `en/components/structure/tables.html`
- `en/index.html`
- `index.html`
- `llms.txt`
- `pt-br/CHANGELOG.md`
- `pt-br/componentes/estrutura/tabelas.html`
- `pt-br/componentes/formularios/input-search.html`
- `pt-br/componentes/formularios/select.html`
- `pt-br/componentes/navegacao/menu.html`
- `pt-br/index.html`

## Fontes e desenvolvimento — não enviar para o site

- `README.md`
- `content/locales/en.json`
- `package-lock.json`
- `package.json`
- `templates/index.html`

- `FTP-1.5.1.md` (este manifesto)

## Remoções e renomeações

Nenhuma. Não houve alteração de CSS, JS ou imagens.

## Verificação e pendências

Validação, build e 18 testes passaram. IDs anteriores preservados. Metadados Open Graph, Twitter Cards e Analytics existentes preservados. Sem teste manual com leitores de tela ou verificação visual em viewport móvel nesta alteração.

GitHub e npm não puderam ser comparados por falha de DNS. MCP conectado consultado novamente: 1.5.0; requer publicação e atualização/reconexão para carregar 1.5.1. Não houve publicação npm, push ou atualização de integração.
