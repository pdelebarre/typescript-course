class Player {
  static description = "******";
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log("Yoooooo");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("score must be positive");
    }
    this.#score = newScore;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  loseLife() {
    this.numLives--;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer();

// const player1 = new Player("blue", "steel");
// // player1.taunt();
// // console.log(player1.first);
// // console.log(player1.last);
// console.log("player1", player1.fullName);
// player1.loseLife();
// console.log("player1", player1);
// console.log("player1.getScore()", player1.score);
// player1.updateScore(28);

// console.log("player1.getScore()", player1.score);

const player2 = new Player("toto", "titi");
player2.taunt();

player2.score = 12222;

player2.fullName = "Philippe Delebarre";
console.log(" >> ", player2.first);
console.log(" >> ", player2.last);

let element = document.getElementById("bibi");
element.innerHTML = player2.fullName;
