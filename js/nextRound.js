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
            document.querySelector('.opponent-text').innerHTML = 'press play';
            document.querySelector('.table-text > h3').innerHTML = '';
            document.querySelector('.player-text').innerHTML = 'to play again';

            document.querySelector('.player-side > h3').innerHTML = 'congrats';
            document.querySelector('.opponent-side > h3').innerHTML = '';
        } else {
            // player loses
            document.querySelector('.opponent-text').innerHTML = ' play again?';
            document.querySelector('.table-text > h3').innerHTML = '';
            document.querySelector('.player-text').innerHTML = 'press play';

            document.querySelector('.player-side > h3').innerHTML = '';
            document.querySelector('.opponent-side > h3').innerHTML = 'congrats';
        }

        // Enable play button
        prepareGame();
        // onClick play button
        // reset score boards
        // prepare initial cards
    } else {
        // continue to next round
        prepareAndShuffleCards();

        document.querySelector('.cover').classList.toggle('hidden');
        document.querySelector('.player-side > h3').innerHTML = '';
        document.querySelector('.opponent-side > h3').innerHTML = '';
        document.querySelector('.player-text').innerHTML = '';
        document.querySelector('.opponent-text').innerHTML = '';
        document.querySelector('.table-text > h3').innerHTML = '';
    }
}
