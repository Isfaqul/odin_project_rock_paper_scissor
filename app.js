"use strict";

// Elements
const weaponsEl = document.querySelectorAll("h3[data-weapons]");
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
