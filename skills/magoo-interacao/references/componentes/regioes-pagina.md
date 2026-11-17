# Regiões da página

- ID: `regioes-pagina`
- Categoria: estrutura
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/estrutura/regioes-pagina.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organizam cabeçalho, conteúdo principal, navegações, conteúdo complementar e rodapé para orientar a leitura e o acesso à página.

<!-- id: interaction-design -->
## Design de interação

<!-- id: regioes-pagina.designer-guide.frame -->
<!-- id: regioes-pagina.designer-guide.1 -->
### Guia rápido para designers

<!-- id: regioes-pagina.designer-guide.heading-2 -->
#### Quando usar

<!-- id: regioes-pagina.designer-guide.text-2 -->
Use para definir a estrutura de uma página e distinguir conteúdo principal de navegação e informações complementares.

<!-- id: regioes-pagina.designer-guide.heading-3 -->
#### O que desenhar

<!-- id: regioes-pagina.designer-guide.text-3 -->
Mostre as regiões, sua ordem, nomes quando necessários, os controles internos e o link para pular ao conteúdo.

<!-- id: regioes-pagina.designer-guide.heading-4 -->
#### Como se comporta

<!-- id: regioes-pagina.designer-guide.text-4 -->
Regiões orientam a leitura e a navegação estrutural. A interação acontece nos controles; uma região não recebe foco apenas por existir.

<!-- id: regioes-pagina.designer-guide.heading-5 -->
#### O que documentar no Figma

<!-- id: regioes-pagina.designer-guide.text-5 -->
Defina a finalidade e os limites de cada região, nomes de navegações repetidas, destino do link de salto e a ordem em telas pequenas.

<!-- id: regioes-pagina.designer-guide.heading-6 -->
#### Como revisar

<!-- id: regioes-pagina.designer-guide.text-6 -->
No desenho, confira ordem, agrupamentos e acesso ao conteúdo. Na implementação, verifique regiões reconhecidas, leitura, link de salto e controles por teclado e leitor de telas.

<!-- id: regioes-pagina.block.13 -->
### Cabeçalho da página

1. <!-- id: regioes-pagina.block.14 --> O cabeçalho ajuda a reconhecer o site e acessar as opções globais? Identidade, busca e navegação têm finalidades distinguíveis?
2. <!-- id: regioes-pagina.block.15 --> Um cabeçalho de artigo ou card é distinguido do cabeçalho global? Não atribua a função de região global a todo bloco que parece um cabeçalho.

<!-- id: regioes-pagina.block.17 -->
### Conteúdo principal

1. <!-- id: regioes-pagina.block.18 --> É possível reconhecer onde começa a informação ou tarefa principal? O título da página e as instruções pertencem a uma sequência compreensível?
2. <!-- id: regioes-pagina.block.19 --> O link Pular para o conteúdo leva ao início útil da tarefa, sem exigir percorrer o cabeçalho repetido? Seu destino permanece visível quando há cabeçalhos fixos?

<!-- id: regioes-pagina.block.21 -->
### Navegações e regiões repetidas

1. <!-- id: regioes-pagina.block.22 --> Navegação principal, navegação local e índice da página têm propósitos claros? Quando existem várias navegações diferentes, seus nomes permitem distingui-las?
2. <!-- id: regioes-pagina.block.23 --> Duas navegações com os mesmos links e a mesma finalidade mantêm um nome consistente? Evite criar nomes diferentes apenas por uma estar no início e outra no fim.

<!-- id: regioes-pagina.block.25 -->
### Conteúdo complementar e outras regiões

1. <!-- id: regioes-pagina.block.26 --> A área complementar apoia o conteúdo principal e continua compreensível isoladamente? Uma coluna lateral puramente visual não define essa finalidade.
2. <!-- id: regioes-pagina.block.27 --> O agrupamento tem importância suficiente para ser localizado como região? Evite transformar cada card ou bloco visual em mais uma região.

<!-- id: regioes-pagina.block.29 -->
### Rodapé e adaptação do layout

1. <!-- id: regioes-pagina.block.30 --> O rodapé reúne informações institucionais e acessos complementares reconhecíveis? Se incluir navegação, ela mantém um nome coerente com sua finalidade?
2. <!-- id: regioes-pagina.block.31 --> Ao mudar para uma coluna, a ordem visual continua coerente com leitura e foco? Regiões fixas não encobrem conteúdo nem controles com ampliação?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: regioes-pagina.block.33 -->

<!-- id: regioes-pagina.block.34 -->
### Mouse e toque

<!-- id: regioes-pagina.block.35 -->
Ler e percorrer a página permite reconhecer os agrupamentos. Clicar ou `tocar` em links e botões executa as ações desses controles; o fundo de uma região estrutural não executa uma ação.

<!-- id: regioes-pagina.block.37 -->
### Teclado

<!-- id: regioes-pagina.block.38 -->
`Tab` e `Shift + Tab` percorrem os links, botões e campos na ordem da página; não percorrem cada região estática como uma parada de foco.

<!-- id: regioes-pagina.block.41 -->
Ao chegar ao link Pular para o conteúdo, `Enter` leva o foco ao destino principal. O próximo `Tab` permite continuar pelos controles a partir desse ponto, sem retornar ao cabeçalho repetido.

<!-- id: regioes-pagina.block.44 -->
Navegar por controles internos mantém os comandos próprios de cada componente. Não existe um atalho universal de teclado do navegador para saltar entre todas as regiões.

<!-- id: regioes-pagina.block.45 -->
### Leitor de telas no computador

<!-- id: regioes-pagina.block.46 -->
Usar a lista de regiões ou os comandos de navegação estrutural do leitor de telas permite localizar conteúdo principal, navegações e outras regiões disponíveis pelo tipo e nome. Os comandos dependem do leitor e de seu modo de navegação.

<!-- id: regioes-pagina.block.47 -->
Escolher uma região nessa lista leva a leitura ao agrupamento correspondente. Em seguida, os comandos de leitura ou de controles permitem percorrer seu conteúdo; não é necessário focar o contêiner com `Tab`.

<!-- id: regioes-pagina.block.49 -->
### Leitor de telas no celular

<!-- id: regioes-pagina.block.50 -->
No VoiceOver, selecionar regiões no rotor, quando a opção estiver disponível, permite navegar entre elas. No TalkBack, os controles de leitura e comandos estruturais dependem da versão e configuração; use o recurso de regiões quando disponível.

<!-- id: regioes-pagina.block.51 -->
No modo padrão de exploração de controles, `deslizar o dedo` percorre o conteúdo e `tocar duas vezes` ativa o link ou botão focado. Ativar Pular para o conteúdo leva ao destino principal; percorrer uma região não a transforma em botão.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: regioes-pagina.gherkin-intro.0 -->

<!-- id: regioes-pagina.gherkin-intro.1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: regioes-pagina.block.54 -->
### Cenário: Considerando que estou em uma página organizada em regiões

<!-- id: regioes-pagina.block.55 -->
#### Navegação por teclado

1. <!-- id: regioes-pagina.block.56 --> QUANDO uso `Tab` a partir do início da página
2. <!-- id: regioes-pagina.block.58 --> VEJO o link para pular ao conteúdo com foco visível
3. <!-- id: regioes-pagina.block.59 --> ENTÃO, quando pressiono `Enter`, VEJO que o foco chega ao destino principal e o próximo `Tab` continua a navegação a partir desse ponto

<!-- id: regioes-pagina.block.63 -->
#### Leitor de telas para desktop

1. <!-- id: regioes-pagina.block.64 --> QUANDO abro a lista de regiões ou uso os comandos estruturais do leitor de telas
2. <!-- id: regioes-pagina.block.65 --> OUÇO ou percebo conteúdo principal, navegações e outras regiões pelo tipo e nome quando necessário
3. <!-- id: regioes-pagina.block.66 --> ENTÃO, quando escolho uma região, OUÇO ou percebo seu conteúdo e consigo continuar a leitura sem uma parada de foco artificial em cada contêiner

<!-- id: regioes-pagina.block.68 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: regioes-pagina.block.69 --> QUANDO exploro a página com leitor de telas no celular e uso os recursos estruturais disponíveis
2. <!-- id: regioes-pagina.block.70 --> OUÇO ou percebo as regiões em uma ordem compreensível e identifico o conteúdo principal
3. <!-- id: regioes-pagina.block.71 --> ENTÃO, quando uso `tocar duas vezes` para ativar o link Pular para o conteúdo no modo padrão, OUÇO ou percebo o destino e continuo a tarefa sem repetir toda a navegação

<!-- id: regioes-pagina.block.74 -->
#### Regiões repetidas

1. <!-- id: regioes-pagina.block.75 --> DADAS duas navegações com finalidades diferentes
2. <!-- id: regioes-pagina.block.76 --> QUANDO consulto a lista de regiões do leitor de telas
3. <!-- id: regioes-pagina.block.77 --> ENTÃO identifico nomes que distinguem as finalidades; navegações de conteúdo e finalidade idênticos mantêm nomes consistentes

<!-- id: considerations -->
## Pontos de atenção

<!-- id: regioes-pagina.block.79 -->

<!-- id: regioes-pagina.block.80 -->
Prefira elementos HTML correspondentes à finalidade: `header`, `main`, `nav`, `aside` e `footer`. Um agrupamento genérico só precisa ser uma região adicional quando isso ajuda a localizar conteúdo relevante.

<!-- id: regioes-pagina.block.86 -->
O cabeçalho e o rodapé globais têm contexto diferente de `header` e `footer` internos a artigo ou seção. Nem todo cabeçalho ou rodapé interno é um marco global da página.

<!-- id: regioes-pagina.block.89 -->
Mantenha um conteúdo principal ativo por documento. Documentos incorporados podem ter sua própria estrutura. Não crie vários marcos principais apenas para separar colunas visuais.

<!-- id: regioes-pagina.block.90 -->
Navegações diferentes precisam de nomes que as distingam. Navegações com os mesmos links e finalidade podem compartilhar o nome. Evite repetir o tipo no rótulo, como Navegação principal navegação.

<!-- id: regioes-pagina.block.91 -->
Uma `section` com nome acessível pode ser exposta como região. Use `aria-labelledby` para aproveitar um título visível quando apropriado; não nomeie cada bloco apenas para aumentar a quantidade de regiões.

<!-- id: regioes-pagina.block.94 -->
O link de salto precisa de um destino existente e gerenciamento de foco verificado no navegador. Quando necessário, `tabindex="-1"` permite foco programático no destino sem adicioná-lo à sequência de `Tab`.

<!-- id: regioes-pagina.block.97 -->
Regiões e cabeçalhos oferecem formas complementares de navegação. A ordem de leitura não deve contradizer a ordem visual, e conteúdo recolhido não deve deixar controles ocultos no percurso do foco.

<!-- id: references -->
## Referências

<!-- id: regioes-pagina.block.98 -->

<!-- id: regioes-pagina.references-standard.1 -->
Referências adicionais sobre componentes do tipo Regiões da página.

<!-- id: regioes-pagina.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: regioes-pagina.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: regioes-pagina.block.101 -->
[W3C WAI — Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/)

<!-- id: regioes-pagina.block.104 -->
[W3C APG — Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)

<!-- id: regioes-pagina.block.107 -->
[W3C — Technique G1: Skip to main content](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)

<!-- id: regioes-pagina.block.110 -->
[Títulos (Cabeçalhos)](https://magoo.cc/componentes/estrutura/titulos.html)

<!-- id: regioes-pagina.block.113 -->
[Menu](https://magoo.cc/componentes/navegacao/menu.html)
