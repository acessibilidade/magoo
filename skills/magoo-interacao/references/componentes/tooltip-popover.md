# Tooltip e Popover

- ID: `tooltip-popover`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-tooltip-popover.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Apresentam informações adicionais associadas a um elemento da interface.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Avalie se a informação pode ficar visível ou usar um expansor. A fonte alerta para diferenças de comportamento entre bibliotecas.

#### O que desenhar

Mostre o acionador, o conteúdo adicional e o fechamento quando existir, sem cobrir informações relevantes.

#### Como se comporta

O padrão desta fonte abre por acionamento, não apenas ao passar o mouse. `Esc` fecha o conteúdo aberto.

#### O que documentar no Figma

Registre a abertura, o fechamento pelo acionador ou por clique fora e o acesso ao conteúdo pelo leitor de telas. Avalie com cuidado em telas pequenas.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Tooltip ou Popover.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir com o componente é possível perceber visualmente que o componente é interativo?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no componente acionável?
2. Há feedback visual ao clicar no componente acionável?
3. O conteúdo adicional do componente não é acionado ao passar o mouse, mas sim apenas após o clique?
4. O conteúdo adicional aberto após o acionamento do componente se sobrepõe a algum outro conteúdo relevante na tela?
5. O fechamento do conteúdo adicional ocorre após clique em qualquer região fora do conteúdo aberto?
6. O conteúdo adicional aberto possui controle de fechamento e permite o fechamento por mouse ao clicar no item respectivo de fechamento?

### Projetando para uso com gestos

1. Há feedback visual ao acionar o componente?
2. O conteúdo adicional aberto após o acionamento do componente se sobrepõe a algum outro conteúdo relevante na tela?
3. O fechamento do conteúdo adicional ocorre após toque em qualquer região fora do conteúdo aberto?
4. O conteúdo adicional aberto possui controle de fechamento e permite o fechamento por toque ao clicar no item respectivo de fechamento?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há feedback visual ao focar no componente acionável?
2. É possível interagir com o componente acionável através da tecla "`enter`" ou "`barra de espaço`"?
3. Ao ser acionado por teclado o componente exibe o conteúdo sem sobrepor outros conteúdos relevantes?
4. O conteúdo aberto possui controle de fechamento que permite o seu acionamento por teclado?
5. É possível realizar o fechamento do conteúdo adicional com a tecla "`esc`"?

### Projetando para uso com leitor de telas

1. Ao focar no componente é possível ouvir de que se trata de um botão (e não um link)?
2. Ao focar no componente é possível ouvir claramente qual é o conteúdo adicional que será aberto?
3. Após a abertura do conteúdo adicional é possível ouvir o conteúdo diretamente?
4. Com o conteúdo adicional aberto é possível utilizar o teclado para localizar o controle de fechamento e ao localizar é possível perceber de que se trata do fechamento do conteúdo adicional?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Tooltip ou Popover.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- Ao clicar com o botão do mouse, o componente deve retornar feedback visual confirmando o clique.
- Ao clicar com o botão do mouse, o conteúdo deve ser aberto.
- Ao clicar com o botão do mouse fora do componente, o conteúdo que estiver aberto e for referente a ele, deve ser fechado.
- Caso haja controle de fechamento no componente (exemplo: botão fechar), ele deve ser fechado após clique com o mouse.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Ao focar com teclado, o componente deve retornar feedback visual com foco visível.
- Deve ser possível acionar o componente que abre o conteúdo adicional com a tecla `ENTER` ou `BARRA DE ESPAÇO`.
- Após a abertura do conteúdo adicional, existindo controle de fechamento do conteúdo aberto, ao se pressionar a tecla `TAB`, deve ser possível ir direto para este controle.
- O fechamento do conteúdo adicional deve ocorre quando o controle de fechamento for pressionado (quando este existir) ou quando as teclas `ENTER` ou `BARRA DE ESPAÇO` forem pressionadas enquanto o foco estiver no componente responsável pela abertura do conteúdo adicional.
- Pressionar a tecla `ESC` também ocasiona o fechamento do conteúdo adicional, caso ele esteja aberto.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar no componente que abre o conteúdo adicional é possível identificar de que se trata de um botão.
- Ao focar no componente que abre o conteúdo adicional é possível ouvir qual é o conteúdo que será aberto.
- Após a abertura do conteúdo adicional é possível ouvir o conteúdo que foi aberto.
- Caso exista um controle de fechamento (no caso do conteúdo adicional estar aberto) deve ser possível ao pressionar a tecla "`tab`", ouvir que o controle é um botão e que ele é responsável pelo fechamento do conteúdo adicional.
- Com o conteúdo adicional aberto, caso a tecla "`esc`" seja pressionada, deve ser possível identificar que o conteúdo adicional não está mais aberto.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Tooltip ou Popover

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para o componente que abre conteúdo adicional
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso `Enter` ou `Barra de espaço` para acionar o componente
4. VEJO que o conteúdo adicional é exibido
5. ENTÃO, quando uso a tecla `Esc` ou aciono o controle de fechamento
6. VEJO que o conteúdo adicional é fechado

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para o componente que abre conteúdo adicional

   - OUÇO o nome do componente.
   - OUÇO que o componente é identificado como botão quando sua função é abrir ou fechar conteúdo.
   - OUÇO qual conteúdo adicional será aberto ou qual é a finalidade do componente.
2. ENTÃO, quando ativo o componente
3. OUÇO o conteúdo adicional ou consigo chegar até ele pela ordem de navegação.
4. E, quando fecho o conteúdo adicional, OUÇO ou percebo que ele não está mais aberto.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente que abre conteúdo adicional, acontece o seguinte:

   - OUÇO o nome do componente.
   - OUÇO que o componente é identificado como botão quando sua função é abrir ou fechar conteúdo.
   - OUÇO qual conteúdo adicional será aberto ou qual é a finalidade do componente.
2. ENTÃO, quando eu toco duas vezes para ativar o componente
3. OUÇO o conteúdo adicional ou consigo chegar até ele pela ordem de navegação.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Tooltip ou Popover.

- Ainda [não existe um consenso](https://github.com/w3c/aria-practices/issues/128) de métodos de interação para este componente funcionar adequadamente. As construções em diferentes locais não trazem consistência nem de funcionamento e nem de nomenclatura (há variações de nomes em diferentes bibliotecas). Neste caso, as interações indicadas neste material se baseiam em modelos mentais relacionados a componentes similares.
- A utilização de tooltip ou componentes similares é comumente interpretado como um indício de "design ruim", justamente devido a sua complexidade de interpretação das interações. Caso seja realmente necessário dar algum tipo de dica, considere a utilização de "modal" ou componentes expansores como "accordion".
- Em telas menores (responsividade), a atenção ao seu uso deve ser redobrada. Evite sempre que possível.
- Interações com eventos do mouse do tipo "mouseover" ou "mouseout" não são recomendados, principalmente para conteúdos que exibam mais de uma linha de informação.

## Referências

Referências adicionais sobre componentes do tipo Tooltip ou Popover.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Apple - Human Interface Guidelines - Popovers](https://developer.apple.com/design/human-interface-guidelines/components/presentation/popovers)
- [Google - Material Design - Tooltips](https://m3.material.io/components/tooltips/overview)
- [W3C APG - Tooltips](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

### Design System

- [Deque Cauldron: Tooltip](https://cauldron.dequelabs.com/components/Tooltip)
- [eBay MIND Patterns: Tooltip](https://ebay.gitbook.io/mindpatterns/disclosure/tooltip)
- [eBay MIND Patterns: Infotip Button](https://ebay.gitbook.io/mindpatterns/disclosure/infotip)
- [US.gov - Tooltip](https://designsystem.digital.gov/components/tooltip/)
- [Washington Post - Tooltip](https://build.washingtonpost.com/components/tooltip)
- [Washington Post - Popover](https://build.washingtonpost.com/components/popover)
- [Salesforce Lightning - Tooltip](https://www.lightningdesignsystem.com/components/tooltips/)
- [Salesforce Lightning - Popover](https://www.lightningdesignsystem.com/components/popovers/)
- [IBM Carbon - Tooltip](https://carbondesignsystem.com/components/tooltip/usage/)
- [IBM Carbon - Popover](https://carbondesignsystem.com/components/popover/usage/)
- [Adobe Spectrum - Tooltip](https://spectrum.adobe.com/page/tooltip/)
- [Github Primer - Tooltip](https://primer.style/design/guides/accessibility/tooltip-alternatives)
- [Bootstrap - Tooltip](https://getbootstrap.com/docs/5.2/components/tooltips/)
- [Bootstrap - Popover](https://getbootstrap.com/docs/5.2/components/popovers/)
