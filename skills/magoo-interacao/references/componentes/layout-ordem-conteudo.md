# Layout e ordem do conteúdo

- ID: `layout-ordem-conteudo`
- Categoria: estrutura
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/estrutura/layout-ordem-conteudo.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organiza agrupamentos, leitura e navegação em diferentes tamanhos de tela, preservando relações, contexto e acesso aos controles.

<!-- id: interaction-design -->
## Design de interação

<!-- id: layout-ordem-conteudo.designer-guide.1 -->
<!-- id: layout-ordem-conteudo.designer-guide.2 -->
### Guia rápido para designers

<!-- id: layout-ordem-conteudo.designer-guide.3 -->
#### Quando usar

<!-- id: layout-ordem-conteudo.designer-guide.4 -->
Use ao organizar uma página em colunas ou agrupamentos e ao definir como ela se adapta a telas pequenas, texto ampliado e zoom.

<!-- id: layout-ordem-conteudo.designer-guide.5 -->
#### O que desenhar

<!-- id: layout-ordem-conteudo.designer-guide.6 -->
Mostre a sequência do conteúdo e dos controles em telas grandes e pequenas. Inclua textos longos, mensagens de erro, conteúdo expandido e elementos fixos.

<!-- id: layout-ordem-conteudo.designer-guide.7 -->
#### Como se comporta

<!-- id: layout-ordem-conteudo.designer-guide.8 -->
Colunas podem se empilhar e espaços podem mudar sem romper relações ou perder conteúdo. Ler e percorrer os controles continua fazendo sentido em cada apresentação.

<!-- id: layout-ordem-conteudo.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: layout-ordem-conteudo.designer-guide.10 -->
Anote a ordem de leitura e de foco, os agrupamentos, as mudanças de layout e o tratamento de conteúdo longo. Diferencie o que aparece no desenho do que precisa ser verificado no navegador.

<!-- id: layout-ordem-conteudo.designer-guide.11 -->
#### Como revisar

<!-- id: layout-ordem-conteudo.designer-guide.12 -->
No desenho, acompanhe a sequência e as relações entre instruções, campos e ações. Na implementação, confira leitura, teclado, zoom, ampliação de texto e ausência de sobreposições.

<!-- id: layout-ordem-conteudo.block.13 -->
### Sequência e agrupamentos

1. <!-- id: layout-ordem-conteudo.block.14 --> As informações aparecem em uma sequência que permite compreender a tarefa? Instruções precedem os campos ou ações a que se referem?
2. <!-- id: layout-ordem-conteudo.block.15 --> Proximidade, títulos e espaçamento deixam claros os agrupamentos? A relação continua compreensível quando as colunas se empilham?
3. <!-- id: layout-ordem-conteudo.block.16 --> A ordem visual sugere uma sequência diferente da leitura ou do foco? Evite saltos que dificultem associar um controle ao seu contexto. Mais de uma ordem pode fazer sentido quando os grupos são independentes.

<!-- id: layout-ordem-conteudo.block.18 -->
### Adaptação e conteúdo variável

1. <!-- id: layout-ordem-conteudo.block.19 --> Defina como colunas se reorganizam sem esconder informação ou exigir uma orientação específica do dispositivo, salvo quando essencial.
2. <!-- id: layout-ordem-conteudo.block.20 --> Preveja textos traduzidos, nomes extensos e mensagens de erro. Os blocos podem crescer sem cortar texto, sobrepor ações ou alterar a sequência?
3. <!-- id: layout-ordem-conteudo.block.21 --> Em uma área de leitura vertical com largura equivalente a 320 pixels CSS, o conteúdo comum deve se reorganizar sem perda de informação ou função e sem rolagem em duas direções. Tabelas e mapas podem exigir um tratamento próprio quando duas dimensões forem essenciais.

<!-- id: layout-ordem-conteudo.block.23 -->
### Contexto e elementos fixos

1. <!-- id: layout-ordem-conteudo.block.24 --> Cabeçalhos fixos, barras de ações e avisos deixam o conteúdo e o controle em foco visíveis e utilizáveis? Considere o espaço ocupado também com zoom.
2. <!-- id: layout-ordem-conteudo.block.25 --> Ao abrir detalhes, inserir mensagens ou mudar o layout, a pessoa consegue continuar de onde estava? Uma reorganização visual não deve deslocar o foco sem motivo.

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: layout-ordem-conteudo.block.27 -->

<!-- id: layout-ordem-conteudo.block.28 -->
### Mouse e toque

<!-- id: layout-ordem-conteudo.block.29 -->
Percorrer a página com rolagem permite acompanhar o conteúdo na sequência apresentada. `Clicar` ou `tocar` em um link, botão ou campo usa o comportamento desse controle; uma coluna ou área vazia não é um controle.

<!-- id: layout-ordem-conteudo.block.30 -->
Usar o zoom do navegador ou ampliar a visualização pelos recursos disponíveis permite ler o conteúdo em tamanho maior. Quando o layout se reorganiza, os agrupamentos e as ações continuam acessíveis.

<!-- id: layout-ordem-conteudo.block.31 -->
### Teclado

<!-- id: layout-ordem-conteudo.block.34 -->
`Tab` avança entre controles e `Shift + Tab` retorna. A sequência preserva o sentido da tarefa; textos, colunas e agrupamentos estáticos não entram no percurso apenas por existirem.

<!-- id: layout-ordem-conteudo.block.36 -->
`Enter` ativa links e os comandos próprios de cada controle permitem usá-lo. Ao sair de um grupo, a navegação continua pelo próximo controle da sequência, sem saltar para uma área sem relação.

<!-- id: layout-ordem-conteudo.keyboard-scroll.1 -->
Com a página ou uma área rolável ativa, os comandos de rolagem permitem acompanhar o conteúdo sem mudar de controle:

- <!-- id: layout-ordem-conteudo.keyboard-scroll.3 --> `Setas direcionais` rolam o conteúdo em pequenos incrementos na direção correspondente, quando há conteúdo fora da área visível.
- <!-- id: layout-ordem-conteudo.keyboard-scroll.6 --> `Barra de espaço` ou `Page Down` rolam aproximadamente o equivalente a uma tela para baixo.
- <!-- id: layout-ordem-conteudo.keyboard-scroll.9 --> `Shift + Barra de espaço` ou `Page Up` rolam aproximadamente o equivalente a uma tela para cima.

<!-- id: layout-ordem-conteudo.keyboard-scroll.11 -->
Quando o foco está em um campo ou componente que utiliza essas teclas, elas podem editar o conteúdo ou operar esse controle em vez de rolar a página. Leitores de tela também podem interceptar os comandos conforme o modo de navegação.

<!-- id: layout-ordem-conteudo.block.37 -->
### Leitor de telas no computador

<!-- id: layout-ordem-conteudo.block.38 -->
Os comandos de leitura percorrem textos, títulos e controles na ordem disponibilizada pela página. Navegar por títulos ou regiões permite localizar um agrupamento e continuar a leitura dentro dele.

<!-- id: layout-ordem-conteudo.block.39 -->
Ao percorrer um formulário ou uma lista de ações, a pessoa encontra as instruções e os controles em uma sequência compreensível. A quantidade visual de colunas não cria comandos próprios de navegação.

<!-- id: layout-ordem-conteudo.block.40 -->
### Leitor de telas no celular

<!-- id: layout-ordem-conteudo.block.44 -->
No modo padrão de navegação sequencial, `deslizar o dedo para a direita` avança e `deslizar o dedo para a esquerda` retorna pelo conteúdo. `Tocar duas vezes` ativa o controle selecionado. Os gestos podem variar conforme o leitor e sua configuração.

<!-- id: layout-ordem-conteudo.block.45 -->
Explorar pelo toque localiza o conteúdo na posição tocada. Mesmo quando as colunas se empilham, a leitura sequencial mantém instruções, conteúdo e ações relacionados.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: layout-ordem-conteudo.block.46 -->

<!-- id: layout-ordem-conteudo.bdd -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: layout-ordem-conteudo.block.47 -->
### Cenário: Considerando uma página com conteúdo e controles organizados em colunas

<!-- id: layout-ordem-conteudo.block.48 -->
#### Navegação por teclado

1. <!-- id: layout-ordem-conteudo.block.49 --> DADA uma página com controles em mais de um agrupamento
2. <!-- id: layout-ordem-conteudo.block.52 --> QUANDO uso `Tab` e `Shift + Tab` para percorrer os controles
3. <!-- id: layout-ordem-conteudo.block.53 --> ENTÃO VEJO o foco em uma sequência que preserva o sentido da tarefa e consigo reconhecer o contexto de cada controle

<!-- id: layout-ordem-conteudo.block.55 -->
#### Leitor de telas para desktop

1. <!-- id: layout-ordem-conteudo.block.56 --> DADA uma página com instruções, campos e ações relacionados
2. <!-- id: layout-ordem-conteudo.block.57 --> QUANDO percorro o conteúdo com os comandos de leitura do leitor de telas
3. <!-- id: layout-ordem-conteudo.block.58 --> ENTÃO OUÇO as informações em uma sequência compreensível, sem intercalar trechos de grupos independentes

<!-- id: layout-ordem-conteudo.block.60 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: layout-ordem-conteudo.block.61 --> DADO o layout reorganizado em uma coluna no celular
2. <!-- id: layout-ordem-conteudo.block.62 --> QUANDO percorro o conteúdo com leitor de telas e ativo os controles necessários
3. <!-- id: layout-ordem-conteudo.block.63 --> ENTÃO OUÇO instruções, conteúdo e ações relacionados em ordem compreensível e consigo concluir a tarefa

<!-- id: layout-ordem-conteudo.block.65 -->
#### Reorganização com zoom

1. <!-- id: layout-ordem-conteudo.block.66 --> DADA uma área de leitura vertical com conteúdo que não exige duas dimensões
2. <!-- id: layout-ordem-conteudo.block.67 --> QUANDO aumento o zoom até uma largura equivalente a 320 pixels CSS
3. <!-- id: layout-ordem-conteudo.block.68 --> ENTÃO VEJO o conteúdo reorganizado sem cortes ou sobreposições, uso todas as ações e não preciso rolar em duas direções para ler

<!-- id: layout-ordem-conteudo.block.70 -->
#### Crescimento do conteúdo e preservação de contexto

1. <!-- id: layout-ordem-conteudo.block.71 --> DADO um campo com foco em uma página com barra de ações fixa
2. <!-- id: layout-ordem-conteudo.block.72 --> QUANDO uma mensagem de erro aparece ou o texto passa a ocupar mais linhas
3. <!-- id: layout-ordem-conteudo.block.73 --> ENTÃO VEJO o campo e sua mensagem sem sobreposição e o foco permanece no controle esperado

<!-- id: considerations -->
## Pontos de atenção

<!-- id: layout-ordem-conteudo.block.75 -->

<!-- id: layout-ordem-conteudo.block.76 -->
Comece pela sequência sem estilos. Flexbox e Grid são recursos para distribuir elementos; sua escolha não determina, por si só, a ordem de leitura ou uma experiência acessível.

<!-- id: layout-ordem-conteudo.block.77 -->
Na implementação, a ordem do DOM deve preservar o sentido da leitura. Recursos visuais como order, posicionamento de áreas e inversão de linhas podem alterar a apresentação sem alterar a sequência oferecida às tecnologias assistivas.

<!-- id: layout-ordem-conteudo.block.78 -->
Evite tabindex positivo para tentar corrigir uma sequência visual incoerente. Resolva a estrutura e o layout e verifique a navegação real por teclado e leitor de telas.

<!-- id: layout-ordem-conteudo.block.79 -->
Não é obrigatório impor uma única ordem a grupos independentes. A sequência deve preservar significado e operação; dentro de um processo, instruções, etapas e ações relacionadas precisam manter sua relação.

<!-- id: layout-ordem-conteudo.block.80 -->
Verifique o conteúdo comum a 320 pixels CSS de largura e o texto ampliado a 200%. O ensaio de refluxo também pode ser feito em uma janela de 1280 pixels CSS com zoom de 400%. São verificações distintas; o desenho sozinho não comprova o resultado.

<!-- id: layout-ordem-conteudo.block.81 -->
Mapas e tabelas podem exigir duas dimensões por seu significado. A exceção não se estende automaticamente à página inteira nem a todo o texto dentro dessas áreas.

<!-- id: layout-ordem-conteudo.block.82 -->
Confirme que elementos fixos não ocultem controles em foco. Ao inserir ou remover conteúdo, preserve o foco e o contexto; só mova o foco quando a interação justificar esse comportamento.

<!-- id: references -->
## Referências

<!-- id: layout-ordem-conteudo.block.83 -->

<!-- id: layout-ordem-conteudo.block.84 -->
Referências adicionais sobre componentes do tipo Layout e ordem do conteúdo.

<!-- id: layout-ordem-conteudo.block.86 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: layout-ordem-conteudo.block.89 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: layout-ordem-conteudo.block.95 -->
[W3C — Understanding Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)

<!-- id: layout-ordem-conteudo.block.99 -->
[W3C — Understanding Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

<!-- id: layout-ordem-conteudo.block.103 -->
[W3C — Understanding Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

<!-- id: layout-ordem-conteudo.block.107 -->
[W3C — Understanding Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

<!-- id: layout-ordem-conteudo.block.109 -->
[Regiões da página](https://magoo.cc/componentes/estrutura/regioes-pagina.html)

<!-- id: layout-ordem-conteudo.block.111 -->
[Títulos (Cabeçalhos)](https://magoo.cc/componentes/estrutura/titulos.html)
