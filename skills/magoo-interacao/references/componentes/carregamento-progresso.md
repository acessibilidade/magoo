# Carregamento e progresso

- ID: `carregamento-progresso`
- Categoria: mensagens
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/mensagens/carregamento-progresso.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Comunica espera e avanço de operações, distinguindo duração desconhecida, progresso mensurável, conclusão e falha.

## Design de interação

### Guia rápido para designers

#### Quando usar

Use quando uma operação exigir espera. Mostre progresso determinado somente quando houver uma medida real de avanço.

#### O que desenhar

Mostre o que está acontecendo, área afetada, espera, progresso, sucesso, falha e ações de recuperação.

#### Como se comporta

Atualizações mantêm o foco previsível. Conclusão, falha e cancelamento encerram o estado de espera com um retorno compreensível.

#### O que documentar no Figma

Defina o que o progresso mede, o que fica disponível durante a espera e o efeito de cancelar ou tentar novamente.

#### Como revisar

Confira mensagens e estados no desenho. Na implementação, verifique atualização, foco, anúncios e preferência de movimento reduzido.

### Espera e medida de avanço

1. A mensagem identifica a operação e a área afetada? Um indicador isolado pode não explicar se a página está carregando ou se uma ação foi recebida.
2. O progresso é determinado, com total conhecido, ou indeterminado? Não apresente percentual inventado nem estimativa de tempo sem base confiável.
3. A medida representa transferência, processamento ou toda a tarefa? Chegar a 100% de transferência não comprova que o processamento terminou.

### Disponibilidade e continuidade

1. Quais ações continuam disponíveis? Como evitar envio duplicado sem bloquear controles que não dependem da operação?
2. Se houver skeleton, a estrutura ajuda a antecipar o conteúdo sem apresentar elementos falsamente acionáveis? O texto de espera continua disponível?
3. O que acontece se a pessoa sair da página, cancelar ou perder a conexão? Documente se a operação continua e como seu resultado será recuperado.

### Encerramento e recuperação

1. Sucesso, falha e cancelamento são distinguíveis? Uma falha encerra a animação e oferece um próximo passo coerente, preservando dados quando possível?
2. Textos longos e controles continuam visíveis em telas pequenas? A compreensão depende de movimento, cor ou de observar continuamente a animação?

## Métodos de Interação

### Mouse, toque e teclado

O indicador apenas informativo é acompanhado pela leitura da mensagem e do progresso, sem precisar clicar nele. Clicar ou `tocar` em Cancelar ou Tentar novamente executa essa ação quando disponível.

`Tab` e `Shift + Tab` percorrem os controles disponíveis; `Enter` ou `Espaço` no botão Cancelar ou Tentar novamente executa a ação. Atualizações de progresso mantêm o foco na tarefa; o indicador estático não cria uma parada de foco.

### Leitores de tela

Usar os comandos de leitura do leitor de telas permite identificar a operação e o valor quando determinado. Em progresso indeterminado, a pessoa identifica a espera sem receber um percentual fictício.

Ao iniciar ou encerrar a operação, a pessoa percebe a mensagem de andamento, conclusão ou falha sem deslocar o foco para a barra. Para recuperar uma falha, navega até Tentar novamente e ativa o botão.

Com leitor de telas no celular, `deslizar o dedo` percorre mensagens e controles no modo padrão; `tocar duas vezes` ativa Cancelar ou Tentar novamente quando disponível.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Carregamento e progresso

Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

#### Navegação por teclado

1. QUANDO uma operação é iniciada e navego por teclado durante a espera
2. VEJO a identificação da operação e foco visível nos controles disponíveis; o indicador apenas informativo não cria uma parada de foco
3. ENTÃO, quando o progresso é atualizado, VEJO que o foco permanece previsível e posso acionar Cancelar ou Tentar novamente quando essas ações estiverem disponíveis

#### Leitor de telas para desktop

1. QUANDO acompanho uma operação com leitor de telas no computador
2. OUÇO ou percebo qual operação está em andamento e seu valor quando houver progresso determinado, sem um percentual fictício em espera indeterminada
3. ENTÃO, quando a operação termina ou falha, OUÇO ou percebo o desfecho sem precisar mover o foco para o indicador nem acompanhar cada mudança percentual

#### Leitor de telas para dispositivos móveis

1. QUANDO navego pela região da operação com leitor de telas no celular
2. OUÇO ou percebo a mensagem de espera e identifico os controles disponíveis pelos seus nomes
3. ENTÃO, quando ocorre conclusão, falha ou cancelamento, OUÇO ou percebo o resultado e consigo continuar a tarefa sem acompanhar a animação

### Cenários complementares — ampliação editorial

#### Progresso com total desconhecido

1. DADA uma operação sem total conhecido
2. QUANDO ela começa
3. ENTÃO percebo que há uma espera em andamento e não recebo um percentual fictício.

#### Conclusão real

1. DADA uma transferência seguida de processamento
2. QUANDO a transferência chega ao fim
3. ENTÃO a interface informa o processamento pendente e só apresenta sucesso quando a tarefa realmente termina.

#### Falha e recuperação

1. DADA uma operação em andamento
2. QUANDO ocorre uma falha
3. ENTÃO a espera termina, identifico o problema e consigo acionar a recuperação disponível por teclado, toque ou leitor de telas.

#### Foco durante atualizações

1. DADO um controle disponível durante a espera
2. QUANDO o progresso é atualizado
3. ENTÃO o foco não é deslocado pela atualização e a mensagem de resultado pode ser percebida sem acompanhar a animação.

## Pontos de atenção

Progresso de uma operação é diferente de indicador de etapas de uma jornada. Etapas concluídas não representam necessariamente uma porcentagem de tempo restante.

Respeite a preferência por movimento reduzido e preserve um retorno textual quando reduzir animações. Evite efeitos intermitentes.

Skeleton e spinner não substituem mensagens de erro, conclusão ou indisponibilidade. Evite uma espera que nunca apresenta desfecho.

### Notas de implementação e decisões de comportamento

O indicador informativo não precisa receber foco. Cancelar e Tentar novamente, quando disponíveis, seguem o comportamento de botões e entram na ordem de `Tab`.

Não mova o foco a cada atualização. Se um controle focado for removido no encerramento, encaminhe o foco para um destino coerente e documentado.

A barra de progresso precisa de nome e valor quando determinado. Em progresso indeterminado, não exponha um valor numérico falso. Prefira progress nativo quando adequado.

Comunique início e desfecho e, se necessário, marcos relevantes. Uma progressbar não garante anúncio automático de cada mudança; evite forçar anúncios para cada percentual.

Se usar aria-busy em uma região atualizada, volte o estado para falso ao concluir ou falhar. Mantenha a mensagem de status perceptível, inclusive quando a região estiver ocupada.

## Referências

Referências adicionais sobre componentes do tipo Carregamento e progresso.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

[Carbon — Progress bar](https://carbondesignsystem.com/components/progress-bar/usage/)

[MDN — progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/progress)

[W3C WAI — Status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
