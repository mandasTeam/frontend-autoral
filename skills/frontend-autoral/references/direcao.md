# Direção de arte: do assunto ao sistema

Uma direção de arte boa é específica o bastante para que outra pessoa construa a página sem
perguntar nada, e para que ninguém a confunda com a de outro produto. Este arquivo mostra como
chegar nela a partir do assunto, em vez de partir de um estilo.

## 1. Minerar o assunto

Antes de pensar em cor ou fonte, liste coisas do mundo do produto. Para uma padaria de bairro,
um app de contabilidade para MEI ou um portfólio de arquiteta, pergunte:

- **Materiais e texturas:** papel de embrulho, farinha, concreto, recibo térmico, planta baixa.
- **Ofício e ferramentas:** o que as pessoas desse setor manipulam todo dia.
- **Objetos e documentos típicos:** etiqueta, nota fiscal, carimbo, prancha, cardápio de giz.
- **Lugares e luz:** balcão às 6h, escritório com luz fria, canteiro de obra ao meio-dia.
- **Vocabulário e ritmo:** como o público fala, que palavras usa, que tom confia.
- **O que o público já viu demais:** os concorrentes diretos. Olhe 2 ou 3 e anote o que todos
  fazem igual, para não repetir.

Feche um **inventário de 8 a 12 itens que pertencem a este cliente e a nenhum concorrente**
(método da taste-skill): o nome e o que ele significa; endereço, rua, bairro e como o lugar é
(azulejo, letreiro, cor da fachada, luz, clima); os números do brief (lugares, quartos, minutos até
o mar, preço, ano de fundação); a restrição com que ele vive (uma fornada por dia, só com hora
marcada, fechado no inverno); seus materiais e cores; seus rituais e horários (forno aceso às 5h,
balsa às 7h); os impressos do seu mundo (comanda, etiqueta, bilhete, receita, nota). Nos testes
cegos da taste-skill, a página vencedora de cada brief saiu de um item dessa lista; as perdedoras
tinham boa composição e uma ideia de categoria.

Escolha 3 a 5 itens com potencial visual. Cada um vira candidato a motivo, paleta, forma ou
regra tipográfica, e cada lugar, material e impresso vira busca de imagem (`imagens.md` §2).

## 2. O argumento da página

Antes de qualquer desenho, liste a página como afirmações com prova, uma por seção (detalhe em
`copy.md` §1). As afirmações decidem quais seções existem e em que ordem; seção sem afirmação sai.
É assim que se foge da sequência de template (hero, logos, 3 features, depoimento, preço, CTA).

## 3. Sorteio de composição (opcional, recomendado para páginas)

Pedido para inventar um visual, um modelo escolhe o padrão da categoria toda vez. O `draw.mjs` da
taste-skill sorteia **composições estudadas em 247 sites premiados** (hero, blueprints de seção,
sistema tipográfico, paleta, fotos de apoio) e lembra os sorteios recentes para projetos seguidos
não se parecerem.

```bash
T=<skill>/vendor/taste-skill/scripts
node $T/draw.mjs --list sectors                     # escolha o setor mais próximo
node $T/draw.mjs --sector <setor> --brief "<uma linha sobre o assunto>" \
  --sections <papéis na ordem do argumento> [--have photography,product-ui,...] [--keep palette,type] --options 3
node $T/draw.mjs <mesmos argumentos, sem --options> --direction <id escolhido>
```

- Ponha o brief e os papéis em inglês (`features, showcase, how-it-works, proof, pricing, faq,
  contact, about, work, gallery, list...`; `--list roles`). O resto do trabalho segue em pt-BR.
- `--have` só com o que existe de verdade (fotos do próprio projeto, interface real). Imagem de
  acervo aberto não conta.
- Das três opções, escolha a que **carrega algo que só este cliente tem** (do inventário), não a
  mais familiar. Escreva o motivo em uma linha no `DESIGN.md`.
- A folha sorteada é ponto de partida de **composição**. Ela passa pelo filtro desta skill:
  - **Paleta e tipo:** se brigarem com o material do assunto ou caírem num dos visuais padrão de
    `cliches.md` §1, mantenha as proporções sorteadas e tire as cores do assunto (ou
    `--redraw palette`). Com marca existente, `--keep palette,type`.
  - **Cenas de rolagem** (§9 da folha) só entram se o usuário pedir algo cinematográfico; o gosto
    da casa é movimento sutil e objeto atravessando a tela é vetado. Ignore-as no padrão.
  - **Movimento sorteado** passa por `movimento.md`.
- Re-sorteie um item (`--redraw hero|type|palette|photos|section:<papel>`) só com motivo que você
  diria em voz alta (contradiz a marca, pede imagem que não existe, a seção não comporta o conteúdo
  real; `--alternatives <papel>` lista as outras). Registre no `DESIGN.md`.
- `--show` reimprime a folha; releia antes de construir cada seção.
- Sem Node 18+ ou para componente isolado: pule o sorteio e siga daqui direto.

## 4. Conceito em uma frase

Junte os itens numa frase que soe como uma cena, não como um adjetivo.

- Fraco: "moderno, limpo e confiável". Serve para qualquer coisa.
- Forte: "um caderno de obra bem cuidado: papel quadriculado, cotas em lápis, um carimbo
  vermelho de aprovado".
- Forte: "a vitrine de uma relojoaria antiga à noite: vidro, latão polido, etiquetas
  manuscritas".

Escreva também:

- **Parece:** 3 coisas concretas (objetos, publicações, lugares).
- **Não parece:** 3 coisas, incluindo pelo menos um dos visuais padrão de IA mais próximo do
  tema (`cliches.md`, seção 1). Isso é a anti-referência: o que um cliente rejeitaria.

## 5. A ideia-assinatura e a frase da ideia

Um gesto só, reconhecível, que carrega a identidade. Exemplos de tipos de assinatura:

- **Tipográfica:** um título em uma fonte com muito caráter, usado uma vez, grande; numerais
  de um tipo específico; uma régua de leitura.
- **Material:** textura de papel, retícula de impressão, grão de filme, linhas de planta baixa.
- **Estrutural:** uma grade incomum (coluna estreita deslocada, margem de caderno, índice
  lateral fixo), uma forma de navegação própria do conteúdo.
- **Imagem:** fotografia real com tratamento consistente (duotom, recorte, enquadramento).
- **Interação:** um único comportamento que responde ao usuário de forma ligada ao produto
  (um seletor que se comporta como o objeto real).

A assinatura aparece em todo o conjunto, em intensidades diferentes: forte num lugar, sutil
nos outros. Ela não é decoração solta; tem que ser parte da leitura. Leve-a até preço, FAQ e
rodapé: a falha mais comum, mesmo em sites bons, é uma primeira dobra própria seguida de blocos de
template.

**A frase da ideia.** Não comece a construir antes de preencher as duas lacunas com coisas do
inventário:

> Nesta página, **[algo que pertence ao assunto]** vira **[o recurso de composição escolhido]**.

Onde procurar a primeira lacuna: o que o produto **produz** (ponha a saída real na página como
material), sua **forma** (amplie, corte, faça dela a moldura), seu **nome** (as letras seguram uma
foto, empilham, se dividem), seu **lugar** (a vista que dá vontade de estar lá), seu **ritual** (uma
sequência que a rolagem pode encenar), seu **impresso** (bilhete, cardápio, etiqueta, recibo,
convite, manual), seu **oposto** (que outra categoria tem o sentimento que esta não tem).

**Teste do concorrente:** ponha o concorrente real mais próximo na frase (a padaria a duas ruas, o
outro marceneiro de carvalho). Se a frase continua valendo, a ideia é da categoria. "Pão" é toda
padaria; "as sete portas da rua que dá nome a esta" é só esta.

**A coisa viva.** Uma única coisa que o visitante pode fazer, ou que muda a cada visita, feita da
ideia: escolher a madeira e ver a cadeira nela; digitar o nome e vê-lo nas letras da fundição;
ajustar o empréstimo e ler a parcela real; ver se o fogão do refúgio está aceso agora e quanto falta
para a última balsa. Nos testes cegos, toda página vencedora tinha uma, e os jurados a citavam
primeiro. Regras: usa conteúdo real, funciona com o polegar, tem alternativa simples sem script,
nunca bloqueia a leitura, segue a Lei de Jakob nos controles (`leis-ux.md`) e é **uma** coisa, não
um parquinho. Ela costuma ser o "momento orquestrado" da página (`movimento.md` §2). Em tela de app
e componente isolado, não se aplica.

## 6. Paleta

- 4 a 6 cores **nomeadas pelo mundo do assunto** (farinha, casca, forno; não primary-500).
- Tire a cor de algo real: uma foto do produto, um material, a embalagem, o logo. Se houver
  imagem do cliente, extraia a paleta dela.
- Papéis claros: fundo, superfície, texto, texto de apoio, acento, estado (erro/sucesso só se
  houver).
- Neutros tingidos levemente pela cor dominante. Cinza puro tende a parecer genérico.
- Calcule o contraste de cada par texto/fundo e anote na tabela. Texto ≥ 4,5:1; texto grande
  (≥ 24 px, ou ≥ 18,66 px em negrito) e componentes de interface ≥ 3:1. Uma cor que não passa
  vira "nunca texto".
- Decida a proporção: qual cor domina (~60%), qual sustenta (~30%), qual pontua (~10%).
- Tema escuro só se o assunto pedir (cinema, uso noturno, ferramenta de foco), não por ser "tech".

## 7. Tipografia

- 1 ou 2 famílias. Cada uma com papel definido (display, texto, dados).
- Escolha pela voz do produto: de onde vem essa letra? Tipos com história ligada ao assunto
  (grotescas de sinalização, serifas de livro, mono de recibo, condensadas de cartaz) dão
  identidade de graça.
- Fontes com licença aberta e boa variedade: Google Fonts, Fontshare, Velvetyne, Collletttivo.
  Confira a licença antes de usar. Prefira as menos usadas que caibam no tema; evite as
  da lista de `cliches.md` como voz principal.
- Escala com razão definida (1,2 para interfaces densas; 1,25 a 1,333 para sites; maior só
  para um momento display). Anote os tamanhos de cada nível.
- Corpo ≥ 16 px, altura de linha 1,4 a 1,7 (mais para serifa e linhas longas), 45 a 75
  caracteres por linha.
- Confira os glifos do português: ã, õ, ç, é, ê, à. Fonte sem acento destrói o título.

## 8. Grade, espaço e forma

- **Grade:** número de colunas, margens, largura máxima do texto. Diga onde ela é quebrada de
  propósito.
- **Espaço:** uma escala (por exemplo 4, 8, 12, 16, 24, 40, 64, 104) e a regra de ritmo:
  espaço pequeno dentro de grupos, grande entre grupos. Seções com respiros diferentes conforme
  o peso do conteúdo.
- **Forma:** raio por tipo de elemento (campo, botão, imagem, superfície), não um raio global.
  Pode ser zero em tudo e curva só num lugar, ou o contrário. Diga se há borda, sombra, ou
  nenhuma das duas, e por quê.

## 9. Movimento

Uma frase de regra e uma lista curta, decidida com `movimento.md` (frequência, propósito, curva,
duração). Exemplo: "Só o carimbo se move: aparece de `scale(1.08)` para 1 com opacidade, em 180 ms
`--ease-out`, quando o formulário é enviado. Botões afundam para `scale(0.97)` ao apertar. Todo o
resto é estático. Com `prefers-reduced-motion`, o carimbo aparece só com opacidade."

## 10. Ícone e favicon

Diga de onde sai o ícone do projeto (inicial desenhada na fonte display, recorte da assinatura,
silhueta de um objeto do inventário) e em que cores. Construção e exportação em `icones.md`.

## 11. Wireframes

Desenhe cada seção em ASCII, com o motivo de a forma ser aquela. Varie conforme o conteúdo:

```
[Hero: texto ancorado embaixo à esquerda, foto sangrando à direita]
┌───────────────────────────────┬──────────────┐
│                               │              │
│                               │    FOTO      │
│ Pão de fermentação natural,   │   (forno)    │
│ assado às 6h na Rua Tal, 120. │              │
│ [Ver o que tem hoje]          │              │
└───────────────────────────────┴──────────────┘

[Cardápio do dia: lista tipográfica, preço alinhado à direita, sem cards]
Baguete ........................... R$ 9
Ciabatta .......................... R$ 11
```

Se dois wireframes seguidos tiverem a mesma forma, pergunte se o conteúdo é mesmo do mesmo tipo.

## 12. Teste de troca

Releia a direção e pergunte:

1. Se eu trocasse o nome do produto por um concorrente, a direção ainda serviria? Se sim, está
   genérica: volte ao passo 1 e use itens mais específicos.
2. Algum item cai num clichê de `cliches.md` sem motivo escrito? Troque ou justifique.
3. A assinatura aparece no conjunto inteiro, ou só no hero?
4. Há mais de um lugar "ousado"? Escolha um.
5. A frase da ideia passa no teste do concorrente? A coisa viva usa conteúdo real?
6. Tirar os clichês deixou só vazio? Remover enfeite é metade do trabalho; a outra metade é
   substância: tipo maior, campos de cor inteiros, imagens reais do mundo do assunto e cada seção
   com o conteúdo completo. Uma página "limpa" e rala perde para uma rica (ver `cliches.md` §11).

Registre no `DESIGN.md` o que mudou após o teste.
