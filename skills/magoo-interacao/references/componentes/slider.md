# Slider

- ID: `slider`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-slider.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite ajustar um valor dentro de um intervalo por meio de um controle deslizante.

<!-- id: interaction-design -->
## Design de interação

<!-- id: slider.designer-guide.frame -->
<!-- id: slider.designer-guide.1 -->
### Guia rápido para designers

<!-- id: slider.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: slider.designer-guide.3 -->
#### Quando usar

<!-- id: slider.designer-guide.4 -->
Use para ajustar um valor dentro de um intervalo.

<!-- id: slider.designer-guide.5 -->
#### O que desenhar

<!-- id: slider.designer-guide.6 -->
Mostre trilha, marcador, limites, valor atual e foco. Com dois marcadores, identifique cada um.

<!-- id: slider.designer-guide.7 -->
#### Como se comporta

<!-- id: slider.designer-guide.8 -->
`Arrastar` altera o valor; as `setas` ajustam em passos menores e `Home` e `End` alcançam os limites.

<!-- id: slider.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: slider.designer-guide.10 -->
Defina mínimo, máximo, tamanho dos passos e se clicar na trilha altera o valor. Passos maiores pelo teclado são opcionais.

<!-- id: slider.designer-guide.11 -->
#### Como revisar

<!-- id: slider.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: slider.designer-guide.13 -->
### Orientações completas

<!-- id: slider.interaction-design.1 -->

<!-- id: slider.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Slider.

<!-- id: slider.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: slider.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: slider.interaction-design.9 --> Antes de interagir é possível perceber o intervalo disponível e o valor atual?
2. <!-- id: slider.interaction-design.10 --> A unidade do valor, quando existir, está visível e compreensível?
3. <!-- id: slider.interaction-design.11 --> Valores mínimo, máximo e passos importantes são perceptíveis?

<!-- id: slider.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: slider.interaction-design.15 --> Há feedback visual ao passar o mouse ou `arrastar` o controle?
2. <!-- id: slider.interaction-design.16 --> Ao `arrastar` o marcador, o valor é atualizado de forma perceptível?
3. <!-- id: slider.interaction-design.17 --> É possível selecionar valores com precisão suficiente para a tarefa?

<!-- id: slider.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: slider.interaction-design.20 --> O marcador possui área de toque confortável?
2. <!-- id: slider.interaction-design.21 --> Ao `arrastar`, o valor atual fica visível e compreensível?
3. <!-- id: slider.interaction-design.22 --> A interação funciona sem exigir precisão excessiva?

<!-- id: slider.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: slider.interaction-design.26 --> Há foco visível no marcador ou controle?
2. <!-- id: slider.interaction-design.27 --> `Setas direcionais` alteram o valor em incrementos esperados?
3. <!-- id: slider.interaction-design.28 --> `Home` e `End` levam para mínimo e máximo quando aplicável?
4. <!-- id: slider.interaction-design.31 --> `Page Up` e `Page Down` podem alterar em incrementos maiores quando aplicável?

<!-- id: slider.interaction-design.34 -->
### Projetando para uso com leitor de telas

1. <!-- id: slider.interaction-design.36 --> O rótulo do slider é anunciado?
2. <!-- id: slider.interaction-design.37 --> O valor atual é anunciado?
3. <!-- id: slider.interaction-design.38 --> Valores mínimo e máximo estão disponíveis semanticamente?
4. <!-- id: slider.interaction-design.39 --> A unidade do valor é anunciada quando necessária?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: slider.interaction-methods.1 -->

<!-- id: slider.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Slider.

<!-- id: slider.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: slider.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: slider.interaction-methods.10 --> `Arrastar` o marcador altera o valor.
- <!-- id: slider.interaction-methods.11 --> Clicar na trilha pode mover o marcador quando esse comportamento for previsto.
- <!-- id: slider.interaction-methods.12 --> O valor visível deve acompanhar a mudança.

<!-- id: slider.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: slider.interaction-methods.16 --> `Setas direcionais` alteram o valor em passos menores.
- <!-- id: slider.interaction-methods.17 --> `Home` e `End` movem para mínimo e máximo.
- <!-- id: slider.interaction-methods.20 --> `Page Up` e `Page Down` podem alterar em passos maiores.

<!-- id: slider.interaction-methods.23 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: slider.interaction-methods.25 --> O componente deve expor nome, papel e valor.
- <!-- id: slider.interaction-methods.26 --> O valor deve ser atualizado de forma perceptível durante a interação.
- <!-- id: slider.interaction-methods.27 --> Quando houver dois marcadores, cada um deve ter nome e limites claros.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: slider.acceptance-criteria.1 -->

<!-- id: slider.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: slider.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém slider

<!-- id: slider.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: slider.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para um slider
2. <!-- id: slider.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: slider.acceptance-criteria.11 --> ENTÃO, quando uso `setas direcionais`
4. <!-- id: slider.acceptance-criteria.12 --> VEJO que o valor é alterado em incrementos esperados
5. <!-- id: slider.acceptance-criteria.13 --> ENTÃO, quando uso `Home` ou `End`
6. <!-- id: slider.acceptance-criteria.16 --> VEJO que o valor vai para mínimo ou máximo

<!-- id: slider.acceptance-criteria.17 -->
#### Leitor de telas para desktop

1. <!-- id: slider.acceptance-criteria.19 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - <!-- id: slider.acceptance-criteria.21 --> OUÇO o rótulo do slider.
   - <!-- id: slider.acceptance-criteria.22 --> OUÇO o valor atual.
   - <!-- id: slider.acceptance-criteria.23 --> OUÇO a função do controle como slider ou ajuste de valor.
2. <!-- id: slider.acceptance-criteria.24 --> ENTÃO, quando aciono ou altero o componente
3. <!-- id: slider.acceptance-criteria.25 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: slider.acceptance-criteria.26 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: slider.acceptance-criteria.28 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - <!-- id: slider.acceptance-criteria.30 --> OUÇO o rótulo do slider.
   - <!-- id: slider.acceptance-criteria.31 --> OUÇO o valor atual.
   - <!-- id: slider.acceptance-criteria.32 --> Consigo ajustar o valor com os gestos disponíveis no leitor de telas.
2. <!-- id: slider.acceptance-criteria.33 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. <!-- id: slider.acceptance-criteria.34 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: slider.considerations.1 -->

<!-- id: slider.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Slider.

- <!-- id: slider.considerations.5 --> Slider não deve ser usado quando a pessoa precisa inserir um valor exato sem alternativa.
- <!-- id: slider.considerations.6 --> Ofereça campo numérico complementar quando precisão for importante.
- <!-- id: slider.considerations.7 --> Sliders customizados exigem testes cuidadosos em leitores de tela móveis.

<!-- id: references -->
## Referências

<!-- id: slider.references.1 -->

<!-- id: slider.references.2 -->
Referências adicionais sobre componentes do tipo Slider.

<!-- id: slider.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: slider.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: slider.references.10 -->
### Padrões de Design

- <!-- id: slider.references.12 --> [W3C APG: Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- <!-- id: slider.references.17 --> [W3C APG: Multi-Thumb Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/)
- <!-- id: slider.references.22 --> [Documentação de padrões HTML: Range state](https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range))
- <!-- id: slider.references.27 --> [Google - Material Design - Sliders](https://m3.material.io/components/sliders/overview)

<!-- id: slider.references.32 -->
### Design System

- <!-- id: slider.references.34 --> [US.gov - Range slider](https://designsystem.digital.gov/components/range-slider/)
- <!-- id: slider.references.39 --> [IBM Carbon - Slider](https://carbondesignsystem.com/components/slider/usage/)
- <!-- id: slider.references.44 --> [Adobe Spectrum - Slider](https://spectrum.adobe.com/page/slider/)
- <!-- id: slider.references.49 --> [Bootstrap - Range](https://getbootstrap.com/docs/5.2/forms/range/)
