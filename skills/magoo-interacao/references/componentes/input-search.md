# Input "search"

- ID: `input-search`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/input-search.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite inserir termos para pesquisar conteúdo.

<!-- id: interaction-design -->
## Design de interação

<!-- id: input-search.designer-guide.frame -->
<!-- id: input-search.designer-guide.1 -->
### Guia rápido para designers

<!-- id: input-search.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: input-search.designer-guide.3 -->
#### Quando usar

<!-- id: input-search.designer-guide.4 -->
Use para informar termos e encontrar conteúdo.

<!-- id: input-search.designer-guide.5 -->
#### O que desenhar

<!-- id: input-search.designer-guide.6 -->
Mostre rótulo, campo, resultados, filtros e controles de limpeza. Inclua estado inicial, carregamento, ausência de correspondências e falha com nova tentativa.

<!-- id: input-search.designer-guide.7 -->
#### Como se comporta

<!-- id: input-search.designer-guide.8 -->
Defina se a busca ocorre ao enviar ou durante a digitação. Limpar esvazia o campo sem enviar e permite continuar editando.

<!-- id: input-search.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: input-search.designer-guide.10 -->
Registre alcance da busca, envio ou atualização dinâmica, filtros, paginação e limpeza. Defina como preservar a consulta e comunicar resultados sem mover o foco inesperadamente.

<!-- id: input-search.designer-guide.11 -->
#### Como revisar

<!-- id: input-search.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: input-search.designer-guide.13 -->
### Orientações completas

<!-- id: input-search.block.1 -->

<!-- id: input-search.block.2 -->
Questionamentos que devem ser feitos ao projetar componentes do tipo Input "search".

<!-- id: input-search.block.3 -->
Avalie cada orientação conforme o contexto de uso do componente.

<!-- id: input-search.block.4 -->
### Projetando para a "não interação"

1. <!-- id: input-search.block.5 --> O rótulo permanece visível e explica a finalidade do campo?
2. <!-- id: input-search.block.6 --> Instruções, obrigatoriedade e limites estão disponíveis antes da entrada?
3. <!-- id: input-search.block.7 --> Estados vazio, preenchido, inválido, desabilitado e somente leitura são distinguíveis sem depender apenas de cor?

<!-- id: input-search.block.9 -->
### Projetando para uso com mouse

1. <!-- id: input-search.block.10 --> Clicar no campo ou no rótulo associado posiciona o foco para digitar?
2. <!-- id: input-search.block.11 --> O foco e os controles associados têm feedback visual perceptível?

<!-- id: input-search.block.13 -->
### Projetando para uso com gestos

1. <!-- id: input-search.block.14 --> A área de toque permite selecionar o campo e seus controles sem acionamentos acidentais?
2. <!-- id: input-search.block.15 --> O teclado virtual e a ampliação permitem continuar vendo e editando o campo?

<!-- id: input-search.block.17 -->
### Projetando para uso com teclado

1. <!-- id: input-search.block.18 --> `Tab` e `Shift + Tab` percorrem os controles na ordem da interface?
2. <!-- id: input-search.block.19 --> É possível editar e selecionar texto com os comandos nativos, sem prender o foco?

<!-- id: input-search.block.21 -->
### Projetando para uso com leitor de telas

1. <!-- id: input-search.block.22 --> Nome, tipo, obrigatoriedade, instruções e erros são apresentados de forma compreensível?
2. <!-- id: input-search.block.23 --> O rótulo está associado ao campo e permanece disponível depois de preencher?

<!-- id: input-search.extension.1 -->
### Ampliação editorial — padrões e decisões de interação

<!-- id: input-search.extension.2 -->
Adaptação editorial do Magoo: complementa as orientações anteriores com decisões de desenho, documentação e revisão. As referências apoiam a adaptação; estes cenários não representam testes executados nem certificação.

<!-- id: input-search.extension.3 -->
#### Do campo à experiência de busca

<!-- id: input-search.extension.4 -->
Defina onde a busca procura: site inteiro, seção ou conjunto de registros. Mantenha o termo consultado visível e diferencie o texto em edição da consulta cujos resultados estão sendo exibidos.

<!-- id: input-search.extension.5 -->
Escolha entre envio explícito e atualização durante a digitação. No envio explícito, `Enter` e o botão Buscar executam a mesma pesquisa. Na atualização dinâmica, documente a pausa antes da consulta e impeça que uma resposta antiga substitua os resultados de uma consulta mais recente.

<!-- id: input-search.extension.6 -->
Sugestões de busca e resultados são conjuntos diferentes. Se houver autocomplete, documente quando as sugestões aparecem e se confirmar uma delas apenas preenche o campo ou também executa a busca. Adote um padrão de combobox apropriado à interação.

<!-- id: input-search.extension.7 -->
#### Resultados, filtros e recuperação

<!-- id: input-search.extension.8 -->
Desenhe estado inicial, carregamento, resultados, ausência de correspondências e falha de consulta. Uma falha não deve parecer uma busca sem resultados. Ofereça tentar novamente preservando termo e filtros.

<!-- id: input-search.extension.9 -->
Mostre quantidade de resultados, termo pesquisado e filtros aplicados. Em ausência de resultados, permita editar o termo ou remover filtros. Defina se filtros atualizam imediatamente ou dependem de Aplicar, e o efeito sobre a paginação.

<!-- id: input-search.extension.10 -->
Diferencie Limpar busca, Remover filtro e Limpar todos os filtros. Documente se limpar o campo também atualiza os resultados. Ao voltar de um resultado, preserve consulta, filtros e página quando essa continuidade fizer parte do fluxo.

<!-- id: input-search.extension.11 -->
#### Revisão do desenho e da implementação

<!-- id: input-search.extension.12 -->
No desenho, confira se cada resultado apresenta título e contexto suficientes para escolher um destino, inclusive em telas pequenas. Na implementação, verifique busca por teclado, filtros, limpeza e recuperação de falhas, mantendo foco previsível. Em atualização na mesma página, comunique um resumo após a resposta, sem anunciar cada tecla ou reler toda a lista.

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: input-search.block.25 -->

<!-- id: input-search.extension.methods-scope -->
Escopo: os métodos básicos abaixo descrevem o campo de busca. Resultados, filtros e recuperação de falhas são aprofundados na ampliação editorial da aba Design de interação.

<!-- id: input-search.block.26 -->
O campo usa type="search" e apresenta um rótulo que explica o que será pesquisado.

<!-- id: input-search.block.27 -->
### Interação com mouse

1. <!-- id: input-search.block.28 --> Clicar no campo ou no rótulo associado coloca o foco no campo.
2. <!-- id: input-search.block.29 --> Selecionar, editar, copiar e colar segue o comportamento nativo do campo.

<!-- id: input-search.block.31 -->
### Interação com teclado

1. <!-- id: input-search.block.32 --> `Tab` move o foco para o campo; `Shift + Tab` retorna ao controle anterior.
2. <!-- id: input-search.block.33 --> Digitação insere texto; `setas`, `Home`, `End` e comandos de seleção e edição seguem a plataforma.
3. <!-- id: input-search.block.34 --> `Enter` segue a ação de envio definida para o formulário; o campo não cria uma nova linha.

<!-- id: input-search.block.36 -->
### Interação com gestos

1. <!-- id: input-search.block.37 --> `Tocar` no campo ou no rótulo permite editar com o teclado virtual.
2. <!-- id: input-search.block.38 --> A seleção e edição de texto seguem os gestos disponíveis na plataforma.

<!-- id: input-search.block.40 -->
### Interação com teclado (ou gestos) + leitor de telas

1. <!-- id: input-search.block.41 --> Ao navegar até o campo, o leitor apresenta seu rótulo e tipo, além de estados e instruções associados.
2. <!-- id: input-search.block.42 --> Erros são associados ao campo e explicam como corrigir a informação; o valor digitado é preservado.

<!-- id: input-search.block.67 -->
### Acionar e limpar a busca

1. <!-- id: input-search.block.68 --> `Enter` envia a pesquisa quando esse for o modo definido; o botão "Buscar", quando presente, também permite enviá-la.
2. <!-- id: input-search.block.69 --> O controle "Limpar busca", quando presente, esvazia o campo sem enviar o formulário e permite continuar a edição.
3. <!-- id: input-search.block.70 --> Comunicar a quantidade de resultados ou a ausência deles sem deslocar o foco inesperadamente.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: input-search.block.44 -->

<!-- id: input-search.gherkin-pattern.1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: input-search.gherkin-pattern.2 -->
### Cenário: Considerando que estou em uma página que contém Input "search"

<!-- id: input-search.gherkin-pattern.3 -->
#### Navegação por teclado

1. <!-- id: input-search.gherkin-pattern.5 --> QUANDO uso a tecla `Tab` para mover o foco para o campo
2. <!-- id: input-search.gherkin-pattern.6 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: input-search.gherkin-pattern.7 --> ENTÃO, quando digito, seleciono ou edito o conteúdo com os comandos nativos
4. <!-- id: input-search.gherkin-pattern.8 --> VEJO que o valor do campo é atualizado
5. <!-- id: input-search.gherkin-pattern.11 --> E, quando uso `Tab` ou `Shift + Tab`, VEJO que o foco segue a ordem da página, sem ficar preso no campo

<!-- id: input-search.gherkin-pattern.13 -->
#### Leitor de telas para desktop

1. <!-- id: input-search.gherkin-pattern.19 --> QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para o campo, acontece o seguinte:

   - <!-- id: input-search.gherkin-pattern.15 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: input-search.gherkin-pattern.16 --> OUÇO que o componente é um campo de busca.
   - <!-- id: input-search.gherkin-pattern.17 --> OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. <!-- id: input-search.gherkin-pattern.20 --> ENTÃO, quando digito ou edito o conteúdo com os comandos nativos
3. <!-- id: input-search.gherkin-pattern.21 --> OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

<!-- id: input-search.gherkin-pattern.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: input-search.gherkin-pattern.28 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no campo, acontece o seguinte:

   - <!-- id: input-search.gherkin-pattern.24 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: input-search.gherkin-pattern.25 --> OUÇO que o componente é um campo de busca.
   - <!-- id: input-search.gherkin-pattern.26 --> OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. <!-- id: input-search.gherkin-pattern.29 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o campo e editar seu conteúdo
3. <!-- id: input-search.gherkin-pattern.30 --> OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

<!-- id: input-search.gherkin-pattern.32 -->
#### Validação da entrada

1. <!-- id: input-search.gherkin-pattern.33 --> QUANDO uma entrada é rejeitada por uma regra de validação informada
2. <!-- id: input-search.gherkin-pattern.34 --> VEJO uma mensagem associada ao campo que explica como corrigir a informação
3. <!-- id: input-search.gherkin-pattern.35 --> E, quando navego até o campo com leitor de telas, OUÇO a indicação de erro e a orientação associada
4. <!-- id: input-search.gherkin-pattern.36 --> ENTÃO, quando volto a editar, VEJO que o valor foi preservado para correção

<!-- id: input-search.gherkin-pattern.38 -->
#### Acionamento da busca

1. <!-- id: input-search.gherkin-pattern.39 --> QUANDO informo um termo e aciono a busca conforme o modo definido
2. <!-- id: input-search.gherkin-pattern.40 --> VEJO os resultados ou uma mensagem de ausência de resultados
3. <!-- id: input-search.gherkin-pattern.41 --> E, quando uso leitor de telas, OUÇO ou percebo o retorno da busca sem deslocamento inesperado do foco

<!-- id: input-search.extension.13 -->
### Cenários complementares — ampliação editorial

<!-- id: input-search.extension.14 -->
#### Busca dinâmica: respostas fora de ordem

1. <!-- id: input-search.gherkin-standard.1 --> DADAS duas consultas sucessivas
2. <!-- id: input-search.gherkin-standard.2 --> QUANDO a resposta da primeira chega depois da segunda
3. <!-- id: input-search.gherkin-standard.3 --> ENTÃO os resultados continuam correspondendo à consulta mais recente e o foco permanece previsível.

<!-- id: input-search.extension.16 -->
#### Filtros sem correspondências

1. <!-- id: input-search.gherkin-standard.4 --> DADA uma busca sem correspondências com filtros aplicados
2. <!-- id: input-search.gherkin-standard.5 --> QUANDO removo um filtro e aplico a alteração conforme o fluxo definido
3. <!-- id: input-search.gherkin-standard.6 --> ENTÃO os resultados e sua quantidade são atualizados e termo e filtros restantes são preservados.

<!-- id: input-search.extension.18 -->
#### Falha de consulta e nova tentativa

1. <!-- id: input-search.gherkin-standard.7 --> DADA uma falha na consulta
2. <!-- id: input-search.gherkin-standard.8 --> QUANDO aciono Tentar novamente
3. <!-- id: input-search.gherkin-standard.9 --> ENTÃO a busca usa o termo e os filtros preservados e apresenta seu resultado sem confundir falha com ausência de correspondências.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: input-search.block.60 -->

1. <!-- id: input-search.block.61 --> Usar um rótulo persistente associado ao input. Placeholder é uma dica complementar e não substitui o rótulo.
2. <!-- id: input-search.block.62 --> Associar instruções e erros ao campo, por exemplo com aria-describedby, e marcar aria-invalid quando houver erro.
3. <!-- id: input-search.block.63 --> Informar a obrigatoriedade e usar required quando necessário. Não comunicar erros apenas por cor.
4. <!-- id: input-search.block.64 --> Manter foco visível e garantir contraste e área de interação adequados.
5. <!-- id: input-search.block.65 --> Definir se a busca ocorre ao enviar ou durante a digitação. Em busca dinâmica, preservar o foco e comunicar os resultados sem anunciar cada tecla; permitir limpar e tratar resultados vazios.

<!-- id: references -->
## Referências

<!-- id: input-search.block.77 -->

<!-- id: input-search.references-standard.1 -->
Referências adicionais sobre componentes do tipo Input "search".

<!-- id: input-search.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: input-search.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: input-search.block.78 -->
### Documentação do campo

- <!-- id: input-search.block.81 --> [MDN — input type="search"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/search)

<!-- id: input-search.references-design-systems.9 -->
### Design System

- <!-- id: input-search.references-design-systems.4 --> [Carbon — Search](https://www.carbondesignsystem.com/building-blocks/core/components/search/guidelines) — Componente específico para entrada de termos de busca.
- <!-- id: input-search.references-design-systems.8 --> [USWDS — Search](https://designsystem.digital.gov/components/search/) — Campo e botão para acionar uma busca.

<!-- id: input-search.extension.20 -->
### Referências da ampliação editorial

<!-- id: input-search.extension.23 -->
[USWDS — Search](https://designsystem.digital.gov/components/search/)

<!-- id: input-search.extension.26 -->
[W3C APG — Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
