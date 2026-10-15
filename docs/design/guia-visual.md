# Guia Visual: LearningJesus

Público: crianças de 4 a 10 anos. Tom: alegre, acolhedor, calmo. Estilo: **flat, formas arredondadas, sem contornos pesados, sombras suaves**.

## 1. Paleta (hex)

| Papel | Nome | Hex | Uso |
|---|---|---|---|
| Primária | Azul Céu | `#42A5F5` | botões "ouvir", links, destaques |
| Primária escura | Azul Manto | `#2F80C8` | manto de Jesus, títulos |
| Secundária | Sol Dourado | `#FFB300` | botão principal/play, estrelas |
| Sucesso | Verde Oliva Vivo | `#66BB6A` | acerto, "próximo" |
| Tente de novo | Laranja Suave | `#FF9A5C` | erro gentil (nunca vermelho forte) |
| Fundo claro | Creme | `#FFF8E7` | fundo das telas |
| Fundo alternativo | Céu Claro | `#CDEEFF` | fundo de cenas ao ar livre |
| Superfície | Branco | `#FFFFFF` | cartões |
| Texto | Marrom Escuro | `#3E2F25` | texto principal (contraste 12:1 no creme) |
| Texto suave | Marrom Médio | `#6D5A4C` | legendas |
| Roxo | Lavanda | `#9575CD` | voltar, jogo "Organiza" |
| Terra | Areia | `#E2C08D` | estradas, madeira clara |
| Madeira | Marrom Arca | `#A9744A` | arca, cestas |

Tons de pele dos personagens (usar variedade): `#F1C9A5`, `#E0B08A`, `#D9A679`, `#C68642`, `#A9743F`, `#7B4B2A`.

Regra de contraste: texto sobre fundo com razão mínima 4.5:1 (WCAG AA). Texto branco só sobre azul `#2F80C8` ou mais escuro; sobre amarelo use marrom escuro.

## 2. Tipografia (Google Fonts, licença OFL)

- **Títulos e botões: Baloo 2** (600/700), arredondada, amigável.
- **Texto de leitura/narração: Nunito** (400/700), ótima legibilidade; alternativa para alfabetização: **Atkinson Hyperlegible**.
- Import: `https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Nunito:wght@400;700&display=swap`
- Fallback: `system-ui, "Comic Sans MS", sans-serif`.

| Elemento | Tamanho mínimo | Entrelinha |
|---|---|---|
| Narração do livro | 24 px (ideal 28) | 1.5 |
| Pergunta de jogo | 28 px | 1.3 |
| Texto de botão | 22 px, negrito | 1.2 |
| Legenda/rodapé | 18 px (nunca menor) | 1.4 |
| Título de tela | 36-48 px | 1.2 |

## 3. Estilo de ilustração

- Flat vector, formas geométricas simples, cantos arredondados (raio mín. 12 px).
- Personagens: cabeça grande (proporção ~1:3), olhos redondos com brilho, bochechas rosadas, sorriso simples. Sem narizes detalhados.
- Sem sangue, armas, medo ou sofrimento gráfico; tristeza mostrada de forma leve (boca curva, sobrancelhas).
- Cenários: 3 planos (céu, montanhas/campo, primeiro plano), cores claras e quentes.
- Sombra no chão: elipse preta com 12% de opacidade.
- Formato: SVG; personagens `viewBox 0 0 400 600`, cenários `1280x720` (16:9), ícones `96x96`.

## 4. Tamanhos de interface (acessibilidade infantil)

- **Botões: mínimo 64x64 px** (ideal 80+); botões de resposta: altura mín. 72 px, largura total do cartão.
- Espaço entre alvos tocáveis: mín. 16 px.
- Alvos de arrastar (drag & drop): mín. 96x96 px; zonas de soltar mín. 120x120 px, com folga (aceitar solto a até 40 px).
- Ícone sempre acompanhado de texto ou rótulo `aria-label`.
- Foco de teclado visível (contorno 4 px `#FFB300`).
- Animações curtas (≤ 400 ms); respeitar `prefers-reduced-motion`.
- Todo texto importante com botão **Ouvir** (SpeechSynthesis pt-BR / áudio TTS).
- Não depender só de cor: acerto = estrela + texto; tentativa = seta circular + texto.

## 5. Representação respeitosa e diversa

**Jesus**
- Representar com dignidade, serenidade e gentileza; sempre acolhedor, olhar caloroso, nunca caricato, bobo ou assustador.
- Traços do Oriente Médio / Galileia do século I: pele morena, cabelo e barba escuros, túnica clara e manto azul (identificação consistente). Evitar o estereótipo europeu de pele clara e olhos azuis.
- Sem auréola exagerada, sem efeitos de magia; milagres mostrados de forma simples e suave.
- Não usar Jesus em situações cômicas, memes ou em jogos de "ganhar/perder"; ele aparece como mestre e amigo.
- Sem rosto detalhado realista; manter estilo flat consistente com os demais.

**Personagens bíblicos em geral**
- Vestimentas do período (túnicas, mantos, turbantes, sandálias); evitar fantasias medievais.
- Diversidade de tons de pele, idades, corpos e gêneros nas cenas de multidão e crianças; incluir meninas, meninos e idosos.
- O samaritano é representado com dignidade e como herói da história, nunca como vilão ou estereótipo étnico.
- Cuidado com pessoas machucadas, famintas ou pobres: mostrar dignidade, sem ridicularizar (ex.: filho pródigo arrependido, não sujo e repulsivo).
- Animais amigáveis (burrinho, pombas, ovelhas); a Arca com animais sorridentes e sem cenas de afogamento: foco no arco-íris e na promessa.
- Sem estereótipos religiosos, étnicos ou de gênero; sem tom denominacional.

## 6. Convenções de cores por personagem

| id | Visual |
|---|---|
| jesus | túnica creme, manto azul `#2F80C8`, cabelo comprido castanho, barba |
| viajante | túnica marrom `#9C6B3F`, bolsa, joelho enfaixado |
| samaritano | túnica verde `#43A047`, turbante claro, manto creme |
| noe | túnica marrom, manto verde-azulado, barba e cabelo grisalhos |
| menino-dos-paes | criança (menor), túnica amarela, cesta com 5 pães e 2 peixes |
| pai | túnica vermelha, manto creme, cabelo grisalho, braços abertos |
| filho-prodigo | túnica roxa de bainha desfiada, cabelo escuro |
