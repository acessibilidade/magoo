# Carrossel

- ID: `carrossel`
- Categoria: navegacao
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-carrossel.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Apresenta uma sequência de conteúdos em um espaço compartilhado, com controles para navegar entre eles.

<!-- id: interaction-design -->
## Design de interação

<!-- id: carrossel.designer-guide.frame -->
<!-- id: carrossel.designer-guide.1 -->
### Guia rápido para designers

<!-- id: carrossel.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: carrossel.designer-guide.3 -->
#### Quando usar

<!-- id: carrossel.designer-guide.4 -->
Use para apresentar uma sequência de conteúdos no mesmo espaço, com controles claros.

<!-- id: carrossel.designer-guide.5 -->
#### O que desenhar

<!-- id: carrossel.designer-guide.6 -->
Mostre o slide atual, anterior, próximo e indicadores quando usados. Se houver rotação automática, mostre pausa.

<!-- id: carrossel.designer-guide.7 -->
#### Como se comporta

<!-- id: carrossel.designer-guide.8 -->
Os controles trocam o slide sem mover o foco inesperadamente. A rotação automática pausa quando o carrossel recebe foco.

<!-- id: carrossel.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: carrossel.designer-guide.10 -->
Registre a rotação, a pausa, o nome dos controles e como informar o slide atual. Gestos e `setas` podem complementar os controles.

<!-- id: carrossel.designer-guide.11 -->
#### Como revisar

<!-- id: carrossel.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: carrossel.designer-guide.13 -->
### Orientações completas

<!-- id: carrossel.interaction-design.1 -->

<!-- id: carrossel.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Carrossel.

<!-- id: carrossel.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: carrossel.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: carrossel.interaction-design.9 --> Antes de interagir com o componente é possível perceber visualmente que se trata de um agrupamento de conteúdos relacionados?
2. <!-- id: carrossel.interaction-design.10 --> Antes de interagir com o componente é possível identificar qual item ou slide está ativo?
3. <!-- id: carrossel.interaction-design.11 --> Antes de interagir com o componente é possível perceber quantos itens existem ou qual é a posição atual dentro da sequência?
4. <!-- id: carrossel.interaction-design.12 --> Quando existe rotação automática, é possível perceber se o carrossel está em reprodução ou pausado?
5. <!-- id: carrossel.interaction-design.13 --> Os controles de avançar, voltar, selecionar item e pausar ficam disponíveis sem depender apenas de gestos ou animações?

<!-- id: carrossel.interaction-design.14 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: carrossel.interaction-design.17 --> Há feedback visual ao passar o mouse sobre botões, indicadores e controles de pausa?
2. <!-- id: carrossel.interaction-design.18 --> Há feedback visual ao clicar em controles acionáveis?
3. <!-- id: carrossel.interaction-design.19 --> Ao clicar em anterior ou próximo, o slide correspondente é exibido e o indicador ativo é atualizado?
4. <!-- id: carrossel.interaction-design.20 --> Ao clicar em um indicador, o carrossel apresenta o slide associado àquele controle?
5. <!-- id: carrossel.interaction-design.21 --> Quando houver rotação automática, passar o mouse sobre a área do carrossel pausa a troca de slides?

<!-- id: carrossel.interaction-design.22 -->
### Projetando para uso com gestos

1. <!-- id: carrossel.interaction-design.24 --> Os controles possuem área suficiente para toque confortável?
2. <!-- id: carrossel.interaction-design.25 --> Quando houver gesto de `deslizar`, ele funciona como complemento aos controles visíveis?
3. <!-- id: carrossel.interaction-design.26 --> O gesto de `deslizar` atualiza o slide ativo e sua respectiva indicação visual?
4. <!-- id: carrossel.interaction-design.27 --> É possível operar o carrossel sem depender exclusivamente de movimentos precisos ou complexos?

<!-- id: carrossel.interaction-design.28 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: carrossel.interaction-design.31 --> Há feedback visual ao focar em cada controle acionável?
2. <!-- id: carrossel.interaction-design.32 --> É possível navegar entre os controles acionáveis utilizando `TAB` e `SHIFT`+`TAB`?
3. <!-- id: carrossel.interaction-design.36 --> É possível acionar botões e indicadores com `ENTER` e `SPACE`?
4. <!-- id: carrossel.interaction-design.39 --> Ao trocar de slide, o foco permanece em uma posição previsível?
5. <!-- id: carrossel.interaction-design.40 --> Quando o foco entra no carrossel, a rotação automática é pausada?

<!-- id: carrossel.interaction-design.41 -->
### Projetando para uso com leitor de telas

1. <!-- id: carrossel.interaction-design.43 --> Ao navegar por landmarks ou regiões é possível identificar o carrossel por um nome acessível claro?
2. <!-- id: carrossel.interaction-design.44 --> Ao focar em um controle acionável é possível ouvir seu nome, papel e estado?
3. <!-- id: carrossel.interaction-design.45 --> Ao focar em indicadores, é possível identificar qual slide será exibido e qual está selecionado?
4. <!-- id: carrossel.interaction-design.46 --> A posição do slide ativo, como "2 de 5", é comunicada quando isso ajuda a orientação?
5. <!-- id: carrossel.interaction-design.47 --> Atualizações automáticas são pausadas ou comunicadas de forma controlada para não interromper a leitura?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: carrossel.interaction-methods.1 -->

<!-- id: carrossel.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Carrossel.

<!-- id: carrossel.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: carrossel.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: carrossel.interaction-methods.10 --> Ao passar o mouse, cada controle acionável deve retornar feedback visual confirmando possibilidade de interação.
- <!-- id: carrossel.interaction-methods.11 --> Ao clicar no botão de próximo, o próximo slide deve ser apresentado.
- <!-- id: carrossel.interaction-methods.12 --> Ao clicar no botão de anterior, o slide anterior deve ser apresentado.
- <!-- id: carrossel.interaction-methods.13 --> Ao clicar em um indicador, o slide correspondente deve ser apresentado.
- <!-- id: carrossel.interaction-methods.14 --> Ao clicar no controle de pausa, a rotação automática deve ser interrompida.

<!-- id: carrossel.interaction-methods.15 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: carrossel.interaction-methods.18 --> Ao focar com teclado, cada controle acionável deve retornar feedback visual com foco visível.
- <!-- id: carrossel.interaction-methods.19 --> Deve ser possível navegar para o próximo item ou para o anterior utilizando as teclas `TAB` ou `SHIFT`+`TAB` respectivamente.
- <!-- id: carrossel.interaction-methods.23 --> Botões de controle devem ser acionados com as teclas `ENTER` e `SPACE`.
- <!-- id: carrossel.interaction-methods.26 --> `Setas direcionais` podem existir como interação complementar, desde que não sejam o único método de uso e não conflitem com padrões esperados.
- <!-- id: carrossel.interaction-methods.27 --> Ao receber foco, o carrossel com rotação automática deve pausar a troca de slides.

<!-- id: carrossel.interaction-methods.28 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: carrossel.interaction-methods.30 --> Ao chegar no carrossel é possível identificar seu nome acessível e sua finalidade.
- <!-- id: carrossel.interaction-methods.31 --> Ao focar em controles como anterior, próximo, pausar ou indicadores, seus nomes devem descrever a ação executada.
- <!-- id: carrossel.interaction-methods.32 --> O slide ativo e sua posição no conjunto devem ser perceptíveis quando necessário para orientação.
- <!-- id: carrossel.interaction-methods.33 --> A troca de slide não deve deslocar o foco inesperadamente.
- <!-- id: carrossel.interaction-methods.34 --> Em dispositivos móveis, controles devem ser alcançáveis por gestos do leitor de tela e acionáveis por duplo toque.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: carrossel.acceptance-criteria.1 -->

<!-- id: carrossel.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: carrossel.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém carrossel

<!-- id: carrossel.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: carrossel.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para os controles do carrossel
2. <!-- id: carrossel.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: carrossel.acceptance-criteria.11 --> ENTÃO, quando uso as teclas `Enter` ou `Space` para acionar um controle
4. <!-- id: carrossel.acceptance-criteria.14 --> VEJO que o slide correspondente é apresentado
5. <!-- id: carrossel.acceptance-criteria.15 --> E VEJO que o indicador do slide atual é atualizado
6. <!-- id: carrossel.acceptance-criteria.16 --> E o foco permanece em uma posição previsível

<!-- id: carrossel.acceptance-criteria.17 -->
#### Rotação automática

1. <!-- id: carrossel.acceptance-criteria.19 --> QUANDO o carrossel possui rotação automática
2. <!-- id: carrossel.acceptance-criteria.20 --> VEJO um controle para pausar, parar ou controlar a animação
3. <!-- id: carrossel.acceptance-criteria.21 --> ENTÃO, quando o foco entra no carrossel ou o mouse passa sobre sua área
4. <!-- id: carrossel.acceptance-criteria.22 --> VEJO que a rotação automática é pausada
5. <!-- id: carrossel.acceptance-criteria.23 --> E, quando aciono o controle de pausa, a troca automática de slides é interrompida

<!-- id: carrossel.acceptance-criteria.24 -->
#### Leitor de telas para desktop

1. <!-- id: carrossel.acceptance-criteria.26 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego até o carrossel, acontece o seguinte:

   - <!-- id: carrossel.acceptance-criteria.28 --> OUÇO o nome acessível do carrossel ou da região onde ele está.
   - <!-- id: carrossel.acceptance-criteria.29 --> OUÇO o nome de cada controle, como slide anterior, próximo slide, pausar carrossel ou selecionar slide.
   - <!-- id: carrossel.acceptance-criteria.30 --> OUÇO o estado ou posição do slide atual quando isso for necessário para orientação.
2. <!-- id: carrossel.acceptance-criteria.31 --> ENTÃO, quando ativo um controle do carrossel
3. <!-- id: carrossel.acceptance-criteria.32 --> OUÇO ou percebo que o slide foi atualizado sem anúncios repetitivos ou interrupções excessivas.

<!-- id: carrossel.acceptance-criteria.33 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: carrossel.acceptance-criteria.35 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo carrossel, acontece o seguinte:

   - <!-- id: carrossel.acceptance-criteria.37 --> OUÇO o nome acessível do carrossel ou da região onde ele está.
   - <!-- id: carrossel.acceptance-criteria.38 --> OUÇO controles e indicadores em ordem lógica.
   - <!-- id: carrossel.acceptance-criteria.39 --> OUÇO nomes que deixam clara a ação de cada controle.
2. <!-- id: carrossel.acceptance-criteria.40 --> ENTÃO, quando eu toco duas vezes para ativar um controle
3. <!-- id: carrossel.acceptance-criteria.41 --> OUÇO ou percebo que o slide correspondente foi apresentado sem perda de contexto.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: carrossel.considerations.1 -->

- <!-- id: carrossel.considerations.3 --> Se houver rotação automática, deve existir uma forma clara de pausar, parar ou controlar a animação.
- <!-- id: carrossel.considerations.4 --> O carrossel deve pausar quando recebe foco de teclado ou quando o mouse passa sobre sua área.
- <!-- id: carrossel.considerations.5 --> Conteúdos importantes não devem existir apenas em slides que desaparecem automaticamente.
- <!-- id: carrossel.considerations.6 --> As animações devem respeitar preferências de redução de movimento.
- <!-- id: carrossel.considerations.7 --> Indicadores visuais, como pontos, precisam ter nome acessível e estado ativo perceptível.
- <!-- id: carrossel.considerations.8 --> Use carrosséis com critério, pois eles adicionam complexidade de navegação e podem ocultar conteúdo.

<!-- id: references -->
## Referências

<!-- id: carrossel.references.1 -->

<!-- id: carrossel.references.2 -->
Referências adicionais sobre componentes do tipo Carrossel.

<!-- id: carrossel.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: carrossel.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: carrossel.references.10 -->
### Padrões de Design

- <!-- id: carrossel.references.12 --> [W3C APG - Carousel Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/)
- <!-- id: carrossel.references.17 --> [MDN Web Docs - prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

<!-- id: carrossel.references.22 -->
### Design System

- <!-- id: carrossel.references.24 --> [Bootstrap - Carousel](https://getbootstrap.com/docs/5.2/components/carousel/)
