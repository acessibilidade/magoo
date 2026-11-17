# Detalhes e Mais informações

- ID: `detalhes-mais-informacoes`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-detalhes-mais-informacoes.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Oferece informações complementares sem interromper o caminho principal de leitura.

<!-- id: interaction-design -->
## Design de interação

<!-- id: detalhes-mais-informacoes.designer-guide.frame -->
<!-- id: detalhes-mais-informacoes.designer-guide.1 -->
### Guia rápido para designers

<!-- id: detalhes-mais-informacoes.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: detalhes-mais-informacoes.designer-guide.3 -->
#### Quando usar

<!-- id: detalhes-mais-informacoes.designer-guide.4 -->
Use para revelar conteúdo complementar próximo ao controle de abertura.

<!-- id: detalhes-mais-informacoes.designer-guide.5 -->
#### O que desenhar

<!-- id: detalhes-mais-informacoes.designer-guide.6 -->
Mostre o texto que indica o conteúdo disponível e as versões aberta e fechada.

<!-- id: detalhes-mais-informacoes.designer-guide.7 -->
#### Como se comporta

<!-- id: detalhes-mais-informacoes.designer-guide.8 -->
Ao acionar, o conteúdo aparece ou desaparece. Quando fechado, seus controles internos não recebem navegação pelo teclado.

<!-- id: detalhes-mais-informacoes.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: detalhes-mais-informacoes.designer-guide.10 -->
Registre a ordem de leitura após abrir e o comportamento do acionador. Se a ação leva a outro destino, use um link.

<!-- id: detalhes-mais-informacoes.designer-guide.11 -->
#### Como revisar

<!-- id: detalhes-mais-informacoes.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: detalhes-mais-informacoes.designer-guide.13 -->
### Orientações completas

<!-- id: detalhes-mais-informacoes.interaction-design.1 -->

<!-- id: detalhes-mais-informacoes.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Detalhes e Mais informações.

<!-- id: detalhes-mais-informacoes.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: detalhes-mais-informacoes.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: detalhes-mais-informacoes.interaction-design.9 --> Antes de interagir é possível perceber visualmente que existe conteúdo oculto ou complementar disponível?
2. <!-- id: detalhes-mais-informacoes.interaction-design.10 --> O texto do acionador deixa claro o que será revelado, por exemplo "ler mais", "ver detalhes" ou "mais informações"?
3. <!-- id: detalhes-mais-informacoes.interaction-design.11 --> É possível identificar visualmente se o conteúdo está aberto ou fechado?

<!-- id: detalhes-mais-informacoes.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: detalhes-mais-informacoes.interaction-design.15 --> Há feedback visual ao passar o mouse no acionador?
2. <!-- id: detalhes-mais-informacoes.interaction-design.16 --> Ao clicar no acionador, o conteúdo complementar é exibido ou ocultado?
3. <!-- id: detalhes-mais-informacoes.interaction-design.17 --> A mudança de estado não desloca a pessoa para uma posição inesperada da tela?

<!-- id: detalhes-mais-informacoes.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: detalhes-mais-informacoes.interaction-design.20 --> O acionador possui área tocável confortável?
2. <!-- id: detalhes-mais-informacoes.interaction-design.21 --> Ao `tocar` no acionador, o conteúdo complementar é exibido ou ocultado?
3. <!-- id: detalhes-mais-informacoes.interaction-design.22 --> Em telas menores, o conteúdo expandido permanece próximo do acionador e fácil de perceber?

<!-- id: detalhes-mais-informacoes.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: detalhes-mais-informacoes.interaction-design.26 --> Há foco visível no acionador?
2. <!-- id: detalhes-mais-informacoes.interaction-design.27 --> É possível acionar o componente com `ENTER` e `SPACE` quando ele for implementado como botão?
3. <!-- id: detalhes-mais-informacoes.interaction-design.30 --> Quando o conteúdo está fechado, seus componentes internos não entram na ordem de foco?
4. <!-- id: detalhes-mais-informacoes.interaction-design.31 --> Quando o conteúdo é aberto, seus componentes internos ficam disponíveis na ordem natural de navegação?

<!-- id: detalhes-mais-informacoes.interaction-design.32 -->
### Projetando para uso com leitor de telas

1. <!-- id: detalhes-mais-informacoes.interaction-design.34 --> O acionador é anunciado com nome acessível claro?
2. <!-- id: detalhes-mais-informacoes.interaction-design.35 --> O estado aberto ou fechado é anunciado corretamente?
3. <!-- id: detalhes-mais-informacoes.interaction-design.36 --> O conteúdo revelado fica disponível na sequência de leitura de forma previsível?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: detalhes-mais-informacoes.interaction-methods.1 -->

<!-- id: detalhes-mais-informacoes.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Detalhes e Mais informações.

<!-- id: detalhes-mais-informacoes.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: detalhes-mais-informacoes.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: detalhes-mais-informacoes.interaction-methods.10 --> Clicar no acionador abre ou fecha o conteúdo complementar.
- <!-- id: detalhes-mais-informacoes.interaction-methods.11 --> O estado visual do acionador deve mudar junto com o conteúdo exibido.
- <!-- id: detalhes-mais-informacoes.interaction-methods.12 --> O texto, ícone ou indicador visual deve continuar compreensível nos estados aberto e fechado.

<!-- id: detalhes-mais-informacoes.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: detalhes-mais-informacoes.interaction-methods.16 --> `TAB` move o foco para o acionador.
- <!-- id: detalhes-mais-informacoes.interaction-methods.18 --> `ENTER` ou `SPACE` alterna o estado quando o acionador é um botão ou `summary`.
- <!-- id: detalhes-mais-informacoes.interaction-methods.22 --> Após a abertura, a navegação continua para o conteúdo revelado conforme a ordem do documento.

<!-- id: detalhes-mais-informacoes.interaction-methods.23 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: detalhes-mais-informacoes.interaction-methods.25 --> O acionador deve expor nome, papel e estado.
- <!-- id: detalhes-mais-informacoes.methods-review.2 --> Ao acionar o controle com teclado ou leitor de telas, o conteúdo abre ou fecha e o novo estado fica perceptível.
- <!-- id: detalhes-mais-informacoes.methods-followup.1 --> Após abrir os detalhes, os comandos de leitura permitem percorrer o conteúdo; acionar novamente o controle o recolhe.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: detalhes-mais-informacoes.acceptance-criteria.1 -->

<!-- id: detalhes-mais-informacoes.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: detalhes-mais-informacoes.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém detalhes e mais informações

<!-- id: detalhes-mais-informacoes.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: detalhes-mais-informacoes.acceptance-criteria.8 --> QUANDO uso a tecla `Tab` para mover o foco para o acionador de mais informações
2. <!-- id: detalhes-mais-informacoes.acceptance-criteria.10 --> O foco que VEJO é fortemente indicado visualmente
3. <!-- id: detalhes-mais-informacoes.acceptance-criteria.11 --> ENTÃO, quando uso `Enter` ou `Barra de espaço`
4. <!-- id: detalhes-mais-informacoes.acceptance-criteria.14 --> VEJO que o conteúdo complementar é exibido
5. <!-- id: detalhes-mais-informacoes.acceptance-criteria.15 --> ENTÃO, quando aciono novamente o mesmo controle
6. <!-- id: detalhes-mais-informacoes.acceptance-criteria.16 --> VEJO que o conteúdo complementar é ocultado

<!-- id: detalhes-mais-informacoes.acceptance-criteria.17 -->
#### Leitor de telas para desktop

1. <!-- id: detalhes-mais-informacoes.acceptance-criteria.19 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o acionador

   - <!-- id: detalhes-mais-informacoes.acceptance-criteria.21 --> OUÇO o nome do acionador.
   - <!-- id: detalhes-mais-informacoes.acceptance-criteria.22 --> OUÇO que o componente pode ser acionado.
   - <!-- id: detalhes-mais-informacoes.acceptance-criteria.23 --> OUÇO se o conteúdo está aberto ou fechado.
2. <!-- id: detalhes-mais-informacoes.acceptance-criteria.24 --> ENTÃO, quando aciono o componente
3. <!-- id: detalhes-mais-informacoes.acceptance-criteria.25 --> OUÇO ou percebo que o conteúdo complementar ficou disponível ou foi ocultado.

<!-- id: detalhes-mais-informacoes.acceptance-criteria.26 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: detalhes-mais-informacoes.acceptance-criteria.28 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no acionador, acontece o seguinte:

   - <!-- id: detalhes-mais-informacoes.acceptance-criteria.30 --> OUÇO o nome do acionador.
   - <!-- id: detalhes-mais-informacoes.acceptance-criteria.31 --> OUÇO que o componente pode ser acionado.
   - <!-- id: detalhes-mais-informacoes.acceptance-criteria.32 --> OUÇO se o conteúdo está aberto ou fechado.
2. <!-- id: detalhes-mais-informacoes.acceptance-criteria.33 --> ENTÃO, quando eu toco duas vezes para ativar o componente
3. <!-- id: detalhes-mais-informacoes.acceptance-criteria.34 --> OUÇO ou percebo que o conteúdo complementar ficou disponível ou foi ocultado.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: detalhes-mais-informacoes.considerations.1 -->

<!-- id: detalhes-mais-informacoes.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Detalhes e Mais informações.

- <!-- id: detalhes-mais-informacoes.considerations.5 --> Este componente representa conteúdo complementar oculto que é revelado por uma ação, como "ler mais", "ver detalhes" ou "mais informações".
- <!-- id: detalhes-mais-informacoes.considerations.6 --> Não esconda informações essenciais sem indicar claramente que há mais conteúdo disponível.
- <!-- id: detalhes-mais-informacoes.considerations.7 --> Se o conteúdo revelado for longo ou composto por várias seções, accordion pode ser um padrão mais adequado.
- <!-- id: detalhes-mais-informacoes.considerations.8 --> Se a ação leva para outra página ou outro local, o comportamento é de link, não de disclosure.

<!-- id: detalhes-mais-informacoes.methods-review.3 -->
### Notas de implementação e decisões de comportamento

- <!-- id: detalhes-mais-informacoes.interaction-methods.26 --> Quando usado, `aria-expanded` deve refletir o estado aberto ou fechado.

- <!-- id: detalhes-mais-informacoes.interaction-methods.28 --> O elemento nativo `details` com `summary` pode ser usado quando seu comportamento atender ao contexto.

<!-- id: references -->
## Referências

<!-- id: detalhes-mais-informacoes.references.1 -->

<!-- id: detalhes-mais-informacoes.references.2 -->
Referências adicionais sobre componentes do tipo Detalhes e Mais informações.

<!-- id: detalhes-mais-informacoes.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: detalhes-mais-informacoes.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: detalhes-mais-informacoes.references.10 -->
### Padrões de Design

- <!-- id: detalhes-mais-informacoes.references.12 --> [W3C APG: Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- <!-- id: detalhes-mais-informacoes.references.17 --> [MDN Web Docs: The Details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- <!-- id: detalhes-mais-informacoes.references.22 --> [MDN Web Docs: The Summary disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)

<!-- id: detalhes-mais-informacoes.references.27 -->
### Design System

- <!-- id: detalhes-mais-informacoes.references.29 --> [US.gov - Summary box](https://designsystem.digital.gov/components/summary-box/)
- <!-- id: detalhes-mais-informacoes.references.34 --> [IBM Carbon - Content switcher](https://carbondesignsystem.com/components/content-switcher/usage/)
- <!-- id: detalhes-mais-informacoes.references.39 --> [Bootstrap - Collapse](https://getbootstrap.com/docs/5.2/components/collapse/)
