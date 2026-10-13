# Magoo

**Sua biblioteca pré-design system.**

[Consultar a biblioteca](https://magoo.cc) · [Pacote no npm](https://www.npmjs.com/package/@acessibilidade/magoo-mcp)

Biblioteca de comportamentos de interação de componentes, de Marcelo Sales.

O projeto agora possui uma base estruturada compartilhada pelo site estático e por um servidor MCP local somente de leitura. A versão **1.3.4** reúne 29 componentes, incluindo os quatro tipos de input, Validação de formulários e Tabbar.

## Instalação pelo npm

O pacote **@acessibilidade/magoo-mcp 1.3.4** está publicado e permite consultar a biblioteca em assistentes compatíveis com MCP local. Requer **Node.js 20.19 ou superior**, que inclui npm e npx.

Nas configurações de servidores MCP do seu assistente, adicione:

- **Nome:** `magoo`
- **Tipo:** STDIO (local)
- **Comando:** `npx`
- **Argumentos:** `-y` e `@acessibilidade/magoo-mcp@1.3.4`

Salve e, se necessário, reinicie o aplicativo. Para clientes que aceitam o formato `mcpServers`, use:

```json
{
  "mcpServers": {
    "magoo": {
      "command": "npx",
      "args": ["-y", "@acessibilidade/magoo-mcp@1.3.4"]
    }
  }
}
```

O cliente baixa e inicia o servidor localmente. Não é preciso clonar este repositório nem criar uma conta no npm. A configuração fixa a versão 1.3.4; atualizar o GitHub não atualiza automaticamente o pacote instalado.

Experimente: **“Use o MCP Magoo para consultar o componente Modal e explicar seus comportamentos por teclado. Informe a versão consultada.”**

O MCP é somente de leitura: não instala componentes visuais nem altera arquivos de código ou design. Você também pode consultar todo o material diretamente em [magoo.cc](https://magoo.cc), sem instalar nada.

A revisão do conteúdo **1.3.4** inclui Tabbar em Estrutura e Validação de formulários em Mensagens e adiciona Input "text", Input "email", Input "search" e Input "password", incluindo as regras de exibir e ocultar senha. O histórico completo está em [CHANGELOG.md](CHANGELOG.md).

## Desenvolvimento local

Node.js **20.19 ou superior** e npm:

```sh
npm ci
npm run validate
npm run build
npm test
```

O site continua funcionando como arquivos HTML estáticos. Não depende do MCP nem de Node em produção. O build mantém CSS e JavaScript externos.

## Onde editar

- `content/componentes/*.json`: fonte dos nomes, resumos e das cinco seções dos 29 componentes.
- `content/catalog.json`: catálogo, versão da biblioteca e dois itens em desenvolvimento. Ao renomear um componente, atualize também seu nome no catálogo; a validação detecta divergências.
- `content/component.schema.json`: contrato validado automaticamente.
- `templates/index.html`: layout e textos institucionais da home.
- `templates/404.html`: página de erro.
- `js/analytics.js`: configuração do Google Analytics 4.
- `templates/componentes/`: estrutura das páginas internas, navegação, cabeçalhos e rodapé. Os marcadores `MAGOO_SECTION_0` a `MAGOO_SECTION_4` são preenchidos pelo build.
- `css/main.css` e `js/main.js`: estilos e interações do site.
- `js/mcp/server.js`: servidor de consulta.

**Não edite o conteúdo nos HTML gerados**: `npm run build` os recria usando a base e os templates. Para atualizar o rodapé de todas as páginas, edite os templates correspondentes e execute o build.

### Modelo de conteúdo

Cada componente inclui `id`, `name`, `category`, `summary`, `contentVersion`, autoria, idioma, caminho da página e origem. As cinco seções são:

1. `interaction-design`
2. `interaction-methods`
3. `acceptance-criteria`
4. `considerations`
5. `references`

`blocks` é uma árvore de texto estruturado: elementos possuem `tag`, `attributes`, `children` e um `id` permanente; nós de texto possuem `value`. Isso preserva listas aninhadas, links, destaques e exemplos de código sem duplicar o conteúdo em Markdown e HTML. O MCP produz uma representação legível com itens e referências a partir dessa árvore.

Os IDs iniciais foram atribuídos na migração. **Não renumere IDs existentes ao editar ou reordenar**; para adicionar um elemento use um novo ID exclusivo no componente. Os IDs indicam identidade, não obrigatoriedade normativa.

As orientações foram preservadas como material educacional (`source.kind: educational-guidance`). Perguntas de design não foram automaticamente convertidas em exigências normativas. A seção Gherkin mantém os cenários originais, incluindo sua redação e limitações.

### Fluxo de atualização

1. Edite a base JSON e, quando necessário, os templates.
2. Atualize a versão do componente alterado e a versão do catálogo ao publicar uma revisão do conteúdo.
3. Execute `npm run validate`, `npm run build` e `npm test`.
4. Revise o diff dos HTML e faça a conferência visual antes de publicar.
5. Para distribuir mudanças pelo npm, publique uma nova versão do pacote e atualize a versão configurada nos clientes. Para clientes que executam a cópia local, reinicie o servidor para carregar a nova base.

`schemaVersion` representa o contrato dos dados; `contentVersion`, a revisão das orientações. A versão do servidor está em `package.json` e no registro MCP. Não há histórico automático de versões nesta primeira entrega.

`js/build/import-once.js` documenta a migração inicial; ele recusa execução quando o catálogo existe. Não deve ser usado como fluxo de edição.

## Conectar uma cópia local do MCP

O servidor usa **stdio**, para clientes que iniciam um processo local. Não abre portas, não acessa sites de referência, não escreve arquivos e não executa ações em ferramentas de design. Está disponível no npm; não oferece um endpoint HTTP remoto.

Exemplo de configuração para clientes que aceitam `mcpServers` (ajuste os caminhos ao seu computador):

```json
{
  "mcpServers": {
    "magoo": {
      "command": "node",
      "args": ["/CAMINHO/ABSOLUTO/magoo/js/mcp/server.js"]
    }
  }
}
```

Se o aplicativo não localizar `node`, informe o caminho absoluto do executável. O servidor localiza a base relativamente ao próprio arquivo, sem depender do diretório de trabalho do cliente. A configuração varia entre aplicativos; este JSON não deve ser presumido como formato universal.

Para execução manual, `npm run mcp` inicia o processo e aguarda mensagens MCP. Para conectar um cliente, prefira `node` diretamente, evitando mensagens do npm no canal de protocolo. Os testes usam o cliente oficial com o servidor como processo filho.

### Ferramentas de leitura

| Ferramenta                | Argumentos                     | Resultado                                                   |
| ------------------------- | ------------------------------ | ----------------------------------------------------------- |
| `search_components`       | `query` e `category` opcionais | Componentes correspondentes; busca sem distinção de acentos |
| `get_component`           | `id`                           | Conteúdo completo, organizado em seções                     |
| `get_acceptance_criteria` | `id`                           | Cenários originais da seção Gherkin                         |
| `get_references`          | `id`                           | Referências, contexto e URLs                                |

Categorias: `estrutura`, `mensagens`, `navegacao`, `elementos-ocultos`, `formularios`.

Recursos: `magoo://catalog` e `magoo://components/{id}`. Todos os 29 recursos de componentes são listáveis. Ferramentas declaram `readOnlyHint`, e retornam conteúdo estruturado e texto JSON com versão e origem. IDs desconhecidos são rejeitados; IDs não são usados para acessar caminhos fornecidos por clientes.

Exemplos de pedidos a um assistente conectado:

- “Consulte o componente accordion no Magoo e liste seus comportamentos por teclado.”
- “Recupere os critérios de aceite de modal, mantendo os IDs e a versão consultada.”
- “Mostre as referências de alertas. Separe o material original das suas sugestões.”

A consulta não comprova conformidade nem testa uma implementação. Para alterar arquivos em uma ferramenta de design, é necessária outra integração com essa ferramenta.

## Distribuição e autoria

O código e a documentação autoral do Magoo, incluindo a base `content/`, são distribuídos sob a licença MIT, com autoria de Marcelo Sales. É permitido usar, adaptar e redistribuir, inclusive comercialmente, mantendo o aviso de copyright e a licença em cópias ou partes substanciais. Consulte [LICENSE](LICENSE). Dependências e materiais externos citados continuam sujeitos às respectivas licenças; a licença do Magoo não altera as condições desses materiais.

Documentação do SDK utilizado: https://ts.sdk.modelcontextprotocol.io/server

## Sitemap e descoberta para agentes

`npm run build` também gera `sitemap.xml`, `robots.txt`, `llms.txt` e `.well-known/ard.json`, usando o catálogo e os componentes atuais. Publique esses arquivos junto com o site, incluindo a pasta oculta `.well-known`. Para regenerar somente a descoberta, execute `node js/build/discovery.js`. A atualização ocorre a cada build; editar a base no servidor sem executar o build não regenera os arquivos.

O sitemap lista as homes e os componentes de todos os idiomas publicados, cada um com canônica própria e alternativas `hreflang`. Não inclui `/index.html`, 404, templates, itens planejados nem arquivos de dados. Não há `lastmod`: datas de build ou de cópia não são datas confiáveis de mudança do conteúdo. Envie `https://magoo.cc/sitemap.xml` ao Search Console após publicar.

`llms.txt` apresenta autoria, versão, limites de uso e links para os JSON completos dos componentes, preservando IDs e referências da fonte. Não controla permissões de rastreamento nem garante indexação por assistentes.

A descoberta estática segue a camada de publicação da [proposta ARD v0.91](https://agenticresourcediscovery.org/spec/): manifesto em `/.well-known/ard.json`, diretiva `Agentmap` no robots e cabeçalho HTTP `Link` com `rel="ard"` para HTML. O `.htaccess` também anuncia `llms.txt` por `rel="describedby"` e configura JSON/CORS para o manifesto quando `mod_headers` está disponível.

O manifesto descreve um único recurso invocável: o MCP local do Magoo. Usa um cartão genérico (`application/agent-card+json`) com dados de instalação próprios do projeto, sem afirmar que existe um contrato oficial de MCP Server Card. Seu campo `data` documenta STDIO, pacote, versão, ferramentas e recursos; não é um endpoint remoto. As páginas educacionais não são anunciadas como agentes. Não há registro dinâmico, API de busca ARD, assinatura ou certificação de confiança.

Após publicar, confira HTTP 200 para os quatro arquivos, `Content-Type: application/json` e `Access-Control-Allow-Origin: *` para o manifesto, e o cabeçalho `Link` da home. A hospedagem pode precisar habilitar `mod_headers`/`AllowOverride`; a conformidade HTTP depende dessa verificação em produção. A publicação do manifesto não garante sua inclusão em registros externos.


## Idiomas do site

O português brasileiro é o padrão em `/pt-br`; o inglês americano está em `/en`. A raiz redireciona para `/pt-br`, independentemente do idioma do navegador. A troca de idioma mantém o componente e, com JavaScript, a consulta e a seção aberta. As URLs inglesas traduzem pastas e nomes: `/en/components/messages/toasts.html`, por exemplo. Os IDs do conteúdo permanecem estáveis; a troca de idioma usa o mapeamento centralizado `routeSegments` em `locales.json`. As URLs inglesas anteriores redirecionam por HTTP 301 no Apache e por JavaScript em prévias estáticas.

A implementação usa **dicionários JSON e geração estática a partir de um único conjunto de templates**, aproveitando o build existente. Não há cópias manuais dos layouts nem dependência de uma biblioteca de idiomas no navegador. Para este projeto, essa estrutura mantém a manutenção simples; uma biblioteca de i18n passa a ser útil se surgirem necessidades como pluralização complexa e mensagens dinâmicas extensas.

- `content/locales/locales.json`: cadastro dos idiomas, rótulos nativos e mensagens das interações em JavaScript.
- `content/locales/en.json`: tradução inglesa dos textos em português, incluindo home, changelog, metadados, instruções para leitores de tela e documentação dos 29 componentes. As chaves normalizam espaços; uma alteração de redação exige atualizar a tradução. Nomes técnicos e referências que já estão em inglês são mantidos explicitamente.
- `js/build/i18n.js`: gera páginas, metadados, links, mensagens em `js/locales/` e regras de idioma no `.htaccess`.
- `js/languages.js`: preserva consulta e âncora na troca e limpa a seleção anterior do Google Tradutor.
- `pt-br/` e `en/`: saídas geradas; não editar manualmente.

Para adicionar um idioma:

1. Crie um dicionário JSON seguindo `en.json`, mantenha as chaves em português e traduza os valores. Informe o código BCP 47 em `locale`.
2. Adicione o idioma em `locales.json`, com `id` para a URL (por exemplo `es`), `lang`, `googleLanguage`, `label`, `selectLabel`, `otherLabel`, `dictionary` e as mensagens de `ui`.
3. Execute `npm run build` e `npm test`. O build rejeita mensagens ausentes em vez de publicar conteúdo parcialmente traduzido. Revise a tradução e o layout antes de publicar.

O seletor principal usa botões em uma lista `ul`, nomeada pelo título visível com `aria-labelledby`. Cada botão está em um formulário para funcionar também sem JavaScript. O menu principal usa uma lista `ul` com `aria-label` traduzido. O Google Tradutor continua disponível separadamente em **“Selecionar outros idiomas”**, com rótulo apenas para leitores de tela associado ao combo, usando o idioma real de cada página como origem; as versões nativas funcionam independentemente dele. O MCP e sua base JSON continuam em português brasileiro.

Publique as pastas dos idiomas, `js/locales/`, o JavaScript compartilhado e os `.htaccess` gerados junto com o restante do site. As URLs sem barra final usam Apache 2.4 com `mod_rewrite` e `mod_dir`, conforme a [documentação de reescrita do Apache](https://httpd.apache.org/docs/2.4/rewrite/flags.html). O `.htaccess` de cada idioma usa `DirectorySlash Off` e `RewriteOptions AllowNoSlash`, trata sua própria entrada sem barra final por `REQUEST_URI` e configura sua página de erro com status 404. A regra local é necessária porque as regras próprias do idioma podem substituir a configuração de reescrita da raiz; somente a regra raiz não basta. Entradas com barra final ou `index.html` redirecionam para a URL sem barra, e a home é servida por reescrita interna. Rotas antigas de componentes redirecionam permanentemente para a versão portuguesa. Em hospedagens sem suporte a `.htaccess`, configure redirecionamentos equivalentes; o JavaScript da home só oferece uma alternativa para a raiz em prévias estáticas.

Google Analytics 4, Open Graph, Twitter Cards, imagem de compartilhamento e autoria são preservados. Canônicas, `lang`, `og:locale`, `hreflang` e sitemap identificam as versões por idioma.

A configuração `.prettierrc.json` e o build mantêm tags HTML e seus atributos em uma única linha, com indentação de dois espaços por nível. Os testes verificam essa formatação nos HTML gerados.


Cada página publicada aponta `rel="canonical"` para seu próprio endereço no respectivo idioma: português em `/pt-br/componentes/...` e inglês em `/en/components/...`. `og:url` usa esse mesmo endereço. As versões se relacionam por `hreflang`, e `x-default` aponta para o português brasileiro, que continua sendo o idioma padrão. O sitemap lista as páginas canônicas de ambos os idiomas. Os aliases ingleses antigos apontam para a canônica inglesa atual e continuam redirecionando para ela.
