class Ship {
  constructor(length) {
   // if (length <= 0) throw new Error("Invalid ship length");
    this.length = length;
    this.hits = 0;
  }

  hit() {
    if (this.hits < this.length) this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}



class Gameboard {
  constructor() {
    //size of board
    this.boardSize = 10;
    //ship objects
    this.ships = [];

    this.board = [];
      for (let i = 0; i < 10; i++) {
       this.board.push(new Array(10).fill(null));
}
    // missed attacks coordinates
    this.missedAttacks = [];
  }

  placeShip(x, y, length, isVertical = false) {
    
    const ship = new Ship(length);
    //in case of vertical alignment
    if (isVertical) {
      for (let i = 0; i < length; i++) {
        this.board[y + i][x] = ship;
      }
      
    } else {
      for (let i = 0; i < length; i++) {
        this.board[y][x + i] = ship;
      }
    }
    this.ships.push(ship);
  }

  receiveAttack(x, y) {

    const target = this.board[y][x];
        if (target && typeof target.hit === 'function') {
      target.hit();
    } else {
      this.missedAttacks.push([x, y]);
    }
  }
// verify sunken ship
  allShipsSunk() {
    for(let ship of this.ships){
      if (!ship.isSunk()) return false;
    }
    return true;
  }
}

//3
class Player {

  constructor(isComputer = false) {
    this.board = new Gameboard();
    this.isComputer = isComputer;
    this.previousMoves = new Set();
  }

  getRandomCoords() {
    let x, y, key;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      key = `${x},${y}`;
    } while (this.previousMoves.has(key));
    this.previousMoves.add(key);
    return [x, y];
  }

  attack(opponent, x, y) {
    opponent.board.receiveAttack(x, y);
  }

  randomAttack(opponent) {
    const [x, y] = this.getRandomCoords();
    this.attack(opponent, x, y);
  }
}

//Game controller

const human = new Player();
const computer = new Player(true);

// ships location 
human.board.placeShip(0, 0, 3,false); 
human.board.placeShip(6, 6, 4,false);
human.board.placeShip(8, 0, 2,true);
computer.board.placeShip(2, 2, 3,true); 
computer.board.placeShip(1,1,3,true); 
computer.board.placeShip(4, 5, 3,false); 
computer.board.placeShip(5, 5, 3,false); 

function renderBoards() {
  
  renderBoard(human.board, document.getElementById('human-board'), false);
  renderBoard(computer.board, document.getElementById('computer-board'), true);
}

function renderBoard(board, container, isEnemy) {
  container.innerHTML = '';
  for (let y = 0; y < board.boardSize; y++) {
    for (let x = 0; x < board.boardSize; x++) {
      const cell = document.createElement('div');
      const value = board.board[y][x];
      const missed = board.missedAttacks.some(([mx, my]) => mx === x && my === y);

      if (value && value.isSunk()) cell.classList.add('ship');
      if (missed) cell.classList.add('miss');
      if (value && value.hits > 0) cell.classList.add('hit');
      

      if (isEnemy) {
        cell.addEventListener('click', () => {
          handlePlayerAttack(x, y);
        });
      }

      container.appendChild(cell);
    }
  }
}

function handlePlayerAttack(x, y) {
  human.attack(computer, x, y);
  renderBoards();
  if (computer.board.allShipsSunk()) return endGame('Human');

  computer.randomAttack(human);
  renderBoards();
  if (human.board.allShipsSunk()) return endGame('Computer');
}

function endGame(winner) {
  alert(`${winner} wins-Game over restart !`);
  document.getElementById('blackout').style.display = 'block';
}

renderBoards();

function reset() {
  window.location.reload();
}

document.getElementById('reset').addEventListener('click', reset);

