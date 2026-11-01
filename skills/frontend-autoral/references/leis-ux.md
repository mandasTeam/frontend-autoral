# Leis de UX aplicadas

As 30 leis de [lawsofux.com](https://lawsofux.com/), traduzidas em decisões de interface e numa
forma de conferir cada uma. Não são enfeite de relatório: cada lei aqui vira uma pergunta que se
responde olhando a tela ou o código.

**A tensão principal desta skill:** a identidade é autoral, a interação é convencional (Lei de
Jakob). Ousadia mora na tipografia, na cor, na imagem, na composição e na ideia-assinatura. Menu,
link, botão, formulário, carrinho, busca e voltar funcionam como a pessoa já espera em qualquer
site. Uma navegação "criativa" que obriga a reaprender é falha de UX, não estilo.

## Sumário

1. Percepção e agrupamento (Gestalt)
2. Decisão e escolha
3. Memória e atenção
4. Esforço, tempo e motivação
5. Expectativa e modelo mental
6. Emoção e lembrança
7. Conferência rápida

---

## 1. Percepção e agrupamento

| Lei | O que diz | Na interface | Como conferir |
|---|---|---|---|
| **Proximidade** | Coisas próximas parecem do mesmo grupo. | Rótulo colado no campo; espaço entre grupos ≥ 2× o espaço dentro do grupo; seções bem mais afastadas que blocos internos. | Squint no screenshot: os grupos aparecem sem bordas? |
| **Região comum** | Coisas dentro de uma área delimitada parecem agrupadas. | Fundo de um tom diferente agrupa sem precisar de linha ou sombra. Use caixa só quando proximidade não basta. | Cada caixa existe porque o espaço sozinho não resolvia? |
| **Semelhança** | Elementos parecidos são lidos como um conjunto. | Tudo que é clicável tem a mesma aparência; nada que não é clicável imita link ou botão. | Algum texto em cor de acento não é clicável? Algum link não parece link? |
| **Conectividade uniforme** | Elementos ligados visualmente parecem mais relacionados. | Linha do tempo, passos ligados, rótulo ligado ao ponto do gráfico. Ligue só o que é de fato relacionado. | As conexões visuais mostram uma relação real? |
| **Prägnanz** | Interpretamos o ambíguo na forma mais simples. | Formas, ícones e logo simples; layout com poucas massas claras. | O ícone/logo se lê em 16 px? A tela se resume a 2–3 massas no squint? |
| **Von Restorff** | O item diferente é o mais lembrado. | Um acento, um botão principal, uma assinatura. Se tudo destaca, nada destaca. Não dependa só de cor (acessibilidade). | Quantos elementos usam o acento na primeira dobra? Mais de 2–3 é diluição. |
| **Estética-usabilidade** | Design atraente parece mais fácil de usar. | Beleza aumenta tolerância a pequenas falhas, por isso vale investir nela. Mas ela também esconde problemas em teste: confira a tarefa, não a impressão. | A tarefa principal funciona no feio também (zoom 200%, sem imagens, teclado)? |

## 2. Decisão e escolha

| Lei | O que diz | Na interface | Como conferir |
|---|---|---|---|
| **Hick** | O tempo de decisão cresce com o número e a complexidade das opções. | Um CTA principal por contexto; navegação com 3–5 itens; opções avançadas escondidas (divulgação progressiva); recomendação marcada quando há muitas opções. | Conte as ações com o mesmo peso visual na primeira dobra. |
| **Sobrecarga de escolha** | Opções demais paralisam. | Planos: 2–3, um recomendado. Filtros: os mais usados à vista, o resto em "Mais filtros". Comparação lado a lado quando a escolha é inevitável. | Alguma lista de escolha passa de ~7 itens sem agrupamento ou busca? |
| **Navalha de Occam** | Entre soluções equivalentes, a com menos suposições. | Tire o elemento que não muda nada (regra "tire um acessório"). Menos passos, menos campos, menos estados. | Para cada elemento: se eu tirar, a pessoa perde algo? |
| **Tesler** (conservação da complexidade) | Toda tarefa tem uma complexidade mínima que só muda de lugar. | Absorva a complexidade no sistema, não no usuário: preencher CEP → endereço, aceitar data em vários formatos, valores padrão sensatos. | Que trabalho a pessoa faz que o sistema poderia fazer? |
| **Pareto** | ~80% dos efeitos vêm de ~20% das causas. | Desenhe primeiro (e melhor) os 20% de telas e ações que respondem pela maior parte do uso; o polimento vai onde a pessoa passa o tempo. | A tarefa principal recebeu mais cuidado que a página "Sobre"? |

## 3. Memória e atenção

| Lei | O que diz | Na interface | Como conferir |
|---|---|---|---|
| **Miller** | A memória de trabalho segura ~7 ± 2 itens. | Não é limite de itens de menu; é motivo para agrupar e não pedir que a pessoa lembre. | Alguma etapa pede lembrar algo mostrado em outra tela? |
| **Memória de trabalho** | Guardamos pouca informação, por pouco tempo, enquanto fazemos a tarefa. | Reconhecer em vez de lembrar: resumo do pedido visível no checkout, filtros ativos visíveis, rótulo sempre presente (placeholder não é rótulo). | O contexto necessário está na tela da decisão? |
| **Carga cognitiva** | Esforço mental para entender e usar. | Corte carga estranha (decoração, texto vago, layout imprevisível); preserve a carga da tarefa. Um foco por tela. | Squint + leitura em 5 s: o que é, para quem, o que fazer? |
| **Chunking** | Informação em blocos significativos é absorvida melhor. | Telefone, CPF e cartão formatados em grupos; formulário longo em seções com títulos; texto com subtítulos e parágrafos curtos. | Algum bloco de texto ou número longo sem agrupamento? |
| **Posição serial** | Lembramos melhor o primeiro e o último itens. | Itens mais importantes no começo e no fim da navegação e das listas; o meio para o menos crítico. A página termina forte (rodapé desenhado, não sitemap). | O que está no começo e no fim da navegação? |
| **Atenção seletiva** | Focamos no que serve ao objetivo e ignoramos o resto. | Nada importante pode parecer anúncio (cegueira a banners). Mudança importante precisa de sinal claro (e `aria-live`). | Algum aviso importante tem cara de banner? |
| **Zeigarnik** | Tarefas incompletas são mais lembradas. | Progresso visível em tarefas longas ("2 de 4"), rascunho salvo, perfil "70% completo" só se for verdade e útil. Sem falso senso de pendência. | Fluxos longos mostram onde a pessoa está e o que falta? |

## 4. Esforço, tempo e motivação

| Lei | O que diz | Na interface | Como conferir |
|---|---|---|---|
| **Fitts** | O tempo para atingir um alvo depende da distância e do tamanho. | Alvos ≥ 44 × 44 px no toque, área de clique maior que o desenho, ação principal perto do polegar e do conteúdo a que se refere, ações destrutivas longe das frequentes. | Meça os alvos no screenshot de 390 px. |
| **Limiar de Doherty** | Produtividade sobe quando sistema e pessoa respondem em < 400 ms. | Feedback imediato (≤ 100 ms) a todo clique; UI otimista; esqueleto em vez de tela em branco; animação de interface < 300 ms (`movimento.md`). | Algum clique fica sem resposta visível por mais de 400 ms? |
| **Parkinson** | O trabalho se expande para ocupar o tempo disponível. | Encurte a tarefa: autocompletar, preenchimento automático (`autocomplete`), menos campos, checkout curto. | Quantos campos/passos a tarefa principal tem? Algum é dispensável? |
| **Fluxo** | Estado de foco total, entre desafio e habilidade. | Não interrompa: sem modal surpresa, sem pop-up de newsletter no meio da leitura, sem animação que bloqueia. Atalhos para quem usa muito. | Algo interrompe a tarefa principal sem ter sido pedido? |
| **Gradiente de meta** | A motivação cresce perto do objetivo. | Mostre progresso e o pouco que falta; adiante o primeiro passo (cartão fidelidade com 2 carimbos já dados só se for real). | O progresso está visível no fim do fluxo? |

## 5. Expectativa e modelo mental

| Lei | O que diz | Na interface | Como conferir |
|---|---|---|---|
| **Jakob** | As pessoas esperam que seu site funcione como os outros que já usam. | Logo leva ao início; carrinho no canto; link sublinhado ou claramente link; busca com lupa; formulário com padrões nativos. Inove no visual, não na mecânica. | Alguma interação exige aprender um padrão novo sem ganho real? |
| **Modelo mental** | A ideia simplificada que a pessoa tem de como o sistema funciona. | Use o vocabulário e a organização do público (rótulos do mundo do produto, não do banco de dados). Pense no objeto real que a interface representa. | Os rótulos usam palavras do público? A estrutura bate com como ele pensa a tarefa? |
| **Paradoxo do usuário ativo** | Ninguém lê manual; as pessoas começam a usar na hora. | Ajuda no contexto (dica junto do campo), estados vazios que ensinam a primeira ação, controles que se explicam pela forma. Sem tutorial obrigatório. | Dá para usar a tela sem ler nenhum texto de instrução? |
| **Postel** | Seja liberal no que aceita e conservador no que envia. | Aceite telefone com ou sem máscara, CPF com ou sem pontos, data em vários formatos, colar. Mostre a saída sempre no mesmo formato limpo. | Teste o campo com formatos diferentes do exemplo. |
| **Viés cognitivo** | Erros sistemáticos de raciocínio afetam percepção e decisão. | Conheça (ancoragem, padrão, enquadramento) para não explorar: nada de padrão pré-marcado que prejudica, urgência falsa, "confirmshaming". | Algum padrão do fluxo beneficia a empresa contra o usuário? |

## 6. Emoção e lembrança

| Lei | O que diz | Na interface | Como conferir |
|---|---|---|---|
| **Pico-fim** | A experiência é julgada pelo momento mais intenso e pelo final. | Invista no pico (a ideia-assinatura, a coisa viva) e no fim (confirmação de envio clara e calorosa, página de sucesso desenhada, rodapé que fecha). Cuide também dos piores momentos: erro e espera. | Como é a tela depois do envio? E a de erro? |

## 7. Conferência rápida

Rode na revisão (passo 6), olhando os screenshots:

1. **Jakob / Modelo mental:** navegação, links, formulários e botões funcionam do jeito esperado?
2. **Hick / Sobrecarga:** uma ação principal por tela; escolhas agrupadas ou recomendadas.
3. **Fitts:** alvos ≥ 44 px no celular, ação principal ao alcance.
4. **Doherty:** toda ação tem resposta em < 100 ms e conclusão ou indicador em < 400 ms.
5. **Proximidade / Região comum / Semelhança:** grupos legíveis no squint; clicável parece clicável.
6. **Von Restorff:** acento em 1–3 lugares, todos importantes.
7. **Carga / Chunking / Memória:** nada para memorizar entre telas; textos e números em blocos.
8. **Tesler / Postel / Parkinson:** o sistema faz o trabalho chato; campos aceitam formatos variados.
9. **Pico-fim / Gradiente de meta / Zeigarnik:** fim do fluxo desenhado; progresso visível.
10. **Viés cognitivo:** nenhum padrão enganoso.

Cada "não" vira um problema concreto na lista da rodada (`revisao.md`).
