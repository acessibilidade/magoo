# Paginação

- ID: `paginacao`
- Categoria: navegacao
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-paginacao.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Divide conjuntos extensos de conteúdo em páginas e permite navegar entre elas.

<!-- id: interaction-design -->
## Design de interação

<!-- id: paginacao.designer-guide.frame -->
<!-- id: paginacao.designer-guide.1 -->
### Guia rápido para designers

<!-- id: paginacao.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: paginacao.designer-guide.3 -->
#### Quando usar

<!-- id: paginacao.designer-guide.4 -->
Use para dividir um conjunto extenso de conteúdo em páginas.

<!-- id: paginacao.designer-guide.5 -->
#### O que desenhar

<!-- id: paginacao.designer-guide.6 -->
Mostre a página atual, números e anterior ou próximo quando aplicáveis. Distinga controles indisponíveis.

<!-- id: paginacao.designer-guide.7 -->
#### Como se comporta

<!-- id: paginacao.designer-guide.8 -->
Selecionar uma página carrega seu conteúdo. Links usam `Enter`; botões também aceitam espaço. Reticências não são controles.

<!-- id: paginacao.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: paginacao.designer-guide.10 -->
Defina os destinos, o nome da paginação e como comunicar a página atual. Em atualização parcial, registre onde o foco fica ou vai.

<!-- id: paginacao.designer-guide.11 -->
#### Como revisar

<!-- id: paginacao.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: paginacao.designer-guide.13 -->
### Orientações completas

<!-- id: paginacao.interaction-design.1 -->

<!-- id: paginacao.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Paginação.

<!-- id: paginacao.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: paginacao.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: paginacao.interaction-design.9 --> Antes de interagir com o componente é possível perceber visualmente que se trata de um agrupamento de navegação entre páginas relacionadas?
2. <!-- id: paginacao.interaction-design.10 --> Antes de interagir com o componente é possível perceber visualmente qual é a página atual?
3. <!-- id: paginacao.interaction-design.11 --> Antes de interagir com o componente é possível perceber visualmente quais controles estão disponíveis, indisponíveis ou representam páginas omitidas?
4. <!-- id: paginacao.interaction-design.12 --> Quando houver reticências ou compactação de páginas, fica claro que existem páginas intermediárias não exibidas?

<!-- id: paginacao.interaction-design.13 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: paginacao.interaction-design.16 --> Há feedback visual ao passar o mouse nos controles acionáveis?
2. <!-- id: paginacao.interaction-design.17 --> Há feedback visual ao clicar no controle acionável?
3. <!-- id: paginacao.interaction-design.18 --> Ao clicar em uma página, no botão anterior ou no botão próximo, ocorre o carregamento do conteúdo correspondente?
4. <!-- id: paginacao.interaction-design.19 --> Após o carregamento, a página atual, o título da página e os controles anterior/próximo são atualizados?
5. <!-- id: paginacao.interaction-design.20 --> Controles indisponíveis, como "anterior" na primeira página ou "próximo" na última página, deixam claro que não podem ser acionados?

<!-- id: paginacao.interaction-design.21 -->
### Projetando para uso com gestos

1. <!-- id: paginacao.interaction-design.23 --> Os alvos tocáveis possuem área suficiente para acionamento confortável?
2. <!-- id: paginacao.interaction-design.24 --> Há feedback visual ao acionar um controle de paginação?
3. <!-- id: paginacao.interaction-design.25 --> Ao acionar uma página, o conteúdo relacionado é carregado e a indicação de página atual é atualizada?
4. <!-- id: paginacao.interaction-design.26 --> Em telas menores, a quantidade de páginas exibidas é reduzida sem esconder a página atual, a anterior, a próxima, a primeira e a última quando forem necessárias?

<!-- id: paginacao.interaction-design.27 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: paginacao.interaction-design.30 --> Há feedback visual ao focar em cada controle acionável?
2. <!-- id: paginacao.interaction-design.31 --> É possível navegar entre os controles acionáveis utilizando `TAB` e `SHIFT`+`TAB`?
3. <!-- id: paginacao.interaction-design.35 --> É possível acionar links de páginas com a tecla `ENTER`?
4. <!-- id: paginacao.interaction-design.37 --> Controles implementados como botões podem ser acionados com `ENTER` e `SPACE`?
5. <!-- id: paginacao.interaction-design.40 --> Elementos de reticências usados apenas para indicar páginas ocultas não entram na ordem de foco?
6. <!-- id: paginacao.interaction-design.41 --> Após a troca de página, o foco é gerenciado de forma consistente, indo para o início do novo conteúdo ou permanecendo em um ponto previsível do fluxo.

<!-- id: paginacao.interaction-design.42 -->
### Projetando para uso com leitor de telas

1. <!-- id: paginacao.interaction-design.44 --> Ao navegar por landmarks é possível identificar a paginação como uma região de navegação com nome acessível claro?
2. <!-- id: paginacao.interaction-design.45 --> Ao focar em um controle acionável é possível ouvir se ele é um link ou botão?
3. <!-- id: paginacao.interaction-design.46 --> Ao focar em um número de página é possível ouvir o número e o objetivo do controle, por exemplo "Página 3"?
4. <!-- id: paginacao.interaction-design.47 --> Ao focar na página atual é possível ouvir que aquela é a página atual através de `aria-current="page"`?
5. <!-- id: paginacao.interaction-design.49 --> Ao mudar de página, o novo conteúdo ou o novo estado da tela é perceptível para pessoas usando leitor de telas?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: paginacao.interaction-methods.1 -->

<!-- id: paginacao.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Paginação.

<!-- id: paginacao.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: paginacao.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: paginacao.interaction-methods.10 --> Ao passar o mouse, cada controle acionável deve retornar feedback visual confirmando possibilidade de interação.
- <!-- id: paginacao.interaction-methods.11 --> Ao clicar em um número de página, o conteúdo correspondente deve ser carregado.
- <!-- id: paginacao.interaction-methods.12 --> Ao clicar em "anterior" ou "próximo", o conteúdo da página imediatamente anterior ou posterior deve ser carregado.
- <!-- id: paginacao.interaction-methods.13 --> A página atual deve possuir indicação visual diferente dos demais itens e também atualização semântica.
- <!-- id: paginacao.interaction-methods.14 --> Controles indisponíveis devem possuir aparência de estado desabilitado e não devem executar ação.

<!-- id: paginacao.interaction-methods.15 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: paginacao.interaction-methods.18 --> Ao focar com teclado, cada controle acionável deve retornar feedback visual com foco visível.
- <!-- id: paginacao.interaction-methods.19 --> Deve ser possível navegar para o próximo item ou para o anterior utilizando as teclas `TAB` ou `SHIFT`+`TAB` respectivamente.
- <!-- id: paginacao.interaction-methods.23 --> Links de paginação devem ser acionados com a tecla `ENTER`.
- <!-- id: paginacao.interaction-methods.25 --> Botões de paginação, quando utilizados em experiências dinâmicas, devem ser acionados com as teclas `ENTER` e `SPACE`.
- <!-- id: paginacao.methods-review.2 --> Ao navegar pelos links com leitor de telas, a pessoa identifica qual página é a atual.
- <!-- id: paginacao.interaction-methods.30 --> Itens meramente visuais, como reticências, não devem receber foco por teclado.

<!-- id: paginacao.interaction-methods.31 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: paginacao.interaction-methods.33 --> Ao focar no agrupamento de componentes em uma paginação é possível identificar de que se trata de uma navegação.
- <!-- id: paginacao.interaction-methods.34 --> Quando houver mais de uma navegação na página, o nome acessível da paginação deve diferenciar sua finalidade, por exemplo "Paginação dos resultados de busca".
- <!-- id: paginacao.interaction-methods.35 --> Ao focar em um controle acionável deve ser possível ouvir seu nome acessível, papel e estado.
- <!-- id: paginacao.interaction-methods.36 --> A página atual deve ser anunciada como página atual.
- <!-- id: paginacao.interaction-methods.37 --> Quando a troca de página recarregar apenas parte da tela, a mudança de conteúdo deve ser perceptível e o foco deve seguir uma estratégia consistente.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: paginacao.acceptance-criteria.1 -->

<!-- id: paginacao.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: paginacao.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém paginação

<!-- id: paginacao.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: paginacao.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para os controles de paginação
2. <!-- id: paginacao.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: paginacao.acceptance-criteria.11 --> ENTÃO, quando uso a tecla `Enter` para acionar um link de página
4. <!-- id: paginacao.acceptance-criteria.13 --> VEJO que o conteúdo correspondente à página selecionada é carregado
5. <!-- id: paginacao.acceptance-criteria.14 --> E VEJO que a indicação visual da página atual é atualizada

<!-- id: paginacao.acceptance-criteria.15 -->
#### Leitor de telas para desktop

1. <!-- id: paginacao.acceptance-criteria.17 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um controle de paginação

   - <!-- id: paginacao.acceptance-criteria.19 --> OUÇO que a paginação é identificada como uma região de navegação.
   - <!-- id: paginacao.acceptance-criteria.20 --> OUÇO o nome acessível da navegação de paginação.
   - <!-- id: paginacao.acceptance-criteria.21 --> OUÇO o nome de cada controle, como página anterior, próxima página ou página específica.
   - <!-- id: paginacao.acceptance-criteria.22 --> OUÇO que a página atual é indicada quando o foco está no item correspondente.
2. <!-- id: paginacao.acceptance-criteria.23 --> ENTÃO, quando uso a tecla `Enter` para ativar um controle de paginação
3. <!-- id: paginacao.acceptance-criteria.24 --> OUÇO ou percebo que o navegador está indo para outro conteúdo ou que o conteúdo da página foi atualizado.

<!-- id: paginacao.acceptance-criteria.25 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: paginacao.acceptance-criteria.27 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um controle de paginação, acontece o seguinte:

   - <!-- id: paginacao.acceptance-criteria.29 --> OUÇO que a paginação é identificada como uma região de navegação.
   - <!-- id: paginacao.acceptance-criteria.30 --> OUÇO o nome acessível da navegação de paginação.
   - <!-- id: paginacao.acceptance-criteria.31 --> OUÇO o nome de cada controle, como página anterior, próxima página ou página específica.
   - <!-- id: paginacao.acceptance-criteria.32 --> OUÇO que a página atual é indicada quando o foco está no item correspondente.
2. <!-- id: paginacao.acceptance-criteria.33 --> ENTÃO, quando eu toco duas vezes para ativar um controle de paginação
3. <!-- id: paginacao.acceptance-criteria.34 --> OUÇO ou percebo que o navegador está indo para outro conteúdo ou que o conteúdo da página foi atualizado.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: paginacao.considerations.1 -->

<!-- id: paginacao.methods-review.3 -->
### Notas de implementação e decisões de comportamento

- <!-- id: paginacao.interaction-methods.28 --> A página atual deve ser identificada com `aria-current="page"`.

<!-- id: references -->
## Referências

<!-- id: paginacao.references.1 -->

<!-- id: paginacao.references.2 -->
Referências adicionais sobre componentes do tipo Paginação.

<!-- id: paginacao.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: paginacao.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: paginacao.references.10 -->
### Padrões de Design

- <!-- id: paginacao.references.12 --> [Google - Material Design](https://m3.material.io/components)
- <!-- id: paginacao.references.17 --> [MDN Web Docs - ARIA: aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- <!-- id: paginacao.references.22 --> [W3C APG - Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)

<!-- id: paginacao.references.27 -->
### Design System

- <!-- id: paginacao.references.29 --> [W3C Design System: Pagination](https://design-system.w3.org/components/pagination.html)
- <!-- id: paginacao.references.34 --> [Gov.UK - Pagination](https://design-system.service.gov.uk/components/pagination/)
- <!-- id: paginacao.references.39 --> [US.gov - Pagination](https://designsystem.digital.gov/components/pagination/)
- <!-- id: paginacao.references.44 --> [IBM Carbon - Pagination](https://carbondesignsystem.com/components/pagination/usage/)
- <!-- id: paginacao.references.49 --> [Adobe Spectrum - Pagination](https://spectrum.adobe.com/page/pagination/)
- <!-- id: paginacao.references.54 --> [Github Primer - Pagination](https://primer.style/product/components/pagination/accessibility/)
- <!-- id: paginacao.references.59 --> [Bootstrap - Pagination](https://getbootstrap.com/docs/5.2/components/pagination/)
