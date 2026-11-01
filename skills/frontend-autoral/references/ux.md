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

---

## 1. Princípios de UX

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
- `100dvh` em vez de `100vh`; `env(safe-area-inset-*)` em barras fixas.
- Sem rolagem horizontal acidental. Tabelas largas rolam dentro do próprio container.
- `touch-action: manipulation` em controles; `overscroll-behavior: contain` em modais e gavetas.
- Hover não pode ser o único caminho para uma informação (não existe hover no toque).
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
- `<meta name="theme-color">` com a cor de fundo; `color-scheme` coerente.
- Título da página e `meta description` específicos, não "Home | Empresa".
- Favicon próprio, não o padrão do framework.
- `select` nativo com cores explícitas (no tema escuro o Windows mostra branco se não definir).
