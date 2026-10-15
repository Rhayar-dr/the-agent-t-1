# LearningJesus: Arquitetura e Responsabilidades

> Documento vivo mantido por **Roberta** (Gerente de Projeto). Última atualização: Fase 1, com a entrada da Carla (Mídia e Automação).

## 1. Visão geral

Uma **única fonte de conteúdo** (histórias bíblicas estruturadas em JSON) alimenta três produtos:

```
                 ┌───────────────────────────┐
  Pesquisa  ───► │  content/stories/*.json   │ ◄─── Guia visual / personagens / assets
  (Bruno)        │  (fonte única de verdade) │      (Ana)
                 └────────────┬──────────────┘
          ┌───────────────────┼────────────────────┐
          ▼                   ▼                    ▼
  Storytelling          Workflow de Vídeo      Jogos interativos
  (livro ilustrado      (roteiro → cenas →     (Quiz da Palavra, Escolhas
   HTML) Anne + Ana      TTS → ffmpeg) CARLA    de Bondade, Organiza a Arca) Anne + Ana
          └───────────────────┼────────────────────┘
                              ▼
                  Portal web (site/index.html): Anne + Ana (vídeos da Carla)
                  Revisão, QA e integração: Roberta
```

Princípio: **escreve-se a história uma vez**, e roteiro de vídeo, storytelling e perguntas dos jogos são gerados a partir dela.

## 2. Componentes e responsáveis

| # | Componente | O que é | Responsável | Pasta |
|---|-----------|---------|-------------|-------|
| 1 | Pesquisa e curadoria | Seleção das histórias, referências bíblicas, valores, linguagem por faixa etária, diretrizes pedagógicas | **Bruno** | `docs/pesquisa/` |
| 2 | Banco de histórias | Histórias no formato do schema | **Bruno** (conteúdo) / Roberta (revisão) | `content/stories/` |
| 3 | Pesquisa de ferramentas | TTS PT-BR, geração de imagem, licenças | **Bruno** (pesquisa) → **Carla** (adoção) | `docs/pesquisa/` |
| 4 | Guia visual e personagens | Paleta, tipografia, personagens, representação respeitosa, cenários e ícones SVG | **Ana** | `docs/design/`, `assets/` |
| 5 | Game design | GDD dos 3 jogos | **Ana** | `docs/design/` |
| 6 | Workflow de vídeo | Pipeline: roteiro, storyboard, imagens (SVG compostos / IA), narração TTS, legendas, montagem ffmpeg, 16:9 + 9:16 + miniatura | **Carla** | `workflow/video/` |
| 7 | Storytelling | Gerador de livro ilustrado HTML a partir da história | **Anne** (código) + Ana (layout) | `workflow/story/` |
| 8 | Jogos interativos | Jogos HTML5 (JS puro, sem build) que leem as histórias | **Anne** (código) + Ana (arte/GDD) | `games/` |
| 9 | Ferramentas comuns | Validador de histórias + exportação `.js` + galeria de assets | **Anne** (Carla reutiliza no pipeline) | `tools/` |
| 10 | Portal | Página que reúne vídeos, histórias e jogos | **Anne** + Ana | `site/` |
| 11 | Integração, revisão, QA | Revisa cada entrega, valida conteúdo e adequação infantil | **Roberta** | `docs/` |

## 3. Contrato de dados (o que liga todo mundo)

Schema: `content/schema/historia.schema.json`. Exemplo: `content/stories/bom-samaritano.json`.

Campos principais: `id`, `titulo`, `referencia_biblica`, `faixa_etaria`, `valor_central`, `versiculo_chave` (+ `traducao` opcional), `resumo`, `personagens[]`, `cenas[]` (narração + descrição visual + `cenario` opcional + emoção), `licao`, `perguntas[]` (quiz), `escolhas_bondade[]` (jogo de escolhas), `atividade_organizacao` (jogo/tarefa prática), `oracao_curta`.

**Regras:**
- **Só a Roberta edita o schema.** Peça mudanças por mensagem. Campos novos devem ser opcionais.
- Índice de histórias: `content/stories/index.json`.
- Assets de personagens: `assets/personagens/<id-personagem>.svg` (mesmo `id` do JSON); cenários em `assets/cenarios/<id>.svg`.
- Saída de vídeo: `output/videos/<id>/` (fora do git). Para o portal: `site/videos/<id>.mp4` + `<id>-thumb.png`, combinado entre Carla e Anne.
- Decisões registradas em `docs/DECISOES.md`.

## 4. Tecnologia

- Jogos/portal/storytelling: HTML + CSS + JavaScript puro (abre direto no navegador, sem build). Para `file://`, exportar `content/stories/*.js` (`window.HISTORIAS[...] = {...}`) com `tools/validar_historias.py`.
- Workflow de vídeo: Python 3 + ffmpeg (MP4 H.264 + AAC, D2); TTS plugável (Piper padrão, edge-tts protótipo, D3); imagens plugáveis (SVG da Ana compostos sobre cenário; IA só para fundos, D4); modo **placeholder** offline.
- Arte: SVG/PNG próprios ou de licença livre (registrar em `assets/CREDITOS.md`).

## 5. Fases

1. **Fundação**: arquitetura, guia visual, curadoria + 3 novas histórias, pesquisa de ferramentas, esqueleto do pipeline de vídeo (Carla) e 1º jogo Quiz da Palavra (Anne).
2. **Produção**: 3 jogos, pipeline de vídeo completo com TTS real e 4 vídeos, storytelling HTML, histórias 5 a 7.
3. **Integração**: portal, QA com conteúdo real, documentação de uso (como criar uma história nova e gerar o vídeo).

## 6. Diretrizes de conteúdo (todas as entregas)

- Público: crianças de 4 a 10 anos; linguagem simples, frases curtas, tom alegre e acolhedor.
- Fidelidade ao texto bíblico; sem violência gráfica; foco em amor, bondade, perdão, partilha e responsabilidade/organização.
- Conteúdo cristão não-denominacional; Deus nunca é representado visualmente.
- Feedback positivo nos jogos (errar = "tente de novo", nunca punição).
- Acessibilidade: botões grandes, texto legível, possibilidade de ouvir o texto (leitura em voz).
