import { playRound } from './gameAlgorithm.js';

export function updateScoreBoard(playerChoice, computerChoice) {
    let roundStatus = playRound(playerChoice, computerChoice);

    document.querySelector('.player-text').innerHTML = playerChoice;
    document.querySelector('.opponent-text').innerHTML = computerChoice;

    if (roundStatus === true) {
        document.querySelector('.opponent-side > h3').innerHTML = 'you lose';
        document.querySelector('.player-side > h3').innerHTML = 'you win';
        updateScoreDisplay(true);
    } else if (roundStatus === false) {
        document.querySelector('.opponent-side > h3').innerHTML = 'you win';
        document.querySelector('.player-side > h3').innerHTML = 'you lose';
        updateScoreDisplay(false);
    } else {
        document.querySelector('.opponent-side > h3').innerHTML = 'draw';
        document.querySelector('.player-side > h3').innerHTML = 'draw';
    }
}

function updateScoreDisplay(win) {
    if (win) {
        let playerScore = document.querySelector('.score h3:nth-of-type(2)').innerHTML;
        playerScore++;
        document.querySelector('.score h3:nth-of-type(2)').innerHTML = playerScore;
    } else {
        let opponentScore = document.querySelector('.score h3:nth-of-type(1)').innerHTML;
        opponentScore++;
        document.querySelector('.score h3:nth-of-type(1)').innerHTML = opponentScore;
    }
}
