# Links

- ID: `links`
- Categoria: navegacao
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-links.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Conectam páginas, recursos e trechos de conteúdo por meio de destinos compreensíveis.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para levar a uma página, recurso ou trecho de conteúdo.

#### O que desenhar

Mostre texto que explica o destino e estados de interação com foco visível.

#### Como se comporta

Clique ou `Enter` abre o destino. A mudança de conteúdo precisa ser perceptível.

#### O que documentar no Figma

Registre o destino e informe se abre na mesma página ou em outra aba ou janela.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Link.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir com o componente é possível perceber visualmente que o componente é acionável?
2. Antes de interagir com o componente é possível perceber previamente o destino após o acionamento (interno ou externo)?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no componente?
2. Há feedback visual ao clicar no componente?
3. Ao clicar no componente ocorre o acionamento da ação respectiva?

### Projetando para uso com gestos

1. Há feedback visual ao acionar o componente?
2. Ao acionar o componente ocorre o acionamento da ação respectiva?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há feedback visual ao focar no componente?
2. É possível interagir com o link através da tecla "`enter`"?
3. Ao ser acionado por teclado o link direciona a pessoa para seu respectivo conteúdo?

### Projetando para uso com leitor de telas

1. Ao focar em um link é possível ouvir de que se trata realmente de um link (e não um botão)?
2. Ao focar em um link é possível ouvir claramente o objetivo do link?
3. Ao focar em um link é possível ouvir se o destino é interno (na mesma tela) ou externo?
4. Quando uma mesma página exibir mais de um link, é possível identificar claramente o objetivo de cada link sem ambiguidade?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Link.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- Ao clicar com o botão do mouse o componente deve retornar feedback visual confirmando o clique.
- Ao clicar com o botão do mouse o conteúdo deve ser carregado.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Ao focar com teclado, o componente deve retornar feedback visual com foco visível.
- Deve ser possível acionar links com a tecla `ENTER`.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar em um link é possível ouvir de que se trata de um link.
- Ao focar em um link deve ser possível identificar o objetivo do link com clareza.
- Em telas que possuem mais de um link, deve ser possível identificar o objetivo de cada um com clareza.
- Após acionar a tecla "`enter`" é possível identificar que outro conteúdo foi carregado na tela.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém links

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um link
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso a tecla `Enter` para acionar o link
4. VEJO que o navegador carrega o destino relacionado ao link

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um link

   - OUÇO que o componente é identificado como link.
   - OUÇO um nome acessível que descreve claramente o destino ou a finalidade do link.
   - OUÇO informação adicional quando o link abre em nova janela ou leva para um destino externo.
2. ENTÃO, quando uso a tecla `Enter` para ativar o link
3. OUÇO ou percebo que o navegador está indo para outro local ou carregando outro conteúdo.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um link, acontece o seguinte:

   - OUÇO que o componente é identificado como link.
   - OUÇO um nome acessível que descreve claramente o destino ou a finalidade do link.
   - OUÇO informação adicional quando o link abre em nova janela ou leva para um destino externo.
2. ENTÃO, quando eu toco duas vezes para ativar o link
3. OUÇO ou percebo que o navegador está indo para outro local ou carregando outro conteúdo.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Link

- Links devem ter o comportamento de link e não de um botão.
- Links podem ter a aparência de botões, mas se eles levam a pessoa para outro local com mais conteúdo, este é um comportamento de link e ele deve ser construído como link.
- Há diferentes contextos em que um link pode ser utilizado, escolher o contexto correto aumenta consideravelmente as chances de compreensão do componente.

## Referências

Referências adicionais sobre componentes do tipo Link.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Apple - Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/all-components)
- [Google - Material Design](https://m3.material.io/components)
- [Documentação de padrões HTML: The Link Element](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)
- [W3C APG: Links Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/link/)

### Design System

- [W3C Design System: Link](https://design-system.w3.org/styles/links.html)
- [Deque Cauldron: Link](https://cauldron.dequelabs.com/components/Link)
- [eBay MIND Patterns: Link](https://ebay.gitbook.io/mindpatterns/navigation/link)
- [Gov.UK - Link](https://design-system.service.gov.uk/components/)
- [US.gov - Link](https://designsystem.digital.gov/components/link/)
- [Gov.AU - Link](https://gold.designsystemau.org/components/link-list/)
- [BBC Gel - External Link](https://www.bbc.co.uk/gel/features/external-linking)
- [IBM Carbon - Link](https://carbondesignsystem.com/components/link/usage/)
- [Adobe Spectrum - Link](https://spectrum.adobe.com/page/link/)
- [Github Primer - Link](https://primer.style/design/components/link)
