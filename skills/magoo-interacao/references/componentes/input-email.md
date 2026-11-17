# Input "email"

- ID: `input-email`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/input-email.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite informar um endereço de e-mail.

<!-- id: interaction-design -->
## Design de interação

<!-- id: input-email.designer-guide.frame -->
<!-- id: input-email.designer-guide.1 -->
### Guia rápido para designers

<!-- id: input-email.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: input-email.designer-guide.3 -->
#### Quando usar

<!-- id: input-email.designer-guide.4 -->
Use para informar um endereço de e-mail. Validar o formato não comprova que o endereço existe.

<!-- id: input-email.designer-guide.5 -->
#### O que desenhar

<!-- id: input-email.designer-guide.6 -->
Mostre rótulo persistente, dica de formato, foco e estados preenchido e com erro.

<!-- id: input-email.designer-guide.7 -->
#### Como se comporta

<!-- id: input-email.designer-guide.8 -->
A pessoa edita e cola texto normalmente. Em caso de erro, preserve o valor e explique a correção.

<!-- id: input-email.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: input-email.designer-guide.10 -->
Registre obrigatoriedade, mensagens e ação de `Enter`. Se aceitar vários endereços, explique como separá-los.

<!-- id: input-email.designer-guide.11 -->
#### Como revisar

<!-- id: input-email.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: input-email.designer-guide.13 -->
### Orientações completas

<!-- id: input-email.block.1 -->

<!-- id: input-email.block.2 -->
Questionamentos que devem ser feitos ao projetar componentes do tipo Input "email".

<!-- id: input-email.block.3 -->
Avalie cada orientação conforme o contexto de uso do componente.

<!-- id: input-email.block.4 -->
### Projetando para a "não interação"

1. <!-- id: input-email.block.5 --> O rótulo permanece visível e explica a finalidade do campo?
2. <!-- id: input-email.block.6 --> Instruções, obrigatoriedade e limites estão disponíveis antes da entrada?
3. <!-- id: input-email.block.7 --> Estados vazio, preenchido, inválido, desabilitado e somente leitura são distinguíveis sem depender apenas de cor?

<!-- id: input-email.block.9 -->
### Projetando para uso com mouse

1. <!-- id: input-email.block.10 --> Clicar no campo ou no rótulo associado posiciona o foco para digitar?
2. <!-- id: input-email.block.11 --> O foco e os controles associados têm feedback visual perceptível?

<!-- id: input-email.block.13 -->
### Projetando para uso com gestos

1. <!-- id: input-email.block.14 --> A área de toque permite selecionar o campo e seus controles sem acionamentos acidentais?
2. <!-- id: input-email.block.15 --> O teclado virtual e a ampliação permitem continuar vendo e editando o campo?

<!-- id: input-email.block.17 -->
### Projetando para uso com teclado

1. <!-- id: input-email.block.18 --> `Tab` e `Shift + Tab` percorrem os controles na ordem da interface?
2. <!-- id: input-email.block.19 --> É possível editar e selecionar texto com os comandos nativos, sem prender o foco?

<!-- id: input-email.block.21 -->
### Projetando para uso com leitor de telas

1. <!-- id: input-email.block.22 --> Nome, tipo, obrigatoriedade, instruções e erros são apresentados de forma compreensível?
2. <!-- id: input-email.block.23 --> O rótulo está associado ao campo e permanece disponível depois de preencher?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: input-email.block.25 -->

<!-- id: input-email.block.26 -->
O campo usa type="email" e, em dispositivos compatíveis, oferece teclado adequado para e-mail.

<!-- id: input-email.block.27 -->
### Interação com mouse

1. <!-- id: input-email.block.28 --> Clicar no campo ou no rótulo associado coloca o foco no campo.
2. <!-- id: input-email.block.29 --> Selecionar, editar, copiar e colar segue o comportamento nativo do campo.

<!-- id: input-email.block.31 -->
### Interação com teclado

1. <!-- id: input-email.block.32 --> `Tab` move o foco para o campo; `Shift + Tab` retorna ao controle anterior.
2. <!-- id: input-email.block.33 --> Digitação insere texto; `setas`, `Home`, `End` e comandos de seleção e edição seguem a plataforma.
3. <!-- id: input-email.block.34 --> `Enter` segue a ação de envio definida para o formulário; o campo não cria uma nova linha.

<!-- id: input-email.block.36 -->
### Interação com gestos

1. <!-- id: input-email.block.37 --> `Tocar` no campo ou no rótulo permite editar com o teclado virtual.
2. <!-- id: input-email.block.38 --> A seleção e edição de texto seguem os gestos disponíveis na plataforma.

<!-- id: input-email.block.40 -->
### Interação com teclado (ou gestos) + leitor de telas

1. <!-- id: input-email.block.41 --> Ao navegar até o campo, o leitor apresenta seu rótulo e tipo, além de estados e instruções associados.
2. <!-- id: input-email.block.42 --> Erros são associados ao campo e explicam como corrigir a informação; o valor digitado é preservado.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: input-email.block.44 -->

<!-- id: input-email.gherkin-pattern.1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: input-email.gherkin-pattern.2 -->
### Cenário: Considerando que estou em uma página que contém Input "email"

<!-- id: input-email.gherkin-pattern.3 -->
#### Navegação por teclado

1. <!-- id: input-email.gherkin-pattern.5 --> QUANDO uso a tecla `Tab` para mover o foco para o campo
2. <!-- id: input-email.gherkin-pattern.6 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: input-email.gherkin-pattern.7 --> ENTÃO, quando digito, seleciono ou edito o conteúdo com os comandos nativos
4. <!-- id: input-email.gherkin-pattern.8 --> VEJO que o valor do campo é atualizado
5. <!-- id: input-email.gherkin-pattern.11 --> E, quando uso `Tab` ou `Shift + Tab`, VEJO que o foco segue a ordem da página, sem ficar preso no campo

<!-- id: input-email.gherkin-pattern.13 -->
#### Leitor de telas para desktop

1. <!-- id: input-email.gherkin-pattern.19 --> QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para o campo, acontece o seguinte:

   - <!-- id: input-email.gherkin-pattern.15 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: input-email.gherkin-pattern.16 --> OUÇO que o componente é um campo de e-mail.
   - <!-- id: input-email.gherkin-pattern.17 --> OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. <!-- id: input-email.gherkin-pattern.20 --> ENTÃO, quando digito ou edito o conteúdo com os comandos nativos
3. <!-- id: input-email.gherkin-pattern.21 --> OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

<!-- id: input-email.gherkin-pattern.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: input-email.gherkin-pattern.28 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no campo, acontece o seguinte:

   - <!-- id: input-email.gherkin-pattern.24 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: input-email.gherkin-pattern.25 --> OUÇO que o componente é um campo de e-mail.
   - <!-- id: input-email.gherkin-pattern.26 --> OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. <!-- id: input-email.gherkin-pattern.29 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o campo e editar seu conteúdo
3. <!-- id: input-email.gherkin-pattern.30 --> OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

<!-- id: input-email.gherkin-pattern.32 -->
#### Validação da entrada

1. <!-- id: input-email.gherkin-pattern.33 --> QUANDO uma entrada é rejeitada por uma regra de validação informada
2. <!-- id: input-email.gherkin-pattern.34 --> VEJO uma mensagem associada ao campo que explica como corrigir a informação
3. <!-- id: input-email.gherkin-pattern.35 --> E, quando navego até o campo com leitor de telas, OUÇO a indicação de erro e a orientação associada
4. <!-- id: input-email.gherkin-pattern.36 --> ENTÃO, quando volto a editar, VEJO que o valor foi preservado para correção

<!-- id: input-email.gherkin-pattern.38 -->
#### Formato do e-mail

1. <!-- id: input-email.gherkin-pattern.39 --> QUANDO envio um valor com formato de e-mail inválido
2. <!-- id: input-email.gherkin-pattern.40 --> VEJO ou OUÇO uma orientação para corrigir o formato
3. <!-- id: input-email.gherkin-pattern.41 --> A validação de formato não comprova a existência do endereço

<!-- id: considerations -->
## Pontos de atenção

<!-- id: input-email.block.60 -->

1. <!-- id: input-email.block.61 --> Usar um rótulo persistente associado ao input. Placeholder é uma dica complementar e não substitui o rótulo.
2. <!-- id: input-email.block.62 --> Associar instruções e erros ao campo, por exemplo com aria-describedby, e marcar aria-invalid quando houver erro.
3. <!-- id: input-email.block.63 --> Informar a obrigatoriedade e usar required quando necessário. Não comunicar erros apenas por cor.
4. <!-- id: input-email.block.64 --> Manter foco visível e garantir contraste e área de interação adequados.
5. <!-- id: input-email.block.65 --> A validação de formato não comprova que o endereço existe. Aceitar um endereço por padrão; usar multiple apenas se o contexto pedir vários endereços e explicar como separá-los.

<!-- id: references -->
## Referências

<!-- id: input-email.block.72 -->

<!-- id: input-email.references-standard.1 -->
Referências adicionais sobre componentes do tipo Input "email".

<!-- id: input-email.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: input-email.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: input-email.block.73 -->
### Documentação do campo

- <!-- id: input-email.block.76 --> [MDN — input type="email"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email)

<!-- id: input-email.references-design-systems.17 -->
### Design System

- <!-- id: input-email.references-design-systems.4 --> [GOV.UK — Email addresses](https://design-system.service.gov.uk/patterns/email-addresses/) — Padrão específico para e-mail, com type="email", autocomplete e mensagens de erro.
- <!-- id: input-email.references-design-systems.8 --> [GOV.UK — Text input](https://design-system.service.gov.uk/components/text-input/) — Componente de base utilizado pelo padrão de e-mail.
- <!-- id: input-email.references-design-systems.12 --> [Bootstrap — Form controls](https://getbootstrap.com/docs/5.3/forms/form-control/) — Exemplo de campo type="email".
- <!-- id: input-email.references-design-systems.16 --> [Carbon — Text input](https://www.carbondesignsystem.com/building-blocks/core/components/text-input/guidelines) — Orientações gerais de campos de texto, complementares ao tipo e-mail.
