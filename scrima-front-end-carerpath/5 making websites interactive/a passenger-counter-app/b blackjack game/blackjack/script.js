let cards = [];
let sum = 0;
let hasBlackjack = false;
// 1. Create a variable called isAlive and assign it to true, 2. Flip its value to true in the appropriate code block 
let isAlive = false;
let message = "";
// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");
let startOverButton = document.querySelector(".hide");
let startButton = document.getElementById("startButton");
let player = {
    name: "Nanji",
    chips: 145
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
// Create a function, getRandomCard(), that always returns the number
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11;
    }
    if (randomNumber > 10) {
        return 10;
    } else {
        return randomNumber;
    };
};

function startGame() {
    startButton.classList.remove("hide");
    startOverButton.classList.add("hide");
    isAlive = true;
    // 1. Create a new array - cards - that contains firstCard and secondCard
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        // Create a for loop that renders out all the cards instead of just two
        cardsEl.textContent += cards[i] + " ";
    };
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Would you like to draw another card?";
    } else if (sum === 21) {
        message = "Yay!! You've got Blackjack!";
        hasBlackjack = true;
        startOverButton.classList.remove("hide");
        startButton.classList.add("hide");
    } else {
        message = "Oh No! You're out of the game!";
        isAlive = false;
        startOverButton.classList.remove("hide");
        startButton.classList.add("hide");
    }
    messageEl.textContent = message;
};

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
};