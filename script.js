import { helpRenderCards } from './js/helpRenderCards.js';
import { hoverAndClickOnCards } from './js/hoverAndClickOnCards.js';
import { shuffleComputeCards, shufflePlayerCards } from './js/shuffleCards.js';
import { changeCursor } from './js/changeCursor.js';

export let gameStart = true;

export function setGameStart(newValue) {
    gameStart = newValue;
}

export function getGameStart() {
    return gameStart;
}

startGame(false);

helpRenderCards();
hoverAndClickOnCards();
shuffleComputeCards();
shufflePlayerCards();

function startGame(start) {
    let element = document.querySelector('.round');
    if (start) {
        changeCursor(false);
        document.querySelector('.round > div').classList.remove('hidden');
        document.querySelector('.round > h2').classList.add('hidden');
        element.removeEventListener('click', onClick);
    } else {
        changeCursor(true);
        document.querySelector('.round > div').classList.add('hidden');
        document.querySelector('.round > h2').classList.remove('hidden');
        element.addEventListener('click', onClick);
    }

    function onClick() {
        console.log('click');
        element.removeEventListener('click', onClick);
        changeCursor(false);
        document.querySelector('.round > div').classList.remove('hidden');
        document.querySelector('.round > h2').classList.add('hidden');
    }
}
