# frontend-autoral

Skill no formato `SKILL.md` que ensina o agente a criar, redesenhar e revisar sites e telas
com direção de arte própria para cada projeto, fundamentos de UI/UX e acessibilidade, sem a
cara de template gerado por IA. Também cria logo, ícone de app e favicon do projeto.

Reúne e reconcilia:

- a lista de clichês e o gosto do Igor (base da skill);
- a [taste-skill](https://github.com/leonxlnx/taste-skill): inventário do assunto, argumento,
  sorteio de composições estudadas em 247 sites premiados, frase da ideia, "coisa viva", imagens
  de acervos abertos, lint e inspetor em navegador real, crítica com tetos de nota;
- as [skills de Emil Kowalski](https://github.com/emilkowalski/skills)
  ([emilkowal.ski/skill](https://emilkowal.ski/skill)): animação, sensação de app no celular,
  dados de pior caso, revisão em tabela Antes/Depois;
- as [Leis de UX](https://lawsofux.com/), aplicadas e conferíveis;
- a [logo-design-skill](https://github.com/kaankiziltug/logo-design-skill): processo de logo e
  ícone, auditoria de SVG, exportação de favicon e ícones de app.

## Como funciona

1. **Entender o assunto:** produto, público, tarefa, página ou tela de app, conteúdo e imagens
   reais, e um inventário de 8 a 12 coisas que só este cliente tem.
2. **Escrever a direção de arte** num `DESIGN.md` antes de qualquer CSS: o argumento da página,
   o sorteio de composição (opcional), conceito, a frase da ideia ("Nesta página, X vira Y"), a
   coisa viva, paleta com contraste, tipografia, moldura, movimento, imagem e ícone. Depois, o
   teste do concorrente.
3. **Escrever o conteúdo** com trava de fatos e títulos que cabem em duas linhas.
4. **Construir parado:** tokens, hero, seções, imagens, coisa viva, estados, ícone próprio.
5. **Medir, olhar, corrigir:** lint + inspetor em 1440/768/390 px, 15 passadas nos screenshots,
   rubrica de 10 critérios com tetos, até 3 rodadas.
6. **Mover, só com função**, no padrão de Emil Kowalski.
7. **Conferir e relatar.**

Modos: **criar página**, **tela de app**, **evoluir**, **revisar** (tabela Onde/Antes/Depois/Por
quê), **ajuste pontual** e **ícone ou logo**.

## O que tem dentro

```
skills/frontend-autoral/
├── SKILL.md                    fluxo, modos, precedência entre as fontes, armadilhas
├── references/
│   ├── direcao.md              inventário, argumento, sorteio, frase da ideia, coisa viva, paleta, tipo
│   ├── cliches.md              o que não fazer, com as regras do inspetor; "remover não basta"
│   ├── copy.md                 argumento, títulos em 2 linhas, textos de interface em pt-BR
│   ├── oficio.md               tokens, tipografia, cor, moldura, composição, componentes, ajustes
│   ├── imagens.md              de onde tirar imagem, acervos abertos, recorte, tratamento, créditos
│   ├── ux.md                   acessibilidade, foco, formulários, estados, dados de pior caso
│   ├── leis-ux.md              as 30 leis de UX aplicadas, com conferência rápida
│   ├── movimento.md            animação e sensação de app (Emil Kowalski)
│   ├── icones.md               logo, ícone de app e favicon (logo-design-skill)
│   └── revisao.md              portão, 15 passadas, rubrica com tetos, relatório, modo revisar
├── assets/DESIGN.template.md   modelo da direção de arte
├── scripts/
│   ├── inspecionar.mjs         lint + inspetor em navegador real, com as regras da casa
│   ├── achar-chrome.mjs        acha Chrome/Edge/Chromium (inclusive o do Playwright)
│   └── shoot.mjs               screenshots leves com Playwright
└── vendor/                     taste-skill e logo-design (MIT), ver vendor/README.md
evals/                          casos de teste da skill
```

## Instalação

Clone o repo e copie `skills/frontend-autoral` para a pasta de skills do agente
(`~/.claude/skills/` no Claude Code, ou a de outro agente que leia `SKILL.md`).

Requisitos: Node 22+ e um Chrome, Edge ou Chromium para o inspetor; Python 3 para os scripts de
ícone. Sem navegador instalado, o Chromium do Playwright serve:

```bash
mkdir -p ~/.cache/frontend-autoral-shoot && cd ~/.cache/frontend-autoral-shoot
npm init -y && npm i playwright && npx playwright install chromium
node ~/.claude/skills/frontend-autoral/scripts/achar-chrome.mjs     # confere que achou
node ~/.claude/skills/frontend-autoral/scripts/inspecionar.mjs http://localhost:5173 --src ./src
```

## Skills vizinhas

README e arte de perfil do GitHub ficam com a
[`readme-designer`](https://github.com/mandasTeam/readme-designer); escopo de produto, com a
[`product-owner`](https://github.com/mandasTeam/product-owner).

## Licença

MIT. O código em `skills/frontend-autoral/vendor/` mantém a licença MIT dos autores originais
(ver `vendor/README.md`).
