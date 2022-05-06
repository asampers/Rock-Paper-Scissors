//variable to store player's selection
let playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase();
console.log(playerSelection);

//function or loop to check that player input is actually R, P, or S

//variable to store computer's options
const options = ['rock', 'paper', 'scissors'];

//variable to store computer's selection
let computerSelection = computerPlay();

//function that randomly generates the computer's selection
function computerPlay(option) {
    option = options[Math.floor(Math.random() * options.length)];
    console.log(option);
    return option;
}

//variables to store computerScore, playerScore
let computerScore = 0;
let playerScore = 0;

//function that plays a single round of RPS, using playerSelection
//and computerSelection, returning a string that declares the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
         playerScore++;
         return 'You Win! Scissors beats Rock.'; 
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
         playerScore++;
         return 'You Win! Rock beats Scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
         playerScore++; 
         return 'You Win! Paper beats Rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
         computerScore++;
         return 'You Lose. Paper beats Rock.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
         computerScore++;
         return 'You Lose. Rock beats Scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
         computerScore++;
         return 'You Lose. Scissors beats Paper.';
     } else if (playerSelection == computerSelection) {
         computerScore++;
         playerScore++;   
         return 'It\'s a tie.';
    } 
} 

//function to figure out who wins
function gameWin(computerScore, playerScore) {
    if (computerScore < playerScore)  {
        console.log(playerWin);
   } else if (computerScore > playerScore)  {
        console.log(computerWin) ;
   } else if (computerScore == playerScore) {
       console.log(tiedGame);
   }   
}
//variables to store game outcome
const computerWin = 'Sorry, you\'ve lost. Play again if you\'re not too embarrassed.'
const playerWin = 'Congratulations! You\'ve won!';
const tiedGame = 'It\'s a tied game. There are no winners or losers.';

//function that generates 5 playRounds, keeping score, and reports 
//a winner/loser at the end 
function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            console.log('Starting game number ' + (i) + '') ;
            console.log(playRound(playerSelection, computerPlay()));
            console.log('Computer has ' + computerScore + ' points. And player has ' + playerScore + ' points.');
            playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase();
            console.log(playerSelection);
        }    
}}

game();
gameWin(computerScore, playerScore);
