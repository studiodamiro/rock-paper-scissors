export function displayComputerChoice(card) {
    let cardInitial = card.charAt(0);

    document.querySelector('#computer-selected > .front > .top').textContent = cardInitial;
    document.querySelector('#computer-selected > .front > .bottom').textContent = cardInitial;
    document.querySelector('#computer-selected').setAttribute('data-card', card);

    if (cardInitial === 'r') {
        document
            .querySelector('#computer-selected > .front > img')
            .setAttribute('src', 'assets/hand-rock.svg');
    } else if (cardInitial === 'p') {
        document
            .querySelector('#computer-selected > .front > img')
            .setAttribute('src', 'assets/hand-paper.svg');
    } else if (cardInitial === 's') {
        document
            .querySelector('#computer-selected > .front > img')
            .setAttribute('src', 'assets/hand-scissor.svg');
    }
}
