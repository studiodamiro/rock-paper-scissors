import { playRound } from './gameAlgorithm.js';

export function updateScoreBoard(playerChoice, computerChoice) {
    let roundStatus = playRound(playerChoice, computerChoice);

    document.querySelector('.player-text').innerHTML = playerChoice;
    document.querySelector('.opponent-text').innerHTML = computerChoice;

    if (roundStatus === true) {
        document.querySelector('.opponent-side > h3').innerHTML = 'you lose';
        document.querySelector('.player-side > h3').innerHTML = 'you win';
    } else if (roundStatus === false) {
        document.querySelector('.opponent-side > h3').innerHTML = 'you win';
        document.querySelector('.player-side > h3').innerHTML = 'you lose';
    } else {
        document.querySelector('.opponent-side > h3').innerHTML = 'draw';
        document.querySelector('.player-side > h3').innerHTML = 'draw';
    }
}
