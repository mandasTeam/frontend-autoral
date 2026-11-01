---
name: frontend-autoral
description: "Use ao criar, redesenhar ou revisar sites, landing pages, telas de app, dashboards ou componentes de interface (HTML/CSS, React, Next, Vue, Angular, Tailwind). Define uma direção de arte própria para cada projeto, aplica fundamentos de UI/UX e acessibilidade, e confere o resultado renderizado contra uma lista de clichês de interface gerada por IA. Use também quando o pedido for \"deixar mais bonito\", \"melhorar o visual\", \"fazer uma tela\", \"página inicial\", \"portfólio\" ou \"UI/UX\", mesmo sem citar design."
version: 1.0.0
author: Igor Seberino (igorSeberino)
license: MIT
---

# Frontend autoral

Responda em pt-BR, direto. Entregue interface funcionando e conferida na tela, não rascunho.

O problema que esta skill resolve: sites gerados por IA saem parecidos entre si porque nascem
de um plano vago, sem conteúdo real, e ninguém olha o resultado. Aqui cada projeto ganha uma
direção de arte escrita **antes** do código, derivada do assunto, e o resultado só é entregue
depois de visto renderizado e comparado com a lista de clichês.

## Quando usar

- Criar site, landing page, portfólio, página institucional, tela de app, dashboard, formulário.
- Redesenhar ou "deixar mais bonita" uma interface existente.
- Revisar UI/UX de uma tela: hierarquia, acessibilidade, estados, copy, responsividade.
- Criar um componente com identidade (não só funcional) para um produto.

Não use para: README e arte de perfil do GitHub (skill `readme-design`), gráficos e
visualização de dados (skill `dataviz`), decks e documentos.

## Escolher o modo

- **Criar** (projeto novo ou redesenho completo): fluxo inteiro abaixo.
- **Evoluir** (já existe sistema visual, `DESIGN.md`, `BRAND.md`, tokens, tema Tailwind,
  biblioteca de componentes): a direção existente manda. Leia antes, reaproveite tokens e
  componentes, e só proponha mudança de identidade se o usuário pedir. Pule o passo 2, mas
  confira o trabalho novo contra `references/cliches.md` mesmo assim.
- **Revisar** (pedido de auditoria, "o que está ruim aqui?"): passos 1 e 6 apenas. Entregue os
  achados em `arquivo:linha - problema - correção`, agrupados por gravidade, sem preâmbulo.
- **Ajuste pontual** ("mais ousado", "mais calmo", "troca a fonte"): mude só o que foi pedido,
  dentro da direção existente. Ver "Ajustes" em `references/oficio.md`.

## Fluxo

Cada passo só termina quando o critério de pronto estiver cumprido.

1. **Entender o assunto.** Leia o pedido e o código existente. Responda para si, em uma linha
   cada: o que é o produto, para quem é, qual a tarefa principal do usuário na tela, que
   conteúdo real existe (textos, imagens, dados, logo, marca). Se faltar o essencial (o que é o
   produto ou para quem), faça **uma** rodada de até 4 perguntas em lote. Se só faltar gosto,
   decida e diga o que decidiu.
   - Pronto quando produto, público, tarefa principal e inventário de conteúdo real estiverem
     claros, e as lacunas tiverem resposta ou decisão registrada.

2. **Escrever a direção de arte** antes de qualquer CSS. Use `assets/DESIGN.template.md` e
   salve como `DESIGN.md` na raiz do projeto (ou no topo da resposta, se for um arquivo só).
   O método está em `references/direcao.md`. Em resumo:
   - um conceito em uma frase, tirado do mundo do assunto (materiais, ofício, vocabulário,
     objetos, lugares), mais as listas "parece / não parece";
   - **uma ideia-assinatura**: o gesto que torna esta interface reconhecível;
   - paleta de 4 a 6 cores nomeadas com papel e contraste;
   - 1 ou 2 famílias tipográficas com papel e escala;
   - grade, ritmo de espaçamento, regra de forma (raios, bordas) e a regra de movimento;
   - wireframe em ASCII de cada seção, com composições diferentes conforme o conteúdo.

   Depois rode o teste de troca: "se eu trocasse o nome do produto, esta direção serviria para
   um concorrente qualquer?" Se sim, revise e diga o que mudou. Confira também contra
   `references/cliches.md`.
   - Pronto quando cada escolha tiver um motivo ligado ao produto, ao público ou ao conteúdo,
     e nenhum item cair num clichê sem justificativa.

3. **Escrever o conteúdo.** Títulos, textos, botões, estados vazios e mensagens de erro saem
   do conteúdo real do produto, com as regras de `references/copy.md`. Onde faltar dado real
   (número, depoimento, cliente, preço), use um marcador visível como
   `[depoimento real aqui]` em vez de inventar.
   - Pronto quando nenhum texto pudesse estar no site de outra empresa e nenhum dado for
     inventado.

4. **Construir.** Tokens primeiro (variáveis CSS ou tema do framework), depois layout, depois
   componentes. Siga `references/oficio.md` para tipografia, cor, composição e movimento, e
   `references/ux.md` para estados, formulários, acessibilidade e responsividade.
   - Use a stack que o projeto já tem. Sem dependência visual nova sem motivo funcional.
   - Pronto quando a página rodar sem erro de console, sem rolagem horizontal no celular, com
     todos os estados relevantes (hover, focus-visible, active, disabled, loading, erro, vazio)
     e `prefers-reduced-motion` tratado.

5. **Olhar o resultado.** Tire screenshots em desktop (1440 px) e celular (390 px), da primeira
   dobra e da página inteira. Rode `node <skill>/scripts/shoot.mjs <url-ou-arquivo> <pasta-saida>`
   de dentro de `~/.cache/frontend-autoral-shoot`, onde o Playwright já está instalado (se a
   pasta não existir: `npm i playwright && npx playwright install chromium` nela). Ele também
   acusa erro de console, rolagem horizontal e fonte que não carregou. Sem isso, use o
   navegador da sessão. Leia os PNG e avalie com a rubrica de `references/revisao.md`.
   - Pronto quando houver screenshots dos dois tamanhos e uma lista de problemas concretos.

6. **Corrigir e conferir.** Corrija os 3 problemas mais graves, tire screenshots de novo e
   repita, no máximo 3 rodadas. Depois passe a checklist final de `references/revisao.md`.
   - Pronto quando a nota média da rubrica for ≥ 8, nenhum critério ficar abaixo de 7 e a
     lista de problemas estiver vazia. Se não der para chegar lá, diga o que ficou pendente.

Sem como renderizar (nenhum navegador e nenhum jeito de instalar Playwright)? Diga isso no
relatório e faça a revisão lendo o código contra a checklist. Não diga que conferiu na tela.

## Design em uma tela

O detalhe está em `references/oficio.md` e `references/cliches.md`.

- **Toda decisão visual tem motivo** ligado ao produto, à marca, ao conteúdo ou ao uso. Antes de
  acrescentar qualquer elemento, pergunte se ele melhora compreensão, função, estética ou
  experiência. Se não melhora, não entra.
- **A identidade vem do assunto**, nunca de tendência. Futurista, tech ou minimalista não são
  padrão; só entram se o assunto pedir. Minimalismo não é ausência de personalidade.
- **Ousadia num lugar só**, na ideia-assinatura. O resto fica disciplinado. Antes de entregar,
  tire um acessório.
- **A composição segue o conteúdo.** Cada seção escolhe sua forma pelo que mostra: lista,
  sequência, comparação, imagem grande, citação, tabela. Nem tudo é card, nem tudo é centralizado,
  nem tudo é grade de 3 colunas. Consistência vem dos tokens, não da repetição de layout.
- **Hierarquia antes de simetria.** Um elemento principal por tela; tamanho, peso, cor e espaço
  dizem o que ler primeiro. Espaçamento com ritmo (respiros diferentes para agrupar e separar),
  não uniforme.
- **Cor com papel.** Uma cor de fundo, uma de texto, 1 ou 2 neutros tingidos, um acento usado
  com parcimônia. Sem gradiente, glow, blur ou glass por padrão.
- **Tipografia como voz.** 1 ou 2 famílias escolhidas pelo caráter do produto, escala com
  proporção clara, corpo legível (≥ 16 px, 45 a 75 caracteres por linha).
- **Movimento só com função**: responder a uma ação, mostrar mudança de estado, orientar.
  No máximo um momento orquestrado por página. Sempre `prefers-reduced-motion`.
- **Acessibilidade não se negocia**: contraste AA, foco visível, navegação por teclado,
  semântica correta, `alt` em imagem com conteúdo.

## Gosto do Igor

Ponto de partida, não receita. O pedido atual sempre ganha.

- O tema muda a cada projeto. Nunca reaproveite paleta, fonte, motivo ou copy de trabalho
  anterior sem ele pedir.
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
  primeira ideia veio rápido demais, é provável que seja o padrão. Volte ao assunto.
- **Evitar um clichê caindo em outro.** Fugir do roxo indo para fundo creme + serifa + terracota,
  ou para preto + verde ácido, é trocar um padrão de IA por outro. Ver os "cinco visuais padrão"
  em `references/cliches.md`.
- **Conteúdo inventado para encher.** Número sem fonte, logo de cliente fictício, depoimento,
  avatar aleatório, mockup de dashboard genérico. Use marcador ou corte a seção.
- **Especificidade de CSS.** Classe genérica de seção (`.section { padding }`) brigando com a de
  um bloco específico. Defina o ritmo em tokens e confira no screenshot.
- **Fonte que não carregou** faz a página cair no fallback e destrói a direção. Confira no
  screenshot que a fonte certa está na tela; use `font-display: swap` e pré-carregue a principal.
- **Flash branco** em página de fundo escuro: a primeira regra do CSS é o fundo em `html, body`.
- **`100vh` no celular** corta conteúdo atrás da barra do navegador. Use `100dvh` (ou `svh`).
- **`transition: all`** anima coisas que não deviam. Liste as propriedades.
- **Ícone de biblioteca como identidade.** Lucide, Heroicons etc. servem para função (fechar,
  buscar, menu). A identidade vem de tipografia, cor, imagem e forma próprias.

## Referências (carregue só no passo que pede)

| Arquivo | Quando |
|---|---|
| `references/direcao.md` | passo 2: como derivar conceito, assinatura, paleta e tipografia do assunto |
| `references/cliches.md` | passos 2 e 6: lista completa do que não fazer, com os motivos |
| `references/copy.md` | passo 3: textos, botões, erros, estados vazios, vocabulário a evitar |
| `references/oficio.md` | passo 4: tipografia, cor, composição, componentes, movimento, ajustes |
| `references/ux.md` | passo 4: estados, formulários, acessibilidade, responsividade, desempenho |
| `references/revisao.md` | passos 5 e 6: rubrica de nota, teste de IA, checklist final |
| `assets/DESIGN.template.md` | passo 2: modelo do documento de direção de arte |
| `scripts/shoot.mjs` | passo 5: screenshots desktop e celular |
