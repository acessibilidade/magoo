# Instruções do Magoo

## Versionamento e fontes

Antes de qualquer alteração, confira mudanças locais (`git status`, diff), branch e remotos. Compare package.json, package-lock.json, content/catalog.json, content/componentes/*.json, changelog e a versão efetivamente retornada pelo MCP conectado. Consulte versões dos repositórios remotos e do npm por operações somente de leitura quando disponíveis. Não confunda a revisão local com a versão publicada ou carregada por um processo MCP. Se não houver acesso, registre a comparação como pendente; nunca declare sincronização sem evidência.

A partir de 1.5.0, contentVersion representa a versão do snapshot distribuído: pacote, catálogo e todos os componentes usam a mesma versão. schemaVersion identifica o contrato e só muda quando o contrato mudar. O servidor MCP obtém sua versão de package.json. Preserve os IDs de conteúdo existentes.

Ao preparar uma nova versão, alinhe pacote, lockfile, catálogo, componentes, changelog, exemplos de instalação e descoberta gerada. Não altere notas históricas. Atualize traduções das novas mensagens. Execute npm run validate, npm run build e npm test. Antes de finalizar, consulte novamente o MCP utilizado. Um MCP antigo só muda após atualização/reinício/reconexão; documente qualquer pendência externa.

Publicação de npm, push, release e atualização de integrações externas exigem pedido do usuário. Quando a publicação for solicitada, concluir a revisão e confirmar as versões efetivamente publicadas antes de informar sucesso.

## Conteúdo para designers

Edite content/componentes/*.json, nunca HTML gerado. Mantenha os guias rápidos como adaptações identificadas, preservando as orientações completas, condições, autoria, referências e IDs. Use linguagem simples: quando usar, o que desenhar, comportamento, documentação e revisão. Separe evidência no desenho, decisão documentada e verificação na implementação.

## Padrão obrigatório da aba Gherkin

Em todos os componentes, preserve o modelo editorial dos anteriores: título `Gherkin` em `h2.titulo-mobile`, introdução BDD em `p.mt-3`, contexto em `h3` iniciado por `Cenário:`, e os grupos `Navegação por teclado`, `Leitor de telas para desktop` e `Leitor de telas para dispositivos móveis`. Adapte os passos à função real do componente; elementos apenas informativos não devem ganhar foco artificialmente.

Cada grupo ou cenário específico usa `h4.mt-4` seguido de `ol.lista-detalhe.link-padrao`. Separe contexto, ação e resultados em itens `li`; não reúna Dado, Quando e Então em um parágrafo corrido. Mantenha resultados observáveis (VEJO, OUÇO ou percebo, conforme a modalidade). Cenários complementares seguem a mesma estrutura de título e lista, após os grupos básicos. Preserve IDs existentes e atualize as traduções.

Antes de concluir, execute a validação estrutural Gherkin de todos os componentes, o build e os testes. Novos componentes e revisões devem passar pela mesma regra; não remova nem afrouxe a validação para aceitar um formato divergente.

## Métodos de interação e marcação de comandos

A aba Métodos de interação deve explicar como a pessoa usa o componente: ação ou comando concreto, elemento acionado e resultado esperado. Descreva mouse/toque, teclado e navegação/ativação com leitor de telas quando aplicáveis. Explicite como entrar, percorrer, ativar e sair. Para elementos apenas informativos, explique como ler ou acompanhar o conteúdo; não invente controles, atalhos ou foco. Distinga padrões nativos, personalizados, links e botões, respeitando diferenças de plataforma.

Instruções para quem implementa (atributos ARIA, associações, código e verificações) ficam em Pontos de atenção; decisões de desenho ficam em Design de interação. Não substitua a descrição operacional por “verifique”, “documente” ou uma lista de atributos. Ao reorganizar conteúdo, preserve os IDs e as notas originais na seção adequada.

Em toda a documentação dos componentes, nomes concretos de teclas, atalhos e gestos citados no texto devem usar nós `code`, incluindo os guias rápidos e Gherkin. Exemplos: `Tab`, `Shift + Tab`, `Enter`, `Espaço`, `Esc`, setas e gestos de deslizar ou tocar duas vezes. Não aplique code ao parágrafo inteiro. Para rótulos de interação traduzíveis, use `data-interaction-label="true"` e traduza os fragmentos em inglês; código técnico permanece literal.

Antes de concluir qualquer alteração, revise ação → resultado em cada modalidade, execute a checagem de comandos em todos os componentes e confira os dois idiomas após o build. O vocabulário verificado fica em `js/lib/interaction-tokens.json`: amplie-o e seus testes ao introduzir outra tecla ou gesto. A checagem de termos não substitui a revisão do significado. Mantenha testes que rejeitem comandos sem code e notas ARIA na aba de métodos.

## CSS, JS e HTML

Não adicionar atributos style nem blocos style ao HTML. CSS externo na pasta css; JS externo na pasta js, sem código diretamente no HTML salvo pedido explícito. Não minificar. Verifique se os arquivos mudaram antes de editar.

Tags de abertura completas em uma linha; indentação de dois espaços, sem tabs. Prettier HTML: printWidth 10000, htmlWhitespaceSensitivity ignore, tabWidth 2, useTabs false. Confira o resultado do build.

Preserve Open Graph, Twitter Cards e Google Analytics. Se faltarem imagem de compartilhamento ou Analytics, informe o usuário. Links externos devem informar para leitores de tela a abertura em outra aba ou janela; âncoras devem informar destino na mesma página. Prefira Material Icons. Confira responsividade em telas pequenas e grandes.

## Texto editorial e rodapé

Use `Esc` como rótulo da tecla na documentação em português e inglês. Preserve `Escape` apenas quando for um valor literal exigido por uma API no código de implementação. Não incluir nos seis componentes novos o bloco “Orientações completas” seguido da introdução “Ampliação editorial do Magoo, preparada para revisão…”.

Todas as páginas de componentes usam o rodapé de autoria padrão, centralizado em `templates/component-source-note.html`: “Conteúdo autoral de Marcelo Sales, originalmente utilizado nas aulas do curso AccessBoost. As interações representam o formato padrão da indústria, mas em casos específicos podem ser customizadas (desde que haja instruções suficientes para que as pessoas compreendam a mudança de comportamento).” Preserve o link do curso e sua informação de abertura em outra aba/janela.

## Links de referência

Toda aba Referências deve começar com o título, a introdução com o nome do componente, o aviso “Importante” sobre a plataforma do curso e a “Isenção de responsabilidade” completos, seguindo o padrão de Títulos (Cabeçalhos). Preserve esse conteúdo em novos componentes e revisões; a validação deve impedir sua ausência.

Na aba Referências, links externos usam Material Icons open_in_new com aria-hidden=true e uma única informação sr-only: “(link externo, abre em uma nova aba)”, com target=_blank e rel=noopener noreferrer. Links para magoo.cc ou www.magoo.cc são internos: sem nova aba, sem ícone ou aviso de link externo, com destino localizado no idioma da página. Preserve os IDs existentes ao corrigir marcações antigas. Verifique esses comportamentos no conteúdo e no HTML gerado nos dois idiomas.

## Changelog

Na versão em preparação, registre apenas adições e mudanças relevantes às orientações e ao conteúdo disponível para consulta. Omita ajustes estéticos, marcação, rodapé, regras editoriais internas, testes, validações e detalhes de manutenção. Descreva o resultado para quem usa a biblioteca. Preserve notas de versões já publicadas.
