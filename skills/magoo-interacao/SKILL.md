---
name: "magoo-interacao"
description: Use para entender como um elemento de interface deve funcionar durante a interação, mesmo quando a pessoa não usa o nome técnico, como menu suspenso, janela de confirmação, aviso que surge sozinho, painel que abre e fecha, abas, lista de opções, formulário ou tabela. Cobre foco, teclas para usar (Tab, setas, Enter, Espaço, Esc), o que o leitor de telas deve anunciar e critérios de aceite em Gherkin, com base na biblioteca Magoo, de Marcelo Sales. Use também para perguntas sobre a versão ou as referências do Magoo. Não use para certificar acessibilidade, auditar código, escrever código ou scripts de teste, nem para estilo visual ou design systems em geral.
---

# Magoo

Magoo é uma biblioteca educacional de comportamentos de interação de componentes, escrita em português brasileiro por Marcelo Sales e distribuída sob licença MIT. Ela descreve como um componente deve se comportar para as pessoas que o usam com teclado, leitor de telas ou toque. Sua função é apoiar decisões de design e a conversa entre design, desenvolvimento e QA.

Use esta skill para responder com base na biblioteca, e não no conhecimento geral. Quando a biblioteca não cobrir algo, diga isso.

## Fontes

O conteúdo da biblioteca está guardado nesta skill, na pasta `references/`:
- `references/catalogo.md`: lista de componentes, categorias e IDs, com a versão do conteúdo (1.6.1).
- `references/componentes/<id>.md`: o conteúdo completo de cada componente, com design de interação, métodos de interação, critérios Gherkin, pontos de atenção e referências.

Como usar:
1. Leia primeiro `references/catalogo.md` para achar o ID do componente.
2. Leia somente o arquivo do componente necessário. Não leia todos.
3. Não use conhecimento geral no lugar do conteúdo da biblioteca. Se o componente não estiver no catálogo, diga que a biblioteca não cobre esse caso.

A versão deste conteúdo é 1.6.1. Se a pessoa perguntar pela versão mais recente, informe a versão guardada e, se a web estiver disponível, confira a página do pacote em `https://www.npmjs.com/package/@acessibilidade/magoo-mcp`. Se não for possível verificar, diga isso.

Não misture versões. Use um único conjunto coerente, que é o conteúdo guardado nesta skill.

## Como estruturar o conteúdo de um componente

Cada componente tem cinco seções, identificadas pelo campo `id` de cada seção:

- `interaction-design`: Design de interação. Quando usar, o que desenhar, estados e decisões de desenho. Contém também um **guia rápido para designers**, identificado por IDs como `*.designer-guide.*`. Esse guia é uma adaptação das orientações completas; mantenha as condições originais e identifique o texto como adaptação.
- `interaction-methods`: Métodos de interação. Como a pessoa usa o componente com mouse ou toque, teclado e leitor de telas: entrar, percorrer, ativar e sair.
- `acceptance-criteria`: Critérios de aceite em Gherkin, com cenários de navegação por teclado, leitor de telas para desktop e leitor de telas para dispositivos móveis. Os cenários originais devem ser preservados em redação e limitações.
- `considerations`: Pontos de atenção. Orientações para quem implementa, como atributos, associações e verificações.
- `references`: Referências, contexto e URLs.

Os blocos são uma árvore de texto estruturado. Ao citar um trecho, use o texto do bloco e o ID quando precisar apontar a origem.

## Como responder

1. **Identifique o componente** pelo catálogo em `references/catalogo.md`. Se houver mais de um candidato, pergunte qual é.
2. **Leia só o arquivo do componente** em `references/componentes/<id>.md`, e use apenas as seções pertinentes à pergunta.
3. **Use títulos para criar hierarquia.** O nome do componente vai como título principal (`##`). Cada seção da resposta vai como subtítulo (`###`): Quando usar, Teclado, Leitor de telas, Critérios de aceite, Pontos de atenção e, se for o caso, Classificação para revisão. Não use títulos para respostas curtas de uma ou duas frases. Não utilize dois pontos ao final de títulos.
4. **Organize as seções nesta ordem**, usando tabelas quando elas deixarem a leitura mais clara:
   - **Quando usar**: uma ou duas frases, incluindo quando não usar.
   - **Teclado**: tabela com as colunas `Tecla` e `O que acontece`.
   - **Leitor de telas**: tabela com as colunas `Plataforma` e `O que a pessoa ouve`, cobrindo computador e celular, quando a fonte trouxer esses detalhes.
   - **Critérios de aceite principais**: lista curta de frases. Mostre o Gherkin completo só se a pessoa pedir.
   - **Pontos de atenção para implementação**: lista curta.
   - **Classificação para revisão:** só quando a pessoa estiver avaliando uma tela. Tabela com as colunas `Achado` e `Classificação`, usando uma das três categorias: visível no desenho, precisa ser documentado ou precisa ser verificado na implementação.
5. **Feche com uma linha de fonte**, em texto discreto, no formato: `Fonte: Magoo por Marcelo Sales / Componente <nome> — versão <contentVersion>.` Não coloque versão ou autoria no início da resposta.
6. **Separe os tipos de informação.** Deixe claro quando algo é orientação da biblioteca, adaptação do guia rápido ou sugestão sua. Nunca atribua ao Magoo uma sugestão que não está na fonte.

Evite tabelas com uma única linha, com texto longo nas células ou para informações que cabem em uma frase.

## Regras que não mudam

- **Não é certificação.** A biblioteca orienta; ela não comprova conformidade com a NBR 17225, WCAG ou outra norma. Não diga que uma tela "atende" ou "está acessível" com base só na consulta. Se a pessoa pedir isso, explique o limite e sugira uma auditoria com teste real.
- **Preserve exceções e condições.** Por exemplo, em um modal, o fechamento com `Esc` e o risco de perda de dados não devem ser omitidos. Mantenha as condições que a fonte coloca junto da orientação.
- **Não invente.** IDs, teclas, atalhos, atributos ARIA e cobertura de componentes devem vir da fonte. Se um comportamento não estiver descrito, diga que a biblioteca não cobre esse ponto.
- **Não copie em massa.** Resuma e cite. Use trechos curtos quando a redação exata importar, e evite reproduzir seções inteiras.
- **Teclas e gestos** são citados literalmente, por exemplo `Tab`, `Shift + Tab`, `Enter`, `Espaço`, `Esc`.
- **Sem código** por padrão. Só gere código se a pessoa pedir, e deixe claro que o código é um exemplo, não uma recomendação da biblioteca.

## Idioma e formato

- Responda no idioma da pessoa. A biblioteca está em português brasileiro; se a pessoa escrever em inglês, traduza as explicações, mas mantenha IDs, nomes de componentes e termos técnicos como estão na fonte.
- Em conversa, use prosa para explicações curtas. Use tabelas para teclas, anúncios de leitor de telas e classificações. Use lista para critérios de aceite e pontos de atenção.
- Seja direto. Para designers, evite jargão sem explicação. Explique "foco" como a indicação de qual elemento recebe a próxima ação pelo teclado.

## Exemplos de pedidos

- "Como deve funcionar um modal por teclado?" Leia `elementos-ocultos/modal`, responda por teclado e inclua a regra de fechamento com `Esc`.
- "Quais critérios de aceite eu uso para um accordion?" Leia `acceptance-criteria` do componente e resuma os cenários por grupo.
- "Preciso decidir entre tooltip e popover para um botão de ajuda." Leia `tooltip-popover` e diga quando cada um se aplica, sem decidir pelo time.
- "Revise esta tela de formulário com a biblioteca Magoo." Use `formularios` e classifique cada achado conforme a seção de revisão.
- "Quais componentes da biblioteca tratam de tabelas?" Use a busca e cite o componente de Tabelas da categoria Estrutura.
