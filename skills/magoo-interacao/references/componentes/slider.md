# Slider

- ID: `slider`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-slider.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite ajustar um valor dentro de um intervalo por meio de um controle deslizante.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para ajustar um valor dentro de um intervalo.

#### O que desenhar

Mostre trilha, marcador, limites, valor atual e foco. Com dois marcadores, identifique cada um.

#### Como se comporta

`Arrastar` altera o valor; as `setas` ajustam em passos menores e `Home` e `End` alcançam os limites.

#### O que documentar no Figma

Defina mínimo, máximo, tamanho dos passos e se clicar na trilha altera o valor. Passos maiores pelo teclado são opcionais.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Slider.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir é possível perceber o intervalo disponível e o valor atual?
2. A unidade do valor, quando existir, está visível e compreensível?
3. Valores mínimo, máximo e passos importantes são perceptíveis?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse ou `arrastar` o controle?
2. Ao `arrastar` o marcador, o valor é atualizado de forma perceptível?
3. É possível selecionar valores com precisão suficiente para a tarefa?

### Projetando para uso com gestos

1. O marcador possui área de toque confortável?
2. Ao `arrastar`, o valor atual fica visível e compreensível?
3. A interação funciona sem exigir precisão excessiva?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há foco visível no marcador ou controle?
2. `Setas direcionais` alteram o valor em incrementos esperados?
3. `Home` e `End` levam para mínimo e máximo quando aplicável?
4. `Page Up` e `Page Down` podem alterar em incrementos maiores quando aplicável?

### Projetando para uso com leitor de telas

1. O rótulo do slider é anunciado?
2. O valor atual é anunciado?
3. Valores mínimo e máximo estão disponíveis semanticamente?
4. A unidade do valor é anunciada quando necessária?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Slider.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- `Arrastar` o marcador altera o valor.
- Clicar na trilha pode mover o marcador quando esse comportamento for previsto.
- O valor visível deve acompanhar a mudança.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `Setas direcionais` alteram o valor em passos menores.
- `Home` e `End` movem para mínimo e máximo.
- `Page Up` e `Page Down` podem alterar em passos maiores.

### Interação com teclado (ou gestos) + leitor de telas

- O componente deve expor nome, papel e valor.
- O valor deve ser atualizado de forma perceptível durante a interação.
- Quando houver dois marcadores, cada um deve ter nome e limites claros.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém slider

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um slider
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso `setas direcionais`
4. VEJO que o valor é alterado em incrementos esperados
5. ENTÃO, quando uso `Home` ou `End`
6. VEJO que o valor vai para mínimo ou máximo

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - OUÇO o rótulo do slider.
   - OUÇO o valor atual.
   - OUÇO a função do controle como slider ou ajuste de valor.
2. ENTÃO, quando aciono ou altero o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - OUÇO o rótulo do slider.
   - OUÇO o valor atual.
   - Consigo ajustar o valor com os gestos disponíveis no leitor de telas.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Slider.

- Slider não deve ser usado quando a pessoa precisa inserir um valor exato sem alternativa.
- Ofereça campo numérico complementar quando precisão for importante.
- Sliders customizados exigem testes cuidadosos em leitores de tela móveis.

## Referências

Referências adicionais sobre componentes do tipo Slider.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)
- [W3C APG: Multi-Thumb Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/)
- [Documentação de padrões HTML: Range state](https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range))
- [Google - Material Design - Sliders](https://m3.material.io/components/sliders/overview)

### Design System

- [US.gov - Range slider](https://designsystem.digital.gov/components/range-slider/)
- [IBM Carbon - Slider](https://carbondesignsystem.com/components/slider/usage/)
- [Adobe Spectrum - Slider](https://spectrum.adobe.com/page/slider/)
- [Bootstrap - Range](https://getbootstrap.com/docs/5.2/forms/range/)
