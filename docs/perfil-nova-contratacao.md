# Perfil da nova contratação: Engenheiro(a) de Mídia e Automação

## Background esperado
- **Python 3 avançado**: scripts de linha de comando, organização em módulos, testes, tratamento de erros.
- **ffmpeg**: montar vídeo a partir de imagens + áudio, legendas (SRT/ASS), transições, zoom lento (efeito Ken Burns), música de fundo com volume reduzido (ducking), exportação MP4 H.264.
- **Áudio e TTS**: integração com engines de voz em PT-BR (edge-tts, Piper, Coqui ou APIs pagas), normalização de volume, sincronização da narração com a cena.
- **Geração de imagem por IA**: Stable Diffusion/SDXL (local ou API), escrita de prompts e técnicas para manter o mesmo personagem em todas as cenas (seed fixa, LoRA, IP-Adapter, imagem de referência).
- **Automação de pipelines**: processamento em lote, cache por etapa (não refazer o que já existe), configuração em YAML/JSON, CI simples.
- **Desejável**: experiência com conteúdo infantil ou educativo, noções de animação 2D (SVG para vídeo, Lottie, MoviePy), conhecimento de licenças de assets e música livre.

## Objetivo no projeto
Ser **responsável pelo workflow de geração de vídeos**: transformar qualquer história em `content/stories/<id>.json` num vídeo educativo infantil pronto para publicar, com um único comando e sem edição manual.

### Responsabilidades
1. Assumir e evoluir o pipeline `workflow/video/` (roteiro → storyboard → imagens → narração → legendas → montagem).
2. Garantir que os personagens tenham a mesma aparência em todas as cenas e em todos os vídeos, seguindo o guia visual da Ana.
3. Narração natural em PT-BR, com voz e ritmo adequados para crianças de 4 a 10 anos.
4. Vídeo com abertura, cenas, versículo-chave, lição, pergunta para reflexão e oração final.
5. Exportar formatos para o portal e redes: 16:9 e 9:16 (vertical), além da miniatura.
6. Documentar o processo para que qualquer pessoa gere um vídeo novo a partir de um JSON.

### Critérios de sucesso
- `python workflow/video/gerar_video.py content/stories/<id>.json` gera o MP4 completo.
- 4 histórias da Fase 1 com vídeo de 2 a 4 min aprovados no QA da Roberta.
- Funciona em modo offline (placeholder) e em modo real (TTS + IA de imagem).

### Interfaces com o time
- **Bruno**: recebe as histórias (JSON) e a recomendação de ferramentas.
- **Ana**: recebe o guia visual, personagens e cenários.
- **Anne**: entrega a ela o vídeo final para o portal e reutiliza o validador de histórias.
- **Roberta**: reporta e passa pela revisão de cada vídeo.
