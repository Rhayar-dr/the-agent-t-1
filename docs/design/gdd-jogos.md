# GDD: Jogos Interativos LearningJesus

Plataforma: HTML5 (JS puro), toque e mouse, teclado. Público 4-10 anos. Todos leem `content/stories/<id>.json` (`?historia=<id>`; lista em `index.json`). Estilo conforme `guia-visual.md`.

## Princípios comuns
- **Sem punição**: não há "game over", vidas, tempo ou pontuação negativa. Erro = "Tente de novo!" com ícone `ui/tente-de-novo.svg`, tom gentil; pode tentar quantas vezes quiser.
- Acerto = estrela (`ui/estrela.svg`) + frase positiva + som alegre. Ao final, estrelas coletadas (sempre ≥ 1 estrela de participação).
- Cada texto tem botão Ouvir (SpeechSynthesis pt-BR); opção "Ouvir automaticamente" ligada por padrão para 4-6 anos.
- Botões ≥ 72 px, fonte ≥ 22 px. Botão Voltar/Início sempre visível.
- Frases de acerto (aleatórias): "Muito bem!", "Você acertou!", "Parabéns, amiguinho!", "Isso mesmo!". Frases de tentativa: "Quase! Tente de novo.", "Vamos tentar mais uma vez?", "Pense com carinho e tente de novo!".
- Sons sugeridos (curtos, ≤1,5 s, volume baixo, botão mudo): acerto = sino/xilofone ascendente "ding-ding"; tentar de novo = "bloop" suave descendente (nunca buzzer); clique = "pop"; vitória = pequena fanfarra de flauta/harpa; música de fundo opcional, instrumental calma em loop (CC0, p.ex. OpenGameArt/Pixabay; registrar em CREDITOS). Até a Anne integrar áudio real, gerar com WebAudio (osciladores).

## Fluxo geral
```
Início (escolher história) -> Tela do jogo -> Final (estrelas + lição + versículo) -> [Jogar de novo | Outro jogo | Início]
```

---
## (a) Quiz da Palavra
**Campo JSON:** `perguntas[]` (`pergunta`, `opcoes[]`, `correta`, `explicacao`). Extras: `titulo`, `versiculo_chave`, `licao` na tela final.

**Mecânica:** Uma pergunta por tela, 2-4 opções grandes. Tocar na opção: se correta, ganha estrela e mostra `explicacao`; se errada, a opção balança de leve, fica laranja claro, aparece "Tente de novo!" e as outras continuam ativas. A explicação aparece também após o acerto. Ordem das opções embaralhada (usar `correta` pelo texto).

**Telas:** 1) Início da história, 2) Pergunta (N de total), 3) Feedback, 4) Final.

```
Tela Pergunta
+----------------------------------------------------+
| [Início]          Pergunta 2 de 3          ⭐ ⭐ ○  |
|           [personagem da história, 120px]          |
|  +----------------------------------------------+  |
|  | Quem parou para ajudar?            [🔊 Ouvir]|  |
|  +----------------------------------------------+  |
|  +----------------------------------------------+  |
|  |  A  Ninguém                                  |  |
|  +----------------------------------------------+  |
|  |  B  O samaritano                             |  |
|  +----------------------------------------------+  |
|  |  C  Um leão                                  |  |
|  +----------------------------------------------+  |
+----------------------------------------------------+

Feedback acerto                  Feedback erro
+---------------------------+    +---------------------------+
| ⭐ Muito bem!             |    | ↻ Quase! Tente de novo.   |
| O samaritano parou e      |    | (opções continuam ativas) |
| cuidou dele com amor.     |    +---------------------------+
|        [Próximo →]        |
+---------------------------+
```
**Final:** "Você ganhou N estrelas!", versículo, botões Jogar de novo / Próximo jogo.
**Sons:** ding no acerto, bloop suave no erro, fanfarra ao final.

---
## (b) Escolhas de Bondade
**Campo JSON:** `escolhas_bondade[]` (`situacao`, `opcoes[]`: `texto`, `bondosa`, `feedback`). Extra: personagem "bom samaritano" como guia; `valor_central`.

**Mecânica:** Aparece uma situação do dia a dia ilustrada (emoji/ícone ou cena). Criança escolhe entre 2-3 cartões. Escolha `bondosa: true` → coração/estrela, `feedback` positivo e personagem comemora. Escolha `bondosa: false` → mostra o `feedback` (já contém "Tente de novo!"), o cartão fica opaco e a criança escolhe novamente; a opção bondosa só pontua ao ser escolhida (todos os caminhos levam a ela). Ao final mostra o "Medidor de Bondade" (coração que enche, 1 coração por situação concluída).

```
Tela Situação
+----------------------------------------------------+
| [Início]            Situação 1 de 1       💛💛○     |
|  +----------------------------------------------+  |
|  | 🏫 Um colega caiu no recreio e derrubou o    |  |
|  |    lanche.                        [🔊 Ouvir] |  |
|  +----------------------------------------------+  |
|   O que você faria?                                |
|  +-------------------------+ +-------------------+ |
|  | 🤝 Ajudar a levantar e  | | 😆 Rir e continuar| |
|  |   dividir meu lanche    | |   brincando       | |
|  +-------------------------+ +-------------------+ |
|     [samaritano, balão de fala]                    |
+----------------------------------------------------+

Feedback: balão do personagem com `feedback` + botão Próximo (só após escolha bondosa).
```
**Telas:** Início, Situação, Feedback, Final (medidor de bondade + `licao` + versículo + oração opcional).
**Sons:** acerto = harpa ascendente; erro = "bloop" neutro; cada coração = "pling". Texto de erro sempre gentil, sem julgar a criança.

---
## (c) Organiza a Arca (arrastar e soltar)
**Campo JSON:** `atividade_organizacao` (`titulo`, `instrucoes`, `itens[]`: `item`, `lugar`). Funciona para qualquer história (ex.: bolsa do samaritano; arca de Noé: animais/alimentos por compartimento).

**Mecânica:** Itens (cartões 96 px, com emoji/ícone + nome) ficam numa bandeja; zonas de destino (`lugar`, únicas, ≥ 120 px) são rotuladas. Criança arrasta (toque/mouse) e solta na zona. Se certo, encaixa com "pop", brilha e conta estrela; se errado, o item volta suavemente para a bandeja com "Quase! Tente de novo." Sem limite de tentativas. Alternativa acessível: tocar no item e depois na zona (sem arrastar), e teclado (Tab + Enter). Dica opcional após 2 erros: a zona certa pisca. Fim: quando todos os itens estão no lugar → comemoração com confetes e estrelas.

```
+----------------------------------------------------+
| [Início]    Kit de primeiros socorros   ⭐⭐○  [🔊] |
| Ajude o samaritano a guardar cada coisa no lugar   |
|  +-----------+ +-------------+ +-----------+       |
|  | caixinha  | | bolso lateral| |  cesta    |       |
|  |  (vazio)  | |   (vazio)   | |  (vazio)  |       |
|  +-----------+ +-------------+ +-----------+       |
|        [samaritano ao fundo com a bolsa]           |
|  Bandeja:  [🩹 curativo] [💧 garrafa de água] [🍞 pão]|
+----------------------------------------------------+
```
Arca de Noé (mesmo mecanismo, cenário `arca.svg`): zonas = compartimentos desenhados como cabines da arca.
**Telas:** Início, Atividade, Final (arca/bolsa organizada, `titulo` concluído, lição sobre ordem e cuidado).
**Sons:** pegar item = "tic"; soltar certo = "pop" + ding; errado = "bloop" suave; fim = fanfarra de harpa.
**Notas p/ engenharia:** usar Pointer Events; zona de soltar com tolerância de 40 px; embaralhar a bandeja; emojis como ícones de item (mapa `item → emoji`, fallback inicial da letra) até haver ícones SVG.

---
## Assets usados
`assets/personagens/*.svg` (guia nos jogos), `assets/cenarios/*.svg` (fundo), `assets/ui/estrela.svg`, `tente-de-novo.svg`, `ouvir.svg`, `proximo.svg`, `voltar.svg`, `play.svg`.

## Acessibilidade e QA (checklist)
- Funciona em toque e teclado; foco visível; alvos ≥ 64 px.
- Nenhum feedback vermelho/agressivo; nenhum contador de erros.
- `prefers-reduced-motion` respeitado; botão mudo.
- Textos lidos por voz pt-BR.
