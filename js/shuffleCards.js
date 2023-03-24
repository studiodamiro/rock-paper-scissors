import { getRandomNumber } from './getRandomNumber.js';
import { putDelay } from './putDelay.js';

export function shuffleComputeCards() {
    const computerSelected = document.querySelector('#computer-selected');
    computerSelected.querySelector('.front').classList.add('hidden');
    computerSelected.querySelector('.peek').style.opacity = '1';
    computerSelected.querySelector('.back').style.opacity = '1';

    const parent = document.querySelector('#computer-cards');
    const children = parent.children;
    const childArray = Array.from(children);
    childArray.sort(() => Math.random() - 0.5);
    for (let i = 0; i < childArray.length; i++) {
        parent.appendChild(childArray[i]);
    }
}

export function shufflePlayerCards() {
    const parent = document.querySelector('#player-cards');
    const children = parent.children;
    const childArray = Array.from(children);
    childArray.sort(() => Math.random() - 0.5);
    for (let i = 0; i < childArray.length; i++) {
        parent.appendChild(childArray[i]);
    }
}

export async function prepareAndShuffleCards() {
    const selection = document.querySelectorAll('.selection');
    selection.forEach((card) => {
        card.classList.add('throw');
        card.querySelector('.front').classList.add('hidden');
        card.querySelector('.peek').style.opacity = '1';
        card.querySelector('.back').style.opacity = '1';
    });

    const allCards = document.querySelectorAll('.card');
    allCards.forEach((card) => {
        card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg) translateX(0px)';
    });

    await putDelay(150);

    shuffleComputeCards();
    shufflePlayerCards();
}
