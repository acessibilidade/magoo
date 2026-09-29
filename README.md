# Magoo

**Sua biblioteca pré-design system.**

[Consultar a biblioteca](https://magoo.cc) · [Pacote no npm](https://www.npmjs.com/package/@acessibilidade/magoo-mcp)

Biblioteca de comportamentos de interação de componentes, de Marcelo Sales.

O projeto agora possui uma base estruturada compartilhada pelo site estático e por um servidor MCP local somente de leitura. A versão **1.0.1** remove os links genéricos “Ref 1” de 22 componentes, preservando as demais orientações e referências.

## Instalação pelo npm

O pacote **@acessibilidade/magoo-mcp 1.0.1** está publicado e permite consultar a biblioteca em assistentes compatíveis com MCP local. Requer **Node.js 20.19 ou superior**, que inclui npm e npx.

Nas configurações de servidores MCP do seu assistente, adicione:

- **Nome:** `magoo`
- **Tipo:** STDIO (local)
- **Comando:** `npx`
- **Argumentos:** `-y` e `@acessibilidade/magoo-mcp@1.0.1`

Salve e, se necessário, reinicie o aplicativo. Para clientes que aceitam o formato `mcpServers`, use:

```json
{
  "mcpServers": {
    "magoo": {
      "command": "npx",
      "args": ["-y", "@acessibilidade/magoo-mcp@1.0.1"]
    }
  }
}
```

O cliente baixa e inicia o servidor localmente. Não é preciso clonar este repositório nem criar uma conta no npm. A configuração fixa a versão 1.0.1; atualizar o GitHub não atualiza automaticamente o pacote instalado.

Experimente: **“Use o MCP Magoo para consultar o componente Modal e explicar seus comportamentos por teclado. Informe a versão consultada.”**

O MCP é somente de leitura: não instala componentes visuais nem altera arquivos de código ou design. Você também pode consultar todo o material diretamente em [magoo.cc](https://magoo.cc), sem instalar nada.

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

- `content/componentes/*.json`: fonte dos nomes, resumos e das cinco seções dos 23 componentes.
- `content/catalog.json`: catálogo, versão da biblioteca e cinco itens em desenvolvimento. Ao renomear um componente, atualize também seu nome no catálogo; a validação detecta divergências.
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

Recursos: `magoo://catalog` e `magoo://components/{id}`. Todos os 23 recursos de componentes são listáveis. Ferramentas declaram `readOnlyHint`, e retornam conteúdo estruturado e texto JSON com versão e origem. IDs desconhecidos são rejeitados; IDs não são usados para acessar caminhos fornecidos por clientes.

Exemplos de pedidos a um assistente conectado:

- “Consulte o componente accordion no Magoo e liste seus comportamentos por teclado.”
- “Recupere os critérios de aceite de modal, mantendo os IDs e a versão consultada.”
- “Mostre as referências de alertas. Separe o material original das suas sugestões.”

A consulta não comprova conformidade nem testa uma implementação. Para alterar arquivos em uma ferramenta de design, é necessária outra integração com essa ferramenta.

## Distribuição e autoria

O código e a documentação autoral do Magoo, incluindo a base `content/`, são distribuídos sob a licença MIT, com autoria de Marcelo Sales. É permitido usar, adaptar e redistribuir, inclusive comercialmente, mantendo o aviso de copyright e a licença em cópias ou partes substanciais. Consulte [LICENSE](LICENSE). Dependências e materiais externos citados continuam sujeitos às respectivas licenças; a licença do Magoo não altera as condições desses materiais.

Documentação do SDK utilizado: https://ts.sdk.modelcontextprotocol.io/server
