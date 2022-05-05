//variable to store computer's selection
const computerSelection = computerPlay();

//variable to store player's selection
let playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase();

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
    if (('scissors', 'paper') || ('rock', 'scissors') || ('paper', 'rock')) {
        return 'You Win! ' + (playerSelection) + ' beats ' + computerSelection + '.';
    } else if (('scissors', 'rock') || ('paper', 'scissors') || ('rock', 'paper')) {
       return 'You Lose! ' + computerSelection + ' beats ' + (playerSelection) + '.';
    } else 
        return 'It\'s a tie. ';
}


console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));
//function that generates 5 playRounds, keeping score, and reports 
//a winner/loser at the end