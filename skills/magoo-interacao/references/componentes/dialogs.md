# Dialogs

- ID: `dialogs`
- Categoria: mensagens
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-dialogs.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Apresentam mensagens e decisões em um contexto de diálogo com a pessoa.

<!-- id: interaction-design -->
## Design de interação

<!-- id: dialogs.designer-guide.frame -->
<!-- id: dialogs.designer-guide.1 -->
### Guia rápido para designers

<!-- id: dialogs.designer-guide.2 -->
Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

<!-- id: dialogs.designer-guide.3 -->
#### Quando usar

<!-- id: dialogs.designer-guide.4 -->
Use para apresentar uma mensagem ou decisão em um diálogo; defina se interrompe o fluxo.

<!-- id: dialogs.designer-guide.5 -->
#### O que desenhar

<!-- id: dialogs.designer-guide.6 -->
Mostre título, mensagem, ações e a forma de cancelar ou fechar.

<!-- id: dialogs.designer-guide.7 -->
#### Como se comporta

<!-- id: dialogs.designer-guide.8 -->
Botões executam suas ações. `Esc` ou clique fora só fecha quando for seguro; um diálogo modal impede interação com o fundo.

<!-- id: dialogs.designer-guide.9 -->
#### O que documentar no Figma

<!-- id: dialogs.designer-guide.10 -->
Documente se é modal, o destino da navegação pelo teclado e o risco de perda de dados. Diálogos de alerta podem exigir uma resposta.

<!-- id: dialogs.designer-guide.11 -->
#### Como revisar

<!-- id: dialogs.designer-guide.12 -->
Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

<!-- id: dialogs.designer-guide.13 -->
### Orientações completas

<!-- id: dialogs.interaction-design.1 -->

<!-- id: dialogs.interaction-design.2 -->
Questionamentos que devem ser feitos ao se projetar componentes do tipo Dialogs.

<!-- id: dialogs.interaction-design.4 -->
**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

<!-- id: dialogs.interaction-design.7 -->
### Projetando para a "não interação"

1. <!-- id: dialogs.interaction-design.9 --> Antes de abrir o dialog é possível perceber qual ação abrirá a janela?
2. <!-- id: dialogs.interaction-design.10 --> O dialog é necessário para confirmar, coletar ou comunicar algo dentro do fluxo?
3. <!-- id: dialogs.interaction-design.11 --> O título do dialog descreve claramente sua finalidade?

<!-- id: dialogs.interaction-design.12 -->
### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. <!-- id: dialogs.interaction-design.15 --> Há feedback visual ao acionar o controle que abre o dialog?
2. <!-- id: dialogs.interaction-design.16 --> O dialog deixa claros os controles disponíveis, como confirmar, cancelar ou fechar?
3. <!-- id: dialogs.interaction-design.17 --> A ação principal e a ação de cancelamento são visualmente distinguíveis?

<!-- id: dialogs.interaction-design.18 -->
### Projetando para uso com gestos

1. <!-- id: dialogs.interaction-design.20 --> Controles internos possuem área tocável confortável?
2. <!-- id: dialogs.interaction-design.21 --> É possível fechar ou cancelar o dialog sem depender de gesto oculto?
3. <!-- id: dialogs.interaction-design.22 --> A leitura visual do dialog é possível sem competição com o fundo?

<!-- id: dialogs.interaction-design.23 -->
### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. <!-- id: dialogs.interaction-design.26 --> Ao abrir, o foco vai para um ponto apropriado dentro do dialog?
2. <!-- id: dialogs.interaction-design.27 --> `TAB` e `SHIFT`+`TAB` seguem ordem previsível?
3. <!-- id: dialogs.interaction-design.31 --> `ESC` fecha o dialog quando permitido?
4. <!-- id: dialogs.interaction-design.33 --> Ao fechar, o foco retorna para o acionador ou ponto coerente do fluxo?

<!-- id: dialogs.interaction-design.34 -->
### Projetando para uso com leitor de telas

1. <!-- id: dialogs.interaction-design.36 --> O dialog é anunciado com nome acessível?
2. <!-- id: dialogs.interaction-design.37 --> A descrição ou mensagem principal é anunciada quando necessária?
3. <!-- id: dialogs.interaction-design.38 --> O estado modal ou não modal é coerente com o comportamento real da interface?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: dialogs.interaction-methods.1 -->

<!-- id: dialogs.interaction-methods.2 -->
Possíveis métodos de interação em componentes do tipo Dialogs.

<!-- id: dialogs.interaction-methods.4 -->
**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

<!-- id: dialogs.interaction-methods.7 -->
### Interação com mouse (qualquer dispositivo de apontamento)

- <!-- id: dialogs.interaction-methods.10 --> Clicar no acionador abre o dialog.
- <!-- id: dialogs.interaction-methods.11 --> Clicar nos controles internos executa as ações correspondentes.
- <!-- id: dialogs.interaction-methods.12 --> Fechamento por clique fora só deve existir quando não houver risco de perda de dados.

<!-- id: dialogs.interaction-methods.13 -->
### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- <!-- id: dialogs.interaction-methods.16 --> `ENTER` ou `SPACE` aciona botões.
- <!-- id: dialogs.interaction-methods.19 --> `TAB` navega pelos controles disponíveis.
- <!-- id: dialogs.interaction-methods.21 --> `ESC` fecha o dialog quando essa ação for segura.

<!-- id: dialogs.interaction-methods.23 -->
### Interação com teclado (ou gestos) + leitor de telas

- <!-- id: dialogs.interaction-methods.25 --> O dialog deve ter nome acessível por título visível ou atributo apropriado.
- <!-- id: dialogs.interaction-methods.26 --> Dialogs modais devem impedir interação com o conteúdo de fundo.
- <!-- id: dialogs.interaction-methods.27 --> Alert dialogs devem comunicar mensagem e exigir resposta quando interrompem o fluxo.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: dialogs.acceptance-criteria.1 -->

<!-- id: dialogs.acceptance-criteria.2 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: dialogs.acceptance-criteria.7 -->
### Cenário: Considerando que estou em uma página que contém dialogs

<!-- id: dialogs.acceptance-criteria.8 -->
#### Navegação por teclado

1. <!-- id: dialogs.acceptance-criteria.10 --> QUANDO aciono o controle que abre o dialog
2. <!-- id: dialogs.acceptance-criteria.11 --> VEJO que o dialog é exibido
3. <!-- id: dialogs.acceptance-criteria.12 --> ENTÃO, quando uso `Tab`
4. <!-- id: dialogs.acceptance-criteria.14 --> VEJO que o foco navega pelos controles do dialog
5. <!-- id: dialogs.acceptance-criteria.15 --> ENTÃO, quando aciono confirmar, cancelar ou fechar
6. <!-- id: dialogs.acceptance-criteria.16 --> VEJO que a ação correspondente acontece

<!-- id: dialogs.acceptance-criteria.17 -->
#### Leitor de telas para desktop

1. <!-- id: dialogs.acceptance-criteria.19 --> Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - <!-- id: dialogs.acceptance-criteria.21 --> OUÇO que o componente é um dialog quando ele é aberto.
   - <!-- id: dialogs.acceptance-criteria.22 --> OUÇO seu título ou nome acessível.
   - <!-- id: dialogs.acceptance-criteria.23 --> OUÇO a mensagem principal quando ela for essencial para decidir a ação.
2. <!-- id: dialogs.acceptance-criteria.24 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: dialogs.acceptance-criteria.25 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: dialogs.acceptance-criteria.26 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: dialogs.acceptance-criteria.28 --> QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - <!-- id: dialogs.acceptance-criteria.30 --> OUÇO que o componente é um dialog quando ele é aberto.
   - <!-- id: dialogs.acceptance-criteria.31 --> OUÇO seu título ou nome acessível.
   - <!-- id: dialogs.acceptance-criteria.32 --> Consigo navegar pelos controles internos do dialog.
2. <!-- id: dialogs.acceptance-criteria.33 --> ENTÃO, quando interajo com o componente quando aplicável
3. <!-- id: dialogs.acceptance-criteria.34 --> OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: dialogs.considerations.1 -->

<!-- id: dialogs.considerations.2 -->
Pontos de atenção para se preocupar em componentes do tipo Dialogs.

- <!-- id: dialogs.considerations.5 --> Dialog e Modal podem se sobrepor conceitualmente; esta página trata dialogs como padrão de mensagem ou decisão dentro do fluxo.
- <!-- id: dialogs.considerations.6 --> Use alertdialog apenas quando a mensagem exigir atenção imediata e resposta da pessoa.
- <!-- id: dialogs.considerations.7 --> Não marque um dialog como modal se o conteúdo de fundo ainda puder ser usado.

<!-- id: references -->
## Referências

<!-- id: dialogs.references.1 -->

<!-- id: dialogs.references.2 -->
Referências adicionais sobre componentes do tipo Dialogs.

<!-- id: dialogs.references.4 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: dialogs.references.7 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: dialogs.references.10 -->
### Padrões de Design

- <!-- id: dialogs.references.12 --> [W3C APG: Dialog Modal Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- <!-- id: dialogs.references.17 --> [W3C APG: Alert and Message Dialogs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)
- <!-- id: dialogs.references.22 --> [Documentação de padrões HTML: The Dialog Element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)

<!-- id: dialogs.references.27 -->
### Design System

- <!-- id: dialogs.references.29 --> [IBM Carbon - Modal](https://carbondesignsystem.com/components/modal/usage/)
- <!-- id: dialogs.references.34 --> [Adobe Spectrum - Dialog](https://spectrum.adobe.com/page/dialog/)
- <!-- id: dialogs.references.39 --> [Github Primer - Dialog](https://primer.style/product/components/dialog/)
- <!-- id: dialogs.references.44 --> [Bootstrap - Modal](https://getbootstrap.com/docs/5.2/components/modal/)
