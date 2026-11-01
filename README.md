# frontend-autoral

Skill no formato `SKILL.md` que ensina o agente a criar, redesenhar e revisar sites e telas
com direção de arte própria para cada projeto, fundamentos de UI/UX e acessibilidade, sem a
cara de template gerado por IA.

## Como funciona

1. **Entender o assunto:** produto, público, tarefa principal e conteúdo real disponível.
2. **Escrever a direção de arte** num `DESIGN.md` antes de qualquer CSS: conceito tirado do
   mundo do produto, uma ideia-assinatura, paleta com contraste, tipografia, grade, forma,
   movimento e wireframes por seção. Depois, o teste de troca: "serviria para um concorrente?".
3. **Escrever o conteúdo** com trava de fatos: nada de número, cliente ou depoimento inventado.
4. **Construir** com tokens, estados completos e `prefers-reduced-motion`.
5. **Olhar o resultado** em screenshots de desktop e celular.
6. **Corrigir e conferir** com uma rubrica de 10 critérios até média ≥ 8 e nenhum abaixo de 7.

Modos: **criar**, **evoluir** (respeita o sistema visual existente), **revisar** (achados em
`arquivo:linha`) e **ajuste pontual** ("mais ousado", "mais calmo").

## O que tem dentro

```
skills/frontend-autoral/
├── SKILL.md                    fluxo, modos, armadilhas
├── references/
│   ├── direcao.md              do assunto ao conceito, paleta, tipo e forma
│   ├── cliches.md              o que não fazer, com os cinco visuais padrão de IA
│   ├── oficio.md               tipografia, cor, composição, componentes, movimento
│   ├── ux.md                   acessibilidade, foco, formulários, estados, desempenho
│   ├── copy.md                 textos de interface em pt-BR, trava de fatos
│   └── revisao.md              rubrica, falhas bloqueantes, checklist final
├── assets/DESIGN.template.md   modelo da direção de arte
└── scripts/shoot.mjs           screenshots + erro de console, overflow e fonte faltando
evals/                          casos de teste da skill
```

## Instalação

Clone o repo e copie `skills/frontend-autoral` para a pasta de skills do agente
(`~/.claude/skills/` no Claude Code, ou a de outro agente que leia `SKILL.md`).

Para as screenshots, instale o Playwright numa pasta de rascunho e rode o script de lá:

```bash
mkdir -p ~/.cache/frontend-autoral-shoot && cd ~/.cache/frontend-autoral-shoot
npm init -y && npm i playwright && npx playwright install chromium
node ~/.claude/skills/frontend-autoral/scripts/shoot.mjs http://localhost:5173 ./shots
```

## Skills vizinhas

README e arte de perfil do GitHub ficam com a
[`readme-designer`](https://github.com/mandasTeam/readme-designer); escopo de produto, com a
[`product-owner`](https://github.com/mandasTeam/product-owner).

## Licença

MIT
