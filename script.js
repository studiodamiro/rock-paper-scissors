import { helpRenderCards } from './js/helpRenderCards.js';
import { startGame } from './js/startGame.js';

export let gameStarted = false;
export let setGameStarted = (newValue) => (gameStarted = newValue); // sets gameStarted global variable to that newValue.
export let getGameStarted = () => gameStarted; // returns the value of the gameStarted global variable

document.querySelector('.opponent-side > h3').innerHTML = 'waiting';
document.querySelector('.player-side > h3').innerHTML = 'press play';

helpRenderCards();
startGame();
