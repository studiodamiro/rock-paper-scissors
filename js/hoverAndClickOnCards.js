import { getRandomNumber } from './getRandomNumber.js';
import { updateScoreBoard } from './updateScoreBoard.js';
import { getComputerChoice } from './gameAlgorithm.js';
import { displayComputerChoice } from './displayComputerChoice.js';
import { changeCardCursor } from './changeCursor.js';
import { nextRound } from './nextRound.js';

export function setHoverAndClickOnCards() {
    const cards = document.querySelectorAll('.selection');
    cards.forEach((card) => {
        card.querySelector('.peek > h3').innerHTML = card.getAttribute('data-card').charAt(0);
        // mouse llisteners
        toggleEnterListener(card);
        toggleLeaveListener(card);
        toggleClickListener(card);
    });
    changeCardCursor(true);
}

function toggleEnterListener(card) {
    card.addEventListener('mouseenter', mouseEnterHandler);

    function mouseEnterHandler() {
        card.querySelector('.peek').classList.toggle('hidden');
        card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg)';
    }
}

function toggleLeaveListener(card) {
    card.addEventListener('mouseleave', mouseLeaveHandler);

    function mouseLeaveHandler() {
        card.querySelector('.peek').classList.toggle('hidden');
        // card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg)';
    }
}

function toggleClickListener(card) {
    // let status = getGameStart();
    card.addEventListener('click', mouseClickHandler);

    function mouseClickHandler() {
        // cover table to disable cards
        document.querySelector('.cover').classList.toggle('hidden');

        // Get computer choice
        const computerChoice = getComputerChoice();
        displayComputerChoice(computerChoice);

        // Display player card choice
        card.querySelector('.front').classList.remove('hidden');
        card.querySelector('.peek').style.opacity = '0';
        card.querySelector('.back').style.opacity = '0';
        card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg) translateY(-50px)';

        // Display opponent card choice
        const computerSelected = document.querySelector('#computer-selected');
        computerSelected.querySelector('.front').classList.remove('hidden');
        computerSelected.querySelector('.peek').style.opacity = '0';
        computerSelected.querySelector('.back').style.opacity = '0';
        computerSelected.style.transform =
            'rotate(' + getRandomNumber(-10, 10) + 'deg) translateY(-50px)';

        // Update score board
        updateScoreBoard(card.getAttribute('data-card'), computerChoice);

        // Apply changes to card
        card.classList.remove('throw');
        nextRound();
    }
}
