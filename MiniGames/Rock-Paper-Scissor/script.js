let playerScore = 0;
let compScore = 0;

// This function will generate rock,paper or scissor randomly:
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber <= 0.3) {
    return "rock";
  } else if (randomNumber >= 0.3 && randomNumber <= 0.7) {
    return "paper";
  } else if (randomNumber >= 0.7 && randomNumber <= 1) {
    return "scissor";
  }
}

// This function will play a single round and return the winner or the loser of the round:
let result = "";
const displayPlayerScore = document.querySelector(".js-display-playerScore");
const displayCompScore = document.querySelector(".js-display-computerScore");
const showMoves = document.querySelector(".js-display-moves");
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissor") {
    displayPlayerScore.innerHTML = `PlayerScore:${++playerScore}`;
    result = "You won!, Rock beats Scissor";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    displayCompScore.innerHTML = `ComputerScore:${++compScore}`;
    result = "You lose!, Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    result = "Tie!, Rock equals Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    displayPlayerScore.innerHTML = `PlayerScore:${++playerScore}`;
    result = "You won!, Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    displayCompScore.innerHTML = `ComputerScore:${++compScore}`;
    result = "You lose!, Scissor beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    result = "Tie!, Paper equals Paper";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    displayPlayerScore.innerHTML = `PlayerScore:${++playerScore}`;
    result = "You won!, Scissor beats Paper";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    displayCompScore.innerHTML = `ComputerScore:${++compScore}`;
    result = "You lose!, Rock beats Scissor";
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    result = "Tie!, Scissor equals Scissor";
  }

  // this displays the result on screen
  showMoves.innerHTML = result;
}

const showWinner = document.querySelector(".js-winner");

const checkWinner = (playerScore, compScore) => {
  if (playerScore === 5) {
    showWinner.innerHTML = "You beat the Computer";
    setInterval(() => {
      resetGame();
    }, 2000);
  } else if (compScore === 5) {
    showWinner.innerHTML = "You got beaten by Computer";
    setInterval(() => {
      resetGame();
    }, 2000);
  }
};

// plays a move when button is clicked
const playRock = document.querySelector(".js-rock-btn");
let computerSelection;
playRock.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, compScore);
});

const playPaper = document.querySelector(".js-paper-btn");
playPaper.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, compScore);
});

const playScissor = document.querySelector(".js-scissor-btn");
playScissor.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "scissor";
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, compScore);
});

function resetGame() {
  playerScore = 0;
  compScore = 0;
  displayPlayerScore.innerHTML = `PlayerScore:0`;
  displayCompScore.innerHTML = `ComputerScore:0`;
  showMoves.innerHTML = "";
  showWinner.innerHTML = "";
}
