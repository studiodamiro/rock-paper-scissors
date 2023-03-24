import { setOpponentScore, setPlayerScore } from '../script.js';
import { changeStartCursor } from './changeCursor.js';
import { updateRoundDisplay, updateScoreDisplay } from './updateScoreBoard.js';
import { prepareAndShuffleCards } from './shuffleCards.js';
import { getRandomNumber } from './getRandomNumber.js';

export function prepareGame() {
    let element = document.querySelector('.round');

    changeStartCursor(true);
    document.querySelector('.round > div').classList.add('hidden');
    document.querySelector('.round > h2').classList.remove('hidden');
    element.addEventListener('click', startGame);
}

export function startGame() {
    // Prepare middle texts
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.opponent-text').innerHTML = '';
    document.querySelector('.table-text > h3').innerHTML = '';
    document.querySelector('.player-text').innerHTML = '';

    // prepare play button to round data
    let element = document.querySelector('.round');
    element.removeEventListener('click', startGame);
    updateRoundDisplay(true);
    document.querySelector('.round > div').classList.remove('hidden');
    document.querySelector('.round > h2').classList.add('hidden');
    changeStartCursor(false);

    // reset score boards
    setOpponentScore(0);
    setPlayerScore(0);
    updateScoreDisplay(true);

    // prepare each side texts
    document.querySelector('.opponent-side > h3').innerHTML = 'go!';
    document.querySelector('.player-side > h3').innerHTML = 'go!';

    // prepare cards sets
    prepareAndShuffleCards();
}
