export function shuffleComputeCards() {
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

function normalizeCards() {
    const playerCards = document.querySelectorAll('.player-side > .card-set');
    playerCards.forEach((card) => {
        card.querySelector('.front').classList.add('hidden');
        card.querySelector('.peek').style.opacity = '1';
        card.querySelector('.back').style.opacity = '1';
    });

    const computerSelected = document.querySelector('#computer-selected');
    computerSelected.querySelector('.front').classList.add('hidden');
    computerSelected.querySelector('.peek').style.opacity = '1';
    computerSelected.querySelector('.back').style.opacity = '1';
}
