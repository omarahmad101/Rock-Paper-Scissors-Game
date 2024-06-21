const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computercoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    const result = playRound(buttons.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerselection, computerSelection) {
  if (playerselection === computerSelection) {
    return "it is a tie!";
  } else if (
    (playerselection === "rock" && computerSelection === "scissors") ||
    (playerselection === "paper" && computerSelection === "rock") ||
    (playerselection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return " you Win! " + playerselection + " beats " + computerSelection;
  } else {
    computerScore++;
    computercoreEl.textContent = computerScore;
    return "you lose " + computerSelection + " beats " + playerselection;
  }
}
