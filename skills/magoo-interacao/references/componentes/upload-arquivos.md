# Upload de arquivos

- ID: `upload-arquivos`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/upload-arquivos.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite selecionar, enviar e gerenciar arquivos, com limites, estados e recuperação de falhas claros.

## Design de interação

### Guia rápido para designers

#### Quando usar

Use quando a tarefa exigir anexar arquivos. Diferencie escolher um arquivo de enviá-lo ao sistema.

#### O que desenhar

Mostre formatos, tamanho e quantidade permitidos, lista de arquivos, progresso, sucesso, erro, remoção e nova tentativa.

#### Como se comporta

A seleção abre o seletor do sistema. `Arrastar` é uma alternativa; o envio pode ser imediato ou depender de uma ação explícita.

#### O que documentar no Figma

Defina início do envio, limites, arquivos repetidos, cancelamento, remoção e o que é preservado após falhas.

#### Como revisar

Confira os estados no desenho. Na implementação, verifique seleção, envio e recuperação com teclado, toque e leitores de tela.

### Antes de interagir

1. É possível saber quais documentos são necessários, se o campo é obrigatório e quais limites se aplicam antes de abrir o seletor?
2. A área de soltar arquivos também oferece um controle para selecionar arquivos sem `arrastar`?

### Seleção e envio

1. A lista identifica cada arquivo por nome e tamanho? A interface distingue selecionado, aguardando envio, enviando, enviado e falha?
2. Está definido se adicionar mais arquivos acumula a seleção ou substitui a anterior? Como são tratados arquivos repetidos?
3. Ao cancelar o seletor do sistema, os arquivos e dados anteriores permanecem disponíveis?

### Erros e recuperação

1. O erro identifica o arquivo, o problema e como corrigir? Uma rejeição isolada preserva os demais arquivos válidos?
2. Há distinção entre cancelar uma transferência, remover uma seleção e excluir um arquivo já enviado? O efeito de cada ação está documentado?
3. Após remover um arquivo, o foco segue para um controle disponível? Nomes longos continuam identificáveis em telas pequenas e com ampliação?

## Métodos de Interação

### Mouse e toque

Acionar Selecionar arquivos abre o seletor nativo. `Arrastar e soltar`, quando disponível, executa as mesmas verificações da seleção.

Clicar ou `tocar` em Remover retira o arquivo da lista; Cancelar envio interrompe sua transferência; Tentar novamente repete o envio que falhou, quando essas ações estiverem disponíveis.

### Teclado

`Tab` e `Shift + Tab` percorrem o campo e os controles dos arquivos. `Enter` ou `Espaço` em Selecionar arquivos abre o seletor nativo; a escolha e o cancelamento no seletor seguem a plataforma.

Após escolher um arquivo, `Tab` permite alcançar Enviar quando houver envio explícito. `Enter` ou `Espaço` aciona Enviar, Remover, Cancelar envio ou Tentar novamente no botão focado.

### Leitores de tela

Ao navegar pelo campo e pelos arquivos com leitor de telas, a pessoa identifica rótulo, restrições, nome e estado de cada arquivo. Ativar Selecionar arquivos abre o seletor da plataforma.

Com leitor de telas no celular, `deslizar o dedo` percorre os controles no modo de navegação padrão e `tocar duas vezes` ativa o controle focado. Ao enviar ou remover, a pessoa percebe o resultado correspondente.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Upload de arquivos

Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

#### Navegação por teclado

1. QUANDO uso `Tab` para chegar ao controle Selecionar arquivos
2. VEJO foco visível e consigo abrir o seletor com o comando da plataforma, sem `arrastar` arquivos
3. ENTÃO, quando escolho um arquivo, VEJO seu nome e estado na lista e posso alcançar os controles de remoção e nova tentativa quando disponíveis

#### Leitor de telas para desktop

1. QUANDO navego pelo campo e pela lista com leitor de telas no computador
2. OUÇO o rótulo, as restrições e a identificação de cada arquivo e de suas ações
3. ENTÃO, quando envio ou removo um arquivo, OUÇO ou percebo o resultado sem perder o foco para um elemento indisponível

#### Leitor de telas para dispositivos móveis

1. QUANDO exploro o campo e os arquivos com TalkBack ou VoiceOver no celular
2. OUÇO os nomes e estados e consigo abrir o seletor com o gesto da plataforma
3. ENTÃO, quando aciono uma ação de arquivo, OUÇO ou percebo a atualização correspondente e continuo navegando pelos controles disponíveis

### Cenários complementares — ampliação editorial

#### Adicionar sem arrastar

1. DADO o campo de arquivos
2. QUANDO seleciono um arquivo pelo controle acessível por teclado
3. ENTÃO ele aparece identificado na lista e o estado diferencia seleção de envio.

#### Rejeição de um arquivo

1. DADOS arquivos válidos e um arquivo que excede o limite informado
2. QUANDO adiciono o conjunto
3. ENTÃO o erro identifica o arquivo rejeitado e os arquivos válidos seguem a regra de preservação documentada.

#### Nova tentativa e remoção

1. DADO um envio com falha
2. QUANDO aciono Tentar novamente
3. ENTÃO somente o envio correspondente é retomado; ao remover um item, o foco permanece em um controle disponível.

#### Revisão com leitor de telas no celular

1. DADA uma lista de arquivos
2. QUANDO navego com leitor de telas no celular
3. ENTÃO identifico cada nome, estado e ação e consigo selecionar arquivos pelos gestos da plataforma.

## Pontos de atenção

O atributo accept ajuda a filtrar o seletor, mas não substitui validação dos arquivos no servidor. Tamanho, quantidade e conteúdo também exigem verificação na implementação.

Não prometa retomar um envio ou preservar arquivos após recarregar sem suporte real. Documente os limites dessa recuperação.

O File input do USWDS é uma referência de seleção de arquivos; o fluxo de envio assíncrono descrito aqui é uma adaptação editorial e exige implementação própria.

### Notas de implementação e decisões de comportamento

Remover, Cancelar envio e Tentar novamente são controles distintos quando essas ações existem.

`Tab` e `Shift + Tab` percorrem o campo e os controles de cada arquivo. A ativação do seletor segue o controle nativo e os comandos da plataforma.

O gesto de `arrastar` não pode ser a única forma de adicionar arquivos. A ordem de foco acompanha a lista apresentada.

Associe rótulo, restrições e erros ao campo. Identifique o arquivo nos nomes de ações repetidas, como Remover comprovante.pdf.

Comunique início, conclusão e falha do envio sem mover o foco para cada atualização. Um indicador de progresso precisa identificar a operação correspondente.

## Referências

Referências adicionais sobre componentes do tipo Upload de arquivos.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

[USWDS — File input](https://designsystem.digital.gov/components/file-input/)

[MDN — input type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file)
