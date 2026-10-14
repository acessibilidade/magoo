---
name: magoo-figma
description: Revise e documente componentes no Figma usando as orientações do Magoo em linguagem simples para designers. Use para decisões de interação, estados e anotações de comportamento; não para certificar acessibilidade ou implementar código.
---

# Magoo no Figma

Transforme orientações educacionais de Marcelo Sales em decisões concretas de design. A biblioteca local 1.5.0 contém guias rápidos nos 29 componentes. Descubra os IDs e a cobertura disponíveis na fonte efetivamente consultada; um MCP antigo pode não conter os guias. Não invente cobertura.

## Fonte e versões

Antes de trabalhar, consulte `search_components` no MCP Magoo para obter a versão da biblioteca e os IDs reais. Consulte `get_component` para o conteúdo completo e a versão do componente; use `get_references` quando precisar das referências. Registre autoria, versão, IDs e referências que sustentam cada recomendação.

Se houver uma cópia do repositório, compare a versão retornada pelo MCP com `package.json`, `content/catalog.json` e os componentes. Em alterações do Magoo, siga o AGENTS.md do repositório e compare também os repositórios remotos e a versão publicada do pacote. Não presuma sincronização. Com divergência, informe quais fontes estão disponíveis e use explicitamente a fonte escolhida, sem misturar revisões. Não publique nem reconfigure integrações como consequência da revisão de design.

A cópia local 1.5.0 contém guias rápidos na seção `interaction-design`, com IDs `*.designer-guide.*`. São adaptações; mantenha as orientações completas e suas condições. Não copie os guias para esta skill: leia a fonte atual para evitar versões paralelas.

## Revisão e documentação

Identifique a tela ou componente indicado pela pessoa. Se faltar o arquivo, prepare as orientações e peça o link apenas para a análise dependente do Figma. Use a integração Figma disponível para examinar estrutura, estados, textos e contexto. Antes de `use_figma`, carregue `figma-use`; antes de `get_design_context`, carregue `figma-design-to-code`. Para criar componentes, carregue também `figma-generate-library`; para compor telas, `figma-generate-design`; para um arquivo novo, `figma-create-new-file`. Se essas skills ou ferramentas estiverem ausentes, entregue a revisão e as anotações no chat, informando a limitação.

Explique quando usar, o que desenhar, como se comporta, o que documentar e como revisar. Use palavras familiares; explique foco como a indicação de qual elemento recebe a próxima ação pelo teclado. Evite código salvo pedido explícito. Preserve exceções como fechamento de modal com Escape e risco de perda de dados.

Para cada achado, indique o elemento observado, a evidência, a mudança proposta e a fonte. Classifique como **visível no desenho**, **precisa ser documentado** ou **precisa ser verificado na implementação**. Não conclua que algo está ausente sem inspecionar os estados pertinentes. Não atribua sugestões próprias ao texto original.

Quando solicitado a escrever no Figma, use o arquivo indicado e preserve componentes, estilos e variáveis existentes. Crie ou atualize uma área de documentação identificável junto ao componente, com estados necessários, ordem de navegação, ações, exceções, decisões pendentes e fontes. Reutilize a documentação anterior para evitar duplicação. Faça alterações visuais no componente apenas dentro do pedido. Se não houver destino, prepare a documentação e peça o arquivo antes da escrita.

Confira conteúdo, legibilidade e organização do resultado no Figma. Considere telas pequenas e grandes, texto ampliado e, para campos, teclado virtual. Diferencie intenção de protótipo e comportamento real: navegação por teclado, semântica e anúncios por leitores de telas exigem verificação na implementação. Nunca apresente a consulta como teste ou certificação.

Exemplo de pedido: “Use $magoo-figma para revisar esta modal, explicar as decisões pendentes e documentar seu comportamento no arquivo indicado.”
