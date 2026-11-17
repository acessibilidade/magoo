# Tabbar

- ID: `tabbar`
- Categoria: estrutura
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/estrutura/tabbar.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Barra de acesso às principais áreas de uma interface, com indicação do destino atual e navegação consistente.

<!-- id: interaction-design -->
## Design de interação

<!-- id: tabbar.designer-guide.frame -->
<!-- id: tabbar.designer-guide.1 -->
### Guia rápido para designers

<!-- id: tabbar.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: tabbar.designer-guide.3 -->
#### Quando usar

<!-- id: tabbar.designer-guide.4 -->
Use para acesso persistente às principais áreas da interface. Defina se os itens mudam de destino ou alternam painéis.

<!-- id: tabbar.designer-guide.5 -->
#### O que desenhar

<!-- id: tabbar.designer-guide.6 -->
Mostre rótulos curtos, área atual, foco e contagens quando existirem. A barra não deve encobrir conteúdo ou controles.

<!-- id: tabbar.designer-guide.7 -->
#### Como se comporta

<!-- id: tabbar.designer-guide.8 -->
Para destinos web, `Tab` percorre os links e `Enter` navega. Para painéis, use o padrão de abas com `setas` e ativação manual ou automática conforme o contexto.

<!-- id: tabbar.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: tabbar.designer-guide.10 -->
Registre o padrão escolhido, destinos, seleção e foco após a mudança. Preserve o progresso e respeite áreas seguras e teclado virtual.

<!-- id: tabbar.designer-guide.11 -->
#### Como revisar

<!-- id: tabbar.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: tabbar.designer-guide.13 -->
### Orientações completas

<!-- id: tabbar.block.1 -->

<!-- id: tabbar.block.2 -->
Questionamentos que devem ser feitos ao projetar uma Tabbar: uma barra persistente de acesso às principais áreas de uma interface.

<!-- id: tabbar.block.3 -->
Defina se os itens navegam entre destinos ou alternam painéis de conteúdo. Essa escolha determina a semântica, a navegação por teclado e o gerenciamento de foco.

<!-- id: tabbar.block.4 -->
### Projetando para a "não interação"

1. <!-- id: tabbar.block.5 --> Os destinos principais possuem rótulos curtos e compreensíveis, além dos ícones?
2. <!-- id: tabbar.block.6 --> É possível identificar a área atual sem depender apenas de cor?
3. <!-- id: tabbar.block.7 --> A ordem e os destinos permanecem consistentes entre as áreas da interface?
4. <!-- id: tabbar.block.8 --> A quantidade de itens permite reconhecer e alcançar cada destino sem rótulos cortados?

<!-- id: tabbar.block.10 -->
### Projetando para uso com mouse

1. <!-- id: tabbar.block.11 --> Cada item oferece uma área de clique clara e feedback de interação?
2. <!-- id: tabbar.block.12 --> O item escolhido leva ao destino esperado, sem confundir navegação com ações como salvar ou excluir?

<!-- id: tabbar.block.14 -->
### Projetando para uso com gestos

1. <!-- id: tabbar.block.15 --> A área de toque permite selecionar um destino sem acionar o item vizinho?
2. <!-- id: tabbar.block.16 --> A barra respeita as áreas seguras do dispositivo e não encobre conteúdo, foco ou controles?
3. <!-- id: tabbar.block.17 --> A interface continua utilizável com ampliação, rotação e teclado virtual?

<!-- id: tabbar.block.19 -->
### Projetando para uso com teclado

1. <!-- id: tabbar.block.20 --> O foco é visível e a ordem segue a apresentação dos itens?
2. <!-- id: tabbar.block.21 --> A navegação usa links nativos ou um conjunto de abas, com comandos coerentes com o comportamento escolhido?
3. <!-- id: tabbar.block.22 --> Após mudar de destino, o foco e o retorno permitem continuar a tarefa?

<!-- id: tabbar.block.24 -->
### Projetando para uso com leitor de telas

1. <!-- id: tabbar.block.25 --> A barra tem um nome que identifica sua finalidade?
2. <!-- id: tabbar.block.26 --> Cada item informa seu nome e o destino atual ou a aba selecionada?
3. <!-- id: tabbar.block.27 --> Badges, como contagens de itens novos, são compreensíveis sem depender apenas de sua aparência?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: tabbar.block.29 -->

<!-- id: tabbar.block.30 -->
### Interação com mouse

1. <!-- id: tabbar.block.31 --> Clicar em um item abre o destino correspondente e atualiza a indicação de área atual.
2. <!-- id: tabbar.block.32 --> No padrão de links, preservar comportamentos nativos como abrir um destino em outra aba.
3. <!-- id: tabbar.block.33 --> Ao selecionar a área atual, evitar recarregamentos ou redefinições inesperadas; comportamentos adicionais precisam ser previsíveis e documentados.

<!-- id: tabbar.block.35 -->
### Interação com gestos

1. <!-- id: tabbar.block.36 --> `Tocar` em um item permite acessar a área correspondente.
2. <!-- id: tabbar.block.37 --> A indicação de seleção é atualizada e a barra permanece consistente entre os destinos.
3. <!-- id: tabbar.block.38 --> Gestos adicionais podem complementar a navegação, mantendo cada destino disponível por um controle explícito.

<!-- id: tabbar.block.40 -->
### Interação com teclado — navegação entre destinos

1. <!-- id: tabbar.block.44 --> Em uma Tabbar web que navega entre páginas ou rotas, `Tab` e `Shift + Tab` percorrem os links na ordem da interface.
2. <!-- id: tabbar.block.47 --> `Enter` ativa o link focado. Não exigir `Barra de espaço` para links nem interceptar `setas` como se fossem abas.
3. <!-- id: tabbar.block.48 --> Ao mudar de rota sem recarregar a página, atualizar o título e posicionar o foco em um destino lógico, como o título ou início do conteúdo.

<!-- id: tabbar.block.50 -->
### Interação com teclado — alternância de painéis

1. <!-- id: tabbar.block.52 --> Quando o componente realmente alterna painéis na mesma página, aplicar o padrão de abas: `Tab` entra pela aba selecionada e depois sai do conjunto para o próximo elemento na sequência.
2. <!-- id: tabbar.block.55 --> `Seta para a direita` e `Seta para a esquerda` movem o foco entre abas horizontais, incluindo a passagem da última à primeira e vice-versa.
3. <!-- id: tabbar.block.58 --> Na ativação manual, `Enter` ou `Barra de espaço` exibe o painel da aba focada. Ativação automática só é adequada quando o painel aparece sem atraso perceptível.
4. <!-- id: tabbar.block.61 --> `Home` e `End` podem mover o foco para a primeira e última aba. Esse comportamento é opcional e deve ser consistente.
5. <!-- id: tabbar.methods-review.2 --> Ao confirmar uma aba, seu painel é exibido e o foco permanece na aba; `Tab` permite seguir para o conteúdo.

<!-- id: tabbar.block.66 -->
### Interação com teclado (ou gestos) + leitor de telas

1. <!-- id: tabbar.methods-review.4 --> Ao percorrer os destinos com leitor de telas, a pessoa identifica a região de navegação, o nome de cada link e qual área é a atual.
2. <!-- id: tabbar.block.71 --> Na alternância de painéis, identificar o conjunto como `tablist`, cada controle como aba e o painel como `tabpanel`, com rótulos e associações adequados.
3. <!-- id: tabbar.methods-review.6 --> Em aplicativos nativos, os comandos de navegação do leitor de telas percorrem os itens e o comando de ativação abre a área escolhida, conforme a plataforma.
4. <!-- id: tabbar.block.73 --> Com leitor de telas móvel, navegar pelos itens com os gestos da plataforma e `tocar duas vezes` ou usar o gesto de ativação para abrir o destino.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: tabbar.block.75 -->

<!-- id: tabbar.block.76 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: tabbar.block.77 -->
### Cenário: Considerando que estou em uma página ou aplicativo que contém uma Tabbar

<!-- id: tabbar.block.78 -->
#### Navegação por teclado — destinos

1. <!-- id: tabbar.block.81 --> QUANDO uso `Tab` para mover o foco para um link da Tabbar
2. <!-- id: tabbar.block.82 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: tabbar.block.84 --> ENTÃO, quando uso `Enter` para ativar o link
4. <!-- id: tabbar.block.85 --> VEJO a área correspondente e a indicação de destino atual é atualizada
5. <!-- id: tabbar.block.86 --> E percebo que o foco permite continuar a navegação no novo conteúdo
6. <!-- id: tabbar.block.89 --> QUANDO uso `Tab` ou `Shift + Tab`, VEJO que posso percorrer os links sem prender o foco na barra

<!-- id: tabbar.block.91 -->
#### Leitor de telas para desktop

1. <!-- id: tabbar.block.93 --> QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso `Tab` para focar um item de navegação
2. <!-- id: tabbar.block.94 --> OUÇO o nome do destino, a identificação de link ou controle nativo equivalente e a indicação de área atual, quando aplicável
3. <!-- id: tabbar.block.95 --> ENTÃO, quando aciono o item com o comando adequado à plataforma
4. <!-- id: tabbar.block.96 --> OUÇO ou percebo que a área correspondente foi aberta e posso continuar a navegação pelo conteúdo

<!-- id: tabbar.block.98 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: tabbar.block.99 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar um item de navegação
2. <!-- id: tabbar.block.100 --> OUÇO o nome do destino, a identificação de link ou controle nativo equivalente e a indicação de área atual, quando aplicável
3. <!-- id: tabbar.block.101 --> ENTÃO, quando toco duas vezes ou uso o gesto adequado
4. <!-- id: tabbar.block.102 --> OUÇO ou percebo que a área correspondente foi aberta e posso continuar a navegação pelo conteúdo

<!-- id: tabbar.block.104 -->
#### Alternância de painéis na mesma página

1. <!-- id: tabbar.block.107 --> QUANDO a Tabbar foi implementada como conjunto de abas e uso `Tab` para entrar no conjunto
2. <!-- id: tabbar.block.108 --> VEJO que o foco chega à aba selecionada
3. <!-- id: tabbar.block.111 --> ENTÃO, quando uso `Seta para a direita` ou `Seta para a esquerda`
4. <!-- id: tabbar.block.112 --> VEJO que o foco se move entre as abas
5. <!-- id: tabbar.block.115 --> E, na ativação manual, quando uso `Enter` ou `Barra de espaço`, VEJO o painel correspondente
6. <!-- id: tabbar.block.116 --> QUANDO uso leitor de telas, OUÇO o nome da aba e seu estado selecionado atualizado
7. <!-- id: tabbar.block.118 --> E posso seguir para o conteúdo do painel com `Tab`

<!-- id: tabbar.block.120 -->
#### Interação com mouse ou toque

1. <!-- id: tabbar.block.121 --> QUANDO clico ou toco em um item da barra
2. <!-- id: tabbar.block.122 --> VEJO a área correspondente e a indicação de área atual
3. <!-- id: tabbar.block.123 --> E VEJO que a barra não encobre o conteúdo ou os controles necessários para continuar a tarefa

<!-- id: considerations -->
## Pontos de atenção

<!-- id: tabbar.block.125 -->

1. <!-- id: tabbar.block.128 --> Tabbar de navegação e abas de conteúdo podem ter aparência semelhante, mas possuem comportamentos diferentes. Não usar tablist apenas porque os links estão alinhados em uma barra.
2. <!-- id: tabbar.block.131 --> Na web, usar links para destinos navegáveis e `aria-current="page"` para o atual. Usar o padrão de abas e `aria-selected` quando houver painéis alternados na mesma página.
3. <!-- id: tabbar.block.132 --> Manter uma quantidade reduzida de destinos principais. A quantidade e a posição devem seguir o contexto e as recomendações da plataforma adotada.
4. <!-- id: tabbar.block.133 --> Não usar a barra para ações isoladas, como salvar, excluir ou enviar um formulário.
5. <!-- id: tabbar.block.134 --> Manter rótulos visíveis sempre que possível. Se houver apenas ícones, fornecer nomes acessíveis e avaliar se sua finalidade é reconhecível. Preferir Material Icons em exemplos web.
6. <!-- id: tabbar.block.135 --> Ícones decorativos devem ser ocultados das tecnologias assistivas. Contagens e badges informativos precisam ter significado acessível e evitar anúncios duplicados.
7. <!-- id: tabbar.block.136 --> Não depender apenas de cor para indicar o destino atual; combinar texto e indicação visual perceptível.
8. <!-- id: tabbar.block.137 --> Se a barra for fixa, reservar espaço no conteúdo e respeitar as áreas seguras da plataforma. Conferir foco, ampliação e teclado virtual.
9. <!-- id: tabbar.block.138 --> Mudanças de rota precisam atualizar título, foco e histórico de navegação conforme o fluxo. Evitar apagar dados ou o progresso ao alternar áreas.
10. <!-- id: tabbar.block.139 --> Os padrões nativos Apple e Material usam recursos próprios de suas plataformas. Adaptar os exemplos web conforme a finalidade do componente e verificar o comportamento com tecnologias assistivas.

<!-- id: tabbar.methods-review.7 -->
### Notas de implementação e decisões de comportamento

- <!-- id: tabbar.block.64 --> Atualizar `aria-selected` e a associação com o painel; o foco permanece na aba após a seleção, e `Tab` permite seguir para o conteúdo.

- <!-- id: tabbar.block.68 --> Na navegação web entre destinos, identificar a região de navegação, o nome de cada link e a área atual por `aria-current="page"`.

- <!-- id: tabbar.block.72 --> Em aplicativos nativos, usar a semântica e os comandos fornecidos pela plataforma para a barra e seus itens.

<!-- id: references -->
## Referências

<!-- id: tabbar.block.141 -->

<!-- id: tabbar.references-standard.1 -->
Referências adicionais sobre componentes do tipo Tabbar.

<!-- id: tabbar.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: tabbar.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: tabbar.block.142 -->
### Padrões de Design

- <!-- id: tabbar.block.146 --> [Apple — Tabbars](https://developer.apple.com/design/human-interface-guidelines/tab-bars) — Orientações para barras de navegação em interfaces Apple.
- <!-- id: tabbar.block.150 --> [W3C WAI-ARIA APG — Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) — Referência para a variação que alterna painéis na mesma página.

<!-- id: tabbar.block.152 -->
### Design System

- <!-- id: tabbar.block.156 --> [Material Design 3 — Navigation bar](https://m3.material.io/components/navigation-bar/overview) — Barra de navegação entre destinos principais.
- <!-- id: tabbar.block.160 --> [Bootstrap — Navs and tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/) — Exemplos web de navegação e abas; escolher a semântica conforme a finalidade.
