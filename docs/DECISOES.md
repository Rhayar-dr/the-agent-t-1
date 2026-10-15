# Registro de decisões (Roberta)

| # | Data/Fase | Decisão | Motivo |
|---|-----------|---------|--------|
| D1 | Fase 1 | **Tradução bíblica padrão: NVI (Nova Versão Internacional)** em todos os `versiculo_chave`. Campo opcional `versiculo_chave.traducao = "NVI"`. Crédito no portal, livro e fim dos vídeos: "Bíblia Sagrada, Nova Versão Internacional®, NVI®. Copyright © Biblica, Inc. Usado com permissão." | Linguagem atual e mais próxima da criança que a ARA. A política da editora permite citar até 500 versículos sem permissão escrita, com crédito. Narração e diálogos são paráfrases infantis próprias. |
| D2 | Fase 1 | **Vídeo: MP4 H.264 (libx264) + AAC**, com ffmpeg chamado por linha de comando. Não versionar nem distribuir binários do ffmpeg no repositório. Alternativa permissiva, se necessário: WebM VP9. | A GPL do libx264 se aplica a quem distribui o binário, não aos vídeos gerados. H.264 é o formato mais compatível com portal e redes. |
| D3 | Fase 1 | **TTS:** Piper `pt_BR-faber-medium` como padrão offline em protótipo e QA; edge-tts permitido só em protótipo. Antes de publicar, confirmar a licença da voz: o model card indica dataset CC0, mas o modelo foi refinado a partir da voz inglesa "lessac", cuja licença de dados deve ser checada. gTTS descartado. | Pesquisa do Bruno + model card oficial (rhasspy/piper-checkpoints). |
| D4 | Fase 1 | **Personagens em SVG próprios (Ana)**; IA de imagem (SDXL local) só para cenários de fundo, com revisão. Deus nunca é representado visualmente. | Consistência visual, licença própria e reverência/não-denominacional. |
| D5 | Fase 1 | Ortografia vigente (ex.: "deem", não "dêem"). | Padrão de português atual. |
| D6 | Fase 1 | Campo opcional **`cenas[].cenario`** (id de `assets/cenarios/<id>.svg`). Bruno preenche nas histórias. Engenharia infere por `descricao_visual` quando o campo faltar, com fallback `campo-galileia`. | Proposta da Ana. Evita adivinhação frágil no livro e no vídeo. |
| D7 | Fase 1 | **`descricao_visual` do JSON é a referência do personagem**. O SVG e o guia visual seguem o JSON; se a Ana precisar mudar, avisa o Bruno para atualizar o JSON. | Fonte única de verdade. |
