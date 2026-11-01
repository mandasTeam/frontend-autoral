# Para quem mantém este repositório

A skill em `skills/frontend-autoral/` é o produto; o resto serve para provar que ela funciona.
Ao mudar uma regra, rode os casos de `evals/` com e sem a skill e compare as screenshots.
Rodadas de avaliação vão para fora do repo.

## Comandos

```bash
for f in skills/frontend-autoral/scripts/*.mjs skills/frontend-autoral/vendor/taste-skill/scripts/*.mjs; do node --check "$f"; done
node skills/frontend-autoral/scripts/achar-chrome.mjs           # acha um navegador para o inspetor
python skills/frontend-autoral/vendor/logo-design/scripts/svg_audit.py <um.svg>   # scripts de ícone rodam
claude plugin eval . --allow-tools Write,Edit,Bash             # casos com e sem a skill (cobrado)
```

`vendor/` é código de terceiros (MIT). Não edite lá dentro sem registrar a mudança em
`skills/frontend-autoral/vendor/README.md`; regra da casa que difere da original entra pelo
`scripts/inspecionar.mjs` ou pelas referências em pt-BR.

## De onde veio cada regra

Fica aqui, e não na skill, porque o agente que usa a skill não precisa dela; quem muda uma regra
precisa saber de onde ela veio.

| Fonte | O que entrou | O que ficou de fora e por quê |
|---|---|---|
| Lista de proibições do Igor | `references/cliches.md` inteiro (seções 2 a 10) e a regra final | — |
| `mandasTeam/readme-designer` e `team-docs/BRAND.md` | fluxo com "Pronto quando"; plano de design antes do código; ousadia num lugar só; "tire um acessório"; formato do `DESIGN.md` (parece/não parece, tabela de contraste, faça/não faça); preferências do Igor | pipeline de SVG e texto em path (específico de README) |
| `mandasTeam/skill-author` | description com gatilho no começo; motivo junto da regra; modos com gatilho explícito; casos antes do texto | — |
| `anthropics/skills` → `frontend-design` | partir do assunto; os cinco visuais padrão de IA e a moldura de template; wireframe ASCII; teste "um prompt parecido cairia aqui?"; regras de copy de interface | persona de "diretor de estúdio" |
| `vercel-labs/agent-skills` → `web-design-guidelines`, `react-best-practices`, `writing-guidelines` | `references/ux.md` (acessibilidade, foco, formulários, movimento, desempenho, localização); relatório `arquivo:linha` no modo revisão; marcas de texto de IA | Title Case em títulos (conflita com caixa de frase, adotada) |
| `Motionsites-AI/claude-skill` | decidir em vez de interrogar; ideia-assinatura; prioridade de mídia real; olhar → dar nota → corrigir (média ≥ 8, nada < 7, até 3 rodadas); falhas bloqueantes; flash branco, `100dvh` | quebrar título à mão e rótulos mono espaçados (conflitam com a lista do Igor); bloco patrocinado |
| `img2threejs/img2threejs` | referência carregada só no passo que pede; correções limitadas por rodada; dizer quando o resultado é aproximado | pipeline de reconstrução 3D |
| `kursku/skills` (impeccable, baseline-ui) | teste "se eu dissesse que foi IA, acreditariam?"; modos de ajuste (mais ousado/calmo); neutros tingidos; texto cinza sobre cor | dependência de outra skill para a lista de proibições |
| `skilldev.pro/skills/humanizar` e `tiagopgr/skills-ia` | trava de fatos; vocabulário e estruturas de IA em pt-BR; manter anglicismos naturais | perfis de voz e processo de 9 passos (texto longo, não interface) |
| Galerias (horizonx, ilovecreatives, landings.dev, rebrand.gallery, uiuxshowcase) | régua de qualidade: um momento-assinatura por página, mídia real, voz própria, site como parte de um sistema de identidade | layouts específicos; ui8.net bloqueou o acesso (403) |
| `leonxlnx/taste-skill` v2 (MIT, incorporada em `vendor/`) | inventário de 8–12 itens; argumento com prova; sorteio de composição (`draw.mjs`); frase da ideia e teste do concorrente; coisa viva; imagens de acervos abertos (`assets.mjs`); piso de 4 imagens; lint + inspetor em navegador real; títulos em 2 linhas com a conta de caracteres; moldura (margens iguais, 2–3 bordas, sem trecho vazio); "remover não basta"; 14 passadas de crítica, formato da rodada e tetos; modo tela de app | cota de movimento (`still-page`, entrada em cada seção, ≥ 8 elementos animados) e teto de nota por página parada: conflitam com "movimento sutil" do Igor e com Emil (`remove-animations`); cenas de rolagem só a pedido; `<br>` autoral no título (conflita com a lista do Igor, ficou só para evitar quebra ruim); nota ponderada de 4 critérios (ficou a rubrica de 10 com os tetos adaptados) |
| `emilkowalski/skills` (emil-design-eng, review-animations, mobile-native, break-ui, remove- e find-animation-opportunities, cheatsheets) e `emilkowal.ski/skill` | `references/movimento.md` inteiro; tabela Antes/Depois/Por quê no modo revisar; `scale(0.97)` no active; nunca `ease-in`; hover com media query; sensação de app no celular; dados de pior caso (`ux.md` §9); detalhes de UI (tabular-nums, plural, data absoluta) | write-swift, animate-expo, ask-sonner, pick-ui-library, prototype (fora do escopo web autoral); resposta inicial fixa da emil-design-eng |
| `lawsofux.com` | `references/leis-ux.md` com as 30 leis, cada uma com "na interface" e "como conferir"; tensão identidade autoral × Lei de Jakob; passada 15 da revisão | — |
| `kaankiziltug/logo-design-skill` (MIT, incorporada em `vendor/`) | `references/icones.md`: modo leve (favicon do projeto) e completo (brief, clichês do setor, 8–12 conceitos, 3 construídos, SVG preto primeiro, testes, ponto de checagem, kit); scripts de auditoria, render e exportação web | biblioteca de 1.400 logos (14 MB, marcas registradas) e os scripts que dependem dela |
