# Select (Combo)

- ID: `select`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-select.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Apresenta um conjunto de opções em um controle de seleção compacto.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use seleção simples para um valor, combobox editável para buscar opções e seleção múltipla para várias escolhas. Avalie radio buttons ou checkboxes quando as opções precisarem ficar visíveis.

#### O que desenhar

Mostre rótulo, escolhas, foco, ajuda e erro. Na busca de opções, inclua carregamento e ausência de correspondências; na seleção múltipla, revisão e remoção das escolhas.

#### Como se comporta

Ao abrir, a pessoa escolhe uma opção e o campo atualiza o valor. Os comandos do seletor nativo variam conforme a plataforma.

#### O que documentar no Figma

Defina o padrão adotado, entrada livre ou restrita, confirmação, cancelamento e regras da seleção múltipla. Diferencie opção ativa, valor confirmado e itens selecionados.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Select (Combo).

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir é possível perceber que existe uma lista de opções para escolha?
2. O rótulo comunica claramente o tipo de valor esperado?
3. O valor selecionado ou placeholder é visualmente compreensível?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no campo?
2. Ao clicar no campo, a lista de opções é aberta ou o seletor nativo é exibido?
3. Ao selecionar uma opção, o valor visível é atualizado?

### Projetando para uso com gestos

1. O campo possui área de toque confortável?
2. Ao `tocar` no campo, o seletor ou lista de opções é exibido?
3. Ao escolher uma opção, o valor selecionado fica claro?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há foco visível no campo?
2. É possível abrir e alterar a seleção usando teclado conforme o padrão do navegador/sistema?
3. É possível sair do campo e continuar o fluxo sem prender o foco?

### Projetando para uso com leitor de telas

1. O rótulo do select é anunciado corretamente?
2. O valor selecionado é anunciado?
3. O estado obrigatório, inválido ou desabilitado é anunciado quando aplicável?
4. As opções são navegáveis e selecionáveis com tecnologia assistiva?

### Ampliação editorial — padrões e decisões de interação

Adaptação editorial do Magoo: complementa as orientações anteriores com decisões de desenho, documentação e revisão. As referências apoiam a adaptação; estes cenários não representam testes executados nem certificação.

#### Seleção simples, busca e seleção múltipla

Use seleção simples quando apenas um valor puder ser escolhido. Considere radio buttons quando for importante comparar poucas alternativas visíveis. O select nativo mantém os comandos da plataforma.

Use combobox editável quando digitar ajudar a encontrar opções. Documente se o texto apenas filtra valores permitidos ou se uma entrada livre também pode ser confirmada. Uma sugestão ativa ainda não é necessariamente um valor selecionado.

Use seleção múltipla quando mais de um valor puder ser escolhido. Desenhe como revisar e remover cada escolha e como limpar todas. Para conjuntos pequenos, considere checkboxes visíveis. Um combobox do APG representa um único valor; não basta adicionar seleção múltipla ao mesmo padrão.

#### O que desenhar e documentar

Mostre campo vazio, preenchido, aberto, com foco, desabilitado e com erro. Na busca de opções, inclua carregamento, ausência de correspondências e falha ao carregar, preservando o texto digitado e as escolhas anteriores.

Defina o que abre a lista, como percorrer opções, confirmar, cancelar e sair. No combobox editável com lista de sugestões, documente `setas` para percorrer, `Enter` para confirmar e `Esc` para fechar sem substituir o valor confirmado por uma sugestão apenas percorrida. Preserve os comandos de edição de texto.

Na seleção múltipla, diferencie foco e seleção. Documente se escolher mantém a lista aberta, limites de quantidade, nomes dos controles de remoção e o destino do foco após remover um item. Não esconda escolhas apenas porque deixaram de corresponder ao filtro.

#### Revisão do desenho e da implementação

No desenho, confira se a quantidade de escolhas e os estados estão claros, inclusive com rótulos longos e em telas pequenas. Na implementação, verifique nomes, valor confirmado, expansão, opção ativa e seleção com teclado e leitores de tela. Uma listbox não comporta botões ou links interativos dentro de suas opções.

## Métodos de Interação

Escopo: os métodos básicos abaixo descrevem a seleção simples. Combobox editável e seleção múltipla têm decisões e cenários próprios na ampliação editorial da aba Design de interação.

Possíveis métodos de interação em componentes do tipo Select (Combo).

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar no campo abre o seletor ou lista de opções.
- Clicar em uma opção atualiza o valor selecionado.
- Clicar fora do seletor deve fechar a lista quando aplicável.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `TAB` move o foco para o campo.
- `Setas direcionais` navegam ou alteram opções conforme comportamento nativo do navegador.
- `ENTER`, `SPACE` ou combinações do sistema podem abrir ou confirmar seleção conforme plataforma.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar o seletor com leitor de telas, a pessoa identifica seu nome e o valor escolhido.
- Ao navegar até o campo, a pessoa identifica as instruções e eventuais erros antes de escolher ou corrigir o valor.
- No seletor nativo, abrir, percorrer e confirmar seguem a plataforma. Em um combobox personalizado, a pessoa usa os comandos descritos na documentação específica de Autocomplete.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém select

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um select
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso teclado para abrir ou navegar pelas opções
4. VEJO que as opções podem ser percorridas
5. ENTÃO, quando seleciono uma opção
6. VEJO que o valor do campo é atualizado

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO o valor selecionado.
   - OUÇO que existem opções selecionáveis.
2. ENTÃO, quando aciono ou altero o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO o valor selecionado.
   - Consigo abrir o seletor e escolher uma opção com os gestos do sistema.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

### Cenários complementares — ampliação editorial

#### Combobox: cancelar uma sugestão

1. DADO um combobox editável com um valor confirmado
2. QUANDO percorro sugestões e pressiono `Esc`
3. ENTÃO a lista fecha sem confirmar a sugestão apenas percorrida e posso continuar editando o campo.

#### Seleção múltipla: remover uma escolha

1. DADO mais de um item selecionado
2. QUANDO aciono a remoção de um deles por teclado
3. ENTÃO somente essa escolha é removida, o foco permanece em um controle disponível e a atualização pode ser percebida com leitor de telas.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Select (Combo).

- Esta página considera o uso de `select` nativo ou componente equivalente de seleção de formulário.
- Combobox customizado, listbox e autocomplete possuem comportamentos próprios e precisam de documentação específica.
- Não use placeholder como substituto de rótulo persistente.

### Notas de implementação e decisões de comportamento

- O campo deve ter rótulo programaticamente associado.

- Ajuda e erro devem estar associados ao campo quando existirem.

- Select customizado deve seguir padrão próprio de combobox ou listbox, não apenas imitar visualmente o nativo.

## Referências

Referências adicionais sobre componentes do tipo Select (Combo).

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Documentação de padrões HTML: The Select Element](https://html.spec.whatwg.org/multipage/form-elements.html#the-select-element)
- [MDN Web Docs: Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)
- [W3C APG: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [W3C APG: Listbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

### Design System

- [US.gov - Combo box](https://designsystem.digital.gov/components/combo-box/)
- [US.gov - Select](https://designsystem.digital.gov/components/select/)
- [IBM Carbon - Select](https://carbondesignsystem.com/components/select/usage/)
- [Adobe Spectrum - Picker](https://spectrum.adobe.com/page/picker/)
- [Bootstrap - Select](https://getbootstrap.com/docs/5.2/forms/select/)

### Referências da ampliação editorial

[W3C APG — Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

[W3C APG — Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
