---
name: frontend-autoral
description: "Use ao criar, redesenhar ou revisar sites, landing pages, telas de app, dashboards ou componentes de interface (HTML/CSS, React, Next, Vue, Angular, Tailwind), e ao criar logo, ícone de app ou favicon de um projeto. Define uma direção de arte própria para cada projeto a partir do assunto, aplica as leis de UX, acessibilidade e o padrão de animação de Emil Kowalski, mede o resultado num navegador real contra uma lista de clichês de interface gerada por IA e corrige olhando screenshots. Use também quando o pedido for \"deixar mais bonito\", \"melhorar o visual\", \"fazer uma tela\", \"página inicial\", \"portfólio\", \"UI/UX\", \"animação\", \"logo\" ou \"ícone\", mesmo sem citar design."
version: 2.0.0
author: Igor Seberino (igorSeberino)
license: MIT
---

# Frontend autoral

Responda em pt-BR, direto. Entregue interface funcionando e conferida na tela, não rascunho.

O problema que esta skill resolve: sites gerados por IA saem parecidos entre si porque nascem
de um plano vago, sem conteúdo real, e ninguém olha o resultado. Aqui cada projeto ganha uma
direção de arte escrita **antes** do código, derivada do assunto; é medido num navegador real e
só é entregue depois de visto renderizado e comparado com a lista de clichês.

Juntam-se aqui quatro fontes, já reconciliadas:

- **taste-skill** (leonxlnx): inventário do assunto, argumento, sorteio de composições estudadas
  em 247 sites premiados, frase da ideia, coisa viva, imagens de acervos abertos, lint e inspetor
  em navegador real, crítica em passadas com tetos de nota. Ferramentas em `vendor/taste-skill/`.
- **Emil Kowalski** (emilkowalski/skills): decisão de animação, curvas, durações, física,
  sensação de app no celular, dados de pior caso, revisão em tabela Antes/Depois.
- **Leis de UX** (lawsofux.com): as 30 leis como perguntas que se conferem na tela.
- **logo-design** (kaankiziltug): processo de logo, ícone de app e favicon, com auditoria de SVG e
  exportação do conjunto web. Ferramentas em `vendor/logo-design/`.

**Quando as fontes discordam:** o pedido atual > "Gosto do Igor" e `references/cliches.md` > este
arquivo > `references/movimento.md` (manda sobre movimento) > as referências em inglês de
`vendor/`. Em especial: aqui movimento é só com função, sem cota de elementos animados e sem
entrada em cada seção; cenas de rolagem do sorteio só entram se o usuário pedir.

`<skill>` nos comandos é a pasta desta skill. Os scripts precisam de Node 22+ (lint: 18+) e de
um Chrome, Edge ou Chromium (o do Playwright serve; `scripts/achar-chrome.mjs` acha sozinho). Os
de ícone, de Python 3 (no Windows, `python`).

## Quando usar

- Criar site, landing page, portfólio, página institucional, tela de app, dashboard, formulário.
- Redesenhar ou "deixar mais bonita" uma interface existente.
- Revisar UI/UX de uma tela: hierarquia, acessibilidade, estados, copy, responsividade, animação.
- Criar um componente com identidade (não só funcional) para um produto.
- Criar logo, símbolo, ícone de app ou favicon de um projeto, ou gerar as variantes de um logo
  existente.

Não use para: README e arte de perfil do GitHub (skill `readme-designer`), gráficos e
visualização de dados (skill `dataviz`), decks e documentos.

## Escolher o modo

- **Criar página** (site, landing, portfólio; projeto novo ou redesenho completo): fluxo inteiro.
- **Tela de app** (dashboard, admin, configurações, inbox, lista com filtros, editor): leia
  `vendor/taste-skill/references/app-screens.md` inteiro antes de começar. Ele tem a própria
  sequência, o próprio sorteio (`draw.mjs --app --kind <tipo>`) e regras próprias (bordas
  discretas, rótulos pequenos e painéis repetidos são normais ali; gradiente, brilho, ícone em
  quadrado colorido, gráfico arco-íris e número de vaidade inventado não). Use o fluxo abaixo com
  `--app` no portão; a coisa viva e o piso de imagens não se aplicam. Página de produto que mostra
  o app é página; os fragmentos do app dentro dela seguem as regras de app e levam `data-ui`.
- **Evoluir** (já existe sistema visual, `DESIGN.md`, `BRAND.md`, tokens, tema Tailwind,
  biblioteca de componentes): a direção existente manda. Leia antes, reaproveite tokens e
  componentes, e só proponha mudança de identidade se o usuário pedir. Pule o sorteio (ou use
  `--keep palette,type` para tirar só composição), mas passe o portão e a lista de clichês.
- **Revisar** (auditoria, "o que está ruim aqui?", "revisa as animações"): passos 1 e 5 apenas,
  no estado atual. Achados numa tabela **Onde | Antes | Depois | Por quê** agrupada por
  gravidade, sem preâmbulo (`references/revisao.md` §11).
- **Ajuste pontual** ("mais ousado", "mais calmo", "troca a fonte", "anima isso"): mude só o que
  foi pedido, dentro da direção existente. Ver "Ajustes" em `references/oficio.md` e, para
  animação, `references/movimento.md`.
- **Ícone ou logo** (logo, marca, ícone de app, favicon): `references/icones.md`. Em todo projeto
  de site ou app, o modo leve de lá roda no passo 4 para o projeto sair com ícone próprio.

## Fluxo

Cada passo só termina quando o critério de pronto estiver cumprido.

1. **Entender o assunto.** Leia o pedido e o código existente. Responda para si, em uma linha
   cada: o que é o produto, para quem é, qual a tarefa principal, se é página ou tela de app, que
   conteúdo real existe (textos, imagens, dados, logo, marca) e **que imagem existe de verdade**.
   Feche o **inventário de 8 a 12 coisas que só este cliente tem** (`references/direcao.md` §1).
   Se faltar o essencial (o que é o produto ou para quem), faça **uma** rodada de até 4 perguntas
   em lote. Se só faltar gosto, decida e diga o que decidiu.
   - Pronto quando produto, público, tarefa, tipo, inventário e inventário de imagens estiverem
     claros, e as lacunas tiverem resposta ou decisão registrada.

2. **Escrever a direção de arte** antes de qualquer CSS, em `DESIGN.md` na raiz do projeto (modelo
   em `assets/DESIGN.template.md`; num arquivo só, no topo da resposta). Método em
   `references/direcao.md`:
   - o **argumento**: a página como afirmações com prova, uma por seção; seção sem afirmação sai;
   - o **sorteio** de composição (`vendor/taste-skill/scripts/draw.mjs ... --options 3`),
     recomendado para páginas: escolha a opção que carrega algo do inventário, não a mais familiar,
     e filtre a paleta e o tipo pelo assunto e pelos clichês;
   - conceito em uma frase de cena, listas "parece / não parece";
   - **a frase da ideia** ("Nesta página, [algo do inventário] vira [o recurso]"), o teste do
     concorrente e **a coisa viva** (uma interação feita da ideia, com conteúdo real);
   - assinatura; paleta de 4 a 6 cores nomeadas com papel e contraste; 1 ou 2 famílias com escala
     de até 5 tamanhos; grade com margens iguais, ritmo e regra de forma; regra de movimento;
     fonte das imagens; de onde sai o ícone;
   - wireframe em ASCII de cada seção, vizinhas com formas diferentes.

   Depois rode o teste de troca: "se eu trocasse o nome do produto, esta direção serviria para
   um concorrente qualquer?" Se sim, revise e diga o que mudou. Confira contra
   `references/cliches.md`, incluindo o §11 (tirar clichê não pode deixar só vazio).
   - Pronto quando cada escolha tiver um motivo ligado ao produto, ao público ou ao conteúdo, a
     frase da ideia passar no teste do concorrente e nenhum item cair num clichê sem justificativa.

3. **Escrever o conteúdo** como roteiro de texto puro antes do markup, com
   `references/copy.md`: títulos que cabem em duas linhas em toda largura (faça a conta), a frase
   de apoio logo abaixo, uma ação principal com verbo e objeto, cada seção com o conteúdo
   completo. Onde faltar **prova** (número, depoimento, cliente, avaliação), use marcador visível
   como `[depoimento real aqui]` em vez de inventar; onde faltar só **detalhe de conteúdo** (nome
   de prato, de quarto), use amostra plausível e liste para confirmar.
   - Pronto quando nenhum texto pudesse estar no site de outra empresa, nenhuma prova for
     inventada e as amostras estiverem listadas.

4. **Construir, parado.** Com o movimento desligado na cabeça: página que precisa de animação
   para parecer pronta não está pronta. Ordem: tokens (cor, tipo, espaço, forma, curvas), o hero
   exatamente como desenhado no desktop e no celular, cada seção pelo seu wireframe levando a
   ideia até preço, FAQ e rodapé, imagens (`references/imagens.md`: próprias, geradas, acervos
   abertos com `assets.mjs`, desenhadas do assunto), a coisa viva, a moldura (margens iguais,
   título em toda seção, nenhum trecho vazio), estados e semântica, favicon e ícones
   (`references/icones.md`, modo leve). Siga `references/oficio.md`, `references/ux.md` e
   `references/leis-ux.md`. `vendor/taste-skill/assets/base.css` é uma base neutra opcional.
   - Use a stack que o projeto já tem. Sem dependência visual nova sem motivo funcional.
   - Pronto quando a página rodar sem erro de console, sem rolagem horizontal no celular, com
     todos os estados relevantes (hover, focus-visible, active, disabled, loading, erro, vazio),
     dados de pior caso testados (`references/ux.md` §9) e ícone próprio no lugar.

5. **Medir, olhar, corrigir.** Rode o portão:
   `node <skill>/scripts/inspecionar.mjs <url-ou-index.html> --src <pasta-do-código>` (com `--app`
   em tela de app). Ele roda o lint e o inspetor em 1440, 768 e 390 px e salva screenshots em
   `.taste-skill/inspect/`. Corrija toda FAIL. Depois **abra todas as screenshots** e critique com
   `references/revisao.md`: teste de IA, 15 passadas, rubrica com tetos, crítica escrita no
   formato da rodada. Corrija os 3 problemas mais graves, meça e olhe de novo; no máximo 3
   rodadas.
   - Pronto quando houver 0 FAIL, nota média ≥ 8, nenhum critério < 7 e a lista de problemas
     vazia. Se não der para chegar lá, diga o que ficou pendente e a nota real.

6. **Mover, só com função.** Agora o movimento, decidido por `references/movimento.md`:
   frequência (ação de teclado e coisa vista o dia todo não animam), propósito, curva
   (`ease-out` forte, nunca `ease-in`), duração (< 300 ms em interface), pressão (`scale(0.97)`),
   origem no gatilho, hover só com mouse, `prefers-reduced-motion`. No máximo um momento
   orquestrado por página, em geral a coisa viva ou a assinatura. Rode o portão de novo e
   confira nos screenshots que nada sumiu.
   - Pronto quando toda animação responder "para quê?" e o portão continuar com 0 FAIL.

7. **Conferir e relatar.** Checklist final e relatório de `references/revisao.md` §9 e §10.

Sem como renderizar (nenhum navegador e nenhum jeito de instalar um)? Rode só o lint, diga isso no
relatório e faça a revisão lendo o código contra a checklist. Não diga que conferiu na tela.

## Design em uma tela

O detalhe está em `references/oficio.md`, `references/cliches.md` e `references/leis-ux.md`.

- **Toda decisão visual tem motivo** ligado ao produto, à marca, ao conteúdo ou ao uso. Antes de
  acrescentar qualquer elemento, pergunte se ele melhora compreensão, função, estética ou
  experiência. Se não melhora, não entra.
- **A identidade vem do assunto**, nunca de tendência. Futurista, tech ou minimalista não são
  padrão; só entram se o assunto pedir. Minimalismo não é ausência de personalidade.
- **Visual autoral, mecânica convencional** (Lei de Jakob). Ousadia mora na tipografia, na cor,
  na imagem e na composição; menu, link, botão e formulário funcionam como em qualquer site.
- **Ousadia num lugar só**, na ideia-assinatura. O resto fica disciplinado. Antes de entregar,
  tire um acessório. Mas tirar enfeite não é deixar vazio: o espaço vai para escala, conteúdo
  completo, imagem do assunto ou campo de cor.
- **A composição segue o conteúdo.** Cada seção escolhe sua forma pelo que mostra: lista,
  sequência, comparação, imagem grande, citação, tabela. Vizinhas não repetem forma. Nem tudo é
  card, nem tudo é centralizado, nem tudo é grade de 3 colunas.
- **Hierarquia antes de simetria.** Um elemento principal por tela; 2 ou 3 tamanhos fazem o
  trabalho, até 5 no total; títulos em até duas linhas. Assimetria dentro da grade, margens
  externas sempre iguais.
- **Cor com papel.** Um fundo, uma tinta, 1 ou 2 neutros tingidos, um acento em 1 a 3 lugares
  (Von Restorff). Superfícies por degrau de tom, sem gradiente, glow, blur, glass ou sombra em
  repouso.
- **Tipografia como voz.** 1 ou 2 famílias escolhidas pelo caráter do produto, corpo legível
  (≥ 16 px, 45 a 75 caracteres por linha) na tinta cheia.
- **Imagem que mostra.** Real do projeto, gerada, de acervo aberto com crédito, ou desenhada do
  próprio assunto; uma dominante vence seis pequenas; nunca caixa cinza nem banco genérico.
- **Movimento só com função**, rápido, interrompível, com `ease-out` e origem certa. Sempre
  `prefers-reduced-motion`.
- **Acessibilidade não se negocia**: contraste AA, foco visível, navegação por teclado,
  semântica correta, `alt` em imagem com conteúdo, alvos ≥ 44 px, zoom liberado.

## Gosto do Igor

Ponto de partida, não receita. O pedido atual sempre ganha.

- O tema muda a cada projeto. Nunca reaproveite paleta, fonte, motivo ou copy de trabalho
  anterior sem ele pedir. (O sorteio da taste-skill ajuda: ele lembra os anteriores.)
- Gosta de tema assumido e bem executado, presente no conjunto inteiro, não de enfeite tímido.
- Coerência acima de tudo: uma seção "crua" no meio das estilizadas incomoda. Se uma destoa,
  refaça no mesmo padrão.
- Movimento sutil. Objeto atravessando a tela é vetado.
- Copy natural, sem frase de efeito forçada, sem disclaimer ou rodapé que ninguém pediu.
- "Melhorar" uma seção é refazer o visual mantendo o conteúdo, não remover.
- Quando ele veta um elemento, tire **só** aquele elemento. Não reinterprete o resto.

## Armadilhas

- **O primeiro impulso é o clichê.** Hero centralizado com título, subtítulo, dois botões e
  gradiente; três cards com ícone num quadrado colorido; seção de números; depoimentos. Se a
  primeira ideia veio rápido demais, é provável que seja o padrão. Volte ao inventário.
- **Evitar um clichê caindo em outro.** Fugir do roxo indo para fundo creme + serifa + terracota,
  ou para preto + verde ácido, é trocar um padrão de IA por outro. Ver os "cinco visuais padrão"
  em `references/cliches.md`.
- **Página limpa e rala.** Sem enfeites e sem nada no lugar perde para a página cheia de clichês.
  Conteúdo completo, tipo grande, imagens reais.
- **Ideia de categoria.** "Pão" serve para toda padaria. Se a frase da ideia funciona com o
  concorrente, volte ao inventário.
- **Conteúdo inventado para encher.** Número sem fonte, logo de cliente fictício, depoimento,
  avatar aleatório, mockup de dashboard genérico. Use marcador ou corte a seção.
- **Título de três linhas.** Faça a conta de caracteres antes; corte palavras, não a fonte.
- **Especificidade de CSS.** Classe genérica de seção (`.section { padding }`) brigando com a de
  um bloco específico. Defina o ritmo em tokens e confira no screenshot.
- **Fonte que não carregou** faz a página cair no fallback e destrói a direção. O inspetor acusa;
  use `font-display: swap` e pré-carregue a principal.
- **Flash branco** em página de fundo escuro: a primeira regra do CSS é o fundo em `html, body`.
- **`100vh` no celular** corta conteúdo atrás da barra do navegador. Use `100dvh` (app) ou `svh`
  (hero).
- **`transition: all`, `ease-in`, `scale(0)`, hover sem media query, animação em atalho de
  teclado.** Ver `references/movimento.md`.
- **Revelação que esconde conteúdo.** Estado inicial invisível fora de
  `@media (prefers-reduced-motion: no-preference)` some para quem desliga animação.
- **Ícone de biblioteca como identidade.** Lucide, Heroicons etc. servem para função (fechar,
  buscar, menu). A identidade vem de tipografia, cor, imagem, forma e ícone próprios.
- **Favicon padrão do framework.** Todo projeto sai com o seu.

## Referências (carregue só no passo que pede)

| Arquivo | Quando |
|---|---|
| `references/direcao.md` | passo 2: inventário, argumento, sorteio, conceito, frase da ideia, coisa viva, paleta, tipo |
| `references/cliches.md` | passos 2 e 5: lista completa do que não fazer, com as regras do inspetor |
| `references/copy.md` | passo 3: argumento, títulos em 2 linhas, botões, erros, vocabulário a evitar |
| `references/oficio.md` | passo 4: tokens, tipografia, cor, moldura e composição, componentes, ajustes |
| `references/imagens.md` | passo 4: de onde tirar imagem, acervos abertos, recorte, tratamento, créditos |
| `references/ux.md` | passo 4: estados, formulários, acessibilidade, responsividade, dados de pior caso |
| `references/leis-ux.md` | passos 4 e 5: as 30 leis de UX aplicadas e a conferência rápida |
| `references/movimento.md` | passo 6 e revisão de animação: decisão, curvas, durações, física, toque |
| `references/icones.md` | passo 4 (modo leve) e modo ícone/logo: brief, conceitos, SVG, testes, exportação |
| `references/revisao.md` | passo 5 e 7: portão, 15 passadas, rubrica com tetos, crítica, relatório, modo revisar |
| `assets/DESIGN.template.md` | passo 2: modelo do documento de direção de arte |
| `scripts/inspecionar.mjs` | passo 5: lint + inspetor em navegador real, com as regras da casa |
| `scripts/achar-chrome.mjs` | acha um Chrome/Chromium e imprime o caminho (para `CHROME_PATH`) |
| `scripts/shoot.mjs` | alternativa leve de screenshots com Playwright |
| `vendor/taste-skill/` | `scripts/draw.mjs` (sorteio), `assets.mjs` (acervos), `lint.mjs`, `inspect.mjs`, `scenes.mjs`; `references/app-screens.md` (telas de app) e as demais referências em inglês |
| `vendor/logo-design/` | `scripts/` (auditoria, render, folhas de teste, conceitos, exportação), `references/` e `templates/` em inglês |
