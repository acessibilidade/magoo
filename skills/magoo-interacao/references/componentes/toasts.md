# Toasts

- ID: `toasts`
- Categoria: mensagens
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-toasts.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Comunicam retornos breves sobre ações e atualizações sem bloquear a tarefa em andamento.

<!-- id: interaction-design -->
## Design de interação

<!-- id: toasts.designer-guide.frame -->
<!-- id: toasts.designer-guide.1 -->
### Guia rápido para designers

<!-- id: toasts.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: toasts.designer-guide.3 -->
#### Quando usar

<!-- id: toasts.designer-guide.4 -->
Use para retornos breves que não bloqueiam a tarefa. Avalie outro padrão para mensagens críticas.

<!-- id: toasts.designer-guide.5 -->
#### O que desenhar

<!-- id: toasts.designer-guide.6 -->
Mostre a mensagem e qualquer ação ou fechamento disponível.

<!-- id: toasts.designer-guide.7 -->
#### Como se comporta

<!-- id: toasts.designer-guide.8 -->
Uma mensagem apenas informativa não desloca a navegação pelo teclado. Se houver ação, ela precisa ficar disponível para uso.

<!-- id: toasts.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: toasts.designer-guide.10 -->
Defina duração, anúncio e acesso às ações. A mensagem não deve desaparecer antes de ser percebida ou utilizada.

<!-- id: toasts.designer-guide.11 -->
#### Como revisar

<!-- id: toasts.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: toasts.designer-guide.13 -->
### Orientações completas

<!-- id: toasts.interaction-design.1 -->

<!-- id: toasts.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes do tipo Toasts.

<!-- id: toasts.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: toasts.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: toasts.interaction-design.9 --> Antes de desaparecer, a mensagem é curta, clara e suficiente?
2. <!-- id: toasts.interaction-design.10 --> O toast não contém informação essencial que a pessoa precise consultar depois?
3. <!-- id: toasts.interaction-design.11 --> O tipo de mensagem é compreensível sem depender apenas de cor?

<!-- id: toasts.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: toasts.interaction-design.15 --> Quando houver ação ou fechar, há feedback visual no controle?
2. <!-- id: toasts.interaction-design.16 --> A mensagem não cobre controles importantes da tarefa atual?
3. <!-- id: toasts.interaction-design.17 --> É possível pausar, fechar ou acessar a ação quando o toast permanece temporário?

<!-- id: toasts.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: toasts.interaction-design.20 --> Controles do toast têm área de toque adequada?
2. <!-- id: toasts.interaction-design.21 --> O tempo de exibição é suficiente para leitura?
3. <!-- id: toasts.interaction-design.22 --> O toast não aparece em posição que atrapalhe teclado virtual ou conteúdo importante?

<!-- id: toasts.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: toasts.interaction-design.26 --> Controles internos entram na ordem de foco somente se forem realmente necessários?
2. <!-- id: toasts.interaction-design.27 --> O foco não é movido automaticamente para o toast sem necessidade?
3. <!-- id: toasts.interaction-design.28 --> É possível acionar ação ou fechamento por teclado quando existirem?

<!-- id: toasts.interaction-design.29 -->
### Projetando para uso com leitor de telas

1. <!-- id: toasts.interaction-design.31 --> A mensagem é anunciada sem interromper excessivamente a leitura?
2. <!-- id: toasts.interaction-design.32 --> Ação ou fechamento são anunciados como controles claros?
3. <!-- id: toasts.interaction-design.33 --> O conteúdo temporário não impede a pessoa de continuar o fluxo principal?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: toasts.interaction-methods.1 -->

<!-- id: toasts.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Toasts.

<!-- id: toasts.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: toasts.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: toasts.interaction-methods.10 --> Toasts informativos podem aparecer sem exigir interação.
- <!-- id: toasts.interaction-methods.11 --> Clicar em uma ação do toast executa a ação relacionada.
- <!-- id: toasts.interaction-methods.12 --> Clicar em fechar remove a mensagem quando aplicável.

<!-- id: toasts.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: toasts.interaction-methods.16 --> O foco não deve ser sequestrado para toast puramente informativo.
- <!-- id: toasts.interaction-methods.17 --> Se houver ação, ela deve ser alcançável por teclado enquanto o toast estiver disponível.
- <!-- id: toasts.interaction-methods.18 --> `ENTER` ou `SPACE` aciona botões internos.

<!-- id: toasts.interaction-methods.21 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: toasts.interaction-methods.23 --> Mensagens de status podem usar região viva educada.
- <!-- id: toasts.interaction-methods.24 --> Mensagens críticas devem avaliar se toast é realmente o padrão correto.
- <!-- id: toasts.interaction-methods.25 --> A mensagem não deve sumir antes de ser percebida ou antes de a ação ser usada.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: toasts.acceptance-criteria.1 -->

<!-- id: toasts.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: toasts.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém toasts

<!-- id: toasts.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: toasts.acceptance-criteria.8 --> QUANDO um toast aparece após uma ação
2. <!-- id: toasts.acceptance-criteria.9 --> VEJO a mensagem temporária sem perder o foco atual
3. <!-- id: toasts.acceptance-criteria.10 --> ENTÃO, quando o toast possui ação ou botão fechar e uso `Tab`
4. <!-- id: toasts.acceptance-criteria.12 --> VEJO que consigo alcançar e acionar o controle enquanto ele estiver disponível

<!-- id: toasts.acceptance-criteria.13 -->
#### Leitor de telas para desktop

1. <!-- id: toasts.acceptance-criteria.15 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - <!-- id: toasts.acceptance-criteria.17 --> OUÇO a mensagem quando ela representa uma atualização relevante.
   - <!-- id: toasts.acceptance-criteria.18 --> OUÇO controles internos com nomes claros quando existirem.
   - <!-- id: toasts.acceptance-criteria.19 --> Não perco o contexto de foco da tarefa principal sem necessidade.
2. <!-- id: toasts.acceptance-criteria.20 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: toasts.acceptance-criteria.21 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: toasts.acceptance-criteria.22 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: toasts.acceptance-criteria.24 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - <!-- id: toasts.acceptance-criteria.26 --> OUÇO a mensagem quando ela representa uma atualização relevante.
   - <!-- id: toasts.acceptance-criteria.27 --> Consigo chegar à ação do toast quando ela existir.
   - <!-- id: toasts.acceptance-criteria.28 --> Não perco o contexto da tarefa principal sem necessidade.
2. <!-- id: toasts.acceptance-criteria.29 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: toasts.acceptance-criteria.30 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: toasts.considerations.1 -->

<!-- id: toasts.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Toasts.

- <!-- id: toasts.considerations.5 --> Não use toast para erros críticos, confirmação destrutiva ou conteúdo que exige decisão obrigatória.
- <!-- id: toasts.considerations.6 --> Cuidado com tempo de desaparecimento automático.
- <!-- id: toasts.considerations.7 --> Ações dentro de toast precisam continuar disponíveis tempo suficiente para uso com teclado e leitor de telas.

<!-- id: references -->
## Referências

<!-- id: toasts.references.1 -->

<!-- id: toasts.references.2 -->
Referências adicionais sobre componentes do tipo Toasts.

<!-- id: toasts.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: toasts.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: toasts.references.10 -->
### Padrões de Design

- <!-- id: toasts.references.12 --> [MDN Web Docs: ARIA status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- <!-- id: toasts.references.17 --> [MDN Web Docs: ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- <!-- id: toasts.references.22 --> [Google - Material Design - Snackbar](https://m3.material.io/components/snackbar/overview)

<!-- id: toasts.references.27 -->
### Design System

- <!-- id: toasts.references.29 --> [IBM Carbon - Notification](https://carbondesignsystem.com/components/notification/usage/)
- <!-- id: toasts.references.34 --> [Adobe Spectrum - Toast](https://spectrum.adobe.com/page/toast/)
- <!-- id: toasts.references.39 --> [Bootstrap - Toasts](https://getbootstrap.com/docs/5.2/components/toasts/)
