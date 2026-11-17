# Publicação do Magoo 1.7.0

Preparação local. Nenhum envio ou publicação foi realizado. Publique e confirme o pacote npm 1.7.0 antes de enviar as páginas e manifestos que indicam essa versão. O npm e o MCP conectado ainda estavam em 1.6.1 na verificação. Atualize e reinicie instalações MCP separadamente.

## Arquivos para FTP

Caminhos relativos à raiz do site; preserve as pastas.

- `.well-known/ai-catalog.json`
- `.well-known/ard.json`
- `CHANGELOG.md`
- `content/catalog.json`
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
- `downloads/magoo-interacao.zip`
- `en/CHANGELOG.md`
- `en/index.html`
- `index.html`
- `llms.txt`
- `pt-br/CHANGELOG.md`
- `pt-br/index.html`

## Fontes e desenvolvimento — não enviar por FTP

- `README.md`
- `content/changelog.json`
- `content/locales/en.json`
- `js/build/discovery.js`
- `js/build/site.js`
- `js/build/skills.js`
- `package-lock.json`
- `package.json`
- `skills/magoo-interacao/ (instruções e referências geradas)`
- `templates/index.html`
- `tests/skills.test.js`
- `PUBLICACAO-1.7.0.md`

Não há arquivos a remover ou renomear em produção. CSS, JS de navegação, imagens e páginas de componentes não sofreram alteração; mantenha os já publicados. As referências da skill são distribuídas dentro do ZIP.

## Verificações

Validação dos 37 componentes, build dos dois idiomas, 26 testes, validador de skill e comparação do conteúdo do ZIP com as fontes. Nova seção conferida em navegador em largura ampla e estreita. Importação em plataformas externas não testada.
