# Tabelas

- ID: `tabelas`
- Categoria: estrutura
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-tabelas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organizam dados em linhas e colunas, preservando as relações entre células e cabeçalhos.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para dados que precisam ser comparados por linhas e colunas.

#### O que desenhar

Mostre cabeçalhos, ordenação, seleção de linhas, ações em lote e detalhes expansíveis quando existirem. Inclua carregamento, ausência de registros e leitura em telas pequenas.

#### Como se comporta

Células estáticas não precisam receber foco. Controles internos seguem seus próprios padrões; a rolagem precisa funcionar pelo teclado quando necessária.

#### O que documentar no Figma

Documente relações entre cabeçalhos e dados, alcance da ordenação e seleção, persistência ao filtrar ou paginar e foco após recolher detalhes ou executar ações.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes do tipo Tabelas.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de ler os dados é possível perceber que há relação entre linhas e colunas?
2. A tabela possui título ou legenda que explica sua finalidade?
3. Cabeçalhos de linhas e colunas são visualmente claros?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Quando houver ordenação ou ação na tabela, há feedback visual no controle?
2. Áreas clicáveis dentro de células são distinguíveis do dado estático?
3. Tabela com rolagem horizontal indica que há mais conteúdo?

### Projetando para uso com gestos

1. Em telas pequenas, a tabela continua legível e compreensível?
2. Rolagem horizontal, se existir, é fácil de executar?
3. A reorganização responsiva preserva cabeçalhos e relações dos dados?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Tabela rolável horizontalmente pode receber foco para permitir rolagem por teclado?
2. Controles de ordenação ou ação possuem foco visível?
3. A ordem de foco acompanha a ordem visual e lógica dos dados?

### Projetando para uso com leitor de telas

1. A legenda ou título da tabela é anunciado?
2. Cabeçalhos de coluna e linha são associados aos dados?
3. Mudanças de ordenação são anunciadas quando aplicável?

### Ampliação editorial — padrões e decisões de interação

Adaptação editorial do Magoo: complementa as orientações anteriores com decisões de desenho, documentação e revisão. As referências apoiam a adaptação; estes cenários não representam testes executados nem certificação.

#### Ordenação, seleção e ações em lote

Use tabela para relações entre linhas e colunas. Botões, links e checkboxes dentro das células não transformam automaticamente a tabela em uma grade interativa. Reserve o padrão grid para uma necessidade de interação que justifique sua navegação própria.

Na ordenação, diferencie colunas ordenáveis, coluna atualmente ordenada e direção. Documente a ordem inicial, o ciclo entre direções, o tratamento de empates e se a ordenação abrange todo o conjunto ou apenas a página.

Na seleção de linhas, mostre seleção individual, parcial e total. Defina se Selecionar tudo inclui as linhas visíveis, a página atual ou todos os resultados filtrados. Informe quantidade e alcance antes de uma ação em lote.

Documente o que acontece com a seleção ao ordenar, filtrar ou paginar. Após uma ação em lote, apresente sucesso, falhas parciais e próximos passos, sem perder a identificação dos registros afetados.

#### Detalhes expansíveis e estados dos dados

Use um botão por linha para expandir detalhes, com nome que identifique o registro e indicação de aberto ou fechado. Defina se várias linhas podem permanecer expandidas. Ao recolher detalhes que contêm o foco, devolva-o ao botão antes de ocultar o conteúdo.

Desenhe carregamento, conjunto sem registros, filtro sem correspondências e falha de atualização como situações diferentes. Em telas pequenas e com ampliação, preserve cabeçalhos, identificação dos registros e acesso às ações, incluindo ações em lote.

#### Revisão do desenho e da implementação

No desenho, confira se é possível reconhecer ordenação, seleção e alcance das ações sem depender apenas de cor. Na implementação, verifique cabeçalhos associados, estado de ordenação, nomes dos controles de cada registro e acesso aos detalhes por teclado e leitor de telas.

## Métodos de Interação

Escopo: os métodos básicos abaixo descrevem tabelas HTML com controles independentes. Ordenação, seleção, ações em lote e detalhes expansíveis são aprofundados na ampliação editorial da aba Design de interação.

Possíveis métodos de interação em componentes do tipo Tabelas.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Tabelas estáticas não exigem interação.
- Clicar em cabeçalho ordenável altera a ordenação quando esse recurso existir.
- Links e botões dentro de células seguem seus próprios padrões.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Tabelas estáticas não devem adicionar foco em células sem necessidade.
- Controles internos devem ser alcançáveis por `TAB`.
- Quando a tabela tem rolagem horizontal, focar a região rolável e usar as `setas` permite alcançar os dados fora da área visível, conforme o navegador.

### Interação com teclado (ou gestos) + leitor de telas

- Ao chegar à tabela com os comandos do leitor de telas, a pessoa identifica seu título ou descrição.
- Usar os comandos de navegação por células do leitor de telas permite relacionar cada valor aos seus cabeçalhos.
- Ao percorrer uma tabela complexa com os comandos de células do leitor de telas, a pessoa identifica os cabeçalhos correspondentes ao dado atual.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém tabelas

#### Navegação por teclado

1. QUANDO uso teclado para navegar por uma tabela com controles interativos
2. VEJO foco visível nos controles disponíveis
3. ENTÃO, quando a tabela possui rolagem horizontal
4. VEJO que consigo acessar e rolar o contêiner quando necessário

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - OUÇO o título ou legenda da tabela.
   - OUÇO que o conteúdo é uma tabela.
   - OUÇO cabeçalhos relacionados às células de dados.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - OUÇO o título ou legenda da tabela.
   - OUÇO que o conteúdo é uma tabela.
   - Consigo compreender a relação entre cabeçalhos e dados.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

### Cenários complementares — ampliação editorial

#### Ordenar sem perder o contexto

1. DADA uma coluna ordenável
2. QUANDO aciono seu controle por teclado
3. ENTÃO a ordem dos registros muda conforme a direção indicada, o foco permanece no controle e a nova ordenação fica disponível ao leitor de telas.

#### Seleção e alcance da ação em lote

1. DADAS linhas selecionadas
2. QUANDO filtro ou mudo de página
3. ENTÃO a seleção segue a regra documentada e a quantidade e o alcance dos registros afetados ficam claros antes de executar a ação em lote.

#### Recolher detalhes com foco interno

1. DADOS detalhes expandidos com foco em um controle interno
2. QUANDO os detalhes são recolhidos
3. ENTÃO o foco retorna ao botão de expansão da linha e o estado recolhido pode ser percebido com leitor de telas.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Tabelas.

- Não use tabela para layout visual.
- Tabelas complexas exigem associação mais cuidadosa entre cabeçalhos e células.
- Versões responsivas não devem remover relações semânticas importantes.

### Notas de implementação e decisões de comportamento

- Contêiner rolável pode receber `tabindex="0"` para permitir rolagem por teclado.

- Use `caption` para título ou descrição da tabela.

- Use `th` com `scope` para cabeçalhos simples.

- Tabelas complexas devem associar cabeçalhos e células de forma programática.

## Referências

Referências adicionais sobre componentes do tipo Tabelas.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Documentação de padrões HTML: The Table Element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element)
- [W3C APG: Table Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
- [W3C WAI: Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/)

### Design System

- [US.gov - Table](https://designsystem.digital.gov/components/table/)
- [IBM Carbon - Data table](https://carbondesignsystem.com/components/data-table/usage/)
- [Adobe Spectrum - Table](https://spectrum.adobe.com/page/table/)
- [Bootstrap - Tables](https://getbootstrap.com/docs/5.2/content/tables/)

### Referências da ampliação editorial

[W3C APG — Table](https://www.w3.org/WAI/ARIA/apg/patterns/table/)

[Carbon — Data table](https://carbondesignsystem.com/components/data-table/usage/)
