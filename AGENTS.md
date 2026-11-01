# Para quem mantém este repositório

A skill em `skills/frontend-autoral/` é o produto; o resto serve para provar que ela funciona.
Ao mudar uma regra, rode os casos de `evals/` com e sem a skill e compare as screenshots.
Rodadas de avaliação vão para fora do repo.

## Comandos

```bash
node --check skills/frontend-autoral/scripts/shoot.mjs        # o script de screenshots compila
claude plugin eval . --allow-tools Write,Edit,Bash             # casos com e sem a skill (cobrado)
```

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
