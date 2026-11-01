# Accordion

- ID: `accordion`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-accordion.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Agrupa seções de conteúdo que podem ser expandidas e recolhidas conforme a necessidade.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para revelar seções de conteúdo relacionado, sem esconder informações essenciais sem indicação.

#### O que desenhar

Mostre títulos claros, seções abertas e fechadas e estados de interação dos cabeçalhos.

#### Como se comporta

Clique, toque, `Enter` ou `espaço` abre ou fecha a seção. O conteúdo fechado fica fora da navegação pelo teclado.

#### O que documentar no Figma

Defina se várias seções podem ficar abertas. Anote a ordem de navegação e como informar o estado aberto ou fechado.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Accordion.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir é possível perceber visualmente quais cabeçalhos podem expandir ou recolher conteúdo?
2. É possível identificar visualmente quais seções estão abertas e quais estão fechadas?
3. O título de cada seção descreve claramente o conteúdo que será revelado?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no cabeçalho acionável?
2. Ao clicar no cabeçalho, o painel correspondente alterna entre aberto e fechado?
3. Quando há regra de abertura única, a abertura de uma seção fecha as demais de forma previsível?

### Projetando para uso com gestos

1. O alvo tocável do cabeçalho possui área suficiente para acionamento confortável?
2. Ao `tocar` no cabeçalho, o painel correspondente alterna entre aberto e fechado?
3. A mudança de estado fica perceptível visualmente após o toque?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há foco visível no cabeçalho acionável?
2. É possível acionar cada cabeçalho com `ENTER` e `SPACE`?
3. É possível navegar entre os cabeçalhos pela ordem natural com `TAB` e `SHIFT`+`TAB`?

### Projetando para uso com leitor de telas

1. O cabeçalho acionável é anunciado como botão?
2. O estado aberto ou fechado é anunciado corretamente?
3. A relação entre botão e painel é compreensível por nome, ordem ou associação programática?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Accordion.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar no cabeçalho abre ou fecha a seção relacionada.
- O estado visual do cabeçalho deve mudar junto com o conteúdo exibido.
- O conteúdo recolhido não deve permanecer navegável por teclado.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `TAB` move o foco entre cabeçalhos e demais componentes acionáveis.
- `ENTER` ou `SPACE` alterna o estado da seção em foco.
- `Setas direcionais` podem ser usadas como recurso adicional, quando documentadas e consistentes.

### Interação com teclado (ou gestos) + leitor de telas

- Ao navegar até o cabeçalho com leitor de telas, a pessoa identifica se a seção está aberta ou fechada.
- Ao acionar o cabeçalho, a seção correspondente abre ou fecha e seu estado é atualizado.
- O conteúdo aberto deve ficar disponível na ordem de leitura e navegação.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém accordion

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um cabeçalho de accordion
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso `Enter` ou `Barra de espaço`
4. VEJO que a seção relacionada alterna entre aberta e fechada

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - OUÇO o nome do cabeçalho.
   - OUÇO que o componente é um botão.
   - OUÇO se a seção está expandida ou recolhida.
2. ENTÃO, quando aciono ou altero o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - OUÇO o nome do cabeçalho.
   - OUÇO que o componente é um botão.
   - OUÇO se a seção está expandida ou recolhida.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Accordion.

- Accordion deve ser usado para revelar conteúdo relacionado, não para esconder informações essenciais sem indicação clara.
- Conteúdo fechado não deve receber foco por teclado.
- Quando apenas uma seção puder permanecer aberta, essa regra precisa ser previsível e testada.

### Notas de implementação e decisões de comportamento

- O botão deve expor o estado com `aria-expanded`.

- Quando usado, `aria-controls` deve apontar para o painel controlado.

## Referências

Referências adicionais sobre componentes do tipo Accordion.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [MDN Web Docs: The Details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [Google - Material Design - Lists](https://m3.material.io/components/lists/overview)

### Design System

- [W3C Design System: Accordion](https://design-system.w3.org/components/accordion.html)
- [Gov.UK - Accordion](https://design-system.service.gov.uk/components/accordion/)
- [US.gov - Accordion](https://designsystem.digital.gov/components/accordion/)
- [IBM Carbon - Accordion](https://carbondesignsystem.com/components/accordion/usage/)
- [Adobe Spectrum - Accordion](https://spectrum.adobe.com/page/accordion/)
- [Bootstrap - Accordion](https://getbootstrap.com/docs/5.2/components/accordion/)
