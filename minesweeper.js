document.addEventListener("DOMContentLoaded", startGame);

// Define your `board` object here!
var board = {
  cells: [
    { row: 1, col: 1, isMine: false, hidden: true },
    { row: 1, col: 2, isMine: true, hidden: true },
    { row: 1, col: 3, isMine: false, hidden: true },
    { row: 1, col: 4, isMine: false, hidden: true },
    { row: 2, col: 1, isMine: true, hidden: true },
    { row: 2, col: 2, isMine: false, hidden: true },
    { row: 2, col: 3, isMine: true, hidden: true },
    { row: 2, col: 4, isMine: false, hidden: true },
    { row: 3, col: 1, isMine: false, hidden: true },
    { row: 3, col: 2, isMine: false, hidden: true },
    { row: 3, col: 3, isMine: true, hidden: true },
    { row: 3, col: 4, isMine: false, hidden: true },
    { row: 4, col: 1, isMine: false, hidden: true },
    { row: 4, col: 2, isMine: true, hidden: true },
    { row: 4, col: 4, isMine: false, hidden: true },
    { row: 4, col: 3, isMine: false, hidden: true },
  ],
};

function startGame() {
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  // Don't remove this function call: it makes the game work!
  for (let index = 0; index < board.cells.length; index++) {
    board.cells[index].surroundingMines = countSurroundingMines(
      board.cells[index]
    );
    board.cells[index].isMarked = false;
  }

  lib.initBoard();
}

startGame();

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  console.log("event listener works!");

  for (let index = 0; index < board.cells.length; index++) {
    //assume the player has won before the if statement
    let hasWon = true;

    //if there is a cell that has a mine, and isn't marked then return false
    if (board.cells[index].isMine && !board.cells[index].isMarked) {
      hasWon = false;

      //if a cell thats not a mine is still hidden, return false
    } else if (!board.cells[index].isMine && board.cells[index].hidden) {
      hasWon = false;
    }
    //if the hasWon is true then display a message saying so
    if (hasWon) {
      lib.displayMessage("No limbs lost today you win!");
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  //gets the cells in array
  let surrounding = lib.getSurroundingCells(cell.row, cell.col);

  //setting the count of our cells with a mine to 0
  let count = 0;

  surrounding.forEach((cell) => {
    if (cell.isMine === true) {
      count++;
      console.log(count);
    }
  });

  return count;
}
