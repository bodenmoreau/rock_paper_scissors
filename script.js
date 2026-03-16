//Computer chooses Rock, Paper, or Scissors, depending on what number is generated.
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

//Prompts the user to pick R, P, or S inside of node terminal.
const readline = require('readline');

const getHumanSel = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

getHumanSel.question("Rock, Paper, Scissors? ", (humAns) => {
    console.log(`You chose: ${humAns}!`),
    console.log(`Computer chose: ${getComputerSel()}`),
    getHumanSel.close;
});