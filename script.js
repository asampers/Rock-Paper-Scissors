const selections =  document.querySelector('#selections');
const resultsDisplay = document.querySelector('#resultsDisplay');
resultsDisplay.style.cssText = 'color: black; background: grey;';
const gameOutcome = document.createElement('p');
const scoreTally = document.createElement('p');

let playerSelection = '';
const gameDisplay = document.querySelector('div');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playerSelection = e.target.textContent.toLowerCase();
        console.log(playerSelection);
        computerPlay();
        selections.textContent = 'Player selected ' + playerSelection + '. Computer selected ' + computerSelection + '.';
        gameOutcome.textContent = (playRound(playerSelection, computerSelection));
        scoreTally.textContent = 'Computer has ' + computerScore + ' points. Player has ' + playerScore + ' points.';});
});

resultsDisplay.appendChild(selections);
resultsDisplay.appendChild(gameOutcome);
resultsDisplay.appendChild(scoreTally);

//variable to store computer's options
const options = ['rock', 'paper', 'scissors'];
let computerSelection = '';

//function that randomly generates the computer's selection
function computerPlay() {
    computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log(computerSelection);
    return computerSelection;
}

//variables to store computerScore, playerScore
let computerScore = 0;
let playerScore = 0;

//function that plays a single round of RPS, using playerSelection
//and computerSelection, returning a string that declares the winner, also add point
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
         playerScore++;
         return 'You Win! Scissors beats Paper.'; 
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

//function to figure out who wins, and ask if you want to play again
function gameWin(computerScore, playerScore) {
    if (computerScore < playerScore)  {
        console.log(playerWin);
        playAgain();
   } else if (computerScore > playerScore)  {
        console.log(computerWin);
        playAgain();
   } else if (computerScore == playerScore) {
       console.log(tiedGame);
       playAgain();
   }   
}
//variables to store game outcome
const computerWin = 'Sorry, you\'ve lost. Play again if you\'re not too embarrassed.'
const playerWin = 'Congratulations! You\'ve won!';
const tiedGame = 'It\'s a tied game. There are no winners or losers.';

//function to ask if player wants to play again and if 'yes' clear score
function playAgain(yesNo) {
    yesNo = confirm('Would you like to play again? If yes, hit \"OK\".');
        if (yesNo == true) {
            computerScore = 0;
            playerScore = 0;
            game();
            gameWin(computerScore, playerScore);
        } else {
            alert('Okay, thank\'s for playing!');
        }
}

//function that generates 5 playRounds, logs current score
//function game() {
 //   for (let i = 0; i < 5; i++) {
 //       if (i < 5) {
 //           console.log('Starting game number ' + (i) + '') ;
 //           console.log(playRound(playerChoice(), computerPlay()));
 //           console.log('Computer has ' + computerScore + ' points. And player has ' + playerScore + ' points.');
 //       }    
//}}

//game();
//gameWin(computerScore, playerScore);
