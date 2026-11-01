# Revisão: medir, olhar, dar nota, corrigir

Interface gerada sem olhar o resultado é onde nasce a maioria dos defeitos: fonte que não
carregou, seção que estourou no celular, contraste que parecia bom no código. Este arquivo define
como medir, como olhar e quando parar. A medição e a crítica vêm da taste-skill; o formato de
achados de interação, de Emil Kowalski; a conferência de UX, de `leis-ux.md`.

## Sumário

1. O portão automático
2. Screenshots
3. Teste de IA
4. Como olhar: 15 passadas
5. Rubrica e tetos
6. Escrever a crítica
7. O que corrigir primeiro
8. Falhas bloqueantes
9. Checklist final
10. Relatório
11. Modo revisar: formato dos achados

---

## 1. O portão automático

```bash
node <skill>/scripts/inspecionar.mjs <url | caminho/index.html> --src <pasta-do-código>
node <skill>/scripts/inspecionar.mjs <url> --app --src src      # tela de app (dashboard, admin)
```

- O `--src` roda o **lint** no código (gradiente, sombra, mono, eyebrow, numeração 01/02,
  `transition: all`, `ease-in`, `scale(0)`, `h-screen`, bounce, frases de marketing em inglês,
  lorem ipsum, cor padrão do Tailwind).
- Depois o **inspetor** abre a página num Chrome real em 1440, 768 e 390 px e mede: linhas de
  cada título, tamanhos, fontes realmente carregadas, cores, filetes, sombras, gradientes,
  contraste, overflow, imagens quebradas, erro de JavaScript, e a moldura (margens iguais, seção
  encolhida num lado, trecho vazio, título da página, seção sem título, texto colado na borda).
  Também confere a página com `prefers-reduced-motion` (nada pode ficar invisível).
- Arquivo local é servido por um servidor descartável; com build, rode o último portão no build
  de produção (`vite build && vite preview`, `next build && next start`), não só no dev server.
- **Corrija toda FAIL.** Trate cada WARN como errada, a menos que você a defenda para um designer
  em uma frase. Não discuta com o medidor nem esconda coisas dele.
- Liberar uma regra só com motivo escrito no `DESIGN.md` e no relatório:
  `--allow regra,regra` (ex.: marca que exige o violeta → `palette-purple`; página só tipográfica
  de propósito → `few-pictures`). `still-page` já vem liberada: aqui movimento é opcional
  (`movimento.md`).
- Fragmento real de interface dentro de página de marketing: raiz com `data-ui`.
- Sem Node 22 ou sem navegador: rode só o lint
  (`node <skill>/vendor/taste-skill/scripts/lint.mjs <pasta>`, Node 18+), tire screenshots com a
  ferramenta que houver e diga no relatório que o inspetor não rodou.

## 2. Screenshots

O inspetor salva em `.taste-skill/inspect/` a primeira dobra e folhas da página inteira em cada
largura, e imprime a lista. **Abra todas** com a ferramenta de leitura de imagem, não só a
primeira dobra. Se houver cenas de rolagem, o inspetor também filma a rolagem
(`desktop-film-NN.jpg`) e `vendor/taste-skill/scripts/scenes.mjs` fotografa cada cena.

Alternativa leve (Playwright instalado em `~/.cache/frontend-autoral-shoot`):

```bash
cd ~/.cache/frontend-autoral-shoot
node <skill>/scripts/shoot.mjs <url-ou-arquivo> <projeto>/shots
```

Salva `desktop-fold.png`, `desktop-full.png`, `mobile-fold.png`, `mobile-full.png` e acusa erro de
console, rolagem horizontal e fonte que não carregou (código 1 = falha bloqueante).

Se a sessão tiver um navegador (Claude in Chrome, navegador embutido), ele também serve.
**Julgue só as imagens.** Se o problema aparece no screenshot, ele é real, diga o código o que
disser.

## 3. Teste de IA

Olhe a primeira dobra por 3 segundos e responda com honestidade:

> Se eu mostrasse esta tela a um designer e dissesse "foi uma IA que fez", ele acreditaria na
> hora?

Se sim, a direção não chegou à tela. Identifique quais itens de `cliches.md` estão visíveis e
trate isso como o problema mais grave da rodada.

## 4. Como olhar: 15 passadas

Uma de cada vez, sem misturar. Primeiro a dobra do desktop, depois as folhas da página, depois o
celular.

1. **Um segundo, depois cinco.** Olhe e desvie. O que viu? Deve haver uma resposta só (uma
   palavra, uma imagem, um objeto). "Um site" = não há ponto focal. Depois cinco segundos como
   estranho: dá para dizer o que é, para quem e o que fazer?
2. **Apertar os olhos.** A página deve se reduzir a 2 ou 3 massas grandes de tamanhos bem
   diferentes. Muitas massas médias = nada lidera.
3. **Cobrir o logo.** Esta dobra serviria a um concorrente ou a outro setor? Depois role: a ideia
   chega ao preço, ao FAQ e ao rodapé, ou a página vira blocos de estoque?
4. **Bordas.** Siga a borda esquerda de cada bloco de texto. Duas ou três posições reaproveitadas
   = composto. Seis = colocado um por um.
5. **Espaço e moldura.** Perto o que é relacionado, longe o que não é? Espaço entre seções
   claramente maior que dentro delas? Algum buraco por acidente? Margens esquerda e direita iguais?
   Alguma seção com texto numa metade e a outra vazia? Trecho vazio maior que meia tela?
6. **Tipo.** O salto do corpo para o título é decidido (3× ou mais)? Mais de cinco tamanhos?
   Palavra órfã na última linha? Parágrafo com mais de ~75 caracteres por linha ou centralizado
   por mais de 3 linhas?
7. **Cor.** Diga as proporções: qual cor domina, qual sustenta, onde está o acento. Acento em dez
   lugares não significa nada; na ação e em um detalhe significa "aqui".
8. **Imagens.** Quantas reais? Cada uma faz um trabalho (mostrar a coisa, situar o lugar, provar a
   afirmação)? Recortes com as mesmas proporções? Caixa cinza, foto esticada, tela falsa de
   barras? Luz e tratamento iguais?
9. **Repetição.** Uma palavra para a forma de cada seção. A mesma duas vezes seguidas, ou três na
   página, é o template.
10. **Celular.** É uma composição própria, com recorte e quebras próprias, ou o desktop espremido?
    A primeira tela ainda é uma coisa clara?
11. **Cheio.** Cada tela do desktop é um cartaz ou uma coluna estreita de letra miúda com chão
    morto dos lados? Austero não é contido: se parece wireframe inacabado, está subconstruído.
12. **Substância.** Cada seção pedida entrega a informação completa e legível? O botão da ação
    principal é botão de verdade na primeira dobra?
13. **Colisões.** Algo sobre um título, frase ou botão em alguma posição de rolagem? Algo saindo
    da tela do celular?
14. **O concorrente e a coisa viva.** Ponha o nome do concorrente: a ideia ainda funciona? Qual é
    a coisa viva? Resposta fraca em qualquer uma é o primeiro problema da rodada.
15. **Leis de UX e sensação.** Rode a conferência rápida de `leis-ux.md` §7 e, se houver
    interação, os filtros de `movimento.md` (frequência, curva, duração, origem, pressão, hover
    só com mouse, reduced motion).

Nos testes cegos, a página rica cheia de clichês venceu a limpa e rala todas as vezes. As
passadas 11–13 garantem que tirar os enfeites não levou a substância junto.

## 5. Rubrica e tetos

Nota de 0 a 10 por critério:

| # | Critério | 10 é |
|---|---|---|
| 1 | Clareza em 5 s | dá para dizer o que é, para quem e qual a ação principal; título no `h1` da primeira dobra |
| 2 | Identidade | a frase da ideia é visível, passa no teste do concorrente e chega até o rodapé |
| 3 | Hierarquia | um foco por tela; 2–3 massas no squint; o olho vai primeiro ao que importa |
| 4 | Tipografia | fontes certas carregadas, ≤ 5 tamanhos com saltos decididos, títulos em ≤ 2 linhas, leitura confortável |
| 5 | Composição | moldura com margens iguais, 2–3 bordas, seções vizinhas com formas diferentes, cada tela um cartaz |
| 6 | Cor e imagem | paleta da direção, acento com parcimônia, contraste AA; imagens reais e tratadas igual |
| 7 | Copy e conteúdo | específica, verdadeira, completa, sem vocabulário de IA, CTAs com verbo e objeto |
| 8 | Celular | composição própria, alvos ≥ 44 px, sem overflow, sensação de app (`movimento.md` §9) |
| 9 | Interação e UX | leis de UX conferidas, estados completos, foco visível, movimento só com função e nos valores de `movimento.md` |
| 10 | Acabamento | alinhamentos, tokens, dados de pior caso (`ux.md` §9), nada quebrado, nada sobrando |

**Parar quando:** média ≥ 8, nenhum critério < 7, nenhuma FAIL no inspetor e a lista de problemas
vazia. Senão, corrija os 3 problemas mais graves com mudanças concretas (valores, não adjetivos),
meça e olhe de novo. Máximo de 3 rodadas.

**Tetos** (mandam sobre a média):

- Alguma FAIL do inspetor ainda presente: média máxima **6**.
- Título com 3+ linhas, eyebrow, rótulo mono, numeração 01/02/03, gradiente decorativo, sombra em
  elemento em repouso ou filete decorativo visível: média máxima **6,5**.
- Passada 3 falha (serviria a qualquer um): Identidade ≤ **6**. Ideia passa no teste do
  concorrente: Identidade ≤ **7**. Página de marketing sem coisa viva: Identidade ≤ **7,5**.
- Menos de 4 imagens reais numa página de marketing sem motivo registrado: Cor e imagem ≤ **6,5**.
- Algum marcador cinza, lorem ou "imagem aqui": Copy ≤ **5**. Seção pedida ausente ou rala:
  Copy ≤ **6**.
- Duas ou mais telas de desktop quase vazias, ou texto corrido pequeno e cinza: Composição ≤ **6,5**.
- Margens desiguais, seção encolhida num lado ou trecho vazio > meia tela: Composição ≤ **6,5**.
- Sem botão real da ação principal na primeira dobra: Clareza ≤ **7**. Passada 1 falha (sem título
  claro): Clareza ≤ **6**. Seção de texto sem título: Clareza ≤ **7**.
- Algo cobrindo um título: Acabamento ≤ **6**. Faixa em branco onde uma revelação não disparou ou
  conteúdo cortado: Acabamento ≤ **5**.
- Animação em ação de teclado, `ease-in` em interface, `scale(0)`, `transition: all` ou hover com
  movimento sem media query: Interação ≤ **7**.

Seja severo. Nota 9 ou 10 exige que você não consiga apontar nada concreto para melhorar naquele
critério. Se a primeira nota do seu próprio trabalho for 9, dê de novo como o jurado que não o
construiu.

## 6. Escrever a crítica

Escreva, não só pense. Sempre neste formato, para comparar rodadas:

```
RODADA n
Visto em um segundo: …
Ideia (uma frase): …
Coisa viva: …
Forma por seção: hero=… / cardápio=… / …
Inspetor: n FAIL, n WARN (as que ficaram e por quê)
Notas: clareza _ · identidade _ · hierarquia _ · tipo _ · composição _ · cor/imagem _ · copy _ · celular _ · interação/UX _ · acabamento _ → média _._
Tetos aplicados: …
Três problemas mais graves (o mais visível primeiro), cada um com o screenshot onde aparece e a correção:
1. …
2. …
3. …
```

Nomeie o problema como um designer diria a um colega: "o parágrafo de apoio começa 40 px à esquerda
da borda do título", "o depoimento é a terceira seção dividida seguida", "o recorte do celular
corta a garrafa". "Poderia ser mais polido" não é achado.

## 7. O que corrigir primeiro

Nesta ordem; os de baixo não salvam os de cima:

1. **A ideia.** Se a passada 3 falha, mude o conceito do hero, não os detalhes.
2. **Hierarquia.** Um elemento dominante por tela.
3. **Composição.** Bordas compartilhadas, espaço entre seções, variedade de forma, buracos.
4. **Tipografia.** Contraste de escala, quebras, medida, entrelinha.
5. **Imagem.** Troque as fracas, unifique recortes e tratamento.
6. **Cor.** Proporção e disciplina do acento.
7. **Detalhe.** Estados, foco, alinhamentos, celular, dados de pior caso.
8. **Movimento.** Por último.

Quando tirar algo deixa um buraco, não preencha com enfeite: feche o buraco, aumente o que ficou,
ou deixe uma imagem ou campo de cor ocupar o espaço.

## 8. Falhas bloqueantes

Qualquer uma impede a entrega, independentemente da nota:

- qualquer FAIL do inspetor (inclui erro de JavaScript, overflow, contraste, imagem quebrada,
  título invisível com reduced motion);
- erro no console;
- rolagem horizontal no celular;
- fonte da direção não carregou (caiu no fallback);
- texto ilegível ou contraste abaixo de AA;
- texto de placeholder esquecido ("Lorem ipsum", "Título aqui") fora dos marcadores combinados;
- link ou botão que não faz nada sem estar marcado como pendente;
- flash de fundo branco em página escura;
- elemento interativo sem foco visível;
- zoom travado (`user-scalable=no`, `maximum-scale=1`).

## 9. Checklist final

- [ ] `DESIGN.md` existe e o código segue os tokens dele (nenhuma cor, fonte, raio, espaçamento ou
      curva fora da escala).
- [ ] Inspetor com **0 FAIL** em 1440, 768 e 390 na versão final; WARN restantes com motivo.
- [ ] Todas as screenshots da última rodada abertas, não só a primeira dobra.
- [ ] Crítica da última rodada escrita no formato do §6.
- [ ] Nenhum item de `cliches.md` presente sem motivo registrado.
- [ ] Composição das seções varia conforme o conteúdo; toda seção tem título; margens iguais.
- [ ] Textos passaram pela conferência de `copy.md`; nenhum dado inventado; marcadores e amostras
      listados no relatório.
- [ ] Imagens de acervo creditadas no rodapé e listadas no relatório.
- [ ] Semântica correta, `lang`, `alt`, `aria-label` em ícones sozinhos, um `h1`.
- [ ] Foco visível e navegação por teclado testada (Tab pela página inteira).
- [ ] Estados relevantes implementados (hover, focus, active, disabled, loading, erro, vazio) e
      dados de pior caso testados.
- [ ] Movimento conferido contra `movimento.md`; `prefers-reduced-motion` tratado.
- [ ] Conferência rápida de `leis-ux.md` §7 sem "não".
- [ ] Favicon e ícones próprios no lugar (`icones.md`).
- [ ] Celular e desktop conferidos em screenshot.
- [ ] Sem dependência nova desnecessária.

## 10. Relatório ao usuário

Curto:

- a direção em 2 ou 3 linhas (conceito, frase da ideia, coisa viva, paleta e fontes) e, se usou o
  sorteio, a direção sorteada (nome e semente) e os re-sorteios com motivo;
- o que foi construído e onde (caminhos);
- o que foi conferido e como (inspetor: FAIL/WARN; screenshots; nota final e o que ainda falta);
- imagens de acervo com título, autor, licença e origem (`assets.mjs --credits`) e onde o crédito
  ficou na página; desenhos que substituem foto;
- marcadores de conteúdo real pendentes, amostras a confirmar e decisões que ficaram com o usuário.

Não diga que conferiu na tela se não conferiu. Não declare checagem que não rodou.

## 11. Modo revisar: formato dos achados

Rode o inspetor no estado atual (`--out .taste-skill/antes`), faça as 15 passadas e entregue,
agrupado por gravidade (bloqueante, alto, médio, baixo), sem preâmbulo, **uma tabela única** por
grupo:

| Onde | Antes | Depois | Por quê |
|---|---|---|---|
| `src/Hero.tsx:42` | `transition: all 300ms` | `transition: transform 200ms var(--ease-out)` | Propriedades explícitas; `all` anima o que não devia |
| `styles.css:118` | título de 4 linhas em 390 px | "Pão de fermentação natural" (28 caracteres) | Título cabe em 2 linhas; o resto vai para a frase de apoio |
| screenshot `mobile-fold` | botão principal de 36 px de altura | 48 px, perto do polegar | Lei de Fitts; alvo de toque ≥ 44 px |

Nunca em lista "Antes:/Depois:" separada. Feche com as **três mudanças que mais moveriam a página**
e as medições do inspetor. Se for corrigir depois, meça de novo em `.taste-skill/depois` e mostre
antes e depois lado a lado.
