//variable to store player's selection
let playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase();

//function or loop to check that player input is actually R, P, or S

//variable to store computer's options
const options = ['rock', 'paper', 'scissors'];

//variable to store computer's selection
let computerSelection = computerPlay();



//function that randomly generates the computer's selection
function computerPlay(option) {
    option = options[Math.floor(Math.random() * options.length)];
    return option;
}


//function that plays a single round of RPS, using playerSelection
//and computerSelection, returning a string that declares the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
         return 'You Win! Paper beats Rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
         return 'You Lose. Paper beats Rock.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
         return 'You Lose. Rock beats Scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
         return 'You Lose. Scissors beats Paper.';
     } else if (playerSelection == computerSelection) {
        return 'It\'s a tie.';
    } 
} 
  
//function that generates 5 playRounds, keeping score, and reports 
//a winner/loser at the end 
function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            console.log('Starting game number ' + (i) + '') ;
            console.log(playRound(playerSelection, computerPlay()));
            playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase();
        } else console.log('You\'ve played 5 times.');      
}}



console.log(playerSelection);
console.log(computerSelection);
game();
