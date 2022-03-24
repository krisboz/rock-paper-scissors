const computerPlay = () => {
    const options = ["rock", "paper", "scissors"];
    let chosen = Math.floor(Math.random() * 3)
    console.log(options[chosen])
}



const playRound = (playerSelection, computerSelection) => {

    //rock beats scissors
    //paper beats rock
    //scissors beat paper

    if (playerSelection === computerSelection) {
        console.log("draw")
    }


}