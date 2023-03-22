import { getRandomNumber } from './getRandomNumber.js';

export function helpRenderCards() {
    let cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.style.width = '80px';
        card.style.height = '124px';
        card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg)';
    });

    let backs = document.querySelectorAll('.back');
    backs.forEach((back) => {
        back.style.width = '74px';
        back.style.height = '116px';
    });

    let peeks = document.querySelectorAll('.peek');
    peeks.forEach((peek) => {
        peek.style.width = '84px';
        peek.style.height = '58px';
        peek.style.transform = 'scale(1.02)';
    });
}
