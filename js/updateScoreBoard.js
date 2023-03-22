export function updateScoreBoard(playerChoice, computerChoice) {
    document.querySelector('.player-text').innerHTML = playerChoice;
    document.querySelector('.opponent-text').innerHTML = computerChoice;
}
