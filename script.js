//creating variables to keep score
let myScore = 0;
let pcScore = 0;
//function to get computers choice
function getComputerChoice() {
    let rng = Math.floor((Math.random() * 3))
    if (rng == 0) {
        return "ROCK"
    }
    else if (rng == 1)
        return "PAPER"
    else 
        return "SCISSORS"
    }
//creates a function we can use to decide who wins
function playRound(player, computer){
    if (player == "ROCK" && computer == "PAPER"){
        pcScore++;
        computerScore.innerText = pcScore
        return result.innerText= `Computer chose: ${computer}. You chose: ${player}. You Lose!`
    }
    else if (player == "ROCK" && computer == "SCISSORS"){
        myScore++;
        playerScore.innerText = myScore
        return result.innerText=`Computer chose: ${computer}. You chose: ${player}. You win!`
    }
    else if (player == "SCISSORS" && computer == "ROCK"){
        pcScore++;
        computerScore.innerText = pcScore
        return result.innerText=`Computer chose: ${computer}. You chose: ${player}. You Lose!`
    }
    else if (player == "SCISSORS" && computer == "PAPER"){
        myScore++;
        playerScore.innerText = myScore
        return result.innerText=`Computer chose: ${computer}. You chose: ${player}. You Win!`
    }
    else if (player == "PAPER" && computer == "ROCK"){
        myScore++;
        playerScore.innerText = myScore
        return result.innerText=`Computer chose: ${computer}. You chose: ${player}. You Win!`
    }
    else if (player == "PAPER" && computer == "SCISSORS"){
        pcScore++;
        computerScore.innerText = pcScore
        return result.innerText=`Computer chose: ${computer}. You chose: ${player}. You Lose!`
    }
    else {
        return result.innerText=`Computer chose: ${computer}. You chose: ${player}. It's a draw!`
    }
}
function game(e){
let computerChoice = getComputerChoice();
playRound(e.target.id.toUpperCase(), computerChoice)
if (myScore == 5) {
victor.innerText = "YOU WON! Loading new game...."
setTimeout(() => location.reload(), 3000)
}
else if (pcScore == 5){
    victor.innerText = "COMPUTER WON! Loading new game..."
    setTimeout(() => location.reload(), 3000)
}
}
//add event listeners
let victor = document.getElementById("victor")
victor.style.color = "red";
let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")
let result = document.querySelector("#result")
let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => game(e)));

