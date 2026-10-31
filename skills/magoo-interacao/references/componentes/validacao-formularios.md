# Validação de formulários

- ID: `validacao-formularios`
- Categoria: mensagens
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/mensagens/validacao-formularios.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Mensagens que identificam erros de preenchimento, orientam a correção e comunicam o resultado do envio de formulários.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para explicar problemas de preenchimento e orientar a correção. Falhas de serviço precisam de mensagens próprias.

#### O que desenhar

Mostre instruções, erro junto ao campo e resumo com links quando adequado. Explique a correção em texto, além de cor ou ícone.

#### Como se comporta

Preserve os valores após um envio inválido. Links do resumo levam ao campo. Não mostre erros antes de a pessoa ter oportunidade de preencher.

#### O que documentar no Figma

Defina quando validar, o destino de foco após envio inválido e os anúncios. Em verificações assíncronas, considere o valor atual e evite respostas antigas.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao projetar mensagens de validação de formulários.

Avalie cada orientação conforme o contexto. A validação informa problemas na entrada e orienta a correção; falhas do serviço exigem mensagens próprias.

### Projetando para a "não interação"

1. As instruções, formatos esperados e campos obrigatórios estão claros antes de preencher?
2. A mensagem identifica o campo, explica o problema e informa como corrigir, sem culpar a pessoa?
3. Os erros são identificáveis por texto, além de cor ou ícone?
4. Foi definido quando validar: no envio, ao sair do campo ou durante uma verificação específica? Evita-se mostrar erro antes de a pessoa ter oportunidade de preencher?

### Projetando para uso com mouse

1. A mensagem permanece perto do campo e disponível enquanto houver erro?
2. Se houver resumo de erros, seus links levam ao campo correspondente?

### Projetando para uso com gestos

1. É possível ler a mensagem e corrigir o campo mesmo com o teclado virtual aberto ou com ampliação?
2. Os links do resumo possuem área de toque adequada?

### Projetando para uso com teclado

1. Após um envio inválido, há um destino de foco previsível, como o resumo de erros ou o primeiro campo inválido?
2. Os links do resumo podem ser percorridos com `Tab` e acionados com `Enter`?
3. Validar durante a edição preserva o foco e não impede a digitação?

### Projetando para uso com leitor de telas

1. A mensagem está associada ao campo e o estado inválido é identificado?
2. Os erros novos são comunicados sem repetição excessiva ou leitura a cada tecla?
3. O resumo tem um título claro e links com nomes que identificam os problemas?

## Métodos de Interação

### Interação com mouse

1. Ao enviar dados inválidos, apresentar mensagens específicas junto aos campos e, quando adequado, um resumo com links para correção.
2. Clicar em um link do resumo leva ao campo correspondente na mesma página e posiciona o foco para corrigi-lo.
3. Preservar os dados preenchidos, inclusive os que precisam de correção.

### Interação com teclado

1. `Tab` e `Shift + Tab` percorrem campos, botão de envio e links do resumo na ordem da interface.
2. `Enter` ou `Barra de espaço` ativa o botão de envio; `Enter` ativa os links do resumo.
3. Após um envio rejeitado, posicionar o foco no resumo ou no primeiro campo inválido, conforme o padrão escolhido.
4. Durante validações ao sair do campo ou durante a edição, manter o fluxo de foco e a entrada de texto.

### Interação com gestos

1. `Tocar` no botão de envio permite validar o formulário.
2. `Tocar` no link do resumo leva ao campo; a mensagem continua disponível para consulta e correção.

### Interação com teclado (ou gestos) + leitor de telas

1. Ao navegar até um campo inválido com leitor de telas, a pessoa identifica seu rótulo, erro e orientação de correção.
2. Após corrigir um campo e executar a validação prevista, a pessoa percebe se o erro foi resolvido ou continua presente.
3. Se o foco for movido para um resumo, permitir a leitura de seu título, erros e links. Se o foco permanecer onde estava, anunciar erros dinâmicos com uma região de atualização adequada ao contexto.
4. Ao receber o retorno da validação com leitor de telas, a pessoa identifica a mensagem sem várias repetições simultâneas do mesmo erro.

### Correção e novo envio

1. Após uma correção confirmada, remover ou atualizar a mensagem e a entrada correspondente no resumo, sem apagar outros erros.
2. Enviar novamente executa a validação necessária; somente confirmar sucesso depois que a operação for concluída.
3. Em verificações assíncronas, informar o andamento e evitar que respostas antigas substituam o resultado do valor atual.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém um formulário com validação

#### Navegação por teclado

1. QUANDO uso `Tab` para mover o foco até o botão de envio
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso `Enter` ou `Barra de espaço` para enviar dados inválidos
4. VEJO mensagens que identificam os campos com erro e explicam como corrigir
5. E percebo que o foco foi direcionado ao resumo ou ao primeiro campo inválido, conforme o padrão definido
6. QUANDO uso `Tab` para focar um link do resumo e `Enter` para ativá-lo
7. VEJO que o foco chega ao campo correspondente na mesma página e posso corrigi-lo

#### Leitor de telas para desktop

1. QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e envio um formulário com dados inválidos
2. OUÇO ou percebo que o envio não foi concluído e que existem erros a corrigir
3. ENTÃO, quando uso `Tab` para navegar até um campo inválido
4. OUÇO o rótulo, a indicação de erro e a orientação de correção
5. E, quando uso `Enter` para ativar um link do resumo, percebo que cheguei ao campo correspondente
6. OUÇO ou percebo as mensagens sem anúncios duplicados desnecessários

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e envio um formulário com dados inválidos
2. OUÇO ou percebo que o envio não foi concluído e que existem erros a corrigir
3. ENTÃO, quando deslizo o dedo para navegar até um campo inválido
4. OUÇO o rótulo, a indicação de erro e a orientação de correção
5. E, quando toco duas vezes ou uso o gesto adequado para ativar um link do resumo, percebo que cheguei ao campo correspondente
6. OUÇO ou percebo as mensagens sem anúncios duplicados desnecessários

#### Correção e novo envio

1. QUANDO corrijo um campo e a nova validação confirma a correção
2. VEJO que a mensagem e o estado inválido daquele campo são atualizados, preservando os outros erros e os valores preenchidos
3. ENTÃO, quando envio o formulário com todas as entradas válidas
4. VEJO ou OUÇO a confirmação somente depois que a operação for concluída

#### Validação durante a edição

1. QUANDO uma validação ocorre ao sair de um campo ou durante uma verificação específica
2. VEJO ou OUÇO uma mensagem no momento definido, sem erro prematuro antes de preencher
3. E percebo que o foco e a digitação não foram interrompidos

## Pontos de atenção

1. Preferir mensagens concretas, como "Informe um e-mail no formato nome@exemplo.com", em vez de apenas "Valor inválido".
2. Distinguir campo vazio obrigatório, formato incorreto e regra de negócio. Não tratar uma falha de conexão ou indisponibilidade do serviço como erro de preenchimento.
3. Não depender apenas de bordas vermelhas, ícones ou mensagens temporárias. Manter a orientação até que a correção seja confirmada.
4. Associar o erro ao campo com `aria-describedby` e manter as instruções existentes nessa associação. Usar `aria-invalid` apenas quando o erro for detectado.
5. O resumo complementa as mensagens junto aos campos. Seus links devem indicar para leitores de tela que levam ao campo na mesma página e mover o foco para o destino adequado.
6. Escolher entre o anúncio pelo foco e uma região dinâmica conforme o fluxo. Usar `role="alert"` apenas quando a urgência justificar; `role="status"` pode servir para atualizações não urgentes. Evitar anúncios a cada tecla.
7. Preservar valores após um envio inválido. Não incluir senhas ou outros dados sensíveis no resumo ou em mensagens de estado.
8. A validação no cliente ajuda a orientar, mas a validação no servidor continua necessária. Verificações assíncronas devem considerar o valor atual e informar falhas da verificação.
9. Não desabilitar o botão de envio como única forma de indicar problemas: a pessoa precisa saber o que falta e como corrigir.
10. Se usar ícones complementares, preferir Material Icons e ocultar os decorativos das tecnologias assistivas; a informação deve continuar disponível em texto.
11. Bootstrap informa limitações de acessibilidade nos estilos personalizados de validação do cliente e tooltips. Avaliar os exemplos antes de adotá-los; cores e estilos não garantem associação ou anúncio acessível.

### Notas de implementação e decisões de comportamento

- Ao navegar até um campo inválido, apresentar rótulo, indicação de erro e mensagem associada por `aria-describedby`, preservando também a associação com as instruções.

- Usar `aria-invalid` para indicar erro detectado; atualizar o estado quando o erro for corrigido e a nova validação confirmar a correção.

- Evitar anunciar a mesma mensagem simultaneamente pelo foco e por várias regiões `aria-live`.

## Referências

Referências adicionais sobre componentes do tipo Validação de formulários.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C WAI — User Notification](https://www.w3.org/WAI/tutorials/forms/notifications/) — Erros, notificações e retorno após envio de formulários.

### Design System

- [GOV.UK — Error message](https://design-system.service.gov.uk/components/error-message/) — Mensagens associadas aos campos e orientações de correção.
- [GOV.UK — Error summary](https://design-system.service.gov.uk/components/error-summary/) — Resumo de erros, links para os campos e gerenciamento de foco.
- [USWDS — Validation](https://designsystem.digital.gov/components/validation/) — Validação e retorno sobre requisitos de entrada.
- [Bootstrap — Validation](https://getbootstrap.com/docs/5.3/forms/validation/) — Exemplos de validação e limitações de acessibilidade documentadas.
