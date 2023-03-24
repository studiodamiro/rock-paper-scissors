import { playRound } from './gameAlgorithm.js';
import { setPlayerScore, getPlayerScore, setOpponentScore, getOpponentScore } from '../script.js';

export function updateScoreBoard(playerChoice, computerChoice) {
    let roundStatus = playRound(playerChoice, computerChoice);

    document.querySelector('.player-text').innerHTML = playerChoice;
    document.querySelector('.opponent-text').innerHTML = computerChoice;
    document.querySelector('.table-text > h3').innerHTML = 'vs';

    if (roundStatus === true) {
        document.querySelector('.opponent-side > h3').innerHTML = 'you lose';
        document.querySelector('.player-side > h3').innerHTML = 'you win';
        updateScoreDisplay(false, true);
        // update player score
        setPlayerScore(getPlayerScore() + 1);
    } else if (roundStatus === false) {
        document.querySelector('.opponent-side > h3').innerHTML = 'you win';
        document.querySelector('.player-side > h3').innerHTML = 'you lose';
        updateScoreDisplay(false, false);
        // update opponent score
        setOpponentScore(getOpponentScore() + 1);
    } else {
        document.querySelector('.opponent-side > h3').innerHTML = 'draw';
        document.querySelector('.player-side > h3').innerHTML = 'draw';
    }

    updateRoundDisplay(false);
}

export function updateRoundDisplay(reset) {
    if (reset) {
        document.querySelector('.in-game > h3').innerHTML = '0';
    } else {
        let round = document.querySelector('.in-game > h3').innerHTML;
        round++;
        document.querySelector('.in-game > h3').innerHTML = round;
    }
}

export function updateScoreDisplay(reset, win) {
    let playerScore = document.querySelector('.score h3:nth-of-type(2)').innerHTML;
    let opponentScore = document.querySelector('.score h3:nth-of-type(1)').innerHTML;

    if (reset) {
        document.querySelector('.score h3:nth-of-type(1)').innerHTML = 0;
        document.querySelector('.score h3:nth-of-type(2)').innerHTML = 0;
    } else {
        if (win) {
            playerScore++;
            document.querySelector('.score h3:nth-of-type(2)').innerHTML = playerScore;
        } else {
            opponentScore++;
            document.querySelector('.score h3:nth-of-type(1)').innerHTML = opponentScore;
        }
    }
}
