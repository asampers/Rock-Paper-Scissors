//variable to store computer's selection
const computerSelection = computerPlay();

//variable to store player's selection
let playerSelection = prompt('Type Rock, Paper, or Scissors.').toLowerCase();
    if (playerSelection != 'rock' || 'paper' || 'scissors') {
        prompt('Please try again! Type Rock, Paper, or Scissors.'); 
    } else {
        alert('Thanks!');
     }

//function that randomly generates the computer's selection
function computerPlay(option) {
    const options = ['Rock', 'Paper', 'Scissors'];
    option = options[Math.floor(Math.random() * options.length)];
    return option;
}


console.log(computerSelection);
console.log(playerSelection);
//function that plays a single round of RPS, using playerSelection
//and computerSelection, returning a string that declares the winner


//function that generates 5 playRounds, keeping score, and reports 
//a winner/loser at the end