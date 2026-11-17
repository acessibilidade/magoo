# Select (Combo)

- ID: `select`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-select.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Apresenta um conjunto de opções em um controle de seleção compacto.

<!-- id: interaction-design -->
## Design de interação

<!-- id: select.designer-guide.frame -->
<!-- id: select.designer-guide.1 -->
### Guia rápido para designers

<!-- id: select.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: select.designer-guide.3 -->
#### Quando usar

<!-- id: select.designer-guide.4 -->
Use seleção simples para um valor, combobox editável para buscar opções e seleção múltipla para várias escolhas. Avalie radio buttons ou checkboxes quando as opções precisarem ficar visíveis.

<!-- id: select.designer-guide.5 -->
#### O que desenhar

<!-- id: select.designer-guide.6 -->
Mostre rótulo, escolhas, foco, ajuda e erro. Na busca de opções, inclua carregamento e ausência de correspondências; na seleção múltipla, revisão e remoção das escolhas.

<!-- id: select.designer-guide.7 -->
#### Como se comporta

<!-- id: select.designer-guide.8 -->
Ao abrir, a pessoa escolhe uma opção e o campo atualiza o valor. Os comandos do seletor nativo variam conforme a plataforma.

<!-- id: select.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: select.designer-guide.10 -->
Defina o padrão adotado, entrada livre ou restrita, confirmação, cancelamento e regras da seleção múltipla. Diferencie opção ativa, valor confirmado e itens selecionados.

<!-- id: select.designer-guide.11 -->
#### Como revisar

<!-- id: select.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: select.designer-guide.13 -->
### Orientações completas

<!-- id: select.interaction-design.1 -->

<!-- id: select.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Select (Combo).

<!-- id: select.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: select.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: select.interaction-design.9 --> Antes de interagir é possível perceber que existe uma lista de opções para escolha?
2. <!-- id: select.interaction-design.10 --> O rótulo comunica claramente o tipo de valor esperado?
3. <!-- id: select.interaction-design.11 --> O valor selecionado ou placeholder é visualmente compreensível?

<!-- id: select.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: select.interaction-design.15 --> Há feedback visual ao passar o mouse no campo?
2. <!-- id: select.interaction-design.16 --> Ao clicar no campo, a lista de opções é aberta ou o seletor nativo é exibido?
3. <!-- id: select.interaction-design.17 --> Ao selecionar uma opção, o valor visível é atualizado?

<!-- id: select.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: select.interaction-design.20 --> O campo possui área de toque confortável?
2. <!-- id: select.interaction-design.21 --> Ao `tocar` no campo, o seletor ou lista de opções é exibido?
3. <!-- id: select.interaction-design.22 --> Ao escolher uma opção, o valor selecionado fica claro?

<!-- id: select.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: select.interaction-design.26 --> Há foco visível no campo?
2. <!-- id: select.interaction-design.27 --> É possível abrir e alterar a seleção usando teclado conforme o padrão do navegador/sistema?
3. <!-- id: select.interaction-design.28 --> É possível sair do campo e continuar o fluxo sem prender o foco?

<!-- id: select.interaction-design.29 -->
### Projetando para uso com leitor de telas

1. <!-- id: select.interaction-design.31 --> O rótulo do select é anunciado corretamente?
2. <!-- id: select.interaction-design.32 --> O valor selecionado é anunciado?
3. <!-- id: select.interaction-design.33 --> O estado obrigatório, inválido ou desabilitado é anunciado quando aplicável?
4. <!-- id: select.interaction-design.34 --> As opções são navegáveis e selecionáveis com tecnologia assistiva?

<!-- id: select.extension.1 -->
### Ampliação editorial — padrões e decisões de interação

<!-- id: select.extension.2 -->
Adaptação editorial do Magoo: complementa as orientações anteriores com decisões de desenho, documentação e revisão. As referências apoiam a adaptação; estes cenários não representam testes executados nem certificação.

<!-- id: select.extension.3 -->
#### Seleção simples, busca e seleção múltipla

<!-- id: select.extension.4 -->
Use seleção simples quando apenas um valor puder ser escolhido. Considere radio buttons quando for importante comparar poucas alternativas visíveis. O select nativo mantém os comandos da plataforma.

<!-- id: select.extension.5 -->
Use combobox editável quando digitar ajudar a encontrar opções. Documente se o texto apenas filtra valores permitidos ou se uma entrada livre também pode ser confirmada. Uma sugestão ativa ainda não é necessariamente um valor selecionado.

<!-- id: select.extension.6 -->
Use seleção múltipla quando mais de um valor puder ser escolhido. Desenhe como revisar e remover cada escolha e como limpar todas. Para conjuntos pequenos, considere checkboxes visíveis. Um combobox do APG representa um único valor; não basta adicionar seleção múltipla ao mesmo padrão.

<!-- id: select.extension.7 -->
#### O que desenhar e documentar

<!-- id: select.extension.8 -->
Mostre campo vazio, preenchido, aberto, com foco, desabilitado e com erro. Na busca de opções, inclua carregamento, ausência de correspondências e falha ao carregar, preservando o texto digitado e as escolhas anteriores.

<!-- id: select.extension.9 -->
Defina o que abre a lista, como percorrer opções, confirmar, cancelar e sair. No combobox editável com lista de sugestões, documente `setas` para percorrer, `Enter` para confirmar e `Esc` para fechar sem substituir o valor confirmado por uma sugestão apenas percorrida. Preserve os comandos de edição de texto.

<!-- id: select.extension.10 -->
Na seleção múltipla, diferencie foco e seleção. Documente se escolher mantém a lista aberta, limites de quantidade, nomes dos controles de remoção e o destino do foco após remover um item. Não esconda escolhas apenas porque deixaram de corresponder ao filtro.

<!-- id: select.extension.11 -->
#### Revisão do desenho e da implementação

<!-- id: select.extension.12 -->
No desenho, confira se a quantidade de escolhas e os estados estão claros, inclusive com rótulos longos e em telas pequenas. Na implementação, verifique nomes, valor confirmado, expansão, opção ativa e seleção com teclado e leitores de tela. Uma listbox não comporta botões ou links interativos dentro de suas opções.

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: select.extension.methods-scope -->
Escopo: os métodos básicos abaixo descrevem a seleção simples. Combobox editável e seleção múltipla têm decisões e cenários próprios na ampliação editorial da aba Design de interação.

<!-- id: select.interaction-methods.1 -->

<!-- id: select.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Select (Combo).

<!-- id: select.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: select.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: select.interaction-methods.10 --> Clicar no campo abre o seletor ou lista de opções.
- <!-- id: select.interaction-methods.11 --> Clicar em uma opção atualiza o valor selecionado.
- <!-- id: select.interaction-methods.12 --> Clicar fora do seletor deve fechar a lista quando aplicável.

<!-- id: select.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: select.interaction-methods.16 --> `TAB` move o foco para o campo.
- <!-- id: select.interaction-methods.18 --> `Setas direcionais` navegam ou alteram opções conforme comportamento nativo do navegador.
- <!-- id: select.interaction-methods.19 --> `ENTER`, `SPACE` ou combinações do sistema podem abrir ou confirmar seleção conforme plataforma.

<!-- id: select.interaction-methods.22 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: select.methods-review.2 --> Ao focar o seletor com leitor de telas, a pessoa identifica seu nome e o valor escolhido.
- <!-- id: select.methods-followup.1 --> Ao navegar até o campo, a pessoa identifica as instruções e eventuais erros antes de escolher ou corrigir o valor.
- <!-- id: select.methods-followup.2 --> No seletor nativo, abrir, percorrer e confirmar seguem a plataforma. Em um combobox personalizado, a pessoa usa os comandos descritos na documentação específica de Autocomplete.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: select.acceptance-criteria.1 -->

<!-- id: select.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: select.acceptance-criteria.7 -->
### Cenário: Considerando que estou em uma página que contém select

<!-- id: select.acceptance-criteria.8 -->
#### Navegação por teclado

1. <!-- id: select.acceptance-criteria.10 --> QUANDO uso a tecla `Tab` para mover o foco para um select
2. <!-- id: select.acceptance-criteria.12 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: select.acceptance-criteria.13 --> ENTÃO, quando uso teclado para abrir ou navegar pelas opções
4. <!-- id: select.acceptance-criteria.14 --> VEJO que as opções podem ser percorridas
5. <!-- id: select.acceptance-criteria.15 --> ENTÃO, quando seleciono uma opção
6. <!-- id: select.acceptance-criteria.16 --> VEJO que o valor do campo é atualizado

<!-- id: select.acceptance-criteria.17 -->
#### Leitor de telas para desktop

1. <!-- id: select.acceptance-criteria.19 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - <!-- id: select.acceptance-criteria.21 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: select.acceptance-criteria.22 --> OUÇO o valor selecionado.
   - <!-- id: select.acceptance-criteria.23 --> OUÇO que existem opções selecionáveis.
2. <!-- id: select.acceptance-criteria.24 --> ENTÃO, quando aciono ou altero o componente
3. <!-- id: select.acceptance-criteria.25 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: select.acceptance-criteria.26 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: select.acceptance-criteria.28 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - <!-- id: select.acceptance-criteria.30 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: select.acceptance-criteria.31 --> OUÇO o valor selecionado.
   - <!-- id: select.acceptance-criteria.32 --> Consigo abrir o seletor e escolher uma opção com os gestos do sistema.
2. <!-- id: select.acceptance-criteria.33 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. <!-- id: select.acceptance-criteria.34 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: select.extension.13 -->
### Cenários complementares — ampliação editorial

<!-- id: select.extension.14 -->
#### Combobox: cancelar uma sugestão

1. <!-- id: select.gherkin-standard.1 --> DADO um combobox editável com um valor confirmado
2. <!-- id: select.gherkin-standard.2 --> QUANDO percorro sugestões e pressiono `Esc`
3. <!-- id: select.gherkin-standard.3 --> ENTÃO a lista fecha sem confirmar a sugestão apenas percorrida e posso continuar editando o campo.

<!-- id: select.extension.16 -->
#### Seleção múltipla: remover uma escolha

1. <!-- id: select.gherkin-standard.4 --> DADO mais de um item selecionado
2. <!-- id: select.gherkin-standard.5 --> QUANDO aciono a remoção de um deles por teclado
3. <!-- id: select.gherkin-standard.6 --> ENTÃO somente essa escolha é removida, o foco permanece em um controle disponível e a atualização pode ser percebida com leitor de telas.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: select.considerations.1 -->

<!-- id: select.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Select (Combo).

- <!-- id: select.considerations.5 --> Esta página considera o uso de `select` nativo ou componente equivalente de seleção de formulário.
- <!-- id: select.considerations.7 --> Combobox customizado, listbox e autocomplete possuem comportamentos próprios e precisam de documentação específica.
- <!-- id: select.considerations.8 --> Não use placeholder como substituto de rótulo persistente.

<!-- id: select.methods-review.3 -->
### Notas de implementação e decisões de comportamento

- <!-- id: select.interaction-methods.24 --> O campo deve ter rótulo programaticamente associado.

- <!-- id: select.interaction-methods.25 --> Ajuda e erro devem estar associados ao campo quando existirem.

- <!-- id: select.interaction-methods.26 --> Select customizado deve seguir padrão próprio de combobox ou listbox, não apenas imitar visualmente o nativo.

<!-- id: references -->
## Referências

<!-- id: select.references.1 -->

<!-- id: select.references.2 -->
Referências adicionais sobre componentes do tipo Select (Combo).

<!-- id: select.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: select.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: select.references.10 -->
### Padrões de Design

- <!-- id: select.references.12 --> [Documentação de padrões HTML: The Select Element](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element)
- <!-- id: select.references.17 --> [MDN Web Docs: Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)
- <!-- id: select.references.22 --> [W3C APG: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- <!-- id: select.references.27 --> [W3C APG: Listbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

<!-- id: select.references.32 -->
### Design System

- <!-- id: select.references.34 --> [US.gov - Combo box](https://designsystem.digital.gov/components/combo-box/)
- <!-- id: select.references.39 --> [US.gov - Select](https://designsystem.digital.gov/components/select/)
- <!-- id: select.references.44 --> [IBM Carbon - Select](https://carbondesignsystem.com/components/select/usage/)
- <!-- id: select.references.49 --> [Adobe Spectrum - Picker](https://spectrum.adobe.com/page/picker/)
- <!-- id: select.references.54 --> [Bootstrap - Select](https://getbootstrap.com/docs/5.2/forms/select/)

<!-- id: select.extension.18 -->
### Referências da ampliação editorial

<!-- id: select.extension.21 -->
[W3C APG — Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

<!-- id: select.extension.24 -->
[W3C APG — Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
