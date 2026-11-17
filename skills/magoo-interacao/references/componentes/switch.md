# Switch

- ID: `switch`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-switch.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Alterna uma configuração entre dois estados, como ativado e desativado.

<!-- id: interaction-design -->
## Design de interação

<!-- id: switch.designer-guide.frame -->
<!-- id: switch.designer-guide.1 -->
### Guia rápido para designers

<!-- id: switch.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: switch.designer-guide.3 -->
#### Quando usar

<!-- id: switch.designer-guide.4 -->
Use para ligar ou desligar uma configuração, geralmente com aplicação imediata.

<!-- id: switch.designer-guide.5 -->
#### O que desenhar

<!-- id: switch.designer-guide.6 -->
Mostre um rótulo estável, estados ligado e desligado e foco visível.

<!-- id: switch.designer-guide.7 -->
#### Como se comporta

<!-- id: switch.designer-guide.8 -->
Clique, toque ou `espaço` alterna entre dois estados. Este componente não possui estado misto.

<!-- id: switch.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: switch.designer-guide.10 -->
Registre o efeito da mudança e quando ele é aplicado. O novo estado precisa ser comunicado.

<!-- id: switch.designer-guide.11 -->
#### Como revisar

<!-- id: switch.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: switch.designer-guide.13 -->
### Orientações completas

<!-- id: switch.interaction-design.1 -->

<!-- id: switch.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Switch.

<!-- id: switch.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: switch.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: switch.interaction-design.9 --> Antes de interagir é possível perceber que o componente alterna entre ligado e desligado?
2. <!-- id: switch.interaction-design.10 --> O rótulo descreve a configuração controlada sem depender apenas do estado?
3. <!-- id: switch.interaction-design.11 --> O estado atual está visualmente claro?

<!-- id: switch.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: switch.interaction-design.15 --> Há feedback visual ao passar o mouse?
2. <!-- id: switch.interaction-design.16 --> Ao clicar no controle ou rótulo, o estado alterna imediatamente?
3. <!-- id: switch.interaction-design.17 --> A mudança de estado é visualmente clara?

<!-- id: switch.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: switch.interaction-design.20 --> O alvo tocável inclui o rótulo quando possível?
2. <!-- id: switch.interaction-design.21 --> Ao `tocar`, o estado alterna entre ligado e desligado?
3. <!-- id: switch.interaction-design.22 --> A área de toque é confortável?

<!-- id: switch.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: switch.interaction-design.26 --> Há foco visível no switch?
2. <!-- id: switch.interaction-design.27 --> É possível alternar o estado com `SPACE`?
3. <!-- id: switch.interaction-design.29 --> A navegação por `TAB` segue o fluxo esperado?

<!-- id: switch.interaction-design.31 -->
### Projetando para uso com leitor de telas

1. <!-- id: switch.interaction-design.33 --> O rótulo do switch é anunciado?
2. <!-- id: switch.interaction-design.34 --> O papel de switch é anunciado quando utilizado?
3. <!-- id: switch.interaction-design.35 --> O estado ligado ou desligado é anunciado?
4. <!-- id: switch.interaction-design.36 --> A mudança de estado é perceptível após o acionamento?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: switch.interaction-methods.1 -->

<!-- id: switch.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Switch.

<!-- id: switch.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: switch.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: switch.interaction-methods.10 --> Clicar no switch alterna entre ligado e desligado.
- <!-- id: switch.interaction-methods.11 --> Clicar no rótulo deve alternar o estado quando estiver associado ao controle.
- <!-- id: switch.interaction-methods.12 --> A ação geralmente é aplicada imediatamente, sem botão de confirmação.

<!-- id: switch.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: switch.interaction-methods.16 --> `TAB` move o foco para o switch.
- <!-- id: switch.interaction-methods.18 --> `SPACE` alterna o estado.
- <!-- id: switch.interaction-methods.20 --> `ENTER` pode funcionar em implementações customizadas, mas não deve substituir o suporte à `barra de espaço`.

<!-- id: switch.interaction-methods.22 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: switch.interaction-methods.24 --> O componente deve expor nome, papel e estado.
- <!-- id: switch.interaction-methods.25 --> O estado deve ser binário e permanecer ligado/desligado, sem estado misto.
- <!-- id: switch.interaction-methods.26 --> A mudança deve ser anunciada pelo novo estado.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: switch.acceptance-criteria.1 -->

<!-- id: switch.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: switch.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém switch

<!-- id: switch.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: switch.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para um switch
2. <!-- id: switch.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: switch.acceptance-criteria.11 --> ENTÃO, quando uso a tecla `Space`
4. <!-- id: switch.acceptance-criteria.13 --> VEJO que o switch alterna entre ligado e desligado

<!-- id: switch.acceptance-criteria.14 -->
#### Leitor de telas para desktop

1. <!-- id: switch.acceptance-criteria.16 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - <!-- id: switch.acceptance-criteria.18 --> OUÇO o rótulo e a finalidade do switch.
   - <!-- id: switch.acceptance-criteria.19 --> OUÇO que o componente é um switch.
   - <!-- id: switch.acceptance-criteria.20 --> OUÇO seu estado atual, como ligado ou desligado.
2. <!-- id: switch.acceptance-criteria.21 --> ENTÃO, quando aciono ou altero o componente
3. <!-- id: switch.acceptance-criteria.22 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: switch.acceptance-criteria.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: switch.acceptance-criteria.25 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - <!-- id: switch.acceptance-criteria.27 --> OUÇO o rótulo e a finalidade do switch.
   - <!-- id: switch.acceptance-criteria.28 --> OUÇO que o componente é um switch.
   - <!-- id: switch.acceptance-criteria.29 --> OUÇO seu estado atual, como ligado ou desligado.
2. <!-- id: switch.acceptance-criteria.30 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. <!-- id: switch.acceptance-criteria.31 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: switch.considerations.1 -->

<!-- id: switch.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Switch.

- <!-- id: switch.considerations.5 --> Use switch para configurações binárias que entram em vigor imediatamente.
- <!-- id: switch.considerations.6 --> Se a ação precisa de confirmação, checkbox ou outro padrão pode ser mais adequado.
- <!-- id: switch.considerations.7 --> Não altere o rótulo de forma que o nome acessível mude e confunda o estado anunciado.

<!-- id: references -->
## Referências

<!-- id: switch.references.1 -->

<!-- id: switch.references.2 -->
Referências adicionais sobre componentes do tipo Switch.

<!-- id: switch.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: switch.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: switch.references.10 -->
### Padrões de Design

- <!-- id: switch.references.12 --> [W3C APG: Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- <!-- id: switch.references.17 --> [Google - Material Design - Switch](https://m3.material.io/components/switch/overview)

<!-- id: switch.references.22 -->
### Design System

- <!-- id: switch.references.24 --> [US.gov - Checkbox](https://designsystem.digital.gov/components/checkbox/)
- <!-- id: switch.references.29 --> [IBM Carbon - Toggle](https://carbondesignsystem.com/components/toggle/usage/)
- <!-- id: switch.references.34 --> [Adobe Spectrum - Switch](https://spectrum.adobe.com/page/switch/)
- <!-- id: switch.references.39 --> [Bootstrap - Switches](https://getbootstrap.com/docs/5.2/forms/checks-radios/#switches)
