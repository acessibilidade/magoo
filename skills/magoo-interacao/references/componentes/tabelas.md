# Tabelas

- ID: `tabelas`
- Categoria: estrutura
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-tabelas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organizam dados em linhas e colunas, preservando as relações entre células e cabeçalhos.

<!-- id: interaction-design -->
## Design de interação

<!-- id: tabelas.designer-guide.frame -->
<!-- id: tabelas.designer-guide.1 -->
### Guia rápido para designers

<!-- id: tabelas.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: tabelas.designer-guide.3 -->
#### Quando usar

<!-- id: tabelas.designer-guide.4 -->
Use para dados que precisam ser comparados por linhas e colunas.

<!-- id: tabelas.designer-guide.5 -->
#### O que desenhar

<!-- id: tabelas.designer-guide.6 -->
Mostre cabeçalhos, ordenação, seleção de linhas, ações em lote e detalhes expansíveis quando existirem. Inclua carregamento, ausência de registros e leitura em telas pequenas.

<!-- id: tabelas.designer-guide.7 -->
#### Como se comporta

<!-- id: tabelas.designer-guide.8 -->
Células estáticas não precisam receber foco. Controles internos seguem seus próprios padrões; a rolagem precisa funcionar pelo teclado quando necessária.

<!-- id: tabelas.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: tabelas.designer-guide.10 -->
Documente relações entre cabeçalhos e dados, alcance da ordenação e seleção, persistência ao filtrar ou paginar e foco após recolher detalhes ou executar ações.

<!-- id: tabelas.designer-guide.11 -->
#### Como revisar

<!-- id: tabelas.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: tabelas.designer-guide.13 -->
### Orientações completas

<!-- id: tabelas.interaction-design.1 -->

<!-- id: tabelas.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes do tipo Tabelas.

<!-- id: tabelas.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: tabelas.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: tabelas.interaction-design.9 --> Antes de ler os dados é possível perceber que há relação entre linhas e colunas?
2. <!-- id: tabelas.interaction-design.10 --> A tabela possui título ou legenda que explica sua finalidade?
3. <!-- id: tabelas.interaction-design.11 --> Cabeçalhos de linhas e colunas são visualmente claros?

<!-- id: tabelas.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: tabelas.interaction-design.15 --> Quando houver ordenação ou ação na tabela, há feedback visual no controle?
2. <!-- id: tabelas.interaction-design.16 --> Áreas clicáveis dentro de células são distinguíveis do dado estático?
3. <!-- id: tabelas.interaction-design.17 --> Tabela com rolagem horizontal indica que há mais conteúdo?

<!-- id: tabelas.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: tabelas.interaction-design.20 --> Em telas pequenas, a tabela continua legível e compreensível?
2. <!-- id: tabelas.interaction-design.21 --> Rolagem horizontal, se existir, é fácil de executar?
3. <!-- id: tabelas.interaction-design.22 --> A reorganização responsiva preserva cabeçalhos e relações dos dados?

<!-- id: tabelas.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: tabelas.interaction-design.26 --> Tabela rolável horizontalmente pode receber foco para permitir rolagem por teclado?
2. <!-- id: tabelas.interaction-design.27 --> Controles de ordenação ou ação possuem foco visível?
3. <!-- id: tabelas.interaction-design.28 --> A ordem de foco acompanha a ordem visual e lógica dos dados?

<!-- id: tabelas.interaction-design.29 -->
### Projetando para uso com leitor de telas

1. <!-- id: tabelas.interaction-design.31 --> A legenda ou título da tabela é anunciado?
2. <!-- id: tabelas.interaction-design.32 --> Cabeçalhos de coluna e linha são associados aos dados?
3. <!-- id: tabelas.interaction-design.33 --> Mudanças de ordenação são anunciadas quando aplicável?

<!-- id: tabelas.extension.1 -->
### Ampliação editorial — padrões e decisões de interação

<!-- id: tabelas.extension.2 -->
Adaptação editorial do Magoo: complementa as orientações anteriores com decisões de desenho, documentação e revisão. As referências apoiam a adaptação; estes cenários não representam testes executados nem certificação.

<!-- id: tabelas.extension.3 -->
#### Ordenação, seleção e ações em lote

<!-- id: tabelas.extension.4 -->
Use tabela para relações entre linhas e colunas. Botões, links e checkboxes dentro das células não transformam automaticamente a tabela em uma grade interativa. Reserve o padrão grid para uma necessidade de interação que justifique sua navegação própria.

<!-- id: tabelas.extension.5 -->
Na ordenação, diferencie colunas ordenáveis, coluna atualmente ordenada e direção. Documente a ordem inicial, o ciclo entre direções, o tratamento de empates e se a ordenação abrange todo o conjunto ou apenas a página.

<!-- id: tabelas.extension.6 -->
Na seleção de linhas, mostre seleção individual, parcial e total. Defina se Selecionar tudo inclui as linhas visíveis, a página atual ou todos os resultados filtrados. Informe quantidade e alcance antes de uma ação em lote.

<!-- id: tabelas.extension.7 -->
Documente o que acontece com a seleção ao ordenar, filtrar ou paginar. Após uma ação em lote, apresente sucesso, falhas parciais e próximos passos, sem perder a identificação dos registros afetados.

<!-- id: tabelas.extension.8 -->
#### Detalhes expansíveis e estados dos dados

<!-- id: tabelas.extension.9 -->
Use um botão por linha para expandir detalhes, com nome que identifique o registro e indicação de aberto ou fechado. Defina se várias linhas podem permanecer expandidas. Ao recolher detalhes que contêm o foco, devolva-o ao botão antes de ocultar o conteúdo.

<!-- id: tabelas.extension.10 -->
Desenhe carregamento, conjunto sem registros, filtro sem correspondências e falha de atualização como situações diferentes. Em telas pequenas e com ampliação, preserve cabeçalhos, identificação dos registros e acesso às ações, incluindo ações em lote.

<!-- id: tabelas.extension.11 -->
#### Revisão do desenho e da implementação

<!-- id: tabelas.extension.12 -->
No desenho, confira se é possível reconhecer ordenação, seleção e alcance das ações sem depender apenas de cor. Na implementação, verifique cabeçalhos associados, estado de ordenação, nomes dos controles de cada registro e acesso aos detalhes por teclado e leitor de telas.

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: tabelas.extension.methods-scope -->
Escopo: os métodos básicos abaixo descrevem tabelas HTML com controles independentes. Ordenação, seleção, ações em lote e detalhes expansíveis são aprofundados na ampliação editorial da aba Design de interação.

<!-- id: tabelas.interaction-methods.1 -->

<!-- id: tabelas.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Tabelas.

<!-- id: tabelas.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: tabelas.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: tabelas.interaction-methods.10 --> Tabelas estáticas não exigem interação.
- <!-- id: tabelas.interaction-methods.11 --> Clicar em cabeçalho ordenável altera a ordenação quando esse recurso existir.
- <!-- id: tabelas.interaction-methods.12 --> Links e botões dentro de células seguem seus próprios padrões.

<!-- id: tabelas.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: tabelas.interaction-methods.16 --> Tabelas estáticas não devem adicionar foco em células sem necessidade.
- <!-- id: tabelas.interaction-methods.17 --> Controles internos devem ser alcançáveis por `TAB`.
- <!-- id: tabelas.methods-review.2 --> Quando a tabela tem rolagem horizontal, focar a região rolável e usar as `setas` permite alcançar os dados fora da área visível, conforme o navegador.

<!-- id: tabelas.interaction-methods.21 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: tabelas.methods-review.4 --> Ao chegar à tabela com os comandos do leitor de telas, a pessoa identifica seu título ou descrição.
- <!-- id: tabelas.methods-review.6 --> Usar os comandos de navegação por células do leitor de telas permite relacionar cada valor aos seus cabeçalhos.
- <!-- id: tabelas.methods-followup.1 --> Ao percorrer uma tabela complexa com os comandos de células do leitor de telas, a pessoa identifica os cabeçalhos correspondentes ao dado atual.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: tabelas.acceptance-criteria.1 -->

<!-- id: tabelas.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: tabelas.acceptance-criteria.7 -->
### Cenário: Considerando que estou em uma página que contém tabelas

<!-- id: tabelas.acceptance-criteria.8 -->
#### Navegação por teclado

1. <!-- id: tabelas.acceptance-criteria.10 --> QUANDO uso teclado para navegar por uma tabela com controles interativos
2. <!-- id: tabelas.acceptance-criteria.11 --> VEJO foco visível nos controles disponíveis
3. <!-- id: tabelas.acceptance-criteria.12 --> ENTÃO, quando a tabela possui rolagem horizontal
4. <!-- id: tabelas.acceptance-criteria.13 --> VEJO que consigo acessar e rolar o contêiner quando necessário

<!-- id: tabelas.acceptance-criteria.14 -->
#### Leitor de telas para desktop

1. <!-- id: tabelas.acceptance-criteria.16 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - <!-- id: tabelas.acceptance-criteria.18 --> OUÇO o título ou legenda da tabela.
   - <!-- id: tabelas.acceptance-criteria.19 --> OUÇO que o conteúdo é uma tabela.
   - <!-- id: tabelas.acceptance-criteria.20 --> OUÇO cabeçalhos relacionados às células de dados.
2. <!-- id: tabelas.acceptance-criteria.21 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: tabelas.acceptance-criteria.22 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: tabelas.acceptance-criteria.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: tabelas.acceptance-criteria.25 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - <!-- id: tabelas.acceptance-criteria.27 --> OUÇO o título ou legenda da tabela.
   - <!-- id: tabelas.acceptance-criteria.28 --> OUÇO que o conteúdo é uma tabela.
   - <!-- id: tabelas.acceptance-criteria.29 --> Consigo compreender a relação entre cabeçalhos e dados.
2. <!-- id: tabelas.acceptance-criteria.30 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: tabelas.acceptance-criteria.31 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: tabelas.extension.13 -->
### Cenários complementares — ampliação editorial

<!-- id: tabelas.extension.14 -->
#### Ordenar sem perder o contexto

1. <!-- id: tabelas.gherkin-standard.1 --> DADA uma coluna ordenável
2. <!-- id: tabelas.gherkin-standard.2 --> QUANDO aciono seu controle por teclado
3. <!-- id: tabelas.gherkin-standard.3 --> ENTÃO a ordem dos registros muda conforme a direção indicada, o foco permanece no controle e a nova ordenação fica disponível ao leitor de telas.

<!-- id: tabelas.extension.16 -->
#### Seleção e alcance da ação em lote

1. <!-- id: tabelas.gherkin-standard.4 --> DADAS linhas selecionadas
2. <!-- id: tabelas.gherkin-standard.5 --> QUANDO filtro ou mudo de página
3. <!-- id: tabelas.gherkin-standard.6 --> ENTÃO a seleção segue a regra documentada e a quantidade e o alcance dos registros afetados ficam claros antes de executar a ação em lote.

<!-- id: tabelas.extension.18 -->
#### Recolher detalhes com foco interno

1. <!-- id: tabelas.gherkin-standard.7 --> DADOS detalhes expandidos com foco em um controle interno
2. <!-- id: tabelas.gherkin-standard.8 --> QUANDO os detalhes são recolhidos
3. <!-- id: tabelas.gherkin-standard.9 --> ENTÃO o foco retorna ao botão de expansão da linha e o estado recolhido pode ser percebido com leitor de telas.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: tabelas.considerations.1 -->

<!-- id: tabelas.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Tabelas.

- <!-- id: tabelas.considerations.5 --> Não use tabela para layout visual.
- <!-- id: tabelas.considerations.6 --> Tabelas complexas exigem associação mais cuidadosa entre cabeçalhos e células.
- <!-- id: tabelas.considerations.7 --> Versões responsivas não devem remover relações semânticas importantes.

<!-- id: tabelas.methods-review.7 -->
### Notas de implementação e decisões de comportamento

- <!-- id: tabelas.interaction-methods.19 --> Contêiner rolável pode receber `tabindex="0"` para permitir rolagem por teclado.

- <!-- id: tabelas.interaction-methods.23 --> Use `caption` para título ou descrição da tabela.

- <!-- id: tabelas.interaction-methods.25 --> Use `th` com `scope` para cabeçalhos simples.

- <!-- id: tabelas.interaction-methods.28 --> Tabelas complexas devem associar cabeçalhos e células de forma programática.

<!-- id: references -->
## Referências

<!-- id: tabelas.references.1 -->

<!-- id: tabelas.references.2 -->
Referências adicionais sobre componentes do tipo Tabelas.

<!-- id: tabelas.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: tabelas.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: tabelas.references.10 -->
### Padrões de Design

- <!-- id: tabelas.references.12 --> [Documentação de padrões HTML: The Table Element](https://html.spec.whatwg.org/multipage/tables.html#the-table-element)
- <!-- id: tabelas.references.17 --> [W3C APG: Table Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/)
- <!-- id: tabelas.references.22 --> [W3C WAI: Tables Tutorial](https://www.w3.org/WAI/tutorials/tables/)

<!-- id: tabelas.references.27 -->
### Design System

- <!-- id: tabelas.references.29 --> [US.gov - Table](https://designsystem.digital.gov/components/table/)
- <!-- id: tabelas.references.34 --> [IBM Carbon - Data table](https://carbondesignsystem.com/components/data-table/usage/)
- <!-- id: tabelas.references.39 --> [Adobe Spectrum - Table](https://spectrum.adobe.com/page/table/)
- <!-- id: tabelas.references.44 --> [Bootstrap - Tables](https://getbootstrap.com/docs/5.2/content/tables/)

<!-- id: tabelas.extension.20 -->
### Referências da ampliação editorial

<!-- id: tabelas.extension.23 -->
[W3C APG — Table](https://www.w3.org/WAI/ARIA/apg/patterns/table/)

<!-- id: tabelas.extension.26 -->
[Carbon — Data table](https://carbondesignsystem.com/components/data-table/usage/)
