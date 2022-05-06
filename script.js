//variable to store player's selection
let playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase();


//function or loop to check that player input is actually R, P, or S

//function that randomly generates the computer's selection
function computerPlay(option) {
    const options = ['rock', 'paper', 'scissors'];
    option = options[Math.floor(Math.random() * options.length)];
    return option;
}

//variable to store computer's selection
let computerSelection = computerPlay();

//variable to store You Lose, You Win, It's a Tie(?)
let youLose = 'You Lose! ' + (computerSelection) + ' beats ' + (playerSelection) + '.';
let youWin = 'You Win! ' + (playerSelection) + ' beats ' + (computerSelection) + '.';

//function that plays a single round of RPS, using playerSelection
//and computerSelection, returning a string that declares the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return youWin;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return youWin;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
         return youWin;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
         return youLose;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
         return youLose;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
         return youLose;
     } else if (playerSelection == computerSelection) {
        return 'It\'s a tie.';
    } 
    youLose = 'You Lose! ' + (computerSelection) + ' beats ' + (playerSelection) + '.';
    youWin = 'You Win! ' + (playerSelection) + ' beats ' + (computerSelection) + '.';
} 
  

//function that generates 5 playRounds, keeping score, and reports 
//a winner/loser at the end 
function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            console.log('Starting game number ' + (i) + '') ;
            console.log(playRound(playerSelection, computerPlay())); 
            youLose = 'You Lose! ' + (computerSelection) + ' beats ' + (playerSelection) + '.';
            youWin = 'You Win! ' + (playerSelection) + ' beats ' + (computerSelection) + '.';
            playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase(); 
            console.log(computerSelection);
            console.log(playerSelection); 
        } else console.log('You\'ve played 5 times.');      
}}


console.log(computerSelection);
console.log(playerSelection);
game();
