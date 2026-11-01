# Ícones de aplicação, logos e favicons

Método e ferramentas adaptados da skill `logo-design` (kaankiziltug/logo-design-skill, MIT). Os
scripts estão em `vendor/logo-design/scripts/` e as referências completas (em inglês) em
`vendor/logo-design/references/`. A biblioteca de 1.400 logos reais da skill original **não** vem
junto (14 MB, marcas registradas de terceiros); a busca por referências usa seu conhecimento do
setor ou a skill original instalada à parte.

Um logo ou ícone **identifica, não explica**: simples, distinto, ligado ao assunto, funcionando em
16 px e em uma cor. O ícone nasce da mesma direção de arte do projeto (`DESIGN.md`): o conceito, a
paleta e a forma já decididos são o ponto de partida, nunca uma estética nova.

## Quando entra

- **Todo projeto de site ou app sai com favicon e ícone próprios** (`ux.md` §8): no mínimo um
  favicon SVG simples tirado da assinatura ou da inicial desenhada, mais o conjunto web. Isso é o
  modo leve abaixo.
- Pedido explícito de logo, marca, símbolo, ícone de app, favicon, monograma: **modo completo**.
- Já existe logo: não redesenhe. Gere só as variantes (`export_variants.py`) a partir do arquivo
  do cliente.

## Ferramentas

Python 3 sem dependências. No Windows use `python` (o `python3` costuma ser o atalho da loja).
Para renderizar PNG os scripts precisam de cairosvg, librsvg, Inkscape ou um Chrome/Chromium:
`export CHROME_PATH="$(node <skill>/scripts/achar-chrome.mjs)"` (PowerShell:
`$env:CHROME_PATH = node <skill>/scripts/achar-chrome.mjs`).

| Script | Para quê |
|---|---|
| `svg_audit.py` | Confere o SVG: texto vivo, raster, filtros, nº de cores, gradientes, ângulos quase-retos, detalhes que somem pequenos, centralização. Nota ≥ 90 e nenhuma FAIL para entregar. |
| `render_png.py` | SVG → PNG transparente em tamanhos exatos, para **olhar** o que desenhou. |
| `preview_sheet.py` | Folha HTML de teste: escada de tamanhos, 16/32 px, fundos, uma cor, desfoque, espelho/rotação, contextos (aba, ícone de app, cabeçalho), comparação lado a lado (`--refs` com arquivos seus). |
| `concept_sheet.py` | Uma imagem com os conceitos (marca grande, lockup, 64/32/16 px, nome, ideia, recomendação) para mostrar no ponto de checagem. |
| `export_variants.py` | Preto, branco, mono na cor da marca, quadrado, favicon e ícone de app; `--web-icons` gera `favicon.ico`, PNGs, `apple-touch-icon` 180, 192/512, `maskable-512`, `site.webmanifest` e o trecho do `<head>`. |
| `presentation_board.py` | Prancha de apresentação com mockups do setor (spec em `vendor/logo-design/templates/`). |

`<logo>` abaixo é `<skill>/vendor/logo-design/scripts`.

## Modo leve (favicon e ícone do projeto)

1. Tire o ícone da direção: a inicial do nome desenhada na fonte display do projeto (convertida em
   path), um recorte da ideia-assinatura, ou o objeto do mundo do assunto reduzido à silhueta.
2. Desenhe em SVG, `viewBox="0 0 256 256"`, preto primeiro (§ Construção).
3. Audite e olhe: `python <logo>/svg_audit.py icone.svg` e
   `python <logo>/render_png.py icone.svg --out-dir renders --size 512` (repita com `--size 32` e `--size 16`); leia os PNG.
4. Exporte com as cores do `DESIGN.md`:
   `python <logo>/export_variants.py icone.svg --title "<Nome>" --mono "#HEX" --icon-bg "#HEX" --web-icons --out-dir public/icons`
5. Cole o trecho de `<head>` gerado, ajuste os caminhos e confira o `theme-color`.
   - Pronto quando o ícone se lê em 16 px, funciona em uma cor e o navegador mostra o favicon certo.

## Modo completo (logo ou ícone de app pedido)

### 1. Brief
Nome exato, o que faz, público, 3–5 adjetivos da marca, concorrentes, restrições (cores,
patrimônio de marca, onde precisa funcionar: ícone de app, favicon, avatar, impressão, bordado).
Pergunta só o essencial, numa rodada; o resto você decide e registra. Os adjetivos viram pistas
visuais. Modelo: `vendor/logo-design/references/discovery-brief.md` §5.

### 2. Pesquisa e estratégia
- Liste os **clichês do setor** e trate como proibidos sem uma forma nova (fintech: azul, seta
  para cima, escudo, globo; café: grão, fumaça, xícara; saúde: cruz, coração, folha).
- **Mapa de palavras:** nome, oferta, adjetivos, promessa → substantivos, metáforas, opostos.
  Circule as interseções. Reaproveite o inventário do assunto do `DESIGN.md` (`direcao.md` §1).
- Escolha pelo menos dois **tipos de marca** diferentes para explorar
  (`vendor/logo-design/references/mark-types.md`):

| Tipo | Quando | Risco |
|---|---|---|
| Logotipo (wordmark) | nome curto e distinto | genérico sem uma letra ou detalhe próprio |
| Monograma / letra | nome longo; precisa de avatar ou ícone de app | muitas marcas usam a mesma letra |
| Pictórico | objeto com significado próprio, não literal | clip-art |
| Abstrato | ideia de comportamento ou valor | sem significado sem a marca por trás |
| Emblema | tradição, instituição, artesanal | ilegível pequeno; precisa de versão interna simples |
| Mascote | marca que fala, público jovem | caro de manter coerente |
| Combinado | símbolo + nome | os dois precisam funcionar sozinhos |

Para algo que vive sobretudo como ícone de app ou favicon: letra ou símbolo compacto primeiro.

### 3. Conceitos
- Escreva **8 a 12 conceitos de uma frase**, espalhados entre tipos. Cada um tem uma virada
  própria; frase que descreveria o logo de um concorrente não é conceito.
- Pontue rápido (clareza da ideia, distinção, simplicidade, relevância, força em tamanho pequeno)
  e construa só os **três mais fortes e mais diferentes** entre si.

### 4. Construção em SVG (preto primeiro)
- Descreva a construção em palavras antes (primitivas, raios, ângulos, unidade de grade).
- `viewBox="0 0 256 256"` para símbolos; lockups mantêm altura 256.
- Preto sobre branco, sem cor ainda. Poucos nós, arcos para curvas circulares, ângulos exatos
  (0/15/30/45/60/90°), traços e raios consistentes, vazados reais com `fill-rule="evenodd"`.
- **Sem `<text>` no final**: letras viram path. Sem raster, filtro, máscara ou gradiente para
  salvar forma fraca.
- Detalhe menor que ~1/48 da marca some; vão mínimo ≥ 1/32 da largura se precisa ler em favicon.
- Salve cada iteração (`conceito-a-v1.svg`, `-v2.svg`) em vez de sobrescrever.
- Ícone de app: símbolo dentro de quadrado arredondado (~22% de raio) ou círculo, dimensionado
  pelo olho, levemente acima do centro geométrico (`--optical-offset -0.02`). Área segura do
  maskable: conteúdo dentro do círculo central de 80%.

Detalhe e receitas: `vendor/logo-design/references/svg-construction.md` e `visual-techniques.md`.

### 5. Testar e refinar (pelo menos duas voltas)

```bash
python <logo>/svg_audit.py a.svg b.svg c.svg
python <logo>/preview_sheet.py a.svg b.svg c.svg -o preview.html
python <logo>/render_png.py a.svg b.svg c.svg --out-dir renders --size 512   # e de novo com --size 32 e --size 16
```

Abra e **olhe**. Desenhar SVG em código é desenhar às cegas. Confira:

- **Escala:** a ideia sobrevive em 16–24 px; senão, simplifique ou faça versão pequena
  (`--favicon-source`).
- **Correções ópticas:** formas redondas e pontudas passam 1–3% da linha; horizontais um pouco
  mais finas; centro óptico; versão invertida (branco no escuro) levemente mais fina.
- **Leituras:** espelhado, girado 180°, minúsculo. Procure letras, partes do corpo, símbolos
  políticos ou religiosos e sinais de perigo acidentais.
- **Teste da letra:** cada letra modificada ainda se lê como ela mesma.
- **Junções:** sem entalhes, lascas ou caroços onde traços se encontram.
- **Distinção:** lado a lado com concorrentes (`--refs`), ele se destaca? Se parece familiar e não
  é seu, é de alguém.
- **Literalidade:** se o conceito é só o produto desenhado (xícara para café), avance ou descarte.
- **Uma cor, invertido, escala de cinza:** funciona sem depender de matiz.

Checklist completa: `vendor/logo-design/references/testing-checklist.md`.

### 6. Ponto de checagem: mostre e pare

```bash
python <logo>/concept_sheet.py a.svg b.svg c.svg --names "A" "B" "C" --notes "ideia A" "ideia B" "ideia C" --recommend 1 --greyscale -o conceitos.png
```

Olhe a imagem, mostre ao usuário em escala de cinza (cor abre discussão de gosto cedo demais),
uma linha por conceito e sua recomendação, e **espere a escolha** antes de montar o kit. Pule a
pausa só se o usuário disse para não perguntar.

```markdown
<imagem dos conceitos>

### A — <Nome> · <tipo de marca>   ← recomendado
**Ideia:** <uma frase>
**Por que serve:** <2–3 itens ligados aos adjetivos, ao público e à concorrência>

### B — … / ### C — …

**Recomendação:** <uma ou duas frases, com um risco honesto por conceito>
**Próximo passo:** escolha uma direção. Quer que eu prepare o kit completo?
(paleta, versões em uma cor e invertida, lockups horizontal e vertical, versão pequena, favicon,
ícone de app e conjunto web, prancha com mockups do setor, guia de uso de uma página)
```

### 7. Kit (só depois do sim)
1. Refino final: geometria, correções ópticas, versão pequena, versão invertida mais fina.
2. Cor: 1–2 cores, próprias no setor, com contraste (`vendor/logo-design/references/color.md`).
   Para site e app, as cores vêm do `DESIGN.md`.
3. Tipografia e lockups (horizontal, vertical, só símbolo, só nome), espaçamentos travados.
4. Exportação:
   ```bash
   python <logo>/export_variants.py final-simbolo.svg --title "<Nome>" --mono "#HEX" --icon-bg "#HEX" --web-icons --favicon-source final-simbolo-pequeno.svg
   python <logo>/export_variants.py final-horizontal.svg --title "<Nome>" --only black white mono --mono "#HEX" --png 1200
   ```
5. Guia curto (`vendor/logo-design/templates/brand-guidelines-template.md`): área de proteção,
   tamanho mínimo, cores, fundos aprovados, usos errados.

## Ícones de interface (não confundir com o ícone da marca)

Ícones de função (fechar, buscar, menu) vêm de uma biblioteca com um estilo só (`oficio.md` §5);
biblioteca de ícones nunca é a identidade (`cliches.md` §5). Ícone próprio de interface só quando
a ideia-assinatura pede, e então desenhado no mesmo traço, grade e raio da marca, testado em 16 e
24 px.

## Sinais de alerta (corrija antes de mostrar)

- Literalismo de clip-art (dente para dentista, casa para imobiliária) ou clichê do setor sem
  virada.
- Iniciais genéricas numa fonte de prateleira sem modificação.
- Mais de três cores sem motivo; gradiente ou sombra para salvar forma fraca.
- Detalhes minúsculos, traços finíssimos, vãos que fecham pequeno.
- `<text>` vivo, raster, filtro ou máscara no arquivo final.
- Conceito que precisa de parágrafo para ser entendido.
- Qualquer semelhança com logo existente.

## Honestidade

- Não dá para garantir que a marca está livre: recomende busca no INPI (e bases de outros países se
  houver), busca reversa de imagem e advogado de marcas antes de registrar.
- Licença de fonte precisa permitir uso em logo; diga quais fontes assumiu e que os contornos
  foram construídos em path.
- Se não conseguiu renderizar e olhar, diga. Não afirme teste que não rodou.
