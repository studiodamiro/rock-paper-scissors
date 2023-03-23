import { helpRenderCards } from './js/helpRenderCards.js';
import { hoverAndClickOnCards } from './js/hoverAndClickOnCards.js';
import { shuffleComputeCards, shufflePlayerCards } from './js/shuffleCards.js';

export let gameStart = true;
export function setGameStart(newValue) {
    gameStart = newValue;
}
export function getGameStart() {
    return gameStart;
}

helpRenderCards();
hoverAndClickOnCards();
shuffleComputeCards();
shufflePlayerCards();
