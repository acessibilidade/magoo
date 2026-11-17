# Upload de arquivos

- ID: `upload-arquivos`
- Categoria: formularios
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/upload-arquivos.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite selecionar, enviar e gerenciar arquivos, com limites, estados e recuperação de falhas claros.

<!-- id: interaction-design -->
## Design de interação

<!-- id: upload-arquivos.designer-guide.frame -->
<!-- id: upload-arquivos.designer-guide.1 -->
### Guia rápido para designers

<!-- id: upload-arquivos.designer-guide.2 -->
#### Quando usar

<!-- id: upload-arquivos.designer-guide.3 -->
Use quando a tarefa exigir anexar arquivos. Diferencie escolher um arquivo de enviá-lo ao sistema.

<!-- id: upload-arquivos.designer-guide.4 -->
#### O que desenhar

<!-- id: upload-arquivos.designer-guide.5 -->
Mostre formatos, tamanho e quantidade permitidos, lista de arquivos, progresso, sucesso, erro, remoção e nova tentativa.

<!-- id: upload-arquivos.designer-guide.6 -->
#### Como se comporta

<!-- id: upload-arquivos.designer-guide.7 -->
A seleção abre o seletor do sistema. `Arrastar` é uma alternativa; o envio pode ser imediato ou depender de uma ação explícita.

<!-- id: upload-arquivos.designer-guide.8 -->
#### O que documentar no Figma

<!-- id: upload-arquivos.designer-guide.9 -->
Defina início do envio, limites, arquivos repetidos, cancelamento, remoção e o que é preservado após falhas.

<!-- id: upload-arquivos.designer-guide.10 -->
#### Como revisar

<!-- id: upload-arquivos.designer-guide.11 -->
Confira os estados no desenho. Na implementação, verifique seleção, envio e recuperação com teclado, toque e leitores de tela.

<!-- id: upload-arquivos.15 -->
### Antes de interagir

1. <!-- id: upload-arquivos.16 --> É possível saber quais documentos são necessários, se o campo é obrigatório e quais limites se aplicam antes de abrir o seletor?
2. <!-- id: upload-arquivos.17 --> A área de soltar arquivos também oferece um controle para selecionar arquivos sem `arrastar`?

<!-- id: upload-arquivos.19 -->
### Seleção e envio

1. <!-- id: upload-arquivos.20 --> A lista identifica cada arquivo por nome e tamanho? A interface distingue selecionado, aguardando envio, enviando, enviado e falha?
2. <!-- id: upload-arquivos.21 --> Está definido se adicionar mais arquivos acumula a seleção ou substitui a anterior? Como são tratados arquivos repetidos?
3. <!-- id: upload-arquivos.22 --> Ao cancelar o seletor do sistema, os arquivos e dados anteriores permanecem disponíveis?

<!-- id: upload-arquivos.24 -->
### Erros e recuperação

1. <!-- id: upload-arquivos.25 --> O erro identifica o arquivo, o problema e como corrigir? Uma rejeição isolada preserva os demais arquivos válidos?
2. <!-- id: upload-arquivos.26 --> Há distinção entre cancelar uma transferência, remover uma seleção e excluir um arquivo já enviado? O efeito de cada ação está documentado?
3. <!-- id: upload-arquivos.27 --> Após remover um arquivo, o foco segue para um controle disponível? Nomes longos continuam identificáveis em telas pequenas e com ampliação?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: upload-arquivos.29 -->

<!-- id: upload-arquivos.30 -->
### Mouse e toque

<!-- id: upload-arquivos.31 -->
Acionar Selecionar arquivos abre o seletor nativo. `Arrastar e soltar`, quando disponível, executa as mesmas verificações da seleção.

<!-- id: upload-arquivos.methods-review.1 -->
Clicar ou `tocar` em Remover retira o arquivo da lista; Cancelar envio interrompe sua transferência; Tentar novamente repete o envio que falhou, quando essas ações estiverem disponíveis.

<!-- id: upload-arquivos.33 -->
### Teclado

<!-- id: upload-arquivos.methods-review.2 -->
`Tab` e `Shift + Tab` percorrem o campo e os controles dos arquivos. `Enter` ou `Espaço` em Selecionar arquivos abre o seletor nativo; a escolha e o cancelamento no seletor seguem a plataforma.

<!-- id: upload-arquivos.methods-review.3 -->
Após escolher um arquivo, `Tab` permite alcançar Enviar quando houver envio explícito. `Enter` ou `Espaço` aciona Enviar, Remover, Cancelar envio ou Tentar novamente no botão focado.

<!-- id: upload-arquivos.36 -->
### Leitores de tela

<!-- id: upload-arquivos.methods-review.4 -->
Ao navegar pelo campo e pelos arquivos com leitor de telas, a pessoa identifica rótulo, restrições, nome e estado de cada arquivo. Ativar Selecionar arquivos abre o seletor da plataforma.

<!-- id: upload-arquivos.methods-review.5 -->
Com leitor de telas no celular, `deslizar o dedo` percorre os controles no modo de navegação padrão e `tocar duas vezes` ativa o controle focado. Ao enviar ou remover, a pessoa percebe o resultado correspondente.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: upload-arquivos.gherkin-standard.intro-0 -->

<!-- id: upload-arquivos.gherkin-standard.intro-1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: upload-arquivos.39 -->
### Cenário: Considerando que estou em uma página que contém Upload de arquivos

<!-- id: upload-arquivos.40 -->
Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

<!-- id: upload-arquivos.gherkin-standard.13 -->
#### Navegação por teclado

1. <!-- id: upload-arquivos.gherkin-standard.14 --> QUANDO uso `Tab` para chegar ao controle Selecionar arquivos
2. <!-- id: upload-arquivos.gherkin-standard.15 --> VEJO foco visível e consigo abrir o seletor com o comando da plataforma, sem `arrastar` arquivos
3. <!-- id: upload-arquivos.gherkin-standard.16 --> ENTÃO, quando escolho um arquivo, VEJO seu nome e estado na lista e posso alcançar os controles de remoção e nova tentativa quando disponíveis

<!-- id: upload-arquivos.gherkin-standard.18 -->
#### Leitor de telas para desktop

1. <!-- id: upload-arquivos.gherkin-standard.19 --> QUANDO navego pelo campo e pela lista com leitor de telas no computador
2. <!-- id: upload-arquivos.gherkin-standard.20 --> OUÇO o rótulo, as restrições e a identificação de cada arquivo e de suas ações
3. <!-- id: upload-arquivos.gherkin-standard.21 --> ENTÃO, quando envio ou removo um arquivo, OUÇO ou percebo o resultado sem perder o foco para um elemento indisponível

<!-- id: upload-arquivos.gherkin-standard.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: upload-arquivos.gherkin-standard.24 --> QUANDO exploro o campo e os arquivos com TalkBack ou VoiceOver no celular
2. <!-- id: upload-arquivos.gherkin-standard.25 --> OUÇO os nomes e estados e consigo abrir o seletor com o gesto da plataforma
3. <!-- id: upload-arquivos.gherkin-standard.26 --> ENTÃO, quando aciono uma ação de arquivo, OUÇO ou percebo a atualização correspondente e continuo navegando pelos controles disponíveis

<!-- id: upload-arquivos.gherkin-standard.28 -->
### Cenários complementares — ampliação editorial

<!-- id: upload-arquivos.41 -->
#### Adicionar sem arrastar

1. <!-- id: upload-arquivos.gherkin-standard.1 --> DADO o campo de arquivos
2. <!-- id: upload-arquivos.gherkin-standard.2 --> QUANDO seleciono um arquivo pelo controle acessível por teclado
3. <!-- id: upload-arquivos.gherkin-standard.3 --> ENTÃO ele aparece identificado na lista e o estado diferencia seleção de envio.

<!-- id: upload-arquivos.43 -->
#### Rejeição de um arquivo

1. <!-- id: upload-arquivos.gherkin-standard.4 --> DADOS arquivos válidos e um arquivo que excede o limite informado
2. <!-- id: upload-arquivos.gherkin-standard.5 --> QUANDO adiciono o conjunto
3. <!-- id: upload-arquivos.gherkin-standard.6 --> ENTÃO o erro identifica o arquivo rejeitado e os arquivos válidos seguem a regra de preservação documentada.

<!-- id: upload-arquivos.45 -->
#### Nova tentativa e remoção

1. <!-- id: upload-arquivos.gherkin-standard.7 --> DADO um envio com falha
2. <!-- id: upload-arquivos.gherkin-standard.8 --> QUANDO aciono Tentar novamente
3. <!-- id: upload-arquivos.gherkin-standard.9 --> ENTÃO somente o envio correspondente é retomado; ao remover um item, o foco permanece em um controle disponível.

<!-- id: upload-arquivos.47 -->
#### Revisão com leitor de telas no celular

1. <!-- id: upload-arquivos.gherkin-standard.10 --> DADA uma lista de arquivos
2. <!-- id: upload-arquivos.gherkin-standard.11 --> QUANDO navego com leitor de telas no celular
3. <!-- id: upload-arquivos.gherkin-standard.12 --> ENTÃO identifico cada nome, estado e ação e consigo selecionar arquivos pelos gestos da plataforma.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: upload-arquivos.49 -->

<!-- id: upload-arquivos.50 -->
O atributo accept ajuda a filtrar o seletor, mas não substitui validação dos arquivos no servidor. Tamanho, quantidade e conteúdo também exigem verificação na implementação.

<!-- id: upload-arquivos.51 -->
Não prometa retomar um envio ou preservar arquivos após recarregar sem suporte real. Documente os limites dessa recuperação.

<!-- id: upload-arquivos.52 -->
O File input do USWDS é uma referência de seleção de arquivos; o fluxo de envio assíncrono descrito aqui é uma adaptação editorial e exige implementação própria.

<!-- id: upload-arquivos.methods-review.6 -->
### Notas de implementação e decisões de comportamento

<!-- id: upload-arquivos.32 -->
Remover, Cancelar envio e Tentar novamente são controles distintos quando essas ações existem.

<!-- id: upload-arquivos.34 -->
`Tab` e `Shift + Tab` percorrem o campo e os controles de cada arquivo. A ativação do seletor segue o controle nativo e os comandos da plataforma.

<!-- id: upload-arquivos.35 -->
O gesto de `arrastar` não pode ser a única forma de adicionar arquivos. A ordem de foco acompanha a lista apresentada.

<!-- id: upload-arquivos.37 -->
Associe rótulo, restrições e erros ao campo. Identifique o arquivo nos nomes de ações repetidas, como Remover comprovante.pdf.

<!-- id: upload-arquivos.38 -->
Comunique início, conclusão e falha do envio sem mover o foco para cada atualização. Um indicador de progresso precisa identificar a operação correspondente.

<!-- id: references -->
## Referências

<!-- id: upload-arquivos.53 -->

<!-- id: upload-arquivos.references-standard.1 -->
Referências adicionais sobre componentes do tipo Upload de arquivos.

<!-- id: upload-arquivos.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: upload-arquivos.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: upload-arquivos.54 -->
Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

<!-- id: upload-arquivos.57 -->
[USWDS — File input](https://designsystem.digital.gov/components/file-input/)

<!-- id: upload-arquivos.60 -->
[MDN — input type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/file)
