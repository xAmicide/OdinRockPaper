function getRandomInt() {
  min = 0;
  max = 2;
  return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[getRandomInt()];
}

function playRound(playerSelection, score) {
  computerSelection = getComputerChoice();
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
    case "Scissors":
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

function getPlayerClick(selection, score) {
  if (score > 4) {
    alert("You WON");
  } else if (score < -4) {
    alert("YOU LOST");
  }
  playerSelection = selection;
  score = playRound(playerSelection, score);
  console.log(score);
  return score;
}
const body = document.querySelector("body");

let score = 0;

let scoredoc = document.createElement("div");
scoredoc.innerText = score;
scoredoc.id = "scoredoc";

body.appendChild(scoredoc);

let rock = document.createElement("button");
rock.textContent = "Rock";
rock.addEventListener("click", (e) => {
  score = getPlayerClick("Rock", score);
  document.getElementById("scoredoc").innerHTML = score;
});
body.appendChild(rock);

let paper = document.createElement("button");
paper.textContent = "Paper";
paper.addEventListener("click", (e) => {
  score = getPlayerClick("Paper", score);
  document.getElementById("scoredoc").innerHTML = score;
});
body.appendChild(paper);

let scissor = document.createElement("button");
scissor.textContent = "Scissor";
scissor.addEventListener("click", (e) => {
  score = getPlayerClick("Scissors", score);
  document.getElementById("scoredoc").innerHTML = score;
});
body.appendChild(scissor);
