# Autocomplete

- ID: `autocomplete`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/autocomplete.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Oferece sugestões durante a digitação, distinguindo texto em edição, opção ativa e valor confirmado.

<!-- id: interaction-design -->
## Design de interação

<!-- id: autocomplete.designer-guide.frame -->
<!-- id: autocomplete.designer-guide.1 -->
### Guia rápido para designers

<!-- id: autocomplete.designer-guide.2 -->
#### Quando usar

<!-- id: autocomplete.designer-guide.3 -->
Use quando sugestões ajudarem a encontrar ou preencher um valor. Para poucas opções visíveis, avalie um controle mais simples.

<!-- id: autocomplete.designer-guide.4 -->
#### O que desenhar

<!-- id: autocomplete.designer-guide.5 -->
Mostre rótulo, campo, lista de sugestões, opção ativa, valor confirmado, carregamento, ausência de opções e falha.

<!-- id: autocomplete.designer-guide.6 -->
#### Como se comporta

<!-- id: autocomplete.designer-guide.7 -->
Digitar solicita sugestões. Percorrer opções não precisa confirmar uma escolha; `Enter` confirma conforme o padrão documentado.

<!-- id: autocomplete.designer-guide.8 -->
#### O que documentar no Figma

<!-- id: autocomplete.designer-guide.9 -->
Defina entrada livre ou restrita, gatilho da consulta, confirmação, cancelamento e efeito de sair do campo.

<!-- id: autocomplete.designer-guide.10 -->
#### Como revisar

<!-- id: autocomplete.designer-guide.11 -->
Confira os estados no desenho. Na implementação, verifique edição, opção ativa e confirmação com teclado e leitores de tela.

<!-- id: autocomplete.15 -->
### Escolher o comportamento

1. <!-- id: autocomplete.16 --> As sugestões são valores obrigatórios ou a pessoa pode confirmar um texto que não aparece na lista? Essa regra está disponível antes do preenchimento?
2. <!-- id: autocomplete.17 --> Este guia adota combobox editável com lista de sugestões e confirmação explícita. A seleção múltipla é outro padrão, discutido no componente Select.
3. <!-- id: autocomplete.18 --> A busca começa ao focar, digitar ou atingir uma quantidade mínima de caracteres? A interface explica quando é preciso digitar mais?

<!-- id: autocomplete.20 -->
### Opções e estados

1. <!-- id: autocomplete.21 --> É possível distinguir texto digitado, opção ativa e valor confirmado? Sugestões com nomes semelhantes têm contexto suficiente para a escolha?
2. <!-- id: autocomplete.22 --> Carregamento, ausência de sugestões e falha têm mensagens diferentes? Uma falha preserva a entrada e permite tentar novamente?
3. <!-- id: autocomplete.23 --> A lista permanece utilizável com teclado virtual, ampliação e rótulos longos? A opção ativa continua visível durante a rolagem?

<!-- id: autocomplete.25 -->
### Confirmar e cancelar

1. <!-- id: autocomplete.26 --> O que acontece ao clicar em uma sugestão, pressionar `Enter`, sair com `Tab` ou fechar com `Esc`? No padrão deste guia, `Esc` fecha sem confirmar a opção apenas percorrida.
2. <!-- id: autocomplete.27 --> Depois de confirmar, editar o texto invalida a escolha anterior? Documente a relação entre o texto exibido e o identificador salvo.

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: autocomplete.29 -->

<!-- id: autocomplete.30 -->
### Mouse e toque

<!-- id: autocomplete.31 -->
Clicar ou `tocar` em uma sugestão confirma seu valor. A lista não deve desaparecer antes que o acionamento seja concluído.

<!-- id: autocomplete.32 -->
### Teclado

<!-- id: autocomplete.33 -->
`Tab` entra no campo. Digitação, seleção, copiar e colar mantêm os comandos nativos de edição.

<!-- id: autocomplete.34 -->
Com a lista aberta, `setas para baixo e para cima` percorrem sugestões; `Enter` confirma a opção ativa; `Esc` fecha a lista sem confirmar uma opção apenas percorrida.

<!-- id: autocomplete.35 -->
`Tab` sai do campo sem percorrer cada sugestão. Neste padrão de confirmação explícita, sair não confirma automaticamente a opção ativa.

<!-- id: autocomplete.36 -->
### Leitores de tela

<!-- id: autocomplete.methods-review.1 -->
Ao focar o campo com leitor de telas, a pessoa identifica seu nome e se as sugestões estão abertas. Usar `setas para cima ou para baixo` percorre as opções e permite identificar a opção ativa; `Enter` confirma.

<!-- id: autocomplete.methods-review.2 -->
Com leitor de telas no celular, a pessoa digita pelo teclado virtual, percorre sugestões com os gestos de navegação do leitor e `toca duas vezes` na opção focada para confirmar. A lista pode informar a quantidade ou ausência de sugestões após a resposta.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: autocomplete.gherkin-standard.intro-0 -->

<!-- id: autocomplete.gherkin-standard.intro-1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: autocomplete.39 -->
### Cenário: Considerando que estou em uma página que contém Autocomplete

<!-- id: autocomplete.40 -->
Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

<!-- id: autocomplete.gherkin-standard.13 -->
#### Navegação por teclado

1. <!-- id: autocomplete.gherkin-standard.14 --> QUANDO uso `Tab` para focar o campo e digito um termo com sugestões
2. <!-- id: autocomplete.gherkin-standard.15 --> VEJO o foco e consigo percorrer sugestões com `setas` sem impedir a edição nativa do texto
3. <!-- id: autocomplete.gherkin-standard.16 --> ENTÃO, quando pressiono `Enter`, VEJO o valor confirmado; ao pressionar `Esc` antes de confirmar, VEJO a lista fechar sem salvar a opção apenas percorrida

<!-- id: autocomplete.gherkin-standard.18 -->
#### Leitor de telas para desktop

1. <!-- id: autocomplete.gherkin-standard.19 --> QUANDO navego até o combobox editável com leitor de telas no computador
2. <!-- id: autocomplete.gherkin-standard.20 --> OUÇO seu rótulo, estado de expansão e as sugestões ativas durante a navegação
3. <!-- id: autocomplete.gherkin-standard.21 --> ENTÃO, quando confirmo uma sugestão, OUÇO ou percebo o valor confirmado e o fechamento da lista conforme o padrão definido

<!-- id: autocomplete.gherkin-standard.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: autocomplete.gherkin-standard.24 --> QUANDO foco o campo com leitor de telas no celular e digito um termo
2. <!-- id: autocomplete.gherkin-standard.25 --> OUÇO ou percebo a disponibilidade das sugestões e consigo explorá-las pelos gestos da plataforma
3. <!-- id: autocomplete.gherkin-standard.26 --> ENTÃO, quando aciono uma sugestão, OUÇO ou percebo o valor confirmado sem depender apenas do destaque visual

<!-- id: autocomplete.gherkin-standard.28 -->
### Cenários complementares — ampliação editorial

<!-- id: autocomplete.41 -->
#### Percorrer sem confirmar

1. <!-- id: autocomplete.gherkin-standard.1 --> DADAS sugestões disponíveis
2. <!-- id: autocomplete.gherkin-standard.2 --> QUANDO percorro com `setas` e pressiono `Esc`
3. <!-- id: autocomplete.gherkin-standard.3 --> ENTÃO a lista fecha sem salvar a sugestão apenas percorrida e posso continuar editando.

<!-- id: autocomplete.43 -->
#### Confirmar uma opção

1. <!-- id: autocomplete.gherkin-standard.4 --> DADA uma opção ativa
2. <!-- id: autocomplete.gherkin-standard.5 --> QUANDO pressiono `Enter` ou a aciono por toque
3. <!-- id: autocomplete.gherkin-standard.6 --> ENTÃO o campo apresenta o valor confirmado e a lista fecha conforme a regra documentada.

<!-- id: autocomplete.45 -->
#### Respostas fora de ordem

1. <!-- id: autocomplete.gherkin-standard.7 --> DADAS consultas sucessivas
2. <!-- id: autocomplete.gherkin-standard.8 --> QUANDO a resposta antiga chega após a mais recente
3. <!-- id: autocomplete.gherkin-standard.9 --> ENTÃO ela não substitui as sugestões atuais nem altera o valor confirmado.

<!-- id: autocomplete.47 -->
#### Sem correspondência em entrada restrita

1. <!-- id: autocomplete.gherkin-standard.10 --> DADA entrada restrita às opções
2. <!-- id: autocomplete.gherkin-standard.11 --> QUANDO tento confirmar um texto sem correspondência
3. <!-- id: autocomplete.gherkin-standard.12 --> ENTÃO recebo orientação associada ao campo, o texto é preservado e nenhum identificador antigo é enviado como se fosse a nova escolha.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: autocomplete.49 -->

<!-- id: autocomplete.50 -->
Autocomplete de sugestões é diferente do atributo HTML autocomplete, que fornece informações ao navegador sobre preenchimento automático.

<!-- id: autocomplete.51 -->
Não coloque links ou botões acionáveis dentro de opções de uma listbox. Conteúdo com ações independentes exige outro padrão.

<!-- id: autocomplete.52 -->
Cancelamento de requisições e descarte de respostas antigas precisam ser implementados. O desenho documenta a intenção, mas não comprova esse funcionamento.

<!-- id: autocomplete.methods-review.3 -->
### Notas de implementação e decisões de comportamento

<!-- id: autocomplete.37 -->
Exponha nome, estado de expansão e relação com a lista. No modelo com aria-activedescendant, o foco DOM permanece no campo e a opção ativa precisa existir e estar identificada na lista.

<!-- id: autocomplete.38 -->
A quantidade ou ausência de sugestões pode ser comunicada após a resposta, sem anunciar cada tecla. Verifique também exploração e confirmação com leitor de telas no celular.

<!-- id: references -->
## Referências

<!-- id: autocomplete.53 -->

<!-- id: autocomplete.references-standard.1 -->
Referências adicionais sobre componentes do tipo Autocomplete.

<!-- id: autocomplete.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: autocomplete.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: autocomplete.54 -->
Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

<!-- id: autocomplete.57 -->
[W3C APG — Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

<!-- id: autocomplete.60 -->
[W3C APG — Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
