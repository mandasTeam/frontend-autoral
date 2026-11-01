# Revisão: olhar, dar nota, corrigir

Interface gerada sem olhar o resultado é onde nasce a maioria dos defeitos: fonte que não
carregou, seção que estourou no celular, contraste que parecia bom no código. Este arquivo
define como olhar e quando parar.

## 1. Screenshots

Tire, no mínimo:

- desktop 1440 × 900: primeira dobra e página inteira;
- celular 390 × 844: primeira dobra e página inteira.

Com `scripts/shoot.mjs`:

```bash
cd ~/.cache/frontend-autoral-shoot   # pasta com o Playwright instalado
node ~/.claude/skills/frontend-autoral/scripts/shoot.mjs http://localhost:5173 <projeto>/shots
node ~/.claude/skills/frontend-autoral/scripts/shoot.mjs <projeto>/index.html <projeto>/shots
```

Código de saída 1 significa falha bloqueante (seção 4).

Ele salva `desktop-fold.png`, `desktop-full.png`, `mobile-fold.png`, `mobile-full.png` e
imprime erros de console, rolagem horizontal e fontes que não carregaram. Leia os PNG com a
ferramenta de leitura de imagem. Em página longa, olhe por partes.

Se a sessão tiver um navegador (Claude in Chrome, navegador embutido), ele também serve.

## 2. Teste de IA (antes da rubrica)

Olhe a primeira dobra por 3 segundos e responda com honestidade:

> Se eu mostrasse esta tela a um designer e dissesse "foi uma IA que fez", ele acreditaria na
> hora?

Se sim, a direção não chegou à tela. Identifique quais itens de `cliches.md` estão visíveis e
trate isso como o problema mais grave da rodada.

## 3. Rubrica (0 a 10 cada)

| # | Critério | 10 é |
|---|---|---|
| 1 | Clareza em 3 s | dá para dizer o que é, para quem e qual a ação principal |
| 2 | Identidade | a assinatura é visível e a página não serviria para um concorrente |
| 3 | Hierarquia | olho vai primeiro ao que importa; um foco por tela |
| 4 | Tipografia | fontes certas carregadas, escala coerente, leitura confortável |
| 5 | Composição | seções com forma ligada ao conteúdo; ritmo variado; sem repetição mecânica |
| 6 | Cor | paleta da direção, acento com parcimônia, contraste AA |
| 7 | Copy | específica, verdadeira, sem vocabulário de IA, CTAs com verbo e objeto |
| 8 | Celular | composição pensada, alvos de toque, sem overflow |
| 9 | Interação e estados | foco visível, hover sem exagero, estados presentes, movimento com função |
| 10 | Acabamento | alinhamentos, espaçamentos dos tokens, nada quebrado, nada sobrando |

Parar quando: média ≥ 8 e nenhum critério < 7. Senão, corrija os 3 critérios mais baixos com
mudanças concretas (valores, não adjetivos), tire screenshots de novo. Máximo de 3 rodadas.

Seja severo. Nota 9 ou 10 exige que você não consiga apontar nada concreto para melhorar
naquele critério.

## 4. Falhas bloqueantes

Qualquer uma impede a entrega, independentemente da nota:

- erro no console;
- rolagem horizontal no celular;
- fonte da direção não carregou (caiu no fallback);
- texto ilegível ou contraste abaixo de AA;
- texto de placeholder esquecido ("Lorem ipsum", "Título aqui") fora dos marcadores combinados;
- link ou botão que não faz nada sem estar marcado como pendente;
- flash de fundo branco em página escura;
- elemento interativo sem foco visível.

## 5. Checklist final

- [ ] `DESIGN.md` existe e o código segue os tokens dele (nenhuma cor, fonte, raio ou
      espaçamento fora da escala).
- [ ] Nenhum item de `cliches.md` presente sem motivo registrado.
- [ ] Composição das seções varia conforme o conteúdo.
- [ ] Textos passaram pela conferência de `copy.md`; nenhum dado inventado; marcadores listados
      no relatório.
- [ ] Semântica correta, `lang`, `alt`, `aria-label` em ícones sozinhos, um `h1`.
- [ ] Foco visível e navegação por teclado testada (Tab pela página inteira).
- [ ] Estados relevantes implementados (hover, focus, active, disabled, loading, erro, vazio).
- [ ] `prefers-reduced-motion` tratado; nenhuma animação sem função.
- [ ] Celular e desktop conferidos em screenshot.
- [ ] Sem dependência nova desnecessária.

## 6. Relatório ao usuário

Curto:

- a direção em 2 ou 3 linhas (conceito, assinatura, paleta e fontes);
- o que foi construído e onde (caminhos);
- o que foi conferido e como (screenshots, nota final da rubrica);
- marcadores de conteúdo real pendentes e decisões que ficaram com o usuário.

Não diga que conferiu na tela se não conferiu.
