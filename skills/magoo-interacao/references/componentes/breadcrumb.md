# Breadcrumb

- ID: `breadcrumb`
- Categoria: navegacao
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-breadcrumb.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Mostra a localização da página na hierarquia e oferece caminhos de volta aos níveis anteriores.

<!-- id: interaction-design -->
## Design de interação

<!-- id: breadcrumb.designer-guide.frame -->
<!-- id: breadcrumb.designer-guide.1 -->
### Guia rápido para designers

<!-- id: breadcrumb.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: breadcrumb.designer-guide.3 -->
#### Quando usar

<!-- id: breadcrumb.designer-guide.4 -->
Use para mostrar a localização atual na hierarquia e voltar a níveis anteriores.

<!-- id: breadcrumb.designer-guide.5 -->
#### O que desenhar

<!-- id: breadcrumb.designer-guide.6 -->
Mostre os níveis na ordem, separadores e a página atual distinguível.

<!-- id: breadcrumb.designer-guide.7 -->
#### Como se comporta

<!-- id: breadcrumb.designer-guide.8 -->
Os links levam aos níveis anteriores e são acionados com `Enter`. O último item representa a página atual; separadores não recebem foco.

<!-- id: breadcrumb.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: breadcrumb.designer-guide.10 -->
Registre os destinos e a identificação da página atual, evitando tornar o item atual uma ação de navegação.

<!-- id: breadcrumb.designer-guide.11 -->
#### Como revisar

<!-- id: breadcrumb.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: breadcrumb.designer-guide.13 -->
### Orientações completas

<!-- id: breadcrumb.interaction-design.1 -->

<!-- id: breadcrumb.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Breadcrumb.

<!-- id: breadcrumb.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: breadcrumb.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: breadcrumb.interaction-design.9 --> Antes de interagir com o componente é possível perceber visualmente que o componente é interativo?
2. <!-- id: breadcrumb.interaction-design.10 --> Antes de interagir com o componente é possível perceber visualmente que se trata de um menu de navegação?
3. <!-- id: breadcrumb.interaction-design.11 --> Antes de interagir com o componente é possível perceber visualmente qual é a posição atual indicada?

<!-- id: breadcrumb.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: breadcrumb.interaction-design.15 --> Há feedback visual ao passar o mouse nos componentes acionáveis?
2. <!-- id: breadcrumb.interaction-design.16 --> Há feedback visual ao clicar no componente acionável?
3. <!-- id: breadcrumb.interaction-design.17 --> Ao clicar em um dos componentes acionáveis, ocorre o carregamento da tela e também a atualização de estado dos componentes?

<!-- id: breadcrumb.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: breadcrumb.interaction-design.20 --> Há feedback visual ao acionar o componente?
2. <!-- id: breadcrumb.interaction-design.21 --> Ao acionar um dos componentes acionáveis, ocorre o carregamento da tela e também a atualização de estado dos componentes?

<!-- id: breadcrumb.interaction-design.22 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: breadcrumb.interaction-design.25 --> Há feedback visual ao focar no componente acionável?
2. <!-- id: breadcrumb.interaction-design.26 --> É possível interagir com o componente acionável através da tecla "`enter`"?
3. <!-- id: breadcrumb.interaction-design.27 --> Ao ser acionado por teclado o componente acionável direciona a pessoa para seu respectivo conteúdo?

<!-- id: breadcrumb.interaction-design.28 -->
### Projetando para uso com leitor de telas

1. <!-- id: breadcrumb.interaction-design.30 --> Ao focar em um componente acionável de um breadcrumb é possível ouvir de que se trata de um link (e não um botão)?
2. <!-- id: breadcrumb.interaction-design.31 --> Ao focar em um componente acionável de um breadcrumb é possível ouvir claramente o objetivo do link?
3. <!-- id: breadcrumb.interaction-design.32 --> Ao focar no último componente do agrupamento de um breadcrumb é possível ouvir de que se trata da tela atual e este não direciona para nenhum lugar?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: breadcrumb.interaction-methods.1 -->

<!-- id: breadcrumb.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Breadcrumb.

<!-- id: breadcrumb.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: breadcrumb.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: breadcrumb.interaction-methods.10 --> Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- <!-- id: breadcrumb.interaction-methods.11 --> Ao clicar com o botão do mouse, o componente deve retornar feedback visual confirmando o clique.
- <!-- id: breadcrumb.interaction-methods.12 --> Ao clicar com o botão do mouse, o conteúdo deve ser carregado.
- <!-- id: breadcrumb.interaction-methods.13 --> Ao clicar com o botão do mouse, o último componente do agrupamento não direciona para nenhum local e ele representa a tela atual?

<!-- id: breadcrumb.interaction-methods.14 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: breadcrumb.interaction-methods.17 --> Ao focar com teclado, o componente deve retornar feedback visual com foco visível.
- <!-- id: breadcrumb.interaction-methods.18 --> Deve ser possível navegar para o próximo item ou para o anterior utilizando as teclas `TAB` ou `SHIFT`+`TAB` respectivamente.
- <!-- id: breadcrumb.interaction-methods.22 --> Deve ser possível acionar componentes acionáveis com a tecla `ENTER`.
- <!-- id: breadcrumb.interaction-methods.24 --> O último componente do agrupamento pode receber foco, mas não deve ser acionável.
- <!-- id: breadcrumb.interaction-methods.25 --> Os separadores de componentes não recebem foco por teclado.

<!-- id: breadcrumb.interaction-methods.26 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: breadcrumb.interaction-methods.28 --> Ao focar no agrupamento de componentes em um breadcrumb é possível identificar de que se trata de uma lista ordenada.
- <!-- id: breadcrumb.interaction-methods.29 --> Ao focar em um componente acionável em um breadcrumb é possível ouvir de que se trata de um link.
- <!-- id: breadcrumb.interaction-methods.30 --> Ao focar em um componente acionável em um breadcrumb deve ser possível identificar o objetivo do link com clareza.
- <!-- id: breadcrumb.interaction-methods.31 --> Caso seja configurado o foco no último componente do agrupamento em um breadcrumb deve ser possível ouvir de que se trata da tela atual.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: breadcrumb.acceptance-criteria.1 -->

<!-- id: breadcrumb.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: breadcrumb.acceptance-criteria.7 -->
### Cenário: Considerando que estou em uma página que contém breadcrumb

<!-- id: breadcrumb.acceptance-criteria.8 -->
#### Navegação por teclado

1. <!-- id: breadcrumb.acceptance-criteria.10 --> QUANDO uso a tecla `Tab` para acionar um link
2. <!-- id: breadcrumb.acceptance-criteria.12 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: breadcrumb.acceptance-criteria.13 --> ENTÃO, quando uso a tecla `Enter` para acionar o link
4. <!-- id: breadcrumb.acceptance-criteria.15 --> VEJO que meu navegador está indo para algum lugar

<!-- id: breadcrumb.acceptance-criteria.16 -->
#### Leitor de telas para desktop

1. <!-- id: breadcrumb.acceptance-criteria.18 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um link

   - <!-- id: breadcrumb.acceptance-criteria.20 --> VEJO que os nomes dos links correspondem aos títulos das páginas de destino
   - <!-- id: breadcrumb.acceptance-criteria.21 --> OUÇO links identificados como pontos de referência em um sistema de navegação por trilha de navegação.
   - <!-- id: breadcrumb.acceptance-criteria.22 --> OUÇO que o link da página atual é indicado quando o foco está na página.
   - <!-- id: breadcrumb.acceptance-criteria.23 --> Posso OUVIR os atalhos de leitor de tela como um ponto de referência de navegação (landmarks).
2. <!-- id: breadcrumb.acceptance-criteria.24 --> ENTÃO, quando uso a tecla `Enter` para ativar o link
3. <!-- id: breadcrumb.acceptance-criteria.25 --> OUÇO dizer que meu navegador está indo para algum lugar.

<!-- id: breadcrumb.acceptance-criteria.26 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: breadcrumb.acceptance-criteria.28 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um link, acontece o seguinte:

   - <!-- id: breadcrumb.acceptance-criteria.30 --> OUÇO que os nomes dos links correspondem aos títulos das páginas de destino
   - <!-- id: breadcrumb.acceptance-criteria.31 --> OUÇO links identificados como pontos de referência em um sistema de navegação por trilha de navegação.
   - <!-- id: breadcrumb.acceptance-criteria.32 --> OUÇO que o link da página atual é indicado quando o foco está na página.
   - <!-- id: breadcrumb.acceptance-criteria.33 --> Posso OUVIR os atalhos de leitor de tela como um ponto de referência de navegação (landmarks).
2. <!-- id: breadcrumb.acceptance-criteria.34 --> ENTÃO, quando eu toco duas vezes para ativar o link
3. <!-- id: breadcrumb.acceptance-criteria.35 --> OUÇO dizer que meu navegador está indo para algum lugar.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: breadcrumb.considerations.1 -->

<!-- id: breadcrumb.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Breadcrumb.

- <!-- id: breadcrumb.considerations.5 --> É importante que os separadores de componentes sejam construídos de forma apenas visual e não recebam foco ao se navegar por teclado ou sejam lidos por leitores de tela.
- <!-- id: breadcrumb.considerations.6 --> Breadcrumbs são componentes de navegação em formato de lista ordenada. Devem ser construídos com a semântica adequada.
- <!-- id: breadcrumb.considerations.7 --> O último item de um breadcrumb não deve ser acionável, pois é a tela atual. No entanto, é possível configurar o foco por teclado informando apenas que é a tela atual.

<!-- id: references -->
## Referências

<!-- id: breadcrumb.references.1 -->

<!-- id: breadcrumb.references.2 -->
Referências adicionais sobre componentes do tipo Breadcrumb.

<!-- id: breadcrumb.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: breadcrumb.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: breadcrumb.references.10 -->
### Padrões de Design

- <!-- id: breadcrumb.references.12 --> [Apple - Human Interface Guidelines - Path Controls](https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/path-controls)
- <!-- id: breadcrumb.references.17 --> [Google - Material Design](https://m3.material.io/components)
- <!-- id: breadcrumb.references.22 --> [Documentação de padrões HTML - Breadcrumb Navigation](https://html.spec.whatwg.org/multipage/semantics-other.html#rel-up)
- <!-- id: breadcrumb.references.27 --> [W3C APG - Breadcrumb](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

<!-- id: breadcrumb.references.32 -->
### Design System

- <!-- id: breadcrumb.references.34 --> [W3C Design System: Breadcrumb](https://design-system.w3.org/components/breadcrumbs.html)
- <!-- id: breadcrumb.references.39 --> [Deque Cauldron: Breadcrumb](https://cauldron.dequelabs.com/components/Breadcrumb)
- <!-- id: breadcrumb.references.44 --> [eBay MIND Patterns: Breadcrumb](https://ebay.gitbook.io/mindpatterns/navigation/breadcrumbs)
- <!-- id: breadcrumb.references.49 --> [Gov.UK - Breadcrumb](https://design-system.service.gov.uk/components/breadcrumbs/)
- <!-- id: breadcrumb.references.54 --> [US.gov - Breadcrumb](https://designsystem.digital.gov/components/breadcrumb/)
- <!-- id: breadcrumb.references.59 --> [Gov.AU - Breadcrumb](https://gold.designsystemau.org/components/breadcrumbs/)
- <!-- id: breadcrumb.references.64 --> [Salesforce Lightning - Breadcrumb](https://www.lightningdesignsystem.com/components/breadcrumbs/)
- <!-- id: breadcrumb.references.69 --> [IBM Carbon - Breadcrumb](https://carbondesignsystem.com/components/breadcrumb/usage/)
- <!-- id: breadcrumb.references.74 --> [Adobe Spectrum - Breadcrumb](https://spectrum.adobe.com/page/breadcrumbs/)
- <!-- id: breadcrumb.references.79 --> [Github Primer - Breadcrumb](https://primer.style/design/components/breadcrumbs)
- <!-- id: breadcrumb.references.84 --> [Bootstrap - Breadcrumb](https://getbootstrap.com/docs/5.2/components/breadcrumb/)
