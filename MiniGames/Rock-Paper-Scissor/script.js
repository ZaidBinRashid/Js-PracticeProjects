let playerScore = 1;
let compScore = 1;

// This function will generate rock,paper or scissor randomly:
function getComputerChoice() {
  const randomNumber = Math.random();

  if(randomNumber >= 0 && randomNumber <= 0.3){
    return 'rock'
  } else if(randomNumber >= 0.3 && randomNumber <= 0.7){
    return 'paper'
  } else if(randomNumber >= 0.7 && randomNumber <= 1){
    return 'scissor'
  }
}

// This function will play a single round and return the winner or the loser of the round:
function playRound(playerSelection, computerSelection) {

  let result = '';

  if(playerSelection === 'rock' && computerSelection === 'scissor'){
    document.querySelector('.js-display-playerScore').innerHTML = `PlayerScore:${playerScore++}`;
    result = 'You won!, Rock beats Scissor';
  } else if(playerSelection === 'rock' && computerSelection === 'paper'){
    document.querySelector('.js-display-computerScore').innerHTML = `ComputerScore:${compScore++}`;
    result = 'You lose!, Paper beats Rock';
  } else if(playerSelection === 'rock' && computerSelection === 'rock'){
    result = 'Tie!, Rock equals Rock'
  }

  else if(playerSelection === 'paper' && computerSelection === 'rock'){
    document.querySelector('.js-display-playerScore').innerHTML = `PlayerScore:${playerScore++}`;
    result = 'You won!, Paper beats Rock';
  } else if(playerSelection === 'paper' && computerSelection === 'scissor'){
    document.querySelector('.js-display-computerScore').innerHTML = `ComputerScore:${compScore++}`;
    result = 'You lose!, Scissor beats Paper';
  } else if(playerSelection === 'paper' && computerSelection === 'paper'){
    result = 'Tie!, Paper equals Paper';
  }

  else if(playerSelection === 'scissor' && computerSelection === 'paper'){
    document.querySelector('.js-display-playerScore').innerHTML = `PlayerScore:${playerScore++}`;
    result = 'You won!, Scissor beats Paper';
  } else if(playerSelection === 'scissor' && computerSelection === 'rock'){
    document.querySelector('.js-display-computerScore').innerHTML = `ComputerScore:${compScore++}`;
    result = 'You lose!, Rock beats Scissor';
  } else if(playerSelection === 'scissor' && computerSelection === 'scissor'){
    result = 'Tie!, Scissor equals Scissor';
  }


  // this displays the result on screen
  document.querySelector('.js-display-moves').innerHTML = result;

}

let playerWins = 'You beat the Computer';
let compWins = 'You got beaten by Computer';

const checkWinner = (playerScore,compScore) => {
  if (playerScore === 6) {
    document.querySelector('.js-winner').innerHTML = playerWins;
  } else if (compScore === 6) {
    document.querySelector('.js-winner').innerHTML = compWins;
  }
}


// plays a move when button is clicked
const playRock = document.querySelector('.js-rock-btn');
playRock.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'rock';
  playRound(playerSelection,computerSelection);
  checkWinner(playerScore,compScore);
})

const playPaper = document.querySelector('.js-paper-btn');
playPaper.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection,computerSelection);
  checkWinner(playerScore,compScore);
})

const playScissor = document.querySelector('.js-scissor-btn');
playScissor.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissor';
  playRound(playerSelection,computerSelection);
  checkWinner(playerScore,compScore);
})


 


// This function will play a five round game and keeps the score:
//function game(){

//   for(i = 0; i < 5; i++){
//   const playerSelection = prompt('Rock, Paper or Scissor').toLowerCase();
//     console.log(`Playermove: ${playerSelection}`)
//   const computerSelection = getComputerChoice();
//     console.log(`Computeromove: ${computerSelection}`)
//   console.log(playRound(playerSelection, computerSelection));
//   console.log('-------------------');
//   };
   
//   if (playerScore > compScore){
//     return 'You beat the Computer';
//   } else if (playerScore < compScore){
//     return 'You got beat by Computer';
//   } else {
//     return 'You tied with Computer';
//   }
// }
// console.log(game());



