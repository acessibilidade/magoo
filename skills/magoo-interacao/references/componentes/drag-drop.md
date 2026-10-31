# Drag'n'Drop

- ID: `drag-drop`
- Categoria: navegacao
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-drag-drop.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite mover e reorganizar elementos, considerando alternativas ao gesto de arrastar e soltar.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para mover ou reorganizar itens, oferecendo alternativas ao gesto de `arrastar`.

#### O que desenhar

Mostre o item selecionado, os destinos permitidos e a nova posição, além da possibilidade de cancelar.

#### Como se comporta

No padrão descrito, `Enter` seleciona e `setas` reposicionam; `Esc` cancela. O movimento pode ser cancelado sem perder dados.

#### O que documentar no Figma

Anote os comandos, as alternativas sem `arrastar` e como informar a nova posição ou o motivo de um destino não ser permitido.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Drag'n'Drop.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir com o componente é possível perceber visualmente que o componente é acionável?
2. Antes de interagir com o componente é possível perceber visualmente que o componente permite interação através de "`arrastar e soltar`"?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no componente acionável?
2. Há feedback visual ao clicar no componente acionável?
3. Ao `arrastar` o componente acionável é possível identificar de onde ele saiu e pra onde ele está indo?
4. Ao soltar o componente (previamente selecionado) é possível identificar visualmente a mudança de posição?

### Projetando para uso com gestos

1. Há feedback visual ao acionar o componente?
2. Há feedback visual ao pressionar (sem soltar) o componente?
3. Há feedback visual ao soltar o componente?
4. Ao `arrastar` o componente acionável é possível identificar de onde ele saiu e pra onde ele está indo?
5. Ao soltar o componente (previamente selecionado) é possível identificar visualmente a mudança de posição?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há feedback visual ao focar no componente?
2. Ao se navegar entre os componentes é possível perceber a mudança de foco?
3. Ao focar um dos itens de uma lista de itens é possível perceber que o componente permite mudança de posicionamento?
4. Ao mudar a posição de um item de uma lista é possível identificar visualmente que houve a mudança?

### Projetando para uso com leitor de telas

1. Ao focar no agrupamento de componentes é possível identificar do que se trata o grupo?
2. Há instruções de como interagir com o componente de forma clara?
3. Ao focar em um dos componentes é possível identificar de que se trata de um componente “arrastável”?
4. Ao focar em um dos componentes há instruções de como interagir?
5. Após interação com componente há feedback aural do que aconteceu?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Drag'n'Drop.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- Ao clicar com o botão do mouse o componente deve retornar feedback visual confirmando o clique.
- Ao clicar com o botão do mouse e segurar, o componente deve retornar feedback visual confirmando estar pronto para ser arrastado.
- Ao soltar o botão do mouse o componente deve se posicionar no local de destino.
- Deve ser possível cancelar o movimento sem perder nenhum tipo de dado armazenado.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Ao focar com teclado, ocomponente deve retornar feedback visual com foco visível.
- Deve ser possível navegar para o próximo item ou para o anterior utilizando as teclas `TAB` ou `SHIFT`+`TAB` respectivamente.
- Deve ser possível selecionar componentes com a tecla `ENTER`.
- Deve ser possível cancelar a seleção do componente com a tecla `ESC`.
- Após acionamento com a tecla `ENTER`, deve ser possível utilizar utilizar as `setas direcionais` `seta para cima` e `seta para baixo` e `seta para direita` e `seta para esquerda` para reposicionar o componente.
- Após reposição do componente, pode-se navegar novamente através das teclas `TAB` ou `SHIFT`+`TAB`.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar no agrupamento de componentes é possível ouvir do que se trata o agrupamento.
- Ao focar em um componente do agrupamento é possível ouvir qual é o componente é "arrastável".
- Ao focar o componente é possível ouvir instruções claras do que fazer para reposicionar o componente.
- Após reposicionar o componente é possível ouvir a localização de sua nova posição.
- Caso posição não seja permitida, deve ser possível ouvir o motivo de não ser possível.
- Caso reposicionamento do componente obrigue uma ação do sistema (exemplo: reiniciar), deve ser informado essa necessidade e deve ser possível cancelar o reposicionamento.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Drag'n'Drop

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um item arrastável
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso a tecla `Enter` para selecionar o item
4. VEJO que o item selecionado está pronto para ser reposicionado
5. ENTÃO, quando uso as `setas direcionais` para mover o item
6. VEJO que a posição do item é atualizada
7. E, quando uso a tecla `Esc`, VEJO que a seleção ou movimentação é cancelada sem perda de dados

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um item arrastável

   - OUÇO o nome do item em foco.
   - OUÇO que o item pode ser reposicionado.
   - OUÇO instruções claras de como iniciar, mover, confirmar ou cancelar a interação.
2. ENTÃO, quando reposiciono o item com teclado
3. OUÇO a nova posição do item ou uma mensagem informando que a posição escolhida não é permitida.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um item arrastável, acontece o seguinte:

   - OUÇO o nome do item em foco.
   - OUÇO que o item pode ser reposicionado.
   - OUÇO instruções claras de como interagir com o componente usando gestos disponíveis.
2. ENTÃO, quando reposiciono o item
3. OUÇO a nova posição do item ou uma mensagem informando que a posição escolhida não é permitida.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Drag'n'Drop.

- componentes do tipo Drag'n'Drop são complexos de se manter a consistência da interação em diferentes métodos. Eles devem ser utilizados apenas quando realmente necessários.

## Referências

Referências adicionais sobre componentes do tipo Drag'n'Drop.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Apple - Human Interface Guidelines - Drag and Drop](https://developer.apple.com/design/human-interface-guidelines/patterns/drag-and-drop)
- [Google - Material Design](https://m3.material.io/components)
- [Documentação de padrões HTML: Drag and Drop](https://html.spec.whatwg.org/multipage/dnd.html#dnd)
- [Mozilla Web Docs: HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

### Design System

- [Salesforce Lightning - Drag'n'Drop](https://www.lightningdesignsystem.com/guidelines/builder/drag/#site-main-content)
