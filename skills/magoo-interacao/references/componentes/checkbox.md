# Checkbox

- ID: `checkbox`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-checkbox.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite selecionar uma ou mais opções independentes, com estados claramente identificáveis.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para escolhas independentes, permitindo selecionar mais de uma opção.

#### O que desenhar

Mostre rótulos, estados marcado e desmarcado, foco e desabilitado. Inclua estado misto quando necessário.

#### Como se comporta

Clicar no controle ou no rótulo alterna a seleção. Pelo teclado, `Tab` chega a cada opção disponível e espaço alterna o estado.

#### O que documentar no Figma

Registre o nome do grupo e a regra de alternância caso exista estado misto.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Checkbox.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir é possível perceber que cada opção pode ser marcada ou desmarcada?
2. Quando houver um grupo, o rótulo do grupo comunica o objetivo das opções?
3. É possível distinguir estados marcado, desmarcado, parcialmente marcado e desabilitado?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no checkbox ou em seu rótulo?
2. Ao clicar no rótulo, o estado do checkbox também é alterado?
3. A mudança de estado fica visualmente clara?

### Projetando para uso com gestos

1. O alvo tocável inclui o rótulo associado?
2. Ao `tocar` no rótulo ou controle, o estado é alterado?
3. A área de toque é confortável em telas pequenas?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há foco visível no checkbox?
2. É possível alterar o estado com `SPACE`?
3. A navegação com `TAB` segue a ordem esperada do formulário?

### Projetando para uso com leitor de telas

1. O rótulo do checkbox é anunciado corretamente?
2. O papel de checkbox é anunciado?
3. O estado marcado, desmarcado ou misto é anunciado?
4. Mensagens de erro ou ajuda são lidas junto ao campo quando existirem?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Checkbox.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar no controle ou no rótulo alterna entre marcado e desmarcado.
- Em checkbox misto, a regra para alternar entre misto, marcado e desmarcado deve ser previsível.
- Estados desabilitados não devem executar ação.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `TAB` move o foco para cada checkbox disponível.
- `SPACE` alterna o estado do checkbox em foco.
- `SHIFT`+`TAB` retorna ao item anterior do fluxo.

### Interação com teclado (ou gestos) + leitor de telas

- Ao focar a opção com leitor de telas, a pessoa ouve seu rótulo e se está marcada, desmarcada ou em estado misto quando aplicável.
- Grupos devem utilizar `fieldset` e `legend` quando aplicável.
- O estado deve ser exposto semanticamente.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém checkbox

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para um checkbox
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso a tecla `Space`
4. VEJO que o checkbox alterna entre marcado e desmarcado

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO que o componente é um checkbox.
   - OUÇO seu estado atual, como marcado, desmarcado ou misto.
2. ENTÃO, quando aciono ou altero o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - OUÇO o rótulo e a finalidade do campo.
   - OUÇO que o componente é um checkbox.
   - OUÇO seu estado atual, como marcado, desmarcado ou misto.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Checkbox.

- Não use checkbox quando a pessoa só puder escolher uma opção dentro de um grupo; para isso, use radio button.
- O rótulo deve ser clicável/tocável e associado ao campo.
- Checkbox customizado precisa preservar foco, nome, papel e estado.

### Notas de implementação e decisões de comportamento

- O componente deve ter rótulo programaticamente associado.

## Referências

Referências adicionais sobre componentes do tipo Checkbox.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Checkbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- [Documentação de padrões HTML: Checkbox state](https://html.spec.whatwg.org/multipage/input.html#checkbox-state-(type=checkbox))
- [Google - Material Design - Checkbox](https://m3.material.io/components/checkbox/overview)

### Design System

- [US.gov - Checkbox](https://designsystem.digital.gov/components/checkbox/)
- [IBM Carbon - Checkbox](https://carbondesignsystem.com/components/checkbox/usage/)
- [Adobe Spectrum - Checkbox](https://spectrum.adobe.com/page/checkbox/)
- [Github Primer - Checkbox](https://primer.style/product/components/checkbox/)
- [Bootstrap - Checks and Radios](https://getbootstrap.com/docs/5.2/forms/checks-radios/)
