// Function for a random number between 1 and 3 and assigning each number to either rock paper or scissors
function getComputerChoice() {
  let number = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  let choice;
  if (number === 1) {
    choice = "rock";
  } else if (number === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

let container = document.querySelector("#container");
let rock = document.createElement("button");
rock.innerText = "Rock";
let paper = document.createElement("button");
paper.innerText = "paper";
let scissors = document.createElement("button");
scissors.innerText = "scissors";

let buttons = document.querySelectorAll("button")




container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

let humans = 0;
let computers = 0;
let div1 = document.createElement("div");

container.appendChild(div1);
// A function to play a round with computer and user inputs
function playRound(user, computer = getComputerChoice()) {
  let result;

  let userChoice = user.toLowerCase(); // To let user input without any case sensitivity

  // Game calculations
  if (userChoice === computer) {
    div1.innerText = `Humans:${humans}, computers:${computers}=> a tie`;
    return -1;
  } else if (userChoice === "rock" && computer === "paper") {
    result = 0;
    computers++;
    div1.innerText = `Humans:${humans}, computers:${computers}`;
  } else if (userChoice === "rock" && computer === "scissors") {
    result = 1;
    humans++;
    div1.innerText = `Humans:${humans}, computers:${computers}`;
  } else if (userChoice === "paper" && computer === "scissors") {
    result = 0;
    computers++;
    div1.innerText = `Humans:${humans}, computers:${computers}`;
  } else if (userChoice === "paper" && computer === "rock") {
    result = 1;
    humans++;
    div1.innerText = `Humans:${humans}, computers:${computers}`;
  } else if (userChoice === "scissors" && computer === "rock") {
    result = 0;
    computers++;
    div1.innerText = `Humans:${humans}, computers:${computers}`;
  } else if (userChoice === "scissors" && computer === "paper") {
    result = 1;
    humans++;
    div1.innerText = `Humans:${humans}, computers:${computers}`;
  }

  if (humans === 5) {
    div1.innerText = `Humans win, ${humans} - ${computers}`;
  } else if (computers === 5) {
    let div1 = document.createElement("div");
    container.appendChild(div1);
    div1.innerText = `computers win, ${computers} - ${humans}`;
  }
}

paper.addEventListener("click", function () {
  playRound("paper");
});
rock.addEventListener("click", function () {
  playRound("rock");
});
scissors.addEventListener("click", function () {
  playRound("scissors");
});
