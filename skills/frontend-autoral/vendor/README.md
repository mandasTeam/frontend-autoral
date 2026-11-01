# Código de terceiros

Ferramentas incorporadas a esta skill, sob licença MIT. Cada pasta mantém a `LICENSE` original.
As instruções originais estão em `ORIGINAL-SKILL.md` (renomeado para não ser carregado como uma
segunda skill). Onde elas conflitam com a `SKILL.md` desta skill, vale a desta.

| Pasta | Origem | Versão | O que veio | O que ficou de fora | Mudanças |
|---|---|---|---|---|---|
| `taste-skill/` | [leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill) (© 2026 Leonxlnx, MIT) | commit `12af471`, 2026-10-25 | `scripts/`, `library/`, `assets/`, `references/` | README, exemplos, evals, testes | nenhuma; as regras da casa entram pelo `scripts/inspecionar.mjs` (`--allow still-page`) |
| `logo-design/` | [kaankiziltug/logo-design-skill](https://github.com/kaankiziltug/logo-design-skill) (© 2026 kaankiziltug, MIT) | commit `7340903`, 2026-10-20 | `scripts/`, `references/`, `templates/`, `assets/library/stats.json` | a biblioteca de 1.400 SVGs (14 MB, marcas registradas de terceiros), `build_catalog.py` e `search_library.py`, que dependem dela | `render_png.py` passa a respeitar `CHROME_PATH` |

Para atualizar: copie de novo as mesmas pastas do commit novo, refaça a mudança listada, rode
`node --check` nos `.mjs` e um `svg_audit.py` num SVG de teste, e atualize a tabela.
