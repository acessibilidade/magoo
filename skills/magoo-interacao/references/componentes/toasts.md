# Toasts

- ID: `toasts`
- Categoria: mensagens
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-toasts.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Comunicam retornos breves sobre ações e atualizações sem bloquear a tarefa em andamento.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para retornos breves que não bloqueiam a tarefa. Avalie outro padrão para mensagens críticas.

#### O que desenhar

Mostre a mensagem e qualquer ação ou fechamento disponível.

#### Como se comporta

Uma mensagem apenas informativa não desloca a navegação pelo teclado. Se houver ação, ela precisa ficar disponível para uso.

#### O que documentar no Figma

Defina duração, anúncio e acesso às ações. A mensagem não deve desaparecer antes de ser percebida ou utilizada.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes do tipo Toasts.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de desaparecer, a mensagem é curta, clara e suficiente?
2. O toast não contém informação essencial que a pessoa precise consultar depois?
3. O tipo de mensagem é compreensível sem depender apenas de cor?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Quando houver ação ou fechar, há feedback visual no controle?
2. A mensagem não cobre controles importantes da tarefa atual?
3. É possível pausar, fechar ou acessar a ação quando o toast permanece temporário?

### Projetando para uso com gestos

1. Controles do toast têm área de toque adequada?
2. O tempo de exibição é suficiente para leitura?
3. O toast não aparece em posição que atrapalhe teclado virtual ou conteúdo importante?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Controles internos entram na ordem de foco somente se forem realmente necessários?
2. O foco não é movido automaticamente para o toast sem necessidade?
3. É possível acionar ação ou fechamento por teclado quando existirem?

### Projetando para uso com leitor de telas

1. A mensagem é anunciada sem interromper excessivamente a leitura?
2. Ação ou fechamento são anunciados como controles claros?
3. O conteúdo temporário não impede a pessoa de continuar o fluxo principal?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Toasts.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Toasts informativos podem aparecer sem exigir interação.
- Clicar em uma ação do toast executa a ação relacionada.
- Clicar em fechar remove a mensagem quando aplicável.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- O foco não deve ser sequestrado para toast puramente informativo.
- Se houver ação, ela deve ser alcançável por teclado enquanto o toast estiver disponível.
- `ENTER` ou `SPACE` aciona botões internos.

### Interação com teclado (ou gestos) + leitor de telas

- Mensagens de status podem usar região viva educada.
- Mensagens críticas devem avaliar se toast é realmente o padrão correto.
- A mensagem não deve sumir antes de ser percebida ou antes de a ação ser usada.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém toasts

#### Navegação por teclado

1. QUANDO um toast aparece após uma ação
2. VEJO a mensagem temporária sem perder o foco atual
3. ENTÃO, quando o toast possui ação ou botão fechar e uso `Tab`
4. VEJO que consigo alcançar e acionar o controle enquanto ele estiver disponível

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - OUÇO a mensagem quando ela representa uma atualização relevante.
   - OUÇO controles internos com nomes claros quando existirem.
   - Não perco o contexto de foco da tarefa principal sem necessidade.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - OUÇO a mensagem quando ela representa uma atualização relevante.
   - Consigo chegar à ação do toast quando ela existir.
   - Não perco o contexto da tarefa principal sem necessidade.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Toasts.

- Não use toast para erros críticos, confirmação destrutiva ou conteúdo que exige decisão obrigatória.
- Cuidado com tempo de desaparecimento automático.
- Ações dentro de toast precisam continuar disponíveis tempo suficiente para uso com teclado e leitor de telas.

## Referências

Referências adicionais sobre componentes do tipo Toasts.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [MDN Web Docs: ARIA status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [MDN Web Docs: ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [Google - Material Design - Snackbar](https://m3.material.io/components/snackbar/overview)

### Design System

- [IBM Carbon - Notification](https://carbondesignsystem.com/components/notification/usage/)
- [Adobe Spectrum - Toast](https://spectrum.adobe.com/page/toast/)
- [Bootstrap - Toasts](https://getbootstrap.com/docs/5.2/components/toasts/)
