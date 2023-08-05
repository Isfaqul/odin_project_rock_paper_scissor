"use strict";

// Elements
const weaponsEl = document.querySelectorAll("h3[data-weapons]");

// Variables to hold scores
let playerScore = 0;
let computerScore = 0;

// Functions
function getComputerChoice() {
  const choices = ["🪨", "📄", "✂"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

// Function to display message
function displayMessage(msg) {
  const msgEl = document.querySelector("p[data-msg-display]");

  msgEl.innerText = msg;
}

// Play Round Function
function playRound(playerSelection, computerSelection) {
  // Store winners name after each round
  let winner;

  if (playerSelection === computerSelection) {
    displayMessage("It's a tie");
    return;
  }

  if (playerSelection === "🪨" && computerSelection === "📄") {
    displayMessage("You lose the round! Paper beats Rock.");
    winner = "cp";
  } else if (playerSelection === "📄" && computerSelection === "🪨") {
    displayMessage("You win the round! Paper beats Rock.");
    winner = "pl";
  }

  if (playerSelection === "✂" && computerSelection === "🪨") {
    displayMessage("You lose the round! Rock beats Scissors.");
    winner = "cp";
  } else if (playerSelection === "🪨" && computerSelection === "✂") {
    displayMessage("You win the round! Rock beats Scissors.");
    winner = "pl";
  }

  if (playerSelection === "📄" && computerSelection === "✂") {
    displayMessage("You lose the round! Scissors beat Paper.");
    winner = "cp";
  } else if (playerSelection === "✂" && computerSelection === "📄") {
    displayMessage("You win the round! Scissors beat Paper.");
    winner = "pl";
  }

  return winner;
}

function updateScoreDisplay() {
  const playerScoreEl = document.querySelector("h2[data-player-score]");
  const computerScoreEl = document.querySelector("h2[data-computer-score]");

  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
}

function updateChoiceDisplay(computerChoice, playerChoice) {
  const computerWeaponDisplay = document.querySelector(
    "h3[data-weapon-display-computer]"
  );

  const playerWeaponDisplay = document.querySelector(
    "h3[data-weapon-display-player]"
  );

  computerWeaponDisplay.innerText = computerChoice;
  playerWeaponDisplay.innerText = playerChoice;
}

function handleGame() {
  const playerChoice = this.innerText;
  const computerChoice = getComputerChoice();
  let roundResult = playRound(playerChoice, computerChoice);

  //update the mainDisplay
  updateChoiceDisplay(computerChoice, playerChoice);

  // compare rounResult to assess score
  if (roundResult === "pl") {
    playerScore++;
  } else if (roundResult === "cp") {
    computerScore++;
  }

  // update score display
  updateScoreDisplay();

  // Check if game to be stopped
  if (playerScore === 5 || computerScore === 5) {
    console.log("yay, the game is over");
    declareGameOutcome();
    resetGame();
  }
}

// Event Listeners
weaponsEl.forEach((weapon) => {
  weapon.addEventListener("click", handleGame);
});
