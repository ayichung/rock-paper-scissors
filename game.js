function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
    rand = Math.floor(Math.random()*choices.length)
    return choices[rand]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") { return "tie" }
        if (computerSelection == "paper") { return "computer" }
        if (computerSelection == "scissors") { return "player" }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") { return "player" }
        if (computerSelection == "paper") { return "tie" }
        if (computerSelection == "scissors") { return "computer" }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") { return "computer" }
        if (computerSelection == "paper") { return "player" }
        if (computerSelection == "scissors") { return "tie" }
    }
}

function game() {
    
}