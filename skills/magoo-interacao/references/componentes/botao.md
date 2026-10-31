# Botão

- ID: `botao`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-botao.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Aciona uma tarefa ou altera um estado. Rótulos, feedback e comportamento tornam a ação previsível.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para executar uma ação, como salvar ou abrir um componente. Defina claramente o resultado esperado.

#### O que desenhar

Mostre o estado padrão, ao passar o mouse, ao pressionar e ao receber navegação pelo teclado. Quando houver estado desabilitado, deixe claro que a ação está indisponível.

#### Como se comporta

Clique, toque, `Enter` e `barra de espaço` acionam a ação. A pessoa recebe uma indicação perceptível de que o botão foi acionado.

#### O que documentar no Figma

Registre o objetivo de cada botão, o resultado da ação e o comportamento quando estiver desabilitado. Se abrir ou fechar outro componente, documente como esse estado será informado.

#### Como revisar

O texto explica a ação sem ambiguidade? Os estados são distinguíveis? A área de toque funciona em telas pequenas? A indicação de navegação pelo teclado é visível? O acionamento e o anúncio como botão precisam ser verificados na implementação.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Botão.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir com o componente é possível perceber visualmente que o componente é acionável?
2. Antes de interagir com o componente é possível identificar que será realizada uma ação na mesma tela? (ver "Pontos de atenção")
3. Para o caso de botão desabilitado, é possível perceber visualmente que o componente não é acionável?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no componente?
2. Há feedback visual ao clicar no componente?
3. Ao clicar no componente ocorre o acionamento da ação respectiva?

### Projetando para uso com gestos

1. Há feedback visual ao acionar o componente?
2. Ao acionar o componente ocorre o acionamento da ação respectiva?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há feedback visual ao focar no componente?
2. É possível interagir com o botão através da tecla "`enter`" e da tecla de "`espaço`"?
3. Ao ser acionado por teclado o botão aciona algo na mesma tela ou executa uma ação concreta?
4. Para o caso de botão desabilitado, a navegação por teclado não é permitida?

### Projetando para uso com leitor de telas

1. Ao focar em um botão é possível ouvir de que se trata realmente de um botão (e não um link)?
2. Ao focar em um botão é possível ouvir claramente o objetivo do botão?
3. Quando uma mesma página exibir mais de um botão, é possível identificar claramente o objetivo de cada botão sem ambiguidade?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Botão.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- Ao clicar com o botão do mouse, o componente deve retornar feedback visual confirmando o clique.
- Ao clicar com o botão do mouse, a ação deve ser executada.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Ao focar com teclado, o componente deve retornar feedback visual com foco visível.
- Deve ser possível acionar botões com a tecla `ENTER` ou `BARRA DE ESPAÇO`.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar em um botão é possível ouvir de que se trata de um botão.
- Ao focar em um botão deve ser possível identificar o objetivo do botão com clareza.
- Em telas que possuem mais de um botão, deve ser possível identificar o objetivo de cada um com clareza.
- Após acionar a tecla "`enter`" ou "`barra de espaço`" é possível identificar que a ação foi executada.
- Para botões que acionam menus ou componentes ocultos, ao focar é possível identificar o estado do componente (exemplo: aberto ou fechado).
- Para botões que acionam menus ou componentes ocultos, após acionar o botão é possível identificar o estado do componente (exemplo: aberto ou fechado).

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém botões

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um botão habilitado
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso `Enter` ou `Barra de espaço` para acionar o botão
4. VEJO que a ação correspondente é executada
5. E, quando o botão estiver desabilitado, VEJO que ele não recebe foco por teclado e não executa ação

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um botão

   - OUÇO que o componente é identificado como botão.
   - OUÇO um nome acessível que descreve claramente a ação do botão.
   - OUÇO o estado do botão quando ele aciona componentes ocultos, como aberto ou fechado.
2. ENTÃO, quando uso `Enter` ou `Barra de espaço` para ativar o botão
3. OUÇO ou percebo que a ação foi executada.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um botão, acontece o seguinte:

   - OUÇO que o componente é identificado como botão.
   - OUÇO um nome acessível que descreve claramente a ação do botão.
   - OUÇO o estado do botão quando ele aciona componentes ocultos, como aberto ou fechado.
2. ENTÃO, quando eu toco duas vezes para ativar o botão
3. OUÇO ou percebo que a ação foi executada.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Botão.

- Botões devem ter o comportamento de botão e não de um link.
- Botões podem ter a aparência de links, mas se eles executam uma ação na mesma tela em que a pessoa está, este é um comportamento de botão e deve ser construído como botão.
- Botões desabilitados não devem receber foco por teclado. É uma boa prática (não obrigatória) projetar ações específicas para ajudar as pessoas, como a exibição de uma mensagem informando o que a pessoa precisa fazer para que o botão seja habilitado.

## Referências

Referências adicionais sobre componentes do tipo Botão.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Apple - Human Interface Guidelines - Buttons](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/buttons)
- [Google - Material Design - Buttons](https://m3.material.io/components/all-buttons)
- [Documentação de padrões HTML: The Button Element](https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element)
- [W3C APG: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

### Design System

- [W3C Design System: Button](https://design-system.w3.org/styles/buttons.html)
- [Deque Cauldron: Button](https://cauldron.dequelabs.com/components/Button)
- [eBay MIND Patterns: Button](https://ebay.gitbook.io/mindpatterns/input/button)
- [Gov.UK - Button](https://design-system.service.gov.uk/components/button/)
- [US.gov - Button](https://designsystem.digital.gov/components/button/)
- [Gov.AU - Button](https://gold.designsystemau.org/components/buttons/)
- [Washington Post - Button](https://build.washingtonpost.com/components/button)
- [Salesforce Lightning - Button](https://www.lightningdesignsystem.com/components/buttons/)
- [IBM Carbon - Button](https://carbondesignsystem.com/components/button/usage/)
- [Adobe Spectrum - Button](https://spectrum.adobe.com/page/button/)
- [Github Primer - Button](https://primer.style/design/components/button)
- [Bootstrap - Button](https://getbootstrap.com/docs/5.2/components/buttons/)
