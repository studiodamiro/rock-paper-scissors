import { putDelay } from './putDelay.js';
import { getRandomNumber } from './getRandomNumber.js';
import { shuffleComputeCards, shufflePlayerCards } from './shuffleCards.js';
import { getPlayerScore, getOpponentScore, totalRound } from '../script.js';
import { startGame } from './startGame.js';

export async function nextRound() {
    const allCards = document.querySelectorAll('.card');
    const hide = 'rotate(45deg) translateX(-1200px)';
    const delay = 1000;

    // hide unused cards
    allCards.forEach((card) => {
        if (card.classList.contains('throw')) {
            card.style.transform = hide;
        }
    });
    await putDelay(delay + 1000);

    // hide remaining cards
    allCards.forEach((card) => {
        card.style.transform = hide;
    });
    await putDelay(delay - 500);
    determineRound();
}

async function determineRound() {
    if (getPlayerScore() === totalRound || getOpponentScore() === totalRound) {
        document.querySelector('.cover').classList.toggle('hidden');
        if (getPlayerScore() > getOpponentScore()) {
            document.querySelector('.player-text').innerHTML = '';
            document.querySelector('.opponent-text').innerHTML = '';
            document.querySelector('.table-text > h3').innerHTML = '';

            document.querySelector('.player-side > h3').innerHTML = 'lol';
            document.querySelector('.opponent-side > h3').innerHTML = '';
        }
        startGame(false);
    } else {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach((card) => {
            card.style.transform = 'rotate(' + getRandomNumber(-10, 10) + 'deg) translateX(0px)';
        });
        await putDelay(150);

        shuffleComputeCards();
        shufflePlayerCards();

        document.querySelector('.cover').classList.toggle('hidden');
        document.querySelector('.player-side > h3').innerHTML = '';
        document.querySelector('.opponent-side > h3').innerHTML = '';
        document.querySelector('.player-text').innerHTML = '';
        document.querySelector('.opponent-text').innerHTML = '';
        document.querySelector('.table-text > h3').innerHTML = '';

        const selection = document.querySelectorAll('.selection');
        selection.forEach((card) => {
            card.classList.add('throw');
            card.querySelector('.front').classList.add('hidden');
            card.querySelector('.peek').style.opacity = '1';
            card.querySelector('.back').style.opacity = '1';
        });
    }
}
