const resultsDisplay = document.querySelector('#resultsDisplay');
resultsDisplay.style.cssText = 'color: black; background: lightPink;';

const selections =  document.querySelector('#selections');
const gameOutcome = document.createElement('p');
const scoreTally = document.createElement('p');
const pointCounter = document.createElement('p');

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
        scoreTally.textContent = 'Computer has ' + computerScore + ' points. Player has ' + playerScore + ' points.';
        gameWin(computerScore, playerScore);});
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
         return 'You Win this round! Scissors beats Paper.'; 
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
         playerScore++;
         return 'You Win this round! Rock beats Scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
         playerScore++; 
         return 'You Win this round! Paper beats Rock.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
         computerScore++;
         return 'You Lose this round. Paper beats Rock.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
         computerScore++;
         return 'You Lose this round. Rock beats Scissors.';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
         computerScore++;
         return 'You Lose this round. Scissors beats Paper.';
     } else if (playerSelection == computerSelection) {
           return 'It\'s a tie.';
    } 
} 

//function to figure out who wins
function gameWin(computerScore, playerScore) {
    if (computerScore >= 5 || playerScore >= 5) {
        if (computerScore < playerScore)  {
            pointCounter.textContent = playerWin;    
            resultsDisplay.appendChild(pointCounter);
            playAgain();
        } else if (computerScore > playerScore)  {
            pointCounter.textContent = computerWin;    
            resultsDisplay.appendChild(pointCounter);
            playAgain();
        } else if (computerScore == playerScore) {
            pointCounter.textContent = tiedGame;
            resultsDisplay.appendChild(pointCounter);}
            playAgain();
    } else if (computerScore === 4 || playerScore === 4) { 
        pointCounter.textContent = 'So close to 5 points! Choose wisely!';
        resultsDisplay.appendChild(pointCounter);
    } else if (computerScore <= 3 && playerScore <= 3) {
        pointCounter.textContent = 'First to 5 points wins!';
        resultsDisplay.appendChild(pointCounter);};   
}
//variables to store game outcome
const computerWin = 'Sorry, you\'ve lost the game. The computer got 5 points first. Play again if you\'re not too embarrassed.'
const playerWin = 'Congratulations! You\'ve won the game! You got to 5 points first.';
const tiedGame = 'It\'s a tied game. There are no winners or losers.';

//variables to store buttons and question for playAgain
const restart = document.createElement('button');
restart.textContent = 'Restart';
const wouldYou = document.createElement('p');
  

//function to ask if player wants to play again and if 'yes' clear score
function playAgain(e) {
    wouldYou.textContent = 'Let\'s play again!';  
    resultsDisplay.appendChild(wouldYou);
    resultsDisplay.appendChild(restart);
    restart.addEventListener('click', function() {
            computerScore = 0;
            playerScore = 0;
            selections.textContent = 'Make your first selection.';
            gameOutcome.textContent = '';
            scoreTally.textContent = '';
            pointCounter.textContent = '';
            wouldYou.textContent = '';
            restart.parentNode.removeChild(restart);
    });  
}

