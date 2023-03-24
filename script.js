import { helpRenderCards } from './js/helpRenderCards.js';
import { setHoverAndClickOnCards } from './js/hoverAndClickOnCards.js';
import { prepareGame } from './js/startGame.js';

export const raceToNumber = 5;

export let playerScore = 0;
export let setPlayerScore = (newValue) => (playerScore = newValue);
export let getPlayerScore = () => playerScore;

export let opponentScore = 0;
export let setOpponentScore = (newValue) => (opponentScore = newValue);
export let getOpponentScore = () => opponentScore;

document.querySelector('.opponent-side > h3').innerHTML = 'waiting';
document.querySelector('.player-side > h3').innerHTML = 'press play';
document.querySelector('.cover').classList.toggle('hidden');

helpRenderCards();
setHoverAndClickOnCards();
prepareGame(true);
