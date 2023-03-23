export function changeStartCursor(hand) {
    const element = document.querySelector('.round');
    hand ? (element.style.cursor = 'pointer') : (element.style.cursor = 'default');
}

export function changeCardCursor(hand) {
    const cards = document.querySelectorAll('.selection');
    cards.forEach((card) => {
        hand ? (card.style.cursor = 'pointer') : (card.style.cursor = 'default');
    });
}
