/* global vars */
let playerWin = 0;
let compWin = 0;
const roundStatus = document.querySelector(".round-status");
const gameStatus = document.querySelector(".game-status")
const btns = document.querySelectorAll("button");

/* event listeners */
btns.forEach(btn => btn.addEventListener("click", () => playRound(btn.getAttribute("id"))))

/* functions */
function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random()*choices.length);
    return choices[rand];
}

function toCap(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function updateScore(winner) {
    if (winner == "player") {
        let playerScore = document.querySelector(".player");
        playerWin += 1;
        playerScore.textContent = playerWin;

    }
    else {
        let compScore = document.querySelector(".computer");
        compWin += 1;
        compScore.textContent = compWin;
    }
}

function updateGame() {
    if (playerWin == 5) {
        gameStatus.textContent = "You win the game!"
    }
    else if (compWin == 5) {
        gameStatus.textContent = "You lose the game!"
    }
}

function playRound(playerChoice) {
    let compChoice = getCompChoice();
    if (playerChoice == compChoice) {  // tie
        roundStatus.textContent = `It's a tie! You both played ${toCap(playerChoice)}.`;
    }
    else if ((playerChoice == "rock" && compChoice == "scissors") || 
            (playerChoice == "paper" && compChoice == "rock") || 
            (playerChoice == "scissors" && compChoice == "paper")) {  // player win
        roundStatus.textContent = `You win! ${toCap(playerChoice)} beats ${toCap(compChoice)}.`;
        updateScore("player");
    }
    else {  // comp win
        roundStatus.textContent = `You lose! ${toCap(compChoice)} beats ${toCap(playerChoice)}.`;
        updateScore("comp");
    }
    updateGame();
}
