# Layout e ordem do conteúdo

- ID: `layout-ordem-conteudo`
- Categoria: estrutura
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/estrutura/layout-ordem-conteudo.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organiza agrupamentos, leitura e navegação em diferentes tamanhos de tela, preservando relações, contexto e acesso aos controles.

## Design de interação

### Guia rápido para designers

#### Quando usar

Use ao organizar uma página em colunas ou agrupamentos e ao definir como ela se adapta a telas pequenas, texto ampliado e zoom.

#### O que desenhar

Mostre a sequência do conteúdo e dos controles em telas grandes e pequenas. Inclua textos longos, mensagens de erro, conteúdo expandido e elementos fixos.

#### Como se comporta

Colunas podem se empilhar e espaços podem mudar sem romper relações ou perder conteúdo. Ler e percorrer os controles continua fazendo sentido em cada apresentação.

#### O que documentar no Figma

Anote a ordem de leitura e de foco, os agrupamentos, as mudanças de layout e o tratamento de conteúdo longo. Diferencie o que aparece no desenho do que precisa ser verificado no navegador.

#### Como revisar

No desenho, acompanhe a sequência e as relações entre instruções, campos e ações. Na implementação, confira leitura, teclado, zoom, ampliação de texto e ausência de sobreposições.

### Sequência e agrupamentos

1. As informações aparecem em uma sequência que permite compreender a tarefa? Instruções precedem os campos ou ações a que se referem?
2. Proximidade, títulos e espaçamento deixam claros os agrupamentos? A relação continua compreensível quando as colunas se empilham?
3. A ordem visual sugere uma sequência diferente da leitura ou do foco? Evite saltos que dificultem associar um controle ao seu contexto. Mais de uma ordem pode fazer sentido quando os grupos são independentes.

### Adaptação e conteúdo variável

1. Defina como colunas se reorganizam sem esconder informação ou exigir uma orientação específica do dispositivo, salvo quando essencial.
2. Preveja textos traduzidos, nomes extensos e mensagens de erro. Os blocos podem crescer sem cortar texto, sobrepor ações ou alterar a sequência?
3. Em uma área de leitura vertical com largura equivalente a 320 pixels CSS, o conteúdo comum deve se reorganizar sem perda de informação ou função e sem rolagem em duas direções. Tabelas e mapas podem exigir um tratamento próprio quando duas dimensões forem essenciais.

### Contexto e elementos fixos

1. Cabeçalhos fixos, barras de ações e avisos deixam o conteúdo e o controle em foco visíveis e utilizáveis? Considere o espaço ocupado também com zoom.
2. Ao abrir detalhes, inserir mensagens ou mudar o layout, a pessoa consegue continuar de onde estava? Uma reorganização visual não deve deslocar o foco sem motivo.

## Métodos de Interação

### Mouse e toque

Percorrer a página com rolagem permite acompanhar o conteúdo na sequência apresentada. `Clicar` ou `tocar` em um link, botão ou campo usa o comportamento desse controle; uma coluna ou área vazia não é um controle.

Usar o zoom do navegador ou ampliar a visualização pelos recursos disponíveis permite ler o conteúdo em tamanho maior. Quando o layout se reorganiza, os agrupamentos e as ações continuam acessíveis.

### Teclado

`Tab` avança entre controles e `Shift + Tab` retorna. A sequência preserva o sentido da tarefa; textos, colunas e agrupamentos estáticos não entram no percurso apenas por existirem.

`Enter` ativa links e os comandos próprios de cada controle permitem usá-lo. Ao sair de um grupo, a navegação continua pelo próximo controle da sequência, sem saltar para uma área sem relação.

Com a página ou uma área rolável ativa, os comandos de rolagem permitem acompanhar o conteúdo sem mudar de controle:

- `Setas direcionais` rolam o conteúdo em pequenos incrementos na direção correspondente, quando há conteúdo fora da área visível.
- `Barra de espaço` ou `Page Down` rolam aproximadamente o equivalente a uma tela para baixo.
- `Shift + Barra de espaço` ou `Page Up` rolam aproximadamente o equivalente a uma tela para cima.

Quando o foco está em um campo ou componente que utiliza essas teclas, elas podem editar o conteúdo ou operar esse controle em vez de rolar a página. Leitores de tela também podem interceptar os comandos conforme o modo de navegação.

### Leitor de telas no computador

Os comandos de leitura percorrem textos, títulos e controles na ordem disponibilizada pela página. Navegar por títulos ou regiões permite localizar um agrupamento e continuar a leitura dentro dele.

Ao percorrer um formulário ou uma lista de ações, a pessoa encontra as instruções e os controles em uma sequência compreensível. A quantidade visual de colunas não cria comandos próprios de navegação.

### Leitor de telas no celular

No modo padrão de navegação sequencial, `deslizar o dedo para a direita` avança e `deslizar o dedo para a esquerda` retorna pelo conteúdo. `Tocar duas vezes` ativa o controle selecionado. Os gestos podem variar conforme o leitor e sua configuração.

Explorar pelo toque localiza o conteúdo na posição tocada. Mesmo quando as colunas se empilham, a leitura sequencial mantém instruções, conteúdo e ações relacionados.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando uma página com conteúdo e controles organizados em colunas

#### Navegação por teclado

1. DADA uma página com controles em mais de um agrupamento
2. QUANDO uso `Tab` e `Shift + Tab` para percorrer os controles
3. ENTÃO VEJO o foco em uma sequência que preserva o sentido da tarefa e consigo reconhecer o contexto de cada controle

#### Leitor de telas para desktop

1. DADA uma página com instruções, campos e ações relacionados
2. QUANDO percorro o conteúdo com os comandos de leitura do leitor de telas
3. ENTÃO OUÇO as informações em uma sequência compreensível, sem intercalar trechos de grupos independentes

#### Leitor de telas para dispositivos móveis

1. DADO o layout reorganizado em uma coluna no celular
2. QUANDO percorro o conteúdo com leitor de telas e ativo os controles necessários
3. ENTÃO OUÇO instruções, conteúdo e ações relacionados em ordem compreensível e consigo concluir a tarefa

#### Reorganização com zoom

1. DADA uma área de leitura vertical com conteúdo que não exige duas dimensões
2. QUANDO aumento o zoom até uma largura equivalente a 320 pixels CSS
3. ENTÃO VEJO o conteúdo reorganizado sem cortes ou sobreposições, uso todas as ações e não preciso rolar em duas direções para ler

#### Crescimento do conteúdo e preservação de contexto

1. DADO um campo com foco em uma página com barra de ações fixa
2. QUANDO uma mensagem de erro aparece ou o texto passa a ocupar mais linhas
3. ENTÃO VEJO o campo e sua mensagem sem sobreposição e o foco permanece no controle esperado

## Pontos de atenção

Comece pela sequência sem estilos. Flexbox e Grid são recursos para distribuir elementos; sua escolha não determina, por si só, a ordem de leitura ou uma experiência acessível.

Na implementação, a ordem do DOM deve preservar o sentido da leitura. Recursos visuais como order, posicionamento de áreas e inversão de linhas podem alterar a apresentação sem alterar a sequência oferecida às tecnologias assistivas.

Evite tabindex positivo para tentar corrigir uma sequência visual incoerente. Resolva a estrutura e o layout e verifique a navegação real por teclado e leitor de telas.

Não é obrigatório impor uma única ordem a grupos independentes. A sequência deve preservar significado e operação; dentro de um processo, instruções, etapas e ações relacionadas precisam manter sua relação.

Verifique o conteúdo comum a 320 pixels CSS de largura e o texto ampliado a 200%. O ensaio de refluxo também pode ser feito em uma janela de 1280 pixels CSS com zoom de 400%. São verificações distintas; o desenho sozinho não comprova o resultado.

Mapas e tabelas podem exigir duas dimensões por seu significado. A exceção não se estende automaticamente à página inteira nem a todo o texto dentro dessas áreas.

Confirme que elementos fixos não ocultem controles em foco. Ao inserir ou remover conteúdo, preserve o foco e o contexto; só mova o foco quando a interação justificar esse comportamento.

## Referências

Referências adicionais sobre componentes do tipo Layout e ordem do conteúdo.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

[W3C — Understanding Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)

[W3C — Understanding Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

[W3C — Understanding Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

[W3C — Understanding Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

[Regiões da página](https://magoo.cc/componentes/estrutura/regioes-pagina.html)

[Títulos (Cabeçalhos)](https://magoo.cc/componentes/estrutura/titulos.html)
