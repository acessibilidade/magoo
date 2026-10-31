# Switch

- ID: `switch`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-switch.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Alterna uma configuração entre dois estados, como ativado e desativado.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para ligar ou desligar uma configuração, geralmente com aplicação imediata.

#### O que desenhar

Mostre um rótulo estável, estados ligado e desligado e foco visível.

#### Como se comporta

Clique, toque ou `espaço` alterna entre dois estados. Este componente não possui estado misto.

#### O que documentar no Figma

Registre o efeito da mudança e quando ele é aplicado. O novo estado precisa ser comunicado.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Switch.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir é possível perceber que o componente alterna entre ligado e desligado?
2. O rótulo descreve a configuração controlada sem depender apenas do estado?
3. O estado atual está visualmente claro?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse?
2. Ao clicar no controle ou rótulo, o estado alterna imediatamente?
3. A mudança de estado é visualmente clara?

### Projetando para uso com gestos

1. O alvo tocável inclui o rótulo quando possível?
2. Ao `tocar`, o estado alterna entre ligado e desligado?
3. A área de toque é confortável?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há foco visível no switch?
2. É possível alternar o estado com `SPACE`?
3. A navegação por `TAB` segue o fluxo esperado?

### Projetando para uso com leitor de telas

1. O rótulo do switch é anunciado?
2. O papel de switch é anunciado quando utilizado?
3. O estado ligado ou desligado é anunciado?
4. A mudança de estado é perceptível após o acionamento?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Switch.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar no switch alterna entre ligado e desligado.
- Clicar no rótulo deve alternar o estado quando estiver associado ao controle.
- A ação geralmente é aplicada imediatamente, sem botão de confirmação.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `TAB` move o foco para o switch.
- `SPACE` alterna o estado.
- `ENTER` pode funcionar em implementações customizadas, mas não deve substituir o suporte à `barra de espaço`.

### Interação com teclado (ou gestos) + leitor de telas

- O componente deve expor nome, papel e estado.
- O estado deve ser binário e permanecer ligado/desligado, sem estado misto.
- A mudança deve ser anunciada pelo novo estado.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém switch

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um switch
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso a tecla `Space`
4. VEJO que o switch alterna entre ligado e desligado

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - OUÇO o rótulo e a finalidade do switch.
   - OUÇO que o componente é um switch.
   - OUÇO seu estado atual, como ligado ou desligado.
2. ENTÃO, quando aciono ou altero o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do switch.
   - OUÇO que o componente é um switch.
   - OUÇO seu estado atual, como ligado ou desligado.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Switch.

- Use switch para configurações binárias que entram em vigor imediatamente.
- Se a ação precisa de confirmação, checkbox ou outro padrão pode ser mais adequado.
- Não altere o rótulo de forma que o nome acessível mude e confunda o estado anunciado.

## Referências

Referências adicionais sobre componentes do tipo Switch.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
- [Google - Material Design - Switch](https://m3.material.io/components/switch/overview)

### Design System

- [US.gov - Checkbox](https://designsystem.digital.gov/components/checkbox/)
- [IBM Carbon - Toggle](https://carbondesignsystem.com/components/toggle/usage/)
- [Adobe Spectrum - Switch](https://spectrum.adobe.com/page/switch/)
- [Bootstrap - Switches](https://getbootstrap.com/docs/5.2/forms/checks-radios/#switches)
