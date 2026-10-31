# Abas

- ID: `abas`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-abas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organizam conteúdos relacionados em painéis alternativos, exibidos a partir de uma navegação compartilhada.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para alternar grupos de conteúdo na mesma página; avalie antes se uma apresentação mais simples atende.

#### O que desenhar

Mostre as abas, a selecionada, o painel correspondente e a indicação de navegação pelo teclado.

#### Como se comporta

As `setas` percorrem as abas. Defina se o painel abre ao navegar ou somente após `Enter` ou `espaço`; `Tab` permite seguir para o conteúdo.

#### O que documentar no Figma

Registre a relação entre aba e painel, o modo de ativação e a passagem entre a primeira e a última aba.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Abas.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir com o componente é possível perceber visualmente que o componente é interativo?
2. Antes de interagir com o componente é possível perceber visualmente qual componente em um conjunto está selecionado?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no componente acionável?
2. Há feedback visual ao clicar no componente acionável?
3. Ao clicar em um dos componentes do agrupamento, o conteúdo do respectivo agrupamento é exibido?

### Projetando para uso com gestos

1. Há feedback visual ao acionar o componente?
2. Ao acionar um dos componentes do agrupamento, o conteúdo do respectivo agrupamento é exibido?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há feedback visual ao focar no componente?
2. Quando configurado para carregamento automático, ao se navegar entre os componentes da aba é possível perceber a mudança de foco em conjunto com o carregamento do conteúdo?
3. Quando configurado para carregamento manual, ao se navegar entre os componentes da aba é possível perceber a mudança de foco?
4. Quando configurado para carregamento manual, após navegar entre os diferentes componentes da aba, é possível acionar o conteúdo do conjunto com "`enter`" ou "`barra de espaço`"?
5. Quando estiver no último componente de um conjunto de abas, a continuidade da navegação faz com que o foco seja direcionado para o primeiro item?
6. Quando estiver no primeiro componente de um conjunto de abas, a continuidade da navegação faz com que o foco seja direcionado para o último item?

### Projetando para uso com leitor de telas

1. Ao focar em um dos componentes do conjunto de abas é possível identificar qual é o componente de forma clara?
2. Ao focar em um dos componentes do conjunto de abas é possível identificar qual a sua posição no conjunto (exemplo: 1 de 4)?
3. Ao focar em um dos componentes do conjunto de abas é possível ouvir se o componente está selecionado ou não?
4. Ao focar em um dos componentes do conjunto de abas é possível ouvir se o componente está ativado ou não?
5. Ao focar em um dos componentes do conjunto de abas e este não estiver ativado, após ativá-lo é possívei ouvir que o componente está ativado?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Abas.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ao passar o mouse, cada componente deve retornar feedback visual confirmando possibilidade de interação.
- Ao clicar com o botão do mouse, o componente deve retornar feedback visual confirmando o clique e o conteúdo do agrupamento selecionado deve ser exibido.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- Ao focar com teclado, cada componente deve retornar feedback visual com foco visível.
- Quando o foco está fora do conjunto de abas em um componente anterior ao conjunto e a tecla `TAB` é pressionada, o componente do conjunto previamente ativo deve receber o foco.
- Quando o foco já estiver no conjunto de abas com um determinado agrupamento ativado, ao pressionar `TAB`, o foco é movido para o primeiro componente acionável dentro deste conjunto aberto. Caso não existe nenhum componente acionável no conjunto, o foco vai para o próximo componente acionável na tela.
- A navegação entre os demais componentes do conjunto de abas deve ocorrer através das `setas direcionais` `seta para direita` e `seta para esquerda`.
- A configuração padrão para o carregamento de conteúdo de cada agrupamento é que ele ocorra de forma automática após a utilização das `setas direcionais`. É possível configurar de forma que o carregamento de conteúdo ocorra apenas após o acionamento da tecla "`enter`" ou "`barra de espaço`", no entanto isso não é recomendado.
- Quando o último componente em um conjunto de abas estiver selecionado, a utilização da tecla `seta para direita` deve mover o foco para o primeiro item do conjunto de abas.
- Quando o primeiro componente em um conjunto de abas estiver selecionado, a utilização da tecla `seta para esquerda` deve mover o foco para o último item do conjunto de abas.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar em um componente de um conjunto de abas é possível ouvir qual é este componente, a sua posição (exemplo: 1 de 4) e se está ativado ou não.
- Ao focar em outros componentes de um conjunto de abas é possível ouvir qual é o componente, a sua posição e se está ativado ou não.
- Ao focar em algum componente de um conjunto de abas é possível ouvir de que se trata de uma "aba" e ela faz parte de um conjunto de abas.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém um conjunto de abas

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para o conjunto de abas
2. O foco que VEJO é fortemente indicado visualmente na aba ativa
3. ENTÃO, quando uso as `setas direcionais` `seta para direita` e `seta para esquerda`
4. VEJO que o foco se move entre as abas do agrupamento
5. ENTÃO, quando a ativação for manual e uso `Enter` ou `Barra de espaço`
6. VEJO que o painel da aba focada é exibido
7. ENTÃO, quando uso a tecla `Tab` novamente
8. VEJO que o foco vai para o painel de conteúdo ativo ou para o primeiro componente acionável dentro dele

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para uma aba

   - OUÇO o nome da aba.
   - OUÇO que o componente é identificado como aba.
   - OUÇO sua posição no conjunto, quando disponível.
   - OUÇO se a aba está selecionada ou não.
2. ENTÃO, quando navego entre as abas e ativo uma delas
3. OUÇO ou percebo que o painel correspondente à aba selecionada está disponível.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar em uma aba, acontece o seguinte:

   - OUÇO o nome da aba.
   - OUÇO que o componente é identificado como aba.
   - OUÇO se a aba está selecionada ou não.
2. ENTÃO, quando eu toco duas vezes para ativar uma aba
3. OUÇO ou percebo que o painel correspondente à aba selecionada está disponível.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Abas.

- **Responsividade:** Este componente pode ser substituído por outro mais adequado em telas menores.
- componentes do tipo Abas devem ser utilizados apenas quando outros recursos não puderem ser utilizados.
- A interação com `setas direcionais` nem sempre é compreendida por todas as pessoas apesar de ser um padrão de design.
- As pessoas que desenvolvem telas também tem dificuldade em compreender padrões de interações de teclado, podendo ocasionar construções incorretas se a documentação não for seguida.

## Referências

Referências adicionais sobre componentes do tipo Abas.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Apple - Human Interface Guidelines - Tab Views](https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/tab-views)
- [Google - Material Design - Tabs](https://m3.material.io/components/tabs/overview)
- [W3C APG: Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

### Design System

- [Deque Cauldron: Tabs](https://cauldron.dequelabs.com/components/Tabs)
- [eBay MIND Patterns: Tabs](https://ebay.gitbook.io/mindpatterns/disclosure/tabs)
- [Gov.UK - Tabs](https://design-system.service.gov.uk/components/tabs/)
- [US.gov - Tabs](https://designsystem.digital.gov/components/breadcrumb/)
- [Gov.AU - Tabs](https://gold.designsystemau.org/components/breadcrumbs/)
- [BBC Gel - Tabs](https://www.bbc.co.uk/gel/features/tabs)
- [Washington Post - Tabs](https://build.washingtonpost.com/components/tabs)
- [Salesforce Lightning - Tabs](https://www.lightningdesignsystem.com/components/tabs/?variant=mobile-stack#site-main-content)
- [IBM Carbon - Tabs](https://carbondesignsystem.com/components/tabs/usage/)
- [Adobe Spectrum - Tabs](https://spectrum.adobe.com/page/tabs/)
- [Github Primer - Tabs](https://primer.style/design/components/tab-nav)
- [Bootstrap - Tabs](https://getbootstrap.com/docs/5.2/components/navs-tabs/)
