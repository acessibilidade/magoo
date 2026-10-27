# Publicação do Magoo 1.6.1

## Enviar por FTP

Arquivos relativos à raiz do site; preservar as pastas. Esta lista contempla a atualização de 1.6.0 para 1.6.1. Se a versão 1.6.0 ainda não foi enviada, enviar também o conjunto de FTP-1.6.0.md.

- `.well-known/ai-catalog.json`
- `.well-known/ard.json`
- `CHANGELOG.md`
- `content/catalog.json`
- `content/changelog.json`
- `content/componentes/abas.json`
- `content/componentes/accordion.json`
- `content/componentes/alertas.json`
- `content/componentes/autocomplete.json`
- `content/componentes/botao.json`
- `content/componentes/breadcrumb.json`
- `content/componentes/cards.json`
- `content/componentes/carregamento-progresso.json`
- `content/componentes/carrossel.json`
- `content/componentes/checkbox.json`
- `content/componentes/datas-intervalos.json`
- `content/componentes/detalhes-mais-informacoes.json`
- `content/componentes/dialogs.json`
- `content/componentes/drag-drop.json`
- `content/componentes/indicador-etapas.json`
- `content/componentes/input-email.json`
- `content/componentes/input-password.json`
- `content/componentes/input-search.json`
- `content/componentes/input-text.json`
- `content/componentes/layout-ordem-conteudo.json`
- `content/componentes/links.json`
- `content/componentes/listas.json`
- `content/componentes/menu.json`
- `content/componentes/modal.json`
- `content/componentes/paginacao.json`
- `content/componentes/radio-button.json`
- `content/componentes/regioes-pagina.json`
- `content/componentes/select.json`
- `content/componentes/slider.json`
- `content/componentes/switch.json`
- `content/componentes/tabbar.json`
- `content/componentes/tabelas.json`
- `content/componentes/titulos.json`
- `content/componentes/toasts.json`
- `content/componentes/tooltip-popover.json`
- `content/componentes/upload-arquivos.json`
- `content/componentes/validacao-formularios.json`
- `content/locales/en.json`
- `en/CHANGELOG.md`
- `en/index.html`
- `index.html`
- `llms.txt`
- `pt-br/CHANGELOG.md`
- `pt-br/index.html`

## Fontes e desenvolvimento — não enviar

- `README.md`
- `js/mcp/server.js`
- `package-lock.json`
- `package.json`
- `templates/index.html`
- `tests/mcp.test.js`
- `FTP-1.6.1.md` (este manifesto).

As dependências corrigidas são distribuídas pelo npm. Não enviar node_modules, package.json, package-lock.json ou js/mcp/server.js à hospedagem estática.

## Remoções e renomeações

Nenhuma. CSS, JS do navegador e imagens não mudaram.

## Verificação

Validação, build e 24 testes aprovados. Auditoria das dependências sem vulnerabilidades conhecidas. A publicação npm e o envio ao GitHub são confirmados separadamente no chat. O envio FTP permanece a cargo do usuário.
