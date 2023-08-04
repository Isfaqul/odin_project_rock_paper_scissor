"use strict";

function getComputerChoice() {
  const choices = ["🪨", "📄", "✂"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a tie");
    return;
  }

  if (playerSelection === "🪨" && computerSelection === "📄") {
    alert("You lose the round! Paper beats Rock.");
    return "cp";
  } else if (playerSelection === "📄" && computerSelection === "🪨") {
    alert("You win the round! Paper beats Rock.");
    return "pl";
  }

  if (playerSelection === "✂" && computerSelection === "🪨") {
    alert("You lose the round! Rock beats Scissors.");
    return "cp";
  } else if (playerSelection === "🪨" && computerSelection === "✂") {
    alert("You win the round! Rock beats Scissors.");
    return "pl";
  }

  if (playerSelection === "📄" && computerSelection === "✂") {
    alert("You lose the round! Scissors beat Paper.");
    return "cp";
  } else if (playerSelection === "✂" && computerSelection === "📄") {
    alert("You win the round! Scissors beat Paper.");
    return "pl";
  }
}
