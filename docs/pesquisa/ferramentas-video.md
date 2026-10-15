# Pesquisa de ferramentas: TTS, geração de imagem e ffmpeg

> Autor: Bruno (Pesquisador). Destinatária principal: Anne (workflow de vídeo). Revisão: Roberta.
> Atenção: licenças de vozes e serviços mudam com frequência. Antes de publicar vídeos comerciais, confirmar a licença na página oficial de cada modelo/serviço. Esta pesquisa não é parecer jurídico.

## 1. Text-to-Speech (narração) em PT-BR

| Opção | Tipo | Offline? | Qualidade PT-BR | Licença / termos | Observações |
|-------|------|----------|-----------------|------------------|-------------|
| **Piper** (motor) + vozes pt_BR | Local, neural (VITS) | Sim | Boa para o tamanho do modelo | Motor MIT; cada voz tem a licença dos dados em que foi treinada | Roda em CPU. Vozes pt_BR no repositório oficial: `faber` (qualidade média) e `edresson` (baixa). Também há vozes da comunidade (OpenVoiceOS `pipertts_pt-BR_miro` e `_dii`). |
| **edge-tts** | Cliente Python para o serviço online do Microsoft Edge | Não (precisa de internet) | Alta (vozes neurais pt-BR da Microsoft) | Licença diverge entre forks (ver nota) | Sem chave de API. Usa um serviço não documentado para uso livre, então os termos podem mudar. |
| **gTTS** | Biblioteca Python para o Google Tradutor | Não | Razoável | MIT (biblioteca), mas o serviço é não oficial | Sem SSML nem escolha de voz; licença comercial incerta. Serve só para testes. |

### Fontes consultadas
- edge-tts (repositório oficial): https://github.com/rany2/edge-tts (uso do serviço online do Edge, sem chave de API). Forks listam licenças diferentes: LGPL-3.0 (https://github.com/janosch7/EdgeTTS), GPL-3.0 (https://github.com/Higher-Develop/EDGE-TTS) e MIT (https://sourceforge.net/projects/edge-tts.mirror/). **Nota:** conferir a licença do repositório oficial antes de qualquer uso.
- Piper, descrição geral (CPU, offline, motor MIT, licença por voz): https://tts.ai/voices/piper/ (agregador; confirmar na fonte oficial).
- Piper, vozes pt_BR na documentação de downloads: https://tderflinger.github.io/piper-docs/about/voices/download/ (a documentação oficial é do projeto Rhasspy).
- Vozes pt_BR da comunidade: https://huggingface.co/collections/OpenVoiceOS/pipertts-voices
- gTTS (biblioteca, MIT, endpoint do Google Tradutor): https://pypi.org/project/gTTS/ e https://speechify.com/blog/gtts/ (ausência de SSML e de escolha de voz).
- gTTS, termos e uso comercial (incerto): https://ttsforfree.com/en/blogs/is-gtts-free-python/

### Análise
- **Piper** é a única opção realmente offline e de licença aberta para o motor. O risco está na **licença de cada voz**. Um agregador lista uma voz pt_BR (Faber) como de uso pessoal e não comercial. Verificar a licença no Hugging Face ou no repositório da voz antes de usar em produto.
- **edge-tts** tem melhor qualidade PT-BR, mas depende de um serviço online não documentado para uso livre. Bom para protótipo; para produção, é risco jurídico e de continuidade.
- **gTTS** é o mais simples, mas o uso de endpoint não oficial e a ausência de controle de voz o tornam o pior para um produto infantil. Descartar para produção.

## 2. Geração de imagem (ilustração de cenas)

| Opção | Offline? | Custo | Licença | Observações |
|-------|----------|-------|---------|-------------|
| **Stable Diffusion local (SD 1.5 / SDXL)** | Sim (precisa de GPU) | Software grátis; custo de energia e hardware | CreativeML OpenRAIL-M: uso comercial permitido, sem teto de receita; restrições de uso (sem conteúdo ilegal, enganoso ou danoso) | Interfaces: ComfyUI, Fooocus, AUTOMATIC1111. |
| **Stable Diffusion 3 / 3.5 (local ou API)** | Sim (local) | Grátis para organizações com receita anual abaixo de US$ 1 milhão, com registro | Stability AI Community License; acima de US$ 1 milhão é preciso licença Enterprise | Não recomendado sem checar a situação jurídica da organização. |
| **APIs pagas de imagem** | Não | Pago por imagem ou assinatura | Varia por fornecedor | Qualidade imediata, mas custo recorrente e dependência externa. |

### Fontes consultadas
- Licenças por versão (SD 1.5/2.1/SDXL versus SD 3/3.5): https://www.promptquorum.com/power-local-llm/stable-diffusion-review e https://www.krea.ai/blog/is-stable-diffusion-free-where-to-get-it-and-what-it-costs-in-2026
- Texto da licença CreativeML OpenRAIL-M (discussão no repositório do modelo original): https://huggingface.co/CompVis/stable-diffusion-v-1-4-original/discussions/253/files
- Anúncio original do Stability AI (licença permissiva para uso comercial e não comercial, versão 1.x): https://stability.ai/news/stable-diffusion-public-release
- Direito autoral sobre imagens geradas por IA: varia por país. Consultar a Roberta/jurídico antes de vender ou licenciar as ilustrações: https://medium.com/@promptingpixels/can-stable-diffusion-models-be-used-for-commercial-use-it-depends-eedd89272245

### Análise
- Para o projeto, **SDXL** (OpenRAIL-M) é a escolha mais segura, desde que rodando localmente com GPU.
- Os **personagens** devem ser desenhados pela Ana em SVG (consistência visual, controle de representação e licença própria). Stable Diffusion faria sentido só para **cenários de fundo**, e mesmo assim com revisão de estilo e representação (sem violência, sem desenho de Deus, diversidade).
- Sem GPU disponível, usar ilustrações próprias (Ana) ou pacotes de licença livre registrados em `assets/CREDITOS.md`.

## 3. ffmpeg (montagem de vídeo)

- **Licença:** a base do ffmpeg é LGPL v2.1 ou posterior. Partes opcionais são GPL v2 ou posterior e, se habilitadas, o binário passa a ser GPL. Exemplos: libpostproc, libswscale, e encoders como libx264 e libx265.
- **Distribuição:** se o time distribuir o ffmpeg dentro de um produto (ex.: instalador), precisa cumprir a LGPL (incluir a licença, disponibilizar o código-fonte da versão usada e permitir substituição da biblioteca). Chamar o ffmpeg por linha de comando a partir de Python é diferente de linká-lo ao código, e isso simplifica o caso. Confirmar com a Roberta.

### Fontes consultadas
- Licença do ffmpeg (arquivo LICENSE espelhado no GitHub): https://github.com/rvs/ffmpeg/blob/master/LICENSE
- Partes GPL e consequências: http://www.swains.plus.com/ffmpeg-test/legal.html (ver também https://wip.co/posts/ffmpeg-license-can-we-legally-sell-closed-source-apps-that-use-it-ap32zk)
- Build FFmpegKit: LGPL por padrão, GPL apenas com `--enable-gpl`: https://github.com/arthenica/ffmpeg-kit/wiki/License

### Análise
- Usar **build LGPL (sem `--enable-gpl`)** como padrão, para não tornar o pipeline GPL.
- **Atenção ao H.264:** o encoder comum (libx264) é GPL. Opções para avaliar com a Anne: um encoder de H.264 com licença permissiva (ex.: OpenH264, a verificar), ou WebM com VP9 (libvpx, licença BSD, a verificar). Decidir com a Roberta.

## 4. Recomendação final para a Anne

1. **TTS (padrão de produção):** Piper com voz pt_BR, offline. Antes de publicar, confirmar a licença da voz escolhida (preferir voz com licença explicitamente permissiva) e registrar em `assets/CREDITOS.md`.
2. **TTS (alternativa de qualidade):** edge-tts apenas em protótipo, ou se a Roberta aprovar os termos. Manter a interface de TTS plugável, como previsto em `docs/ARQUITETURA.md`.
3. **TTS (descartar para produção):** gTTS, por ser endpoint não oficial sem controle de voz.
4. **Imagem:** personagens em SVG pela Ana. Stable Diffusion XL local apenas para cenários, se houver GPU. Não usar SD 3/3.5 sem checar o limite de receita.
5. **ffmpeg:** build LGPL sem `--enable-gpl`. Definir com a Roberta o codec de vídeo (evitar libx264 se a GPL for problema).
6. **Modo placeholder:** manter o pipeline funcionando offline com áudio silencioso e imagens de placeholder, como previsto na arquitetura.
