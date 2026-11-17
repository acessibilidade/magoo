# Tooltip e Popover

- ID: `tooltip-popover`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-tooltip-popover.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Apresentam informações adicionais associadas a um elemento da interface.

<!-- id: interaction-design -->
## Design de interação

<!-- id: tooltip-popover.designer-guide.frame -->
<!-- id: tooltip-popover.designer-guide.1 -->
### Guia rápido para designers

<!-- id: tooltip-popover.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: tooltip-popover.designer-guide.3 -->
#### Quando usar

<!-- id: tooltip-popover.designer-guide.4 -->
Avalie se a informação pode ficar visível ou usar um expansor. A fonte alerta para diferenças de comportamento entre bibliotecas.

<!-- id: tooltip-popover.designer-guide.5 -->
#### O que desenhar

<!-- id: tooltip-popover.designer-guide.6 -->
Mostre o acionador, o conteúdo adicional e o fechamento quando existir, sem cobrir informações relevantes.

<!-- id: tooltip-popover.designer-guide.7 -->
#### Como se comporta

<!-- id: tooltip-popover.designer-guide.8 -->
O padrão desta fonte abre por acionamento, não apenas ao passar o mouse. `Esc` fecha o conteúdo aberto.

<!-- id: tooltip-popover.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: tooltip-popover.designer-guide.10 -->
Registre a abertura, o fechamento pelo acionador ou por clique fora e o acesso ao conteúdo pelo leitor de telas. Avalie com cuidado em telas pequenas.

<!-- id: tooltip-popover.designer-guide.11 -->
#### Como revisar

<!-- id: tooltip-popover.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: tooltip-popover.designer-guide.13 -->
### Orientações completas

<!-- id: tooltip-popover.interaction-design.1 -->

<!-- id: tooltip-popover.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Tooltip ou Popover.

<!-- id: tooltip-popover.interaction-design.5 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: tooltip-popover.interaction-design.8 -->
### Projetando para a "não interação"

1. <!-- id: tooltip-popover.interaction-design.10 --> Antes de interagir com o componente é possível perceber visualmente que o componente é interativo?

<!-- id: tooltip-popover.interaction-design.11 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: tooltip-popover.interaction-design.14 --> Há feedback visual ao passar o mouse no componente acionável?
2. <!-- id: tooltip-popover.interaction-design.15 --> Há feedback visual ao clicar no componente acionável?
3. <!-- id: tooltip-popover.interaction-design.16 --> O conteúdo adicional do componente não é acionado ao passar o mouse, mas sim apenas após o clique?
4. <!-- id: tooltip-popover.interaction-design.17 --> O conteúdo adicional aberto após o acionamento do componente se sobrepõe a algum outro conteúdo relevante na tela?
5. <!-- id: tooltip-popover.interaction-design.18 --> O fechamento do conteúdo adicional ocorre após clique em qualquer região fora do conteúdo aberto?
6. <!-- id: tooltip-popover.interaction-design.19 --> O conteúdo adicional aberto possui controle de fechamento e permite o fechamento por mouse ao clicar no item respectivo de fechamento?

<!-- id: tooltip-popover.interaction-design.20 -->
### Projetando para uso com gestos

1. <!-- id: tooltip-popover.interaction-design.22 --> Há feedback visual ao acionar o componente?
2. <!-- id: tooltip-popover.interaction-design.23 --> O conteúdo adicional aberto após o acionamento do componente se sobrepõe a algum outro conteúdo relevante na tela?
3. <!-- id: tooltip-popover.interaction-design.24 --> O fechamento do conteúdo adicional ocorre após toque em qualquer região fora do conteúdo aberto?
4. <!-- id: tooltip-popover.interaction-design.25 --> O conteúdo adicional aberto possui controle de fechamento e permite o fechamento por toque ao clicar no item respectivo de fechamento?

<!-- id: tooltip-popover.interaction-design.26 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: tooltip-popover.interaction-design.29 --> Há feedback visual ao focar no componente acionável?
2. <!-- id: tooltip-popover.interaction-design.30 --> É possível interagir com o componente acionável através da tecla "`enter`" ou "`barra de espaço`"?
3. <!-- id: tooltip-popover.interaction-design.31 --> Ao ser acionado por teclado o componente exibe o conteúdo sem sobrepor outros conteúdos relevantes?
4. <!-- id: tooltip-popover.interaction-design.32 --> O conteúdo aberto possui controle de fechamento que permite o seu acionamento por teclado?
5. <!-- id: tooltip-popover.interaction-design.33 --> É possível realizar o fechamento do conteúdo adicional com a tecla "`esc`"?

<!-- id: tooltip-popover.interaction-design.34 -->
### Projetando para uso com leitor de telas

1. <!-- id: tooltip-popover.interaction-design.36 --> Ao focar no componente é possível ouvir de que se trata de um botão (e não um link)?
2. <!-- id: tooltip-popover.interaction-design.37 --> Ao focar no componente é possível ouvir claramente qual é o conteúdo adicional que será aberto?
3. <!-- id: tooltip-popover.interaction-design.38 --> Após a abertura do conteúdo adicional é possível ouvir o conteúdo diretamente?
4. <!-- id: tooltip-popover.interaction-design.39 --> Com o conteúdo adicional aberto é possível utilizar o teclado para localizar o controle de fechamento e ao localizar é possível perceber de que se trata do fechamento do conteúdo adicional?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: tooltip-popover.interaction-methods.1 -->

<!-- id: tooltip-popover.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Tooltip ou Popover.

<!-- id: tooltip-popover.interaction-methods.5 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: tooltip-popover.interaction-methods.8 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: tooltip-popover.interaction-methods.11 --> Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- <!-- id: tooltip-popover.interaction-methods.12 --> Ao clicar com o botão do mouse, o componente deve retornar feedback visual confirmando o clique.
- <!-- id: tooltip-popover.interaction-methods.13 --> Ao clicar com o botão do mouse, o conteúdo deve ser aberto.
- <!-- id: tooltip-popover.interaction-methods.14 --> Ao clicar com o botão do mouse fora do componente, o conteúdo que estiver aberto e for referente a ele, deve ser fechado.
- <!-- id: tooltip-popover.interaction-methods.15 --> Caso haja controle de fechamento no componente (exemplo: botão fechar), ele deve ser fechado após clique com o mouse.

<!-- id: tooltip-popover.interaction-methods.16 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: tooltip-popover.interaction-methods.19 --> Ao focar com teclado, o componente deve retornar feedback visual com foco visível.
- <!-- id: tooltip-popover.interaction-methods.20 --> Deve ser possível acionar o componente que abre o conteúdo adicional com a tecla `ENTER` ou `BARRA DE ESPAÇO`.
- <!-- id: tooltip-popover.interaction-methods.23 --> Após a abertura do conteúdo adicional, existindo controle de fechamento do conteúdo aberto, ao se pressionar a tecla `TAB`, deve ser possível ir direto para este controle.
- <!-- id: tooltip-popover.interaction-methods.25 --> O fechamento do conteúdo adicional deve ocorre quando o controle de fechamento for pressionado (quando este existir) ou quando as teclas `ENTER` ou `BARRA DE ESPAÇO` forem pressionadas enquanto o foco estiver no componente responsável pela abertura do conteúdo adicional.
- <!-- id: tooltip-popover.interaction-methods.28 --> Pressionar a tecla `ESC` também ocasiona o fechamento do conteúdo adicional, caso ele esteja aberto.

<!-- id: tooltip-popover.interaction-methods.30 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: tooltip-popover.interaction-methods.32 --> Ao focar no componente que abre o conteúdo adicional é possível identificar de que se trata de um botão.
- <!-- id: tooltip-popover.interaction-methods.33 --> Ao focar no componente que abre o conteúdo adicional é possível ouvir qual é o conteúdo que será aberto.
- <!-- id: tooltip-popover.interaction-methods.34 --> Após a abertura do conteúdo adicional é possível ouvir o conteúdo que foi aberto.
- <!-- id: tooltip-popover.interaction-methods.35 --> Caso exista um controle de fechamento (no caso do conteúdo adicional estar aberto) deve ser possível ao pressionar a tecla "`tab`", ouvir que o controle é um botão e que ele é responsável pelo fechamento do conteúdo adicional.
- <!-- id: tooltip-popover.interaction-methods.36 --> Com o conteúdo adicional aberto, caso a tecla "`esc`" seja pressionada, deve ser possível identificar que o conteúdo adicional não está mais aberto.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: tooltip-popover.acceptance-criteria.1 -->

<!-- id: tooltip-popover.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: tooltip-popover.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém Tooltip ou Popover

<!-- id: tooltip-popover.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: tooltip-popover.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para o componente que abre conteúdo adicional
2. <!-- id: tooltip-popover.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: tooltip-popover.acceptance-criteria.11 --> ENTÃO, quando uso `Enter` ou `Barra de espaço` para acionar o componente
4. <!-- id: tooltip-popover.acceptance-criteria.14 --> VEJO que o conteúdo adicional é exibido
5. <!-- id: tooltip-popover.acceptance-criteria.15 --> ENTÃO, quando uso a tecla `Esc` ou aciono o controle de fechamento
6. <!-- id: tooltip-popover.acceptance-criteria.17 --> VEJO que o conteúdo adicional é fechado

<!-- id: tooltip-popover.acceptance-criteria.18 -->
#### Leitor de telas para desktop

1. <!-- id: tooltip-popover.acceptance-criteria.20 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para o componente que abre conteúdo adicional

   - <!-- id: tooltip-popover.acceptance-criteria.22 --> OUÇO o nome do componente.
   - <!-- id: tooltip-popover.acceptance-criteria.23 --> OUÇO que o componente é identificado como botão quando sua função é abrir ou fechar conteúdo.
   - <!-- id: tooltip-popover.acceptance-criteria.24 --> OUÇO qual conteúdo adicional será aberto ou qual é a finalidade do componente.
2. <!-- id: tooltip-popover.acceptance-criteria.25 --> ENTÃO, quando ativo o componente
3. <!-- id: tooltip-popover.acceptance-criteria.26 --> OUÇO o conteúdo adicional ou consigo chegar até ele pela ordem de navegação.
4. <!-- id: tooltip-popover.acceptance-criteria.27 --> E, quando fecho o conteúdo adicional, OUÇO ou percebo que ele não está mais aberto.

<!-- id: tooltip-popover.acceptance-criteria.28 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: tooltip-popover.acceptance-criteria.30 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente que abre conteúdo adicional, acontece o seguinte:

   - <!-- id: tooltip-popover.acceptance-criteria.32 --> OUÇO o nome do componente.
   - <!-- id: tooltip-popover.acceptance-criteria.33 --> OUÇO que o componente é identificado como botão quando sua função é abrir ou fechar conteúdo.
   - <!-- id: tooltip-popover.acceptance-criteria.34 --> OUÇO qual conteúdo adicional será aberto ou qual é a finalidade do componente.
2. <!-- id: tooltip-popover.acceptance-criteria.35 --> ENTÃO, quando eu toco duas vezes para ativar o componente
3. <!-- id: tooltip-popover.acceptance-criteria.36 --> OUÇO o conteúdo adicional ou consigo chegar até ele pela ordem de navegação.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: tooltip-popover.considerations.1 -->

<!-- id: tooltip-popover.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Tooltip ou Popover.

- <!-- id: tooltip-popover.considerations.6 --> Ainda [não existe um consenso](https://github.com/w3c/aria-practices/issues/128) de métodos de interação para este componente funcionar adequadamente. As construções em diferentes locais não trazem consistência nem de funcionamento e nem de nomenclatura (há variações de nomes em diferentes bibliotecas). Neste caso, as interações indicadas neste material se baseiam em modelos mentais relacionados a componentes similares.
- <!-- id: tooltip-popover.considerations.11 --> A utilização de tooltip ou componentes similares é comumente interpretado como um indício de "design ruim", justamente devido a sua complexidade de interpretação das interações. Caso seja realmente necessário dar algum tipo de dica, considere a utilização de "modal" ou componentes expansores como "accordion".
- <!-- id: tooltip-popover.considerations.12 --> Em telas menores (responsividade), a atenção ao seu uso deve ser redobrada. Evite sempre que possível.
- <!-- id: tooltip-popover.considerations.13 --> Interações com eventos do mouse do tipo "mouseover" ou "mouseout" não são recomendados, principalmente para conteúdos que exibam mais de uma linha de informação.

<!-- id: references -->
## Referências

<!-- id: tooltip-popover.references.1 -->

<!-- id: tooltip-popover.references.2 -->
Referências adicionais sobre componentes do tipo Tooltip ou Popover.

<!-- id: tooltip-popover.references.5 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: tooltip-popover.references.8 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: tooltip-popover.references.11 -->
### Padrões de Design

- <!-- id: tooltip-popover.references.13 --> [Apple - Human Interface Guidelines - Popovers](https://developer.apple.com/design/human-interface-guidelines/components/presentation/popovers)
- <!-- id: tooltip-popover.references.18 --> [Google - Material Design - Tooltips](https://m3.material.io/components/tooltips/overview)
- <!-- id: tooltip-popover.references.23 --> [W3C APG - Tooltips](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

<!-- id: tooltip-popover.references.28 -->
### Design System

- <!-- id: tooltip-popover.references.30 --> [Deque Cauldron: Tooltip](https://cauldron.dequelabs.com/components/Tooltip)
- <!-- id: tooltip-popover.references.35 --> [eBay MIND Patterns: Tooltip](https://ebay.gitbook.io/mindpatterns/disclosure/tooltip)
- <!-- id: tooltip-popover.references.40 --> [eBay MIND Patterns: Infotip Button](https://ebay.gitbook.io/mindpatterns/disclosure/infotip)
- <!-- id: tooltip-popover.references.45 --> [US.gov - Tooltip](https://designsystem.digital.gov/components/tooltip/)
- <!-- id: tooltip-popover.references.50 --> [Washington Post - Tooltip](https://build.washingtonpost.com/components/tooltip)
- <!-- id: tooltip-popover.references.55 --> [Washington Post - Popover](https://build.washingtonpost.com/components/popover)
- <!-- id: tooltip-popover.references.60 --> [Salesforce Lightning - Tooltip](https://www.lightningdesignsystem.com/components/tooltips/)
- <!-- id: tooltip-popover.references.65 --> [Salesforce Lightning - Popover](https://www.lightningdesignsystem.com/components/popovers/)
- <!-- id: tooltip-popover.references.70 --> [IBM Carbon - Tooltip](https://carbondesignsystem.com/components/tooltip/usage/)
- <!-- id: tooltip-popover.references.75 --> [IBM Carbon - Popover](https://carbondesignsystem.com/components/popover/usage/)
- <!-- id: tooltip-popover.references.80 --> [Adobe Spectrum - Tooltip](https://spectrum.adobe.com/page/tooltip/)
- <!-- id: tooltip-popover.references.85 --> [Github Primer - Tooltip](https://primer.style/design/guides/accessibility/tooltip-alternatives)
- <!-- id: tooltip-popover.references.90 --> [Bootstrap - Tooltip](https://getbootstrap.com/docs/5.2/components/tooltips/)
- <!-- id: tooltip-popover.references.95 --> [Bootstrap - Popover](https://getbootstrap.com/docs/5.2/components/popovers/)
