export function changeCursor(gameStart) {
    const cards = document.querySelectorAll('.selection');
    cards.forEach((card) => {
        gameStart ? (card.style.cursor = 'pointer') : (card.style.cursor = 'default');
    });
}
