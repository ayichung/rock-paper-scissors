function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let rand = Math.floor(Math.random()*choices.length)
    return choices[rand]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") { return "tie" }
        if (computerSelection == "paper") { return "comp" }
        if (computerSelection == "scissors") { return "player" }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") { return "player" }
        if (computerSelection == "paper") { return "tie" }
        if (computerSelection == "scissors") { return "comp" }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") { return "comp" }
        if (computerSelection == "paper") { return "player" }
        if (computerSelection == "scissors") { return "tie" }
    }
}

function game() {
    let round = 1
    let playerWin = 0
    let compWin = 0

    while (round <= 5) {
        let player = prompt(`Round ${round}: rock, paper, or scissors?`).toLowerCase()
        let comp = getComputerChoice()
        let result = playRound(player, comp)
        if (result == "player") {
            console.log("You won!")
            playerWin += 1
        }
        else if (result == "comp") {
            console.log("The computer won!")
            compWin += 1
        }
        else {
            console.log("It was a tie!")
        }
        console.log(`Current scores\nComputer: ${compWin}\nPlayer: ${playerWin}`)
        round += 1
    }
}

game()