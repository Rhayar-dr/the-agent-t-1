# Créditos dos assets

Todos os assets abaixo foram **criados do zero pela equipe (Ana)** como SVG vetorial original, sem uso de material de terceiros. Licença: livre para uso no projeto LearningJesus (CC0 / domínio público para fins do projeto).

| Pasta | Arquivos | Origem | Licença |
|---|---|---|---|
| assets/personagens/ | jesus, viajante, samaritano, noe, menino-dos-paes, pai, filho-prodigo (.svg, viewBox 400x600, pés na base) | Original (Ana) | CC0 |
| assets/cenarios/ | estrada, arca, campo-galileia, casa (.svg, 1280x720) | Original (Ana) | CC0 |
| assets/ui/ | play, ouvir, proximo, voltar, estrela, tente-de-novo (.svg, 96x96) | Original (Ana) | CC0 |

## Fontes (Google Fonts, SIL Open Font License 1.1)
- Baloo 2 (títulos) e Nunito (texto): https://fonts.google.com

## Formato para engenharia
- Personagens: viewBox `0 0 400 600`, fundo transparente, ids iguais aos do JSON. Para sobrepor num cenário: `<img>` com altura ~60% do cenário, ancorado embaixo.
- Cenários: proporção 16:9. UI: quadrados 96x96.
- Novos personagens (ex.: filho mais velho, crianças) serão adicionados conforme novas histórias.
