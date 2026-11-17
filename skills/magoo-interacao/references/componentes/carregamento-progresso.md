# Carregamento e progresso

- ID: `carregamento-progresso`
- Categoria: mensagens
- Versão do conteúdo: 1.7.0
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/mensagens/carregamento-progresso.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Comunica espera e avanço de operações, distinguindo duração desconhecida, progresso mensurável, conclusão e falha.

<!-- id: interaction-design -->
## Design de interação

<!-- id: carregamento-progresso.designer-guide.frame -->
<!-- id: carregamento-progresso.designer-guide.1 -->
### Guia rápido para designers

<!-- id: carregamento-progresso.designer-guide.2 -->
#### Quando usar

<!-- id: carregamento-progresso.designer-guide.3 -->
Use quando uma operação exigir espera. Mostre progresso determinado somente quando houver uma medida real de avanço.

<!-- id: carregamento-progresso.designer-guide.4 -->
#### O que desenhar

<!-- id: carregamento-progresso.designer-guide.5 -->
Mostre o que está acontecendo, área afetada, espera, progresso, sucesso, falha e ações de recuperação.

<!-- id: carregamento-progresso.designer-guide.6 -->
#### Como se comporta

<!-- id: carregamento-progresso.designer-guide.7 -->
Atualizações mantêm o foco previsível. Conclusão, falha e cancelamento encerram o estado de espera com um retorno compreensível.

<!-- id: carregamento-progresso.designer-guide.8 -->
#### O que documentar no Figma

<!-- id: carregamento-progresso.designer-guide.9 -->
Defina o que o progresso mede, o que fica disponível durante a espera e o efeito de cancelar ou tentar novamente.

<!-- id: carregamento-progresso.designer-guide.10 -->
#### Como revisar

<!-- id: carregamento-progresso.designer-guide.11 -->
Confira mensagens e estados no desenho. Na implementação, verifique atualização, foco, anúncios e preferência de movimento reduzido.

<!-- id: carregamento-progresso.15 -->
### Espera e medida de avanço

1. <!-- id: carregamento-progresso.16 --> A mensagem identifica a operação e a área afetada? Um indicador isolado pode não explicar se a página está carregando ou se uma ação foi recebida.
2. <!-- id: carregamento-progresso.17 --> O progresso é determinado, com total conhecido, ou indeterminado? Não apresente percentual inventado nem estimativa de tempo sem base confiável.
3. <!-- id: carregamento-progresso.18 --> A medida representa transferência, processamento ou toda a tarefa? Chegar a 100% de transferência não comprova que o processamento terminou.

<!-- id: carregamento-progresso.20 -->
### Disponibilidade e continuidade

1. <!-- id: carregamento-progresso.21 --> Quais ações continuam disponíveis? Como evitar envio duplicado sem bloquear controles que não dependem da operação?
2. <!-- id: carregamento-progresso.22 --> Se houver skeleton, a estrutura ajuda a antecipar o conteúdo sem apresentar elementos falsamente acionáveis? O texto de espera continua disponível?
3. <!-- id: carregamento-progresso.23 --> O que acontece se a pessoa sair da página, cancelar ou perder a conexão? Documente se a operação continua e como seu resultado será recuperado.

<!-- id: carregamento-progresso.25 -->
### Encerramento e recuperação

1. <!-- id: carregamento-progresso.26 --> Sucesso, falha e cancelamento são distinguíveis? Uma falha encerra a animação e oferece um próximo passo coerente, preservando dados quando possível?
2. <!-- id: carregamento-progresso.27 --> Textos longos e controles continuam visíveis em telas pequenas? A compreensão depende de movimento, cor ou de observar continuamente a animação?

<!-- id: interaction-methods -->
## Métodos de Interação

<!-- id: carregamento-progresso.29 -->

<!-- id: carregamento-progresso.30 -->
### Mouse, toque e teclado

<!-- id: carregamento-progresso.methods-review.1 -->
O indicador apenas informativo é acompanhado pela leitura da mensagem e do progresso, sem precisar clicar nele. Clicar ou `tocar` em Cancelar ou Tentar novamente executa essa ação quando disponível.

<!-- id: carregamento-progresso.methods-review.2 -->
`Tab` e `Shift + Tab` percorrem os controles disponíveis; `Enter` ou `Espaço` no botão Cancelar ou Tentar novamente executa a ação. Atualizações de progresso mantêm o foco na tarefa; o indicador estático não cria uma parada de foco.

<!-- id: carregamento-progresso.33 -->
### Leitores de tela

<!-- id: carregamento-progresso.methods-review.3 -->
Usar os comandos de leitura do leitor de telas permite identificar a operação e o valor quando determinado. Em progresso indeterminado, a pessoa identifica a espera sem receber um percentual fictício.

<!-- id: carregamento-progresso.methods-review.4 -->
Ao iniciar ou encerrar a operação, a pessoa percebe a mensagem de andamento, conclusão ou falha sem deslocar o foco para a barra. Para recuperar uma falha, navega até Tentar novamente e ativa o botão.

<!-- id: carregamento-progresso.methods-review.5 -->
Com leitor de telas no celular, `deslizar o dedo` percorre mensagens e controles no modo padrão; `tocar duas vezes` ativa Cancelar ou Tentar novamente quando disponível.

<!-- id: acceptance-criteria -->
## Gherkin

<!-- id: carregamento-progresso.gherkin-standard.intro-0 -->

<!-- id: carregamento-progresso.gherkin-standard.intro-1 -->
Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

<!-- id: carregamento-progresso.37 -->
### Cenário: Considerando que estou em uma página que contém Carregamento e progresso

<!-- id: carregamento-progresso.38 -->
Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

<!-- id: carregamento-progresso.gherkin-standard.13 -->
#### Navegação por teclado

1. <!-- id: carregamento-progresso.gherkin-standard.14 --> QUANDO uma operação é iniciada e navego por teclado durante a espera
2. <!-- id: carregamento-progresso.gherkin-standard.15 --> VEJO a identificação da operação e foco visível nos controles disponíveis; o indicador apenas informativo não cria uma parada de foco
3. <!-- id: carregamento-progresso.gherkin-standard.16 --> ENTÃO, quando o progresso é atualizado, VEJO que o foco permanece previsível e posso acionar Cancelar ou Tentar novamente quando essas ações estiverem disponíveis

<!-- id: carregamento-progresso.gherkin-standard.18 -->
#### Leitor de telas para desktop

1. <!-- id: carregamento-progresso.gherkin-standard.19 --> QUANDO acompanho uma operação com leitor de telas no computador
2. <!-- id: carregamento-progresso.gherkin-standard.20 --> OUÇO ou percebo qual operação está em andamento e seu valor quando houver progresso determinado, sem um percentual fictício em espera indeterminada
3. <!-- id: carregamento-progresso.gherkin-standard.21 --> ENTÃO, quando a operação termina ou falha, OUÇO ou percebo o desfecho sem precisar mover o foco para o indicador nem acompanhar cada mudança percentual

<!-- id: carregamento-progresso.gherkin-standard.23 -->
#### Leitor de telas para dispositivos móveis

1. <!-- id: carregamento-progresso.gherkin-standard.24 --> QUANDO navego pela região da operação com leitor de telas no celular
2. <!-- id: carregamento-progresso.gherkin-standard.25 --> OUÇO ou percebo a mensagem de espera e identifico os controles disponíveis pelos seus nomes
3. <!-- id: carregamento-progresso.gherkin-standard.26 --> ENTÃO, quando ocorre conclusão, falha ou cancelamento, OUÇO ou percebo o resultado e consigo continuar a tarefa sem acompanhar a animação

<!-- id: carregamento-progresso.gherkin-standard.28 -->
### Cenários complementares — ampliação editorial

<!-- id: carregamento-progresso.39 -->
#### Progresso com total desconhecido

1. <!-- id: carregamento-progresso.gherkin-standard.1 --> DADA uma operação sem total conhecido
2. <!-- id: carregamento-progresso.gherkin-standard.2 --> QUANDO ela começa
3. <!-- id: carregamento-progresso.gherkin-standard.3 --> ENTÃO percebo que há uma espera em andamento e não recebo um percentual fictício.

<!-- id: carregamento-progresso.41 -->
#### Conclusão real

1. <!-- id: carregamento-progresso.gherkin-standard.4 --> DADA uma transferência seguida de processamento
2. <!-- id: carregamento-progresso.gherkin-standard.5 --> QUANDO a transferência chega ao fim
3. <!-- id: carregamento-progresso.gherkin-standard.6 --> ENTÃO a interface informa o processamento pendente e só apresenta sucesso quando a tarefa realmente termina.

<!-- id: carregamento-progresso.43 -->
#### Falha e recuperação

1. <!-- id: carregamento-progresso.gherkin-standard.7 --> DADA uma operação em andamento
2. <!-- id: carregamento-progresso.gherkin-standard.8 --> QUANDO ocorre uma falha
3. <!-- id: carregamento-progresso.gherkin-standard.9 --> ENTÃO a espera termina, identifico o problema e consigo acionar a recuperação disponível por teclado, toque ou leitor de telas.

<!-- id: carregamento-progresso.45 -->
#### Foco durante atualizações

1. <!-- id: carregamento-progresso.gherkin-standard.10 --> DADO um controle disponível durante a espera
2. <!-- id: carregamento-progresso.gherkin-standard.11 --> QUANDO o progresso é atualizado
3. <!-- id: carregamento-progresso.gherkin-standard.12 --> ENTÃO o foco não é deslocado pela atualização e a mensagem de resultado pode ser percebida sem acompanhar a animação.

<!-- id: considerations -->
## Pontos de atenção

<!-- id: carregamento-progresso.47 -->

<!-- id: carregamento-progresso.48 -->
Progresso de uma operação é diferente de indicador de etapas de uma jornada. Etapas concluídas não representam necessariamente uma porcentagem de tempo restante.

<!-- id: carregamento-progresso.49 -->
Respeite a preferência por movimento reduzido e preserve um retorno textual quando reduzir animações. Evite efeitos intermitentes.

<!-- id: carregamento-progresso.50 -->
Skeleton e spinner não substituem mensagens de erro, conclusão ou indisponibilidade. Evite uma espera que nunca apresenta desfecho.

<!-- id: carregamento-progresso.methods-review.6 -->
### Notas de implementação e decisões de comportamento

<!-- id: carregamento-progresso.31 -->
O indicador informativo não precisa receber foco. Cancelar e Tentar novamente, quando disponíveis, seguem o comportamento de botões e entram na ordem de `Tab`.

<!-- id: carregamento-progresso.32 -->
Não mova o foco a cada atualização. Se um controle focado for removido no encerramento, encaminhe o foco para um destino coerente e documentado.

<!-- id: carregamento-progresso.34 -->
A barra de progresso precisa de nome e valor quando determinado. Em progresso indeterminado, não exponha um valor numérico falso. Prefira progress nativo quando adequado.

<!-- id: carregamento-progresso.35 -->
Comunique início e desfecho e, se necessário, marcos relevantes. Uma progressbar não garante anúncio automático de cada mudança; evite forçar anúncios para cada percentual.

<!-- id: carregamento-progresso.36 -->
Se usar aria-busy em uma região atualizada, volte o estado para falso ao concluir ou falhar. Mantenha a mensagem de status perceptível, inclusive quando a região estiver ocupada.

<!-- id: references -->
## Referências

<!-- id: carregamento-progresso.51 -->

<!-- id: carregamento-progresso.references-standard.1 -->
Referências adicionais sobre componentes do tipo Carregamento e progresso.

<!-- id: carregamento-progresso.references-standard.3 -->
**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

<!-- id: carregamento-progresso.references-standard.6 -->
**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

<!-- id: carregamento-progresso.52 -->
Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

<!-- id: carregamento-progresso.55 -->
[Carbon — Progress bar](https://carbondesignsystem.com/components/progress-bar/usage/)

<!-- id: carregamento-progresso.58 -->
[MDN — progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress)

<!-- id: carregamento-progresso.61 -->
[W3C WAI — Status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
