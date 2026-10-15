# Layout: Livro Ilustrado HTML

Uma página por cena (`cenas[]`), mais capa e página final. Responsivo (tablet-first, 1024x768 até celular). Usar cores e fontes do `guia-visual.md`.

## Estrutura de páginas
1. **Capa**: título, referência bíblica, cenário principal, personagem principal, botão "Começar" (play.svg).
2. **Cenas 1..N**: uma página cada.
3. **Página final**: versículo, lição, oração, botões "Ler de novo" e "Jogar".

## Página de cena (paisagem ≥ 900 px)

```
+--------------------------------------------------------------+
| [Voltar]   O Bom Samaritano            • • ○ ○ ○ ○  (2 de 6) |
+--------------------------------------------------------------+
|                                   |                          |
|   ILUSTRAÇÃO (cenário + chars)    |  Narração (28px Nunito)  |
|   16:9, cantos 24px               |  "Um homem viajava por   |
|                                   |   uma estrada..."        |
|    [balão de fala]                |                          |
|    "Não se preocupe!"             |  [🔊 Ouvir]  (80px)      |
|                                   |                          |
+--------------------------------------------------------------+
|  [← Voltar]                                  [Próximo →]     |
+--------------------------------------------------------------+
```

Retrato (celular): imagem em cima (60% da largura), narração embaixo, botões fixos no rodapé.

## Regras
- **Imagem**: `<div class="cena">` com `cenarios/<cenário>.svg` de fundo (`object-fit: cover`) e personagens `<img>` por cima, ancorados embaixo; 1 personagem ≈ 55% da altura, 2+ lado a lado (45%). O JSON não define o cenário; mapear por palavras de `descricao_visual` (estrada, arca, campo, casa) ou campo opcional `cenario`. Fallback: campo-galileia.
- **Narração**: card branco, borda arredondada 24 px, fundo `#FFFFFF`, sombra suave. Palavra atual destacada em amarelo `#FFE082` durante a leitura (karaokê opcional).
- **Diálogos** (`dialogos[]`): balão de fala ao lado do personagem (`personagem` = id), fundo branco, borda azul `#42A5F5`, rabinho apontando ao falante; 24 px. Mostrar o balão com fade 300 ms ao entrar na página. Nome do falante em Baloo 2 acima da fala.
- **Botão Ouvir**: ouvir.svg + texto "Ouvir", lê narração e depois diálogos (voz pt-BR; usar áudio TTS gerado se existir `audio/cena-N.mp3`). Estado "tocando": pulsa, vira "Parar".
- **Navegação**: Próximo (verde, 80 px) e Voltar (lavanda), setas do teclado, deslize no toque. Indicador de progresso com bolinhas; página atual dourada.
- **Transição**: virar de página (slide 400 ms); desativar com `prefers-reduced-motion`.
- **Emoção** (`emocao`): leve moldura de cor no cartão: calma `#CDEEFF`, alegre `#FFF1B8`, triste `#E3E9F5`, surpresa `#FFE0F0`.

## Página final

```
+--------------------------------------------------------------+
|                      ⭐ Você chegou ao fim! ⭐                |
|  +----------------------------------------------------+      |
|  |  📖 Versículo                                      |      |
|  |  "Ame o seu próximo como a si mesmo."              |      |
|  |  Lucas 10:27                              [🔊 Ouvir]|      |
|  +----------------------------------------------------+      |
|  +-----------------------+  +-------------------------+      |
|  | 💡 O que aprendemos   |  | 🙏 Vamos orar           |      |
|  | (licao)               |  | (oracao_curta)          |      |
|  +-----------------------+  +-------------------------+      |
|   [↺ Ler de novo]   [🎮 Jogar Quiz]   [🏠 Outras histórias]  |
+--------------------------------------------------------------+
```
- Campos: `versiculo_chave.texto/referencia`, `licao`, `oracao_curta`. Cada bloco com cartão colorido (versículo `#FFF1B8`, lição `#DFF3E0`, oração `#E8E0F7`) e botão Ouvir.
- Estrelas animadas (estrela.svg) caem ao entrar.
- Botões levam aos jogos da mesma história (`?historia=<id>`).

## Acessibilidade
`<main>`, `aria-live="polite"` na narração, `alt` nos personagens ("Jesus sorrindo"), contraste AA, botões ≥ 64 px, nenhuma informação só por cor.
