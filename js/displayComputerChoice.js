export function displayComputerChoice(card) {
    let cardInitial = card.charAt(0);

    document.querySelector('#computer-cards > .card > .front > .top').innerHTML = cardInitial;
    document.querySelector('#computer-cards > .card > .front > .bottom').innerHTML = cardInitial;

    if (cardInitial === 'r') {
        document
            .querySelector('#computer-cards > .card > .front > img')
            .setAttribute('src', 'assets/hand-rock.svg');
    } else if (cardInitial === 'p') {
        document
            .querySelector('#computer-cards > .card > .front > img')
            .setAttribute('src', 'assets/hand-paper.svg');
    } else if (cardInitial === 's') {
        document
            .querySelector('#computer-cards > .card > .front > img')
            .setAttribute('src', 'assets/hand-scissor.svg');
    }
}
