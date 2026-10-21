# Publicação via FTP — Magoo 1.6.0

Versão 1.6.0 com publicação no GitHub e no npm autorizada; envio dos arquivos do site por FTP é uma etapa separada. Catálogo com 37 componentes. Este manifesto cobre o conjunto acumulado de ajustes locais desde o commit-base, incluindo a chamada da home e os desdobramentos de Select, Tabelas, Menu e Busca. Substitui FTP-1.5.1.md para este conjunto.

## Enviar para produção

Caminhos relativos à raiz do site; preservar a estrutura, incluindo .well-known. JSONs públicos, navegação de todas as páginas, traduções e descoberta precisam acompanhar o snapshot 1.6.0.

Lista completa: 216 arquivos.

- `.well-known/ai-catalog.json`
- `.well-known/ard.json`
- `CHANGELOG.md`
- `componentes/elementos-ocultos/abas.html`
- `componentes/elementos-ocultos/accordion.html`
- `componentes/elementos-ocultos/detalhes-mais-informacoes.html`
- `componentes/elementos-ocultos/modal.html`
- `componentes/elementos-ocultos/tooltip-popover.html`
- `componentes/estrutura/cards.html`
- `componentes/estrutura/layout-ordem-conteudo.html`
- `componentes/estrutura/listas.html`
- `componentes/estrutura/regioes-pagina.html`
- `componentes/estrutura/tabbar.html`
- `componentes/estrutura/tabelas.html`
- `componentes/estrutura/titulos.html`
- `componentes/formularios/autocomplete.html`
- `componentes/formularios/botao.html`
- `componentes/formularios/checkbox.html`
- `componentes/formularios/datas-intervalos.html`
- `componentes/formularios/input-email.html`
- `componentes/formularios/input-password.html`
- `componentes/formularios/input-search.html`
- `componentes/formularios/input-text.html`
- `componentes/formularios/radio-button.html`
- `componentes/formularios/select.html`
- `componentes/formularios/slider.html`
- `componentes/formularios/switch.html`
- `componentes/formularios/upload-arquivos.html`
- `componentes/mensagens/alertas.html`
- `componentes/mensagens/carregamento-progresso.html`
- `componentes/mensagens/dialogs.html`
- `componentes/mensagens/toasts.html`
- `componentes/mensagens/validacao-formularios.html`
- `componentes/navegacao/breadcrumb.html`
- `componentes/navegacao/carrossel.html`
- `componentes/navegacao/drag-drop.html`
- `componentes/navegacao/indicador-etapas.html`
- `componentes/navegacao/links.html`
- `componentes/navegacao/menu.html`
- `componentes/navegacao/paginacao.html`
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
- `content/locales/locales.json`
- `css/main.css`
- `en/.htaccess`
- `en/CHANGELOG.md`
- `en/categorias/elementos-ocultos.html`
- `en/categorias/estrutura.html`
- `en/categorias/formularios.html`
- `en/categorias/mensagens.html`
- `en/categorias/navegacao.html`
- `en/categories/forms.html`
- `en/categories/hidden-elements.html`
- `en/categories/messages.html`
- `en/categories/navigation.html`
- `en/categories/structure.html`
- `en/componentes/elementos-ocultos/abas.html`
- `en/componentes/elementos-ocultos/accordion.html`
- `en/componentes/elementos-ocultos/detalhes-mais-informacoes.html`
- `en/componentes/elementos-ocultos/modal.html`
- `en/componentes/elementos-ocultos/tooltip-popover.html`
- `en/componentes/estrutura/cards.html`
- `en/componentes/estrutura/layout-ordem-conteudo.html`
- `en/componentes/estrutura/listas.html`
- `en/componentes/estrutura/regioes-pagina.html`
- `en/componentes/estrutura/tabbar.html`
- `en/componentes/estrutura/tabelas.html`
- `en/componentes/estrutura/titulos.html`
- `en/componentes/formularios/autocomplete.html`
- `en/componentes/formularios/botao.html`
- `en/componentes/formularios/checkbox.html`
- `en/componentes/formularios/datas-intervalos.html`
- `en/componentes/formularios/input-email.html`
- `en/componentes/formularios/input-password.html`
- `en/componentes/formularios/input-search.html`
- `en/componentes/formularios/input-text.html`
- `en/componentes/formularios/radio-button.html`
- `en/componentes/formularios/select.html`
- `en/componentes/formularios/slider.html`
- `en/componentes/formularios/switch.html`
- `en/componentes/formularios/upload-arquivos.html`
- `en/componentes/mensagens/alertas.html`
- `en/componentes/mensagens/carregamento-progresso.html`
- `en/componentes/mensagens/dialogs.html`
- `en/componentes/mensagens/toasts.html`
- `en/componentes/mensagens/validacao-formularios.html`
- `en/componentes/navegacao/breadcrumb.html`
- `en/componentes/navegacao/carrossel.html`
- `en/componentes/navegacao/drag-drop.html`
- `en/componentes/navegacao/indicador-etapas.html`
- `en/componentes/navegacao/links.html`
- `en/componentes/navegacao/menu.html`
- `en/componentes/navegacao/paginacao.html`
- `en/components/forms/autocomplete.html`
- `en/components/forms/button.html`
- `en/components/forms/checkbox.html`
- `en/components/forms/dates-ranges.html`
- `en/components/forms/file-upload.html`
- `en/components/forms/input-email.html`
- `en/components/forms/input-password.html`
- `en/components/forms/input-search.html`
- `en/components/forms/input-text.html`
- `en/components/forms/radio-button.html`
- `en/components/forms/select.html`
- `en/components/forms/slider.html`
- `en/components/forms/switch.html`
- `en/components/hidden-elements/accordion.html`
- `en/components/hidden-elements/details-more-information.html`
- `en/components/hidden-elements/modal.html`
- `en/components/hidden-elements/tabs.html`
- `en/components/hidden-elements/tooltip-popover.html`
- `en/components/messages/alerts.html`
- `en/components/messages/dialogs.html`
- `en/components/messages/form-validation.html`
- `en/components/messages/loading-progress.html`
- `en/components/messages/toasts.html`
- `en/components/navigation/breadcrumb.html`
- `en/components/navigation/carousel.html`
- `en/components/navigation/drag-drop.html`
- `en/components/navigation/links.html`
- `en/components/navigation/menu.html`
- `en/components/navigation/pagination.html`
- `en/components/navigation/step-indicator.html`
- `en/components/structure/cards.html`
- `en/components/structure/headings.html`
- `en/components/structure/layout-content-order.html`
- `en/components/structure/lists.html`
- `en/components/structure/page-regions.html`
- `en/components/structure/tabbar.html`
- `en/components/structure/tables.html`
- `en/index.html`
- `index.html`
- `llms.txt`
- `pt-br/CHANGELOG.md`
- `pt-br/categorias/elementos-ocultos.html`
- `pt-br/categorias/estrutura.html`
- `pt-br/categorias/formularios.html`
- `pt-br/categorias/mensagens.html`
- `pt-br/categorias/navegacao.html`
- `pt-br/componentes/elementos-ocultos/abas.html`
- `pt-br/componentes/elementos-ocultos/accordion.html`
- `pt-br/componentes/elementos-ocultos/detalhes-mais-informacoes.html`
- `pt-br/componentes/elementos-ocultos/modal.html`
- `pt-br/componentes/elementos-ocultos/tooltip-popover.html`
- `pt-br/componentes/estrutura/cards.html`
- `pt-br/componentes/estrutura/layout-ordem-conteudo.html`
- `pt-br/componentes/estrutura/listas.html`
- `pt-br/componentes/estrutura/regioes-pagina.html`
- `pt-br/componentes/estrutura/tabbar.html`
- `pt-br/componentes/estrutura/tabelas.html`
- `pt-br/componentes/estrutura/titulos.html`
- `pt-br/componentes/formularios/autocomplete.html`
- `pt-br/componentes/formularios/botao.html`
- `pt-br/componentes/formularios/checkbox.html`
- `pt-br/componentes/formularios/datas-intervalos.html`
- `pt-br/componentes/formularios/input-email.html`
- `pt-br/componentes/formularios/input-password.html`
- `pt-br/componentes/formularios/input-search.html`
- `pt-br/componentes/formularios/input-text.html`
- `pt-br/componentes/formularios/radio-button.html`
- `pt-br/componentes/formularios/select.html`
- `pt-br/componentes/formularios/slider.html`
- `pt-br/componentes/formularios/switch.html`
- `pt-br/componentes/formularios/upload-arquivos.html`
- `pt-br/componentes/mensagens/alertas.html`
- `pt-br/componentes/mensagens/carregamento-progresso.html`
- `pt-br/componentes/mensagens/dialogs.html`
- `pt-br/componentes/mensagens/toasts.html`
- `pt-br/componentes/mensagens/validacao-formularios.html`
- `pt-br/componentes/navegacao/breadcrumb.html`
- `pt-br/componentes/navegacao/carrossel.html`
- `pt-br/componentes/navegacao/drag-drop.html`
- `pt-br/componentes/navegacao/indicador-etapas.html`
- `pt-br/componentes/navegacao/links.html`
- `pt-br/componentes/navegacao/menu.html`
- `pt-br/componentes/navegacao/paginacao.html`
- `pt-br/index.html`
- `sitemap.xml`

## Fontes e desenvolvimento — não enviar

- `AGENTS.md`
- `FTP-1.5.1.md`
- `FTP-1.6.0.md`
- `README.md`
- `js/build/i18n.js`
- `js/build/site.js`
- `js/build/validate.js`
- `js/lib/interaction-rules.js`
- `js/lib/interaction-tokens.json`
- `package-lock.json`
- `package.json`
- `templates/category.html`
- `templates/component-source-note.html`
- `templates/componentes/elementos-ocultos/abas.html`
- `templates/componentes/elementos-ocultos/accordion.html`
- `templates/componentes/elementos-ocultos/detalhes-mais-informacoes.html`
- `templates/componentes/elementos-ocultos/modal.html`
- `templates/componentes/elementos-ocultos/tooltip-popover.html`
- `templates/componentes/estrutura/cards.html`
- `templates/componentes/estrutura/layout-ordem-conteudo.html`
- `templates/componentes/estrutura/listas.html`
- `templates/componentes/estrutura/regioes-pagina.html`
- `templates/componentes/estrutura/tabbar.html`
- `templates/componentes/estrutura/tabelas.html`
- `templates/componentes/estrutura/titulos.html`
- `templates/componentes/formularios/autocomplete.html`
- `templates/componentes/formularios/botao.html`
- `templates/componentes/formularios/checkbox.html`
- `templates/componentes/formularios/datas-intervalos.html`
- `templates/componentes/formularios/input-email.html`
- `templates/componentes/formularios/input-password.html`
- `templates/componentes/formularios/input-search.html`
- `templates/componentes/formularios/input-text.html`
- `templates/componentes/formularios/radio-button.html`
- `templates/componentes/formularios/select.html`
- `templates/componentes/formularios/slider.html`
- `templates/componentes/formularios/switch.html`
- `templates/componentes/formularios/upload-arquivos.html`
- `templates/componentes/mensagens/alertas.html`
- `templates/componentes/mensagens/carregamento-progresso.html`
- `templates/componentes/mensagens/dialogs.html`
- `templates/componentes/mensagens/toasts.html`
- `templates/componentes/mensagens/validacao-formularios.html`
- `templates/componentes/navegacao/breadcrumb.html`
- `templates/componentes/navegacao/carrossel.html`
- `templates/componentes/navegacao/drag-drop.html`
- `templates/componentes/navegacao/indicador-etapas.html`
- `templates/componentes/navegacao/links.html`
- `templates/componentes/navegacao/menu.html`
- `templates/componentes/navegacao/paginacao.html`
- `templates/index.html`
- `tests/categories.test.js`
- `tests/content.test.js`
- `tests/i18n.test.js`

## Remoções e renomeações

Nenhuma remoção necessária. As novas URLs em inglês têm aliases gerados para os caminhos legados. Os IDs anteriores de conteúdo permanecem preservados. Enviar css/main.css: a nova regra permite quebrar rótulos longos de teclas e gestos. JS de execução e imagens não exigem substituição nesta alteração. Após publicar, invalidar o cache da folha de estilos na hospedagem/CDN e conferir o carregamento da versão atualizada.

## Verificação

- Modal do changelog: rolagem interna na lista de versões, cantos preservados, cabeçalho e botão Fechar visíveis. Área rolável identificada e acessível pelo teclado. Conferido em telas pequenas e grandes.

- Changelog 1.6.0 resumido às adições e revisões de conteúdo; removidos detalhes estéticos e de manutenção. Versões publicadas preservadas. Home e CHANGELOG.md regenerados nos idiomas disponíveis.

- Layout e ordem do conteúdo: métodos de teclado incluem rolagem com setas, Barra de espaço, Page Down, Shift + Barra de espaço e Page Up, com comandos em code, tradução inglesa e distinção de teclas usadas por controles ou leitores de tela.

- Layout e ordem do conteúdo substitui o item planejado Flexbox & Grid. Inclui cinco abas, referências W3C, tradução inglesa e navegação integrada. Conferido em 360 e 1440 pixels, sem rolagem horizontal nos tamanhos verificados.

- Complementa as referências dos 13 componentes que não tinham a introdução, o aviso sobre o curso e a isenção de responsabilidade. A validação exige o padrão em todos os 37 componentes.

- Referências: externos com ícone Material Icons open_in_new oculto para leitores de tela e um único aviso de link externo em nova aba. Internos do Magoo sem ícone/aviso externo, na mesma aba e com destino no idioma atual. Regra em AGENTS.md, validação das fontes e teste dos 37 componentes em português e inglês. Conferidos ícones em 1440 px e referências em inglês a 360 px; navegação interna até Menu confirmada na mesma aba.

- Regiões da página substitui o item planejado Header, Footer e Regiões. Inclui as cinco abas em português e inglês, navegação e referências. Conferidos conteúdo, métodos e Gherkin em 360 e 1440 px, sem rolagem horizontal. Índices laterais das categorias também são completados pelo catálogo e verificados nos dois idiomas.

- Rótulos de tecla padronizados como Esc; removido o bloco de introdução editorial dos seis componentes novos. Rodapé AccessBoost centralizado em templates/component-source-note.html, aplicado pelo build aos 37 componentes e conferido por teste. Preferências registradas em AGENTS.md.

- Métodos de interação dos seis itens novos conferidos em português e inglês a 360 px; Indicador de etapas também conferido em 1440 px. Datas e intervalos foi reconferido com CSS sem cache: comandos longos quebram linha e não geram rolagem horizontal a 360 px.

- Métodos de interação: revisão de ações e resultados, com notas de implementação preservadas em Pontos de atenção. Teclas e gestos conhecidos usam code em todas as seções; rótulos de interação traduzidos em inglês. Regra editorial em AGENTS.md e verificações automáticas em js/lib/interaction-rules.js, com vocabulário extensível em interaction-tokens.json.

- Gherkin: seis novos componentes alinhados ao modelo anterior; cenários complementares de Select, Tabelas, Menu e Busca convertidos em passos separados. Regra documentada em AGENTS.md e validada automaticamente nos 37 componentes, com testes que rejeitam regressões.
- Apresentação Gherkin de Carregamento e progresso conferida no navegador em 360 e 1440 px, sem rolagem horizontal.

- Correção adicional: o build define aria-current pelo componente aberto; teste de regressão verifica os 37 componentes nas 148 páginas (raiz, português, inglês e aliases).

- Validação do snapshot, build e 24 testes passaram, incluindo consulta real ao MCP local e cobertura do seletor e índices laterais em ambos os idiomas.
- As seis páginas em português foram conferidas no navegador em 360 e 1440 px; as seis páginas em inglês, em 360 px. Sem rolagem horizontal nos tamanhos verificados.
- Open Graph, Twitter Cards, imagem de compartilhamento e Google Analytics preservados.
- Não houve teste manual com leitores de tela. Os cenários educacionais são orientações, não resultados de execução de componentes.

## Versões e publicação

- Pacote, lockfile, catálogo e 37 componentes em 1.6.0; schemaVersion permanece 1.0.0.
- GitHub consultado antes da publicação: master em 52ef1d1d7c2af4f26bf25de26c11c48eb90184b8, igual ao commit-base local. Origin: https://github.com/acessibilidade/magoo.git.
- npm consultado antes da publicação: versão latest 1.5.0. Autenticação renovada para publicar 1.6.0.
- Revisão final: validação, build e 24 testes aprovados. Pacote de distribuição revisado com 54 arquivos, incluindo os 37 componentes e os módulos do MCP.
- Publicação em andamento; confirmar o npm e o GitHub após o envio.
- MCP conectado ainda retorna contentVersion 1.5.0 e requer atualização/reinício/reconexão para carregar 1.6.0.
- Nenhum arquivo foi enviado ao servidor do site por FTP nesta operação.
