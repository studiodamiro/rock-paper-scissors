import { putDelay } from './putDelay.js';
import { prepareGame } from './startGame.js';
import { prepareAndShuffleCards } from './shuffleCards.js';
import { getPlayerScore, getOpponentScore, raceToNumber } from '../script.js';

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
    if (getPlayerScore() === raceToNumber || getOpponentScore() === raceToNumber) {
        if (getPlayerScore() > getOpponentScore()) {
            // player won
            document.querySelector('.opponent-text').textContent = 'press play';
            document.querySelector('.table-text > h3').textContent = '';
            document.querySelector('.player-text').textContent = 'to play again';

            document.querySelector('.player-side > h3').textContent = 'congrats';
            document.querySelector('.opponent-side > h3').textContent = 'lost';
        } else {
            // player loses
            document.querySelector('.opponent-text').textContent = ' play again?';
            document.querySelector('.table-text > h3').textContent = '';
            document.querySelector('.player-text').textContent = 'press play';

            document.querySelector('.player-side > h3').textContent = 'lost';
            document.querySelector('.opponent-side > h3').textContent = 'congrats';
        }

        // Prepare table
        await putDelay(3000);
        prepareGame();
    } else {
        // continue to next round
        prepareAndShuffleCards();

        document.querySelector('.cover').classList.toggle('hidden');
        document.querySelector('.player-side > h3').textContent = '';
        document.querySelector('.opponent-side > h3').textContent = '';
        document.querySelector('.player-text').textContent = '';
        document.querySelector('.opponent-text').textContent = '';
        document.querySelector('.table-text > h3').textContent = 'pick a card';
    }
}
