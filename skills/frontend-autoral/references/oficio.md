# Ofício: tipografia, cor, composição, componentes e movimento

Valores concretos para transformar a direção de arte em interface. São faixas de partida, não
leis; a direção do projeto manda quando discordar.

## Sumário

1. Tokens
2. Tipografia
3. Cor
4. Composição e seções
5. Componentes
6. Imagem e mídia
7. Movimento
8. Ajustes (mais ousado, mais calmo, mais claro)

---

## 1. Tokens

Declare tudo antes de estilizar qualquer componente. Nenhum valor solto no CSS.

```css
:root {
  /* cor: nomes do mundo do assunto, papéis nos comentários */
  /* exemplo: padaria com balcão de azulejo português */
  --farinha: #EEF0EA;   /* fundo */
  --casca:   #3B2A1E;   /* texto, ~11.8:1 */
  --azulejo: #1F4E8C;   /* acento, ~7.2:1, só links e 1 CTA */
  /* tipo */
  --font-display: "Nome", serif;
  --font-text: "Nome", sans-serif;
  --step-0: 1rem; --step-1: 1.25rem; --step-2: 1.563rem; /* razão 1.25 */
  /* espaço */
  --space-1: .25rem; --space-2: .5rem; --space-3: .75rem; --space-4: 1rem;
  --space-6: 1.5rem; --space-10: 2.5rem; --space-16: 4rem; --space-26: 6.5rem;
  /* forma */
  --radius-field: 2px; --radius-media: 0;
  /* movimento (movimento.md) */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --dur-press: 160ms; --dur-pop: 200ms; --dur-panel: 300ms;
}
html, body { background: var(--farinha); color: var(--casca); }
```

O exemplo é só de formato. Não reaproveite estas cores: a paleta de cada projeto sai do assunto dele.

No Tailwind, os mesmos tokens vão em `theme.extend` (v3) ou `@theme` (v4). Em projeto com
sistema existente, use os tokens dele.

## 2. Tipografia

- Título principal: um momento por página. Em sites, de 3× a 6× o corpo, conforme a direção (a
  razão mediana título/corpo nos sites estudados pela taste-skill é 4,3; os melhores vão além).
  Altura de linha 0,9 a 1,1 para display; tracking negativo (−0,02 a −0,04em) só em tamanhos
  grandes.
- **Dois ou três tamanhos fazem o trabalho visível:** um muito grande, um pequeno, pouco no meio.
  Teto de cinco tamanhos na página.
- **Todo título cabe em duas linhas ou menos, em toda largura** (390, 768, 1440). Corte palavras
  primeiro, alargue a medida depois, reduza o tamanho por último. A conta está em `copy.md` §4.
- Use `clamp()` para tamanhos fluidos: `font-size: clamp(2.5rem, 1.6rem + 4vw, 5rem)`.
- `text-wrap: balance` e `max-width` em `ch` nos títulos; `text-wrap: pretty` em parágrafos. Não
  force `<br>` para criar efeito; ele só vale para evitar uma quebra ruim, e precisa ser conferido
  no screenshot do celular.
- Alinhado à esquerda por padrão; centralize no máximo um momento.
- Frase de destaque grande (manifesto, citação) é `<p>` ou `<blockquote>`, até 36 px no desktop
  (24 px no celular) e ~25 palavras. Maior que isso vira título e a regra das duas linhas vale.
- Hierarquia com poucos recursos: tamanho e espaço primeiro, peso depois, cor por último.
  Raramente precisa de mais de 2 pesos por família.
- Números em tabela e preço: `font-variant-numeric: tabular-nums`.
- Pontuação tipográfica: aspas curvas (“ ”), reticências (…), `&nbsp;` entre número e unidade
  (10&nbsp;kg, R$&nbsp;9).
- Carregue só os pesos usados. `font-display: swap`; `<link rel="preload">` na fonte do título.

## 3. Cor

- Uma cor de fundo dominante, uma de texto, 1 ou 2 neutros tingidos, um acento. O acento marca
  ação ou foco e aparece em poucos tipos de elemento (por exemplo: links, botão principal,
  estado selecionado).
- Hierarquia de texto com tons da mesma família (texto, apoio, desabilitado), não com cores novas.
  Texto corrido vai na tinta cheia; o tom de apoio é para notas secundárias.
- Superfícies se separam por um pequeno degrau de tom, não por linha nem sombra. Uma seção pode
  trocar o campo de cor inteiro; nada "dissolve" em nada.
- Texto cinza sobre fundo colorido fica sujo; use um tom mais escuro ou mais claro do próprio fundo.
- Cor de estado (erro, sucesso, aviso) nunca sozinha: acompanha texto ou ícone.
- Tema escuro: não é inverter. Superfícies sobem de tom para mostrar elevação, acento perde um
  pouco de saturação, texto principal não é branco puro. Use `color-scheme: dark`.
- Textura (grão, retícula, papel) só se fizer parte da direção, com opacidade baixa
  (≈ 0,03 a 0,08) e sem custo de desempenho perceptível.

## 4. Composição e seções

Cada seção escolhe sua forma pelo conteúdo. Repertório, para sair do "título + 3 cards":

| Conteúdo | Formas possíveis |
|---|---|
| Uma ideia principal | texto grande ancorado à esquerda ou embaixo; imagem sangrada; texto sobre imagem |
| Sequência, processo | lista numerada vertical; linha do tempo; passos com imagem alternando lado |
| Itens equivalentes | lista tipográfica com régua; tabela; índice; grade irregular (tamanhos diferentes por importância) |
| Comparação | tabela de verdade; duas colunas desiguais; antes/depois |
| Prova real | citação grande com nome e contexto verificável; logo real; foto de trabalho real |
| Detalhe técnico | texto corrido com notas laterais; diagrama; código |
| Pergunta frequente | `<details>` simples, sem caixa em volta |

Regras:

- **A moldura (medida pelo inspetor):** uma grade, um par de margens externas iguais em toda
  largura (16–32 px), coisas grandes podem sangrar até a borda. Os blocos de texto da página
  inteira dividem 2 ou 3 bordas esquerdas, reaproveitadas de propósito.
- **Assimetria com intenção, dentro da grade.** Divisões 7/5, 8/4 ou coluna estreita deslocada
  criam leitura; 50/50 em tudo achata. Mas a assimetria nunca está na moldura: se o texto ocupa
  metade da seção, a outra metade tem a imagem, a segunda coluna, a lista ou a figura dela, nunca
  nada.
- **Ritmo vertical variado.** Seção leve com respiro menor, seção principal com respiro maior.
  Espaço entre grupos ≥ 2× espaço dentro do grupo; entre seções, 120–240 px no desktop. Nenhum
  trecho maior que meia tela fica sem nada.
- **Vizinhas não repetem forma.** Dê uma palavra para a forma de cada seção (dividida, lista,
  sangrada, grade, frase, índice); a mesma palavra duas vezes seguidas, ou três na página, é o
  template aparecendo. Nenhuma é grade de cards por reflexo.
- **Cada tela é um cartaz** no desktop: uma coisa dominante e o conteúdo que ela carrega. Tela
  quase vazia é seção mal construída, não descanso (um descanso deliberado por página, no máximo).
- **Toda seção que a pessoa veio procurar abre com um título que a nomeia**; a primeira dobra tem
  o título da página no único `h1`.
- **Agrupar por proximidade e alinhamento** antes de recorrer a borda, fundo ou sombra.
- **Largura de texto** limitada (`max-width: 65ch` no corpo), mesmo quando a seção é larga.
- **Um foco por tela.** Se tudo pede atenção, nada recebe.
- **Navegação** curta: nome ou logo, 3 a 5 links com rótulos do vocabulário do produto, uma ação.
  Barra simples, sem pílula flutuante nem blur. Funciona como qualquer navegação (Lei de Jakob,
  `leis-ux.md`). No celular, menu acessível (botão com `aria-expanded`, foco preso no menu
  aberto, `Esc` fecha).
- **Rodapé** é um fechamento desenhado, não um mapa do site: o que é útil (contato, endereço,
  horário, links legais, créditos de imagem) e, muitas vezes, o nome de volta em escala grande. É
  o "fim" da regra pico-fim.

## 5. Componentes

- **Botão principal:** um por contexto, botão de verdade na primeira dobra. Rótulo com verbo e
  objeto ("Ver o cardápio de hoje"). Chapado, uma cor de preenchimento, sem gradiente nem sombra.
  Canto reto ou totalmente redondo, decidido uma vez para a página. Altura ≥ 44 px no toque.
  Estados: hover (muda contraste ou fundo, não tamanho, só com
  `@media (hover: hover) and (pointer: fine)`), focus-visible (contorno de 2 px com afastamento),
  active (`transform: scale(0.97)` em 160 ms `--ease-out`, `movimento.md` §5), disabled
  (contraste reduzido + `cursor: not-allowed` + motivo perto), loading (texto "Enviando…" e
  bloqueio de duplo envio).
- **Botão secundário:** visual claramente subordinado. Link de texto muitas vezes basta.
- **Card:** só quando o item é uma unidade clicável ou independente (produto, artigo, projeto).
  O card inteiro clicável tem um link principal e área de clique coerente.
- **Formulário:** rótulo visível acima do campo, ajuda abaixo, erro abaixo em texto + cor.
  Detalhe em `ux.md`.
- **Ícones:** só para função (busca, fechar, menu, externo, download) ou quando acelera o
  reconhecimento numa lista densa. Um estilo só (traço e tamanho iguais). Ícone sozinho
  precisa de `aria-label`.
- **Tabela:** cabeçalho fixo em listas longas, números alinhados à direita com `tabular-nums`,
  linhas sem zebra quando o espaçamento já separa.
- **Estado vazio:** diz o que é, por que está vazio e a próxima ação.
- **Controle que se explica pela forma**, pelo rótulo e pelo lugar. Se parece precisar de uma
  frase dizendo como usar, redesenhe o controle. O que o campo aceita é outra coisa: primeiro tire
  o limite (seletor de data, parser que aceita qualquer formato comum); limite que sobra (regra de
  senha, tipo e tamanho de arquivo) fica visível ao lado do campo e ligado por `aria-describedby`.
- **Popover, menu, tooltip:** nascem do gatilho (`transform-origin`), tooltips vizinhos abrem sem
  atraso depois do primeiro. Sombra só no que flutua de verdade.
- **Detalhes que somam** (cheatsheet de Emil Kowalski): avatar com `flex-shrink: 0` para não
  virar oval; número que muda com `tabular-nums` para não tremer; data relativa vira absoluta
  depois de uma semana ("há 340 dias" não); plural com `Intl.PluralRules` ("1 membros" não).

## 6. Imagem e mídia

- Prioridade: material real do cliente > imagem gerada com direção clara > imagem real do mundo
  do assunto em acervo aberto > desenho em código do próprio assunto > página só tipográfica.
  Página só de tipo, bem feita, é melhor que imagem genérica. Busca, créditos, recorte e
  tratamento em `imagens.md`.
- Nunca invente URL de imagem nem use caixa cinza "imagem aqui" na entrega final. Sem imagem,
  deixe um espaço com proporção definida e um marcador visível, e diga no relatório.
- Mesmo tratamento em todas as imagens (enquadramento, cor, recorte).
- `width`/`height` ou `aspect-ratio` em toda imagem; `loading="lazy"` abaixo da dobra;
  `fetchpriority="high"` na imagem do hero; formatos modernos (AVIF/WebP) com fallback.
- 3D e WebGL: só se for a assinatura e o assunto pedir (produto físico, espaço). Uma peça por
  página, com imagem estática de fallback, renderização pausada fora da tela e DPR limitado a 2.

## 7. Movimento

Construa a página com o movimento desligado na cabeça: página que precisa de animação para
parecer pronta não está pronta. O movimento vem depois, decidido por `movimento.md`. Resumo:

- Deve animar? Ação de teclado e coisa vista centenas de vezes por dia: não. Função primeiro:
  feedback, mudança de estado, consistência espacial, evitar salto, explicação.
- Duração: 100–160 ms pressão; 125–250 ms tooltip, popover, dropdown; 200–500 ms modal e gaveta;
  interface abaixo de 300 ms. Um único momento orquestrado pode ir a ~600 ms.
- Curva: `ease-out` forte (`cubic-bezier(0.23, 1, 0.32, 1)`) para entrar e sair; `ease-in-out`
  para mover na tela; **nunca `ease-in`**. Saída mais rápida que entrada. Sem bounce por padrão.
- Nada surge de `scale(0)` (comece em 0,95 com opacidade); popover nasce do gatilho; botão afunda
  para 0,97 no `:active`.
- Anime só `transform` e `opacity`. Nunca `transition: all`. Transição (interrompível) em vez de
  keyframe no que dispara repetido.
- Animação interrompível; nada bloqueia o clique.
- Conteúdo visível sem JS: estado final é o padrão, a animação é melhoria.
- Animação automática de mais de 5 s precisa de botão de pausa.
- Sempre:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- Biblioteca de animação só se o projeto já usa ou se o momento orquestrado pedir. CSS e a
  View Transitions API resolvem a maioria dos casos.

## 8. Ajustes

Quando o pedido é de intensidade, mude dentro da direção existente, sem trocar identidade.

- **Mais ousado:** aumente o contraste de escala (título maior, corpo igual), deixe uma cor
  dominar mais área, quebre a grade em um ponto, aumente a presença da assinatura. Não é
  adicionar gradiente, glow ou neon.
- **Mais calmo:** reduza saturação (70 a 85%), diminua o número de cores visíveis por tela,
  aumente respiros, tire animação, tire um acessório.
- **Mais claro (clareza):** reduza o número de elementos por tela, um CTA principal, rótulos
  mais concretos, hierarquia de tamanho mais nítida.
- **Mais vivo:** imagem real, microcopy específica (horário, endereço, nome de pessoa real),
  um detalhe de interação ligado ao produto.
