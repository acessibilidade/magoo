# Paginação

- ID: `paginacao`
- Categoria: navegacao
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-paginacao.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Divide conjuntos extensos de conteúdo em páginas e permite navegar entre elas.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para dividir um conjunto extenso de conteúdo em páginas.

#### O que desenhar

Mostre a página atual, números e anterior ou próximo quando aplicáveis. Distinga controles indisponíveis.

#### Como se comporta

Selecionar uma página carrega seu conteúdo. Links usam `Enter`; botões também aceitam espaço. Reticências não são controles.

#### O que documentar no Figma

Defina os destinos, o nome da paginação e como comunicar a página atual. Em atualização parcial, registre onde o foco fica ou vai.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Paginação.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir com o componente é possível perceber visualmente que se trata de um agrupamento de navegação entre páginas relacionadas?
2. Antes de interagir com o componente é possível perceber visualmente qual é a página atual?
3. Antes de interagir com o componente é possível perceber visualmente quais controles estão disponíveis, indisponíveis ou representam páginas omitidas?
4. Quando houver reticências ou compactação de páginas, fica claro que existem páginas intermediárias não exibidas?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse nos controles acionáveis?
2. Há feedback visual ao clicar no controle acionável?
3. Ao clicar em uma página, no botão anterior ou no botão próximo, ocorre o carregamento do conteúdo correspondente?
4. Após o carregamento, a página atual, o título da página e os controles anterior/próximo são atualizados?
5. Controles indisponíveis, como "anterior" na primeira página ou "próximo" na última página, deixam claro que não podem ser acionados?

### Projetando para uso com gestos

1. Os alvos tocáveis possuem área suficiente para acionamento confortável?
2. Há feedback visual ao acionar um controle de paginação?
3. Ao acionar uma página, o conteúdo relacionado é carregado e a indicação de página atual é atualizada?
4. Em telas menores, a quantidade de páginas exibidas é reduzida sem esconder a página atual, a anterior, a próxima, a primeira e a última quando forem necessárias?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há feedback visual ao focar em cada controle acionável?
2. É possível navegar entre os controles acionáveis utilizando `TAB` e `SHIFT`+`TAB`?
3. É possível acionar links de páginas com a tecla `ENTER`?
4. Controles implementados como botões podem ser acionados com `ENTER` e `SPACE`?
5. Elementos de reticências usados apenas para indicar páginas ocultas não entram na ordem de foco?
6. Após a troca de página, o foco é gerenciado de forma consistente, indo para o início do novo conteúdo ou permanecendo em um ponto previsível do fluxo.

### Projetando para uso com leitor de telas

1. Ao navegar por landmarks é possível identificar a paginação como uma região de navegação com nome acessível claro?
2. Ao focar em um controle acionável é possível ouvir se ele é um link ou botão?
3. Ao focar em um número de página é possível ouvir o número e o objetivo do controle, por exemplo "Página 3"?
4. Ao focar na página atual é possível ouvir que aquela é a página atual através de `aria-current="page"`?
5. Ao mudar de página, o novo conteúdo ou o novo estado da tela é perceptível para pessoas usando leitor de telas?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Paginação.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ao passar o mouse, cada controle acionável deve retornar feedback visual confirmando possibilidade de interação.
- Ao clicar em um número de página, o conteúdo correspondente deve ser carregado.
- Ao clicar em "anterior" ou "próximo", o conteúdo da página imediatamente anterior ou posterior deve ser carregado.
- A página atual deve possuir indicação visual diferente dos demais itens e também atualização semântica.
- Controles indisponíveis devem possuir aparência de estado desabilitado e não devem executar ação.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Ao focar com teclado, cada controle acionável deve retornar feedback visual com foco visível.
- Deve ser possível navegar para o próximo item ou para o anterior utilizando as teclas `TAB` ou `SHIFT`+`TAB` respectivamente.
- Links de paginação devem ser acionados com a tecla `ENTER`.
- Botões de paginação, quando utilizados em experiências dinâmicas, devem ser acionados com as teclas `ENTER` e `SPACE`.
- Ao navegar pelos links com leitor de telas, a pessoa identifica qual página é a atual.
- Itens meramente visuais, como reticências, não devem receber foco por teclado.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar no agrupamento de componentes em uma paginação é possível identificar de que se trata de uma navegação.
- Quando houver mais de uma navegação na página, o nome acessível da paginação deve diferenciar sua finalidade, por exemplo "Paginação dos resultados de busca".
- Ao focar em um controle acionável deve ser possível ouvir seu nome acessível, papel e estado.
- A página atual deve ser anunciada como página atual.
- Quando a troca de página recarregar apenas parte da tela, a mudança de conteúdo deve ser perceptível e o foco deve seguir uma estratégia consistente.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém paginação

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para os controles de paginação
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso a tecla `Enter` para acionar um link de página
4. VEJO que o conteúdo correspondente à página selecionada é carregado
5. E VEJO que a indicação visual da página atual é atualizada

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um controle de paginação

   - OUÇO que a paginação é identificada como uma região de navegação.
   - OUÇO o nome acessível da navegação de paginação.
   - OUÇO o nome de cada controle, como página anterior, próxima página ou página específica.
   - OUÇO que a página atual é indicada quando o foco está no item correspondente.
2. ENTÃO, quando uso a tecla `Enter` para ativar um controle de paginação
3. OUÇO ou percebo que o navegador está indo para outro conteúdo ou que o conteúdo da página foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um controle de paginação, acontece o seguinte:

   - OUÇO que a paginação é identificada como uma região de navegação.
   - OUÇO o nome acessível da navegação de paginação.
   - OUÇO o nome de cada controle, como página anterior, próxima página ou página específica.
   - OUÇO que a página atual é indicada quando o foco está no item correspondente.
2. ENTÃO, quando eu toco duas vezes para ativar um controle de paginação
3. OUÇO ou percebo que o navegador está indo para outro conteúdo ou que o conteúdo da página foi atualizado.

## Pontos de atenção

### Notas de implementação e decisões de comportamento

- A página atual deve ser identificada com `aria-current="page"`.

## Referências

Referências adicionais sobre componentes do tipo Paginação.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Google - Material Design](https://m3.material.io/components)
- [MDN Web Docs - ARIA: aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [W3C APG - Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)

### Design System

- [W3C Design System: Pagination](https://design-system.w3.org/components/pagination.html)
- [Gov.UK - Pagination](https://design-system.service.gov.uk/components/pagination/)
- [US.gov - Pagination](https://designsystem.digital.gov/components/pagination/)
- [IBM Carbon - Pagination](https://carbondesignsystem.com/components/pagination/usage/)
- [Adobe Spectrum - Pagination](https://spectrum.adobe.com/page/pagination/)
- [Github Primer - Pagination](https://primer.style/product/components/pagination/accessibility/)
- [Bootstrap - Pagination](https://getbootstrap.com/docs/5.2/components/pagination/)
