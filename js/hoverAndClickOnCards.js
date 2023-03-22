import { getRandomNumber } from './getRandomNumber.js';
import { updateScoreBoard } from './updateScoreBoard.js';
import { getComputerChoice } from './gameAlgorithm.js';
import { displayComputerChoice } from './displayComputerChoice.js';

export function hoverAndClickOnCards() {
    const cards = document.querySelectorAll('.player-card');

    cards.forEach((card) => {
        card.querySelector('.peek > h3').innerHTML = card.getAttribute('data-card').charAt(0);

        card.addEventListener('mouseenter', () => {
            card.querySelector('.peek').classList.toggle('hidden');
        });

        card.addEventListener('mouseleave', () => {
            card.querySelector('.peek').classList.toggle('hidden');
            card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg)';
        });

        card.addEventListener('click', () => {
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
        });
    });
}
