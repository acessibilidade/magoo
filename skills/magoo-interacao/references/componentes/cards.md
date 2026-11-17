# Cards

- ID: `cards`
- Categoria: estrutura
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/estrutura/cards.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Agrupam conteúdo sobre um assunto, com hierarquia clara e distinção entre informação, navegação e ações.

<!-- id: interaction-design -->
## Design de interação

<!-- id: cards.designer-guide.frame -->
<!-- id: cards.designer-guide.1 -->
### Guia rápido para designers

<!-- id: cards.designer-guide.2 -->
#### Quando usar

<!-- id: cards.designer-guide.3 -->
Use para apresentar unidades de conteúdo relacionadas em uma coleção. Avalie tabela quando a tarefa exigir comparação por colunas.

<!-- id: cards.designer-guide.4 -->
#### O que desenhar

<!-- id: cards.designer-guide.5 -->
Mostre título, resumo, imagem quando necessária e ações. Diferencie card informativo, destino principal e ações independentes.

<!-- id: cards.designer-guide.6 -->
#### Como se comporta

<!-- id: cards.designer-guide.7 -->
Conteúdo estático é lido; links navegam e botões executam ações. A área acionável precisa ser previsível.

<!-- id: cards.designer-guide.8 -->
#### O que documentar no Figma

<!-- id: cards.designer-guide.9 -->
Defina hierarquia, área acionável, ordem de leitura, alternativas das imagens e tratamento de títulos longos.

<!-- id: cards.designer-guide.10 -->
#### Como revisar

<!-- id: cards.designer-guide.11 -->
Confira variações e telas pequenas no desenho. Na implementação, verifique semântica, foco, nomes e acionamento independente de cada controle.

<!-- id: cards.15 -->
### Conteúdo e finalidade

1. <!-- id: cards.16 --> Cada card apresenta uma unidade compreensível de conteúdo? O título e o resumo ajudam a distinguir itens sem depender da imagem?
2. <!-- id: cards.17 --> O card é apenas informativo, possui um destino ou contém várias ações? Evite a mesma aparência de interação para cards com comportamentos diferentes.
3. <!-- id: cards.18 --> A coleção precisa de lista e títulos? A hierarquia dos cabeçalhos deve acompanhar a página, sem fixar um nível só pela aparência.

<!-- id: cards.20 -->
### Área acionável e controles

1. <!-- id: cards.21 --> A pessoa consegue reconhecer onde clicar e qual destino será aberto? Se toda a área ampliar um link, o foco visível também precisa comunicar essa área.
2. <!-- id: cards.22 --> Ações secundárias, como Favoritar, continuam independentes? Não aninhe botões ou links dentro de outro link ou botão.
3. <!-- id: cards.23 --> Há paradas de foco repetidas para o mesmo destino sem necessidade? O nome do link identifica o card, evitando uma coleção de links genéricos Saiba mais?

<!-- id: cards.25 -->
### Adaptação do conteúdo

1. <!-- id: cards.26 --> Títulos longos, ausência de imagem e quantidades diferentes de texto preservam a leitura e o acesso às ações? Não esconda informação essencial em um corte sem alternativa.
2. <!-- id: cards.27 --> Ao passar de várias colunas para uma, a ordem visual permanece coerente com leitura e foco? O conteúdo continua disponível com ampliação?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: cards.29 -->

<!-- id: cards.30 -->
### Mouse e toque

<!-- id: cards.31 -->
Links e botões apresentam áreas acionáveis identificáveis. Acionar uma ação secundária não deve também abrir o destino principal do card.

<!-- id: cards.32 -->
### Teclado

<!-- id: cards.33 -->
Cards estáticos não recebem foco apenas por terem borda ou destaque. `Tab` percorre links e botões na ordem do conteúdo.

<!-- id: cards.methods-review.1 -->
`Enter` abre o link focado; `Enter` ou `Espaço` executa a ação do botão focado. Acionar um botão secundário não abre também o destino principal do card.

<!-- id: cards.35 -->
### Leitores de tela

<!-- id: cards.methods-review.2 -->
Os comandos de leitura e de navegação por títulos ou links do leitor de telas permitem percorrer a coleção e identificar o assunto e o destino de cada card.

<!-- id: cards.methods-review.3 -->
Com leitor de telas no celular, `deslizar o dedo` percorre conteúdo e controles no modo padrão; `tocar duas vezes` ativa o link ou botão focado. Ao alternar Favoritar, a pessoa percebe o novo estado.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: cards.gherkin-standard.intro-0 -->

<!-- id: cards.gherkin-standard.intro-1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: cards.38 -->
### Cenário: Considerando que estou em uma página que contém Cards

<!-- id: cards.39 -->
Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

<!-- id: cards.gherkin-standard.13 -->
#### Navegação por teclado

1. <!-- id: cards.gherkin-standard.14 --> QUANDO percorro uma coleção de cards com `Tab` e `Shift + Tab`
2. <!-- id: cards.gherkin-standard.15 --> VEJO foco nos links e botões, sem paradas criadas apenas para cards estáticos
3. <!-- id: cards.gherkin-standard.16 --> ENTÃO, quando aciono uma ação secundária, VEJO seu resultado sem abrir também o destino principal

<!-- id: cards.gherkin-standard.18 -->
#### Leitor de telas para desktop

1. <!-- id: cards.gherkin-standard.19 --> QUANDO navego pela coleção com leitor de telas no computador
2. <!-- id: cards.gherkin-standard.20 --> OUÇO os títulos e nomes de links que distinguem os destinos e identifico ações independentes
3. <!-- id: cards.gherkin-standard.21 --> ENTÃO, quando aciono um link ou botão, OUÇO ou percebo o destino ou estado correspondente sem depender da imagem do card

<!-- id: cards.gherkin-standard.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: cards.gherkin-standard.24 --> QUANDO exploro os cards com leitor de telas no celular
2. <!-- id: cards.gherkin-standard.25 --> OUÇO o conteúdo em ordem compreensível e identifico cada controle por seu nome
3. <!-- id: cards.gherkin-standard.26 --> ENTÃO, quando aciono um controle com o gesto da plataforma, OUÇO ou percebo somente a ação correspondente e continuo a navegação

<!-- id: cards.gherkin-standard.28 -->
### Cenários complementares — ampliação editorial

<!-- id: cards.40 -->
#### Card informativo

1. <!-- id: cards.gherkin-standard.1 --> DADO um card sem ações
2. <!-- id: cards.gherkin-standard.2 --> QUANDO percorro a página por teclado e leitor de telas
3. <!-- id: cards.gherkin-standard.3 --> ENTÃO leio o conteúdo em ordem e não encontro uma parada de foco criada apenas para o contêiner.

<!-- id: cards.42 -->
#### Destino principal e ação secundária

1. <!-- id: cards.gherkin-standard.4 --> DADO um card com link e botão Favoritar
2. <!-- id: cards.gherkin-standard.5 --> QUANDO aciono Favoritar
3. <!-- id: cards.gherkin-standard.6 --> ENTÃO o estado é atualizado sem abrir o link principal e posso perceber a mudança com leitor de telas.

<!-- id: cards.44 -->
#### Título longo e tela pequena

1. <!-- id: cards.gherkin-standard.7 --> DADO um título longo
2. <!-- id: cards.gherkin-standard.8 --> QUANDO a coleção é apresentada em tela pequena ou com ampliação
3. <!-- id: cards.gherkin-standard.9 --> ENTÃO o título, o contexto e os controles permanecem disponíveis sem sobreposição.

<!-- id: cards.46 -->
#### Identificar destinos

1. <!-- id: cards.gherkin-standard.10 --> DADA uma coleção de cards
2. <!-- id: cards.gherkin-standard.11 --> QUANDO navego pela lista de links do leitor de telas
3. <!-- id: cards.gherkin-standard.12 --> ENTÃO os nomes permitem distinguir os destinos sem depender de imagens ou da posição visual.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: cards.48 -->

<!-- id: cards.49 -->
Card é uma composição visual, sem um papel ARIA universal chamado card. Escolha elementos pela função do conteúdo e dos controles.

<!-- id: cards.50 -->
Não substitua dados tabulares por cards se isso impedir comparar relações importantes entre linhas e colunas.

<!-- id: cards.51 -->
O USWDS apresenta cards acionáveis; a variante apenas informativa deste guia é uma ampliação editorial. A aparência não deve prometer interação inexistente.

<!-- id: cards.methods-review.4 -->
### Notas de implementação e decisões de comportamento

<!-- id: cards.34 -->
`Enter` aciona links; `Enter` e `Espaço` acionam botões. Um contêiner com evento de clique não substitui um controle semântico.

<!-- id: cards.36 -->
Use títulos e agrupamento compatíveis com o conteúdo. Imagens informativas precisam de alternativa útil; imagens decorativas não devem repetir o título desnecessariamente.

<!-- id: cards.37 -->
Verifique nomes dos links e botões e a ordem de exploração no celular. Quando uma ação alterna um estado, esse estado precisa estar disponível além da aparência.

<!-- id: references -->
## Referências

<!-- id: cards.52 -->

<!-- id: cards.references-standard.1 -->
Referências adicionais sobre componentes do tipo Cards.

<!-- id: cards.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: cards.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: cards.53 -->
Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

<!-- id: cards.56 -->
[USWDS — Card](https://designsystem.digital.gov/components/card/)

<!-- id: cards.59 -->
[W3C WAI — Page structure](https://www.w3.org/WAI/tutorials/page-structure/)
