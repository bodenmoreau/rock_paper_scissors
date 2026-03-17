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


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playGame() {
    // Score keeping variables
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 0;
    const totalRounds = 5;

    // Runs a single round, then calls itself again until 5 rounds are done
    function playRound() {
        if (roundNumber >= totalRounds) {
            // All 5 rounds done — announce final score and close
            console.log("\n--- Final Score ---");
            console.log(`Your final score: ${humanScore}`);
            console.log(`Computer's final score: ${computerScore}`);
            if (humanScore > computerScore) {
                console.log("You win the game!");
            } else if (computerScore > humanScore) {
                console.log("The computer wins the game!");
            } else {
                console.log("The game is a tie!");
            }
            rl.close();
            return;
        }

        roundNumber++;
        rl.question(`\nRound ${roundNumber} — Rock, Paper, or Scissors? `, (answer) => {
            const humSel = answer.trim();
            const computerSel = getComputerSel();
            const human = humSel.toLowerCase();
            const computer = computerSel.toLowerCase();

            console.log(`You chose: ${humSel}`);
            console.log(`Computer chose: ${computerSel}`);

            // Updates score first, then log the result
            let result;
            if (human === computer) {
                humanScore++;
                computerScore++;
                result = "It's a tie!";
            } else if ((human === "rock") && (computer === "scissors")) {
                humanScore++;
                result = "You won! Rock beats scissors.";
            } else if ((human === "paper") && (computer === "rock")) {
                humanScore++;
                result = "You won! Paper beats rock.";
            } else if ((human === "scissors") && (computer === "paper")) {
                humanScore++;
                result = "You won! Scissors beat paper.";
            } else if ((human === "rock") && (computer === "paper")) {
                computerScore++;
                result = "You lost. Paper beats rock.";
            } else if ((human === "paper") && (computer === "scissors")) {
                computerScore++;
                result = "You lost. Scissors beat paper.";
            } else if ((human === "scissors") && (computer === "rock")) {
                computerScore++;
                result = "You lost. Rock beats scissors.";
            } else {
                result = "Invalid input! Please enter Rock, Paper, or Scissors.";
            }

            console.log(result);
            console.log(`Score after round ${roundNumber} — You: ${humanScore} | Computer: ${computerScore}`);

            playRound(); // Recursively call for the next round
        });
    }

    playRound(); // Start the first round
}

playGame();