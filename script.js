import { helpRenderCards } from './js/helpRenderCards.js';
import { hoverAndClickOnCards } from './js/hoverAndClickOnCards.js';
import { shuffleComputeCards } from './js/shuffleComputeCards.js';
import { getComputerChoice } from './js/gameAlgorithm.js';
import { displayComputerChoice } from './js/displayComputerChoice.js';

helpRenderCards();
hoverAndClickOnCards();
shuffleComputeCards();
displayComputerChoice(getComputerChoice());
