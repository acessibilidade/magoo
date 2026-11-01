# Input "password"

- ID: `input-password`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/input-password.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite inserir uma senha e alternar entre conteúdo oculto e visível.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para informar uma senha, permitindo colar e usar gerenciadores de senhas.

#### O que desenhar

Mostre rótulo persistente, instruções, foco, erro e conteúdo oculto ou visível. O botão indica a próxima ação: Exibir senha ou Ocultar senha.

#### Como se comporta

Exibir ou ocultar preserva o valor e o foco no botão, sem enviar o formulário. Não inclua a senha em mensagens ou anúncios.

#### O que documentar no Figma

Registre regras, mensagens, finalidade de acesso ou criação de senha e o nome do botão em cada estado.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao projetar componentes do tipo Input "password".

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

### Projetando o botão de visibilidade

1. O botão "Exibir senha" é acessível por mouse, toque, teclado e leitor de telas?
2. Depois de exibir, o texto muda para "Ocultar senha", indicando a próxima ação?
3. Alternar a visibilidade preserva o valor e mantém o foco no botão, sem enviar o formulário?

## Métodos de Interação

A senha começa oculta e o botão apresenta o texto "Exibir senha".

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

### Exibir e ocultar a senha

1. Com a senha oculta, clicar, `tocar` ou pressionar `Enter` ou `Espaço` no botão "Exibir senha" revela o conteúdo e altera o texto para "Ocultar senha".
2. Com a senha visível, acionar "Ocultar senha" volta a mascarar o conteúdo e altera o texto para "Exibir senha".
3. O botão é do tipo button, não envia o formulário e mantém o foco após a ativação. O valor do campo é preservado.
4. Ao focar o botão com leitor de telas, a pessoa identifica Exibir senha ou Ocultar senha; acionar o botão muda a visibilidade sem anunciar a senha em uma mensagem extra.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Input "password"

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para o campo
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando digito, seleciono ou edito o conteúdo com os comandos nativos
4. VEJO que o valor do campo é atualizado e os caracteres permanecem ocultos por padrão
5. E, quando uso `Tab` ou `Shift + Tab`, VEJO que o foco segue a ordem da página, sem ficar preso no campo

#### Leitor de telas para desktop

1. QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e uso a tecla `Tab` para mover o foco para o campo, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO que o componente é um campo de senha.
   - OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
   - OUÇO que a entrada está protegida enquanto a senha estiver oculta, sem anúncios extras do conteúdo da senha.
2. ENTÃO, quando digito ou edito o conteúdo com os comandos nativos
3. OUÇO ou percebo que posso editar o campo conforme o comportamento de entrada protegida da plataforma, sem expor a senha em mensagens de estado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no campo, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO que o componente é um campo de senha.
   - OUÇO a obrigatoriedade, as instruções e os erros associados, quando existirem.
   - OUÇO que a entrada está protegida enquanto a senha estiver oculta, sem anúncios extras do conteúdo da senha.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o campo e editar seu conteúdo
3. OUÇO ou percebo que posso editar o campo conforme o comportamento de entrada protegida da plataforma, sem expor a senha em mensagens de estado.

#### Validação da entrada

1. QUANDO uma entrada é rejeitada por uma regra de validação informada
2. VEJO uma mensagem associada ao campo que explica como corrigir a informação
3. E, quando navego até o campo com leitor de telas, OUÇO a indicação de erro e a orientação associada
4. ENTÃO, quando volto a editar, VEJO que o valor foi preservado para correção

#### Exibir e ocultar a senha por teclado

1. QUANDO uso `Tab` para mover o foco para o botão "Exibir senha", com a senha oculta
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso `Enter` ou `Barra de espaço` para acionar o botão
4. VEJO a senha em texto visível e o botão passa a apresentar "Ocultar senha"
5. E VEJO que o valor foi preservado e o foco permanece no botão, sem enviar o formulário
6. ENTÃO, quando uso `Enter` ou `Barra de espaço` novamente
7. VEJO que a senha volta a ficar oculta e o botão passa a apresentar "Exibir senha", preservando o valor e o foco, sem enviar o formulário

#### Visibilidade da senha com leitor de telas para desktop

1. QUANDO uso `Tab` para focar no botão de visibilidade, com a senha oculta
2. OUÇO que o componente é um botão com o nome "Exibir senha"
3. ENTÃO, quando uso `Enter` ou `Barra de espaço` para ativar o botão
4. OUÇO ou percebo que o nome do botão mudou para "Ocultar senha" e que o foco permanece no botão
5. ENTÃO, quando ativo o botão novamente
6. OUÇO ou percebo que seu nome voltou a "Exibir senha" e o foco permanece no botão
7. O valor da senha é preservado e o formulário não é enviado; a senha não é incluída em anúncios extras ou mensagens de estado

#### Visibilidade da senha com leitor de telas para dispositivos móveis

1. QUANDO deslizo o dedo para focar no botão de visibilidade, com a senha oculta
2. OUÇO que o componente é um botão com o nome "Exibir senha"
3. ENTÃO, quando toco duas vezes ou uso o gesto adequado para ativar o botão
4. OUÇO ou percebo que o nome do botão mudou para "Ocultar senha" e que o foco permanece no botão
5. ENTÃO, quando ativo o botão novamente
6. OUÇO ou percebo que seu nome voltou a "Exibir senha" e o foco permanece no botão
7. O valor da senha é preservado e o formulário não é enviado; a senha não é incluída em anúncios extras ou mensagens de estado

## Pontos de atenção

1. Usar um rótulo persistente associado ao input. Placeholder é uma dica complementar e não substitui o rótulo.
2. Associar instruções e erros ao campo, por exemplo com aria-describedby, e marcar aria-invalid quando houver erro.
3. Informar a obrigatoriedade e usar required quando necessário. Não comunicar erros apenas por cor.
4. Manter foco visível e garantir contraste e área de interação adequados.
5. Permitir colar e usar gerenciadores de senhas. Usar autocomplete="current-password" no acesso e "new-password" na criação de senha. Ocultar caracteres não substitui a proteção dos dados.

### Botão textual e ícones opcionais

1. O padrão destas regras usa o texto "Exibir senha" enquanto o conteúdo está oculto e "Ocultar senha" enquanto está visível.
2. É possível usar o ícone de olho aberto ou fechado: olho aberto para exibir o conteúdo e olho fechado para ocultar o conteúdo. O ícone representa a ação disponível, acompanhando o texto do botão.
3. Preferir Material Icons: visibility para exibir e visibility_off para ocultar. Se o ícone acompanhar o texto, ocultá-lo das tecnologias assistivas com aria-hidden="true".
4. Se usar apenas o ícone, fornecer o nome acessível "Exibir senha" ou "Ocultar senha", atualizado conforme a ação disponível.
5. Não bloquear colagem nem preenchimento automático. Não registrar ou incluir a senha em mensagens de estado.

### Notas de implementação e decisões de comportamento

- O nome acessível acompanha o texto da próxima ação. Nesse padrão de rótulo variável, usar um botão de ação sem aria-pressed. O leitor de telas não deve receber anúncios extras contendo a senha.

## Referências

Referências adicionais sobre componentes do tipo Input "password".

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Documentação do campo

- [MDN — input type="password"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/password)

### Design System

- [GOV.UK — Password input](https://design-system.service.gov.uk/components/password-input/) — Componente específico com botão textual para exibir e ocultar a senha.
- [Carbon — Text input: Password input](https://www.carbondesignsystem.com/building-blocks/core/components/text-input/guidelines#password-input) — Variação de senha com controle de visibilidade por ícone.
- [Bootstrap — Form controls](https://getbootstrap.com/docs/5.3/forms/form-control/#form-text) — Campo de senha e instruções associadas; este exemplo não inclui botão de visibilidade.
