# Detalhes e Mais informações

- ID: `detalhes-mais-informacoes`
- Categoria: elementos-ocultos
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://www.accessboost.com.br/aulas/v1/exemplo-doc/exemplo-detalhes-mais-informacoes.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Oferece informações complementares sem interromper o caminho principal de leitura.

## Design de interação

### Guia rápido para designers

Sempre avalie o contexto da aplicação, mesmo com a orientação tendo um padrão. Design de interação documenta a intenção. O funcionamento deve ser verificado na implementação.

#### Quando usar

Use para revelar conteúdo complementar próximo ao controle de abertura.

#### O que desenhar

Mostre o texto que indica o conteúdo disponível e as versões aberta e fechada.

#### Como se comporta

Ao acionar, o conteúdo aparece ou desaparece. Quando fechado, seus controles internos não recebem navegação pelo teclado.

#### O que documentar no Figma

Registre a ordem de leitura após abrir e o comportamento do acionador. Se a ação leva a outro destino, use um link.

#### Como revisar

Confira se o objetivo e os estados são claros em telas pequenas e grandes, com ampliação. Verifique os comportamentos documentados na implementação, incluindo teclado e leitor de telas quando aplicáveis.

### Orientações completas

Questionamentos que devem ser feitos ao se projetar componentes interativos do tipo Detalhes e Mais informações.

**Importante:**
Dependendo do contexto de construção de seus respectivos componentes, é possível que haja mais questionamentos, bem como alguns dos apresentados aqui não ser necessários. A avaliação precisa ser feita caso a caso.

### Projetando para a "não interação"

1. Antes de interagir é possível perceber visualmente que existe conteúdo oculto ou complementar disponível?
2. O texto do acionador deixa claro o que será revelado, por exemplo "ler mais", "ver detalhes" ou "mais informações"?
3. É possível identificar visualmente se o conteúdo está aberto ou fechado?

### Projetando para uso com mouse (qualquer dispositivo de apontamento)

1. Há feedback visual ao passar o mouse no acionador?
2. Ao clicar no acionador, o conteúdo complementar é exibido ou ocultado?
3. A mudança de estado não desloca a pessoa para uma posição inesperada da tela?

### Projetando para uso com gestos

1. O acionador possui área tocável confortável?
2. Ao `tocar` no acionador, o conteúdo complementar é exibido ou ocultado?
3. Em telas menores, o conteúdo expandido permanece próximo do acionador e fácil de perceber?

### Projetando para uso com teclado (qualquer dispositivo que não seja de apontamento)

1. Há foco visível no acionador?
2. É possível acionar o componente com `ENTER` e `SPACE` quando ele for implementado como botão?
3. Quando o conteúdo está fechado, seus componentes internos não entram na ordem de foco?
4. Quando o conteúdo é aberto, seus componentes internos ficam disponíveis na ordem natural de navegação?

### Projetando para uso com leitor de telas

1. O acionador é anunciado com nome acessível claro?
2. O estado aberto ou fechado é anunciado corretamente?
3. O conteúdo revelado fica disponível na sequência de leitura de forma previsível?

## Métodos de Interação

Possíveis métodos de interação em componentes do tipo Detalhes e Mais informações.

**Importante:**
Apenas os principais métodos estão listados aqui. Componentes customizados devem ter estudos aprofundados.

### Interação com mouse (qualquer dispositivo de apontamento)

- Clicar no acionador abre ou fecha o conteúdo complementar.
- O estado visual do acionador deve mudar junto com o conteúdo exibido.
- O texto, ícone ou indicador visual deve continuar compreensível nos estados aberto e fechado.

### Interação com teclado (qualquer dispositivo que não seja de apontamento)

- `TAB` move o foco para o acionador.
- `ENTER` ou `SPACE` alterna o estado quando o acionador é um botão ou `summary`.
- Após a abertura, a navegação continua para o conteúdo revelado conforme a ordem do documento.

### Interação com teclado (ou gestos) + leitor de telas

- O acionador deve expor nome, papel e estado.
- Ao acionar o controle com teclado ou leitor de telas, o conteúdo abre ou fecha e o novo estado fica perceptível.
- Após abrir os detalhes, os comandos de leitura permitem percorrer o conteúdo; acionar novamente o controle o recolhe.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém detalhes e mais informações

#### Navegação por teclado

1. QUANDO uso a tecla `Tab` para mover o foco para o acionador de mais informações
2. O foco que VEJO é fortemente indicado visualmente
3. ENTÃO, quando uso `Enter` ou `Barra de espaço`
4. VEJO que o conteúdo complementar é exibido
5. ENTÃO, quando aciono novamente o mesmo controle
6. VEJO que o conteúdo complementar é ocultado

#### Leitor de telas para desktop

1. Quando uso um leitor de tela no computador (NVDA, JAWS, VoiceOver) e movo o foco para o acionador

   - OUÇO o nome do acionador.
   - OUÇO que o componente pode ser acionado.
   - OUÇO se o conteúdo está aberto ou fechado.
2. ENTÃO, quando aciono o componente
3. OUÇO ou percebo que o conteúdo complementar ficou disponível ou foi ocultado.

#### Leitor de telas para dispositivos móveis

1. QUANDO uso um leitor de tela no celular (Talkback, VoiceOver) e deslizo o dedo para focar no acionador, acontece o seguinte:

   - OUÇO o nome do acionador.
   - OUÇO que o componente pode ser acionado.
   - OUÇO se o conteúdo está aberto ou fechado.
2. ENTÃO, quando eu toco duas vezes para ativar o componente
3. OUÇO ou percebo que o conteúdo complementar ficou disponível ou foi ocultado.

## Pontos de atenção

Pontos de atenção para se preocupar em componentes do tipo Detalhes e Mais informações.

- Este componente representa conteúdo complementar oculto que é revelado por uma ação, como "ler mais", "ver detalhes" ou "mais informações".
- Não esconda informações essenciais sem indicar claramente que há mais conteúdo disponível.
- Se o conteúdo revelado for longo ou composto por várias seções, accordion pode ser um padrão mais adequado.
- Se a ação leva para outra página ou outro local, o comportamento é de link, não de disclosure.

### Notas de implementação e decisões de comportamento

- Quando usado, `aria-expanded` deve refletir o estado aberto ou fechado.

- O elemento nativo `details` com `summary` pode ser usado quando seu comportamento atender ao contexto.

## Referências

Referências adicionais sobre componentes do tipo Detalhes e Mais informações.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

### Padrões de Design

- [W3C APG: Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)
- [MDN Web Docs: The Details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN Web Docs: The Summary disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)

### Design System

- [US.gov - Summary box](https://designsystem.digital.gov/components/summary-box/)
- [IBM Carbon - Content switcher](https://carbondesignsystem.com/components/content-switcher/usage/)
- [Bootstrap - Collapse](https://getbootstrap.com/docs/5.2/components/collapse/)
