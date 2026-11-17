# Títulos (Cabeçalhos)

- ID: `titulos`
- Categoria: estrutura
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-titulos.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Estabelecem a hierarquia do conteúdo e ajudam a localizar e compreender as seções de uma página.

<!-- id: interaction-design -->
## Design de interação

<!-- id: titulos.designer-guide.frame -->
<!-- id: titulos.designer-guide.1 -->
### Guia rápido para designers

<!-- id: titulos.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: titulos.designer-guide.3 -->
#### Quando usar

<!-- id: titulos.designer-guide.4 -->
Use para organizar as seções e mostrar a hierarquia real do conteúdo.

<!-- id: titulos.designer-guide.5 -->
#### O que desenhar

<!-- id: titulos.designer-guide.6 -->
Mostre uma sequência clara de níveis, sem escolher o nível apenas pelo tamanho visual.

<!-- id: titulos.designer-guide.7 -->
#### Como se comporta

<!-- id: titulos.designer-guide.8 -->
Títulos estáticos não são controles. Links e botões associados continuam com seus próprios comportamentos.

<!-- id: titulos.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: titulos.designer-guide.10 -->
Anote o nível de cada título e a sequência lógica das seções para leitura e navegação.

<!-- id: titulos.designer-guide.11 -->
#### Como revisar

<!-- id: titulos.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: titulos.designer-guide.13 -->
### Orientações completas

<!-- id: titulos.interaction-design.1 -->

<!-- id: titulos.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes do tipo Títulos (Cabeçalhos).

<!-- id: titulos.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: titulos.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: titulos.interaction-design.9 --> Antes de navegar pelo conteúdo é possível perceber a hierarquia visual da página?
2. <!-- id: titulos.interaction-design.10 --> O título principal descreve claramente a página ou seção?
3. <!-- id: titulos.interaction-design.11 --> Subtítulos agrupam conteúdos relacionados de forma previsível?

<!-- id: titulos.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: titulos.interaction-design.15 --> Quando títulos contêm links ou ações, há feedback visual nos componentes acionáveis?
2. <!-- id: titulos.interaction-design.16 --> A área clicável não transforma todo o título em ação sem clareza?
3. <!-- id: titulos.interaction-design.17 --> A interação não prejudica a leitura da hierarquia?

<!-- id: titulos.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: titulos.interaction-design.20 --> Títulos permanecem legíveis em telas pequenas?
2. <!-- id: titulos.interaction-design.21 --> Quebras de linha preservam sentido e hierarquia?
3. <!-- id: titulos.interaction-design.22 --> Títulos com ação possuem área tocável suficiente?

<!-- id: titulos.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: titulos.interaction-design.26 --> Componentes interativos dentro de títulos têm foco visível?
2. <!-- id: titulos.interaction-design.27 --> A ordem de foco não pula a hierarquia de conteúdo?
3. <!-- id: titulos.interaction-design.28 --> Títulos estáticos não recebem foco desnecessariamente?

<!-- id: titulos.interaction-design.29 -->
### Projetando para uso com leitor de telas

1. <!-- id: titulos.interaction-design.31 --> É possível navegar por cabeçalhos com atalhos de leitor de telas?
2. <!-- id: titulos.interaction-design.32 --> A ordem dos níveis de cabeçalho é coerente?
3. <!-- id: titulos.interaction-design.33 --> O texto do título comunica o tópico da seção sem depender apenas de estilo visual?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: titulos.interaction-methods.1 -->

<!-- id: titulos.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Títulos (Cabeçalhos).

<!-- id: titulos.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: titulos.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: titulos.interaction-methods.10 --> Títulos estáticos não exigem interação.
- <!-- id: titulos.interaction-methods.11 --> Links dentro de títulos devem se comportar como links.
- <!-- id: titulos.interaction-methods.12 --> Botões próximos a títulos devem ter nome acessível claro.

<!-- id: titulos.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: titulos.interaction-methods.16 --> Títulos estáticos não entram na ordem de foco.
- <!-- id: titulos.interaction-methods.17 --> Links ou botões associados ao título devem receber foco visível.
- <!-- id: titulos.interaction-methods.18 --> A ordem de navegação deve preservar a sequência lógica do conteúdo.

<!-- id: titulos.interaction-methods.19 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: titulos.methods-review.2 --> Usar a navegação por cabeçalhos do leitor de telas permite percorrer os títulos e identificar seus níveis.
- <!-- id: titulos.interaction-methods.24 --> Evite pular níveis sem motivo estrutural.
- <!-- id: titulos.interaction-methods.25 --> Não use título apenas por aparência visual.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: titulos.acceptance-criteria.1 -->

<!-- id: titulos.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: titulos.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém títulos e cabeçalhos

<!-- id: titulos.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: titulos.acceptance-criteria.8 --> QUANDO navego por uma página usando teclado
2. <!-- id: titulos.acceptance-criteria.9 --> VEJO que componentes interativos próximos aos títulos seguem a ordem lógica
3. <!-- id: titulos.acceptance-criteria.10 --> ENTÃO, quando aciono um link ou botão associado a um título
4. <!-- id: titulos.acceptance-criteria.11 --> VEJO que a ação correspondente acontece

<!-- id: titulos.acceptance-criteria.12 -->
#### Leitor de telas para desktop

1. <!-- id: titulos.acceptance-criteria.14 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - <!-- id: titulos.acceptance-criteria.16 --> OUÇO os títulos com seus níveis estruturais.
   - <!-- id: titulos.acceptance-criteria.17 --> Consigo navegar pelos cabeçalhos usando atalhos do leitor de telas.
   - <!-- id: titulos.acceptance-criteria.18 --> OUÇO uma ordem coerente de seções e subseções.
2. <!-- id: titulos.acceptance-criteria.19 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: titulos.acceptance-criteria.20 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: titulos.acceptance-criteria.21 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: titulos.acceptance-criteria.23 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - <!-- id: titulos.acceptance-criteria.25 --> OUÇO os títulos com seus níveis estruturais.
   - <!-- id: titulos.acceptance-criteria.26 --> Consigo navegar por cabeçalhos usando recursos do leitor de telas.
   - <!-- id: titulos.acceptance-criteria.27 --> OUÇO uma ordem coerente de seções e subseções.
2. <!-- id: titulos.acceptance-criteria.28 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: titulos.acceptance-criteria.29 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: titulos.considerations.1 -->

<!-- id: titulos.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Títulos (Cabeçalhos).

- <!-- id: titulos.considerations.5 --> Não escolha o nível do título pelo tamanho visual, mas pela hierarquia do conteúdo.
- <!-- id: titulos.considerations.6 --> Evite usar múltiplos `h1` sem uma estrutura de página bem definida.
- <!-- id: titulos.considerations.8 --> Não substitua cabeçalhos por textos em negrito quando eles estruturam conteúdo.

<!-- id: titulos.methods-review.3 -->
### Notas de implementação e decisões de comportamento

- <!-- id: titulos.interaction-methods.21 --> Use níveis `h1` a `h6` conforme hierarquia real.

<!-- id: references -->
## Referências

<!-- id: titulos.references.1 -->

<!-- id: titulos.references.2 -->
Referências adicionais sobre componentes do tipo Títulos (Cabeçalhos).

<!-- id: titulos.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: titulos.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: titulos.references.10 -->
### Padrões de Design

- <!-- id: titulos.references.12 --> [Documentação de padrões HTML: Headings and outlines](https://html.spec.whatwg.org/multipage/sections.html#headings-and-outlines)
- <!-- id: titulos.references.17 --> [W3C WAI: Headings](https://www.w3.org/WAI/tutorials/page-structure/headings/)
- <!-- id: titulos.references.22 --> [MDN Web Docs: Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements)

<!-- id: titulos.references.27 -->
### Design System

- <!-- id: titulos.references.29 --> [US.gov - Typesetting](https://designsystem.digital.gov/design-tokens/typesetting/overview/)
- <!-- id: titulos.references.34 --> [IBM Carbon - Typography](https://carbondesignsystem.com/elements/typography/overview/)
- <!-- id: titulos.references.39 --> [Adobe Spectrum - Typography](https://spectrum.adobe.com/page/typography/)
- <!-- id: titulos.references.44 --> [Bootstrap - Typography](https://getbootstrap.com/docs/5.2/content/typography/)
