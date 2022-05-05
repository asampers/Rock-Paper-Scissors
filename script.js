//variable to store computer's selection
const computerSelection = computerPlay();

//variable to store player's selection
let playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase();

//variable to store You Lose, You Win, It's a Tie(?)
const youLose = 'You Lose! ' + computerSelection + ' beats ' + (playerSelection) + '.';
const youWin = 'You Win! ' + (playerSelection) + ' beats ' + computerSelection + '.';

//function or loop to check that player input is actually R, P, or S

//function that randomly generates the computer's selection
function computerPlay(option) {
    const options = ['rock', 'paper', 'scissors'];
    option = options[Math.floor(Math.random() * options.length)];
    return option;
}
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
}
    


console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));

//function that generates 5 playRounds, keeping score, and reports 
//a winner/loser at the end 
