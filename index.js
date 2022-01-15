randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('img').setAttribute('src', 'images/dice' + randomNumber1 +'.png');
document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 +'.png');

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerText = "🚩 Player 1 won!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerText = "Player 2 won! 🚩";
} else {
    document.querySelector('h1').innerText = "It's a draw 🏳";
}