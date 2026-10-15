# Avaliação dos arquivos de histórias (content/stories/)

Esta avaliação verifica se os arquivos de histórias estão aderentes ao schema `content/schema/historia.schema.json`, com atenção especial para faixa etária, campo cenário, personagens, perguntas de quiz, escolhas de bondade e organização.

## Resumo dos arquivos avaliados

- arca-de-noe.json
- bom-samaritano.json
- filho-prodigo.json
- jesus-abencoa-criancas.json
- jesus-acalma-a-tempestade.json
- multiplicacao-dos-paes.json
- zaqueu.json


## Pontos avaliados
- **Faixa etária:** está cadastrada e segue os valores possíveis do schema ("4-6", "7-10", "4-10").
- **Campo cenário nas cenas:** o campo opcional "cenario" está presente e utiliza os valores definidos no schema.
- **Personagens:** presentes no início, cada um com id, nome e descrição_visual.
- **Quiz e escolhas de bondade:** todos trazem perguntas apropriadas, com respostas explicadas e pelo menos 2 opções por questão; escolhas de bondade são adequadas.
- **Atividade de organização:** presente em todos, relacionada ao tema e instrucional.
- **Adequação infantil:** linguagem gentil, instruções claras e exemplos de empatia, partilha e obediência.
- **Nomes dos arquivos:** seguem padrão kebab-case, sem caracteres inválidos.

---

## Revisão arquivo a arquivo

### arca-de-noe.json
- **Faixa etária:** 4-10. Valor permitido.
- **Cenario nas cenas:** usa "casa", "campo-galileia", "arca", "interior-arca" — todos válidos.
- **Personagens:** Noé, família de Noé, animais — descritos conforme o schema.
- **Perguntas/Quiz:** 4 perguntas, opções e explicação presentes.
- **Escolhas de bondade:** 3 situações, opções de resposta com feedback.
- **Atividade organização:** "Organiza a Arca", clara e alinhada ao tema.
- **Infantil:** Muito adequado, exemplos positivos, linguagem simples.
- **Nome de arquivo:** ok.

### bom-samaritano.json
- **Faixa etária:** 4-10. Valor permitido.
- **Cenario nas cenas:** "colina-multidao", "estrada" — válidos.
- **Personagens:** Jesus, viajante, samaritano — bem definidos.
- **Perguntas/Quiz:** 3 perguntas, claras e explicações.
- **Escolhas de bondade:** 3 situações, apropriadas.
- **Atividade organização:** kit primeiros socorros, contextualizada.
- **Infantil:** Adequado, foco em empatia.
- **Nome de arquivo:** ok.

### filho-prodigo.json
- **Faixa etária:** 7-10 — valor permitido.
- **Cenario nas cenas:** "casa", "estrada", "festa" — válidos.
- **Personagens:** pai, filho mais novo, filho mais velho — descritos.
- **Quiz:** 4 perguntas, respostas explicadas.
- **Escolhas de bondade:** situações cotidianas, com feedback.
- **Atividade organização:** arrumar mala; apropriada.
- **Infantil:** Boa linguagem, exemplo de perdão.
- **Nome de arquivo:** ok.

### jesus-abencoa-criancas.json
- **Faixa etária:** 4-6 — permitido.
- **Cenario nas cenas:** "estrada", "colina-multidao" — válidos.
- **Personagens:** Jesus, crianças, discípulos. Descrições amigáveis.
- **Quiz:** 3 perguntas, explicações.
- **Escolhas de bondade:** situações inclusivas.
- **Atividade organização:** roda de acolhimento.
- **Infantil:** Muito adequado, reforça acolhimento.
- **Nome de arquivo:** ok.

### jesus-acalma-a-tempestade.json
- **Faixa etária:** 4-6. Permitido.
- **Cenario nas cenas:** "lago" — de acordo com schema.
- **Personagens:** Jesus, discípulos; detalhados.
- **Quiz:** 3 perguntas, respostas explicadas.
- **Escolhas de bondade:** motivos de coragem e confiança.
- **Atividade organização:** "Barco Arrumado", pertinente.
- **Infantil:** Linguagem sensível.
- **Nome de arquivo:** ok.

### multiplicacao-dos-paes.json
- **Faixa etária:** 4-10 — permitido.
- **Cenario nas cenas:** "colina-multidao", "campo-galileia" — válidos.
- **Personagens:** Jesus, menino, discípulos.
- **Quiz:** 4 perguntas, com explicações.
- **Escolhas de bondade:** 3 situações, apropriadas.
- **Atividade organização:** partilha de alimentos, instrutiva.
- **Infantil:** Muito bom, reforça partilha.
- **Nome de arquivo:** ok.

### zaqueu.json
- **Faixa etária:** 7-10.
- **Cenario nas cenas:** "cidade-jerico", "casa", "festa" — todos válidos.
- **Personagens:** Zaqueu, Jesus, multidão — detalhados.
- **Quiz:** 4 perguntas claras e com explicação.
- **Escolhas de bondade:** situações de partilha e reparação de erro.
- **Atividade organização:** moedas de Zaqueu, centrada na partilha.
- **Infantil:** Adequado, reforça valor da reparação e partilha.
- **Nome de arquivo:** ok.

---

## Pontos de melhoria sugeridos
1. **Constância no número de perguntas:** algumas histórias trazem 3, outras 4 perguntas para o quiz; sugerir padronizar se o objetivo for comparar desempenho ou aplicação.
2. **Trechos de diálogo:** presentes em algumas cenas, mas ausentes em outras; pode ser interessante sempre inserir ao menos um diálogo em cada história.
3. **Campo "cenario" e personagens nas cenas:** bem utilizados.
4. **Faixas etárias:** todas as permitidas pelo schema estão em uso.
5. **Escolhas de bondade:** apropriadas e contextualizadas, com feedback gentil.
6. **Atividade organização:** sempre presente, adequada ao contexto da história.

## Arquivos problemáticos
Nenhum arquivo problemático quanto ao schema, nomes ou adequação infantil foi encontrado nesta revisão.

---

**Conclusão:**
Os arquivos analisados seguem o schema do projeto, apresentam linguagem adequada ao público infantil e trazem exemplos relevantes de bondade, partilha, organização e acolhimento, alinhados ao objetivo do projeto LearningJesus.
