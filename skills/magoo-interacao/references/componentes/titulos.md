# Títulos (Cabeçalhos)

- ID: `titulos`
- Categoria: estrutura
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-titulos.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Estabelecem a hierarquia do conteúdo e ajudam a localizar e compreender as seções de uma página.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para organizar as seções e mostrar a hierarquia real do conteúdo.

#### O que desenhar

Mostre uma sequência clara de níveis, sem escolher o nível apenas pelo tamanho visual.

#### Como se comporta

Títulos estáticos não são controles. Links e botões associados continuam com seus próprios comportamentos.

#### O que documentar no Figma

Anote o nível de cada título e a sequência lógica das seções para leitura e navegação.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes do tipo Títulos (Cabeçalhos).

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de navegar pelo conteúdo é possível perceber a hierarquia visual da página?
2. O título principal descreve claramente a página ou seção?
3. Subtítulos agrupam conteúdos relacionados de forma previsível?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Quando títulos contêm links ou ações, há feedback visual nos componentes acionáveis?
2. A área clicável não transforma todo o título em ação sem clareza?
3. A interação não prejudica a leitura da hierarquia?

### Projetando para uso com gestos

1. Títulos permanecem legíveis em telas pequenas?
2. Quebras de linha preservam sentido e hierarquia?
3. Títulos com ação possuem área tocável suficiente?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Componentes interativos dentro de títulos têm foco visível?
2. A ordem de foco não pula a hierarquia de conteúdo?
3. Títulos estáticos não recebem foco desnecessariamente?

### Projetando para uso com leitor de telas

1. É possível navegar por cabeçalhos com atalhos de leitor de telas?
2. A ordem dos níveis de cabeçalho é coerente?
3. O texto do título comunica o tópico da seção sem depender apenas de estilo visual?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Títulos (Cabeçalhos).

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Títulos estáticos não exigem interação.
- Links dentro de títulos devem se comportar como links.
- Botões próximos a títulos devem ter nome acessível claro.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Títulos estáticos não entram na ordem de foco.
- Links ou botões associados ao título devem receber foco visível.
- A ordem de navegação deve preservar a sequência lógica do conteúdo.

### Interação com teclado (ou gestos) + leitor de telas

- Usar a navegação por cabeçalhos do leitor de telas permite percorrer os títulos e identificar seus níveis.
- Evite pular níveis sem motivo estrutural.
- Não use título apenas por aparência visual.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém títulos e cabeçalhos

#### Navegação por teclado

1. QUANDO navego por uma página usando teclado
2. VEJO que componentes interativos próximos aos títulos seguem a ordem lógica
3. ENTÃO, quando aciono um link ou botão associado a um título
4. VEJO que a ação correspondente acontece

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - OUÇO os títulos com seus níveis estruturais.
   - Consigo navegar pelos cabeçalhos usando atalhos do leitor de telas.
   - OUÇO uma ordem coerente de seções e subseções.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - OUÇO os títulos com seus níveis estruturais.
   - Consigo navegar por cabeçalhos usando recursos do leitor de telas.
   - OUÇO uma ordem coerente de seções e subseções.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Títulos (Cabeçalhos).

- Não escolha o nível do título pelo tamanho visual, mas pela hierarquia do conteúdo.
- Evite usar múltiplos `h1` sem uma estrutura de página bem definida.
- Não substitua cabeçalhos por textos em negrito quando eles estruturam conteúdo.

### Notas de implementação e decisões de comportamento

- Use níveis `h1` a `h6` conforme hierarquia real.

## Referências

Referências adicionais sobre componentes do tipo Títulos (Cabeçalhos).

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Documentação de padrões HTML: Headings and outlines](https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines)
- [W3C WAI: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- [MDN Web Docs: Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)

### Design System

- [US.gov - Typesetting](https://designsystem.digital.gov/design-tokens/typesetting/overview/)
- [IBM Carbon - Typography](https://carbondesignsystem.com/elements/typography/overview/)
- [Adobe Spectrum - Typography](https://spectrum.adobe.com/page/typography/)
- [Bootstrap - Typography](https://getbootstrap.com/docs/5.2/content/typography/)
