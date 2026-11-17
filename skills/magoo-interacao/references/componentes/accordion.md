# Accordion

- ID: `accordion`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-accordion.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Agrupa seções de conteúdo que podem ser expandidas e recolhidas conforme a necessidade.

<!-- id: interaction-design -->
## Design de interação

<!-- id: accordion.designer-guide.frame -->
<!-- id: accordion.designer-guide.1 -->
### Guia rápido para designers

<!-- id: accordion.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: accordion.designer-guide.3 -->
#### Quando usar

<!-- id: accordion.designer-guide.4 -->
Use para revelar seções de conteúdo relacionado, sem esconder informações essenciais sem indicação.

<!-- id: accordion.designer-guide.5 -->
#### O que desenhar

<!-- id: accordion.designer-guide.6 -->
Mostre títulos claros, seções abertas e fechadas e estados de interação dos cabeçalhos.

<!-- id: accordion.designer-guide.7 -->
#### Como se comporta

<!-- id: accordion.designer-guide.8 -->
Clique, toque, `Enter` ou `espaço` abre ou fecha a seção. O conteúdo fechado fica fora da navegação pelo teclado.

<!-- id: accordion.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: accordion.designer-guide.10 -->
Defina se várias seções podem ficar abertas. Anote a ordem de navegação e como informar o estado aberto ou fechado.

<!-- id: accordion.designer-guide.11 -->
#### Como revisar

<!-- id: accordion.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: accordion.designer-guide.13 -->
### Orientações completas

<!-- id: accordion.interaction-design.1 -->

<!-- id: accordion.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Accordion.

<!-- id: accordion.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: accordion.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: accordion.interaction-design.9 --> Antes de interagir é possível perceber visualmente quais cabeçalhos podem expandir ou recolher conteúdo?
2. <!-- id: accordion.interaction-design.10 --> É possível identificar visualmente quais seções estão abertas e quais estão fechadas?
3. <!-- id: accordion.interaction-design.11 --> O título de cada seção descreve claramente o conteúdo que será revelado?

<!-- id: accordion.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: accordion.interaction-design.15 --> Há feedback visual ao passar o mouse no cabeçalho acionável?
2. <!-- id: accordion.interaction-design.16 --> Ao clicar no cabeçalho, o painel correspondente alterna entre aberto e fechado?
3. <!-- id: accordion.interaction-design.17 --> Quando há regra de abertura única, a abertura de uma seção fecha as demais de forma previsível?

<!-- id: accordion.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: accordion.interaction-design.20 --> O alvo tocável do cabeçalho possui área suficiente para acionamento confortável?
2. <!-- id: accordion.interaction-design.21 --> Ao `tocar` no cabeçalho, o painel correspondente alterna entre aberto e fechado?
3. <!-- id: accordion.interaction-design.22 --> A mudança de estado fica perceptível visualmente após o toque?

<!-- id: accordion.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: accordion.interaction-design.26 --> Há foco visível no cabeçalho acionável?
2. <!-- id: accordion.interaction-design.27 --> É possível acionar cada cabeçalho com `ENTER` e `SPACE`?
3. <!-- id: accordion.interaction-design.30 --> É possível navegar entre os cabeçalhos pela ordem natural com `TAB` e `SHIFT`+`TAB`?

<!-- id: accordion.interaction-design.34 -->
### Projetando para uso com leitor de telas

1. <!-- id: accordion.interaction-design.36 --> O cabeçalho acionável é anunciado como botão?
2. <!-- id: accordion.interaction-design.37 --> O estado aberto ou fechado é anunciado corretamente?
3. <!-- id: accordion.interaction-design.38 --> A relação entre botão e painel é compreensível por nome, ordem ou associação programática?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: accordion.interaction-methods.1 -->

<!-- id: accordion.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Accordion.

<!-- id: accordion.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: accordion.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: accordion.interaction-methods.10 --> Clicar no cabeçalho abre ou fecha a seção relacionada.
- <!-- id: accordion.interaction-methods.11 --> O estado visual do cabeçalho deve mudar junto com o conteúdo exibido.
- <!-- id: accordion.interaction-methods.12 --> O conteúdo recolhido não deve permanecer navegável por teclado.

<!-- id: accordion.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: accordion.interaction-methods.16 --> `TAB` move o foco entre cabeçalhos e demais componentes acionáveis.
- <!-- id: accordion.interaction-methods.18 --> `ENTER` ou `SPACE` alterna o estado da seção em foco.
- <!-- id: accordion.interaction-methods.21 --> `Setas direcionais` podem ser usadas como recurso adicional, quando documentadas e consistentes.

<!-- id: accordion.interaction-methods.22 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: accordion.methods-review.2 --> Ao navegar até o cabeçalho com leitor de telas, a pessoa identifica se a seção está aberta ou fechada.
- <!-- id: accordion.methods-review.4 --> Ao acionar o cabeçalho, a seção correspondente abre ou fecha e seu estado é atualizado.
- <!-- id: accordion.interaction-methods.28 --> O conteúdo aberto deve ficar disponível na ordem de leitura e navegação.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: accordion.acceptance-criteria.1 -->

<!-- id: accordion.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: accordion.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém accordion

<!-- id: accordion.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: accordion.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para um cabeçalho de accordion
2. <!-- id: accordion.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: accordion.acceptance-criteria.11 --> ENTÃO, quando uso `Enter` ou `Barra de espaço`
4. <!-- id: accordion.acceptance-criteria.14 --> VEJO que a seção relacionada alterna entre aberta e fechada

<!-- id: accordion.acceptance-criteria.15 -->
#### Leitor de telas para desktop

1. <!-- id: accordion.acceptance-criteria.17 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - <!-- id: accordion.acceptance-criteria.19 --> OUÇO o nome do cabeçalho.
   - <!-- id: accordion.acceptance-criteria.20 --> OUÇO que o componente é um botão.
   - <!-- id: accordion.acceptance-criteria.21 --> OUÇO se a seção está expandida ou recolhida.
2. <!-- id: accordion.acceptance-criteria.22 --> ENTÃO, quando aciono ou altero o componente
3. <!-- id: accordion.acceptance-criteria.23 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: accordion.acceptance-criteria.24 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: accordion.acceptance-criteria.26 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - <!-- id: accordion.acceptance-criteria.28 --> OUÇO o nome do cabeçalho.
   - <!-- id: accordion.acceptance-criteria.29 --> OUÇO que o componente é um botão.
   - <!-- id: accordion.acceptance-criteria.30 --> OUÇO se a seção está expandida ou recolhida.
2. <!-- id: accordion.acceptance-criteria.31 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. <!-- id: accordion.acceptance-criteria.32 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: accordion.considerations.1 -->

<!-- id: accordion.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Accordion.

- <!-- id: accordion.considerations.5 --> Accordion deve ser usado para revelar conteúdo relacionado, não para esconder informações essenciais sem indicação clara.
- <!-- id: accordion.considerations.6 --> Conteúdo fechado não deve receber foco por teclado.
- <!-- id: accordion.considerations.7 --> Quando apenas uma seção puder permanecer aberta, essa regra precisa ser previsível e testada.

<!-- id: accordion.methods-review.5 -->
### Notas de implementação e decisões de comportamento

- <!-- id: accordion.interaction-methods.24 --> O botão deve expor o estado com `aria-expanded`.

- <!-- id: accordion.interaction-methods.26 --> Quando usado, `aria-controls` deve apontar para o painel controlado.

<!-- id: references -->
## Referências

<!-- id: accordion.references.1 -->

<!-- id: accordion.references.2 -->
Referências adicionais sobre componentes do tipo Accordion.

<!-- id: accordion.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: accordion.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: accordion.references.10 -->
### Padrões de Design

- <!-- id: accordion.references.12 --> [W3C APG: Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- <!-- id: accordion.references.17 --> [MDN Web Docs: The Details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- <!-- id: accordion.references.22 --> [Google - Material Design - Lists](https://m3.material.io/components/lists/overview)

<!-- id: accordion.references.27 -->
### Design System

- <!-- id: accordion.references.29 --> [W3C Design System: Accordion](https://design-system.w3.org/components/accordion.html)
- <!-- id: accordion.references.34 --> [Gov.UK - Accordion](https://design-system.service.gov.uk/components/accordion/)
- <!-- id: accordion.references.39 --> [US.gov - Accordion](https://designsystem.digital.gov/components/accordion/)
- <!-- id: accordion.references.44 --> [IBM Carbon - Accordion](https://carbondesignsystem.com/components/accordion/usage/)
- <!-- id: accordion.references.49 --> [Adobe Spectrum - Accordion](https://spectrum.adobe.com/page/accordion/)
- <!-- id: accordion.references.54 --> [Bootstrap - Accordion](https://getbootstrap.com/docs/5.2/components/accordion/)
