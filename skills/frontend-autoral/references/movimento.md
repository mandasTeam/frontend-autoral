# Movimento e detalhe de interação

Regras de animação e de "sensação" da interface, adaptadas da filosofia de design engineering de
Emil Kowalski (`emilkowalski/skills`: `emil-design-eng`, `review-animations`, `mobile-native`,
`remove-animations`, `find-animation-opportunities`). Os detalhes que ninguém nota conscientemente
são os que, somados, fazem a interface parecer certa.

Este arquivo manda sobre movimento. Onde a taste-skill pede uma cota de elementos animados ou
entrada em cada seção, vale o que está aqui: movimento só com função (por isso o
`scripts/inspecionar.mjs` libera a regra `still-page`).

## Sumário

1. Deve animar?
2. Para quê?
3. Curva
4. Duração
5. Física: escala, origem, pressão
6. Interrompível: transição, não keyframe
7. Molas e gestos
8. Desempenho
9. Acessibilidade e toque
10. Receitas
11. Revisar e podar animações
12. Formato da revisão

---

## 1. Deve animar?

Pergunte quantas vezes a pessoa vai ver aquilo.

| Frequência | Decisão |
|---|---|
| 100+ vezes por dia (atalho de teclado, abrir paleta de comandos) | Nenhuma animação. Nunca. |
| Dezenas de vezes por dia (hover, navegar numa lista) | Tirar ou reduzir muito |
| Ocasional (modal, gaveta, toast) | Animação padrão |
| Rara ou primeira vez (onboarding, confirmação de envio, comemoração) | Pode ter encanto |

**Ação iniciada pelo teclado não anima.** Repetida centenas de vezes, a animação só atrasa. O
Raycast não anima abrir e fechar, e é o certo para algo usado o dia inteiro.

## 2. Para quê?

Toda animação responde "por que isto se move?" com um destes:

- **Feedback:** confirma que a interface ouviu (botão que afunda ao apertar).
- **Estado:** torna a mudança legível (botão que vira "Enviado", acordeão que abre).
- **Consistência espacial:** mostra de onde veio e para onde vai (toast sai pelo mesmo lado que
  entrou; painel cresce a partir do gatilho).
- **Evitar salto brusco:** conteúdo que aparece, some ou muda de lugar sem ponte parece quebrado.
- **Explicação:** demonstrar como algo funciona (marketing, onboarding).

"Fica bonito" não é motivo para algo visto com frequência. Ligado à regra da casa: no máximo um
momento orquestrado por página, e ele é a ideia-assinatura ou a "coisa viva" (`direcao.md`).
Entrada com fade e subida em cada seção é clichê (`cliches.md` §6).

## 3. Curva

```
Entra ou sai da tela?            → ease-out (começa rápido, responde na hora)
Move ou se transforma na tela?   → ease-in-out
Hover, troca de cor?             → ease
Movimento contínuo (progresso)?  → linear
Na dúvida                        → ease-out
```

**Nunca `ease-in` em interface.** Começa devagar justamente no instante em que a pessoa está
olhando; um dropdown com `ease-in` em 300 ms *parece* mais lento que `ease-out` nos mesmos 300 ms.

As curvas nativas do CSS são fracas. Use curvas próprias como tokens:

```css
:root {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);       /* saída forte: entradas, feedback */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);   /* movimento na tela */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);    /* gaveta estilo iOS */
}
```

Para outras curvas, use [easing.dev](https://easing.dev/) ou [easings.co](https://easings.co/) em
vez de inventar. Combine a personalidade: um painel profissional é seco e rápido; um componente
lúdico pode ter um pouco de mola. Sem bounce por padrão.

## 4. Duração

| Elemento | Duração |
|---|---|
| Feedback de pressão | 100–160 ms |
| Tooltip, popover pequeno | 125–200 ms |
| Dropdown, select | 150–250 ms |
| Modal, gaveta | 200–500 ms |
| Explicativo / marketing | pode ser mais longo |

**Animação de interface fica abaixo de 300 ms.** Velocidade percebida importa tanto quanto a
real: spinner girando mais rápido faz o carregamento parecer menor; depois do primeiro tooltip
aberto, os vizinhos abrem sem atraso e sem animação.

**Tempo assimétrico:** devagar onde a pessoa decide (segurar para excluir: 2 s linear), rápido onde
o sistema responde (soltar: 200 ms ease-out). A saída costuma ser mais rápida que a entrada.

## 5. Física: escala, origem, pressão

- **Nada surge do nada:** nunca `scale(0)`. Comece em `scale(0.95)` com `opacity: 0`.
- **Pressão:** todo elemento pressionável responde no `:active` com `transform: scale(0.97)`
  (faixa 0,95–0,98) e `transition: transform 160ms var(--ease-out)`.
- **Popover nasce do gatilho:** `transform-origin` no ponto do gatilho (no Base UI,
  `var(--transform-origin)`; no Radix, `var(--radix-popover-content-transform-origin)`).
  **Modal é exceção:** fica centralizado, origem no centro.
- `translateY(100%)` usa a altura do próprio elemento: prefira porcentagem a pixel fixo para
  esconder gaveta e toast.
- `scale()` escala os filhos (texto, ícone). Para pressão, isso é desejado.
- Crossfade que mostra dois estados sobrepostos: um `filter: blur(2px)` durante a troca funde os
  dois. Blur sempre abaixo de 20 px (pesado no Safari).

## 6. Interrompível: transição, não keyframe

- Transição CSS pode ser interrompida e redirecionada no meio; keyframe recomeça do zero. Para
  algo disparado várias vezes seguidas (toast, alternar estado), use `transition`.
- Entrada sem JavaScript com `@starting-style`:

```css
.toast {
  opacity: 1; transform: translateY(0);
  transition: opacity 250ms var(--ease-out), transform 250ms var(--ease-out);
  @starting-style { opacity: 0; transform: translateY(100%); }
}
```

- Escalonamento (stagger) de itens: 30–80 ms entre cada um, nunca bloqueando clique. Use só onde
  um grupo realmente entra junto (resultado de busca, lista que carregou), não em toda seção.
- Conteúdo visível sem JS e sem animação: o estado final é o padrão; o estado inicial escondido
  fica dentro de `@media (prefers-reduced-motion: no-preference)`.

## 7. Molas e gestos

- Mola para arrastar com impulso, elementos "vivos" e gestos que podem ser revertidos no meio:
  mantém a velocidade quando interrompida. Configuração fácil de raciocinar:
  `{ type: "spring", duration: 0.5, bounce: 0.2 }`. Bounce sutil (0,1–0,3) e só em gesto.
- Valor ligado ao mouse (efeito decorativo): interpole com mola (`useSpring`) em vez de seguir o
  cursor seco. Em interface funcional (gráfico de banco), sem animação.
- **Dispensar por velocidade:** não exija passar de uma distância; se
  `|distância| / tempo > ~0,11`, dispense. Um peteleco basta.
- **Amortecer nos limites:** arrastar além da borda move cada vez menos, sem parede invisível.
- **Pointer capture** ao começar a arrastar; ignore toques extras durante o arraste.
- Todo gesto tem alternativa por clique e teclado (`ux.md` §3).

## 8. Desempenho

- Anime só `transform` e `opacity` (e `clip-path` com moderação). `width`, `height`, `top`,
  `margin`, `padding` passam por layout e pintura.
- Nunca `transition: all`. Liste as propriedades.
- Não mova filhos mudando uma variável CSS no pai a cada quadro: recalcula estilo de todos os
  filhos. Escreva `transform` direto no elemento.
- Motion (Framer Motion): `x`/`y`/`scale` rodam na thread principal e perdem quadros sob carga;
  para algo predeterminado, use `transform: "translateX(...)"` ou CSS.
- CSS anima fora da thread principal; prefira CSS para o predeterminado e JS (ou WAAPI,
  `element.animate()`) para o dinâmico.
- Em React, valor que muda a cada quadro vai para `ref.current.style`, não para estado.
- `will-change: transform` só quando você viu o tremor de 1 px.

## 9. Acessibilidade e toque

- `prefers-reduced-motion`: menos e mais suave, não zero. Mantenha transições de opacidade e cor
  que ajudam a entender; tire deslocamento, escala e parallax.

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

- Hover com movimento só em quem tem mouse: `@media (hover: hover) and (pointer: fine)`. Sem
  isso, o hover "gruda" depois do toque no celular.
- Celular com sensação de app (de `mobile-native`):

| Sintoma | Correção |
|---|---|
| Hover preso após toque | `@media (hover: hover) and (pointer: fine)` |
| Flash cinza/azul ao tocar | `-webkit-tap-highlight-color: transparent` + estado `:active` próprio |
| Altura errada | `100dvh` em app e barra fixa embaixo; `100svh` em hero de site |
| Página dá zoom no campo | `font-size` do campo ≥ 16 px (nunca travar o zoom) |
| Toque parece lento | feedback no `pointerdown`/`:active` + `touch-action: manipulation` |
| Puxar para atualizar sequestra a rolagem | `overscroll-behavior: none` no `html, body` (ou `contain` em modais) |
| Conteúdo atrás do notch | `viewport-fit=cover` + `env(safe-area-inset-*)` |
| Pressão longa seleciona o texto do botão | `user-select: none` só nos controles |
| Carrossel rola na vertical | `touch-action: pan-y` na superfície do gesto |
| Barra de status com cor errada | um `theme-color` por `prefers-color-scheme` |

Diga "corrigido" só depois de ver num aparelho real ou dizer que conferiu só em emulação.

## 10. Receitas

- **Botão:** `transition: transform 160ms var(--ease-out), background-color 150ms ease;`
  `:active { transform: scale(0.97) }`. Hover muda fundo ou contraste, não tamanho.
- **Dropdown/popover:** de `opacity: 0; transform: scale(0.97)` para o normal, 150–200 ms
  `--ease-out`, origem no gatilho. Saída mais rápida.
- **Modal:** fundo com opacidade; conteúdo de `scale(0.96)` + opacidade, 200–250 ms, centralizado.
- **Gaveta:** `translateY(100%)` → 0 com `--ease-drawer`, 300–400 ms; dispensa por velocidade.
- **Toast:** entra e sai pela mesma borda; transições, não keyframes; pausa o tempo com a aba oculta.
- **Revelar imagem ao rolar (só se for a assinatura):** `clip-path: inset(0 0 100% 0)` →
  `inset(0 0 0 0)`, uma vez, com `IntersectionObserver`.
- **Abas com troca de cor perfeita:** duplique a lista de abas no estilo ativo e anime o
  `clip-path` da cópia até a aba escolhida.
- **Segurar para confirmar:** sobreposição com `clip-path` de `inset(0 100% 0 0)` para
  `inset(0 0 0 0)` em 2 s linear no `:active`; volta em 200 ms ease-out.

## 11. Revisar e podar animações

**Podar** (de `remove-animations`): procure animação em atalho de teclado, fade-in em toda seção,
atraso em todo tooltip de um grupo, hover que cresce card, loop de atenção (pulso, bolinha "ao
vivo"). Ao remover:

- remova junto o estado inicial escondido (`opacity: 0` à espera de um observer), senão o elemento
  fica invisível para sempre;
- remova o código que espera a animação (`transitionend`, `onAnimationEnd`, `setTimeout` do
  tamanho da duração, `onExitComplete`);
- se a animação escondia um salto de layout, mantenha-a e registre o salto como problema;
- foco movido no fim da animação passa a mover na hora.

**Procurar oportunidades** (de `find-animation-opportunities`): onde algo aparece, some ou muda de
lugar sem ponte; onde o clique não tem resposta; onde a origem espacial se perde. Passe cada
candidato pelos filtros 1 a 4 e liste também os rejeitados, com o motivo.

**Depurar:** rode em câmera lenta (duração 2 a 5×) ou quadro a quadro no painel Animations do
DevTools; confira se cores cruzam limpas, se a origem está certa e se propriedades coordenadas
andam juntas. Gesto, só confia no aparelho real. Reveja no dia seguinte, com olho descansado.

## 12. Formato da revisão

Achados de movimento e de detalhe de interface saem numa tabela única **Antes | Depois | Por quê**,
uma linha por problema, nunca em lista "Antes:/Depois:":

| Antes | Depois | Por quê |
|---|---|---|
| `transition: all 300ms` | `transition: transform 200ms var(--ease-out)` | Propriedades explícitas; nunca `all` |
| `transform: scale(0)` | `transform: scale(0.95); opacity: 0` | Nada surge do nada |
| `ease-in` no dropdown | `var(--ease-out)` em 180 ms | `ease-in` atrasa o primeiro instante |
| Botão sem `:active` | `:active { transform: scale(0.97) }` | Pressão precisa de resposta |
| Popover com origem no centro | origem no gatilho | Popover nasce de onde foi chamado (modal não) |
| Hover sem media query | `@media (hover: hover) and (pointer: fine)` | Toque dispara hover falso |
| Mesma velocidade para entrar e sair | saída mais curta que a entrada | Sistema respondendo é rápido |
