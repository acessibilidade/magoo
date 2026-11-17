# Radio Button

- ID: `radio-button`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-radio-button.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite escolher uma única alternativa em um conjunto de opções relacionadas.

<!-- id: interaction-design -->
## Design de interação

<!-- id: radio-button.designer-guide.frame -->
<!-- id: radio-button.designer-guide.1 -->
### Guia rápido para designers

<!-- id: radio-button.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: radio-button.designer-guide.3 -->
#### Quando usar

<!-- id: radio-button.designer-guide.4 -->
Use quando a pessoa deve escolher uma única opção dentro de um grupo.

<!-- id: radio-button.designer-guide.5 -->
#### O que desenhar

<!-- id: radio-button.designer-guide.6 -->
Mostre o nome do grupo, rótulos e estados selecionado, não selecionado, foco e desabilitado.

<!-- id: radio-button.designer-guide.7 -->
#### Como se comporta

<!-- id: radio-button.designer-guide.8 -->
Selecionar uma opção desmarca a anterior. `Tab` entra no grupo; as `setas` percorrem e selecionam opções. Clicar novamente não desmarca a selecionada.

<!-- id: radio-button.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: radio-button.designer-guide.10 -->
Defina as opções do mesmo grupo e indique qualquer escolha inicial.

<!-- id: radio-button.designer-guide.11 -->
#### Como revisar

<!-- id: radio-button.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: radio-button.designer-guide.13 -->
### Orientações completas

<!-- id: radio-button.interaction-design.1 -->

<!-- id: radio-button.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Radio Button.

<!-- id: radio-button.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: radio-button.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: radio-button.interaction-design.9 --> Antes de interagir é possível perceber que se trata de escolha única dentro de um grupo?
2. <!-- id: radio-button.interaction-design.10 --> O rótulo do grupo comunica claramente a pergunta ou decisão a ser feita?
3. <!-- id: radio-button.interaction-design.11 --> É possível identificar visualmente qual opção está selecionada?

<!-- id: radio-button.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: radio-button.interaction-design.15 --> Há feedback visual ao passar o mouse no radio ou em seu rótulo?
2. <!-- id: radio-button.interaction-design.16 --> Ao clicar no rótulo, a opção correspondente é selecionada?
3. <!-- id: radio-button.interaction-design.17 --> Ao selecionar uma opção, as demais opções do mesmo grupo são desmarcadas?

<!-- id: radio-button.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: radio-button.interaction-design.20 --> O alvo tocável inclui o rótulo associado?
2. <!-- id: radio-button.interaction-design.21 --> Ao `tocar` em uma opção, ela se torna a única selecionada no grupo?
3. <!-- id: radio-button.interaction-design.22 --> A área de toque é confortável em telas pequenas?

<!-- id: radio-button.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: radio-button.interaction-design.26 --> `TAB` leva o foco para a opção selecionada ou para a primeira opção quando nenhuma estiver selecionada?
2. <!-- id: radio-button.interaction-design.28 --> As `setas direcionais` movem o foco e alteram a seleção dentro do grupo?
3. <!-- id: radio-button.interaction-design.29 --> `SPACE` seleciona a opção em foco?

<!-- id: radio-button.interaction-design.31 -->
### Projetando para uso com leitor de telas

1. <!-- id: radio-button.interaction-design.33 --> O rótulo do grupo é anunciado?
2. <!-- id: radio-button.interaction-design.34 --> Cada opção é anunciada como radio button?
3. <!-- id: radio-button.interaction-design.35 --> O estado selecionado ou não selecionado é anunciado?
4. <!-- id: radio-button.interaction-design.36 --> A posição da opção no grupo é perceptível quando suportada?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: radio-button.interaction-methods.1 -->

<!-- id: radio-button.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Radio Button.

<!-- id: radio-button.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: radio-button.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: radio-button.interaction-methods.10 --> Clicar no controle ou no rótulo seleciona a opção.
- <!-- id: radio-button.interaction-methods.11 --> Selecionar uma opção desmarca as demais opções com o mesmo nome de grupo.
- <!-- id: radio-button.interaction-methods.12 --> Uma opção já selecionada não é desmarcada pelo segundo clique.

<!-- id: radio-button.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: radio-button.interaction-methods.16 --> `TAB` entra no grupo uma vez.
- <!-- id: radio-button.interaction-methods.18 --> `Setas direcionais` navegam e selecionam opções do grupo.
- <!-- id: radio-button.interaction-methods.19 --> `SPACE` seleciona a opção em foco quando necessário.

<!-- id: radio-button.interaction-methods.21 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: radio-button.interaction-methods.23 --> O grupo deve ter nome acessível, preferencialmente com `fieldset` e `legend`.
- <!-- id: radio-button.methods-review.2 --> Ao navegar pelas opções com leitor de telas, a pessoa identifica o nome de cada opção e qual está selecionada.
- <!-- id: radio-button.interaction-methods.27 --> O estado selecionado deve ser exposto semanticamente.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: radio-button.acceptance-criteria.1 -->

<!-- id: radio-button.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: radio-button.acceptance-criteria.7 -->
### Cenário: Considerando que estou em uma página que contém radio button

<!-- id: radio-button.acceptance-criteria.8 -->
#### Navegação por teclado

1. <!-- id: radio-button.acceptance-criteria.10 --> QUANDO uso a tecla `Tab` para mover o foco para um grupo de radio buttons
2. <!-- id: radio-button.acceptance-criteria.12 --> O foco que VEJO é fortemente indicado visualmente na opção selecionada ou na primeira opção
3. <!-- id: radio-button.acceptance-criteria.13 --> ENTÃO, quando uso a tecla `Space`
4. <!-- id: radio-button.acceptance-criteria.15 --> VEJO que a opção em foco é selecionada
5. <!-- id: radio-button.acceptance-criteria.16 --> ENTÃO, quando uso as `setas direcionais`
6. <!-- id: radio-button.acceptance-criteria.17 --> VEJO que a seleção muda dentro do grupo

<!-- id: radio-button.acceptance-criteria.18 -->
#### Leitor de telas para desktop

1. <!-- id: radio-button.acceptance-criteria.20 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - <!-- id: radio-button.acceptance-criteria.22 --> OUÇO o rótulo e a finalidade do grupo.
   - <!-- id: radio-button.acceptance-criteria.23 --> OUÇO que cada item é uma opção de radio.
   - <!-- id: radio-button.acceptance-criteria.24 --> OUÇO seu estado atual, como selecionado ou não selecionado.
2. <!-- id: radio-button.acceptance-criteria.25 --> ENTÃO, quando aciono ou altero o componente
3. <!-- id: radio-button.acceptance-criteria.26 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: radio-button.acceptance-criteria.27 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: radio-button.acceptance-criteria.29 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - <!-- id: radio-button.acceptance-criteria.31 --> OUÇO o rótulo e a finalidade do grupo.
   - <!-- id: radio-button.acceptance-criteria.32 --> OUÇO que cada item é uma opção de radio.
   - <!-- id: radio-button.acceptance-criteria.33 --> OUÇO seu estado atual, como selecionado ou não selecionado.
2. <!-- id: radio-button.acceptance-criteria.34 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. <!-- id: radio-button.acceptance-criteria.35 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: radio-button.considerations.1 -->

<!-- id: radio-button.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Radio Button.

- <!-- id: radio-button.considerations.5 --> Use radio button quando apenas uma opção do grupo puder ser escolhida.
- <!-- id: radio-button.considerations.6 --> Não coloque controles interativos dentro de rótulos de radio sem uma estratégia clara de foco e leitura.
- <!-- id: radio-button.considerations.7 --> O mesmo atributo `name` é essencial para criar o grupo em HTML nativo.

<!-- id: radio-button.methods-review.3 -->
### Notas de implementação e decisões de comportamento

- <!-- id: radio-button.interaction-methods.26 --> Cada opção deve ter rótulo programaticamente associado.

<!-- id: references -->
## Referências

<!-- id: radio-button.references.1 -->

<!-- id: radio-button.references.2 -->
Referências adicionais sobre componentes do tipo Radio Button.

<!-- id: radio-button.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: radio-button.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: radio-button.references.10 -->
### Padrões de Design

- <!-- id: radio-button.references.12 --> [MagentaA11y - Radio button](https://www.magentaa11y.com/checklist-web/radio/)
- <!-- id: radio-button.references.17 --> [W3C APG: Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- <!-- id: radio-button.references.22 --> [Documentação de padrões HTML: Radio button state](https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio))
- <!-- id: radio-button.references.27 --> [Google - Material Design - Radio button](https://m3.material.io/components/radio-button/overview)

<!-- id: radio-button.references.32 -->
### Design System

- <!-- id: radio-button.references.34 --> [US.gov - Radio buttons](https://designsystem.digital.gov/components/radio-buttons/)
- <!-- id: radio-button.references.39 --> [IBM Carbon - Radio button](https://carbondesignsystem.com/components/radio-button/usage/)
- <!-- id: radio-button.references.44 --> [Adobe Spectrum - Radio button](https://spectrum.adobe.com/page/radio-button/)
- <!-- id: radio-button.references.49 --> [Bootstrap - Checks and Radios](https://getbootstrap.com/docs/5.2/forms/checks-radios/)
