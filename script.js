import { helpRenderCards } from './js/helpRenderCards.js';
import { hoverAndClickOnCards } from './js/hoverAndClickOnCards.js';
import { shuffleComputeCards, shufflePlayerCards } from './js/shuffleCards.js';
import { changeStartCursor } from './js/changeCursor.js';

helpRenderCards();

export let gameStarted = false;
export let setGameStarted = (newValue) => (gameStarted = newValue); // sets gameStarted global variable to that newValue.
export let getGameStarted = () => gameStarted; // returns the value of the gameStarted global variable

startGame(gameStarted);

function startGame(start) {
    let element = document.querySelector('.round');

    if (start) {
        changeStartCursor(false);
        document.querySelector('.round > div').classList.remove('hidden');
        document.querySelector('.round > h2').classList.add('hidden');
        element.removeEventListener('click', onClick);
    } else {
        changeStartCursor(true);
        document.querySelector('.round > div').classList.add('hidden');
        document.querySelector('.round > h2').classList.remove('hidden');
        element.addEventListener('click', onClick);
    }

    function onClick() {
        console.log('click');
        element.removeEventListener('click', onClick);
        changeStartCursor(false);
        document.querySelector('.round > div').classList.remove('hidden');
        document.querySelector('.round > h2').classList.add('hidden');

        setGameStarted(true);

        shuffleComputeCards();
        shufflePlayerCards();
        hoverAndClickOnCards(); // enable cards
    }
}
