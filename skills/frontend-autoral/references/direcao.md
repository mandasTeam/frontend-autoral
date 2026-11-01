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

Escolha 3 a 5 itens com potencial visual. Cada um vira candidato a motivo, paleta, forma ou
regra tipográfica.

## 2. Conceito em uma frase

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

## 3. A ideia-assinatura

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
nos outros. Ela não é decoração solta; tem que ser parte da leitura.

## 4. Paleta

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

## 5. Tipografia

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

## 6. Grade, espaço e forma

- **Grade:** número de colunas, margens, largura máxima do texto. Diga onde ela é quebrada de
  propósito.
- **Espaço:** uma escala (por exemplo 4, 8, 12, 16, 24, 40, 64, 104) e a regra de ritmo:
  espaço pequeno dentro de grupos, grande entre grupos. Seções com respiros diferentes conforme
  o peso do conteúdo.
- **Forma:** raio por tipo de elemento (campo, botão, imagem, superfície), não um raio global.
  Pode ser zero em tudo e curva só num lugar, ou o contrário. Diga se há borda, sombra, ou
  nenhuma das duas, e por quê.

## 7. Movimento

Uma frase de regra e uma lista curta. Exemplo: "Só o carimbo se move: aparece com um
`scale` de 1,08 para 1 em 180 ms quando o formulário é enviado. Todo o resto é estático. Com
`prefers-reduced-motion`, o carimbo aparece sem animação."

## 8. Wireframes

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

## 9. Teste de troca

Releia a direção e pergunte:

1. Se eu trocasse o nome do produto por um concorrente, a direção ainda serviria? Se sim, está
   genérica: volte ao passo 1 e use itens mais específicos.
2. Algum item cai num clichê de `cliches.md` sem motivo escrito? Troque ou justifique.
3. A assinatura aparece no conjunto inteiro, ou só no hero?
4. Há mais de um lugar "ousado"? Escolha um.

Registre no `DESIGN.md` o que mudou após o teste.
