# Alertas

- ID: `alertas`
- Categoria: mensagens
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-alertas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Mensagens que comunicam informações importantes, orientam decisões e ajudam a entender o que aconteceu.

<!-- id: interaction-design -->
## Design de interação

<!-- id: alertas.designer-guide.frame -->
<!-- id: alertas.designer-guide.1 -->
### Guia rápido para designers

<!-- id: alertas.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: alertas.designer-guide.3 -->
#### Quando usar

<!-- id: alertas.designer-guide.4 -->
Use para informar algo importante e orientar a próxima decisão.

<!-- id: alertas.designer-guide.5 -->
#### O que desenhar

<!-- id: alertas.designer-guide.6 -->
Mostre mensagem clara, ações e fechamento quando existirem.

<!-- id: alertas.designer-guide.7 -->
#### Como se comporta

<!-- id: alertas.designer-guide.8 -->
Ler a mensagem não exige interação. Pelo teclado, apenas os controles internos precisam ser alcançados.

<!-- id: alertas.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: alertas.designer-guide.10 -->
Defina a urgência e como anunciar mensagens novas. Erros ligados a campos precisam acompanhar esses campos.

<!-- id: alertas.designer-guide.11 -->
#### Como revisar

<!-- id: alertas.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: alertas.designer-guide.13 -->
### Orientações completas

<!-- id: alertas.interaction-design.1 -->

<!-- id: alertas.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes do tipo Alertas.

<!-- id: alertas.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: alertas.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: alertas.interaction-design.9 --> Antes de interagir ou ler a tela é possível perceber que há uma mensagem importante?
2. <!-- id: alertas.interaction-design.10 --> O tipo de alerta é compreensível sem depender apenas de cor ou ícone?
3. <!-- id: alertas.interaction-design.11 --> O texto informa claramente o que aconteceu e o que a pessoa pode fazer?

<!-- id: alertas.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: alertas.interaction-design.15 --> Links ou botões dentro do alerta possuem feedback visual ao passar o mouse?
2. <!-- id: alertas.interaction-design.16 --> O alerta não cobre conteúdo essencial sem necessidade?
3. <!-- id: alertas.interaction-design.17 --> Alertas descartáveis possuem controle visível para fechar?

<!-- id: alertas.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: alertas.interaction-design.20 --> Controles dentro do alerta possuem área de toque confortável?
2. <!-- id: alertas.interaction-design.21 --> A mensagem continua visível tempo suficiente para ser lida?
3. <!-- id: alertas.interaction-design.22 --> Quando o alerta pode ser fechado, o toque fora dele não causa fechamento inesperado?

<!-- id: alertas.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: alertas.interaction-design.26 --> Componentes interativos dentro do alerta entram na ordem natural de foco?
2. <!-- id: alertas.interaction-design.27 --> O foco visível é preservado em links ou botões do alerta?
3. <!-- id: alertas.interaction-design.28 --> Ao fechar um alerta por teclado, o foco vai para um ponto previsível?

<!-- id: alertas.interaction-design.29 -->
### Projetando para uso com leitor de telas

1. <!-- id: alertas.interaction-design.31 --> Alertas críticos são anunciados de forma adequada?
2. <!-- id: alertas.interaction-design.32 --> Alertas informativos não interrompem a leitura sem necessidade?
3. <!-- id: alertas.interaction-design.33 --> Links, botões e mensagens de erro dentro do alerta possuem nomes claros?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: alertas.interaction-methods.1 -->

<!-- id: alertas.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Alertas.

<!-- id: alertas.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: alertas.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: alertas.interaction-methods.10 --> Ler o alerta não exige interação.
- <!-- id: alertas.interaction-methods.11 --> Clicar em links ou botões internos executa a ação relacionada.
- <!-- id: alertas.interaction-methods.12 --> Clicar no controle de fechamento remove ou oculta o alerta quando aplicável.

<!-- id: alertas.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: alertas.interaction-methods.16 --> `TAB` deve alcançar apenas controles interativos dentro do alerta.
- <!-- id: alertas.interaction-methods.18 --> `ENTER` aciona links e botões internos.
- <!-- id: alertas.interaction-methods.20 --> Alertas puramente informativos não devem receber foco apenas para serem lidos.

<!-- id: alertas.interaction-methods.21 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: alertas.methods-review.2 --> Quando uma mensagem urgente aparece, seu conteúdo pode ser anunciado sem deslocar o foco da tarefa.
- <!-- id: alertas.methods-review.4 --> Quando uma mensagem de status aparece, a pessoa recebe o retorno sem precisar focar o texto nem interromper a entrada em andamento.
- <!-- id: alertas.methods-followup.1 --> Ao navegar até um campo com erro, a pessoa encontra a mensagem correspondente e pode corrigir o valor.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: alertas.acceptance-criteria.1 -->

<!-- id: alertas.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: alertas.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém alertas

<!-- id: alertas.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: alertas.acceptance-criteria.8 --> QUANDO um alerta aparece na tela
2. <!-- id: alertas.acceptance-criteria.9 --> VEJO a mensagem e seu tipo visualmente indicados
3. <!-- id: alertas.acceptance-criteria.10 --> ENTÃO, quando uso `Tab`
4. <!-- id: alertas.acceptance-criteria.12 --> VEJO foco apenas nos controles interativos dentro do alerta, se existirem
5. <!-- id: alertas.acceptance-criteria.13 --> ENTÃO, quando aciono um controle do alerta
6. <!-- id: alertas.acceptance-criteria.14 --> VEJO que a ação correspondente é executada

<!-- id: alertas.acceptance-criteria.15 -->
#### Leitor de telas para desktop

1. <!-- id: alertas.acceptance-criteria.17 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - <!-- id: alertas.acceptance-criteria.19 --> OUÇO a mensagem do alerta quando ela for crítica ou dinâmica.
   - <!-- id: alertas.acceptance-criteria.20 --> OUÇO links e botões internos com nomes claros.
   - <!-- id: alertas.acceptance-criteria.21 --> OUÇO a relação entre erro e campo quando o alerta estiver ligado a validação.
2. <!-- id: alertas.acceptance-criteria.22 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: alertas.acceptance-criteria.23 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: alertas.acceptance-criteria.24 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: alertas.acceptance-criteria.26 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - <!-- id: alertas.acceptance-criteria.28 --> OUÇO a mensagem do alerta quando ela for crítica ou dinâmica.
   - <!-- id: alertas.acceptance-criteria.29 --> Consigo navegar pelos controles internos quando existirem.
   - <!-- id: alertas.acceptance-criteria.30 --> OUÇO a relação entre erro e campo quando o alerta estiver ligado a validação.
2. <!-- id: alertas.acceptance-criteria.31 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: alertas.acceptance-criteria.32 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: alertas.considerations.1 -->

<!-- id: alertas.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Alertas.

- <!-- id: alertas.considerations.5 --> Não use alerta para qualquer mensagem decorativa; reserve para informação relevante ao fluxo.
- <!-- id: alertas.considerations.6 --> Evite alertas que desaparecem rápido demais ou sem controle da pessoa.
- <!-- id: alertas.considerations.7 --> Não dependa apenas de cor para comunicar sucesso, erro, aviso ou informação.

<!-- id: alertas.methods-review.5 -->
### Notas de implementação e decisões de comportamento

- <!-- id: alertas.interaction-methods.23 --> Mensagens dinâmicas importantes podem usar `role="alert"`.

- <!-- id: alertas.interaction-methods.25 --> Mensagens de status menos urgentes podem usar `role="status"`.

- <!-- id: alertas.interaction-methods.27 --> Erros de formulário devem estar associados aos respectivos campos quando aplicável.

<!-- id: references -->
## Referências

<!-- id: alertas.references.1 -->

<!-- id: alertas.references.2 -->
Referências adicionais sobre componentes do tipo Alertas.

<!-- id: alertas.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: alertas.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: alertas.references.10 -->
### Padrões de Design

- <!-- id: alertas.references.12 --> [W3C APG: Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- <!-- id: alertas.references.17 --> [MDN Web Docs: ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- <!-- id: alertas.references.22 --> [MDN Web Docs: ARIA status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)

<!-- id: alertas.references.27 -->
### Design System

- <!-- id: alertas.references.29 --> [US.gov - Alert](https://designsystem.digital.gov/components/alert/)
- <!-- id: alertas.references.34 --> [IBM Carbon - Notification](https://carbondesignsystem.com/components/notification/usage/)
- <!-- id: alertas.references.39 --> [Adobe Spectrum - Inline Alert](https://spectrum.adobe.com/page/inline-alert/)
- <!-- id: alertas.references.44 --> [Bootstrap - Alerts](https://getbootstrap.com/docs/5.2/components/alerts/)
