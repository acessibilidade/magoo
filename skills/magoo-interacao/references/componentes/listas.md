# Listas

- ID: `listas`
- Categoria: estrutura
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-listas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organizam conjuntos de informações e comunicam relações entre seus itens.

<!-- id: interaction-design -->
## Design de interação

<!-- id: listas.designer-guide.frame -->
<!-- id: listas.designer-guide.1 -->
### Guia rápido para designers

<!-- id: listas.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: listas.designer-guide.3 -->
#### Quando usar

<!-- id: listas.designer-guide.4 -->
Use para reunir itens relacionados; use uma sequência numerada quando a ordem importar.

<!-- id: listas.designer-guide.5 -->
#### O que desenhar

<!-- id: listas.designer-guide.6 -->
Mostre o agrupamento, a ordem e eventuais links ou botões com objetivos claros.

<!-- id: listas.designer-guide.7 -->
#### Como se comporta

<!-- id: listas.designer-guide.8 -->
Uma lista estática não exige ação. Apenas seus links e botões participam da navegação pelo teclado.

<!-- id: listas.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: listas.designer-guide.10 -->
Registre se a ordem tem significado e mantenha a ordem de leitura e navegação coerente com os itens.

<!-- id: listas.designer-guide.11 -->
#### Como revisar

<!-- id: listas.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: listas.designer-guide.13 -->
### Orientações completas

<!-- id: listas.interaction-design.1 -->

<!-- id: listas.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes do tipo Listas.

<!-- id: listas.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: listas.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: listas.interaction-design.9 --> Antes de ler o conteúdo é possível perceber visualmente que os itens fazem parte de um conjunto?
2. <!-- id: listas.interaction-design.10 --> A ordem da lista é relevante ou apenas agrupamento visual?
3. <!-- id: listas.interaction-design.11 --> Cada item mantém relação clara com o grupo?

<!-- id: listas.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: listas.interaction-design.15 --> Links ou botões dentro de itens possuem feedback visual ao passar o mouse?
2. <!-- id: listas.interaction-design.16 --> Itens clicáveis deixam claro qual parte é acionável?
3. <!-- id: listas.interaction-design.17 --> A interação não quebra a relação visual entre item e conteúdo?

<!-- id: listas.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: listas.interaction-design.20 --> Itens com ações possuem área tocável confortável?
2. <!-- id: listas.interaction-design.21 --> A ordem visual dos itens é mantida em telas pequenas?
3. <!-- id: listas.interaction-design.22 --> A lista continua compreensível quando quebrada em múltiplas linhas?

<!-- id: listas.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: listas.interaction-design.26 --> A ordem de foco segue a ordem visual e semântica da lista?
2. <!-- id: listas.interaction-design.27 --> Componentes interativos dentro dos itens têm foco visível?
3. <!-- id: listas.interaction-design.28 --> Itens estáticos não entram na ordem de foco desnecessariamente?

<!-- id: listas.interaction-design.29 -->
### Projetando para uso com leitor de telas

1. <!-- id: listas.interaction-design.31 --> O leitor de telas anuncia que se trata de uma lista?
2. <!-- id: listas.interaction-design.32 --> A quantidade de itens é perceptível quando suportada?
3. <!-- id: listas.interaction-design.33 --> A ordem e hierarquia de listas aninhadas são compreensíveis?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: listas.interaction-methods.1 -->

<!-- id: listas.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Listas.

<!-- id: listas.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: listas.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: listas.interaction-methods.10 --> Listas estáticas não exigem interação.
- <!-- id: listas.interaction-methods.11 --> Links e botões dentro da lista devem se comportar conforme seus próprios padrões.
- <!-- id: listas.interaction-methods.12 --> Áreas clicáveis devem ter objetivo claro.

<!-- id: listas.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: listas.interaction-methods.16 --> A navegação por teclado deve alcançar apenas componentes interativos.
- <!-- id: listas.interaction-methods.17 --> A ordem de foco deve seguir a ordem dos itens.
- <!-- id: listas.methods-review.2 --> Quando a lista contém links, `Tab` percorre os destinos e `Enter` abre o link focado.

<!-- id: listas.interaction-methods.19 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: listas.methods-review.4 --> Os comandos de leitura do leitor de telas permitem percorrer os itens e perceber seu agrupamento.
- <!-- id: listas.methods-review.6 --> Em uma sequência numerada, a leitura dos itens permite identificar sua ordem.
- <!-- id: listas.interaction-methods.25 --> Evite simular listas apenas com quebras de linha ou elementos genéricos.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: listas.acceptance-criteria.1 -->

<!-- id: listas.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: listas.acceptance-criteria.7 -->
### Cenário: Considerando que estou em uma página que contém listas

<!-- id: listas.acceptance-criteria.8 -->
#### Navegação por teclado

1. <!-- id: listas.acceptance-criteria.10 --> QUANDO uso teclado para navegar por uma lista com itens acionáveis
2. <!-- id: listas.acceptance-criteria.11 --> VEJO que o foco segue a ordem esperada dos itens
3. <!-- id: listas.acceptance-criteria.12 --> ENTÃO, quando aciono um link ou botão dentro da lista
4. <!-- id: listas.acceptance-criteria.13 --> VEJO que a ação correspondente acontece

<!-- id: listas.acceptance-criteria.14 -->
#### Leitor de telas para desktop

1. <!-- id: listas.acceptance-criteria.16 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - <!-- id: listas.acceptance-criteria.18 --> OUÇO que o conteúdo é uma lista quando a semântica é apropriada.
   - <!-- id: listas.acceptance-criteria.19 --> OUÇO a quantidade de itens quando suportada.
   - <!-- id: listas.acceptance-criteria.20 --> OUÇO cada item na ordem correta.
2. <!-- id: listas.acceptance-criteria.21 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: listas.acceptance-criteria.22 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: listas.acceptance-criteria.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: listas.acceptance-criteria.25 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - <!-- id: listas.acceptance-criteria.27 --> OUÇO que o conteúdo é uma lista quando a semântica é apropriada.
   - <!-- id: listas.acceptance-criteria.28 --> OUÇO cada item na ordem correta.
   - <!-- id: listas.acceptance-criteria.29 --> Consigo compreender listas aninhadas quando existirem.
2. <!-- id: listas.acceptance-criteria.30 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: listas.acceptance-criteria.31 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: listas.considerations.1 -->

<!-- id: listas.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Listas.

- <!-- id: listas.considerations.5 --> Não remova a semântica de listas apenas para facilitar layout visual.
- <!-- id: listas.considerations.6 --> Evite listas muito longas sem agrupamento, busca ou navegação auxiliar quando necessário.
- <!-- id: listas.considerations.7 --> Listas aninhadas precisam ter hierarquia clara.

<!-- id: listas.methods-review.7 -->
### Notas de implementação e decisões de comportamento

- <!-- id: listas.interaction-methods.18 --> Listas usadas como navegação devem preservar semântica de lista e links.

- <!-- id: listas.interaction-methods.21 --> Use `ul` quando a ordem não altera o significado.

- <!-- id: listas.interaction-methods.23 --> Use `ol` quando a sequência importa.

<!-- id: references -->
## Referências

<!-- id: listas.references.1 -->

<!-- id: listas.references.2 -->
Referências adicionais sobre componentes do tipo Listas.

<!-- id: listas.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: listas.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: listas.references.10 -->
### Padrões de Design

- <!-- id: listas.references.12 --> [Documentação de padrões HTML: The ul element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- <!-- id: listas.references.17 --> [Documentação de padrões HTML: The ol element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)
- <!-- id: listas.references.22 --> [MDN Web Docs: ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul)

<!-- id: listas.references.27 -->
### Design System

- <!-- id: listas.references.29 --> [US.gov - Collection](https://designsystem.digital.gov/components/collection/)
- <!-- id: listas.references.34 --> [IBM Carbon - Structured list](https://carbondesignsystem.com/components/structured-list/usage/)
- <!-- id: listas.references.39 --> [Adobe Spectrum - ListBox](https://spectrum.adobe.com/page/listbox/)
