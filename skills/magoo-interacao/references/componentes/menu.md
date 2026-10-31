# Menu

- ID: `menu`
- Categoria: navegacao
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-menu.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Reúne opções de navegação ou ações em uma estrutura organizada e previsível.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para reunir destinos de navegação ou ações de forma previsível.

#### O que desenhar

Mostre itens, submenus quando existirem, estado aberto ou fechado e foco visível.

#### Como se comporta

Na navegação comum, `Tab` percorre links e botões. Em menus de ações ARIA, `setas` percorrem itens; `Esc` fecha e devolve o foco ao acionador. Menu contextual também precisa de acesso por teclado e toque.

#### O que documentar no Figma

Diferencie navegação, menu de ações e menu contextual. Registre o padrão de teclado, a abertura, o fechamento, o item ao qual a ação se aplica e o foco após executar comandos.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes do tipo Menu.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir é possível perceber que o menu contém opções de navegação?
2. O item atual ou seção ativa é visualmente identificável?
3. Itens com submenu deixam claro que abrem mais opções?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse em itens acionáveis?
2. Ao clicar em um link, a página ou seção correspondente é carregada?
3. Ao clicar em um acionador de submenu, o submenu abre ou fecha de forma previsível?

### Projetando para uso com gestos

1. O menu abre e fecha de forma confortável em telas pequenas?
2. Itens e acionadores possuem área tocável suficiente?
3. A ordem visual no menu mobile acompanha a ordem de navegação?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Links e botões do menu têm foco visível?
2. `TAB` percorre os itens na ordem esperada?
3. `ESC` fecha submenus ou menus temporários quando aplicável?
4. O foco retorna para o acionador quando um menu temporário é fechado?

### Projetando para uso com leitor de telas

1. A região de navegação tem nome acessível quando necessário?
2. Links possuem nomes claros e únicos dentro do contexto?
3. Submenus expõem estado aberto ou fechado quando aplicável?

### Ampliação editorial — padrões e decisões de interação

Adaptação editorial do Magoo: complementa as orientações anteriores com decisões de desenho, documentação e revisão. As referências apoiam a adaptação; estes cenários não representam testes executados nem certificação.

#### Navegação, ações e contexto

Na navegação comum de site, links levam a destinos e botões mostram ou ocultam grupos de links. Preserve a navegação por `Tab` e `Shift + Tab` e identifique a página atual. A aparência de dropdown não exige role="menu".

Um menu de ações reúne comandos, como Editar ou Duplicar. Se adotar o padrão ARIA menu, documente abertura, foco inicial, navegação por `setas`, ativação e saída. Não aplique a esse padrão a regra de percorrer todos os itens com `Tab` usada na navegação comum.

Um menu contextual apresenta ações sobre um item identificado. Ofereça um botão acessível, como Ações de Relatório mensal, além de eventual `clique secundário` ou `gesto prolongado`. Documente o atalho de teclado quando disponível e mantenha claro sobre qual item a ação será executada.

#### O que desenhar e documentar

Mostre acionador, aberto, fechado, foco, itens indisponíveis e submenus quando existirem. Separe o link de destino do botão que expande um grupo quando os dois forem necessários. Não dependa apenas de hover ou de um ícone sem nome.

No menu de ações ARIA, `Enter` ou `Espaço` no botão abrem o menu e levam o foco ao primeiro item; `setas` percorrem os itens. `Esc` fecha e devolve o foco ao acionador. `Tab` sai do menu, em vez de percorrer cada item. Submenus exigem documentar também a entrada, a saída e o retorno ao item pai.

Após executar uma ação, direcione o foco conforme o resultado: por exemplo, para o diálogo aberto ou para um controle próximo se o item original for removido. Em telas pequenas, mantenha todas as ações disponíveis e o menu dentro da área visível.

#### Revisão do desenho e da implementação

No desenho, confira se destino, comando e contexto são reconhecíveis. Na implementação, verifique o padrão escolhido, nomes, estado de expansão, sequência de foco e fechamento por teclado, toque e leitor de telas. Controles ocultos não devem permanecer no percurso do foco.

## Métodos de Interação

Escopo: os métodos básicos abaixo descrevem navegação comum de site. Para menus de ações ARIA e menus contextuais, consulte as diferenças de foco e teclado na ampliação editorial da aba Design de interação.

Possíveis métodos de interação em componentes do tipo Menu.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar em links navega para o destino correspondente.
- Clicar em botões de submenu alterna sua exibição.
- Hover pode revelar pistas visuais, mas não deve ser o único método de abertura.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `TAB` navega pelos links e botões do menu.
- `ENTER` aciona links e botões.
- `SPACE` aciona botões de abertura quando existirem.
- `ESC` fecha menus ou submenus temporários quando aplicável.

### Interação com teclado (ou gestos) + leitor de telas

- Usar os comandos de regiões do leitor de telas permite localizar a navegação pelo seu nome.
- Percorrer os links com leitor de telas permite identificar cada destino e o agrupamento em que ele está.
- Acionar um botão de submenu abre ou fecha o grupo e permite perceber o novo estado.
- Na navegação comum de site, `Tab` percorre links e botões; em menu de ações ARIA, `setas` percorrem os itens e `Esc` fecha o menu.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém menu de navegação

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para o menu
2. VEJO foco visível nos links e botões do menu
3. ENTÃO, quando aciono um link com `Enter`
4. VEJO que o destino correspondente é carregado
5. ENTÃO, quando aciono um botão de submenu
6. VEJO que o submenu abre ou fecha

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - OUÇO que o menu pertence a uma região de navegação quando aplicável.
   - OUÇO nomes claros para links e botões.
   - OUÇO o estado aberto ou fechado em acionadores de submenu.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - OUÇO que o menu pertence a uma região de navegação quando aplicável.
   - OUÇO nomes claros para links e botões.
   - Consigo abrir, navegar e fechar o menu sem acessar conteúdo escondido indevidamente.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

### Cenários complementares — ampliação editorial

#### Navegação comum: abrir um grupo

1. DADA uma navegação comum com grupo recolhido
2. QUANDO aciono seu botão por teclado
3. ENTÃO o estado expandido é comunicado e os links ficam disponíveis na sequência de `Tab`.

#### Menu de ações: abrir, percorrer e cancelar

1. DADO um botão de menu de ações ARIA
2. QUANDO abro com `Enter` ou `Espaço`, percorro os itens com `setas` e pressiono `Esc`
3. ENTÃO o menu fecha sem executar uma ação e o foco retorna ao botão.

#### Menu contextual sem clique secundário

1. DADO um item com ações contextuais
2. QUANDO uso o botão de ações por teclado ou toque
3. ENTÃO acesso as mesmas ações e consigo identificar o item ao qual se aplicam.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Menu.

- Menu de navegação de site não deve ser tratado automaticamente como `role="menu"`; esse padrão é mais adequado para menus de aplicação.
- Submenus acionados apenas por hover deixam pessoas usuárias de teclado e toque de fora.
- Menu mobile deve manter ordem visual e ordem de foco coerentes.

### Notas de implementação e decisões de comportamento

- Use `nav` para menus de navegação.

- Use listas quando houver agrupamento de links.

- Use `aria-expanded` em acionadores de submenu.

- Evite aplicar `role="menu"` em navegação comum de site.

## Referências

Referências adicionais sobre componentes do tipo Menu.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [W3C APG: Menu Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)
- [W3C APG: Menu and Menubar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)
- [MDN Web Docs: nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav)

### Design System

- [US.gov - Header](https://designsystem.digital.gov/components/header/)
- [US.gov - Side navigation](https://designsystem.digital.gov/components/sidenav/)
- [IBM Carbon - UI shell header](https://carbondesignsystem.com/components/ui-shell-header/usage/)
- [Adobe Spectrum - Menu](https://spectrum.adobe.com/page/menu/)
- [Bootstrap - Navbar](https://getbootstrap.com/docs/5.2/components/navbar/)
- [Bootstrap - Dropdowns](https://getbootstrap.com/docs/5.2/components/dropdowns/)

### Referências da ampliação editorial

[W3C APG — Disclosure navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)

[W3C APG — Menu button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)

[W3C APG — Menu and menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)
