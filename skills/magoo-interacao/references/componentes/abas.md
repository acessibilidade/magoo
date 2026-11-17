# Abas

- ID: `abas`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-abas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organizam conteúdos relacionados em painéis alternativos, exibidos a partir de uma navegação compartilhada.

<!-- id: interaction-design -->
## Design de interação

<!-- id: abas.designer-guide.frame -->
<!-- id: abas.designer-guide.1 -->
### Guia rápido para designers

<!-- id: abas.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: abas.designer-guide.3 -->
#### Quando usar

<!-- id: abas.designer-guide.4 -->
Use para alternar grupos de conteúdo na mesma página; avalie antes se uma apresentação mais simples atende.

<!-- id: abas.designer-guide.5 -->
#### O que desenhar

<!-- id: abas.designer-guide.6 -->
Mostre as abas, a selecionada, o painel correspondente e a indicação de navegação pelo teclado.

<!-- id: abas.designer-guide.7 -->
#### Como se comporta

<!-- id: abas.designer-guide.8 -->
As `setas` percorrem as abas. Defina se o painel abre ao navegar ou somente após `Enter` ou `espaço`; `Tab` permite seguir para o conteúdo.

<!-- id: abas.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: abas.designer-guide.10 -->
Registre a relação entre aba e painel, o modo de ativação e a passagem entre a primeira e a última aba.

<!-- id: abas.designer-guide.11 -->
#### Como revisar

<!-- id: abas.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: abas.designer-guide.13 -->
### Orientações completas

<!-- id: abas.interaction-design.1 -->

<!-- id: abas.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Abas.

<!-- id: abas.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: abas.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: abas.interaction-design.9 --> Antes de interagir com o componente é possível perceber visualmente que o componente é interativo?
2. <!-- id: abas.interaction-design.10 --> Antes de interagir com o componente é possível perceber visualmente qual componente em um conjunto está selecionado?

<!-- id: abas.interaction-design.11 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: abas.interaction-design.14 --> Há feedback visual ao passar o mouse no componente acionável?
2. <!-- id: abas.interaction-design.15 --> Há feedback visual ao clicar no componente acionável?
3. <!-- id: abas.interaction-design.16 --> Ao clicar em um dos componentes do agrupamento, o conteúdo do respectivo agrupamento é exibido?

<!-- id: abas.interaction-design.17 -->
### Projetando para uso com gestos

1. <!-- id: abas.interaction-design.19 --> Há feedback visual ao acionar o componente?
2. <!-- id: abas.interaction-design.20 --> Ao acionar um dos componentes do agrupamento, o conteúdo do respectivo agrupamento é exibido?

<!-- id: abas.interaction-design.21 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: abas.interaction-design.24 --> Há feedback visual ao focar no componente?
2. <!-- id: abas.interaction-design.25 --> Quando configurado para carregamento automático, ao se navegar entre os componentes da aba é possível perceber a mudança de foco em conjunto com o carregamento do conteúdo?
3. <!-- id: abas.interaction-design.26 --> Quando configurado para carregamento manual, ao se navegar entre os componentes da aba é possível perceber a mudança de foco?
4. <!-- id: abas.interaction-design.27 --> Quando configurado para carregamento manual, após navegar entre os diferentes componentes da aba, é possível acionar o conteúdo do conjunto com "`enter`" ou "`barra de espaço`"?
5. <!-- id: abas.interaction-design.28 --> Quando estiver no último componente de um conjunto de abas, a continuidade da navegação faz com que o foco seja direcionado para o primeiro item?
6. <!-- id: abas.interaction-design.29 --> Quando estiver no primeiro componente de um conjunto de abas, a continuidade da navegação faz com que o foco seja direcionado para o último item?

<!-- id: abas.interaction-design.30 -->
### Projetando para uso com leitor de telas

1. <!-- id: abas.interaction-design.32 --> Ao focar em um dos componentes do conjunto de abas é possível identificar qual é o componente de forma clara?
2. <!-- id: abas.interaction-design.33 --> Ao focar em um dos componentes do conjunto de abas é possível identificar qual a sua posição no conjunto (exemplo: 1 de 4)?
3. <!-- id: abas.interaction-design.34 --> Ao focar em um dos componentes do conjunto de abas é possível ouvir se o componente está selecionado ou não?
4. <!-- id: abas.interaction-design.35 --> Ao focar em um dos componentes do conjunto de abas é possível ouvir se o componente está ativado ou não?
5. <!-- id: abas.interaction-design.36 --> Ao focar em um dos componentes do conjunto de abas e este não estiver ativado, após ativá-lo é possívei ouvir que o componente está ativado?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: abas.interaction-methods.1 -->

<!-- id: abas.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Abas.

<!-- id: abas.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: abas.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: abas.interaction-methods.10 --> Ao passar o mouse, cada componente deve retornar feedback visual confirmando possibilidade de interação.
- <!-- id: abas.interaction-methods.11 --> Ao clicar com o botão do mouse, o componente deve retornar feedback visual confirmando o clique e o conteúdo do agrupamento selecionado deve ser exibido.

<!-- id: abas.interaction-methods.12 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: abas.interaction-methods.15 --> Ao focar com teclado, cada componente deve retornar feedback visual com foco visível.
- <!-- id: abas.interaction-methods.16 --> Quando o foco está fora do conjunto de abas em um componente anterior ao conjunto e a tecla `TAB` é pressionada, o componente do conjunto previamente ativo deve receber o foco.
- <!-- id: abas.interaction-methods.18 --> Quando o foco já estiver no conjunto de abas com um determinado agrupamento ativado, ao pressionar `TAB`, o foco é movido para o primeiro componente acionável dentro deste conjunto aberto. Caso não existe nenhum componente acionável no conjunto, o foco vai para o próximo componente acionável na tela.
- <!-- id: abas.interaction-methods.20 --> A navegação entre os demais componentes do conjunto de abas deve ocorrer através das `setas direcionais` `seta para direita` e `seta para esquerda`.
- <!-- id: abas.interaction-methods.27 --> A configuração padrão para o carregamento de conteúdo de cada agrupamento é que ele ocorra de forma automática após a utilização das `setas direcionais`. É possível configurar de forma que o carregamento de conteúdo ocorra apenas após o acionamento da tecla "`enter`" ou "`barra de espaço`", no entanto isso não é recomendado.
- <!-- id: abas.interaction-methods.28 --> Quando o último componente em um conjunto de abas estiver selecionado, a utilização da tecla `seta para direita` deve mover o foco para o primeiro item do conjunto de abas.
- <!-- id: abas.interaction-methods.32 --> Quando o primeiro componente em um conjunto de abas estiver selecionado, a utilização da tecla `seta para esquerda` deve mover o foco para o último item do conjunto de abas.

<!-- id: abas.interaction-methods.36 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: abas.interaction-methods.38 --> Ao focar em um componente de um conjunto de abas é possível ouvir qual é este componente, a sua posição (exemplo: 1 de 4) e se está ativado ou não.
- <!-- id: abas.interaction-methods.39 --> Ao focar em outros componentes de um conjunto de abas é possível ouvir qual é o componente, a sua posição e se está ativado ou não.
- <!-- id: abas.interaction-methods.40 --> Ao focar em algum componente de um conjunto de abas é possível ouvir de que se trata de uma "aba" e ela faz parte de um conjunto de abas.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: abas.acceptance-criteria.1 -->

<!-- id: abas.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: abas.acceptance-criteria.7 -->
### Cenário: Considerando que estou em uma página que contém um conjunto de abas

<!-- id: abas.acceptance-criteria.8 -->
#### Navegação por teclado

1. <!-- id: abas.acceptance-criteria.10 --> QUANDO uso a tecla `Tab` para mover o foco para o conjunto de abas
2. <!-- id: abas.acceptance-criteria.12 --> O foco que VEJO é fortemente indicado visualmente na aba ativa
3. <!-- id: abas.acceptance-criteria.13 --> ENTÃO, quando uso as `setas direcionais` `seta para direita` e `seta para esquerda`
4. <!-- id: abas.acceptance-criteria.20 --> VEJO que o foco se move entre as abas do agrupamento
5. <!-- id: abas.acceptance-criteria.21 --> ENTÃO, quando a ativação for manual e uso `Enter` ou `Barra de espaço`
6. <!-- id: abas.acceptance-criteria.24 --> VEJO que o painel da aba focada é exibido
7. <!-- id: abas.acceptance-criteria.25 --> ENTÃO, quando uso a tecla `Tab` novamente
8. <!-- id: abas.acceptance-criteria.27 --> VEJO que o foco vai para o painel de conteúdo ativo ou para o primeiro componente acionável dentro dele

<!-- id: abas.acceptance-criteria.28 -->
#### Leitor de telas para desktop

1. <!-- id: abas.acceptance-criteria.30 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para uma aba

   - <!-- id: abas.acceptance-criteria.32 --> OUÇO o nome da aba.
   - <!-- id: abas.acceptance-criteria.33 --> OUÇO que o componente é identificado como aba.
   - <!-- id: abas.acceptance-criteria.34 --> OUÇO sua posição no conjunto, quando disponível.
   - <!-- id: abas.acceptance-criteria.35 --> OUÇO se a aba está selecionada ou não.
2. <!-- id: abas.acceptance-criteria.36 --> ENTÃO, quando navego entre as abas e ativo uma delas
3. <!-- id: abas.acceptance-criteria.37 --> OUÇO ou percebo que o painel correspondente à aba selecionada está disponível.

<!-- id: abas.acceptance-criteria.38 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: abas.acceptance-criteria.40 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em uma aba, acontece o seguinte:

   - <!-- id: abas.acceptance-criteria.42 --> OUÇO o nome da aba.
   - <!-- id: abas.acceptance-criteria.43 --> OUÇO que o componente é identificado como aba.
   - <!-- id: abas.acceptance-criteria.44 --> OUÇO se a aba está selecionada ou não.
2. <!-- id: abas.acceptance-criteria.45 --> ENTÃO, quando eu toco duas vezes para ativar uma aba
3. <!-- id: abas.acceptance-criteria.46 --> OUÇO ou percebo que o painel correspondente à aba selecionada está disponível.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: abas.considerations.1 -->

<!-- id: abas.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Abas.

- <!-- id: abas.considerations.5 --> **Responsividade:** Este componente pode ser substituído por outro mais adequado em telas menores.
- <!-- id: abas.considerations.7 --> componentes do tipo Abas devem ser utilizados apenas quando outros recursos não puderem ser utilizados.
- <!-- id: abas.considerations.8 --> A interação com `setas direcionais` nem sempre é compreendida por todas as pessoas apesar de ser um padrão de design.
- <!-- id: abas.considerations.9 --> As pessoas que desenvolvem telas também tem dificuldade em compreender padrões de interações de teclado, podendo ocasionar construções incorretas se a documentação não for seguida.

<!-- id: references -->
## Referências

<!-- id: abas.references.1 -->

<!-- id: abas.references.2 -->
Referências adicionais sobre componentes do tipo Abas.

<!-- id: abas.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: abas.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: abas.references.10 -->
### Padrões de Design

- <!-- id: abas.references.12 --> [Apple - Human Interface Guidelines - Tab Views](https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/tab-views)
- <!-- id: abas.references.17 --> [Google - Material Design - Tabs](https://m3.material.io/components/tabs/overview)
- <!-- id: abas.references.22 --> [W3C APG: Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

<!-- id: abas.references.27 -->
### Design System

- <!-- id: abas.references.29 --> [Deque Cauldron: Tabs](https://cauldron.dequelabs.com/components/Tabs)
- <!-- id: abas.references.34 --> [eBay MIND Patterns: Tabs](https://ebay.gitbook.io/mindpatterns/disclosure/tabs)
- <!-- id: abas.references.39 --> [Gov.UK - Tabs](https://design-system.service.gov.uk/components/tabs/)
- <!-- id: abas.references.44 --> [US.gov - Tabs](https://designsystem.digital.gov/components/breadcrumb/)
- <!-- id: abas.references.49 --> [Gov.AU - Tabs](https://gold.designsystemau.org/components/breadcrumbs/)
- <!-- id: abas.references.54 --> [BBC Gel - Tabs](https://www.bbc.co.uk/gel/features/tabs)
- <!-- id: abas.references.59 --> [Washington Post - Tabs](https://build.washingtonpost.com/components/tabs)
- <!-- id: abas.references.64 --> [Salesforce Lightning - Tabs](https://www.lightningdesignsystem.com/components/tabs/?variant=mobile-stack#site-main-content)
- <!-- id: abas.references.69 --> [IBM Carbon - Tabs](https://carbondesignsystem.com/components/tabs/usage/)
- <!-- id: abas.references.74 --> [Adobe Spectrum - Tabs](https://spectrum.adobe.com/page/tabs/)
- <!-- id: abas.references.79 --> [Github Primer - Tabs](https://primer.style/design/components/tab-nav)
- <!-- id: abas.references.84 --> [Bootstrap - Tabs](https://getbootstrap.com/docs/5.2/components/navs-tabs/)
