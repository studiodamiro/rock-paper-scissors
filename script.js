import { helpRenderCards } from './js/helpRenderCards.js';
import { hoverAndClickOnCards } from './js/hoverAndClickOnCards.js';
import { startGame } from './js/startGame.js';

export const totalRound = 1;

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
hoverAndClickOnCards();
startGame(true);
