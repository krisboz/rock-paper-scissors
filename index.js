const computerPlay = () => {
    const options = ["rock", "paper", "scissors"];
    let chosen = Math.floor(Math.random() * 3)
    return (options[chosen])
}





            



const playRound = (playerSelection, computerSelection) => {

    document.getElementById("player-image").src=`./images/${playerSelection}.png`
    document.getElementById("computer-image").src=`./images/${computerSelection}.png`

    if (playerSelection === computerSelection) {
        document.querySelector("#winner-val").innerHTML = "Draw"

    } else if (playerSelection === "rock") {
        if(computerSelection === "paper") {
            document.querySelector("#winner-val").innerHTML = ("Computer wins")
        } else {
            document.querySelector("#winner-val").innerHTML = ("Player wins")

        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            document.querySelector("#winner-val").innerHTML = ("Computer wins")
            scoreTracker(0, 1)
        } else {
            document.querySelector("#winner-val").innerHTML = ("Player wins")

        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            document.querySelector("#winner-val").innerHTML = ("Computer wins")

        } else {
            document.querySelector("#winner-val").innerHTML = ("Player wins")
        }
    }

    if (document.querySelector("#winner-val").innerHTML === "Computer wins") {
        console.log("computer")
        scoreTracker("computer")
    } else if (document.querySelector("#winner-val").innerHTML === "Player wins") {
        console.log("player")
        scoreTracker("player")
    }


}
let playerScore = 0;
let computerScore = 0;
const scoreTracker = (winner) => {

    let plScoreDom = document.querySelector(".player-res");
    let comScoreDom = document.querySelector(".computer-res");
    
    if (winner === "computer") {
        computerScore += 1 ;
        comScoreDom.textContent = computerScore;
    } else if (winner === "player") {
        playerScore +=1
        plScoreDom.textContent = playerScore
    }

    if (playerScore === 5) {
        document.querySelector(".totalWin").textContent = "PLAYER WINS"
    } else if(computerScore === 5) {
        document.querySelector(".totalWin").textContent = "COMPUTER WINS!"
    }
    




}




const game = () => {


    const handlePlayer = (event) => {
        let button = event.target.id;
        playRound(button, computerPlay());
    }

    document.querySelector(".player-selection").addEventListener("click", handlePlayer)


    
}


game();