# Listas

- ID: `listas`
- Categoria: estrutura
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-listas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organizam conjuntos de informações e comunicam relações entre seus itens.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para reunir itens relacionados; use uma sequência numerada quando a ordem importar.

#### O que desenhar

Mostre o agrupamento, a ordem e eventuais links ou botões com objetivos claros.

#### Como se comporta

Uma lista estática não exige ação. Apenas seus links e botões participam da navegação pelo teclado.

#### O que documentar no Figma

Registre se a ordem tem significado e mantenha a ordem de leitura e navegação coerente com os itens.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes do tipo Listas.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de ler o conteúdo é possível perceber visualmente que os itens fazem parte de um conjunto?
2. A ordem da lista é relevante ou apenas agrupamento visual?
3. Cada item mantém relação clara com o grupo?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Links ou botões dentro de itens possuem feedback visual ao passar o mouse?
2. Itens clicáveis deixam claro qual parte é acionável?
3. A interação não quebra a relação visual entre item e conteúdo?

### Projetando para uso com gestos

1. Itens com ações possuem área tocável confortável?
2. A ordem visual dos itens é mantida em telas pequenas?
3. A lista continua compreensível quando quebrada em múltiplas linhas?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. A ordem de foco segue a ordem visual e semântica da lista?
2. Componentes interativos dentro dos itens têm foco visível?
3. Itens estáticos não entram na ordem de foco desnecessariamente?

### Projetando para uso com leitor de telas

1. O leitor de telas anuncia que se trata de uma lista?
2. A quantidade de itens é perceptível quando suportada?
3. A ordem e hierarquia de listas aninhadas são compreensíveis?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Listas.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Listas estáticas não exigem interação.
- Links e botões dentro da lista devem se comportar conforme seus próprios padrões.
- Áreas clicáveis devem ter objetivo claro.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- A navegação por teclado deve alcançar apenas componentes interativos.
- A ordem de foco deve seguir a ordem dos itens.
- Quando a lista contém links, `Tab` percorre os destinos e `Enter` abre o link focado.

### Interação com teclado (ou gestos) + leitor de telas

- Os comandos de leitura do leitor de telas permitem percorrer os itens e perceber seu agrupamento.
- Em uma sequência numerada, a leitura dos itens permite identificar sua ordem.
- Evite simular listas apenas com quebras de linha ou elementos genéricos.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém listas

#### Navegação por teclado

1. QUANDO uso teclado para navegar por uma lista com itens acionáveis
2. VEJO que o foco segue a ordem esperada dos itens
3. ENTÃO, quando aciono um link ou botão dentro da lista
4. VEJO que a ação correspondente acontece

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - OUÇO que o conteúdo é uma lista quando a semântica é apropriada.
   - OUÇO a quantidade de itens quando suportada.
   - OUÇO cada item na ordem correta.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - OUÇO que o conteúdo é uma lista quando a semântica é apropriada.
   - OUÇO cada item na ordem correta.
   - Consigo compreender listas aninhadas quando existirem.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Listas.

- Não remova a semântica de listas apenas para facilitar layout visual.
- Evite listas muito longas sem agrupamento, busca ou navegação auxiliar quando necessário.
- Listas aninhadas precisam ter hierarquia clara.

### Notas de implementação e decisões de comportamento

- Listas usadas como navegação devem preservar semântica de lista e links.

- Use `ul` quando a ordem não altera o significado.

- Use `ol` quando a sequência importa.

## Referências

Referências adicionais sobre componentes do tipo Listas.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Documentação de padrões HTML: The ul element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element)
- [Documentação de padrões HTML: The ol element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element)
- [MDN Web Docs: ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul)

### Design System

- [US.gov - Collection](https://designsystem.digital.gov/components/collection/)
- [IBM Carbon - Structured list](https://carbondesignsystem.com/components/structured-list/usage/)
- [Adobe Spectrum - ListBox](https://spectrum.adobe.com/page/listbox/)
