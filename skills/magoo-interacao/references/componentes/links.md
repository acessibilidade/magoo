# Links

- ID: `links`
- Categoria: navegacao
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-links.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Conectam páginas, recursos e trechos de conteúdo por meio de destinos compreensíveis.

<!-- id: interaction-design -->
## Design de interação

<!-- id: links.designer-guide.frame -->
<!-- id: links.designer-guide.1 -->
### Guia rápido para designers

<!-- id: links.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: links.designer-guide.3 -->
#### Quando usar

<!-- id: links.designer-guide.4 -->
Use para levar a uma página, recurso ou trecho de conteúdo.

<!-- id: links.designer-guide.5 -->
#### O que desenhar

<!-- id: links.designer-guide.6 -->
Mostre texto que explica o destino e estados de interação com foco visível.

<!-- id: links.designer-guide.7 -->
#### Como se comporta

<!-- id: links.designer-guide.8 -->
Clique ou `Enter` abre o destino. A mudança de conteúdo precisa ser perceptível.

<!-- id: links.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: links.designer-guide.10 -->
Registre o destino e informe se abre na mesma página ou em outra aba ou janela.

<!-- id: links.designer-guide.11 -->
#### Como revisar

<!-- id: links.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: links.designer-guide.13 -->
### Orientações completas

<!-- id: links.interaction-design.1 -->

<!-- id: links.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Link.

<!-- id: links.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: links.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: links.interaction-design.9 --> Antes de interagir com o componente é possível perceber visualmente que o componente é acionável?
2. <!-- id: links.interaction-design.10 --> Antes de interagir com o componente é possível perceber previamente o destino após o acionamento (interno ou externo)?

<!-- id: links.interaction-design.11 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: links.interaction-design.14 --> Há feedback visual ao passar o mouse no componente?
2. <!-- id: links.interaction-design.15 --> Há feedback visual ao clicar no componente?
3. <!-- id: links.interaction-design.16 --> Ao clicar no componente ocorre o acionamento da ação respectiva?

<!-- id: links.interaction-design.17 -->
### Projetando para uso com gestos

1. <!-- id: links.interaction-design.19 --> Há feedback visual ao acionar o componente?
2. <!-- id: links.interaction-design.20 --> Ao acionar o componente ocorre o acionamento da ação respectiva?

<!-- id: links.interaction-design.21 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: links.interaction-design.24 --> Há feedback visual ao focar no componente?
2. <!-- id: links.interaction-design.25 --> É possível interagir com o link através da tecla "`enter`"?
3. <!-- id: links.interaction-design.26 --> Ao ser acionado por teclado o link direciona a pessoa para seu respectivo conteúdo?

<!-- id: links.interaction-design.27 -->
### Projetando para uso com leitor de telas

1. <!-- id: links.interaction-design.29 --> Ao focar em um link é possível ouvir de que se trata realmente de um link (e não um botão)?
2. <!-- id: links.interaction-design.30 --> Ao focar em um link é possível ouvir claramente o objetivo do link?
3. <!-- id: links.interaction-design.31 --> Ao focar em um link é possível ouvir se o destino é interno (na mesma tela) ou externo?
4. <!-- id: links.interaction-design.32 --> Quando uma mesma página exibir mais de um link, é possível identificar claramente o objetivo de cada link sem ambiguidade?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: links.interaction-methods.1 -->

<!-- id: links.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Link.

<!-- id: links.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: links.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: links.interaction-methods.10 --> Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- <!-- id: links.interaction-methods.11 --> Ao clicar com o botão do mouse o componente deve retornar feedback visual confirmando o clique.
- <!-- id: links.interaction-methods.12 --> Ao clicar com o botão do mouse o conteúdo deve ser carregado.

<!-- id: links.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: links.interaction-methods.16 --> Ao focar com teclado, o componente deve retornar feedback visual com foco visível.
- <!-- id: links.interaction-methods.17 --> Deve ser possível acionar links com a tecla `ENTER`.

<!-- id: links.interaction-methods.19 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: links.interaction-methods.21 --> Ao focar em um link é possível ouvir de que se trata de um link.
- <!-- id: links.interaction-methods.22 --> Ao focar em um link deve ser possível identificar o objetivo do link com clareza.
- <!-- id: links.interaction-methods.23 --> Em telas que possuem mais de um link, deve ser possível identificar o objetivo de cada um com clareza.
- <!-- id: links.interaction-methods.24 --> Após acionar a tecla "`enter`" é possível identificar que outro conteúdo foi carregado na tela.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: links.acceptance-criteria.1 -->

<!-- id: links.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: links.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém links

<!-- id: links.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: links.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para um link
2. <!-- id: links.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: links.acceptance-criteria.11 --> ENTÃO, quando uso a tecla `Enter` para acionar o link
4. <!-- id: links.acceptance-criteria.13 --> VEJO que o navegador carrega o destino relacionado ao link

<!-- id: links.acceptance-criteria.14 -->
#### Leitor de telas para desktop

1. <!-- id: links.acceptance-criteria.16 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um link

   - <!-- id: links.acceptance-criteria.18 --> OUÇO que o componente é identificado como link.
   - <!-- id: links.acceptance-criteria.19 --> OUÇO um nome acessível que descreve claramente o destino ou a finalidade do link.
   - <!-- id: links.acceptance-criteria.20 --> OUÇO informação adicional quando o link abre em nova janela ou leva para um destino externo.
2. <!-- id: links.acceptance-criteria.21 --> ENTÃO, quando uso a tecla `Enter` para ativar o link
3. <!-- id: links.acceptance-criteria.22 --> OUÇO ou percebo que o navegador está indo para outro local ou carregando outro conteúdo.

<!-- id: links.acceptance-criteria.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: links.acceptance-criteria.25 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um link, acontece o seguinte:

   - <!-- id: links.acceptance-criteria.27 --> OUÇO que o componente é identificado como link.
   - <!-- id: links.acceptance-criteria.28 --> OUÇO um nome acessível que descreve claramente o destino ou a finalidade do link.
   - <!-- id: links.acceptance-criteria.29 --> OUÇO informação adicional quando o link abre em nova janela ou leva para um destino externo.
2. <!-- id: links.acceptance-criteria.30 --> ENTÃO, quando eu toco duas vezes para ativar o link
3. <!-- id: links.acceptance-criteria.31 --> OUÇO ou percebo que o navegador está indo para outro local ou carregando outro conteúdo.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: links.considerations.1 -->

<!-- id: links.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Link

- <!-- id: links.considerations.5 --> Links devem ter o comportamento de link e não de um botão.
- <!-- id: links.considerations.6 --> Links podem ter a aparência de botões, mas se eles levam a pessoa para outro local com mais conteúdo, este é um comportamento de link e ele deve ser construído como link.
- <!-- id: links.considerations.7 --> Há diferentes contextos em que um link pode ser utilizado, escolher o contexto correto aumenta consideravelmente as chances de compreensão do componente.

<!-- id: references -->
## Referências

<!-- id: links.references.1 -->

<!-- id: links.references.2 -->
Referências adicionais sobre componentes do tipo Link.

<!-- id: links.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: links.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: links.references.10 -->
### Padrões de Design

- <!-- id: links.references.12 --> [Apple - Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/all-components)
- <!-- id: links.references.17 --> [Google - Material Design](https://m3.material.io/components)
- <!-- id: links.references.22 --> [Documentação de padrões HTML: The Link Element](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)
- <!-- id: links.references.27 --> [W3C APG: Links Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/link/)

<!-- id: links.references.32 -->
### Design System

- <!-- id: links.references.34 --> [W3C Design System: Link](https://design-system.w3.org/styles/links.html)
- <!-- id: links.references.39 --> [Deque Cauldron: Link](https://cauldron.dequelabs.com/components/Link)
- <!-- id: links.references.44 --> [eBay MIND Patterns: Link](https://ebay.gitbook.io/mindpatterns/navigation/link)
- <!-- id: links.references.49 --> [Gov.UK - Link](https://design-system.service.gov.uk/components/)
- <!-- id: links.references.54 --> [US.gov - Link](https://designsystem.digital.gov/components/link/)
- <!-- id: links.references.59 --> [Gov.AU - Link](https://gold.designsystemau.org/components/link-list/)
- <!-- id: links.references.64 --> [BBC Gel - External Link](https://www.bbc.co.uk/gel/features/external-linking)
- <!-- id: links.references.69 --> [IBM Carbon - Link](https://carbondesignsystem.com/components/link/usage/)
- <!-- id: links.references.74 --> [Adobe Spectrum - Link](https://spectrum.adobe.com/page/link/)
- <!-- id: links.references.79 --> [Github Primer - Link](https://primer.style/design/components/link)
