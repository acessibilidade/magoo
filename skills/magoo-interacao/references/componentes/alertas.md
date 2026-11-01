# Alertas

- ID: `alertas`
- Categoria: mensagens
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-alertas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Mensagens que comunicam informações importantes, orientam decisões e ajudam a entender o que aconteceu.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para informar algo importante e orientar a próxima decisão.

#### O que desenhar

Mostre mensagem clara, ações e fechamento quando existirem.

#### Como se comporta

Ler a mensagem não exige interação. Pelo teclado, apenas os controles internos precisam ser alcançados.

#### O que documentar no Figma

Defina a urgência e como anunciar mensagens novas. Erros ligados a campos precisam acompanhar esses campos.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes do tipo Alertas.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir ou ler a tela é possível perceber que há uma mensagem importante?
2. O tipo de alerta é compreensível sem depender apenas de cor ou ícone?
3. O texto informa claramente o que aconteceu e o que a pessoa pode fazer?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Links ou botões dentro do alerta possuem feedback visual ao passar o mouse?
2. O alerta não cobre conteúdo essencial sem necessidade?
3. Alertas descartáveis possuem controle visível para fechar?

### Projetando para uso com gestos

1. Controles dentro do alerta possuem área de toque confortável?
2. A mensagem continua visível tempo suficiente para ser lida?
3. Quando o alerta pode ser fechado, o toque fora dele não causa fechamento inesperado?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Componentes interativos dentro do alerta entram na ordem natural de foco?
2. O foco visível é preservado em links ou botões do alerta?
3. Ao fechar um alerta por teclado, o foco vai para um ponto previsível?

### Projetando para uso com leitor de telas

1. Alertas críticos são anunciados de forma adequada?
2. Alertas informativos não interrompem a leitura sem necessidade?
3. Links, botões e mensagens de erro dentro do alerta possuem nomes claros?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Alertas.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Ler o alerta não exige interação.
- Clicar em links ou botões internos executa a ação relacionada.
- Clicar no controle de fechamento remove ou oculta o alerta quando aplicável.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `TAB` deve alcançar apenas controles interativos dentro do alerta.
- `ENTER` aciona links e botões internos.
- Alertas puramente informativos não devem receber foco apenas para serem lidos.

### Interação com teclado (ou gestos) + leitor de telas

- Quando uma mensagem urgente aparece, seu conteúdo pode ser anunciado sem deslocar o foco da tarefa.
- Quando uma mensagem de status aparece, a pessoa recebe o retorno sem precisar focar o texto nem interromper a entrada em andamento.
- Ao navegar até um campo com erro, a pessoa encontra a mensagem correspondente e pode corrigir o valor.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém alertas

#### Navegação por teclado

1. QUANDO um alerta aparece na tela
2. VEJO a mensagem e seu tipo visualmente indicados
3. ENTÃO, quando uso `Tab`
4. VEJO foco apenas nos controles interativos dentro do alerta, se existirem
5. ENTÃO, quando aciono um controle do alerta
6. VEJO que a ação correspondente é executada

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - OUÇO a mensagem do alerta quando ela for crítica ou dinâmica.
   - OUÇO links e botões internos com nomes claros.
   - OUÇO a relação entre erro e campo quando o alerta estiver ligado a validação.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - OUÇO a mensagem do alerta quando ela for crítica ou dinâmica.
   - Consigo navegar pelos controles internos quando existirem.
   - OUÇO a relação entre erro e campo quando o alerta estiver ligado a validação.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Alertas.

- Não use alerta para qualquer mensagem decorativa; reserve para informação relevante ao fluxo.
- Evite alertas que desaparecem rápido demais ou sem controle da pessoa.
- Não dependa apenas de cor para comunicar sucesso, erro, aviso ou informação.

### Notas de implementação e decisões de comportamento

- Mensagens dinâmicas importantes podem usar `role="alert"`.

- Mensagens de status menos urgentes podem usar `role="status"`.

- Erros de formulário devem estar associados aos respectivos campos quando aplicável.

## Referências

Referências adicionais sobre componentes do tipo Alertas.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [MDN Web Docs: ARIA alert role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [MDN Web Docs: ARIA status role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)

### Design System

- [US.gov - Alert](https://designsystem.digital.gov/components/alert/)
- [IBM Carbon - Notification](https://carbondesignsystem.com/components/notification/usage/)
- [Adobe Spectrum - Inline Alert](https://spectrum.adobe.com/page/inline-alert/)
- [Bootstrap - Alerts](https://getbootstrap.com/docs/5.2/components/alerts/)
