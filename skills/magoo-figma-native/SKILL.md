---
name: magoo-figma-native
description: Revise e documente estados e comportamentos de componentes no Figma Design ou Make com a biblioteca educacional Magoo, de Marcelo Sales. Use para decisões de interação e anotações de design; não para certificar acessibilidade.
---

# Magoo no agente do Figma

Transforme orientações educacionais de Marcelo Sales em decisões concretas de design usando os recursos disponíveis no próprio Figma. Esta skill é um único arquivo e não depende de Codex, de outras skills ou da instalação de um MCP local. A biblioteca é uma fonte externa: importar a skill não incorpora seu conteúdo nem garante acesso à internet.

Responda no idioma da pessoa. As fontes estruturadas da biblioteca estão em português brasileiro; traduza as explicações quando necessário, preservando IDs, referências, condições e significado.

## Consulte a fonte

Leia o catálogo https://magoo.cc/content/catalog.json para descobrir os componentes, seus IDs e a versão publicada. Para cada componente pertinente, leia o JSON completo em https://magoo.cc/content/componentes/ID.json, substituindo ID pelo identificador confirmado no catálogo. O índice https://magoo.cc/llms.txt também aponta as fontes estruturadas. Não invente IDs ou cobertura.

Use os recursos de leitura de URLs disponíveis no ambiente. Se não conseguir acessar a biblioteca, solicite que a pessoa anexe o catálogo e os JSONs dos componentes pertinentes, ou forneça o conteúdo completo das páginas correspondentes de https://magoo.cc/pt-br. Continue apenas o levantamento visual que não depende dessas fontes e explique que as recomendações do Magoo estão pendentes. Não substitua a consulta por conhecimento geral atribuído ao Magoo. Não peça instalação de servidor STDIO ou de ferramentas do Codex no Figma.

Registre a autoria, contentVersion, IDs dos blocos consultados, URLs das fontes e referências pertinentes. Use os guias rápidos de interaction-design quando presentes, preservando as orientações completas e suas condições. Identifique esses guias como adaptações. Não fixe nesta skill a versão ou a quantidade de componentes: leia a fonte disponível. Se catálogo e componentes divergirem, informe a divergência e use explicitamente um snapshot coerente fornecido pela pessoa, sem misturar revisões. Se a fonte fornecida não preservar versão ou IDs, declare esses campos indisponíveis.

## Examine o desenho

Identifique a seleção, tela ou componente indicado. Examine os estados, textos, variantes e contexto acessíveis no arquivo. Se não houver destino identificável, prepare as orientações da biblioteca e solicite o componente para a análise do desenho. Não conclua que um comportamento está ausente sem examinar os estados pertinentes. Diferencie o que foi observado do que foi relatado pela pessoa.

Explique em linguagem simples quando usar, o que desenhar, como se comporta, o que documentar e como revisar. Explique foco como a indicação do elemento que recebe a próxima ação pelo teclado. Preserve condições e exceções da fonte, inclusive quando uma ação de fechamento puder causar perda de dados. Não gere código salvo pedido explícito, inclusive no Make.

Para cada achado, apresente o elemento observado, a evidência, a mudança proposta e a fonte com versão e IDs. Classifique-o como **visível no desenho**, **precisa ser documentado** ou **precisa ser verificado na implementação**. Separe orientações originais, adaptações dos guias e sugestões próprias para o produto. Não atribua sugestões próprias ao autor da biblioteca.

## Documente quando solicitado

Use os recursos nativos disponíveis para criar ou atualizar uma área identificável de documentação junto ao componente indicado. Inclua estados necessários, ordem de navegação, ações, exceções, decisões pendentes e fontes. Reutilize anotações existentes e preserve componentes, estilos e variáveis. Altere o desenho apenas dentro do pedido. Se não puder escrever documentação no arquivo ou no ambiente atual, entregue o texto no chat e informe a limitação; não afirme que o arquivo foi alterado.

Confira o conteúdo e a organização das alterações realizadas. Considere telas pequenas e grandes, texto ampliado e, para campos, teclado virtual. Registre como pendente qualquer estado ou dimensão que não pôde examinar. Navegação por teclado, semântica e anúncios por leitores de tela exigem verificação na implementação; intenção no desenho ou protótipo não comprova esse comportamento. Nunca apresente a consulta como teste ou certificação de acessibilidade.

Exemplo: “/magoo-figma-native Revise a modal selecionada. Consulte o Magoo, explique as decisões pendentes e documente seu comportamento ao lado do componente.”

Autoria da biblioteca: Marcelo Sales. Projeto: https://magoo.cc. Licença do conteúdo autoral: MIT, https://github.com/acessibilidade/magoo/blob/master/LICENSE. Referências externas mantêm suas próprias licenças.
