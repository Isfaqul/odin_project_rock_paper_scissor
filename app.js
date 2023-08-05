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

// Update the score
function updateScoreDisplay() {
  const playerScoreEl = document.querySelector("h2[data-player-score]");
  const computerScoreEl = document.querySelector("h2[data-computer-score]");

  playerScoreEl.innerText = playerScore;
  computerScoreEl.innerText = computerScore;
}

// Display the chosen weapons
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

// Handle The Game
function handleGame() {
  playClick();
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
    if (playerScore === 5) {
      declareGameOutcome("player");
    } else {
      declareGameOutcome("computer");
    }

    resetGame();
  }
}

// Reset the game
function resetGame() {
  const resetBtn = document.querySelector(".play-again-btn");

  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}

// DeclareGameOutcome
function declareGameOutcome(winnerName) {
  const popUpEl = document.querySelector("div[data-outcome-element]");
  displayGameOverEmoji(winnerName);
  displayGameOverTxt(winnerName);

  popUpEl.classList.add("show");

  if (winnerName === "player") {
    playWinSound();
  } else {
    playLoseSound();
  }
}

function playLoseSound() {
  const loserSound = document.getElementById("loser-sound");
  loserSound.currentTime = 0;
  loserSound.play();
}

function playWinSound() {
  const winSound = document.getElementById("winner-sound");
  winSound.currentTime = 0;
  winSound.play();
}

function playClick() {
  const clickSound = document.getElementById("click-sound");
  clickSound.currentTime = 0;
  clickSound.play();
}

// show Game Over Emoji
function displayGameOverEmoji(winnerName) {
  const gameOverWinEmoji = ["🥳", "🎉", "🎈", "😍", "🤩"];
  const gameOverLoseEmoji = ["😣", "😵‍💫", "💔", "🥺", "😭"];
  const emojiEl = document.querySelector(".game-over-emoji");

  let randomIndex = Math.floor(Math.random() * gameOverWinEmoji.length);

  if (winnerName === "player") {
    emojiEl.innerText = gameOverWinEmoji[randomIndex];
  } else {
    emojiEl.innerText = gameOverLoseEmoji[randomIndex];
  }
}

// show Game Over Text
function displayGameOverTxt(winnerName) {
  const gameOverWinTxt = [
    "Wuhoo!You Won The Game!",
    "Abe Jiki Gola be Kela",
    "Jikili, Mojaaaaaaaaaaaaaaa be!",
    "Abe luckot jiki goli, hatt!",
    "Tumi e main! Jiki Gola",
  ];
  const gameOverLoseTxt = [
    "Hahaha! Ki mokkel be!! Hari goli",
    "Toi Gedaa, janisilu e! Hari goiso",
    "Tur Kopal Futa, LOL! Hariso",
    "Goru hara disa!, etia hagi aha tumi",
    "Hari gola, tumi number one under 18 Geda",
  ];

  const txtEl = document.querySelector(".game-over-txt");

  let randomIndex = Math.floor(Math.random() * gameOverWinTxt.length);

  if (winnerName === "player") {
    txtEl.innerText = gameOverWinTxt[randomIndex];
  } else {
    txtEl.innerText = gameOverLoseTxt[randomIndex];
  }
}

// Event Listeners
weaponsEl.forEach((weapon) => {
  weapon.addEventListener("click", handleGame);
});
