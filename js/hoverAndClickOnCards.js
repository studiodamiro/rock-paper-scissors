import { getRandomNumber } from './getRandomNumber.js';
import { updateScoreBoard } from './updateScoreBoard.js';
import { getComputerChoice } from './gameAlgorithm.js';
import { displayComputerChoice } from './displayComputerChoice.js';
import { getGameStart, setGameStart } from '../script.js';

export function hoverAndClickOnCards() {
    const cards = document.querySelectorAll('.selection');
    cards.forEach((card) => {
        card.querySelector('.peek > h3').innerHTML = card.getAttribute('data-card').charAt(0);

        // mouse llisteners
        card.addEventListener('mouseenter', toggleEnterListener(card));
        card.addEventListener('mouseleave', toggleLeaveListener(card));
        card.addEventListener('click', toggleClickListener(card));
    });
}

function toggleEnterListener(card) {
    getGameStart()
        ? card.addEventListener('mouseenter', mouseHandler)
        : card.removeEventListener('mouseenter', mouseHandler);

    function mouseHandler() {
        card.querySelector('.peek').classList.toggle('hidden');
    }
}

function toggleLeaveListener(card) {
    getGameStart()
        ? card.addEventListener('mouseleave', mouseHandler)
        : card.removeEventListener('mouseleave', mouseHandler);

    function mouseHandler() {
        card.querySelector('.peek').classList.toggle('hidden');
        card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg)';
    }
}

function toggleClickListener(card) {
    getGameStart()
        ? card.addEventListener('click', mouseHandler)
        : card.removeEventListener('click', mouseHandler);

    function mouseHandler() {
        // Get computer choice
        const computerChoice = getComputerChoice();
        displayComputerChoice(computerChoice);

        // Display player card choice
        card.querySelector('.front').classList.remove('hidden');
        card.querySelector('.peek').style.opacity = '0';
        card.querySelector('.back').style.opacity = '0';

        // Display opponent card choice
        const computerSelected = document.querySelector('#computer-selected');
        computerSelected.querySelector('.front').classList.remove('hidden');
        computerSelected.querySelector('.peek').style.opacity = '0';
        computerSelected.querySelector('.back').style.opacity = '0';

        // Update score board
        updateScoreBoard(card.getAttribute('data-card'), computerChoice);

        setGameStart(false);
    }
}
