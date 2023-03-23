import { getRandomNumber } from './getRandomNumber.js';
import { updateScoreBoard } from './updateScoreBoard.js';
import { getComputerChoice } from './gameAlgorithm.js';
import { displayComputerChoice } from './displayComputerChoice.js';
import { changeCardCursor } from './changeCursor.js';
import { putDelay } from './putDelay.js';

export function hoverAndClickOnCards() {
    const cards = document.querySelectorAll('.selection');
    cards.forEach((card) => {
        card.querySelector('.peek > h3').innerHTML = card.getAttribute('data-card').charAt(0);
        // mouse llisteners
        toggleEnterListener(card, true);
        toggleLeaveListener(card, true);
        toggleClickListener(card, true);
    });
    changeCardCursor(true);
}

function toggleEnterListener(card, status) {
    status
        ? card.addEventListener('mouseenter', mouseEnterHandler)
        : card.removeEventListener('mouseenter', mouseEnterHandler);

    function mouseEnterHandler() {
        card.querySelector('.peek').classList.toggle('hidden');
        card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg)';
    }
}

function toggleLeaveListener(card, status) {
    status
        ? card.addEventListener('mouseleave', mouseLeaveHandler)
        : card.removeEventListener('mouseleave', mouseLeaveHandler);

    function mouseLeaveHandler() {
        card.querySelector('.peek').classList.toggle('hidden');
        // card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg)';
    }
}

function toggleClickListener(card, status) {
    // let status = getGameStart();
    status
        ? card.addEventListener('click', mouseClickHandler)
        : card.removeEventListener('click', mouseClickHandler);

    function mouseClickHandler() {
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
        changeCardCursor(false);
        card.removeEventListener('click', mouseClickHandler);
        card.classList.remove('throw');
        console.log('click!');

        nextRound();
    }
}

async function nextRound() {
    const cards = document.querySelectorAll('.card');
    const hide = 'rotate(30deg) translateX(-1800px)';
    const delay = 1000;

    // hide unused cards
    cards.forEach((card) => {
        if (card.classList.contains('throw')) {
            card.style.transform = hide;
        }
    });
    await putDelay(delay + 500);

    // hide remaining cards
    cards.forEach((card) => {
        card.style.transform = hide;
    });
    await putDelay(delay - 500);

    // show cards
    cards.forEach((card) => {
        putDelay(300);
        card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg) translateX(0px)';
    });
}
