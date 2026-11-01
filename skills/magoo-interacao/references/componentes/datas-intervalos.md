# Datas e intervalos

- ID: `datas-intervalos`
- Categoria: formularios
- Versão do conteúdo: 1.6.1
- Autoria: Marcelo Sales (biblioteca Magoo, licença MIT)
- Fonte original: https://magoo.cc/componentes/formularios/datas-intervalos.html
- Gerado a partir do repositório do Magoo. Não edite à mão; regenere a partir de content/componentes.

Resumo: Permite informar uma data ou um intervalo, com entrada manual, calendário e regras de validação compreensíveis.

## Design de interação

### Guia rápido para designers

#### Quando usar

Use para informar datas ou períodos. Considere entrada manual para datas conhecidas e calendário para explorar disponibilidade.

#### O que desenhar

Mostre rótulos, formato, início e fim, data atual, seleção, indisponibilidade, limites e erros.

#### Como se comporta

A digitação e a escolha no calendário atualizam o mesmo valor. Percorrer dias não equivale a confirmar uma data.

#### O que documentar no Figma

Defina formato, limites, inclusão dos extremos, intervalo incompleto, foco, confirmação e cancelamento.

#### Como revisar

Confira estados e intervalos no desenho. Na implementação, verifique digitação, calendário e erros em desktop e celular.

### Entrada e contexto

1. O formato esperado está visível e associado ao campo? Início e fim possuem rótulos próprios, sem depender apenas da posição?
2. A entrada manual continua disponível? Datas de nascimento ou de um passado distante podem exigir muitos deslocamentos se o calendário for a única opção.
3. As regras distinguem data sem horário de instante com fuso? Registre limites, dias indisponíveis e se o último dia faz parte do período.

### Calendário e intervalo

1. Hoje, dia com foco, data selecionada e dia indisponível são distinguíveis sem depender apenas de cor? Mês e ano permanecem claros?
2. Como a pessoa escolhe o início e depois o fim? Desenhe o intervalo incompleto e a regra para uma segunda data anterior à primeira, sem trocar silenciosamente o sentido dos campos.
3. É possível alcançar meses e anos distantes sem percorrer cada dia? Em telas pequenas, o calendário cabe e os controles continuam disponíveis com teclado virtual e ampliação?

### Validação e preservação

1. Data inexistente, formato incorreto, fim anterior ao início e indisponibilidade recebem orientações específicas? Os valores são preservados para correção?
2. Se a disponibilidade mudar após a escolha, a interface explica o problema e permite revisar o período sem perder os demais dados?

## Métodos de Interação

### Mouse e toque

É possível digitar nos campos ou abrir o calendário pelo botão correspondente. Clicar ou `tocar` em um dia segue a regra de seleção e confirmação definida.

### Teclado

Nos campos nativos, os comandos seguem a plataforma. No calendário personalizado em grade, `setas para a direita e para a esquerda` mudam um dia; `setas para cima e para baixo` mudam uma semana; `Home` e `End` vão ao início e fim da semana; `Page Up` e `Page Down` mudam o mês.

`Tab` percorre os controles e uma posição na grade, em vez de cada dia. `Enter` ou `Espaço` confirmam o dia conforme o modelo adotado.

Se o calendário abrir como diálogo modal, mantenha o foco no diálogo enquanto aberto; `Esc` fecha e devolve o foco ao acionador sem confirmar a data apenas percorrida. Um calendário embutido não deve prender o foco.

### Leitores de tela

Ao navegar pelos campos com leitor de telas, a pessoa identifica rótulo, formato, valor e erro. No calendário, percorrer os dias permite identificar a data completa e confirmar a seleção.

Ao mudar o mês, a pessoa identifica o novo mês e ano. Com leitor de telas no celular, os gestos de navegação percorrem os campos e controles; `tocar duas vezes` ativa o controle focado conforme a plataforma.

## Gherkin

Metodologia BDD (Behavior-Driven Development ou Desenvolvimento Orientado ao Comportamento) com foco em 3 pilares: Histórias de Usuário, Critérios de Aceite e Sintaxes Gherkin (Dado (Given), Quando (When), Então (Then)).

### Cenário: Considerando que estou em uma página que contém Datas e intervalos

Cenários educacionais para orientar a revisão do comportamento. Devem ser adaptados ao contexto e executados na implementação; a presença deste texto não significa que os testes foram realizados.

#### Navegação por teclado

1. QUANDO uso `Tab` para alcançar os campos de início e fim e o botão do calendário
2. VEJO foco visível e consigo digitar as datas ou abrir e percorrer o calendário conforme o padrão documentado
3. ENTÃO, quando confirmo uma data, VEJO o valor atualizado; ao cancelar um calendário modal com `Esc`, VEJO o foco retornar ao acionador sem confirmar o dia apenas percorrido

#### Leitor de telas para desktop

1. QUANDO navego pelos campos e calendário com leitor de telas no computador
2. OUÇO rótulos, formato e valores; no calendário, identifico a data completa, seleção e disponibilidade
3. ENTÃO, quando mudo o mês ou confirmo a seleção, OUÇO ou percebo o novo contexto ou valor; erros ficam associados ao campo correspondente

#### Leitor de telas para dispositivos móveis

1. QUANDO navego pelos campos com leitor de telas no celular
2. OUÇO qual campo representa o início e qual representa o fim e consigo editar pelos gestos da plataforma
3. ENTÃO, quando confirmo um período inválido, OUÇO ou percebo a orientação de correção e os valores permanecem disponíveis para editar

### Cenários complementares — ampliação editorial

#### Digitar e corrigir

1. DADO o formato informado
2. QUANDO digito uma data inexistente e tento confirmar
3. ENTÃO recebo uma orientação associada ao campo e posso corrigir sem perder o valor digitado.

#### Cancelar o calendário

1. DADO um calendário modal aberto
2. QUANDO percorro dias e pressiono `Esc`
3. ENTÃO ele fecha, o foco retorna ao acionador e o valor confirmado não é substituído pelo dia apenas percorrido.

#### Intervalo inválido

1. DADOS início e fim
2. QUANDO informo um fim anterior ao início
3. ENTÃO a interface explica a relação inválida e preserva os campos para correção conforme a regra documentada.

#### Calendário com leitor de telas

1. DADO o calendário
2. QUANDO navego com leitor de telas no desktop ou celular
3. ENTÃO identifico data completa, seleção e disponibilidade e consigo confirmar ou cancelar pelo método da plataforma.

## Pontos de atenção

Não exija `arrastar` para selecionar o período. Ofereça escolha de início e fim sem esse gesto.

Uma data sem horário não deve mudar de dia por uma conversão involuntária de fuso. Essa regra precisa ser verificada no armazenamento e na apresentação.

O exemplo de calendário do APG ilustra um modelo, não uma implementação pronta para produção. A composição de intervalo exige decisões adicionais.

### Notas de implementação e decisões de comportamento

Campos nativos seguem a plataforma. Em calendário personalizado com grade, documente `setas` para dias e semanas, `Home` e `End` para a semana e `Page Up` e `Page Down` para meses.

Verifique rótulo, formato, valor e erro de cada campo. No calendário, o nome do dia precisa permitir identificar a data completa, com mês e ano.

Comunique mês e ano ao mudar a visualização e diferencie foco, seleção e indisponibilidade. Teste os seletores nativos nas plataformas efetivamente usadas.

## Referências

Referências adicionais sobre componentes do tipo Datas e intervalos.

**Importante:**
A maior parte das referências estão na plataforma do curso junto com as aulas citadas neste material.

**Isenção de responsabilidade:**
Os links indicados aqui não são recomendações, mas apenas uma curadoria de referências onde você pode encontrar componentes construídos. É importante ressaltar que não há uma unificação nos formatos de construção e não há garantias de que os links mencionados aqui cumpram todos os padrões de design. Dúvidas devem ser direcionadas para as respectivas equipes envolvidas nas construções dos materiais indicados. Antes de "copiar" algum modelo apresentado, leve em consideração que todos os materiais são atualizados constantemente e que os padrões (principalmente proprietários) podem sofrer alterações.

Referências técnicas e exemplos consultados para esta adaptação editorial. Cada fonte conserva seu escopo; consultar um exemplo não comprova a acessibilidade de outra implementação.

[W3C APG — Date picker dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/)

[USWDS — Date range picker](https://designsystem.digital.gov/components/date-range-picker/)
