# Autocomplete

- ID: `autocomplete`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/autocomplete.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Oferece sugestões durante a digitação, distinguindo texto em edição, opção ativa e valor confirmado.

## Design de interação

### Guia rápido para designers

#### Quando usar

Use quando sugestões ajudarem a encontrar ou preencher um valor. Para poucas opções visíveis, avalie um controle mais simples.

#### O que desenhar

Mostre rótulo, campo, lista de sugestões, opção ativa, valor confirmado, carregamento, ausência de opções e falha.

#### Como se comporta

Digitar solicita sugestões. Percorrer opções não precisa confirmar uma escolha; `Enter` confirma conforme o padrão documentado.

#### O que documentar no Figma

Defina entrada livre ou restrita, gatilho da consulta, confirmação, cancelamento e efeito de sair do campo.

#### Como revisar

Confira os estados no desenho. Na implementação, verifique edição, opção ativa e confirmação com teclado e leitores de tela.

### Escolher o comportamento

1. As sugestões são valores obrigatórios ou a pessoa pode confirmar um texto que não aparece na lista? Essa regra está disponível antes do preenchimento?
2. Este guia adota combobox editável com lista de sugestões e confirmação explícita. A seleção múltipla é outro padrão, discutido no componente Select.
3. A busca começa ao focar, digitar ou atingir uma quantidade mínima de caracteres? A interface explica quando é preciso digitar mais?

### Opções e estados

1. É possível distinguir texto digitado, opção ativa e valor confirmado? Sugestões com nomes semelhantes têm contexto suficiente para a escolha?
2. Carregamento, ausência de sugestões e falha têm mensagens diferentes? Uma falha preserva a entrada e permite tentar novamente?
3. A lista permanece utilizável com teclado virtual, ampliação e rótulos longos? A opção ativa continua visível durante a rolagem?

### Confirmar e cancelar

1. O que acontece ao clicar em uma sugestão, pressionar `Enter`, sair com `Tab` ou fechar com `Esc`? No padrão deste guia, `Esc` fecha sem confirmar a opção apenas percorrida.
2. Depois de confirmar, editar o texto invalida a escolha anterior? Documente a relação entre o texto exibido e o identificador salvo.

## Métodos de Interação

### Mouse e toque

Clicar ou `tocar` em uma sugestão confirma seu valor. A lista não deve desaparecer antes que o acionamento seja concluído.

### Teclado

`Tab` entra no campo. Digitação, seleção, copiar e colar mantêm os comandos nativos de edição.

Com a lista aberta, `setas para baixo e para cima` percorrem sugestões; `Enter` confirma a opção ativa; `Esc` fecha a lista sem confirmar uma opção apenas percorrida.

`Tab` sai do campo sem percorrer cada sugestão. Neste padrão de confirmação explícita, sair não confirma automaticamente a opção ativa.

### Leitores de tela

Ao focar o campo com leitor de telas, a pessoa identifica seu nome e se as sugestões estão abertas. Usar `setas para cima ou para baixo` percorre as opções e permite identificar a opção ativa; `Enter` confirma.

Com leitor de telas no celular, a pessoa digita pelo teclado virtual, percorre sugestões com os gestos de navegação do leitor e `toca duas vezes` na opção focada para confirmar. A lista pode informar a quantidade ou ausência de sugestões após a resposta.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Autocomplete

Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

#### Navegação por teclado

1. QUANDO uso `Tab` para focar o campo e digito um termo com sugestões
2. VEJO o foco e consigo percorrer sugestões com `setas` sem impedir a edição nativa do texto
3. ENTÃO, quando pressiono `Enter`, VEJO o valor confirmado; ao pressionar `Esc` antes de confirmar, VEJO a lista fechar sem salvar a opção apenas percorrida

#### Leitor de telas para desktop

1. QUANDO navego até o combobox editável com leitor de telas no computador
2. OUÇO seu rótulo, estado de expansão e as sugestões ativas durante a navegação
3. ENTÃO, quando confirmo uma sugestão, OUÇO ou percebo o valor confirmado e o fechamento da lista conforme o padrão definido

#### Leitor de telas para dispositivos móveis

1. QUANDO foco o campo com leitor de telas no celular e digito um termo
2. OUÇO ou percebo a disponibilidade das sugestões e consigo explorá-las pelos gestos da plataforma
3. ENTÃO, quando aciono uma sugestão, OUÇO ou percebo o valor confirmado sem depender apenas do destaque visual

### Cenários complementares — ampliação editorial

#### Percorrer sem confirmar

1. DADAS sugestões disponíveis
2. QUANDO percorro com `setas` e pressiono `Esc`
3. ENTÃO a lista fecha sem salvar a sugestão apenas percorrida e posso continuar editando.

#### Confirmar uma opção

1. DADA uma opção ativa
2. QUANDO pressiono `Enter` ou a aciono por toque
3. ENTÃO o campo apresenta o valor confirmado e a lista fecha conforme a regra documentada.

#### Respostas fora de ordem

1. DADAS consultas sucessivas
2. QUANDO a resposta antiga chega após a mais recente
3. ENTÃO ela não substitui as sugestões atuais nem altera o valor confirmado.

#### Sem correspondência em entrada restrita

1. DADA entrada restrita às opções
2. QUANDO tento confirmar um texto sem correspondência
3. ENTÃO recebo orientação associada ao campo, o texto é preservado e nenhum identificador antigo é enviado como se fosse a nova escolha.

## Pontos de atenção

Autocomplete de sugestões é diferente do atributo HTML autocomplete, que fornece informações ao navegador sobre preenchimento automático.

Não coloque links ou botões acionáveis dentro de opções de uma listbox. Conteúdo com ações independentes exige outro padrão.

Cancelamento de requisições e descarte de respostas antigas precisam ser implementados. O desenho documenta a intenção, mas não comprova esse funcionamento.

### Notas de implementação e decisões de comportamento

Exponha nome, estado de expansão e relação com a lista. No modelo com aria-activedescendant, o foco DOM permanece no campo e a opção ativa precisa existir e estar identificada na lista.

A quantidade ou ausência de sugestões pode ser comunicada após a resposta, sem anunciar cada tecla. Verifique também exploração e confirmação com leitor de telas no celular.

## Referências

Referências adicionais sobre componentes do tipo Autocomplete.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

[W3C APG — Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

[W3C APG — Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
