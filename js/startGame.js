import { setOpponentScore, setPlayerScore } from '../script.js';
import { changeStartCursor } from './changeCursor.js';
import { updateRoundDisplay, updateScoreDisplay } from './updateScoreBoard.js';
import { shuffleComputeCards, shufflePlayerCards } from './shuffleCards.js';

export function prepareGame() {
    let element = document.querySelector('.round');

    changeStartCursor(true);
    document.querySelector('.round > div').classList.add('hidden');
    document.querySelector('.round > h2').classList.remove('hidden');
    element.addEventListener('click', startGame);
}

export function startGame() {
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.opponent-text').innerHTML = '';
    document.querySelector('.table-text > h3').innerHTML = '';
    document.querySelector('.player-text').innerHTML = '';
    setOpponentScore(0);
    setPlayerScore(0);
    updateRoundDisplay(true);
    updateScoreDisplay(true);

    let element = document.querySelector('.round');
    element.removeEventListener('click', startGame);

    changeStartCursor(false);
    document.querySelector('.round > div').classList.remove('hidden');
    document.querySelector('.round > h2').classList.add('hidden');

    shuffleComputeCards();
    shufflePlayerCards();

    document.querySelector('.opponent-side > h3').innerHTML = 'go!';
    document.querySelector('.player-side > h3').innerHTML = 'go!';
}
