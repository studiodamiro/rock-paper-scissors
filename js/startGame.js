import { setOpponentScore, setPlayerScore } from '../script.js';
import { changeStartCursor } from './changeCursor.js';
import { updateRoundDisplay, updateScoreDisplay } from './updateScoreBoard.js';
import { prepareAndShuffleCards } from './shuffleCards.js';

export function prepareGame() {
    // Setup play button
    let element = document.querySelector('.round');
    document.querySelector('.round > div').classList.add('hidden');
    document.querySelector('.round > h2').classList.remove('hidden');

    document.querySelector('.opponent-text').textContent = '---';
    document.querySelector('.table-text > h3').textContent = 'race to five';
    document.querySelector('.player-text').textContent = 'press play';

    changeStartCursor(true);
    element.addEventListener('click', startGame);
}

export function startGame() {
    // Prepare middle texts
    document.querySelector('.cover').classList.toggle('hidden');
    document.querySelector('.opponent-text').textContent = '';
    document.querySelector('.table-text > h3').textContent = '';
    document.querySelector('.player-text').textContent = '';

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
    document.querySelector('.opponent-side > h3').textContent = 'pick a card';
    document.querySelector('.player-side > h3').textContent = 'pick a card';

    // prepare cards sets
    prepareAndShuffleCards();
}
