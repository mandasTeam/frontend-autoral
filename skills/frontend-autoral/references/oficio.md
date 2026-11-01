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
}
html, body { background: var(--farinha); color: var(--casca); }
```

O exemplo é só de formato. Não reaproveite estas cores: a paleta de cada projeto sai do assunto dele.

No Tailwind, os mesmos tokens vão em `theme.extend` (v3) ou `@theme` (v4). Em projeto com
sistema existente, use os tokens dele.

## 2. Tipografia

- Título principal: um momento por página. Em sites, de 2,5× a 6× o corpo, conforme a
  direção. Altura de linha 1 a 1,15 para display; tracking levemente negativo (−0,01 a −0,03em)
  só em tamanhos grandes.
- Use `clamp()` para tamanhos fluidos: `font-size: clamp(2.5rem, 1.6rem + 4vw, 5rem)`.
- `text-wrap: balance` em títulos curtos e `text-wrap: pretty` em parágrafos. Deixe o navegador
  quebrar a linha; não force `<br>` para criar efeito.
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

- **Assimetria com intenção.** Divisões 7/5, 8/4 ou coluna estreita deslocada criam leitura;
  50/50 em tudo achata.
- **Ritmo vertical variado.** Seção leve com respiro menor, seção principal com respiro maior.
  Espaço entre grupos ≥ 2× espaço dentro do grupo.
- **Agrupar por proximidade e alinhamento** antes de recorrer a borda, fundo ou sombra.
- **Largura de texto** limitada (`max-width: 65ch` no corpo), mesmo quando a seção é larga.
- **Um foco por tela.** Se tudo pede atenção, nada recebe.
- **Navegação** curta, com rótulos do vocabulário do produto. No celular, menu acessível
  (botão com `aria-expanded`, foco preso no menu aberto, `Esc` fecha).
- **Rodapé** com o que é útil (contato, endereço, horário, links legais). Sem lista de links
  de enchimento.

## 5. Componentes

- **Botão principal:** um por contexto. Rótulo com verbo e objeto ("Ver o cardápio de hoje").
  Altura ≥ 44 px no toque. Estados: hover (muda contraste ou fundo, não tamanho), focus-visible
  (contorno de 2 px com afastamento), active (desloca 1 px ou escurece), disabled (contraste
  reduzido + `cursor: not-allowed` + motivo perto), loading (texto "Enviando…" e bloqueio de
  duplo envio).
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

## 6. Imagem e mídia

- Prioridade: material real do cliente > foto/ilustração gerada com direção clara > banco de
  imagens com tratamento consistente > página só tipográfica. Página só de tipo, bem feita, é
  melhor que imagem genérica.
- Nunca invente URL de imagem nem use caixa cinza "imagem aqui" na entrega final. Sem imagem,
  deixe um espaço com proporção definida e um marcador visível, e diga no relatório.
- Mesmo tratamento em todas as imagens (enquadramento, cor, recorte).
- `width`/`height` ou `aspect-ratio` em toda imagem; `loading="lazy"` abaixo da dobra;
  `fetchpriority="high"` na imagem do hero; formatos modernos (AVIF/WebP) com fallback.
- 3D e WebGL: só se for a assinatura e o assunto pedir (produto físico, espaço). Uma peça por
  página, com imagem estática de fallback, renderização pausada fora da tela e DPR limitado a 2.

## 7. Movimento

- Função primeiro: feedback de ação, mudança de estado, continuidade entre telas, orientação.
- Duração: 100 a 200 ms para feedback (hover, press); 200 a 350 ms para entrar/sair de
  painéis; até ~600 ms para um único momento orquestrado.
- Easing de saída suave (`cubic-bezier(0.22, 1, 0.36, 1)`) para entradas; `ease-in` curto
  para saídas. Sem bounce ou elástico, salvo se a direção pedir.
- Anime só `transform` e `opacity`. Nunca `transition: all`.
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
