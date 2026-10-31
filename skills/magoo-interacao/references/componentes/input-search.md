# Input "search"

- ID: `input-search`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/input-search.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite inserir termos para pesquisar conteúdo.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para informar termos e encontrar conteúdo.

#### O que desenhar

Mostre rótulo, campo, resultados, filtros e controles de limpeza. Inclua estado inicial, carregamento, ausência de correspondências e falha com nova tentativa.

#### Como se comporta

Defina se a busca ocorre ao enviar ou durante a digitação. Limpar esvazia o campo sem enviar e permite continuar editando.

#### O que documentar no Figma

Registre alcance da busca, envio ou atualização dinâmica, filtros, paginação e limpeza. Defina como preservar a consulta e comunicar resultados sem mover o foco inesperadamente.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao projetar componentes do tipo Input "search".

Avalie cada orientação conforme o contexto de uso do componente.

### Projetando para a "não interação"

1. O rótulo permanece visível e explica a finalidade do campo?
2. Instruções, obrigatoriedade e limites estão disponíveis antes da entrada?
3. Estados vazio, preenchido, inválido, desabilitado e somente leitura são distinguíveis sem depender apenas de cor?

### Projetando para uso com mouse

1. Clicar no campo ou no rótulo associado posiciona o foco para digitar?
2. O foco e os controles associados têm feedback visual perceptível?

### Projetando para uso com gestos

1. A área de toque permite selecionar o campo e seus controles sem acionamentos acidentais?
2. O teclado virtual e a ampliação permitem continuar vendo e editando o campo?

### Projetando para uso com teclado

1. `Tab` e `Shift + Tab` percorrem os controles na ordem da interface?
2. É possível editar e selecionar texto com os comandos nativos, sem prender o foco?

### Projetando para uso com leitor de telas

1. Nome, tipo, obrigatoriedade, instruções e erros são apresentados de forma compreensível?
2. O rótulo está associado ao campo e permanece disponível depois de preencher?

### Ampliação editorial — padrões e decisões de interação

Adaptação editorial do Magoo: complementa as orientações anteriores com decisões de desenho, documentação e revisão. As referências apoiam a adaptação; estes cenários não representam testes executados nem certificação.

#### Do campo à experiência de busca

Defina onde a busca procura: site inteiro, seção ou conjunto de registros. Mantenha o termo consultado visível e diferencie o texto em edição da consulta cujos resultados estão sendo exibidos.

Escolha entre envio explícito e atualização durante a digitação. No envio explícito, `Enter` e o botão Buscar executam a mesma pesquisa. Na atualização dinâmica, documente a pausa antes da consulta e impeça que uma resposta antiga substitua os resultados de uma consulta mais recente.

Sugestões de busca e resultados são conjuntos diferentes. Se houver autocomplete, documente quando as sugestões aparecem e se confirmar uma delas apenas preenche o campo ou também executa a busca. Adote um padrão de combobox apropriado à interação.

#### Resultados, filtros e recuperação

Desenhe estado inicial, carregamento, resultados, ausência de correspondências e falha de consulta. Uma falha não deve parecer uma busca sem resultados. Ofereça tentar novamente preservando termo e filtros.

Mostre quantidade de resultados, termo pesquisado e filtros aplicados. Em ausência de resultados, permita editar o termo ou remover filtros. Defina se filtros atualizam imediatamente ou dependem de Aplicar, e o efeito sobre a paginação.

Diferencie Limpar busca, Remover filtro e Limpar todos os filtros. Documente se limpar o campo também atualiza os resultados. Ao voltar de um resultado, preserve consulta, filtros e página quando essa continuidade fizer parte do fluxo.

#### Revisão do desenho e da implementação

No desenho, confira se cada resultado apresenta título e contexto suficientes para escolher um destino, inclusive em telas pequenas. Na implementação, verifique busca por teclado, filtros, limpeza e recuperação de falhas, mantendo foco previsível. Em atualização na mesma página, comunique um resumo após a resposta, sem anunciar cada tecla ou reler toda a lista.

## Métodos de Interação

Escopo: os métodos básicos abaixo descrevem o campo de busca. Resultados, filtros e recuperação de falhas são aprofundados na ampliação editorial da aba Design de interação.

O campo usa type="search" e apresenta um rótulo que explica o que será pesquisado.

### Interação com mouse

1. Clicar no campo ou no rótulo associado coloca o foco no campo.
2. Selecionar, editar, copiar e colar segue o comportamento nativo do campo.

### Interação com teclado

1. `Tab` move o foco para o campo; `Shift + Tab` retorna ao controle anterior.
2. Digitação insere texto; `setas`, `Home`, `End` e comandos de seleção e edição seguem a plataforma.
3. `Enter` segue a ação de envio definida para o formulário; o campo não cria uma nova linha.

### Interação com gestos

1. `Tocar` no campo ou no rótulo permite editar com o teclado virtual.
2. A seleção e edição de texto seguem os gestos disponíveis na plataforma.

### Interação com teclado (ou gestos) + leitor de telas

1. Ao navegar até o campo, o leitor apresenta seu rótulo e tipo, além de estados e instruções associados.
2. Erros são associados ao campo e explicam como corrigir a informação; o valor digitado é preservado.

### Acionar e limpar a busca

1. `Enter` envia a pesquisa quando esse for o modo definido; o botão "Buscar", quando presente, também permite enviá-la.
2. O controle "Limpar busca", quando presente, esvazia o campo sem enviar o formulário e permite continuar a edição.
3. Comunicar a quantidade de resultados ou a ausência deles sem deslocar o foco inesperadamente.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Input "search"

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para o campo
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando digito, seleciono ou edito o conteúdo com os comandos nativos
4. VEJO que o valor do campo é atualizado
5. E, quando uso `Tab` ou `Shift + Tab`, VEJO que o foco segue a ordem da página, sem ficar preso no campo

#### Leitor de telas para desktop

1. QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para o campo, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO que o componente é um campo de busca.
   - OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. ENTÃO, quando digito ou edito o conteúdo com os comandos nativos
3. OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no campo, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO que o componente é um campo de busca.
   - OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o campo e editar seu conteúdo
3. OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

#### Validação da entrada

1. QUANDO uma entrada é rejeitada por uma regra de validação informada
2. VEJO uma mensagem associada ao campo que explica como corrigir a informação
3. E, quando navego até o campo com leitor de telas, OUÇO a indicação de erro e a orientação associada
4. ENTÃO, quando volto a editar, VEJO que o valor foi preservado para correção

#### Acionamento da busca

1. QUANDO informo um termo e aciono a busca conforme o modo definido
2. VEJO os resultados ou uma mensagem de ausência de resultados
3. E, quando uso leitor de telas, OUÇO ou percebo o retorno da busca sem deslocamento inesperado do foco

### Cenários complementares — ampliação editorial

#### Busca dinâmica: respostas fora de ordem

1. DADAS duas consultas sucessivas
2. QUANDO a resposta da primeira chega depois da segunda
3. ENTÃO os resultados continuam correspondendo à consulta mais recente e o foco permanece previsível.

#### Filtros sem correspondências

1. DADA uma busca sem correspondências com filtros aplicados
2. QUANDO removo um filtro e aplico a alteração conforme o fluxo definido
3. ENTÃO os resultados e sua quantidade são atualizados e termo e filtros restantes são preservados.

#### Falha de consulta e nova tentativa

1. DADA uma falha na consulta
2. QUANDO aciono Tentar novamente
3. ENTÃO a busca usa o termo e os filtros preservados e apresenta seu resultado sem confundir falha com ausência de correspondências.

## Pontos de atenção

1. Usar um rótulo persistente associado ao input. Placeholder é uma dica complementar e não substitui o rótulo.
2. Associar instruções e erros ao campo, por exemplo com aria-describedby, e marcar aria-invalid quando houver erro.
3. Informar a obrigatoriedade e usar required quando necessário. Não comunicar erros apenas por cor.
4. Manter foco visível e garantir contraste e área de interação adequados.
5. Definir se a busca ocorre ao enviar ou durante a digitação. Em busca dinâmica, preservar o foco e comunicar os resultados sem anunciar cada tecla; permitir limpar e tratar resultados vazios.

## Referências

Referências adicionais sobre componentes do tipo Input "search".

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Documentação do campo

- [MDN — input type="search"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/search)

### Design System

- [Carbon — Search](https://www.carbondesignsystem.com/building-blocks/core/components/search/guidelines) — Componente específico para entrada de termos de busca.
- [USWDS — Search](https://designsystem.digital.gov/components/search/) — Campo e botão para acionar uma busca.

### Referências da ampliação editorial

[USWDS — Search](https://designsystem.digital.gov/components/search/)

[W3C APG — Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
