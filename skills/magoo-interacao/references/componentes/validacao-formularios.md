# Validação de formulários

- ID: `validacao-formularios`
- Categoria: mensagens
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/mensagens/validacao-formularios.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Mensagens que identificam erros de preenchimento, orientam a correção e comunicam o resultado do envio de formulários.

<!-- id: interaction-design -->
## Design de interação

<!-- id: validacao-formularios.designer-guide.frame -->
<!-- id: validacao-formularios.designer-guide.1 -->
### Guia rápido para designers

<!-- id: validacao-formularios.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: validacao-formularios.designer-guide.3 -->
#### Quando usar

<!-- id: validacao-formularios.designer-guide.4 -->
Use para explicar problemas de preenchimento e orientar a correção. Falhas de serviço precisam de mensagens próprias.

<!-- id: validacao-formularios.designer-guide.5 -->
#### O que desenhar

<!-- id: validacao-formularios.designer-guide.6 -->
Mostre instruções, erro junto ao campo e resumo com links quando adequado. Explique a correção em texto, além de cor ou ícone.

<!-- id: validacao-formularios.designer-guide.7 -->
#### Como se comporta

<!-- id: validacao-formularios.designer-guide.8 -->
Preserve os valores após um envio inválido. Links do resumo levam ao campo. Não mostre erros antes de a pessoa ter oportunidade de preencher.

<!-- id: validacao-formularios.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: validacao-formularios.designer-guide.10 -->
Defina quando validar, o destino de foco após envio inválido e os anúncios. Em verificações assíncronas, considere o valor atual e evite respostas antigas.

<!-- id: validacao-formularios.designer-guide.11 -->
#### Como revisar

<!-- id: validacao-formularios.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: validacao-formularios.designer-guide.13 -->
### Orientações completas

<!-- id: validacao-formularios.block.1 -->

<!-- id: validacao-formularios.block.2 -->
Questionamentos que devem ser feitos ao projetar mensagens de validação de formulários.

<!-- id: validacao-formularios.block.3 -->
Avalie cada orientação conforme o contexto. A validação informa problemas na entrada e orienta a correção; falhas do serviço exigem mensagens próprias.

<!-- id: validacao-formularios.block.4 -->
### Projetando para a "não interação"

1. <!-- id: validacao-formularios.block.5 --> As instruções, formatos esperados e campos obrigatórios estão claros antes de preencher?
2. <!-- id: validacao-formularios.block.6 --> A mensagem identifica o campo, explica o problema e informa como corrigir, sem culpar a pessoa?
3. <!-- id: validacao-formularios.block.7 --> Os erros são identificáveis por texto, além de cor ou ícone?
4. <!-- id: validacao-formularios.block.8 --> Foi definido quando validar: no envio, ao sair do campo ou durante uma verificação específica? Evita-se mostrar erro antes de a pessoa ter oportunidade de preencher?

<!-- id: validacao-formularios.block.10 -->
### Projetando para uso com mouse

1. <!-- id: validacao-formularios.block.11 --> A mensagem permanece perto do campo e disponível enquanto houver erro?
2. <!-- id: validacao-formularios.block.12 --> Se houver resumo de erros, seus links levam ao campo correspondente?

<!-- id: validacao-formularios.block.14 -->
### Projetando para uso com gestos

1. <!-- id: validacao-formularios.block.15 --> É possível ler a mensagem e corrigir o campo mesmo com o teclado virtual aberto ou com ampliação?
2. <!-- id: validacao-formularios.block.16 --> Os links do resumo possuem área de toque adequada?

<!-- id: validacao-formularios.block.18 -->
### Projetando para uso com teclado

1. <!-- id: validacao-formularios.block.19 --> Após um envio inválido, há um destino de foco previsível, como o resumo de erros ou o primeiro campo inválido?
2. <!-- id: validacao-formularios.block.22 --> Os links do resumo podem ser percorridos com `Tab` e acionados com `Enter`?
3. <!-- id: validacao-formularios.block.23 --> Validar durante a edição preserva o foco e não impede a digitação?

<!-- id: validacao-formularios.block.25 -->
### Projetando para uso com leitor de telas

1. <!-- id: validacao-formularios.block.26 --> A mensagem está associada ao campo e o estado inválido é identificado?
2. <!-- id: validacao-formularios.block.27 --> Os erros novos são comunicados sem repetição excessiva ou leitura a cada tecla?
3. <!-- id: validacao-formularios.block.28 --> O resumo tem um título claro e links com nomes que identificam os problemas?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: validacao-formularios.block.30 -->

<!-- id: validacao-formularios.block.31 -->
### Interação com mouse

1. <!-- id: validacao-formularios.block.32 --> Ao enviar dados inválidos, apresentar mensagens específicas junto aos campos e, quando adequado, um resumo com links para correção.
2. <!-- id: validacao-formularios.block.33 --> Clicar em um link do resumo leva ao campo correspondente na mesma página e posiciona o foco para corrigi-lo.
3. <!-- id: validacao-formularios.block.34 --> Preservar os dados preenchidos, inclusive os que precisam de correção.

<!-- id: validacao-formularios.block.36 -->
### Interação com teclado

1. <!-- id: validacao-formularios.block.39 --> `Tab` e `Shift + Tab` percorrem campos, botão de envio e links do resumo na ordem da interface.
2. <!-- id: validacao-formularios.block.43 --> `Enter` ou `Barra de espaço` ativa o botão de envio; `Enter` ativa os links do resumo.
3. <!-- id: validacao-formularios.block.44 --> Após um envio rejeitado, posicionar o foco no resumo ou no primeiro campo inválido, conforme o padrão escolhido.
4. <!-- id: validacao-formularios.block.45 --> Durante validações ao sair do campo ou durante a edição, manter o fluxo de foco e a entrada de texto.

<!-- id: validacao-formularios.block.47 -->
### Interação com gestos

1. <!-- id: validacao-formularios.block.48 --> `Tocar` no botão de envio permite validar o formulário.
2. <!-- id: validacao-formularios.block.49 --> `Tocar` no link do resumo leva ao campo; a mensagem continua disponível para consulta e correção.

<!-- id: validacao-formularios.block.51 -->
### Interação com teclado (ou gestos) + leitor de telas

1. <!-- id: validacao-formularios.methods-review.2 --> Ao navegar até um campo inválido com leitor de telas, a pessoa identifica seu rótulo, erro e orientação de correção.
2. <!-- id: validacao-formularios.methods-review.4 --> Após corrigir um campo e executar a validação prevista, a pessoa percebe se o erro foi resolvido ou continua presente.
3. <!-- id: validacao-formularios.block.56 --> Se o foco for movido para um resumo, permitir a leitura de seu título, erros e links. Se o foco permanecer onde estava, anunciar erros dinâmicos com uma região de atualização adequada ao contexto.
4. <!-- id: validacao-formularios.methods-review.6 --> Ao receber o retorno da validação com leitor de telas, a pessoa identifica a mensagem sem várias repetições simultâneas do mesmo erro.

<!-- id: validacao-formularios.block.60 -->
### Correção e novo envio

1. <!-- id: validacao-formularios.block.61 --> Após uma correção confirmada, remover ou atualizar a mensagem e a entrada correspondente no resumo, sem apagar outros erros.
2. <!-- id: validacao-formularios.block.62 --> Enviar novamente executa a validação necessária; somente confirmar sucesso depois que a operação for concluída.
3. <!-- id: validacao-formularios.block.63 --> Em verificações assíncronas, informar o andamento e evitar que respostas antigas substituam o resultado do valor atual.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: validacao-formularios.block.65 -->

<!-- id: validacao-formularios.block.66 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: validacao-formularios.block.67 -->
### Cenário: Considerando que estou em uma página que contém um formulário com validação

<!-- id: validacao-formularios.block.68 -->
#### Navegação por teclado

1. <!-- id: validacao-formularios.block.70 --> QUANDO uso `Tab` para mover o foco até o botão de envio
2. <!-- id: validacao-formularios.block.71 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: validacao-formularios.block.74 --> ENTÃO, quando uso `Enter` ou `Barra de espaço` para enviar dados inválidos
4. <!-- id: validacao-formularios.block.75 --> VEJO mensagens que identificam os campos com erro e explicam como corrigir
5. <!-- id: validacao-formularios.block.76 --> E percebo que o foco foi direcionado ao resumo ou ao primeiro campo inválido, conforme o padrão definido
6. <!-- id: validacao-formularios.block.79 --> QUANDO uso `Tab` para focar um link do resumo e `Enter` para ativá-lo
7. <!-- id: validacao-formularios.block.80 --> VEJO que o foco chega ao campo correspondente na mesma página e posso corrigi-lo

<!-- id: validacao-formularios.block.82 -->
#### Leitor de telas para desktop

1. <!-- id: validacao-formularios.block.83 --> QUANDO uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e envio um formulário com dados inválidos
2. <!-- id: validacao-formularios.block.84 --> OUÇO ou percebo que o envio não foi concluído e que existem erros a corrigir
3. <!-- id: validacao-formularios.block.86 --> ENTÃO, quando uso `Tab` para navegar até um campo inválido
4. <!-- id: validacao-formularios.block.87 --> OUÇO o rótulo, a indicação de erro e a orientação de correção
5. <!-- id: validacao-formularios.block.89 --> E, quando uso `Enter` para ativar um link do resumo, percebo que cheguei ao campo correspondente
6. <!-- id: validacao-formularios.block.90 --> OUÇO ou percebo as mensagens sem anúncios duplicados desnecessários

<!-- id: validacao-formularios.block.92 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: validacao-formularios.block.93 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e envio um formulário com dados inválidos
2. <!-- id: validacao-formularios.block.94 --> OUÇO ou percebo que o envio não foi concluído e que existem erros a corrigir
3. <!-- id: validacao-formularios.block.95 --> ENTÃO, quando deslizo o dedo para navegar até um campo inválido
4. <!-- id: validacao-formularios.block.96 --> OUÇO o rótulo, a indicação de erro e a orientação de correção
5. <!-- id: validacao-formularios.block.97 --> E, quando toco duas vezes ou uso o gesto adequado para ativar um link do resumo, percebo que cheguei ao campo correspondente
6. <!-- id: validacao-formularios.block.98 --> OUÇO ou percebo as mensagens sem anúncios duplicados desnecessários

<!-- id: validacao-formularios.block.100 -->
#### Correção e novo envio

1. <!-- id: validacao-formularios.block.101 --> QUANDO corrijo um campo e a nova validação confirma a correção
2. <!-- id: validacao-formularios.block.102 --> VEJO que a mensagem e o estado inválido daquele campo são atualizados, preservando os outros erros e os valores preenchidos
3. <!-- id: validacao-formularios.block.103 --> ENTÃO, quando envio o formulário com todas as entradas válidas
4. <!-- id: validacao-formularios.block.104 --> VEJO ou OUÇO a confirmação somente depois que a operação for concluída

<!-- id: validacao-formularios.block.106 -->
#### Validação durante a edição

1. <!-- id: validacao-formularios.block.107 --> QUANDO uma validação ocorre ao sair de um campo ou durante uma verificação específica
2. <!-- id: validacao-formularios.block.108 --> VEJO ou OUÇO uma mensagem no momento definido, sem erro prematuro antes de preencher
3. <!-- id: validacao-formularios.block.109 --> E percebo que o foco e a digitação não foram interrompidos

<!-- id: considerations -->
## Pontos de atenção

<!-- id: validacao-formularios.block.111 -->

1. <!-- id: validacao-formularios.block.112 --> Preferir mensagens concretas, como "Informe um e-mail no formato nome@exemplo.com", em vez de apenas "Valor inválido".
2. <!-- id: validacao-formularios.block.113 --> Distinguir campo vazio obrigatório, formato incorreto e regra de negócio. Não tratar uma falha de conexão ou indisponibilidade do serviço como erro de preenchimento.
3. <!-- id: validacao-formularios.block.114 --> Não depender apenas de bordas vermelhas, ícones ou mensagens temporárias. Manter a orientação até que a correção seja confirmada.
4. <!-- id: validacao-formularios.block.117 --> Associar o erro ao campo com `aria-describedby` e manter as instruções existentes nessa associação. Usar `aria-invalid` apenas quando o erro for detectado.
5. <!-- id: validacao-formularios.block.118 --> O resumo complementa as mensagens junto aos campos. Seus links devem indicar para leitores de tela que levam ao campo na mesma página e mover o foco para o destino adequado.
6. <!-- id: validacao-formularios.block.121 --> Escolher entre o anúncio pelo foco e uma região dinâmica conforme o fluxo. Usar `role="alert"` apenas quando a urgência justificar; `role="status"` pode servir para atualizações não urgentes. Evitar anúncios a cada tecla.
7. <!-- id: validacao-formularios.block.122 --> Preservar valores após um envio inválido. Não incluir senhas ou outros dados sensíveis no resumo ou em mensagens de estado.
8. <!-- id: validacao-formularios.block.123 --> A validação no cliente ajuda a orientar, mas a validação no servidor continua necessária. Verificações assíncronas devem considerar o valor atual e informar falhas da verificação.
9. <!-- id: validacao-formularios.block.124 --> Não desabilitar o botão de envio como única forma de indicar problemas: a pessoa precisa saber o que falta e como corrigir.
10. <!-- id: validacao-formularios.block.125 --> Se usar ícones complementares, preferir Material Icons e ocultar os decorativos das tecnologias assistivas; a informação deve continuar disponível em texto.
11. <!-- id: validacao-formularios.block.126 --> Bootstrap informa limitações de acessibilidade nos estilos personalizados de validação do cliente e tooltips. Avaliar os exemplos antes de adotá-los; cores e estilos não garantem associação ou anúncio acessível.

<!-- id: validacao-formularios.methods-review.7 -->
### Notas de implementação e decisões de comportamento

- <!-- id: validacao-formularios.block.53 --> Ao navegar até um campo inválido, apresentar rótulo, indicação de erro e mensagem associada por `aria-describedby`, preservando também a associação com as instruções.

- <!-- id: validacao-formularios.block.55 --> Usar `aria-invalid` para indicar erro detectado; atualizar o estado quando o erro for corrigido e a nova validação confirmar a correção.

- <!-- id: validacao-formularios.block.58 --> Evitar anunciar a mesma mensagem simultaneamente pelo foco e por várias regiões `aria-live`.

<!-- id: references -->
## Referências

<!-- id: validacao-formularios.block.128 -->

<!-- id: validacao-formularios.references-standard.1 -->
Referências adicionais sobre componentes do tipo Validação de formulários.

<!-- id: validacao-formularios.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: validacao-formularios.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: validacao-formularios.block.129 -->
### Padrões de Design

- <!-- id: validacao-formularios.block.133 --> [W3C WAI — User Notification](https://www.w3.org/WAI/tutorials/forms/notifications/) — Erros, notificações e retorno após envio de formulários.

<!-- id: validacao-formularios.block.135 -->
### Design System

- <!-- id: validacao-formularios.block.139 --> [GOV.UK — Error message](https://design-system.service.gov.uk/components/error-message/) — Mensagens associadas aos campos e orientações de correção.
- <!-- id: validacao-formularios.block.143 --> [GOV.UK — Error summary](https://design-system.service.gov.uk/components/error-summary/) — Resumo de erros, links para os campos e gerenciamento de foco.
- <!-- id: validacao-formularios.block.147 --> [USWDS — Validation](https://designsystem.digital.gov/components/validation/) — Validação e retorno sobre requisitos de entrada.
- <!-- id: validacao-formularios.block.151 --> [Bootstrap — Validation](https://getbootstrap.com/docs/5.3/forms/validation/) — Exemplos de validação e limitações de acessibilidade documentadas.
