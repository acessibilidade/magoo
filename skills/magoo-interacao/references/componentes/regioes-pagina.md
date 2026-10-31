# Regiões da página

- ID: `regioes-pagina`
- Categoria: estrutura
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/estrutura/regioes-pagina.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Organizam cabeçalho, conteúdo principal, navegações, conteúdo complementar e rodapé para orientar a leitura e o acesso à página.

## Design de interação

### Guia rápido para designers

#### Quando usar

Use para definir a estrutura de uma página e distinguir conteúdo principal de navegação e informações complementares.

#### O que desenhar

Mostre as regiões, sua ordem, nomes quando necessários, os controles internos e o link para pular ao conteúdo.

#### Como se comporta

Regiões orientam a leitura e a navegação estrutural. A interação acontece nos controles; uma região não recebe foco apenas por existir.

#### O que documentar no Figma

Defina a finalidade e os limites de cada região, nomes de navegações repetidas, destino do link de salto e a ordem em telas pequenas.

#### Como revisar

No desenho, confira ordem, agrupamentos e acesso ao conteúdo. Na implementação, verifique regiões reconhecidas, leitura, link de salto e controles por teclado e leitor de telas.

### Cabeçalho da página

1. O cabeçalho ajuda a reconhecer o site e acessar as opções globais? Identidade, busca e navegação têm finalidades distinguíveis?
2. Um cabeçalho de artigo ou card é distinguido do cabeçalho global? Não atribua a função de região global a todo bloco que parece um cabeçalho.

### Conteúdo principal

1. É possível reconhecer onde começa a informação ou tarefa principal? O título da página e as instruções pertencem a uma sequência compreensível?
2. O link Pular para o conteúdo leva ao início útil da tarefa, sem exigir percorrer o cabeçalho repetido? Seu destino permanece visível quando há cabeçalhos fixos?

### Navegações e regiões repetidas

1. Navegação principal, navegação local e índice da página têm propósitos claros? Quando existem várias navegações diferentes, seus nomes permitem distingui-las?
2. Duas navegações com os mesmos links e a mesma finalidade mantêm um nome consistente? Evite criar nomes diferentes apenas por uma estar no início e outra no fim.

### Conteúdo complementar e outras regiões

1. A área complementar apoia o conteúdo principal e continua compreensível isoladamente? Uma coluna lateral puramente visual não define essa finalidade.
2. O agrupamento tem importância suficiente para ser localizado como região? Evite transformar cada card ou bloco visual em mais uma região.

### Rodapé e adaptação do layout

1. O rodapé reúne informações institucionais e acessos complementares reconhecíveis? Se incluir navegação, ela mantém um nome coerente com sua finalidade?
2. Ao mudar para uma coluna, a ordem visual continua coerente com leitura e foco? Regiões fixas não encobrem conteúdo nem controles com ampliação?

## Métodos de Interação

### Mouse e toque

Ler e percorrer a página permite reconhecer os agrupamentos. Clicar ou `tocar` em links e botões executa as ações desses controles; o fundo de uma região estrutural não executa uma ação.

### Teclado

`Tab` e `Shift + Tab` percorrem os links, botões e campos na ordem da página; não percorrem cada região estática como uma parada de foco.

Ao chegar ao link Pular para o conteúdo, `Enter` leva o foco ao destino principal. O próximo `Tab` permite continuar pelos controles a partir desse ponto, sem retornar ao cabeçalho repetido.

Navegar por controles internos mantém os comandos próprios de cada componente. Não existe um atalho universal de teclado do navegador para saltar entre todas as regiões.

### Leitor de telas no computador

Usar a lista de regiões ou os comandos de navegação estrutural do leitor de telas permite localizar conteúdo principal, navegações e outras regiões disponíveis pelo tipo e nome. Os comandos dependem do leitor e de seu modo de navegação.

Escolher uma região nessa lista leva a leitura ao agrupamento correspondente. Em seguida, os comandos de leitura ou de controles permitem percorrer seu conteúdo; não é necessário focar o contêiner com `Tab`.

### Leitor de telas no celular

No VoiceOver, selecionar regiões no rotor, quando a opção estiver disponível, permite navegar entre elas. No TalkBack, os controles de leitura e comandos estruturais dependem da versão e configuração; use o recurso de regiões quando disponível.

No modo padrão de exploração de controles, `deslizar o dedo` percorre o conteúdo e `tocar duas vezes` ativa o link ou botão focado. Ativar Pular para o conteúdo leva ao destino principal; percorrer uma região não a transforma em botão.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página organizada em regiões

#### Navegação por teclado

1. QUANDO uso `Tab` a partir do início da página
2. VEJO o link para pular ao conteúdo com foco visível
3. ENTÃO, quando pressiono `Enter`, VEJO que o foco chega ao destino principal e o próximo `Tab` continua a navegação a partir desse ponto

#### Leitor de telas para desktop

1. QUANDO abro a lista de regiões ou uso os comandos estruturais do leitor de telas
2. OUÇO ou percebo conteúdo principal, navegações e outras regiões pelo tipo e nome quando necessário
3. ENTÃO, quando escolho uma região, OUÇO ou percebo seu conteúdo e consigo continuar a leitura sem uma parada de foco artificial em cada contêiner

#### Leitor de telas para dispositivos móveis

1. QUANDO exploro a página com leitor de telas no celular e uso os recursos estruturais disponíveis
2. OUÇO ou percebo as regiões em uma ordem compreensível e identifico o conteúdo principal
3. ENTÃO, quando uso `tocar duas vezes` para ativar o link Pular para o conteúdo no modo padrão, OUÇO ou percebo o destino e continuo a tarefa sem repetir toda a navegação

#### Regiões repetidas

1. DADAS duas navegações com finalidades diferentes
2. QUANDO consulto a lista de regiões do leitor de telas
3. ENTÃO identifico nomes que distinguem as finalidades; navegações de conteúdo e finalidade idênticos mantêm nomes consistentes

## Pontos de atenção

Prefira elementos HTML correspondentes à finalidade: `header`, `main`, `nav`, `aside` e `footer`. Um agrupamento genérico só precisa ser uma região adicional quando isso ajuda a localizar conteúdo relevante.

O cabeçalho e o rodapé globais têm contexto diferente de `header` e `footer` internos a artigo ou seção. Nem todo cabeçalho ou rodapé interno é um marco global da página.

Mantenha um conteúdo principal ativo por documento. Documentos incorporados podem ter sua própria estrutura. Não crie vários marcos principais apenas para separar colunas visuais.

Navegações diferentes precisam de nomes que as distingam. Navegações com os mesmos links e finalidade podem compartilhar o nome. Evite repetir o tipo no rótulo, como Navegação principal navegação.

Uma `section` com nome acessível pode ser exposta como região. Use `aria-labelledby` para aproveitar um título visível quando apropriado; não nomeie cada bloco apenas para aumentar a quantidade de regiões.

O link de salto precisa de um destino existente e gerenciamento de foco verificado no navegador. Quando necessário, `tabindex="-1"` permite foco programático no destino sem adicioná-lo à sequência de `Tab`.

Regiões e cabeçalhos oferecem formas complementares de navegação. A ordem de leitura não deve contradizer a ordem visual, e conteúdo recolhido não deve deixar controles ocultos no percurso do foco.

## Referências

Referências adicionais sobre componentes do tipo Regiões da página.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

[W3C WAI — Page Regions](https://www.w3.org/WAI/tutorials/page-structure/regions/)

[W3C APG — Landmark Regions](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/)

[W3C — Technique G1: Skip to main content](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)

[Títulos (Cabeçalhos)](https://magoo.cc/componentes/estrutura/titulos.html)

[Menu](https://magoo.cc/componentes/navegacao/menu.html)
