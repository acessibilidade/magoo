# Checkbox

- ID: `checkbox`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-checkbox.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite selecionar uma ou mais opções independentes, com estados claramente identificáveis.

<!-- id: interaction-design -->
## Design de interação

<!-- id: checkbox.designer-guide.frame -->
<!-- id: checkbox.designer-guide.1 -->
### Guia rápido para designers

<!-- id: checkbox.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: checkbox.designer-guide.3 -->
#### Quando usar

<!-- id: checkbox.designer-guide.4 -->
Use para escolhas independentes, permitindo selecionar mais de uma opção.

<!-- id: checkbox.designer-guide.5 -->
#### O que desenhar

<!-- id: checkbox.designer-guide.6 -->
Mostre rótulos, estados marcado e desmarcado, foco e desabilitado. Inclua estado misto quando necessário.

<!-- id: checkbox.designer-guide.7 -->
#### Como se comporta

<!-- id: checkbox.designer-guide.8 -->
Clicar no controle ou no rótulo alterna a seleção. Pelo teclado, `Tab` chega a cada opção disponível e espaço alterna o estado.

<!-- id: checkbox.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: checkbox.designer-guide.10 -->
Registre o nome do grupo e a regra de alternância caso exista estado misto.

<!-- id: checkbox.designer-guide.11 -->
#### Como revisar

<!-- id: checkbox.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: checkbox.designer-guide.13 -->
### Orientações completas

<!-- id: checkbox.interaction-design.1 -->

<!-- id: checkbox.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Checkbox.

<!-- id: checkbox.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: checkbox.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: checkbox.interaction-design.9 --> Antes de interagir é possível perceber que cada opção pode ser marcada ou desmarcada?
2. <!-- id: checkbox.interaction-design.10 --> Quando houver um grupo, o rótulo do grupo comunica o objetivo das opções?
3. <!-- id: checkbox.interaction-design.11 --> É possível distinguir estados marcado, desmarcado, parcialmente marcado e desabilitado?

<!-- id: checkbox.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: checkbox.interaction-design.15 --> Há feedback visual ao passar o mouse no checkbox ou em seu rótulo?
2. <!-- id: checkbox.interaction-design.16 --> Ao clicar no rótulo, o estado do checkbox também é alterado?
3. <!-- id: checkbox.interaction-design.17 --> A mudança de estado fica visualmente clara?

<!-- id: checkbox.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: checkbox.interaction-design.20 --> O alvo tocável inclui o rótulo associado?
2. <!-- id: checkbox.interaction-design.21 --> Ao `tocar` no rótulo ou controle, o estado é alterado?
3. <!-- id: checkbox.interaction-design.22 --> A área de toque é confortável em telas pequenas?

<!-- id: checkbox.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: checkbox.interaction-design.26 --> Há foco visível no checkbox?
2. <!-- id: checkbox.interaction-design.27 --> É possível alterar o estado com `SPACE`?
3. <!-- id: checkbox.interaction-design.29 --> A navegação com `TAB` segue a ordem esperada do formulário?

<!-- id: checkbox.interaction-design.31 -->
### Projetando para uso com leitor de telas

1. <!-- id: checkbox.interaction-design.33 --> O rótulo do checkbox é anunciado corretamente?
2. <!-- id: checkbox.interaction-design.34 --> O papel de checkbox é anunciado?
3. <!-- id: checkbox.interaction-design.35 --> O estado marcado, desmarcado ou misto é anunciado?
4. <!-- id: checkbox.interaction-design.36 --> Mensagens de erro ou ajuda são lidas junto ao campo quando existirem?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: checkbox.interaction-methods.1 -->

<!-- id: checkbox.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Checkbox.

<!-- id: checkbox.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: checkbox.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: checkbox.interaction-methods.10 --> Clicar no controle ou no rótulo alterna entre marcado e desmarcado.
- <!-- id: checkbox.interaction-methods.11 --> Em checkbox misto, a regra para alternar entre misto, marcado e desmarcado deve ser previsível.
- <!-- id: checkbox.interaction-methods.12 --> Estados desabilitados não devem executar ação.

<!-- id: checkbox.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: checkbox.interaction-methods.16 --> `TAB` move o foco para cada checkbox disponível.
- <!-- id: checkbox.interaction-methods.18 --> `SPACE` alterna o estado do checkbox em foco.
- <!-- id: checkbox.interaction-methods.20 --> `SHIFT`+`TAB` retorna ao item anterior do fluxo.

<!-- id: checkbox.interaction-methods.23 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: checkbox.methods-review.2 --> Ao focar a opção com leitor de telas, a pessoa ouve seu rótulo e se está marcada, desmarcada ou em estado misto quando aplicável.
- <!-- id: checkbox.interaction-methods.26 --> Grupos devem utilizar `fieldset` e `legend` quando aplicável.
- <!-- id: checkbox.interaction-methods.29 --> O estado deve ser exposto semanticamente.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: checkbox.acceptance-criteria.1 -->

<!-- id: checkbox.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: checkbox.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém checkbox

<!-- id: checkbox.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: checkbox.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para um checkbox
2. <!-- id: checkbox.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: checkbox.acceptance-criteria.11 --> ENTÃO, quando uso a tecla `Space`
4. <!-- id: checkbox.acceptance-criteria.13 --> VEJO que o checkbox alterna entre marcado e desmarcado

<!-- id: checkbox.acceptance-criteria.14 -->
#### Leitor de telas para desktop

1. <!-- id: checkbox.acceptance-criteria.16 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - <!-- id: checkbox.acceptance-criteria.18 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: checkbox.acceptance-criteria.19 --> OUÇO que o componente é um checkbox.
   - <!-- id: checkbox.acceptance-criteria.20 --> OUÇO seu estado atual, como marcado, desmarcado ou misto.
2. <!-- id: checkbox.acceptance-criteria.21 --> ENTÃO, quando aciono ou altero o componente
3. <!-- id: checkbox.acceptance-criteria.22 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: checkbox.acceptance-criteria.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: checkbox.acceptance-criteria.25 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - <!-- id: checkbox.acceptance-criteria.27 --> OUÇO o rótulo e a finalidade do campo.
   - <!-- id: checkbox.acceptance-criteria.28 --> OUÇO que o componente é um checkbox.
   - <!-- id: checkbox.acceptance-criteria.29 --> OUÇO seu estado atual, como marcado, desmarcado ou misto.
2. <!-- id: checkbox.acceptance-criteria.30 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. <!-- id: checkbox.acceptance-criteria.31 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: checkbox.considerations.1 -->

<!-- id: checkbox.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Checkbox.

- <!-- id: checkbox.considerations.5 --> Não use checkbox quando a pessoa só puder escolher uma opção dentro de um grupo; para isso, use radio button.
- <!-- id: checkbox.considerations.6 --> O rótulo deve ser clicável/tocável e associado ao campo.
- <!-- id: checkbox.considerations.7 --> Checkbox customizado precisa preservar foco, nome, papel e estado.

<!-- id: checkbox.methods-review.3 -->
### Notas de implementação e decisões de comportamento

- <!-- id: checkbox.interaction-methods.25 --> O componente deve ter rótulo programaticamente associado.

<!-- id: references -->
## Referências

<!-- id: checkbox.references.1 -->

<!-- id: checkbox.references.2 -->
Referências adicionais sobre componentes do tipo Checkbox.

<!-- id: checkbox.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: checkbox.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: checkbox.references.10 -->
### Padrões de Design

- <!-- id: checkbox.references.12 --> [W3C APG: Checkbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- <!-- id: checkbox.references.17 --> [Documentação de padrões HTML: Checkbox state](https://html.spec.whatwg.org/multipage/input.html#checkbox-state-(type=checkbox))
- <!-- id: checkbox.references.22 --> [Google - Material Design - Checkbox](https://m3.material.io/components/checkbox/overview)

<!-- id: checkbox.references.27 -->
### Design System

- <!-- id: checkbox.references.29 --> [US.gov - Checkbox](https://designsystem.digital.gov/components/checkbox/)
- <!-- id: checkbox.references.34 --> [IBM Carbon - Checkbox](https://carbondesignsystem.com/components/checkbox/usage/)
- <!-- id: checkbox.references.39 --> [Adobe Spectrum - Checkbox](https://spectrum.adobe.com/page/checkbox/)
- <!-- id: checkbox.references.44 --> [Github Primer - Checkbox](https://primer.style/product/components/checkbox/)
- <!-- id: checkbox.references.49 --> [Bootstrap - Checks and Radios](https://getbootstrap.com/docs/5.2/forms/checks-radios/)
