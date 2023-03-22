export function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(playerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissor'];
    if (validChoices.includes(playerChoice)) {
        return playerChoice;
    } else {
        return 'invalid';
    }
}

export function playRound(playerSelection, computerSelection) {
    // console.log('You: ' + playerSelection + ' vs PC: ' + computerSelection);
    if (playerSelection != 'invalid') {
        if (playerSelection == computerSelection) {
            console.log("It's a draw! \n");
        } else if (
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'rock' && computerSelection == 'scissor') ||
            (playerSelection == 'scissor' && computerSelection == 'paper')
        ) {
            console.log('You Win! \n');
            return true;
        } else {
            console.log('You Lose! \n');
            return false;
        }
    }
}

function playMultipleTimes(times) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < times; i++) {
        let playerChoice = prompt('Your bet [rock, paper, scissor]: ');
        playerChoice = playerChoice.toLowerCase();
        if (playRound(getPlayerChoice(playerChoice), getComputerChoice()) === true) {
            playerScore++;
        } else {
            computerScore++;
        }
    }
    let winner = playerScore > computerScore ? 'You win!' : 'You lose!';
    console.log('Player Score: ' + playerScore + ' Computer Score: ' + computerScore);
    console.log(winner);
}

// const playerSelection = 'rOck';
// const computerSelection = getComputerChoice();
// playRound(getPlayerChoice(playerSelection), computerSelection);
// console.log(playMultipleTimes(5));
