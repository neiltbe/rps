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
const score = {
    player: 0,
    computer: 0
};
let computerChoice = getComputerChoice();
let playerChoice = "Scissors";
playerChoice = playerChoice.toUpperCase()
function playRound(player, computer){
    if (player == "ROCK" && computer == "Paper"){
        score.computer++;
        return "You Lose!"
    }
    else if (player == "ROCK" && computer == "Scissors"){
        score.player++;
        return "You win!"
    }
    else if (player == "SCISSORS" && computer == "Rock"){
        score.computer++;
        return "You Lose!"
    }
    else if (player == "SCISSORS" && computer == "Paper"){
        score.player++;
        return "You Win!"
    }
    else {
        return "It's a draw!"
    }
}
function game(){
    for (let i = 0; i < 5; i++){
       let result = playRound(playerChoice, getComputerChoice());
       console.log(result);
    }
    if (score.player > score.computer){
        console.log(`"Player Wins with ${score.player} out of 5"`)
    }
    else if (score.player < score.computer){
        console.log(`"Computer Wins with ${score.computer} out of 5"`)
    }
    else {
        console.log(`"It's a draw with both computer scoring: ${score.computer} and player scoring: ${score.player}"`)
    }
    }
game();