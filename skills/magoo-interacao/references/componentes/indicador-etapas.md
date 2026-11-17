# Indicador de etapas

- ID: `indicador-etapas`
- Categoria: navegacao
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/navegacao/indicador-etapas.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Mostra a posição em uma jornada com etapas, diferenciando etapa atual, concluída e pendente.

<!-- id: interaction-design -->
## Design de interação

<!-- id: indicador-etapas.designer-guide.frame -->
<!-- id: indicador-etapas.designer-guide.1 -->
### Guia rápido para designers

<!-- id: indicador-etapas.designer-guide.2 -->
#### Quando usar

<!-- id: indicador-etapas.designer-guide.3 -->
Use para orientar uma sequência de tarefas relacionadas. Para tarefas independentes ou duração de processamento, avalie outro padrão.

<!-- id: indicador-etapas.designer-guide.4 -->
#### O que desenhar

<!-- id: indicador-etapas.designer-guide.5 -->
Mostre nomes das etapas, posição atual, concluídas, pendentes e os controles de avançar e voltar.

<!-- id: indicador-etapas.designer-guide.6 -->
#### Como se comporta

<!-- id: indicador-etapas.designer-guide.7 -->
O indicador informa a posição. Voltar e Continuar controlam o avanço; acesso direto a etapas é uma decisão adicional.

<!-- id: indicador-etapas.designer-guide.8 -->
#### O que documentar no Figma

<!-- id: indicador-etapas.designer-guide.9 -->
Defina pré-requisitos, etapas opcionais, preservação de dados, retorno e condições para considerar uma etapa concluída.

<!-- id: indicador-etapas.designer-guide.10 -->
#### Como revisar

<!-- id: indicador-etapas.designer-guide.11 -->
Confira sequência e estados no desenho. Na implementação, verifique navegação, validação, preservação de dados e identificação da etapa atual.

<!-- id: indicador-etapas.15 -->
### Sequência e estados

1. <!-- id: indicador-etapas.16 --> A jornada tem uma ordem compreensível? A pessoa reconhece onde está, o que terminou e o que falta sem depender apenas de cor ou de números isolados?
2. <!-- id: indicador-etapas.17 --> Uma etapa visitada é diferente de uma etapa concluída? Documente quais dados ou confirmações tornam a etapa completa.
3. <!-- id: indicador-etapas.18 --> O título da tela explica a etapa atual? O indicador não substitui o cabeçalho nem as instruções da tarefa.

<!-- id: indicador-etapas.20 -->
### Avançar, voltar e revisar

1. <!-- id: indicador-etapas.21 --> Voltar preserva os dados já informados? Ao continuar, erros mantêm a pessoa na etapa e explicam o que corrigir?
2. <!-- id: indicador-etapas.22 --> Se etapas concluídas forem acionáveis, está claro quais podem ser abertas e o que acontece com os dados posteriores após uma alteração?
3. <!-- id: indicador-etapas.23 --> A confirmação final é distinta de apenas chegar à última etapa? Evite comunicar conclusão da jornada antes de o envio ser confirmado.

<!-- id: indicador-etapas.25 -->
### Variações e telas pequenas

1. <!-- id: indicador-etapas.26 --> Se respostas alterarem o número de etapas, o total exibido permanece verdadeiro? Considere outro padrão quando a sequência for muito variável ou não linear.
2. <!-- id: indicador-etapas.27 --> Em telas pequenas, uma versão compacta mantém o nome da etapa, sua posição e os controles disponíveis? Não dependa de rótulos minúsculos ou cortados.

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: indicador-etapas.29 -->

<!-- id: indicador-etapas.30 -->
### Mouse e toque

<!-- id: indicador-etapas.methods-review.1 -->
Clicar ou `tocar` em Continuar valida a etapa e, se os dados estiverem válidos, apresenta a próxima. Clicar ou `tocar` em Voltar retorna à etapa anterior preservando os dados previstos. Segmentos apenas informativos não executam ações.

<!-- id: indicador-etapas.32 -->
### Teclado

<!-- id: indicador-etapas.methods-review.2 -->
`Tab` e `Shift + Tab` percorrem Continuar, Voltar e links de etapas quando existirem. `Enter` ou `Espaço` ativa o botão focado; `Enter` abre um link de etapa. Segmentos informativos não recebem foco.

<!-- id: indicador-etapas.methods-review.3 -->
Depois de Continuar, a nova etapa é apresentada e o foco chega ao título ou início definido no fluxo. Se houver erro, a pessoa permanece na etapa e encontra a orientação de correção; Voltar permite revisar os dados preservados.

<!-- id: indicador-etapas.35 -->
### Leitores de tela

<!-- id: indicador-etapas.methods-review.4 -->
Usar os comandos de leitura do leitor de telas permite identificar o nome, a posição e o estado de cada etapa, como Etapa 2 de 4. Navegar até Continuar ou Voltar e ativar o botão muda a etapa e permite perceber seu novo contexto.

<!-- id: indicador-etapas.methods-review.5 -->
Com leitor de telas no celular no modo de navegação padrão, `deslizar o dedo` percorre os controles e `tocar duas vezes` ativa Continuar, Voltar ou um link de etapa focado. O indicador informa a posição; não exige gesto de `arrastar` nem navegação por `setas` como em abas.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: indicador-etapas.gherkin-standard.intro-0 -->

<!-- id: indicador-etapas.gherkin-standard.intro-1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: indicador-etapas.38 -->
### Cenário: Considerando que estou em uma página que contém Indicador de etapas

<!-- id: indicador-etapas.39 -->
Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

<!-- id: indicador-etapas.gherkin-standard.13 -->
#### Navegação por teclado

1. <!-- id: indicador-etapas.gherkin-standard.14 --> QUANDO uso `Tab` para alcançar os controles de avanço e retorno
2. <!-- id: indicador-etapas.gherkin-standard.15 --> VEJO foco visível e não encontro paradas nos segmentos apenas informativos
3. <!-- id: indicador-etapas.gherkin-standard.16 --> ENTÃO, quando continuo com dados válidos, VEJO a próxima etapa e o foco segue para seu início conforme a regra definida; ao voltar, VEJO os dados preservados

<!-- id: indicador-etapas.gherkin-standard.18 -->
#### Leitor de telas para desktop

1. <!-- id: indicador-etapas.gherkin-standard.19 --> QUANDO navego pelo indicador com leitor de telas no computador
2. <!-- id: indicador-etapas.gherkin-standard.20 --> OUÇO ou percebo o nome, a posição e o estado da etapa atual, distinguindo etapas concluídas e pendentes
3. <!-- id: indicador-etapas.gherkin-standard.21 --> ENTÃO, quando avanço ou volto, OUÇO ou percebo a nova etapa; se houver erro, permaneço na etapa e recebo orientação para corrigir

<!-- id: indicador-etapas.gherkin-standard.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: indicador-etapas.gherkin-standard.24 --> QUANDO exploro a versão compacta com leitor de telas no celular
2. <!-- id: indicador-etapas.gherkin-standard.25 --> OUÇO ou percebo o nome e a posição da etapa e identifico os controles de navegação
3. <!-- id: indicador-etapas.gherkin-standard.26 --> ENTÃO, quando aciono Continuar ou Voltar com o gesto da plataforma, OUÇO ou percebo a etapa apresentada e os dados seguem a regra de preservação

<!-- id: indicador-etapas.gherkin-standard.28 -->
### Cenários complementares — ampliação editorial

<!-- id: indicador-etapas.40 -->
#### Avançar com dados válidos

1. <!-- id: indicador-etapas.gherkin-standard.1 --> DADA uma etapa preenchida corretamente
2. <!-- id: indicador-etapas.gherkin-standard.2 --> QUANDO aciono Continuar
3. <!-- id: indicador-etapas.gherkin-standard.3 --> ENTÃO a próxima etapa é apresentada, sua posição é atualizada e o foco segue a regra documentada.

<!-- id: indicador-etapas.42 -->
#### Impedir avanço com erro

1. <!-- id: indicador-etapas.gherkin-standard.4 --> DADA uma etapa com erro de preenchimento
2. <!-- id: indicador-etapas.gherkin-standard.5 --> QUANDO tento continuar
3. <!-- id: indicador-etapas.gherkin-standard.6 --> ENTÃO permaneço na etapa, recebo orientação de correção e os dados informados são preservados.

<!-- id: indicador-etapas.44 -->
#### Voltar e revisar

1. <!-- id: indicador-etapas.gherkin-standard.7 --> DADA uma etapa posterior
2. <!-- id: indicador-etapas.gherkin-standard.8 --> QUANDO volto para revisar informações
3. <!-- id: indicador-etapas.gherkin-standard.9 --> ENTÃO encontro os dados preservados e qualquer impacto da alteração nas etapas seguintes é explicado.

<!-- id: indicador-etapas.46 -->
#### Reconhecer posição no celular

1. <!-- id: indicador-etapas.gherkin-standard.10 --> DADA a versão compacta do indicador
2. <!-- id: indicador-etapas.gherkin-standard.11 --> QUANDO navego com leitor de telas no celular
3. <!-- id: indicador-etapas.gherkin-standard.12 --> ENTÃO identifico nome, posição e estado da etapa atual e consigo acessar os controles de navegação.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: indicador-etapas.48 -->

<!-- id: indicador-etapas.49 -->
O indicador deste guia acompanha uma sequência. Uma lista de tarefas independentes precisa de outra lógica de acesso e conclusão.

<!-- id: indicador-etapas.50 -->
O USWDS usa indicador sem navegação direta. Tornar segmentos acionáveis é uma adaptação editorial que exige regras explícitas e controles semânticos.

<!-- id: indicador-etapas.51 -->
Não trate quantidade de etapas concluídas como medida de tempo ou esforço restante. O sucesso final depende da confirmação real da operação.

<!-- id: indicador-etapas.methods-review.6 -->
### Notas de implementação e decisões de comportamento

<!-- id: indicador-etapas.31 -->
Acionar Continuar valida e avança conforme as regras; Voltar retorna preservando os dados definidos. O segmento informativo não se torna clicável apenas por parecer um botão.

<!-- id: indicador-etapas.33 -->
`Tab` percorre controles de navegação e links de etapas quando existirem. Indicadores apenas informativos não adicionam paradas de foco.

<!-- id: indicador-etapas.34 -->
Na troca de etapa na mesma página, leve o foco a um título ou início coerente da nova etapa. Em erro, use o padrão de validação definido, sem avançar silenciosamente.

<!-- id: indicador-etapas.36 -->
Represente a sequência com ordem compreensível e identifique a etapa atual programaticamente, por exemplo com aria-current="step". Conclusão e pendência também precisam de texto ou estado perceptível.

<!-- id: indicador-etapas.37 -->
Verifique o nome da etapa e a posição, como Etapa 2 de 4, no desktop e celular. A mudança de etapa deve ser percebida sem reler toda a página.

<!-- id: references -->
## Referências

<!-- id: indicador-etapas.52 -->

<!-- id: indicador-etapas.references-standard.1 -->
Referências adicionais sobre componentes do tipo Indicador de etapas.

<!-- id: indicador-etapas.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: indicador-etapas.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: indicador-etapas.53 -->
Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

<!-- id: indicador-etapas.56 -->
[USWDS — Step indicator](https://designsystem.digital.gov/components/step-indicator/)

<!-- id: indicador-etapas.59 -->
[WAI-ARIA — aria-current](https://www.w3.org/TR/wai-aria-1.2/#aria-current)
