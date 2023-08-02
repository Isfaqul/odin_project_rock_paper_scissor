"use strict";

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getPlayerChoice() {
  const playerChoice = prompt("Enter your choice");

  if (playerChoice) return playerChoice.toLowerCase();
}

function cancelGame() {
  alert("Game Canceled!");
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a tie");
    return;
  }

  if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose the round! Paper beats Rock.");
    return "cp";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win the round! Paper beats Rock.");
    return "pl";
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose the round! Rock beats Scissors.");
    return "cp";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win the round! Rock beats Scissors.");
    return "pl";
  }

  if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose the round! Scissors beat Paper.");
    return "cp";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win the round! Scissors beat Paper.");
    return "pl";
  }
}

function game() {
  // keep track of score
  alert("Let's Play Rock Paper Scissors -- " + "A game with 5 rounds");

  let playerScore = 0;
  let computerScore = 0;

  let gameCount = 5;

  // Run the 5 times

  while (gameCount > 0) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let roundResult;

    if (playerChoice) {
      roundResult = playRound(playerChoice, computerChoice);
    } else {
      cancelGame();
      return;
    }

    if (roundResult === "cp") computerScore++;
    else if (roundResult === "pl") playerScore++;

    gameCount--;
  }

  if (playerScore > computerScore) {
    alert(
      `You win the Game. Final Scores\n\tComputer: ${computerScore}\n\tYourScore: ${playerScore} `
    );
  } else {
    alert(
      `You lose the Game. Final Scores\n\tComputer: ${computerScore}\n\tYourScore: ${playerScore} `
    );
  }
}

game();
