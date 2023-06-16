/* global vars */
let playerWin = 0;
let compWin = 0;
const playerScore = document.querySelector(".player");
const compScore = document.querySelector(".computer");
const roundStatus = document.querySelector(".round-status");
const gameStatus = document.querySelector(".game-status")
const btns = document.querySelectorAll(".choice");
const reset_btn = document.querySelector("#reset");

/* event listeners */
btns.forEach(btn => btn.addEventListener("click", () => playRound(btn.getAttribute("id"))));
reset_btn.addEventListener("click", () => resetGame());

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
        playerWin += 1;
        playerScore.textContent = playerWin;

    }
    else {
        compWin += 1;
        compScore.textContent = compWin;
    }
}

function updateGame() {
    if (playerWin == 5) {
        gameStatus.textContent = "You win the game!";
        reset_btn.removeAttribute("hidden");
        btns.forEach(btn => btn.disabled = true);
    }
    else if (compWin == 5) {
        gameStatus.textContent = "You lose the game!";
        reset_btn.removeAttribute("hidden");
        btns.forEach(btn => btn.disabled = true);
    }
}

function resetGame() {
    playerWin = 0;
    compWin = 0;
    roundStatus.textContent = "Click a button to play. The first to 5 points wins the game!"
    gameStatus.textContent = "";
    reset_btn.setAttribute("hidden", "");
    playerScore.textContent = playerWin;
    compScore.textContent = compWin;
    btns.forEach(btn => btn.disabled = false);
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
