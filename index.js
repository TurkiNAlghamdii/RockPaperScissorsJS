function getComputerChoice(){
    let number = Math.floor(Math.random() * (3 - 1 + 1) + 1)
    let choice;
    if (number===1){
        choice = 'rock'
    }else if (number ===2){
        choice = 'paper'
    }else {
        choice = 'scissors'
    }
    return choice
}

function playRound(user,computer){
    console.log(computer);
    let result;
    // let userChoice;
    // if(user.toLowerCase()==='rock'){
    //     userChoice = 1
    // }else if (user.toLowerCase()==='scissors'){
    //     userChoice = 2
    // }else{
    //     userChoice = 3
    // }
    let userChoice = user.toLowerCase()
    console.log(userChoice);
    if (userChoice===computer) {
        return "It's a tie!"
    }else if(userChoice ==="rock" && computer ==="paper"){
        return "Computer wins!!"

    }else if(userChoice ==="rock" && computer ==="scissors"){
        return "Human wins!!"
    }else if(userChoice ==="paper" && computer ==="scissors"){
        return "computer wins!!"
    }else if(userChoice ==="paper" && computer ==="rock"){
        return "Human wins!!"
    }else if(userChoice ==="scissors" && computer ==="rock"){
        return "Computer wins!!"
    }else if(userChoice ==="scissors" && computer ==="paper"){
        return "Human wins!!"
    }
}
// console.log(getComputerChoice());

console.log(playRound("paper", getComputerChoice()))
