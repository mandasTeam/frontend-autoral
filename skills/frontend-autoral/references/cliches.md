# Clichês: o que não fazer

Esta lista existe porque estes padrões são o caminho de menor esforço de um modelo de
linguagem. Aparecem juntos em milhares de sites e fazem a interface parecer "feita por IA" em
um segundo. Nenhum item é proibido por ser feio: é proibido **por padrão**. Se o brief pedir,
ou se houver um motivo concreto ligado ao produto, use e registre o motivo no `DESIGN.md`.

O sinal de alarme é o acúmulo. Um item isolado com motivo é decisão; vários juntos sem motivo
é template.

## Sumário

1. Os cinco visuais padrão de IA
2. Layout e estrutura
3. Cores, gradientes e efeitos
4. Tipografia e hierarquia
5. Cards, botões, ícones e componentes
6. Animações e interações
7. Textos e conteúdo
8. Identidade e originalidade
9. Consistência e implementação
10. Princípios obrigatórios

---

## 1. Os cinco visuais padrão de IA

Fugir de um clichê costuma levar direto a outro. Estes cinco são as "saídas criativas" mais
comuns; trate-os como padrão também.

1. **SaaS roxo:** fundo escuro ou branco, gradiente roxo/azul/rosa, hero centralizado, Inter,
   cards com ícone, glow.
2. **Editorial creme:** fundo creme (`#F4F1EA` e vizinhos), serifa display, acento terracota
   (`#D97757` e vizinhos).
3. **Preto com acento ácido:** fundo quase preto, um único acento verde-limão, laranja ou
   vermelhão, mono em tudo.
4. **Jornal de linhas finas:** grade de jornal com filetes, raio zero, tudo em caixa-alta pequena.
5. **Kit de cards:** cards idênticos com o mesmo raio, a mesma sombra `rgba(0,0,0,.1)` e
   gradientes decorativos.

E a "moldura de template" que costuma vir com qualquer um deles: rótulo em caixa-alta espaçada
acima de todo título, metadados "A · B · C", rótulos "PALAVRA — fragmento", `#0B0B0B`/`#111`
como preto padrão, rótulos mono minúsculos em tudo, "→" em todo link, numeração 01/02/03 em
conteúdo que não é sequência.

## 2. Layout e estrutura

- Layout genérico de landing page de SaaS.
- A mesma estrutura de título centralizado, subtítulo, dois botões e gradiente de fundo em
  todo projeto.
- Centralizar indiscriminadamente elementos e seções. Centralizado é o padrão seguro, não o
  melhor; alinhamento à esquerda, coluna deslocada, ancorado embaixo, texto sobre imagem
  sangrada são alternativas.
- Cards para todo tipo de conteúdo.
- Todas as seções em grades idênticas de três ou quatro colunas.
- A mesma estrutura visual repetida em todas as seções.
- Containers, painéis ou caixas sem necessidade funcional.
- Elementos flutuantes decorativos sem propósito.
- Espaçamentos uniformes que deixam o layout mecânico.
- Preencher espaços vazios com elementos desnecessários. Espaço vazio é parte da composição.
- Sacrificar a hierarquia em favor da simetria artificial.
- Estruturas previsíveis só porque são comuns em templates (hero, logos, 3 features,
  números, depoimentos, preço, FAQ, CTA final). Cada seção precisa justificar a existência.

## 3. Cores, gradientes e efeitos

- Gradientes roxos, azuis ou rosas por padrão.
- Gradientes só para parecer moderno.
- Glow, neon ou brilho colorido em excesso.
- Glassmorphism indiscriminado.
- Blur decorativo em vários elementos.
- Manchas luminosas, auroras, halos ou blobs como decoração.
- Sombras exageradas em todos os componentes.
- Bordas com gradiente chamativo.
- Cores vibrantes misturadas sem paleta coerente.
- Fundos com partículas, pontos luminosos ou formas abstratas sem propósito.
- Efeito visual para preencher espaço ou impressionar.
- Cor que não faz sentido para a identidade do produto.

## 4. Tipografia e hierarquia

- Depender de Inter, Poppins, Roboto, Montserrat, Open Sans ou a fonte padrão do sistema para
  construir a identidade. (Podem servir como fonte de interface funcional; não como voz.)
- Títulos gigantes em todas as seções. Só um momento tipográfico grande por página.
- Gradiente colorido nas palavras dos títulos.
- Destacar uma palavra do título em outra cor ou itálico por reflexo.
- Quebrar frases artificialmente em várias linhas para "impacto".
- Negrito em excesso.
- Transformar cada frase em destaque visual.
- Misturar estilos tipográficos sem hierarquia consistente.
- Tamanhos exagerados que quebram a proporção do layout.
- Fonte ou peso escolhidos só por parecerem modernos.
- Sacrificar legibilidade, acessibilidade ou consistência por efeito.
- Caixa-alta espaçada em rótulos por padrão.

## 5. Cards, botões, ícones e componentes

- Todo conteúdo em card com cantos arredondados.
- O mesmo raio em todos os componentes. O raio é uma decisão de forma por tipo de elemento.
- Quadrado colorido com ícone dentro para cada funcionalidade.
- Ícone em elemento que já é claro sem ele.
- Ícones decorativos em excesso.
- Lucide ou qualquer biblioteca como identidade visual.
- Ícone genérico no lugar de imagem, ilustração ou elemento específico do produto.
- Emoji no lugar de ícone.
- Botão pílula por padrão.
- Badges decorativas em títulos e componentes ("Novo", "Beta", "✨ AI").
- "AI-Powered", "Next-Gen", "Revolucionário" e equivalentes para parecer moderno.
- Mockup genérico de dashboard ou interface fictícia.
- Avatares aleatórios, depoimentos artificiais, estatísticas sem comprovação.
- Bordas, divisores, sombras ou containers quando espaço e alinhamento resolvem.

## 6. Animações e interações

- Animar todos os elementos no carregamento ou na rolagem.
- Animação de entrada (fade + subir) em cada seção.
- Parallax decorativo.
- Partículas ou fundo em movimento sem finalidade.
- Hover que aumenta muito cards e botões (acima de `scale(1.03)`).
- Brilho que segue o cursor.
- Cursor personalizado sem função.
- Transições lentas (acima de ~300 ms) em interações simples.
- Elementos deslizando, flutuando ou girando sem motivo.
- Animação acima de desempenho, acessibilidade e usabilidade.
- Ignorar `prefers-reduced-motion`.
- Animação para esconder interface fraca.

## 7. Textos e conteúdo

Detalhe e vocabulário em `copy.md`.

- Frases genéricas ("Transformando o futuro com inovação", "Uma nova era começa agora",
  "Potencialize seus resultados").
- Texto vago que serviria para qualquer empresa.
- Excesso de inovação, excelência, eficiência, revolução, transformação.
- Frase de efeito em toda seção.
- Repetir a mesma ideia com outras palavras para encher.
- Travessões em excesso e estruturas repetitivas.
- Título grandioso sem relação concreta com a funcionalidade.
- CTA genérico em todos os botões ("Saiba mais", "Comece agora").
- Depoimentos, clientes, avaliações, métricas, resultados ou dados inventados.
- Conteúdo fictício só para preencher.
- Tom publicitário quando a linguagem direta serve melhor.
- Funcionalidades inexistentes ou promessas que o produto não cumpre.

## 8. Identidade e originalidade

- Reproduzir o estilo de templates populares de startup.
- Copiar estruturas de bibliotecas de componentes sem adaptar ao projeto.
- Combinação aleatória de referências.
- Tendência sem avaliar se cabe no produto.
- Estética futurista, tech ou minimalista por padrão.
- Confundir minimalismo com falta de personalidade.
- Decoração que não contribui para a marca.
- O mesmo padrão visual para projetos com objetivos e públicos diferentes.
- Tendência passageira acima de consistência e longevidade.
- Resultado indistinguível de dezenas de outros sites.

## 9. Consistência e implementação

- Estilos de componente misturados sem sistema.
- Espaçamentos, cores, fontes, sombras ou raios aleatórios (fora dos tokens).
- CSS desnecessário para efeito decorativo.
- Componentes duplicados.
- Estilo inline indiscriminado quando há sistema de design.
- Sacrificar responsividade para manter um layout.
- Ignorar hover, focus, active, disabled, loading e error.
- Elementos bonitos sem função real.
- Prejudicar contraste, acessibilidade, teclado ou legibilidade.
- Dependências visuais desnecessárias.
- Complexidade visual que dificulta manutenção.

## 10. Princípios obrigatórios

- Cada decisão visual tem justificativa ligada ao produto, à marca, ao conteúdo ou à experiência.
- Identidade própria acima de padrões genéricos.
- Composição das seções varia com a informação, sem perder consistência.
- Cor, tipografia, espaço, alinhamento, contraste e proporção usados com intenção.
- Clareza, hierarquia, legibilidade, acessibilidade e usabilidade primeiro.
- Efeitos e animações só quando agregam valor real.
- Conteúdo específico, autêntico e verificável acima de texto de marketing.
- A interface parece pensada para aquele produto, não adaptada de um template universal.
- Consistência sem repetição.
- Funciona bem no celular e no desktop.
- Nem excesso de decoração, nem minimalismo genérico.
- Antes de acrescentar um elemento, avaliar se ele melhora compreensão, função, estética ou
  experiência.

**Regra final:** nenhuma solução visual genérica só porque é comum em interface gerada por IA.
Nada de efeito, componente, animação, texto ou decoração por padrão. Analise o contexto e tome
decisões específicas, coerentes, funcionais e intencionais. O resultado é profissional,
original, equilibrado e adequado ao produto, sem cara de template automatizado.
