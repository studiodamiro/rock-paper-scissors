import { helpRenderCards } from './js/helpRenderCards.js';
import { hoverAndClickOnCards } from './js/hoverAndClickOnCards.js';
import { shuffleComputeCards, shufflePlayerCards } from './js/shuffleCards.js';
import { changeCursor } from './js/changeCursor.js';

export var gameStart = true;

helpRenderCards();
hoverAndClickOnCards(gameStart);
shuffleComputeCards();
shufflePlayerCards();
changeCursor(gameStart);
