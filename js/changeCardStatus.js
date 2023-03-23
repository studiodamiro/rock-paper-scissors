export function changeCardStatus(able) {
    const cards = document.querySelectorAll('.selection');
    cards.forEach((card) => {
        able ? card.classList.remove('selection') : card.classList.add('selection');
        card.removeEventListener('mouseleave', () => {});
    });
}
