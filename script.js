function getComputerChoice() {
let rng = Math.floor((Math.random() * 3))
if (rng == 0) {
    return "Rock"
}
else if (rng == 1)
    return "Paper"
else 
    return "Scissors"
}
let computerChoice = getComputerChoice();
let playerChoice = "Scissors";
playerChoice = playerChoice.toUpperCase()
function playRound(player, computer){
    if (player == "ROCK" && computer == "Paper"){
        return "You Lose!"
    }
    else if (player == "ROCK" && computer == "Scissors"){
        return "You win!"
    }
    else if (player == "SCISSORS" && computer == "Rock"){
        return "You Lose!"
    }
    else if (player == "SCISSORS" && computer == "Paper"){
        return "You Win!"
    }
    else {
        return "It's a draw!"
    }
}
console.log(`Player: ${playerChoice}`)
console.log(`Computer: ${computerChoice}`)
console.log(playRound(playerChoice, computerChoice))