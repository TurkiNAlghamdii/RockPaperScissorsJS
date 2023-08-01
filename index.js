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
function playRound(user, computer = getComputerChoice()) {
  let result;

  let userChoice = user.toLowerCase(); // To let user input without any case sensitivity

  // Game calculations
  if (userChoice === computer) {
    return -1;
  } else if (userChoice === "rock" && computer === "paper") {
    result = 0;
  } else if (userChoice === "rock" && computer === "scissors") {
    result = 1;
  } else if (userChoice === "paper" && computer === "scissors") {
    result = 0;
  } else if (userChoice === "paper" && computer === "rock") {
    result = 1;
  } else if (userChoice === "scissors" && computer === "rock") {
    result = 0;
  } else if (userChoice === "scissors" && computer === "paper") {
    result = 1;
  }

  return result;
}
// Function to loop a fixed number of times
function game() {
  let humans = 0;
  let computer = 0;
  for (let i = 0; i <= 2; i++) {
    userInput = prompt("enter your choice:");
    result = playRound(userInput);
    if (result === 0) {
      computer++;
    } else if (result == 1) {
      humans++;
    }
  }

  // To keep up with the final score
  console.log(`The score is Humans:${humans} - Computers ${computer}`);
  if (humans > computer) {
    console.log("Humans win!!!");
  } else {
    console.log("Computers Win :(");
  }
}
// Start the game
game();
