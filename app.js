function getRandomInt() {
  min = 0;
  max = 2;
  return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[getRandomInt()];
}

function playRound(score) {
  playerSelection = window.prompt("Rock, Paper, Scissors");
  computerSelection = getComputerChoice;
  switch (playerSelection) {
    case "Rock":
      if (computerSelection == "Scissors") {
        return score + 1;
      } else if (computerSelection == "Paper") {
        return score - 1;
      } else {
        return score;
      }
      break;
    case "Paper":
      if (computerSelection == "Scissors") {
        return score - 1;
      } else if (computerSelection == "paper") {
        return score;
      } else {
        return score - 1;
      }
      break;
    case "Scissor":
      if (computerSelection == "Scissors") {
        return score;
      } else if (computerSelection == "Paper") {
        return score + 1;
      } else {
        return score - 1;
      }
      break;

    default:
      break;
  }
}

function getPlayerSelection() {
  return prompt("Rock, Paper, Scissors");
}

function game() {
  let count = 1;
  let score = 0;
  while (count < 5) {
    score = playRound(score);
    count++;
  }
  if (score > 0) {
    return "You Win";
  } else {
    return "You Lose";
  }
}

console.log(game());
