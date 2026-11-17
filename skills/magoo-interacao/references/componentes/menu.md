# Menu

- ID: `menu`
- Categoria: navegacao
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-menu.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Reúne opções de navegação ou ações em uma estrutura organizada e previsível.

<!-- id: interaction-design -->
## Design de interação

<!-- id: menu.designer-guide.frame -->
<!-- id: menu.designer-guide.1 -->
### Guia rápido para designers

<!-- id: menu.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: menu.designer-guide.3 -->
#### Quando usar

<!-- id: menu.designer-guide.4 -->
Use para reunir destinos de navegação ou ações de forma previsível.

<!-- id: menu.designer-guide.5 -->
#### O que desenhar

<!-- id: menu.designer-guide.6 -->
Mostre itens, submenus quando existirem, estado aberto ou fechado e foco visível.

<!-- id: menu.designer-guide.7 -->
#### Como se comporta

<!-- id: menu.designer-guide.8 -->
Na navegação comum, `Tab` percorre links e botões. Em menus de ações ARIA, `setas` percorrem itens; `Esc` fecha e devolve o foco ao acionador. Menu contextual também precisa de acesso por teclado e toque.

<!-- id: menu.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: menu.designer-guide.10 -->
Diferencie navegação, menu de ações e menu contextual. Registre o padrão de teclado, a abertura, o fechamento, o item ao qual a ação se aplica e o foco após executar comandos.

<!-- id: menu.designer-guide.11 -->
#### Como revisar

<!-- id: menu.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: menu.designer-guide.13 -->
### Orientações completas

<!-- id: menu.interaction-design.1 -->

<!-- id: menu.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes do tipo Menu.

<!-- id: menu.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: menu.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: menu.interaction-design.9 --> Antes de interagir é possível perceber que o menu contém opções de navegação?
2. <!-- id: menu.interaction-design.10 --> O item atual ou seção ativa é visualmente identificável?
3. <!-- id: menu.interaction-design.11 --> Itens com submenu deixam claro que abrem mais opções?

<!-- id: menu.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: menu.interaction-design.15 --> Há feedback visual ao passar o mouse em itens acionáveis?
2. <!-- id: menu.interaction-design.16 --> Ao clicar em um link, a página ou seção correspondente é carregada?
3. <!-- id: menu.interaction-design.17 --> Ao clicar em um acionador de submenu, o submenu abre ou fecha de forma previsível?

<!-- id: menu.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: menu.interaction-design.20 --> O menu abre e fecha de forma confortável em telas pequenas?
2. <!-- id: menu.interaction-design.21 --> Itens e acionadores possuem área tocável suficiente?
3. <!-- id: menu.interaction-design.22 --> A ordem visual no menu mobile acompanha a ordem de navegação?

<!-- id: menu.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: menu.interaction-design.26 --> Links e botões do menu têm foco visível?
2. <!-- id: menu.interaction-design.27 --> `TAB` percorre os itens na ordem esperada?
3. <!-- id: menu.interaction-design.29 --> `ESC` fecha submenus ou menus temporários quando aplicável?
4. <!-- id: menu.interaction-design.31 --> O foco retorna para o acionador quando um menu temporário é fechado?

<!-- id: menu.interaction-design.32 -->
### Projetando para uso com leitor de telas

1. <!-- id: menu.interaction-design.34 --> A região de navegação tem nome acessível quando necessário?
2. <!-- id: menu.interaction-design.35 --> Links possuem nomes claros e únicos dentro do contexto?
3. <!-- id: menu.interaction-design.36 --> Submenus expõem estado aberto ou fechado quando aplicável?

<!-- id: menu.extension.1 -->
### Ampliação editorial — padrões e decisões de interação

<!-- id: menu.extension.2 -->
Adaptação editorial do Magoo: complementa as orientações anteriores com decisões de desenho, documentação e revisão. As referências apoiam a adaptação; estes cenários não representam testes executados nem certificação.

<!-- id: menu.extension.3 -->
#### Navegação, ações e contexto

<!-- id: menu.extension.4 -->
Na navegação comum de site, links levam a destinos e botões mostram ou ocultam grupos de links. Preserve a navegação por `Tab` e `Shift + Tab` e identifique a página atual. A aparência de dropdown não exige role="menu".

<!-- id: menu.extension.5 -->
Um menu de ações reúne comandos, como Editar ou Duplicar. Se adotar o padrão ARIA menu, documente abertura, foco inicial, navegação por `setas`, ativação e saída. Não aplique a esse padrão a regra de percorrer todos os itens com `Tab` usada na navegação comum.

<!-- id: menu.extension.6 -->
Um menu contextual apresenta ações sobre um item identificado. Ofereça um botão acessível, como Ações de Relatório mensal, além de eventual `clique secundário` ou `gesto prolongado`. Documente o atalho de teclado quando disponível e mantenha claro sobre qual item a ação será executada.

<!-- id: menu.extension.7 -->
#### O que desenhar e documentar

<!-- id: menu.extension.8 -->
Mostre acionador, aberto, fechado, foco, itens indisponíveis e submenus quando existirem. Separe o link de destino do botão que expande um grupo quando os dois forem necessários. Não dependa apenas de hover ou de um ícone sem nome.

<!-- id: menu.extension.9 -->
No menu de ações ARIA, `Enter` ou `Espaço` no botão abrem o menu e levam o foco ao primeiro item; `setas` percorrem os itens. `Esc` fecha e devolve o foco ao acionador. `Tab` sai do menu, em vez de percorrer cada item. Submenus exigem documentar também a entrada, a saída e o retorno ao item pai.

<!-- id: menu.extension.10 -->
Após executar uma ação, direcione o foco conforme o resultado: por exemplo, para o diálogo aberto ou para um controle próximo se o item original for removido. Em telas pequenas, mantenha todas as ações disponíveis e o menu dentro da área visível.

<!-- id: menu.extension.11 -->
#### Revisão do desenho e da implementação

<!-- id: menu.extension.12 -->
No desenho, confira se destino, comando e contexto são reconhecíveis. Na implementação, verifique o padrão escolhido, nomes, estado de expansão, sequência de foco e fechamento por teclado, toque e leitor de telas. Controles ocultos não devem permanecer no percurso do foco.

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: menu.extension.methods-scope -->
Escopo: os métodos básicos abaixo descrevem navegação comum de site. Para menus de ações ARIA e menus contextuais, consulte as diferenças de foco e teclado na ampliação editorial da aba Design de interação.

<!-- id: menu.interaction-methods.1 -->

<!-- id: menu.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Menu.

<!-- id: menu.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: menu.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: menu.interaction-methods.10 --> Clicar em links navega para o destino correspondente.
- <!-- id: menu.interaction-methods.11 --> Clicar em botões de submenu alterna sua exibição.
- <!-- id: menu.interaction-methods.12 --> Hover pode revelar pistas visuais, mas não deve ser o único método de abertura.

<!-- id: menu.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: menu.interaction-methods.16 --> `TAB` navega pelos links e botões do menu.
- <!-- id: menu.interaction-methods.18 --> `ENTER` aciona links e botões.
- <!-- id: menu.interaction-methods.20 --> `SPACE` aciona botões de abertura quando existirem.
- <!-- id: menu.interaction-methods.22 --> `ESC` fecha menus ou submenus temporários quando aplicável.

<!-- id: menu.interaction-methods.24 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: menu.methods-review.2 --> Usar os comandos de regiões do leitor de telas permite localizar a navegação pelo seu nome.
- <!-- id: menu.methods-review.4 --> Percorrer os links com leitor de telas permite identificar cada destino e o agrupamento em que ele está.
- <!-- id: menu.methods-review.6 --> Acionar um botão de submenu abre ou fecha o grupo e permite perceber o novo estado.
- <!-- id: menu.methods-review.8 --> Na navegação comum de site, `Tab` percorre links e botões; em menu de ações ARIA, `setas` percorrem os itens e `Esc` fecha o menu.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: menu.acceptance-criteria.1 -->

<!-- id: menu.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: menu.acceptance-criteria.7 -->
### Cenário: Considerando que estou em uma página que contém menu de navegação

<!-- id: menu.acceptance-criteria.8 -->
#### Navegação por teclado

1. <!-- id: menu.acceptance-criteria.10 --> QUANDO uso a tecla `Tab` para mover o foco para o menu
2. <!-- id: menu.acceptance-criteria.12 --> VEJO foco visível nos links e botões do menu
3. <!-- id: menu.acceptance-criteria.13 --> ENTÃO, quando aciono um link com `Enter`
4. <!-- id: menu.acceptance-criteria.15 --> VEJO que o destino correspondente é carregado
5. <!-- id: menu.acceptance-criteria.16 --> ENTÃO, quando aciono um botão de submenu
6. <!-- id: menu.acceptance-criteria.17 --> VEJO que o submenu abre ou fecha

<!-- id: menu.acceptance-criteria.18 -->
#### Leitor de telas para desktop

1. <!-- id: menu.acceptance-criteria.20 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - <!-- id: menu.acceptance-criteria.22 --> OUÇO que o menu pertence a uma região de navegação quando aplicável.
   - <!-- id: menu.acceptance-criteria.23 --> OUÇO nomes claros para links e botões.
   - <!-- id: menu.acceptance-criteria.24 --> OUÇO o estado aberto ou fechado em acionadores de submenu.
2. <!-- id: menu.acceptance-criteria.25 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: menu.acceptance-criteria.26 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: menu.acceptance-criteria.27 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: menu.acceptance-criteria.29 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - <!-- id: menu.acceptance-criteria.31 --> OUÇO que o menu pertence a uma região de navegação quando aplicável.
   - <!-- id: menu.acceptance-criteria.32 --> OUÇO nomes claros para links e botões.
   - <!-- id: menu.acceptance-criteria.33 --> Consigo abrir, navegar e fechar o menu sem acessar conteúdo escondido indevidamente.
2. <!-- id: menu.acceptance-criteria.34 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: menu.acceptance-criteria.35 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: menu.extension.13 -->
### Cenários complementares — ampliação editorial

<!-- id: menu.extension.14 -->
#### Navegação comum: abrir um grupo

1. <!-- id: menu.gherkin-standard.1 --> DADA uma navegação comum com grupo recolhido
2. <!-- id: menu.gherkin-standard.2 --> QUANDO aciono seu botão por teclado
3. <!-- id: menu.gherkin-standard.3 --> ENTÃO o estado expandido é comunicado e os links ficam disponíveis na sequência de `Tab`.

<!-- id: menu.extension.16 -->
#### Menu de ações: abrir, percorrer e cancelar

1. <!-- id: menu.gherkin-standard.4 --> DADO um botão de menu de ações ARIA
2. <!-- id: menu.gherkin-standard.5 --> QUANDO abro com `Enter` ou `Espaço`, percorro os itens com `setas` e pressiono `Esc`
3. <!-- id: menu.gherkin-standard.6 --> ENTÃO o menu fecha sem executar uma ação e o foco retorna ao botão.

<!-- id: menu.extension.18 -->
#### Menu contextual sem clique secundário

1. <!-- id: menu.gherkin-standard.7 --> DADO um item com ações contextuais
2. <!-- id: menu.gherkin-standard.8 --> QUANDO uso o botão de ações por teclado ou toque
3. <!-- id: menu.gherkin-standard.9 --> ENTÃO acesso as mesmas ações e consigo identificar o item ao qual se aplicam.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: menu.considerations.1 -->

<!-- id: menu.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Menu.

- <!-- id: menu.considerations.5 --> Menu de navegação de site não deve ser tratado automaticamente como `role="menu"`; esse padrão é mais adequado para menus de aplicação.
- <!-- id: menu.considerations.7 --> Submenus acionados apenas por hover deixam pessoas usuárias de teclado e toque de fora.
- <!-- id: menu.considerations.8 --> Menu mobile deve manter ordem visual e ordem de foco coerentes.

<!-- id: menu.methods-review.9 -->
### Notas de implementação e decisões de comportamento

- <!-- id: menu.interaction-methods.26 --> Use `nav` para menus de navegação.

- <!-- id: menu.interaction-methods.28 --> Use listas quando houver agrupamento de links.

- <!-- id: menu.interaction-methods.29 --> Use `aria-expanded` em acionadores de submenu.

- <!-- id: menu.interaction-methods.31 --> Evite aplicar `role="menu"` em navegação comum de site.

<!-- id: references -->
## Referências

<!-- id: menu.references.1 -->

<!-- id: menu.references.2 -->
Referências adicionais sobre componentes do tipo Menu.

<!-- id: menu.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: menu.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: menu.references.10 -->
### Padrões de Design

- <!-- id: menu.references.12 --> [W3C APG: Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- <!-- id: menu.references.17 --> [W3C APG: Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- <!-- id: menu.references.22 --> [W3C APG: Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)
- <!-- id: menu.references.27 --> [MDN Web Docs: nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav)

<!-- id: menu.references.32 -->
### Design System

- <!-- id: menu.references.34 --> [US.gov - Header](https://designsystem.digital.gov/components/header/)
- <!-- id: menu.references.39 --> [US.gov - Side navigation](https://designsystem.digital.gov/components/sidenav/)
- <!-- id: menu.references.44 --> [IBM Carbon - UI shell header](https://carbondesignsystem.com/components/ui-shell-header/usage/)
- <!-- id: menu.references.49 --> [Adobe Spectrum - Menu](https://spectrum.adobe.com/page/menu/)
- <!-- id: menu.references.54 --> [Bootstrap - Navbar](https://getbootstrap.com/docs/5.2/components/navbar/)
- <!-- id: menu.references.59 --> [Bootstrap - Dropdowns](https://getbootstrap.com/docs/5.2/components/dropdowns/)

<!-- id: menu.extension.20 -->
### Referências da ampliação editorial

<!-- id: menu.extension.23 -->
[W3C APG — Disclosure navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)

<!-- id: menu.extension.26 -->
[W3C APG — Menu button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)

<!-- id: menu.extension.29 -->
[W3C APG — Menu and menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)
