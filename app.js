"use strict";

function getComputerChoice() {
  const choices = ["🪨", "📄", "✂"];
  const randomIndex = Math.floor(Math.random() * 3);

  // Update Display
  const cpWeaponDisplay = document.querySelector(
    "h3[data-weapon-display-computer]"
  );

  cpWeaponDisplay.innerText = choices[randomIndex];

  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    displayMessage("It's a tie");
    return;
  }

  if (playerSelection === "🪨" && computerSelection === "📄") {
    displayMessage("You lose the round! Paper beats Rock.");
    updateScore("cp");
  } else if (playerSelection === "📄" && computerSelection === "🪨") {
    displayMessage("You win the round! Paper beats Rock.");
    updateScore("pl");
  }

  if (playerSelection === "✂" && computerSelection === "🪨") {
    displayMessage("You lose the round! Rock beats Scissors.");
    updateScore("cp");
  } else if (playerSelection === "🪨" && computerSelection === "✂") {
    displayMessage("You win the round! Rock beats Scissors.");
    updateScore("pl");
  }

  if (playerSelection === "📄" && computerSelection === "✂") {
    displayMessage("You lose the round! Scissors beat Paper.");
    updateScore("cp");
  } else if (playerSelection === "✂" && computerSelection === "📄") {
    displayMessage("You win the round! Scissors beat Paper.");
    updateScore("pl");
  }
}

function displayMessage(msg) {
  const msgEl = document.querySelector("p[data-msg-display]");

  msgEl.innerText = msg;
}

function updateScore(roundWinner) {
  const playerScoreEl = document.querySelector("h2[data-player-score]");
  const computerScoreEl = document.querySelector("h2[data-computer-score]");

  let playerScore = +playerScoreEl.innerText;
  let computerScore = +computerScoreEl.innerText;

  if (roundWinner === "cp") {
    computerScore++;
    computerScoreEl.innerText = computerScore;
  }
  if (roundWinner === "pl") {
    playerScore++;
    playerScoreEl.innerText = playerScore;
  }
}

function game() {
  const weapons = document.querySelectorAll("h3[data-weapons]");

  weapons.forEach((weapon) => {
    weapon.addEventListener("click", () => {
      playRound(weapon.innerText, getComputerChoice());

      // Update Player Display
      const plWeaponDisplay = document.querySelector(
        "h3[data-weapon-display-player]"
      );

      plWeaponDisplay.innerText = weapon.innerText;
    });
  });
}

game();

// function blur() {
//   const choices = ["🪨", "📄", "✂"];

//   // Update Display
//   const cpWeaponDisplay = document.querySelector(
//     "h3[data-weapon-display-computer]"
//   );

//   let i = 0;

//   function run() {
//     cpWeaponDisplay.innerText = choices[i];
//     i++;

//     if (i > 2) {
//       i = 0;
//     }
//   }

//   setInterval(run, 100);
// }
