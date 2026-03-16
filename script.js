const getComputerChoice = function() {
    const random = Math.random();
    if (random < 0.33) {
        return "Rock";
    } else if (random < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());