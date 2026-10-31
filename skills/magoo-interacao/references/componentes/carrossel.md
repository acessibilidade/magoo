# Carrossel

- ID: `carrossel`
- Categoria: navegacao
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-carrossel.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Apresenta uma sequência de conteúdos em um espaço compartilhado, com controles para navegar entre eles.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para apresentar uma sequência de conteúdos no mesmo espaço, com controles claros.

#### O que desenhar

Mostre o slide atual, anterior, próximo e indicadores quando usados. Se houver rotação automática, mostre pausa.

#### Como se comporta

Os controles trocam o slide sem mover o foco inesperadamente. A rotação automática pausa quando o carrossel recebe foco.

#### O que documentar no Figma

Registre a rotação, a pausa, o nome dos controles e como informar o slide atual. Gestos e `setas` podem complementar os controles.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Carrossel.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir com o componente é possível perceber visualmente que se trata de um agrupamento de conteúdos relacionados?
2. Antes de interagir com o componente é possível identificar qual item ou slide está ativo?
3. Antes de interagir com o componente é possível perceber quantos itens existem ou qual é a posição atual dentro da sequência?
4. Quando existe rotação automática, é possível perceber se o carrossel está em reprodução ou pausado?
5. Os controles de avançar, voltar, selecionar item e pausar ficam disponíveis sem depender apenas de gestos ou animações?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse sobre botões, indicadores e controles de pausa?
2. Há feedback visual ao clicar em controles acionáveis?
3. Ao clicar em anterior ou próximo, o slide correspondente é exibido e o indicador ativo é atualizado?
4. Ao clicar em um indicador, o carrossel apresenta o slide associado àquele controle?
5. Quando houver rotação automática, passar o mouse sobre a área do carrossel pausa a troca de slides?

### Projetando para uso com gestos

1. Os controles possuem área suficiente para toque confortável?
2. Quando houver gesto de `deslizar`, ele funciona como complemento aos controles visíveis?
3. O gesto de `deslizar` atualiza o slide ativo e sua respectiva indicação visual?
4. É possível operar o carrossel sem depender exclusivamente de movimentos precisos ou complexos?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há feedback visual ao focar em cada controle acionável?
2. É possível navegar entre os controles acionáveis utilizando `TAB` e `SHIFT`+`TAB`?
3. É possível acionar botões e indicadores com `ENTER` e `SPACE`?
4. Ao trocar de slide, o foco permanece em uma posição previsível?
5. Quando o foco entra no carrossel, a rotação automática é pausada?

### Projetando para uso com leitor de telas

1. Ao navegar por landmarks ou regiões é possível identificar o carrossel por um nome acessível claro?
2. Ao focar em um controle acionável é possível ouvir seu nome, papel e estado?
3. Ao focar em indicadores, é possível identificar qual slide será exibido e qual está selecionado?
4. A posição do slide ativo, como "2 de 5", é comunicada quando isso ajuda a orientação?
5. Atualizações automáticas são pausadas ou comunicadas de forma controlada para não interromper a leitura?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Carrossel.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ao passar o mouse, cada controle acionável deve retornar feedback visual confirmando possibilidade de interação.
- Ao clicar no botão de próximo, o próximo slide deve ser apresentado.
- Ao clicar no botão de anterior, o slide anterior deve ser apresentado.
- Ao clicar em um indicador, o slide correspondente deve ser apresentado.
- Ao clicar no controle de pausa, a rotação automática deve ser interrompida.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Ao focar com teclado, cada controle acionável deve retornar feedback visual com foco visível.
- Deve ser possível navegar para o próximo item ou para o anterior utilizando as teclas `TAB` ou `SHIFT`+`TAB` respectivamente.
- Botões de controle devem ser acionados com as teclas `ENTER` e `SPACE`.
- `Setas direcionais` podem existir como interação complementar, desde que não sejam o único método de uso e não conflitem com padrões esperados.
- Ao receber foco, o carrossel com rotação automática deve pausar a troca de slides.

### Interação com teclado (ou gestos) + leitor de telas

- Ao chegar no carrossel é possível identificar seu nome acessível e sua finalidade.
- Ao focar em controles como anterior, próximo, pausar ou indicadores, seus nomes devem descrever a ação executada.
- O slide ativo e sua posição no conjunto devem ser perceptíveis quando necessário para orientação.
- A troca de slide não deve deslocar o foco inesperadamente.
- Em dispositivos móveis, controles devem ser alcançáveis por gestos do leitor de tela e acionáveis por duplo toque.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém carrossel

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para os controles do carrossel
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso as teclas `Enter` ou `Space` para acionar um controle
4. VEJO que o slide correspondente é apresentado
5. E VEJO que o indicador do slide atual é atualizado
6. E o foco permanece em uma posição previsível

#### Rotação automática

1. QUANDO o carrossel possui rotação automática
2. VEJO um controle para pausar, parar ou controlar a animação
3. ENTÃO, quando o foco entra no carrossel ou o mouse passa sobre sua área
4. VEJO que a rotação automática é pausada
5. E, quando aciono o controle de pausa, a troca automática de slides é interrompida

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego até o carrossel, acontece o seguinte:

   - OUÇO o nome acessível do carrossel ou da região onde ele está.
   - OUÇO o nome de cada controle, como slide anterior, próximo slide, pausar carrossel ou selecionar slide.
   - OUÇO o estado ou posição do slide atual quando isso for necessário para orientação.
2. ENTÃO, quando ativo um controle do carrossel
3. OUÇO ou percebo que o slide foi atualizado sem anúncios repetitivos ou interrupções excessivas.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo carrossel, acontece o seguinte:

   - OUÇO o nome acessível do carrossel ou da região onde ele está.
   - OUÇO controles e indicadores em ordem lógica.
   - OUÇO nomes que deixam clara a ação de cada controle.
2. ENTÃO, quando eu toco duas vezes para ativar um controle
3. OUÇO ou percebo que o slide correspondente foi apresentado sem perda de contexto.

## Pontos de atenção

- Se houver rotação automática, deve existir uma forma clara de pausar, parar ou controlar a animação.
- O carrossel deve pausar quando recebe foco de teclado ou quando o mouse passa sobre sua área.
- Conteúdos importantes não devem existir apenas em slides que desaparecem automaticamente.
- As animações devem respeitar preferências de redução de movimento.
- Indicadores visuais, como pontos, precisam ter nome acessível e estado ativo perceptível.
- Use carrosséis com critério, pois eles adicionam complexidade de navegação e podem ocultar conteúdo.

## Referências

Referências adicionais sobre componentes do tipo Carrossel.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG - Carousel Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- [MDN Web Docs - prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

### Design System

- [Bootstrap - Carousel](https://getbootstrap.com/docs/5.2/components/carousel/)
