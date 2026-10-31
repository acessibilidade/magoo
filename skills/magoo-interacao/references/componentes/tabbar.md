# Tabbar

- ID: `tabbar`
- Categoria: estrutura
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/estrutura/tabbar.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Barra de acesso às principais áreas de uma interface, com indicação do destino atual e navegação consistente.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para acesso persistente às principais áreas da interface. Defina se os itens mudam de destino ou alternam painéis.

#### O que desenhar

Mostre rótulos curtos, área atual, foco e contagens quando existirem. A barra não deve encobrir conteúdo ou controles.

#### Como se comporta

Para destinos web, `Tab` percorre os links e `Enter` navega. Para painéis, use o padrão de abas com `setas` e ativação manual ou automática conforme o contexto.

#### O que documentar no Figma

Registre o padrão escolhido, destinos, seleção e foco após a mudança. Preserve o progresso e respeite áreas seguras e teclado virtual.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao projetar uma Tabbar: uma barra persistente de acesso às principais áreas de uma interface.

Defina se os itens navegam entre destinos ou alternam painéis de conteúdo. Essa escolha determina a semântica, a navegação por teclado e o gerenciamento de foco.

### Projetando para a "não interação"

1. Os destinos principais possuem rótulos curtos e compreensíveis, além dos ícones?
2. É possível identificar a área atual sem depender apenas de cor?
3. A ordem e os destinos permanecem consistentes entre as áreas da interface?
4. A quantidade de itens permite reconhecer e alcançar cada destino sem rótulos cortados?

### Projetando para uso com mouse

1. Cada item oferece uma área de clique clara e feedback de interação?
2. O item escolhido leva ao destino esperado, sem confundir navegação com ações como salvar ou excluir?

### Projetando para uso com gestos

1. A área de toque permite selecionar um destino sem acionar o item vizinho?
2. A barra respeita as áreas seguras do dispositivo e não encobre conteúdo, foco ou controles?
3. A interface continua utilizável com ampliação, rotação e teclado virtual?

### Projetando para uso com teclado

1. O foco é visível e a ordem segue a apresentação dos itens?
2. A navegação usa links nativos ou um conjunto de abas, com comandos coerentes com o comportamento escolhido?
3. Após mudar de destino, o foco e o retorno permitem continuar a tarefa?

### Projetando para uso com leitor de telas

1. A barra tem um nome que identifica sua finalidade?
2. Cada item informa seu nome e o destino atual ou a aba selecionada?
3. Badges, como contagens de itens novos, são compreensíveis sem depender apenas de sua aparência?

## Métodos de Interação

### Interação com mouse

1. Clicar em um item abre o destino correspondente e atualiza a indicação de área atual.
2. No padrão de links, preservar comportamentos nativos como abrir um destino em outra aba.
3. Ao selecionar a área atual, evitar recarregamentos ou redefinições inesperadas; comportamentos adicionais precisam ser previsíveis e documentados.

### Interação com gestos

1. `Tocar` em um item permite acessar a área correspondente.
2. A indicação de seleção é atualizada e a barra permanece consistente entre os destinos.
3. Gestos adicionais podem complementar a navegação, mantendo cada destino disponível por um controle explícito.

### Interação com teclado — navegação entre destinos

1. Em uma Tabbar web que navega entre páginas ou rotas, `Tab` e `Shift + Tab` percorrem os links na ordem da interface.
2. `Enter` ativa o link focado. Não exigir `Barra de espaço` para links nem interceptar `setas` como se fossem abas.
3. Ao mudar de rota sem recarregar a página, atualizar o título e posicionar o foco em um destino lógico, como o título ou início do conteúdo.

### Interação com teclado — alternância de painéis

1. Quando o componente realmente alterna painéis na mesma página, aplicar o padrão de abas: `Tab` entra pela aba selecionada e depois sai do conjunto para o próximo elemento na sequência.
2. `Seta para a direita` e `Seta para a esquerda` movem o foco entre abas horizontais, incluindo a passagem da última à primeira e vice-versa.
3. Na ativação manual, `Enter` ou `Barra de espaço` exibe o painel da aba focada. Ativação automática só é adequada quando o painel aparece sem atraso perceptível.
4. `Home` e `End` podem mover o foco para a primeira e última aba. Esse comportamento é opcional e deve ser consistente.
5. Ao confirmar uma aba, seu painel é exibido e o foco permanece na aba; `Tab` permite seguir para o conteúdo.

### Interação com teclado (ou gestos) + leitor de telas

1. Ao percorrer os destinos com leitor de telas, a pessoa identifica a região de navegação, o nome de cada link e qual área é a atual.
2. Na alternância de painéis, identificar o conjunto como `tablist`, cada controle como aba e o painel como `tabpanel`, com rótulos e associações adequados.
3. Em aplicativos nativos, os comandos de navegação do leitor de telas percorrem os itens e o comando de ativação abre a área escolhida, conforme a plataforma.
4. Com leitor de telas móvel, navegar pelos itens com os gestos da plataforma e `tocar duas vezes` ou usar o gesto de ativação para abrir o destino.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página ou aplicativo que contém uma Tabbar

#### Navegação por teclado — destinos

1. QUANDO uso `Tab` para mover o foco para um link da Tabbar
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso `Enter` para ativar o link
4. VEJO a área correspondente e a indicação de destino atual é atualizada
5. E percebo que o foco permite continuar a navegação no novo conteúdo
6. QUANDO uso `Tab` ou `Shift + Tab`, VEJO que posso percorrer os links sem prender o foco na barra

#### Leitor de telas para desktop

1. QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso `Tab` para focar um item de navegação
2. OUÇO o nome do destino, a identificação de link ou controle nativo equivalente e a indicação de área atual, quando aplicável
3. ENTÃO, quando aciono o item com o comando adequado à plataforma
4. OUÇO ou percebo que a área correspondente foi aberta e posso continuar a navegação pelo conteúdo

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar um item de navegação
2. OUÇO o nome do destino, a identificação de link ou controle nativo equivalente e a indicação de área atual, quando aplicável
3. ENTÃO, quando toco duas vezes ou uso o gesto adequado
4. OUÇO ou percebo que a área correspondente foi aberta e posso continuar a navegação pelo conteúdo

#### Alternância de painéis na mesma página

1. QUANDO a Tabbar foi implementada como conjunto de abas e uso `Tab` para entrar no conjunto
2. VEJO que o foco chega à aba selecionada
3. ENTÃO, quando uso `Seta para a direita` ou `Seta para a esquerda`
4. VEJO que o foco se move entre as abas
5. E, na ativação manual, quando uso `Enter` ou `Barra de espaço`, VEJO o painel correspondente
6. QUANDO uso leitor de telas, OUÇO o nome da aba e seu estado selecionado atualizado
7. E posso seguir para o conteúdo do painel com `Tab`

#### Interação com mouse ou toque

1. QUANDO clico ou toco em um item da barra
2. VEJO a área correspondente e a indicação de área atual
3. E VEJO que a barra não encobre o conteúdo ou os controles necessários para continuar a tarefa

## Pontos de atenção

1. Tabbar de navegação e abas de conteúdo podem ter aparência semelhante, mas possuem comportamentos diferentes. Não usar tablist apenas porque os links estão alinhados em uma barra.
2. Na web, usar links para destinos navegáveis e `aria-current="page"` para o atual. Usar o padrão de abas e `aria-selected` quando houver painéis alternados na mesma página.
3. Manter uma quantidade reduzida de destinos principais. A quantidade e a posição devem seguir o contexto e as recomendações da plataforma adotada.
4. Não usar a barra para ações isoladas, como salvar, excluir ou enviar um formulário.
5. Manter rótulos visíveis sempre que possível. Se houver apenas ícones, fornecer nomes acessíveis e avaliar se sua finalidade é reconhecível. Preferir Material Icons em exemplos web.
6. Ícones decorativos devem ser ocultados das tecnologias assistivas. Contagens e badges informativos precisam ter significado acessível e evitar anúncios duplicados.
7. Não depender apenas de cor para indicar o destino atual; combinar texto e indicação visual perceptível.
8. Se a barra for fixa, reservar espaço no conteúdo e respeitar as áreas seguras da plataforma. Conferir foco, ampliação e teclado virtual.
9. Mudanças de rota precisam atualizar título, foco e histórico de navegação conforme o fluxo. Evitar apagar dados ou o progresso ao alternar áreas.
10. Os padrões nativos Apple e Material usam recursos próprios de suas plataformas. Adaptar os exemplos web conforme a finalidade do componente e verificar o comportamento com tecnologias assistivas.

### Notas de implementação e decisões de comportamento

- Atualizar `aria-selected` e a associação com o painel; o foco permanece na aba após a seleção, e `Tab` permite seguir para o conteúdo.

- Na navegação web entre destinos, identificar a região de navegação, o nome de cada link e a área atual por `aria-current="page"`.

- Em aplicativos nativos, usar a semântica e os comandos fornecidos pela plataforma para a barra e seus itens.

## Referências

Referências adicionais sobre componentes do tipo Tabbar.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [Apple — Tabbars](https://developer.apple.com/design/human-interface-guidelines/tab-bars) — Orientações para barras de navegação em interfaces Apple.
- [W3C WAI-ARIA APG — Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) — Referência para a variação que alterna painéis na mesma página.

### Design System

- [Material Design 3 — Navigation bar](https://m3.material.io/components/navigation-bar/overview) — Barra de navegação entre destinos principais.
- [Bootstrap — Navs and tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/) — Exemplos web de navegação e abas; escolher a semântica conforme a finalidade.
