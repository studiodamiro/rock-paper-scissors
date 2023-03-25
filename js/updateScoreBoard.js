import { playRound } from './gameAlgorithm.js';
import { setPlayerScore, getPlayerScore, setOpponentScore, getOpponentScore } from '../script.js';

export function updateScoreBoard(playerChoice, computerChoice) {
    let roundStatus = playRound(playerChoice, computerChoice);

    document.querySelector('.player-text').textContent = playerChoice;
    document.querySelector('.opponent-text').textContent = computerChoice;
    document.querySelector('.table-text > h3').textContent = 'vs';

    if (roundStatus === true) {
        document.querySelector('.opponent-side > h3').textContent = 'you lose';
        document.querySelector('.player-side > h3').textContent = 'you win';
        updateScoreDisplay(false, true);
        // update player score
        setPlayerScore(getPlayerScore() + 1);
    } else if (roundStatus === false) {
        document.querySelector('.opponent-side > h3').textContent = 'you win';
        document.querySelector('.player-side > h3').textContent = 'you lose';
        updateScoreDisplay(false, false);
        // update opponent score
        setOpponentScore(getOpponentScore() + 1);
    } else {
        document.querySelector('.opponent-side > h3').textContent = 'draw';
        document.querySelector('.player-side > h3').textContent = 'draw';
    }

    updateRoundDisplay(false);
}

export function updateRoundDisplay(reset) {
    if (reset) {
        document.querySelector('.in-game > h3').textContent = '0';
    } else {
        let round = document.querySelector('.in-game > h3').textContent;
        round++;
        document.querySelector('.in-game > h3').textContent = round;
    }
}

export function updateScoreDisplay(reset, win) {
    let playerScore = document.querySelector('.score h3:nth-of-type(2)').textContent;
    let opponentScore = document.querySelector('.score h3:nth-of-type(1)').textContent;

    if (reset) {
        document.querySelector('.score h3:nth-of-type(1)').textContent = 0;
        document.querySelector('.score h3:nth-of-type(2)').textContent = 0;
    } else {
        if (win) {
            playerScore++;
            document.querySelector('.score h3:nth-of-type(2)').textContent = playerScore;
        } else {
            opponentScore++;
            document.querySelector('.score h3:nth-of-type(1)').textContent = opponentScore;
        }
    }
}
