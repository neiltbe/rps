function getComputerChoice() {
rng = Math.floor((Math.random() * 3))
if (rng == 0) {
    return "Rock"
}
else if (rng == 1)
    return "Paper"
else 
    return "Scissors"
}
computerChoice = getComputerChoice();
playerChoice = "Rock";
function playRound(player, computer){
    if (player == "Rock" && computer == "Paper"){
        return "You Lose, PC Wins!"
    }
    else if (player == "Rock" && computer == "Scissors"){
        return "You win!"
    }
    else if (player == "Scissors" && computer == "Rock"){
        return "You win!"
    }
    else if (player == "Scissors" && computer == "Paper"){
        return "You Lose, PC Wins!"
    }
    else {
        return "It's a draw!"
    }
}
console.log(`Player: ${playerChoice}`)
console.log(`Computer: ${computerChoice}`)
console.log(playRound(playerChoice, computerChoice))