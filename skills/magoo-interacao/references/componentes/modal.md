# Modal

- ID: `modal`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-modal.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Exibe uma tarefa ou informação sobre a página, exigindo atenção à entrada, à permanência e à saída do foco.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use quando uma tarefa ou informação precisar interromper o fluxo. Primeiro avalie se essa interrupção é necessária.

#### O que desenhar

Mostre o controle que abre a janela, a janela aberta acima do conteúdo, o título, as ações e uma forma visível de fechar ou cancelar.

#### Como se comporta

Ao abrir, a navegação pelo teclado começa em um ponto adequado dentro da janela e permanece nela. Ao fechar, volta ao controle de abertura ou a um ponto coerente do fluxo. `Esc` pode fechar quando isso não causar perda de dados sem confirmação.

#### O que documentar no Figma

Anote onde a navegação começa e retorna, a ordem dos controles e o nome anunciado pelo leitor de telas. Registre se clicar fora fecha a janela e como evitar perda de dados. O conteúdo ao fundo fica indisponível enquanto ela estiver aberta.

#### Como revisar

A abertura tem objetivo claro? É fácil cancelar? O conteúdo e as ações cabem em telas pequenas e grandes? Registre como pendentes de implementação a navegação pelo teclado e os anúncios do leitor de telas.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Modal.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de abrir o componente é possível perceber qual ação abrirá a janela modal?
2. O nome do controle que abre a modal deixa claro o objetivo da ação?
3. A modal é realmente necessária para interromper o fluxo da pessoa?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao acionar o controle que abre a modal?
2. A modal aparece em camada acima do conteúdo principal e deixa claro que o restante da página está indisponível?
3. Existe controle visível para fechar ou cancelar a modal?

### Projetando para uso com gestos

1. O controle de abertura e os controles internos possuem área tocável adequada?
2. Ao abrir a modal, o conteúdo principal não compete visualmente com a tarefa da modal?
3. É possível fechar a modal sem depender de gesto difícil ou oculto?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Ao abrir a modal, o foco vai para um ponto adequado dentro dela?
2. A navegação com `TAB` permanece dentro da modal enquanto ela estiver aberta?
3. É possível fechar a modal com `ESC`, quando isso não causar perda de dados sem confirmação?
4. Ao fechar a modal, o foco retorna para o componente que a abriu ou para um ponto coerente do fluxo?

### Projetando para uso com leitor de telas

1. A modal é anunciada como diálogo?
2. O nome acessível do diálogo é anunciado claramente?
3. O conteúdo fora da modal fica indisponível para navegação enquanto a modal estiver aberta?
4. A mudança de foco e o fechamento são perceptíveis?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Modal.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar no controle de abertura exibe a modal.
- Clicar no botão de fechar, cancelar ou ação principal executa a ação correspondente.
- Clicar fora da modal só deve fechar o componente quando isso for uma decisão de produto segura e documentada.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `ENTER` ou `SPACE` aciona botões internos.
- `TAB` e `SHIFT`+`TAB` circulam entre controles da modal.
- `ESC` fecha a modal quando aplicável.

### Interação com teclado (ou gestos) + leitor de telas

- O diálogo deve ter nome acessível.
- O foco deve ser movido para dentro da modal no momento da abertura.
- Enquanto a modal está aberta, a navegação do leitor de telas fica no diálogo; fechar permite voltar à tarefa de origem.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém modal

#### Navegação por teclado

1. QUANDO aciono o botão que abre a modal
2. VEJO que a modal é exibida acima do conteúdo principal
3. ENTÃO, quando uso a tecla `Tab`
4. VEJO que o foco permanece nos controles da modal
5. ENTÃO, quando fecho a modal
6. VEJO que o foco retorna para um ponto previsível do fluxo

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o componente

   - OUÇO que o componente é um diálogo.
   - OUÇO o nome acessível da modal.
   - OUÇO o conteúdo ou instrução principal da modal.
2. ENTÃO, quando aciono ou altero o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no componente, acontece o seguinte:

   - OUÇO que o componente é um diálogo.
   - OUÇO o nome acessível da modal.
   - Consigo navegar pelos controles da modal sem acessar o conteúdo de fundo.
2. ENTÃO, quando eu toco duas vezes ou uso o gesto adequado para ativar o componente
3. OUÇO ou percebo que o estado, valor, conteúdo ou ação correspondente foi atualizado.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Modal.

- Modais interrompem o fluxo e devem ser usadas apenas quando a interação exigir foco imediato.
- Não esconda o botão de fechar quando a pessoa precisar poder cancelar a ação.
- Confirme antes de fechar a modal caso a pessoa possa perder dados preenchidos.

- O fundo deve ficar inerte ou indisponível para tecnologias assistivas.

## Referências

Referências adicionais sobre componentes do tipo Modal.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Dialog Modal Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Documentação de padrões HTML: The Dialog Element](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element)
- [Google - Material Design - Dialogs](https://m3.material.io/components/dialogs/overview)

### Design System

- [US.gov - Modal](https://designsystem.digital.gov/components/modal/)
- [IBM Carbon - Modal](https://carbondesignsystem.com/components/modal/usage/)
- [Adobe Spectrum - Dialog](https://spectrum.adobe.com/page/dialog/)
- [Github Primer - Dialog](https://primer.style/product/components/dialog/)
- [Bootstrap - Modal](https://getbootstrap.com/docs/5.2/components/modal/)
