let cards = document.getElementsByClassName('card');
for (var i = 0; i < cards.length; i++) {
    cards[i].style.width = '80px';
    cards[i].style.height = '124px';
}

let cardbacks = document.getElementsByClassName('back');
for (var i = 0; i < cardbacks.length; i++) {
    cardbacks[i].style.width = '74px';
    cardbacks[i].style.height = '116px';
}

let cardPeeks = document.getElementsByClassName('peek');
for (var i = 0; i < cardPeeks.length; i++) {
    cardPeeks[i].style.width = '84px';
    cardPeeks[i].style.height = '58px';
}

function randomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    return randomNumber;
}

randomNumber(1, 10);
