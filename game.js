/* global vars */
let round = 1;
let playerWin = 0;
let compWin = 0;
const roundStatus = document.querySelector(".status");
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
        roundStatus.textContent = "You win the game!"
    }
    else if (compWin == 5) {
        roundStatus.textContent = "You lose the game!"
    }
    else {
        round += 1;
    }
}

function playRound(p_choice) {
    let c_choice = getCompChoice();
    if (p_choice == c_choice) {  // tie
        roundStatus.textContent = `Round ${round}: It's a tie! You both played ${toCap(p_choice)}.`;
    }
    else if ((p_choice == "rock" && c_choice == "scissors") || 
            (p_choice == "paper" && c_choice == "rock") || 
            (p_choice == "scissors" && c_choice == "paper")) {  // player win
        roundStatus.textContent = `Round ${round}: You win! ${toCap(p_choice)} beats ${toCap(c_choice)}.`;
        updateScore("player");
    }
    else {  // comp win
        roundStatus.textContent = `Round ${round}: You lose! ${toCap(c_choice)} beats ${toCap(p_choice)}.`;
        updateScore("comp");
    }
    updateGame();
}
