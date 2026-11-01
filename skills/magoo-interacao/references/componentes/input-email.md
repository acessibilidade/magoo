# Input "email"

- ID: `input-email`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/input-email.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite informar um endereço de e-mail.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para informar um endereço de e-mail. Validar o formato não comprova que o endereço existe.

#### O que desenhar

Mostre rótulo persistente, dica de formato, foco e estados preenchido e com erro.

#### Como se comporta

A pessoa edita e cola texto normalmente. Em caso de erro, preserve o valor e explique a correção.

#### O que documentar no Figma

Registre obrigatoriedade, mensagens e ação de `Enter`. Se aceitar vários endereços, explique como separá-los.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao projetar componentes do tipo Input "email".

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

## Métodos de Interação

O campo usa type="email" e, em dispositivos compatíveis, oferece teclado adequado para e-mail.

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

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Input "email"

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para o campo
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando digito, seleciono ou edito o conteúdo com os comandos nativos
4. VEJO que o valor do campo é atualizado
5. E, quando uso `Tab` ou `Shift + Tab`, VEJO que o foco segue a ordem da página, sem ficar preso no campo

#### Leitor de telas para desktop

1. QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para o campo, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO que o componente é um campo de e-mail.
   - OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. ENTÃO, quando digito ou edito o conteúdo com os comandos nativos
3. OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no campo, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO que o componente é um campo de e-mail.
   - OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o campo e editar seu conteúdo
3. OUÇO ou percebo que posso editar o campo e que seu valor foi atualizado.

#### Validação da entrada

1. QUANDO uma entrada é rejeitada por uma regra de validação informada
2. VEJO uma mensagem associada ao campo que explica como corrigir a informação
3. E, quando navego até o campo com leitor de telas, OUÇO a indicação de erro e a orientação associada
4. ENTÃO, quando volto a editar, VEJO que o valor foi preservado para correção

#### Formato do e-mail

1. QUANDO envio um valor com formato de e-mail inválido
2. VEJO ou OUÇO uma orientação para corrigir o formato
3. A validação de formato não comprova a existência do endereço

## Pontos de atenção

1. Usar um rótulo persistente associado ao input. Placeholder é uma dica complementar e não substitui o rótulo.
2. Associar instruções e erros ao campo, por exemplo com aria-describedby, e marcar aria-invalid quando houver erro.
3. Informar a obrigatoriedade e usar required quando necessário. Não comunicar erros apenas por cor.
4. Manter foco visível e garantir contraste e área de interação adequados.
5. A validação de formato não comprova que o endereço existe. Aceitar um endereço por padrão; usar multiple apenas se o contexto pedir vários endereços e explicar como separá-los.

## Referências

Referências adicionais sobre componentes do tipo Input "email".

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Documentação do campo

- [MDN — input type="email"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email)

### Design System

- [GOV.UK — Email addresses](https://design-system.service.gov.uk/patterns/email-addresses/) — Padrão específico para e-mail, com type="email", autocomplete e mensagens de erro.
- [GOV.UK — Text input](https://design-system.service.gov.uk/components/text-input/) — Componente de base utilizado pelo padrão de e-mail.
- [Bootstrap — Form controls](https://getbootstrap.com/docs/5.3/forms/form-control/) — Exemplo de campo type="email".
- [Carbon — Text input](https://www.carbondesignsystem.com/building-blocks/core/components/text-input/guidelines) — Orientações gerais de campos de texto, complementares ao tipo e-mail.
