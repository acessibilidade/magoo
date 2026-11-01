# Dialogs

- ID: `dialogs`
- Categoria: mensagens
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-dialogs.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Apresentam mensagens e decisões em um contexto de diálogo com a pessoa.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para apresentar uma mensagem ou decisão em um diálogo; defina se interrompe o fluxo.

#### O que desenhar

Mostre título, mensagem, ações e a forma de cancelar ou fechar.

#### Como se comporta

Botões executam suas ações. `Esc` ou clique fora só fecha quando for seguro; um diálogo modal impede interação com o fundo.

#### O que documentar no Figma

Documente se é modal, o destino da navegação pelo teclado e o risco de perda de dados. Diálogos de alerta podem exigir uma resposta.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes do tipo Dialogs.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de abrir o dialog é possível perceber qual ação abrirá a janela?
2. O dialog é necessário para confirmar, coletar ou comunicar algo dentro do fluxo?
3. O título do dialog descreve claramente sua finalidade?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao acionar o controle que abre o dialog?
2. O dialog deixa claros os controles disponíveis, como confirmar, cancelar ou fechar?
3. A ação principal e a ação de cancelamento são visualmente distinguíveis?

### Projetando para uso com gestos

1. Controles internos possuem área tocável confortável?
2. É possível fechar ou cancelar o dialog sem depender de gesto oculto?
3. A leitura visual do dialog é possível sem competição com o fundo?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Ao abrir, o foco vai para um ponto apropriado dentro do dialog?
2. `TAB` e `SHIFT`+`TAB` seguem ordem previsível?
3. `ESC` fecha o dialog quando permitido?
4. Ao fechar, o foco retorna para o acionador ou ponto coerente do fluxo?

### Projetando para uso com leitor de telas

1. O dialog é anunciado com nome acessível?
2. A descrição ou mensagem principal é anunciada quando necessária?
3. O estado modal ou não modal é coerente com o comportamento real da interface?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Dialogs.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar no acionador abre o dialog.
- Clicar nos controles internos executa as ações correspondentes.
- Fechamento por clique fora só deve existir quando não houver risco de perda de dados.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `ENTER` ou `SPACE` aciona botões.
- `TAB` navega pelos controles disponíveis.
- `ESC` fecha o dialog quando essa ação for segura.

### Interação com teclado (ou gestos) + leitor de telas

- O dialog deve ter nome acessível por título visível ou atributo apropriado.
- Dialogs modais devem impedir interação com o conteúdo de fundo.
- Alert dialogs devem comunicar mensagem e exigir resposta quando interrompem o fluxo.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém dialogs

#### Navegação por teclado

1. QUANDO aciono o controle que abre o dialog
2. VEJO que o dialog é exibido
3. ENTÃO, quando uso `Tab`
4. VEJO que o foco navega pelos controles do dialog
5. ENTÃO, quando aciono confirmar, cancelar ou fechar
6. VEJO que a ação correspondente acontece

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e navego pelo componente

   - OUÇO que o componente é um dialog quando ele é aberto.
   - OUÇO seu título ou nome acessível.
   - OUÇO a mensagem principal quando ela for essencial para decidir a ação.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para navegar pelo componente, acontece o seguinte:

   - OUÇO que o componente é um dialog quando ele é aberto.
   - OUÇO seu título ou nome acessível.
   - Consigo navegar pelos controles internos do dialog.
2. ENTÃO, quando interajo com o componente quando aplicável
3. OUÇO ou percebo que a informação, estado, conteúdo ou ação correspondente está disponível.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Dialogs.

- Dialog e Modal podem se sobrepor conceitualmente; esta página trata dialogs como padrão de mensagem ou decisão dentro do fluxo.
- Use alertdialog apenas quando a mensagem exigir atenção imediata e resposta da pessoa.
- Não marque um dialog como modal se o conteúdo de fundo ainda puder ser usado.

## Referências

Referências adicionais sobre componentes do tipo Dialogs.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Dialog Modal Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [W3C APG: Alert and Message Dialogs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)
- [Documentação de padrões HTML: The Dialog Element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)

### Design System

- [IBM Carbon - Modal](https://carbondesignsystem.com/components/modal/usage/)
- [Adobe Spectrum - Dialog](https://spectrum.adobe.com/page/dialog/)
- [Github Primer - Dialog](https://primer.style/product/components/dialog/)
- [Bootstrap - Modal](https://getbootstrap.com/docs/5.2/components/modal/)
