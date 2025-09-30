# Find Your Hat - Terminal Game 🎩

## Descrição
**Find Your Hat** é um jogo de terminal interativo feito em **JavaScript** com Node.js.  
O objetivo do jogo é encontrar seu chapéu (`^`) em um campo cheio de buracos (`O`) e caminhos (`░`) enquanto você controla o personagem (`*`) que começa no canto superior esquerdo do campo.

O jogador deve navegar pelo campo usando as teclas de direção (W, A, S, D) sem cair nos buracos ou sair do campo. Cada movimento é exibido no terminal para acompanhar o progresso.

O jogo também permite gerar campos aleatórios com diferentes tamanhos e porcentagem de buracos, tornando cada partida única.

---

## Características
- Campo interativo de tamanho personalizável
- Buracos distribuídos aleatoriamente
- Chapéu colocado em posição aleatória
- Controle do jogador via teclado (`W`, `A`, `S`, `D`)
- Impressão do campo atual a cada movimento
- Mensagens de vitória e derrota

---

## Tecnologias
- JavaScript (ES6)
- Node.js
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) para entrada do usuário no terminal

---

## Instalação
1. Clone este repositório:
```bash
git clone https://github.com/diegocp05/find-your-hat.git
