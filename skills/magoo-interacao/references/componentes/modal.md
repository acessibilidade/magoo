# Modal

- ID: `modal`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-modal.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Exibe uma tarefa ou informação sobre a página, exigindo atenção à entrada, à permanência e à saída do foco.

<!-- id: interaction-design -->
## Design de interação

<!-- id: modal.designer-guide.frame -->
<!-- id: modal.designer-guide.1 -->
### Guia rápido para designers

<!-- id: modal.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: modal.designer-guide.3 -->
#### Quando usar

<!-- id: modal.designer-guide.4 -->
Use quando uma tarefa ou informação precisar interromper o fluxo. Primeiro avalie se essa interrupção é necessária.

<!-- id: modal.designer-guide.5 -->
#### O que desenhar

<!-- id: modal.designer-guide.6 -->
Mostre o controle que abre a janela, a janela aberta acima do conteúdo, o título, as ações e uma forma visível de fechar ou cancelar.

<!-- id: modal.designer-guide.7 -->
#### Como se comporta

<!-- id: modal.designer-guide.8 -->
Ao abrir, a navegação pelo teclado começa em um ponto adequado dentro da janela e permanece nela. Ao fechar, volta ao controle de abertura ou a um ponto coerente do fluxo. `Esc` pode fechar quando isso não causar perda de dados sem confirmação.

<!-- id: modal.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: modal.designer-guide.10 -->
Anote onde a navegação começa e retorna, a ordem dos controles e o nome anunciado pelo leitor de telas. Registre se clicar fora fecha a janela e como evitar perda de dados. O conteúdo ao fundo fica indisponível enquanto ela estiver aberta.

<!-- id: modal.designer-guide.11 -->
#### Como revisar

<!-- id: modal.designer-guide.12 -->
A abertura tem objetivo claro? É fácil cancelar? O conteúdo e as ações cabem em telas pequenas e grandes? Registre como pendentes de implementação a navegação pelo teclado e os anúncios do leitor de telas.

<!-- id: modal.designer-guide.13 -->
### Orientações completas

<!-- id: modal.interaction-design.1 -->

<!-- id: modal.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Modal.

<!-- id: modal.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: modal.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: modal.interaction-design.9 --> Antes de abrir o componente é possível perceber qual ação abrirá a janela modal?
2. <!-- id: modal.interaction-design.10 --> O nome do controle que abre a modal deixa claro o objetivo da ação?
3. <!-- id: modal.interaction-design.11 --> A modal é realmente necessária para interromper o fluxo da pessoa?

<!-- id: modal.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: modal.interaction-design.15 --> Há feedback visual ao acionar o controle que abre a modal?
2. <!-- id: modal.interaction-design.16 --> A modal aparece em camada acima do conteúdo principal e deixa claro que o restante da página está indisponível?
3. <!-- id: modal.interaction-design.17 --> Existe controle visível para fechar ou cancelar a modal?

<!-- id: modal.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: modal.interaction-design.20 --> O controle de abertura e os controles internos possuem área tocável adequada?
2. <!-- id: modal.interaction-design.21 --> Ao abrir a modal, o conteúdo principal não compete visualmente com a tarefa da modal?
3. <!-- id: modal.interaction-design.22 --> É possível fechar a modal sem depender de gesto difícil ou oculto?

<!-- id: modal.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: modal.interaction-design.26 --> Ao abrir a modal, o foco vai para um ponto adequado dentro dela?
2. <!-- id: modal.interaction-design.27 --> A navegação com `TAB` permanece dentro da modal enquanto ela estiver aberta?
3. <!-- id: modal.interaction-design.29 --> É possível fechar a modal com `ESC`, quando isso não causar perda de dados sem confirmação?
4. <!-- id: modal.interaction-design.31 --> Ao fechar a modal, o foco retorna para o componente que a abriu ou para um ponto coerente do fluxo?

<!-- id: modal.interaction-design.32 -->
### Projetando para uso com leitor de telas

1. <!-- id: modal.interaction-design.34 --> A modal é anunciada como diálogo?
2. <!-- id: modal.interaction-design.35 --> O nome acessível do diálogo é anunciado claramente?
3. <!-- id: modal.interaction-design.36 --> O conteúdo fora da modal fica indisponível para navegação enquanto a modal estiver aberta?
4. <!-- id: modal.interaction-design.37 --> A mudança de foco e o fechamento são perceptíveis?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: modal.interaction-methods.1 -->

<!-- id: modal.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Modal.

<!-- id: modal.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: modal.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: modal.interaction-methods.10 --> Clicar no controle de abertura exibe a modal.
- <!-- id: modal.interaction-methods.11 --> Clicar no botão de fechar, cancelar ou ação principal executa a ação correspondente.
- <!-- id: modal.interaction-methods.12 --> Clicar fora da modal só deve fechar o componente quando isso for uma decisão de produto segura e documentada.

<!-- id: modal.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: modal.interaction-methods.16 --> `ENTER` ou `SPACE` aciona botões internos.
- <!-- id: modal.interaction-methods.19 --> `TAB` e `SHIFT`+`TAB` circulam entre controles da modal.
- <!-- id: modal.interaction-methods.23 --> `ESC` fecha a modal quando aplicável.

<!-- id: modal.interaction-methods.25 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: modal.interaction-methods.27 --> O diálogo deve ter nome acessível.
- <!-- id: modal.interaction-methods.28 --> O foco deve ser movido para dentro da modal no momento da abertura.
- <!-- id: modal.methods-followup.1 --> Enquanto a modal está aberta, a navegação do leitor de telas fica no diálogo; fechar permite voltar à tarefa de origem.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: modal.acceptance-criteria.1 -->

<!-- id: modal.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: modal.acceptance-criteria.5 -->
### Cenário: Considerando que estou em uma página que contém modal

<!-- id: modal.acceptance-criteria.6 -->
#### Navegação por teclado

1. <!-- id: modal.acceptance-criteria.8 --> QUANDO aciono o botão que abre a modal
2. <!-- id: modal.acceptance-criteria.9 --> VEJO que a modal é exibida acima do conteúdo principal
3. <!-- id: modal.acceptance-criteria.10 --> ENTÃO, quando uso a tecla `Tab`
4. <!-- id: modal.acceptance-criteria.12 --> VEJO que o foco permanece nos controles da modal
5. <!-- id: modal.acceptance-criteria.13 --> ENTÃO, quando fecho a modal
6. <!-- id: modal.acceptance-criteria.14 --> VEJO que o foco retorna para um ponto previsível do fluxo

<!-- id: modal.acceptance-criteria.15 -->
#### Leitor de telas para desktop

1. <!-- id: modal.acceptance-criteria.17 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - <!-- id: modal.acceptance-criteria.19 --> OUÇO que o componente é um diálogo.
   - <!-- id: modal.acceptance-criteria.20 --> OUÇO o nome acessível da modal.
   - <!-- id: modal.acceptance-criteria.21 --> OUÇO o conteúdo ou instrução principal da modal.
2. <!-- id: modal.acceptance-criteria.22 --> ENTÃO, quando aciono ou altero o componente
3. <!-- id: modal.acceptance-criteria.23 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: modal.acceptance-criteria.24 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: modal.acceptance-criteria.26 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - <!-- id: modal.acceptance-criteria.28 --> OUÇO que o componente é um diálogo.
   - <!-- id: modal.acceptance-criteria.29 --> OUÇO o nome acessível da modal.
   - <!-- id: modal.acceptance-criteria.30 --> Consigo navegar pelos controles da modal sem acessar o conteúdo de fundo.
2. <!-- id: modal.acceptance-criteria.31 --> ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. <!-- id: modal.acceptance-criteria.32 --> OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: modal.considerations.1 -->

<!-- id: modal.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Modal.

- <!-- id: modal.considerations.5 --> Modais interrompem o fluxo e devem ser usadas apenas quando a interação exigir foco imediato.
- <!-- id: modal.considerations.6 --> Não esconda o botão de fechar quando a pessoa precisar poder cancelar a ação.
- <!-- id: modal.considerations.7 --> Confirme antes de fechar a modal caso a pessoa possa perder dados preenchidos.

- <!-- id: modal.interaction-methods.29 --> O fundo deve ficar inerte ou indisponível para tecnologias assistivas.

<!-- id: references -->
## Referências

<!-- id: modal.references.1 -->

<!-- id: modal.references.2 -->
Referências adicionais sobre componentes do tipo Modal.

<!-- id: modal.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: modal.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: modal.references.10 -->
### Padrões de Design

- <!-- id: modal.references.12 --> [W3C APG: Dialog Modal Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- <!-- id: modal.references.17 --> [Documentação de padrões HTML: The Dialog Element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)
- <!-- id: modal.references.22 --> [Google - Material Design - Dialogs](https://m3.material.io/components/dialogs/overview)

<!-- id: modal.references.27 -->
### Design System

- <!-- id: modal.references.29 --> [US.gov - Modal](https://designsystem.digital.gov/components/modal/)
- <!-- id: modal.references.34 --> [IBM Carbon - Modal](https://carbondesignsystem.com/components/modal/usage/)
- <!-- id: modal.references.39 --> [Adobe Spectrum - Dialog](https://spectrum.adobe.com/page/dialog/)
- <!-- id: modal.references.44 --> [Github Primer - Dialog](https://primer.style/product/components/dialog/)
- <!-- id: modal.references.49 --> [Bootstrap - Modal](https://getbootstrap.com/docs/5.2/components/modal/)
