const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.playerPosition = { x: 0, y: 0 };
    this.field[0][0] = pathCharacter; // jogador começa no canto superior esquerdo
    this.height = field.length;
    this.width = field[0].length;
  }

  // imprime o campo atual
  print() {
    for (let row of this.field) {
      console.log(row.join(''));
    }
  }

  // checa se a posição é válida dentro do campo
  isInsideField(x, y) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
  }

  // verifica se o jogador venceu
  isHat(x, y) {
    return this.field[y][x] === hat;
  }

  // verifica se caiu em um buraco
  isHole(x, y) {
    return this.field[y][x] === hole;
  }

  // move o jogador
  move(direction) {
    let { x, y } = this.playerPosition;

    switch (direction.toLowerCase()) {
      case 'w': y -= 1; break; // cima
      case 's': y += 1; break; // baixo
      case 'a': x -= 1; break; // esquerda
      case 'd': x += 1; break; // direita
      default:
        console.log('Direção inválida! Use W, A, S ou D.');
        return true;
    }

    if (!this.isInsideField(x, y)) {
      console.log('Você saiu do campo! Game Over.');
      return false;
    }

    if (this.isHole(x, y)) {
      console.log('Você caiu em um buraco! Game Over.');
      return false;
    }

    if (this.isHat(x, y)) {
      console.log('Parabéns! Você encontrou o chapéu!');
      return false;
    }

    // atualiza posição
    this.playerPosition = { x, y };
    this.field[y][x] = pathCharacter;
    return true;
  }

  // gera um campo aleatório
  static generateField(height, width, holePercentage = 0.2) {
    const field = Array.from({ length: height }, () => 
      Array.from({ length: width }, () => Math.random() < holePercentage ? hole : fieldCharacter)
    );

    // posição inicial do jogador
    field[0][0] = pathCharacter;

    // coloca o chapéu aleatoriamente, mas não no canto inicial
    let hatX, hatY;
    do {
      hatX = Math.floor(Math.random() * width);
      hatY = Math.floor(Math.random() * height);
    } while (hatX === 0 && hatY === 0);

    field[hatY][hatX] = hat;
    return field;
  }
}

// Função principal do jogo
function playGame() {
  const field = new Field(Field.generateField(5, 5, 0.2));
  let playing = true;

  while (playing) {
    field.print();
    const move = prompt('Digite a direção (W = cima, S = baixo, A = esquerda, D = direita): ');
    playing = field.move(move);
  }
}

playGame();
