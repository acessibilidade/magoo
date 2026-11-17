# Input "text"

- ID: `input-text`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/input-text.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite inserir e editar texto em uma única linha.

<!-- id: interaction-design -->
## Design de interação

<!-- id: input-text.designer-guide.frame -->
<!-- id: input-text.designer-guide.1 -->
### Guia rápido para designers

<!-- id: input-text.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: input-text.designer-guide.3 -->
#### Quando usar

<!-- id: input-text.designer-guide.4 -->
Use para texto em uma linha. Para respostas com várias linhas, escolha um campo adequado a esse uso.

<!-- id: input-text.designer-guide.5 -->
#### O que desenhar

<!-- id: input-text.designer-guide.6 -->
Mostre o rótulo sempre visível e os estados vazio, preenchido e com erro. Inclua foco, desabilitado e somente leitura quando aplicáveis. Diferencie os estados sem depender apenas de cor.

<!-- id: input-text.designer-guide.7 -->
#### Como se comporta

<!-- id: input-text.designer-guide.8 -->
Clicar ou `tocar` no campo ou no rótulo associado permite editar. A navegação pelo teclado segue a ordem da interface e não fica presa no campo. Em caso de erro, preserve o texto digitado e explique como corrigir.

<!-- id: input-text.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: input-text.designer-guide.10 -->
Registre rótulo, instruções, obrigatoriedade, limites e mensagens de erro. Defina a ação de `Enter` no formulário e a ordem de navegação. Documente quais informações devem ser anunciadas pelo leitor de telas.

<!-- id: input-text.designer-guide.11 -->
#### Como revisar

<!-- id: input-text.designer-guide.12 -->
O rótulo continua visível depois de preencher? O erro explica a correção? Com ampliação e teclado virtual, a pessoa ainda vê e edita o campo? Associação do rótulo, anúncios e edição pelo teclado precisam ser verificados na implementação.

<!-- id: input-text.designer-guide.13 -->
### Orientações completas

<!-- id: input-text.block.1 -->

<!-- id: input-text.block.2 -->
Questionamentos que devem ser feitos ao projetar componentes do tipo Input "text".

<!-- id: input-text.block.3 -->
Avalie cada orientação conforme o contexto de uso do componente.

<!-- id: input-text.block.4 -->
### Projetando para a "não interação"

1. <!-- id: input-text.block.5 --> O rótulo permanece visível e explica a finalidade do campo?
2. <!-- id: input-text.block.6 --> Instruções, obrigatoriedade e limites estão disponíveis antes da entrada?
3. <!-- id: input-text.block.7 --> Estados vazio, preenchido, inválido, desabilitado e somente leitura são distinguíveis sem depender apenas de cor?

<!-- id: input-text.block.9 -->
### Projetando para uso com mouse

1. <!-- id: input-text.block.10 --> Clicar no campo ou no rótulo associado posiciona o foco para digitar?
2. <!-- id: input-text.block.11 --> O foco e os controles associados têm feedback visual perceptível?

<!-- id: input-text.block.13 -->
### Projetando para uso com gestos

1. <!-- id: input-text.block.14 --> A área de toque permite selecionar o campo e seus controles sem acionamentos acidentais?
2. <!-- id: input-text.block.15 --> O teclado virtual e a ampliação permitem continuar vendo e editando o campo?

<!-- id: input-text.block.17 -->
### Projetando para uso com teclado

1. <!-- id: input-text.block.18 --> `Tab` e `Shift + Tab` percorrem os controles na ordem da interface?
2. <!-- id: input-text.block.19 --> É possível editar e selecionar texto com os comandos nativos, sem prender o foco?

<!-- id: input-text.block.21 -->
### Projetando para uso com leitor de telas

1. <!-- id: input-text.block.22 --> Nome, tipo, obrigatoriedade, instruções e erros são apresentados de forma compreensível?
2. <!-- id: input-text.block.23 --> O rótulo está associado ao campo e permanece disponível depois de preencher?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: input-text.block.25 -->

<!-- id: input-text.block.26 -->
O campo aceita texto em uma linha; quebras de linha exigem outro componente, como textarea.

<!-- id: input-text.block.27 -->
### Interação com mouse

1. <!-- id: input-text.block.28 --> Clicar no campo ou no rótulo associado coloca o foco no campo.
2. <!-- id: input-text.block.29 --> Selecionar, editar, copiar e colar segue o comportamento nativo do campo.

<!-- id: input-text.block.31 -->
### Interação com teclado

1. <!-- id: input-text.block.32 --> `Tab` move o foco para o campo; `Shift + Tab` retorna ao controle anterior.
2. <!-- id: input-text.block.33 --> Digitação insere texto; `setas`, `Home`, `End` e comandos de seleção e edição seguem a plataforma.
3. <!-- id: input-text.block.34 --> `Enter` segue a ação de envio definida para o formulário; o campo não cria uma nova linha.

<!-- id: input-text.block.36 -->
### Interação com gestos

1. <!-- id: input-text.block.37 --> `Tocar` no campo ou no rótulo permite editar com o teclado virtual.
2. <!-- id: input-text.block.38 --> A seleção e edição de texto seguem os gestos disponíveis na plataforma.

<!-- id: input-text.block.40 -->
### Interação com teclado (ou gestos) + leitor de telas

1. <!-- id: input-text.block.41 --> Ao navegar até o campo, o leitor apresenta seu rótulo e tipo, além de estados e instruções associados.
2. <!-- id: input-text.block.42 --> Erros são associados ao campo e explicam como corrigir a informação; o valor digitado é preservado.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: input-text.block.44 -->

<!-- id: input-text.gherkin-pattern.1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: input-text.gherkin-pattern.2 -->
### Cenário: Considerando que estou em uma página que contém Input "text"

<!-- id: input-text.gherkin-pattern.3 -->
#### Navegação por teclado

1. <!-- id: input-text.gherkin-pattern.5 --> QUANDO uso a tecla `Tab` para mover o foco para o campo
2. <!-- id: input-text.gherkin-pattern.6 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: input-text.gherkin-pattern.7 --> ENTÃO, quando digito, seleciono ou edito o conteúdo com os comandos nativos
4. <!-- id: input-text.gherkin-pattern.8 --> VEJO que o valor do campo é atualizado
5. <!-- id: input-text.gherkin-pattern.11 --> E, quando uso `Tab` ou `Shift + Tab`, VEJO que o foco segue a ordem da página, sem ficar preso no campo

<!-- id: input-text.gherkin-pattern.13 -->
#### Leitor de telas para desktop

1. <!-- id: input-text.gherkin-pattern.19 --> QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para o campo, acontece o seguinte:

   - <!-- id: input-text.gherkin-pattern.15 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: input-text.gherkin-pattern.16 --> OUÇO que o componente é um campo de texto.
   - <!-- id: input-text.gherkin-pattern.17 --> OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. <!-- id: input-text.gherkin-pattern.20 --> ENTÃO, quando digito ou edito o conteúdo com os comandos nativos
3. <!-- id: input-text.gherkin-pattern.21 --> OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

<!-- id: input-text.gherkin-pattern.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: input-text.gherkin-pattern.28 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no campo, acontece o seguinte:

   - <!-- id: input-text.gherkin-pattern.24 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: input-text.gherkin-pattern.25 --> OUÇO que o componente é um campo de texto.
   - <!-- id: input-text.gherkin-pattern.26 --> OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. <!-- id: input-text.gherkin-pattern.29 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o campo e editar seu conteúdo
3. <!-- id: input-text.gherkin-pattern.30 --> OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

<!-- id: input-text.gherkin-pattern.32 -->
#### Validação da entrada

1. <!-- id: input-text.gherkin-pattern.33 --> QUANDO uma entrada é rejeitada por uma regra de validação informada
2. <!-- id: input-text.gherkin-pattern.34 --> VEJO uma mensagem associada ao campo que explica como corrigir a informação
3. <!-- id: input-text.gherkin-pattern.35 --> E, quando navego até o campo com leitor de telas, OUÇO a indicação de erro e a orientação associada
4. <!-- id: input-text.gherkin-pattern.36 --> ENTÃO, quando volto a editar, VEJO que o valor foi preservado para correção

<!-- id: considerations -->
## Pontos de atenção

<!-- id: input-text.block.60 -->

1. <!-- id: input-text.block.61 --> Usar um rótulo persistente associado ao input. Placeholder é uma dica complementar e não substitui o rótulo.
2. <!-- id: input-text.block.62 --> Associar instruções e erros ao campo, por exemplo com aria-describedby, e marcar aria-invalid quando houver erro.
3. <!-- id: input-text.block.63 --> Informar a obrigatoriedade e usar required quando necessário. Não comunicar erros apenas por cor.
4. <!-- id: input-text.block.64 --> Manter foco visível e garantir contraste e área de interação adequados.
5. <!-- id: input-text.block.65 --> Respeitar a seleção, edição, cópia e colagem nativas. Definir limites de tamanho apenas quando necessários e informá-los antes da entrada.

<!-- id: references -->
## Referências

<!-- id: input-text.block.67 -->

<!-- id: input-text.references-standard.1 -->
Referências adicionais sobre componentes do tipo Input "text".

<!-- id: input-text.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: input-text.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: input-text.block.68 -->
### Documentação do campo

- <!-- id: input-text.block.71 --> [MDN — input type="text"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/text)

<!-- id: input-text.references-design-systems.17 -->
### Design System

- <!-- id: input-text.references-design-systems.4 --> [GOV.UK — Text input](https://design-system.service.gov.uk/components/text-input/) — Campo de texto de uma linha, rótulos, instruções e erros.
- <!-- id: input-text.references-design-systems.8 --> [Carbon — Text input](https://www.carbondesignsystem.com/building-blocks/core/components/text-input/guidelines) — Estados e comportamentos de campos de texto.
- <!-- id: input-text.references-design-systems.12 --> [USWDS — Text input](https://designsystem.digital.gov/components/text-input/) — Orientações gerais para entrada de texto.
- <!-- id: input-text.references-design-systems.16 --> [Bootstrap — Form controls](https://getbootstrap.com/docs/5.3/forms/form-control/) — Exemplos de implementação de campos e estados.
