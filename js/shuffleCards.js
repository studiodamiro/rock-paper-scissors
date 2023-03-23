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
