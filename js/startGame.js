import { changeStartCursor } from './changeCursor.js';
import { shuffleComputeCards, shufflePlayerCards } from './shuffleCards.js';
import { hoverAndClickOnCards } from './hoverAndClickOnCards.js';

export function startGame() {
    let element = document.querySelector('.round');

    changeStartCursor(true);
    document.querySelector('.round > div').classList.add('hidden');
    document.querySelector('.round > h2').classList.remove('hidden');
    element.addEventListener('click', onClick);

    function onClick() {
        element.removeEventListener('click', onClick);
        changeStartCursor(false);
        document.querySelector('.round > div').classList.remove('hidden');
        document.querySelector('.round > h2').classList.add('hidden');

        shuffleComputeCards();
        shufflePlayerCards();
        hoverAndClickOnCards();
    }
}
