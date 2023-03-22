import { getRandomNumber } from './getRandomNumber.js';

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
            submitCard(card.getAttribute('data-card'));
        });
    });
}

function submitCard(card) {
    document.querySelector('.player-text').innerHTML = card;
}
