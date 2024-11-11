
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");
const playerSign = document.getElementById("playerSign");
const scoreMessage = document.getElementById("scoreMessage");

rock.addEventListener('click', function() {
    playerSign.src = "images/rock.jpeg";
    playRound('rock', getRandomChoice());
  });
  
paper.addEventListener('click', function() {
    playerSign.src = "images/paper.jpeg";
    playRound('paper', getRandomChoice());
  });
  
scissors.addEventListener('click', function() {
    playerSign.src = "images/scissors.jpeg";
    playRound('scissors', getRandomChoice());
  });
  

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        roundWinner = 'player'
    }
    if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock')
    ) {
        roundWinner = 'computer'
    }
    updateScore();
}
function getRandomChoice() {
    let computerSign = document.getElementById("computerSign");
    let rndChoice = Math.floor(Math.random() * 3);
    var txtChoice;
    switch (rndChoice) {
      case 0:
        computerSign.src = "images/rock.jpeg";
        txtChoice = 'rock';
        break;
      case 1:
        computerSign.src = "images/paper.jpeg";
        txtChoice = 'paper';
        break;
      case 2:
        computerSign.src = "images/scissors.jpeg";
        txtChoice = 'scissors';
        break;
    }
    return txtChoice;
}

function updateScore() {
  if (roundWinner == 'tie') {
    scoreMessage.textContent = "It's a tie!"
  }
  else if (roundWinner == 'player') {
    scoreMessage.textContent = 'You won!'
  }
  else if (roundWinner == 'computer') {
    scoreMessage.textContent = 'You lost!'
  }
}