// Global variables
const board = document.querySelector("#board");
let currentPlayer = "X";
const winnerMessage = document.querySelector("#winnerMessage");

// Rendering the game board
function renderBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    board.appendChild(cell);
  }
}

renderBoard();

// To populate the game board
const allCells = document.querySelectorAll(".cell");

allCells.forEach((cellElement) => {
  cellElement.addEventListener("click", () => {
    // Prevent further clicks if cell is already filled or there's a winner
    if (cellElement.textContent !== "" || winnerMessage.textContent !== "")
      return;

    cellElement.textContent = currentPlayer;

    if (checkWinner()) {
      winnerMessage.textContent = `The winner is ${currentPlayer}!`;
      return;
    }

    if (Array.from(allCells).every((cell) => cell.textContent !== "")) {
      winnerMessage.textContent = "It's a draw!";
      return;
    }

    switchPlayer();
  });
});

// Switch player function
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Reset game
const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => {
  currentPlayer = "X";
  allCells.forEach((cellElement) => {
    cellElement.textContent = "";
  });
  winnerMessage.textContent = "";
});

// Function to check for a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations){
    const [a, b, c] = combination;
    if (
      allCells[a].textContent &&
      allCells[a].textContent === allCells[b].textContent &&
      allCells[a].textContent === allCells[c].textContent
    ) {
      return true;
    }
  }
  return false;
}
