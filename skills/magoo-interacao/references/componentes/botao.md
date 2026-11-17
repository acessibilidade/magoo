# Botão

- ID: `botao`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-botao.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Aciona uma tarefa ou altera um estado. Rótulos, feedback e comportamento tornam a ação previsível.

<!-- id: interaction-design -->
## Design de interação

<!-- id: botao.designer-guide.frame -->
<!-- id: botao.designer-guide.1 -->
### Guia rápido para designers

<!-- id: botao.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: botao.designer-guide.3 -->
#### Quando usar

<!-- id: botao.designer-guide.4 -->
Use para executar uma ação, como salvar ou abrir um componente. Defina claramente o resultado esperado.

<!-- id: botao.designer-guide.5 -->
#### O que desenhar

<!-- id: botao.designer-guide.6 -->
Mostre o estado padrão, ao passar o mouse, ao pressionar e ao receber navegação pelo teclado. Quando houver estado desabilitado, deixe claro que a ação está indisponível.

<!-- id: botao.designer-guide.7 -->
#### Como se comporta

<!-- id: botao.designer-guide.8 -->
Clique, toque, `Enter` e `barra de espaço` acionam a ação. A pessoa recebe uma indicação perceptível de que o botão foi acionado.

<!-- id: botao.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: botao.designer-guide.10 -->
Registre o objetivo de cada botão, o resultado da ação e o comportamento quando estiver desabilitado. Se abrir ou fechar outro componente, documente como esse estado será informado.

<!-- id: botao.designer-guide.11 -->
#### Como revisar

<!-- id: botao.designer-guide.12 -->
O texto explica a ação sem ambiguidade? Os estados são distinguíveis? A área de toque funciona em telas pequenas? A indicação de navegação pelo teclado é visível? O acionamento e o anúncio como botão precisam ser verificados na implementação.

<!-- id: botao.designer-guide.13 -->
### Orientações completas

<!-- id: botao.interaction-design.1 -->

<!-- id: botao.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Botão.

<!-- id: botao.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: botao.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: botao.interaction-design.9 --> Antes de interagir com o componente é possível perceber visualmente que o componente é acionável?
2. <!-- id: botao.interaction-design.10 --> Antes de interagir com o componente é possível identificar que será realizada uma ação na mesma tela? (ver "Pontos de atenção")
3. <!-- id: botao.interaction-design.11 --> Para o caso de botão desabilitado, é possível perceber visualmente que o componente não é acionável?

<!-- id: botao.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: botao.interaction-design.15 --> Há feedback visual ao passar o mouse no componente?
2. <!-- id: botao.interaction-design.16 --> Há feedback visual ao clicar no componente?
3. <!-- id: botao.interaction-design.17 --> Ao clicar no componente ocorre o acionamento da ação respectiva?

<!-- id: botao.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: botao.interaction-design.20 --> Há feedback visual ao acionar o componente?
2. <!-- id: botao.interaction-design.21 --> Ao acionar o componente ocorre o acionamento da ação respectiva?

<!-- id: botao.interaction-design.22 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: botao.interaction-design.25 --> Há feedback visual ao focar no componente?
2. <!-- id: botao.interaction-design.26 --> É possível interagir com o botão através da tecla "`enter`" e da tecla de "`espaço`"?
3. <!-- id: botao.interaction-design.27 --> Ao ser acionado por teclado o botão aciona algo na mesma tela ou executa uma ação concreta?
4. <!-- id: botao.interaction-design.28 --> Para o caso de botão desabilitado, a navegação por teclado não é permitida?

<!-- id: botao.interaction-design.29 -->
### Projetando para uso com leitor de telas

1. <!-- id: botao.interaction-design.31 --> Ao focar em um botão é possível ouvir de que se trata realmente de um botão (e não um link)?
2. <!-- id: botao.interaction-design.32 --> Ao focar em um botão é possível ouvir claramente o objetivo do botão?
3. <!-- id: botao.interaction-design.33 --> Quando uma mesma página exibir mais de um botão, é possível identificar claramente o objetivo de cada botão sem ambiguidade?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: botao.interaction-methods.1 -->

<!-- id: botao.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Botão.

<!-- id: botao.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: botao.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: botao.interaction-methods.10 --> Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- <!-- id: botao.interaction-methods.11 --> Ao clicar com o botão do mouse, o componente deve retornar feedback visual confirmando o clique.
- <!-- id: botao.interaction-methods.12 --> Ao clicar com o botão do mouse, a ação deve ser executada.

<!-- id: botao.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: botao.interaction-methods.16 --> Ao focar com teclado, o componente deve retornar feedback visual com foco visível.
- <!-- id: botao.interaction-methods.17 --> Deve ser possível acionar botões com a tecla `ENTER` ou `BARRA DE ESPAÇO`.

<!-- id: botao.interaction-methods.20 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: botao.interaction-methods.22 --> Ao focar em um botão é possível ouvir de que se trata de um botão.
- <!-- id: botao.interaction-methods.23 --> Ao focar em um botão deve ser possível identificar o objetivo do botão com clareza.
- <!-- id: botao.interaction-methods.24 --> Em telas que possuem mais de um botão, deve ser possível identificar o objetivo de cada um com clareza.
- <!-- id: botao.interaction-methods.25 --> Após acionar a tecla "`enter`" ou "`barra de espaço`" é possível identificar que a ação foi executada.
- <!-- id: botao.interaction-methods.26 --> Para botões que acionam menus ou componentes ocultos, ao focar é possível identificar o estado do componente (exemplo: aberto ou fechado).
- <!-- id: botao.interaction-methods.27 --> Para botões que acionam menus ou componentes ocultos, após acionar o botão é possível identificar o estado do componente (exemplo: aberto ou fechado).

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: botao.acceptance-criteria.1 -->

<!-- id: botao.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: botao.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém botões

<!-- id: botao.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: botao.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para um botão habilitado
2. <!-- id: botao.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: botao.acceptance-criteria.11 --> ENTÃO, quando uso `Enter` ou `Barra de espaço` para acionar o botão
4. <!-- id: botao.acceptance-criteria.14 --> VEJO que a ação correspondente é executada
5. <!-- id: botao.acceptance-criteria.15 --> E, quando o botão estiver desabilitado, VEJO que ele não recebe foco por teclado e não executa ação

<!-- id: botao.acceptance-criteria.16 -->
#### Leitor de telas para desktop

1. <!-- id: botao.acceptance-criteria.18 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um botão

   - <!-- id: botao.acceptance-criteria.20 --> OUÇO que o componente é identificado como botão.
   - <!-- id: botao.acceptance-criteria.21 --> OUÇO um nome acessível que descreve claramente a ação do botão.
   - <!-- id: botao.acceptance-criteria.22 --> OUÇO o estado do botão quando ele aciona componentes ocultos, como aberto ou fechado.
2. <!-- id: botao.acceptance-criteria.23 --> ENTÃO, quando uso `Enter` ou `Barra de espaço` para ativar o botão
3. <!-- id: botao.acceptance-criteria.24 --> OUÇO ou percebo que a ação foi executada.

<!-- id: botao.acceptance-criteria.25 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: botao.acceptance-criteria.27 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um botão, acontece o seguinte:

   - <!-- id: botao.acceptance-criteria.29 --> OUÇO que o componente é identificado como botão.
   - <!-- id: botao.acceptance-criteria.30 --> OUÇO um nome acessível que descreve claramente a ação do botão.
   - <!-- id: botao.acceptance-criteria.31 --> OUÇO o estado do botão quando ele aciona componentes ocultos, como aberto ou fechado.
2. <!-- id: botao.acceptance-criteria.32 --> ENTÃO, quando eu toco duas vezes para ativar o botão
3. <!-- id: botao.acceptance-criteria.33 --> OUÇO ou percebo que a ação foi executada.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: botao.considerations.1 -->

<!-- id: botao.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Botão.

- <!-- id: botao.considerations.5 --> Botões devem ter o comportamento de botão e não de um link.
- <!-- id: botao.considerations.6 --> Botões podem ter a aparência de links, mas se eles executam uma ação na mesma tela em que a pessoa está, este é um comportamento de botão e deve ser construído como botão.
- <!-- id: botao.considerations.7 --> Botões desabilitados não devem receber foco por teclado. É uma boa prática (não obrigatória) projetar ações específicas para ajudar as pessoas, como a exibição de uma mensagem informando o que a pessoa precisa fazer para que o botão seja habilitado.

<!-- id: references -->
## Referências

<!-- id: botao.references.1 -->

<!-- id: botao.references.2 -->
Referências adicionais sobre componentes do tipo Botão.

<!-- id: botao.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: botao.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: botao.references.10 -->
### Padrões de Design

- <!-- id: botao.references.12 --> [Apple - Human Interface Guidelines - Buttons](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/buttons)
- <!-- id: botao.references.17 --> [Google - Material Design - Buttons](https://m3.material.io/components/all-buttons)
- <!-- id: botao.references.22 --> [Documentação de padrões HTML: The Button Element](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)
- <!-- id: botao.references.27 --> [W3C APG: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

<!-- id: botao.references.32 -->
### Design System

- <!-- id: botao.references.34 --> [W3C Design System: Button](https://design-system.w3.org/styles/buttons.html)
- <!-- id: botao.references.39 --> [Deque Cauldron: Button](https://cauldron.dequelabs.com/components/Button)
- <!-- id: botao.references.44 --> [eBay MIND Patterns: Button](https://ebay.gitbook.io/mindpatterns/input/button)
- <!-- id: botao.references.49 --> [Gov.UK - Button](https://design-system.service.gov.uk/components/button/)
- <!-- id: botao.references.54 --> [US.gov - Button](https://designsystem.digital.gov/components/button/)
- <!-- id: botao.references.59 --> [Gov.AU - Button](https://gold.designsystemau.org/components/buttons/)
- <!-- id: botao.references.64 --> [Washington Post - Button](https://build.washingtonpost.com/components/button)
- <!-- id: botao.references.69 --> [Salesforce Lightning - Button](https://www.lightningdesignsystem.com/components/buttons/)
- <!-- id: botao.references.74 --> [IBM Carbon - Button](https://carbondesignsystem.com/components/button/usage/)
- <!-- id: botao.references.79 --> [Adobe Spectrum - Button](https://spectrum.adobe.com/page/button/)
- <!-- id: botao.references.84 --> [Github Primer - Button](https://primer.style/design/components/button)
- <!-- id: botao.references.89 --> [Bootstrap - Button](https://getbootstrap.com/docs/5.2/components/buttons/)
