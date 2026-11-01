# Imagens: o que mostrar, de onde tirar, como tratar

Adaptado da taste-skill (`vendor/taste-skill/references/imagery.md`, com o estudo completo, vídeo
e a seção 12 sobre onde cada imagem vai). Sites fortes **mostram**; os fracos **dizem**. No estudo
de 247 sites premiados, a mídia principal cobre metade ou mais da primeira dobra em 68% dos mais bem
avaliados, e eles carregam muito mais imagens que os fracos.

## 1. Ordem de preferência

1. **Material do próprio projeto:** foto do produto, do lugar, das pessoas, do trabalho. Foto comum
   da coisa real vence foto linda de outra coisa. Pergunte o que existe e procure no repositório.
2. **Imagem gerada**, se houver ferramenta de imagem na sessão. Prompt como pauta de fotógrafo:
   assunto, ângulo, luz, fundo, proporção, "sem texto". Gere o hero primeiro e alinhe a luz do resto.
3. **Imagem real do mundo do assunto em acervos abertos** (§2): a rua do cliente em cartão-postal
   antigo, o mapa do bairro, o material de perto, o ofício em gravura, o objeto de museu do mesmo
   tipo. Honesta = ninguém confundiria com o produto, o ambiente, o prato ou a equipe do cliente.
4. **Desenho em código do próprio assunto** (§5) para o que não tem foto honesta: os objetos dele, o
   azulejo, a janela, o mapa das ruas, o documento que a ferramenta gera, a interface do software.
5. **Só tipo e cor**, feito de propósito (§6). É design legítimo, não buraco disfarçado.

Nunca: caixa cinza "imagem aqui", URL de imagem inventada, banco de imagens genérico como se fosse
o cliente, mockup de dashboard com barras cinzas, avatar aleatório.

**Piso para páginas de marketing:** pelo menos 4 imagens reais (foto, acervo, mapa, gravura, vídeo,
fragmento real de interface), em geral 6 a 12. Desenho SVG não conta para o piso. Sem nenhuma
honesta disponível, a página pode ser só tipográfica: registre o motivo no `DESIGN.md` e rode o
inspetor com `--allow few-pictures`. Telas de app não têm piso.

## 2. Acervos abertos: `assets.mjs`

Busca sem chave de API em Openverse, Wikimedia Commons, Art Institute of Chicago e Metropolitan
Museum (vídeo: Wikimedia, Internet Archive, NASA), só com licenças que permitem uso comercial
(CC0, domínio público, CC BY, CC BY-SA) por padrão.

```bash
T=<skill>/vendor/taste-skill/scripts
node $T/assets.mjs "rua augusta são paulo 1950" --orientation landscape --min-width 1600
node $T/assets.mjs "farinha de trigo macro" --license pd,cc0
node $T/assets.mjs "padaria antiga" --video                 # filmagem real, loop mudo
node $T/assets.mjs --get <ref>[,<ref>] --to assets          # baixa e registra o crédito
node $T/assets.mjs --credits --to assets                    # linha de crédito para o rodapé e o relatório
```

- **Busque o inventário, não a categoria** (`direcao.md` §1): o nome da rua, o material, o objeto
  impresso, o ofício. "padaria" traz estoque; "forno de lenha gravura século XIX" traz assunto.
- Busque em português e em inglês; acervos internacionais respondem melhor em inglês.
- **Olhe cada imagem antes de escolher** (abra o arquivo baixado). Licença, autor e página de origem
  ficam registrados; o crédito vai pequeno no rodapé e na lista do relatório.
- Imagem de acervo mostra o mundo em volta do cliente e **nunca** é apresentada como dele.
- Nunca escreva na página de onde as imagens vieram ou o que elas não são ("nenhuma destas fotos é
  da nossa loja"). Legenda diz o que a imagem é; crédito fica no rodapé.
- Sem rede: desenhe e diga no relatório que os acervos não puderam ser consultados.

## 3. Recorte e posição

- **Poucas proporções, sempre as mesmas:** por exemplo 4:5 retrato, 16:10 paisagem, 1:1 detalhe.
- **Grande:** largura total, ou meia tela com altura cheia. Seis pequenas em grade não têm presença.
  Uma dominante vence seis pequenas.
- **Recorte com intenção:** `object-fit: cover` com `object-position` escolhido por imagem.
- **Encostar na borda** (sangrar) parece desenhado; flutuar com margens iguais parece padrão.
- **Cantos retos** salvo se a direção disser outra coisa; se arredondar, um raio só para todas.
- **Sem moldura:** sem borda, sombra, mockup de aparelho ou barra de navegador em volta da foto.
- **Nada sobre o título:** nenhuma imagem cobre título ou frase de destaque em nenhuma posição de
  rolagem (o inspetor reprova `covered-text`).
- Legenda: uma linha curta, tamanho pequeno, alinhada à borda da imagem. A maioria não precisa.

## 4. Tratamento (um só para a página)

- **Intocada:** o padrão; escolha imagens cuja luz já combina.
- **Escala de cinza:** `filter: grayscale(1) contrast(1.05)` em todas ou em nenhuma.
- **Multiply sobre campo de cor:** fundo branco de estúdio some e o produto pousa na cor.
- **Escurecida para página escura:** `filter: brightness(.85) contrast(1.05)`.

Não são tratamentos: véu colorido, duotom sobreposto, blur, grão por cima, vinheta, polaroid
torta com sombra. Texto sobre foto: só um scrim neutro na área do texto (bloco a 40–55% de preto
ou degradê de 55% para transparente no terço inferior), nunca colorido.

## 5. Desenhar o assunto

- Desenhe **as coisas do assunto**, não decoração. Se você não sabe dizer o que o desenho
  representa no mundo do cliente, é enfeite.
- **Uma linguagem gráfica só:** formas chapadas, sem contorno ou com um traço único, o mesmo
  vocabulário de curva e canto, nas cores reais da paleta.
- **Três níveis de detalhe:** formas grandes que se leem de longe, médias que descrevem (a alça, o
  batente) e pequenas que recompensam o segundo olhar (a marca do fabricante, o número da casa, o
  azulejo lascado). Luz por degraus chapados de tom, não gradiente. Desenho simples demais é lido
  como "básico".
- **Grande e repetido com intenção:** o mesmo objeto volta em escalas diferentes pela página.
- Se puder ser confundido com produto real, diga em letra pequena que são ilustrações até haver
  fotos, e liste no relatório o que substituir.
- Não: blobs com gradiente, isometria de banco, ilustração genérica de gente no notebook, formas
  flutuantes, ícone em quadrado.

## 6. Só tipo e cor

- A tipografia vira imagem: uma frase em 10–14vw, uma lista em 5vw, numerais em tamanho display.
- Cor em escala: campo cheio, seção invertida, divisão em dois campos.
- A forma do assunto como motivo chapado único, em CSS, cortado pela tela.
- Não acrescente: ícone em quadrado, gradiente abstrato, grade de pontos, divisória em onda,
  forma flutuante, emoji, caixa vazia esperando foto.

## 7. Mostrar software

- Fragmento real da interface em HTML no tamanho verdadeiro, com conteúdo crível (rótulos reais,
  números que fecham, um item selecionado), recortado no que prova o ponto. Barras cinzas no lugar
  de texto são piores que nenhuma imagem.
- Sem notebook nem moldura de celular (salvo app de celular, e então um retângulo arredondado
  simples).
- A raiz do fragmento leva `data-ui`; o CSS dele fica sob `[data-ui]`. O inspetor e o lint deixam o
  interior em paz (lá valem bordas finas e sombra de menu do próprio produto). `data-ui` só em
  fragmento recortado, nunca numa seção inteira.

## 8. Markup e desempenho

- `width`/`height` ou `aspect-ratio` em toda imagem; `loading="lazy"` abaixo da dobra;
  `fetchpriority="high"` no hero; AVIF/WebP com fallback; `srcset`/`sizes`.
- `alt` diz o que a imagem mostra e por que está ali; decorativa leva `alt=""`.
- Vídeo: `muted autoplay loop playsinline` com `poster`, curto, abaixo de ~25 MB, e botão de pausa
  se passar de 5 s (`oficio.md` §7). Com `prefers-reduced-motion`, mostre o pôster.
