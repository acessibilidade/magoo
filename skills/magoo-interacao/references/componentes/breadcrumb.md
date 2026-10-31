# Breadcrumb

- ID: `breadcrumb`
- Categoria: navegacao
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-breadcrumb.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Mostra a localização da página na hierarquia e oferece caminhos de volta aos níveis anteriores.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para mostrar a localização atual na hierarquia e voltar a níveis anteriores.

#### O que desenhar

Mostre os níveis na ordem, separadores e a página atual distinguível.

#### Como se comporta

Os links levam aos níveis anteriores e são acionados com `Enter`. O último item representa a página atual; separadores não recebem foco.

#### O que documentar no Figma

Registre os destinos e a identificação da página atual, evitando tornar o item atual uma ação de navegação.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Breadcrumb.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir com o componente é possível perceber visualmente que o componente é interativo?
2. Antes de interagir com o componente é possível perceber visualmente que se trata de um menu de navegação?
3. Antes de interagir com o componente é possível perceber visualmente qual é a posição atual indicada?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse nos componentes acionáveis?
2. Há feedback visual ao clicar no componente acionável?
3. Ao clicar em um dos componentes acionáveis, ocorre o carregamento da tela e também a atualização de estado dos componentes?

### Projetando para uso com gestos

1. Há feedback visual ao acionar o componente?
2. Ao acionar um dos componentes acionáveis, ocorre o carregamento da tela e também a atualização de estado dos componentes?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há feedback visual ao focar no componente acionável?
2. É possível interagir com o componente acionável através da tecla "`enter`"?
3. Ao ser acionado por teclado o componente acionável direciona a pessoa para seu respectivo conteúdo?

### Projetando para uso com leitor de telas

1. Ao focar em um componente acionável de um breadcrumb é possível ouvir de que se trata de um link (e não um botão)?
2. Ao focar em um componente acionável de um breadcrumb é possível ouvir claramente o objetivo do link?
3. Ao focar no último componente do agrupamento de um breadcrumb é possível ouvir de que se trata da tela atual e este não direciona para nenhum lugar?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Breadcrumb.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- Ao clicar com o botão do mouse, o componente deve retornar feedback visual confirmando o clique.
- Ao clicar com o botão do mouse, o conteúdo deve ser carregado.
- Ao clicar com o botão do mouse, o último componente do agrupamento não direciona para nenhum local e ele representa a tela atual?

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Ao focar com teclado, o componente deve retornar feedback visual com foco visível.
- Deve ser possível navegar para o próximo item ou para o anterior utilizando as teclas `TAB` ou `SHIFT`+`TAB` respectivamente.
- Deve ser possível acionar componentes acionáveis com a tecla `ENTER`.
- O último componente do agrupamento pode receber foco, mas não deve ser acionável.
- Os separadores de componentes não recebem foco por teclado.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar no agrupamento de componentes em um breadcrumb é possível identificar de que se trata de uma lista ordenada.
- Ao focar em um componente acionável em um breadcrumb é possível ouvir de que se trata de um link.
- Ao focar em um componente acionável em um breadcrumb deve ser possível identificar o objetivo do link com clareza.
- Caso seja configurado o foco no último componente do agrupamento em um breadcrumb deve ser possível ouvir de que se trata da tela atual.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém breadcrumb

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para acionar um link
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso a tecla `Enter` para acionar o link
4. VEJO que meu navegador está indo para algum lugar

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um link

   - VEJO que os nomes dos links correspondem aos títulos das páginas de destino
   - OUÇO links identificados como pontos de referência em um sistema de navegação por trilha de navegação.
   - OUÇO que o link da página atual é indicado quando o foco está na página.
   - Posso OUVIR os atalhos de leitor de tela como um ponto de referência de navegação (landmarks).
2. ENTÃO, quando uso a tecla `Enter` para ativar o link
3. OUÇO dizer que meu navegador está indo para algum lugar.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um link, acontece o seguinte:

   - OUÇO que os nomes dos links correspondem aos títulos das páginas de destino
   - OUÇO links identificados como pontos de referência em um sistema de navegação por trilha de navegação.
   - OUÇO que o link da página atual é indicado quando o foco está na página.
   - Posso OUVIR os atalhos de leitor de tela como um ponto de referência de navegação (landmarks).
2. ENTÃO, quando eu toco duas vezes para ativar o link
3. OUÇO dizer que meu navegador está indo para algum lugar.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Breadcrumb.

- É importante que os separadores de componentes sejam construídos de forma apenas visual e não recebam foco ao se navegar por teclado ou sejam lidos por leitores de tela.
- Breadcrumbs são componentes de navegação em formato de lista ordenada. Devem ser construídos com a semântica adequada.
- O último item de um breadcrumb não deve ser acionável, pois é a tela atual. No entanto, é possível configurar o foco por teclado informando apenas que é a tela atual.

## Referências

Referências adicionais sobre componentes do tipo Breadcrumb.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Apple - Human Interface Guidelines - Path Controls](https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/path-controls)
- [Google - Material Design](https://m3.material.io/components)
- [Documentação de padrões HTML - Breadcrumb Navigation](https://html.spec.whatwg.org/multipage/semantics-other.html#rel-up)
- [W3C APG - Breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

### Design System

- [W3C Design System: Breadcrumb](https://design-system.w3.org/components/breadcrumbs.html)
- [Deque Cauldron: Breadcrumb](https://cauldron.dequelabs.com/components/Breadcrumb)
- [eBay MIND Patterns: Breadcrumb](https://ebay.gitbook.io/mindpatterns/navigation/breadcrumbs)
- [Gov.UK - Breadcrumb](https://design-system.service.gov.uk/components/breadcrumbs/)
- [US.gov - Breadcrumb](https://designsystem.digital.gov/components/breadcrumb/)
- [Gov.AU - Breadcrumb](https://gold.designsystemau.org/components/breadcrumbs/)
- [Salesforce Lightning - Breadcrumb](https://www.lightningdesignsystem.com/components/breadcrumbs/)
- [IBM Carbon - Breadcrumb](https://carbondesignsystem.com/components/breadcrumb/usage/)
- [Adobe Spectrum - Breadcrumb](https://spectrum.adobe.com/page/breadcrumbs/)
- [Github Primer - Breadcrumb](https://primer.style/design/components/breadcrumbs)
- [Bootstrap - Breadcrumb](https://getbootstrap.com/docs/5.2/components/breadcrumb/)
