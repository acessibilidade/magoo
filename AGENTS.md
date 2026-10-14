# Instruções do Magoo

## Versionamento e fontes

Antes de qualquer alteração, confira mudanças locais (`git status`, diff), branch e remotos. Compare package.json, package-lock.json, content/catalog.json, content/componentes/*.json, changelog e a versão efetivamente retornada pelo MCP conectado. Consulte versões dos repositórios remotos e do npm por operações somente de leitura quando disponíveis. Não confunda a revisão local com a versão publicada ou carregada por um processo MCP. Se não houver acesso, registre a comparação como pendente; nunca declare sincronização sem evidência.

A partir de 1.5.0, contentVersion representa a versão do snapshot distribuído: pacote, catálogo e todos os componentes usam a mesma versão. schemaVersion identifica o contrato e só muda quando o contrato mudar. O servidor MCP obtém sua versão de package.json. Preserve os IDs de conteúdo existentes.

Ao preparar uma nova versão, alinhe pacote, lockfile, catálogo, componentes, changelog, exemplos de instalação e descoberta gerada. Não altere notas históricas. Atualize traduções das novas mensagens. Execute npm run validate, npm run build e npm test. Antes de finalizar, consulte novamente o MCP utilizado. Um MCP antigo só muda após atualização/reinício/reconexão; documente qualquer pendência externa.

Publicação de npm, push, release e atualização de integrações externas exigem pedido do usuário. Quando a publicação for solicitada, concluir a revisão e confirmar as versões efetivamente publicadas antes de informar sucesso.

## Conteúdo para designers

Edite content/componentes/*.json, nunca HTML gerado. Mantenha os guias rápidos como adaptações identificadas, preservando as orientações completas, condições, autoria, referências e IDs. Use linguagem simples: quando usar, o que desenhar, comportamento, documentação e revisão. Separe evidência no desenho, decisão documentada e verificação na implementação.

## CSS, JS e HTML

Não adicionar atributos style nem blocos style ao HTML. CSS externo na pasta css; JS externo na pasta js, sem código diretamente no HTML salvo pedido explícito. Não minificar. Verifique se os arquivos mudaram antes de editar.

Tags de abertura completas em uma linha; indentação de dois espaços, sem tabs. Prettier HTML: printWidth 10000, htmlWhitespaceSensitivity ignore, tabWidth 2, useTabs false. Confira o resultado do build.

Preserve Open Graph, Twitter Cards e Google Analytics. Se faltarem imagem de compartilhamento ou Analytics, informe o usuário. Links externos devem informar para leitores de tela a abertura em outra aba ou janela; âncoras devem informar destino na mesma página. Prefira Material Icons. Confira responsividade em telas pequenas e grandes.
