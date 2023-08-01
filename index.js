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

// A function to play a round with computer and user inputs
function playRound(user, computer) {
  console.log(computer);
  let result;

  let userChoice = user.toLowerCase(); // To let user input without any case sensitivity

  if (userChoice === computer) {
    return "It's a tie!";
  } else if (userChoice === "rock" && computer === "paper") {
    return "Computer wins!!";
  } else if (userChoice === "rock" && computer === "scissors") {
    return "Human wins!!";
  } else if (userChoice === "paper" && computer === "scissors") {
    return "computer wins!!";
  } else if (userChoice === "paper" && computer === "rock") {
    return "Human wins!!";
  } else if (userChoice === "scissors" && computer === "rock") {
    return "Computer wins!!";
  } else if (userChoice === "scissors" && computer === "paper") {
    return "Human wins!!";
  }
}


console.log(playRound("paper", getComputerChoice()));
