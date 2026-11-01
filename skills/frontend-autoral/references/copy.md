# Copy: textos de interface que não parecem de IA

Texto é metade da interface. Copy genérica anula qualquer direção de arte, porque é a primeira
coisa que denuncia o template. As regras abaixo valem para títulos, botões, menus, erros,
estados vazios e microcopy. Baseado na skill `humanizar`, nas writing guidelines da Vercel e no
`copy.md` da taste-skill. Escreva a página inteira como texto puro (um roteiro de copy) **antes**
do markup.

## 1. O argumento

Responda em uma linha cada, numa nota de rascunho:

- Quem lê, e o que já sabe?
- O que é isto, dito como o dono diria a um amigo?
- Que única coisa a pessoa deve acreditar depois da primeira tela?
- O que a faria acreditar (a foto da coisa, um número, um nome, uma demonstração)?
- O que ela faz em seguida?

Depois liste a página como afirmações, uma por seção, cada uma com sua prova:

```
1. É um banco de três pés em carvalho, feito sob encomenda.     → o banco, grande
2. Cada assento sai de uma tábua só, o veio é só seu.            → três detalhes de perto
3. Leva seis semanas, e dá para acompanhar.                      → as etapas, fotografadas
4. Custa R$ 1.240 e o marceneiro entrega.                        → preço, botão
```

Seção sem afirmação é enchimento: corte. A ordem do argumento é a ordem da página.

**Conteúdo completo.** Cada seção pedida entrega a informação inteira: o cardápio todo com
preços, cada quarto com seus detalhes, cada palestrante e palestra, o preço com o que inclui, uma
resposta para cada pergunta real. Seção rala é o motivo mais comum de uma página limpa perder para
uma mais cheia.

**Detalhe de amostra x prova inventada.** Onde o brief deixa lacuna em *detalhes de conteúdo*
(nome dos pratos, nome e diária dos quartos, título dos projetos), use amostras plausíveis para ver
o design na densidade real e **liste-as no relatório** para o cliente confirmar. *Prova* nunca se
inventa (§2).

## 2. Trava de fatos

A regra mais importante deste arquivo.

- Não invente número, cliente, depoimento, avaliação, prêmio, preço, prazo, endereço,
  integração, certificação ou funcionalidade.
- Use o que o usuário deu, o que está no código ou no repositório, e o que dá para confirmar.
- Falta dado? Escreva a frase verdadeira mais simples ou deixe um marcador visível:
  `[depoimento real com nome e cargo]`, `[número de clientes, se houver]`. Avise no relatório
  quais marcadores ficaram.
- Uma seção que só existe para mostrar prova social que não existe é cortada, não preenchida.

## 3. Tom

- Direto, no registro do público. Uma padaria fala diferente de uma consultoria tributária.
- Voz ativa, frases curtas (até ~20 palavras), "você" quando falar com a pessoa.
- Concreto em vez de abstrato: o que o produto faz, para quem, com que resultado verificável.
  "Emite nota fiscal de MEI em 2 minutos pelo celular" vence "Simplifique sua gestão".
- Uma função por elemento. Título diz o que é; texto de apoio diz o detalhe; botão diz a ação.
- Sem frase de efeito em toda seção. No máximo uma linha com mais personalidade por página,
  e só se o tom do produto pedir.
- Humor só se vier do usuário ou de um fato real do produto.

## 4. Títulos

- Descrevem a seção ou afirmam algo concreto. Nada de título enigmático que precisa do texto
  para fazer sentido.
- Caixa de frase ("Como funciona a entrega"), não Caixa De Título.
- O primeiro título da página diz o que é o produto em linguagem que o público usa. Se o título é
  um nome ou uma figura de linguagem, a frase logo abaixo (32–48 px de distância, visível junto)
  diz claramente o que a coisa é.
- **A primeira tela responde a primeira pergunta do visitante em letra grande.** Evento: o que é,
  quando e onde (a data no título ou no segundo tamanho, nunca só em letra miúda). Produto: o que
  é e quanto custa ou o que faz. Pessoa: quem é e o que faz.
- Sem pergunta retórica como título ("Cansado de planilhas?").
- **Duas linhas ou menos, em toda largura.** O título é lido num relance; a mediana dos sites
  estudados é 5 palavras e ~32 caracteres. Faça a conta antes de se apegar à frase:

```
caracteres por linha ≈ largura da linha em px ÷ (tamanho da fonte em px × k)
k ≈ 0,40 condensadas · 0,50 grotescas e serifas em display · 0,58 largas ou caixa-alta
```

| Onde | Largura | Tamanho | Por linha | Orçamento de 2 linhas |
|---|---|---|---|---|
| Celular 390, margens de 20 | 350 px | 44 px | ~16 | **~32 caracteres** |
| Celular 390 | 350 px | 34 px | ~21 | ~42 caracteres |
| Tablet 768 | 690 px | 64 px | ~22 | ~44 caracteres |
| Desktop, medida de 12 colunas | 1100 px | 104 px | ~21 | ~42 caracteres |
| Desktop, meia largura | 620 px | 72 px | ~17 | ~34 caracteres |

  Português tem palavras mais longas que inglês: conte caracteres, não palavras. Título de seção
  tem 2 a 5 palavras. Nunca resolva título longo só diminuindo a fonte: 5 palavras em 64 px vencem
  9 palavras tímidas em 28 px. Evite palavra sozinha na segunda linha cortando uma palavra, não
  mexendo na largura.

## 5. Botões e links

- Verbo + objeto, dizendo o que acontece: "Reservar mesa", "Baixar o cardápio (PDF, 2 MB)",
  "Salvar alterações".
- Cada CTA diferente conforme o contexto. "Saiba mais", "Comece agora", "Clique aqui" em todo
  lugar não dizem nada.
- O mesmo verbo segue pelo fluxo: "Enviar pedido" → "Pedido enviado".
- Link com texto que faz sentido fora de contexto (leitores de tela listam links).

## 6. Erros, vazios e confirmação

- Erro: o que aconteceu + como resolver. "O CEP precisa ter 8 dígitos." Sem culpar, sem
  "Ops!", sem desculpas exageradas.
- Vazio: convite à primeira ação. "Nenhum pedido ainda. Os pedidos feitos pelo site aparecem
  aqui."
- Confirmação destrutiva: diz o que será perdido. "Excluir o projeto Casa Aurora? As 14 pranchas
  serão apagadas." Botões "Excluir projeto" e "Cancelar", não "Sim" e "Não".
- Carregando: "Carregando pedidos…", com reticência tipográfica.

## 7. Vocabulário e estruturas a evitar

**Palavras de IA em pt-BR** (troque pelo concreto ou corte): inovação, inovador, revolucionário,
disruptivo, transformador, transformar, potencializar, alavancar, impulsionar, otimizar (quando
vago), excelência, robusto, escalável, sem fricção, perfeito, incrível, poderoso, ecossistema,
jornada, experiência única, solução completa, de ponta, next-gen, AI-powered, crucial,
fundamental, essencial, cenário, no âmbito de, mergulhar, desbloquear, holístico, sinergia,
catalisador, orquestrar, elevar, simples (quando não provado), fácil, rápido (sem número).

**Frases-fantasma:** "Transformando o futuro com inovação", "Uma nova era começa agora",
"Potencialize seus resultados", "Leve seu negócio ao próximo nível", "Feito para quem faz
acontecer", "Tudo o que você precisa em um só lugar", "O futuro é agora".

**Estruturas repetitivas:**
- "Não apenas X, mas também Y."
- Tríades forçadas ("Rápido. Simples. Seguro.").
- Pergunta e resposta própria ("O resultado? Mais vendas.").
- Travessão para aparte ou efeito em toda frase. Use vírgula, dois-pontos ou ponto.
- Parágrafo abrindo com "Além disso", "Por outro lado", "Em suma".
- Máxima de camiseta ("X não é ferramenta, é estilo de vida").
- Sinônimos em rodízio para a mesma coisa (ferramenta → solução → plataforma). Escolha um nome
  e mantenha.
- Gerundismo ("vamos estar enviando"), oficialês ("configura-se como").
- Fechamento otimista genérico no fim de toda seção.

**Rótulos performáticos** (moda de galeria): "Notas de campo", "Na nossa mesa", "Discretamente
confiável por", "Índice", "Capítulo um" em seção que não é capítulo. Nomeie a seção pelo que ela
é ("Cardápio", "Como chegar", "Preços").

**Mantenha:** anglicismos naturais da área (login, deploy, dashboard, checkout) quando o
público usa. Traduzir à força também soa artificial.

## 8. Conferência rápida

Antes de entregar, leia todos os textos da página em sequência e pergunte:

1. Algum texto serviria no site de outra empresa? Reescreva com um detalhe específico.
2. Algum dado não tem fonte? Troque por marcador ou corte.
3. Algum botão diz "Saiba mais" ou "Comece agora" sem contexto?
4. Há mais de 2 travessões na página inteira? Reescreva.
5. Alguma palavra da lista do §7 sobrou?
6. Algum título passa de duas linhas em 390 px? Alguma seção está rala?
7. As amostras de conteúdo estão listadas para o relatório?

O lint (`scripts/inspecionar.mjs --src`) pega frases de marketing em inglês, "Learn more",
travessões demais e lorem ipsum; o vocabulário em pt-BR é com você.
