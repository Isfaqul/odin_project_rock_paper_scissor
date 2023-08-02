function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function getPlayerChoice() {
  return prompt("Enter your choice").toLowerCase();
}

function playRound(playerSelection, computerSelection) {}
