# Drag'n'Drop

- ID: `drag-drop`
- Categoria: navegacao
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-drag-drop.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite mover e reorganizar elementos, considerando alternativas ao gesto de arrastar e soltar.

<!-- id: interaction-design -->
## Design de interação

<!-- id: drag-drop.designer-guide.frame -->
<!-- id: drag-drop.designer-guide.1 -->
### Guia rápido para designers

<!-- id: drag-drop.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: drag-drop.designer-guide.3 -->
#### Quando usar

<!-- id: drag-drop.designer-guide.4 -->
Use para mover ou reorganizar itens, oferecendo alternativas ao gesto de `arrastar`.

<!-- id: drag-drop.designer-guide.5 -->
#### O que desenhar

<!-- id: drag-drop.designer-guide.6 -->
Mostre o item selecionado, os destinos permitidos e a nova posição, além da possibilidade de cancelar.

<!-- id: drag-drop.designer-guide.7 -->
#### Como se comporta

<!-- id: drag-drop.designer-guide.8 -->
No padrão descrito, `Enter` seleciona e `setas` reposicionam; `Esc` cancela. O movimento pode ser cancelado sem perder dados.

<!-- id: drag-drop.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: drag-drop.designer-guide.10 -->
Anote os comandos, as alternativas sem `arrastar` e como informar a nova posição ou o motivo de um destino não ser permitido.

<!-- id: drag-drop.designer-guide.11 -->
#### Como revisar

<!-- id: drag-drop.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: drag-drop.designer-guide.13 -->
### Orientações completas

<!-- id: drag-drop.interaction-design.1 -->

<!-- id: drag-drop.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Drag'n'Drop.

<!-- id: drag-drop.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: drag-drop.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: drag-drop.interaction-design.9 --> Antes de interagir com o componente é possível perceber visualmente que o componente é acionável?
2. <!-- id: drag-drop.interaction-design.10 --> Antes de interagir com o componente é possível perceber visualmente que o componente permite interação através de "`arrastar e soltar`"?

<!-- id: drag-drop.interaction-design.11 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: drag-drop.interaction-design.14 --> Há feedback visual ao passar o mouse no componente acionável?
2. <!-- id: drag-drop.interaction-design.15 --> Há feedback visual ao clicar no componente acionável?
3. <!-- id: drag-drop.interaction-design.16 --> Ao `arrastar` o componente acionável é possível identificar de onde ele saiu e pra onde ele está indo?
4. <!-- id: drag-drop.interaction-design.17 --> Ao soltar o componente (previamente selecionado) é possível identificar visualmente a mudança de posição?

<!-- id: drag-drop.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: drag-drop.interaction-design.20 --> Há feedback visual ao acionar o componente?
2. <!-- id: drag-drop.interaction-design.21 --> Há feedback visual ao pressionar (sem soltar) o componente?
3. <!-- id: drag-drop.interaction-design.22 --> Há feedback visual ao soltar o componente?
4. <!-- id: drag-drop.interaction-design.23 --> Ao `arrastar` o componente acionável é possível identificar de onde ele saiu e pra onde ele está indo?
5. <!-- id: drag-drop.interaction-design.24 --> Ao soltar o componente (previamente selecionado) é possível identificar visualmente a mudança de posição?

<!-- id: drag-drop.interaction-design.25 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: drag-drop.interaction-design.28 --> Há feedback visual ao focar no componente?
2. <!-- id: drag-drop.interaction-design.29 --> Ao se navegar entre os componentes é possível perceber a mudança de foco?
3. <!-- id: drag-drop.interaction-design.30 --> Ao focar um dos itens de uma lista de itens é possível perceber que o componente permite mudança de posicionamento?
4. <!-- id: drag-drop.interaction-design.31 --> Ao mudar a posição de um item de uma lista é possível identificar visualmente que houve a mudança?

<!-- id: drag-drop.interaction-design.32 -->
### Projetando para uso com leitor de telas

1. <!-- id: drag-drop.interaction-design.34 --> Ao focar no agrupamento de componentes é possível identificar do que se trata o grupo?
2. <!-- id: drag-drop.interaction-design.35 --> Há instruções de como interagir com o componente de forma clara?
3. <!-- id: drag-drop.interaction-design.36 --> Ao focar em um dos componentes é possível identificar de que se trata de um componente “arrastável”?
4. <!-- id: drag-drop.interaction-design.37 --> Ao focar em um dos componentes há instruções de como interagir?
5. <!-- id: drag-drop.interaction-design.38 --> Após interação com componente há feedback aural do que aconteceu?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: drag-drop.interaction-methods.1 -->

<!-- id: drag-drop.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Drag'n'Drop.

<!-- id: drag-drop.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: drag-drop.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: drag-drop.interaction-methods.10 --> Ao passar o mouse, o componente deve retornar feedback visual confirmando possibilidade de interação.
- <!-- id: drag-drop.interaction-methods.11 --> Ao clicar com o botão do mouse o componente deve retornar feedback visual confirmando o clique.
- <!-- id: drag-drop.interaction-methods.12 --> Ao clicar com o botão do mouse e segurar, o componente deve retornar feedback visual confirmando estar pronto para ser arrastado.
- <!-- id: drag-drop.interaction-methods.13 --> Ao soltar o botão do mouse o componente deve se posicionar no local de destino.
- <!-- id: drag-drop.interaction-methods.14 --> Deve ser possível cancelar o movimento sem perder nenhum tipo de dado armazenado.

<!-- id: drag-drop.interaction-methods.15 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: drag-drop.interaction-methods.18 --> Ao focar com teclado, ocomponente deve retornar feedback visual com foco visível.
- <!-- id: drag-drop.interaction-methods.19 --> Deve ser possível navegar para o próximo item ou para o anterior utilizando as teclas `TAB` ou `SHIFT`+`TAB` respectivamente.
- <!-- id: drag-drop.interaction-methods.23 --> Deve ser possível selecionar componentes com a tecla `ENTER`.
- <!-- id: drag-drop.interaction-methods.25 --> Deve ser possível cancelar a seleção do componente com a tecla `ESC`.
- <!-- id: drag-drop.interaction-methods.27 --> Após acionamento com a tecla `ENTER`, deve ser possível utilizar utilizar as `setas direcionais` `seta para cima` e `seta para baixo` e `seta para direita` e `seta para esquerda` para reposicionar o componente.
- <!-- id: drag-drop.interaction-methods.41 --> Após reposição do componente, pode-se navegar novamente através das teclas `TAB` ou `SHIFT`+`TAB`.

<!-- id: drag-drop.interaction-methods.45 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: drag-drop.interaction-methods.47 --> Ao focar no agrupamento de componentes é possível ouvir do que se trata o agrupamento.
- <!-- id: drag-drop.interaction-methods.48 --> Ao focar em um componente do agrupamento é possível ouvir qual é o componente é "arrastável".
- <!-- id: drag-drop.interaction-methods.49 --> Ao focar o componente é possível ouvir instruções claras do que fazer para reposicionar o componente.
- <!-- id: drag-drop.interaction-methods.50 --> Após reposicionar o componente é possível ouvir a localização de sua nova posição.
- <!-- id: drag-drop.interaction-methods.51 --> Caso posição não seja permitida, deve ser possível ouvir o motivo de não ser possível.
- <!-- id: drag-drop.interaction-methods.52 --> Caso reposicionamento do componente obrigue uma ação do sistema (exemplo: reiniciar), deve ser informado essa necessidade e deve ser possível cancelar o reposicionamento.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: drag-drop.acceptance-criteria.1 -->

<!-- id: drag-drop.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: drag-drop.acceptance-criteria.3 -->
### Cenário: Considerando que estou em uma página que contém Drag'n'Drop

<!-- id: drag-drop.acceptance-criteria.4 -->
#### Navegação por teclado

1. <!-- id: drag-drop.acceptance-criteria.6 --> QUANDO uso a tecla `Tab` para mover o foco para um item arrastável
2. <!-- id: drag-drop.acceptance-criteria.8 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: drag-drop.acceptance-criteria.9 --> ENTÃO, quando uso a tecla `Enter` para selecionar o item
4. <!-- id: drag-drop.acceptance-criteria.11 --> VEJO que o item selecionado está pronto para ser reposicionado
5. <!-- id: drag-drop.acceptance-criteria.12 --> ENTÃO, quando uso as `setas direcionais` para mover o item
6. <!-- id: drag-drop.acceptance-criteria.13 --> VEJO que a posição do item é atualizada
7. <!-- id: drag-drop.acceptance-criteria.14 --> E, quando uso a tecla `Esc`, VEJO que a seleção ou movimentação é cancelada sem perda de dados

<!-- id: drag-drop.acceptance-criteria.16 -->
#### Leitor de telas para desktop

1. <!-- id: drag-drop.acceptance-criteria.18 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para um item arrastável

   - <!-- id: drag-drop.acceptance-criteria.20 --> OUÇO o nome do item em foco.
   - <!-- id: drag-drop.acceptance-criteria.21 --> OUÇO que o item pode ser reposicionado.
   - <!-- id: drag-drop.acceptance-criteria.22 --> OUÇO instruções claras de como iniciar, mover, confirmar ou cancelar a interação.
2. <!-- id: drag-drop.acceptance-criteria.23 --> ENTÃO, quando reposiciono o item com teclado
3. <!-- id: drag-drop.acceptance-criteria.24 --> OUÇO a nova posição do item ou uma mensagem informando que a posição escolhida não é permitida.

<!-- id: drag-drop.acceptance-criteria.25 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: drag-drop.acceptance-criteria.27 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em um item arrastável, acontece o seguinte:

   - <!-- id: drag-drop.acceptance-criteria.29 --> OUÇO o nome do item em foco.
   - <!-- id: drag-drop.acceptance-criteria.30 --> OUÇO que o item pode ser reposicionado.
   - <!-- id: drag-drop.acceptance-criteria.31 --> OUÇO instruções claras de como interagir com o componente usando gestos disponíveis.
2. <!-- id: drag-drop.acceptance-criteria.32 --> ENTÃO, quando reposiciono o item
3. <!-- id: drag-drop.acceptance-criteria.33 --> OUÇO a nova posição do item ou uma mensagem informando que a posição escolhida não é permitida.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: drag-drop.considerations.1 -->

<!-- id: drag-drop.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Drag'n'Drop.

- <!-- id: drag-drop.considerations.5 --> componentes do tipo Drag'n'Drop são complexos de se manter a consistência da interação em diferentes métodos. Eles devem ser utilizados apenas quando realmente necessários.

<!-- id: references -->
## Referências

<!-- id: drag-drop.references.1 -->

<!-- id: drag-drop.references.2 -->
Referências adicionais sobre componentes do tipo Drag'n'Drop.

<!-- id: drag-drop.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: drag-drop.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: drag-drop.references.10 -->
### Padrões de Design

- <!-- id: drag-drop.references.12 --> [Apple - Human Interface Guidelines - Drag and Drop](https://developer.apple.com/design/human-interface-guidelines/patterns/drag-and-drop)
- <!-- id: drag-drop.references.17 --> [Google - Material Design](https://m3.material.io/components)
- <!-- id: drag-drop.references.22 --> [Documentação de padrões HTML: Drag and Drop](https://html.spec.whatwg.org/multipage/dnd.html#dnd)
- <!-- id: drag-drop.references.27 --> [Mozilla Web Docs: HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

<!-- id: drag-drop.references.32 -->
### Design System

- <!-- id: drag-drop.references.34 --> [Salesforce Lightning - Drag'n'Drop](https://www.lightningdesignsystem.com/guidelines/builder/drag/#site-main-content)
