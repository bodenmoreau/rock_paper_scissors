const readline = require('readline');

// Computer chooses Rock, Paper, or Scissors depending on what number is generated.
const getComputerSel = function() {
    const random = Math.random();
    if (random < 0.33) {
        return "Rock";
    } else if (random < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

// Prompts the human to pick Rock, Paper, or Scissors in the terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let humSel; // Declared outside so it can be accessed globally.
let computerSel;

rl.question("Rock, Paper, or Scissors? ", (answer) => {
    humSel = answer.trim();
    computerSel = getComputerSel(); 

    console.log(`You chose: ${humSel}`);
    console.log(`Computer chose: ${computerSel}`);

    console.log(playRound(humSel, computerSel));

    rl.close();
});

// Runs the game
function playRound(humanSel, computerSel) {
    const human = humanSel.toLowerCase();
    const computer = computerSel.toLowerCase();

    if (human === computer) {
        return "It's a tie!";
    } else if ((human === "rock") && (computer === "scissors")) {
        return "You won! Rock beats scissors.";
    } else if ((human === "paper") && (computer === "rock")) {
        return "You won! Paper beats rock.";
    } else if ((human === "scissors") && (computer === "paper")) {
        return "You won! Scissors beat paper.";
    } else if ((human === "rock") && (computer === "paper")) {
        return "You lost. Paper beats rock.";
    } else if ((human === "paper") && (computer === "scissors")) {
        return "You lost. Scissors beat paper.";
    } else if ((human === "scissors") && (computer === "rock")) {
        return "You lost. Rock beats scissors.";
    } else {
        return "Invalid input! Please enter Rock, Paper, or Scissors.";
    }};