# Radio Button

- ID: `radio-button`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-radio-button.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite escolher uma única alternativa em um conjunto de opções relacionadas.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use quando a pessoa deve escolher uma única opção dentro de um grupo.

#### O que desenhar

Mostre o nome do grupo, rótulos e estados selecionado, não selecionado, foco e desabilitado.

#### Como se comporta

Selecionar uma opção desmarca a anterior. `Tab` entra no grupo; as `setas` percorrem e selecionam opções. Clicar novamente não desmarca a selecionada.

#### O que documentar no Figma

Defina as opções do mesmo grupo e indique qualquer escolha inicial.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Radio Button.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir é possível perceber que se trata de escolha única dentro de um grupo?
2. O rótulo do grupo comunica claramente a pergunta ou decisão a ser feita?
3. É possível identificar visualmente qual opção está selecionada?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no radio ou em seu rótulo?
2. Ao clicar no rótulo, a opção correspondente é selecionada?
3. Ao selecionar uma opção, as demais opções do mesmo grupo são desmarcadas?

### Projetando para uso com gestos

1. O alvo tocável inclui o rótulo associado?
2. Ao `tocar` em uma opção, ela se torna a única selecionada no grupo?
3. A área de toque é confortável em telas pequenas?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. `TAB` leva o foco para a opção selecionada ou para a primeira opção quando nenhuma estiver selecionada?
2. As `setas direcionais` movem o foco e alteram a seleção dentro do grupo?
3. `SPACE` seleciona a opção em foco?

### Projetando para uso com leitor de telas

1. O rótulo do grupo é anunciado?
2. Cada opção é anunciada como radio button?
3. O estado selecionado ou não selecionado é anunciado?
4. A posição da opção no grupo é perceptível quando suportada?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Radio Button.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar no controle ou no rótulo seleciona a opção.
- Selecionar uma opção desmarca as demais opções com o mesmo nome de grupo.
- Uma opção já selecionada não é desmarcada pelo segundo clique.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `TAB` entra no grupo uma vez.
- `Setas direcionais` navegam e selecionam opções do grupo.
- `SPACE` seleciona a opção em foco quando necessário.

### Interação com teclado (ou gestos) + leitor de telas

- O grupo deve ter nome acessível, preferencialmente com `fieldset` e `legend`.
- Ao navegar pelas opções com leitor de telas, a pessoa identifica o nome de cada opção e qual está selecionada.
- O estado selecionado deve ser exposto semanticamente.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém radio button

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um grupo de radio buttons
2. O foco que VEJO é fortemente indicado visualmente na opção selecionada ou na primeira opção
3. ENTÃO, quando uso a tecla `Space`
4. VEJO que a opção em foco é selecionada
5. ENTÃO, quando uso as `setas direcionais`
6. VEJO que a seleção muda dentro do grupo

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - OUÇO o rótulo e a finalidade do grupo.
   - OUÇO que cada item é uma opção de radio.
   - OUÇO seu estado atual, como selecionado ou não selecionado.
2. ENTÃO, quando aciono ou altero o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do grupo.
   - OUÇO que cada item é uma opção de radio.
   - OUÇO seu estado atual, como selecionado ou não selecionado.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Radio Button.

- Use radio button quando apenas uma opção do grupo puder ser escolhida.
- Não coloque controles interativos dentro de rótulos de radio sem uma estratégia clara de foco e leitura.
- O mesmo atributo `name` é essencial para criar o grupo em HTML nativo.

### Notas de implementação e decisões de comportamento

- Cada opção deve ter rótulo programaticamente associado.

## Referências

Referências adicionais sobre componentes do tipo Radio Button.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [MagentaA11y - Radio button](https://www.magentaa11y.com/checklist-web/radio/)
- [W3C APG: Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [Documentação de padrões HTML: Radio button state](https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio))
- [Google - Material Design - Radio button](https://m3.material.io/components/radio-button/overview)

### Design System

- [US.gov - Radio buttons](https://designsystem.digital.gov/components/radio-buttons/)
- [IBM Carbon - Radio button](https://carbondesignsystem.com/components/radio-button/usage/)
- [Adobe Spectrum - Radio button](https://spectrum.adobe.com/page/radio-button/)
- [Bootstrap - Checks and Radios](https://getbootstrap.com/docs/5.2/forms/checks-radios/)
