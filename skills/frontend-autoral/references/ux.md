# UX, acessibilidade e implementação

Fundamentos que valem para qualquer direção de arte. Ficam "invisíveis" quando bem feitos e
derrubam a experiência quando faltam. Baseado nas Web Interface Guidelines da Vercel, WCAG 2.2
e heurísticas de Nielsen.

## Sumário

1. Princípios de UX
2. Semântica e acessibilidade
3. Foco e teclado
4. Formulários
5. Estados
6. Responsividade e toque
7. Desempenho
8. Detalhes de conteúdo e localização
9. Dados de pior caso

---

## 1. Princípios de UX

As 30 leis de UX (Hick, Fitts, Jakob, Miller, Doherty, Gestalt, pico-fim...) aplicadas, com uma
forma de conferir cada uma, estão em `leis-ux.md`. Abaixo, o mínimo de toda tela.

- **Tarefa principal primeiro.** O que a pessoa veio fazer precisa estar visível e acionável
  sem esforço. Tudo o resto é secundário.
- **Visibilidade do estado.** A interface sempre mostra o que está acontecendo: carregando,
  salvo, erro, vazio, selecionado.
- **Linguagem do usuário.** Rótulos com as palavras do público, não do banco de dados
  ("Avisos por e-mail", não "Config. de webhook").
- **Controle e reversão.** Ação destrutiva pede confirmação ou oferece desfazer. Modal fecha com
  `Esc` e clique fora (quando não houver perda de dados).
- **Consistência.** O mesmo verbo do botão aparece no resultado ("Publicar" → "Publicado").
  Componentes iguais se comportam igual.
- **Prevenir erro antes de explicar erro.** Formato aceito visível, máscara branda, valores
  padrão sensatos.
- **Reconhecer em vez de lembrar.** Opções visíveis, histórico recente, rótulos sempre presentes
  (placeholder não é rótulo).
- **Carga cognitiva baixa.** Poucas escolhas por vez, agrupamento claro, divulgação progressiva
  para o avançado.
- **Lei de Fitts.** Alvos importantes grandes e perto de onde a atenção está.
- **Lei de Jakob.** Visual autoral, mecânica convencional: navegação, links, formulários e
  carrinho funcionam como em qualquer site.
- **Limiar de Doherty.** Resposta visível em ≤ 100 ms a todo clique e conclusão ou indicador em
  < 400 ms; UI otimista e esqueleto em vez de tela branca.
- **Lei de Postel.** Aceite formatos variados na entrada (telefone com ou sem máscara, data em
  vários formatos, colar), devolva sempre limpo e no mesmo formato.
- **A URL reflete o estado** (filtro, aba, página) para poder compartilhar e voltar.

## 2. Semântica e acessibilidade

- `<button>` para ação, `<a href>` para navegação. Nunca `div` com `onClick`.
- Landmarks: `header`, `nav`, `main`, `footer`; um `h1` por página; títulos em ordem, sem pular
  nível.
- Link "Pular para o conteúdo" como primeiro elemento focável.
- `alt` descritivo em imagem com conteúdo; `alt=""` em imagem decorativa; `aria-hidden="true"`
  em ícone decorativo.
- Botão só com ícone: `aria-label`.
- Mensagens dinâmicas (toast, validação, resultado de busca): `aria-live="polite"`.
- `lang="pt-BR"` no `<html>`.
- Contraste: texto ≥ 4,5:1, texto grande e componentes ≥ 3:1. Confira com valores, não a olho.
- Nada só por cor: erro tem texto, link no meio de texto tem sublinhado ou outro sinal além da cor.
- Zoom liberado: nunca `maximum-scale=1` ou `user-scalable=no`. Layout aguenta 200% de zoom.
- Prefira primitivas acessíveis já existentes no projeto (Radix, React Aria, Headless UI,
  Angular CDK) para menu, diálogo, combobox, abas.

## 3. Foco e teclado

- `:focus-visible` com contorno claro (≥ 2 px, contraste ≥ 3:1). Nunca remover `outline` sem
  substituto.
- Ordem de tabulação segue a ordem visual.
- Diálogo: foco vai para dentro ao abrir, fica preso enquanto aberto, volta ao gatilho ao fechar.
- Cabeçalho fixo não pode cobrir o elemento focado: `scroll-padding-top` no `html`.
- Todo gesto (arrastar, deslizar) tem alternativa por clique e teclado.

## 4. Formulários

- Rótulo visível e ligado ao campo (`<label for>`), clicável.
- `type`, `inputmode` e `autocomplete` corretos (`email`, `tel`, `postal-code`, `cc-number`...).
- Nunca bloquear colar.
- Placeholder como exemplo ("ex.: 01310-100"), nunca como rótulo.
- Erro inline, abaixo do campo, dizendo como corrigir. Ao enviar com erro, foco no primeiro
  campo inválido e resumo no topo em formulários longos.
- Validar ao sair do campo, não a cada tecla. Não acusar erro antes de a pessoa terminar.
- Botão de envio habilitado até o envio começar; depois, estado de carregando e bloqueio de
  duplo clique.
- Avisar antes de sair com alterações não salvas.
- Campos opcionais marcados como "(opcional)", em vez de asterisco em todos os obrigatórios.

## 5. Estados

Para cada componente interativo, pense em todos que se aplicam:

| Estado | O que mostrar |
|---|---|
| Padrão | o componente em repouso |
| Hover | mudança de contraste ou fundo; sem crescer |
| Focus-visible | contorno claro |
| Active / pressionado | resposta imediata (≤ 100 ms) |
| Disabled | contraste reduzido e o motivo por perto |
| Loading | esqueleto com a forma do conteúdo ou indicador + "Carregando…" |
| Vazio | o que é, por que está vazio, próxima ação |
| Erro | o que aconteceu e como resolver, sem pedir desculpas em excesso |
| Sucesso | confirmação com o mesmo verbo da ação |
| Conteúdo extremo | texto muito longo, nome sem espaço, lista com 0, 1 e 500 itens |

Teste com conteúdo curto, médio e muito longo. Use `min-width: 0` em filhos de flex e
`overflow-wrap: anywhere` onde o usuário digita.

## 6. Responsividade e toque

- Comece pelo celular ou confira o celular com o mesmo cuidado do desktop. Larguras de teste:
  360, 390, 768, 1024, 1440.
- Composição muda de verdade no celular: o que era duas colunas vira ordem de leitura pensada,
  não só empilhamento.
- Alvos de toque ≥ 44 × 44 px, com espaço entre eles.
- `100dvh` em app e barra fixa embaixo; `100svh` em hero de site (não pula ao rolar).
  `env(safe-area-inset-*)` em barras fixas, com `viewport-fit=cover` no meta viewport.
- Sem rolagem horizontal acidental. Tabelas largas rolam dentro do próprio container.
- `touch-action: manipulation` em controles; `overscroll-behavior: contain` em modais e gavetas.
- Hover não pode ser o único caminho para uma informação (não existe hover no toque); hover com
  efeito fica em `@media (hover: hover) and (pointer: fine)`.
- Campo com `font-size` ≥ 16 px (senão o iOS dá zoom); `-webkit-tap-highlight-color: transparent`
  com um `:active` próprio. Tabela completa de sensação de app em `movimento.md` §9.
- Tipografia fluida com `clamp()`; imagens com `srcset`/`sizes`.

## 7. Desempenho

- Nenhum efeito visual vale um LCP lento. Meta: LCP < 2,5 s, CLS < 0,1, INP < 200 ms.
- Imagem do hero com dimensões, prioridade alta e formato moderno.
- Fontes: só os pesos usados, `woff2`, `font-display: swap`, preload da principal.
- Vídeo curto em vez de GIF (`muted autoplay loop playsinline`, com poster).
- Listas longas (> 50 itens): virtualização ou `content-visibility: auto`.
- Scripts de terceiros carregados depois da interação inicial.
- Sem medir layout no JS quando CSS (grid, flex, container queries) resolve.
- React/Next: sem waterfall de requisições (`Promise.all`), componentes pesados com import
  dinâmico, não declarar componente dentro de componente, sem estado derivado em `useEffect`,
  script inline para o tema não piscar na hidratação.

## 8. Detalhes de conteúdo e localização

- Datas, números e moedas com `Intl` (`pt-BR`): 1.234,56; R$ 9,90; 1º de novembro de 2026.
- Nome de marca e código: `translate="no"`.
- `<meta name="theme-color">` com a cor de fundo, um por `prefers-color-scheme` se houver tema
  escuro; `color-scheme` coerente.
- Título da página e `meta description` específicos, não "Home | Empresa".
- Favicon e ícones próprios, não o padrão do framework: `favicon.svg` + `favicon.ico`,
  `apple-touch-icon` 180, ícones 192/512 e `maskable` no `site.webmanifest` (`icones.md`).
- `select` nativo com cores explícitas (no tema escuro o Windows mostra branco se não definir).

## 9. Dados de pior caso

Adaptado de `break-ui` (Emil Kowalski). Antes de dar a tela por pronta, troque os dados de exemplo
pelos piores realistas e olhe de novo. Domínios de teste: `example.com`, `.test`.

| Tipo | Valores para testar | O que quebra |
|---|---|---|
| Nomes | `Maria Aparecida dos Santos Albuquerque-Figueiredo`, `Jo`, `J`, `João D'Ávila`, `王秀英`, `نور الهدى` (RTL), `🦊 Raposa`, nome ausente | linha que estoura, iniciais erradas (`charAt(0)` parte emoji), RTL sem `dir="auto"`, falta de fallback |
| E-mails, URLs, IDs | `bartolomeu.fitzgerald@industrias-reunidas-do-nordeste.example.com`, URL longa com query, UUID, `Relatório FINAL (revisado) v12 [aprovado].pdf` | texto sem espaço empurra a linha (`overflow-wrap: anywhere`), truncamento no fim esconde o que importa (prefira truncar no meio) |
| Rótulos e textos | cargo de três linhas, `Configurações de privacidade e segurança`, 12 etiquetas num item, título vazio ou só espaços, `<script>alert(1)</script>`, texto colado de 2.000 caracteres | quebra em parede de etiquetas (use `+8`), linha de altura zero, escape, falta de "ver mais" |
| Números e dinheiro | `0`, `1`, `1284`, `1000000`, `R$ 12.345.678,90`, `-42,5`, `0.1 + 0.2`, `142%`, `null`/`NaN`, valor que muda ao vivo | plural ("1 itens"), separador de milhar, coluna de total estourada, barra além de 100%, `NaN` na tela, tremor sem `tabular-nums` |
| Coleções | 0, 1, exatamente o tamanho da página e +1, 1.000+ sem paginação, um item 10× maior, nomes repetidos | estado vazio inexistente, grade "quebrada" com 1 item, página 2 vazia, rolagem lenta |
| Tempo | agora, 12 dias, 11 meses, 3 anos, data futura, `1970-01-01`, virada de dia por fuso | "há 0 segundos", relativo eterno (vire data absoluta após ~1 semana), "há -3 dias" |
| Imagens | avatar que dá 404, sem avatar, panorama 4000×200, retrato 200×4000, logo transparente escuro no tema escuro, imagem lenta | ícone quebrado sem fallback de iniciais, distorção sem `object-fit`, CLS sem `aspect-ratio` |
| Estados | carregando, erro da API, dados parciais, todos os status juntos, sem permissão, o próprio usuário na lista | esqueleto diferente do final, erro cru (`TypeError...`), linhas desalinhadas, ações que não se aplicam a si mesmo |
| Ambiente | container de 320 px, coluna lateral de 280 px, tela de 2560 px, zoom 200%, tema escuro, `dir="rtl"`, toque | tudo acima ao mesmo tempo, linhas longas demais, alturas fixas cortando texto, ações só no hover |

Use `Intl.NumberFormat`, `Intl.DateTimeFormat`, `Intl.RelativeTimeFormat` e `Intl.PluralRules`
com `pt-BR`, nunca string montada à mão.
