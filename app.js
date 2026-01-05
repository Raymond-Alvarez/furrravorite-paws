'use strict';

function initializeGreeting() {
    const name = prompt("What is your name?");
    const greetingMsg = document.getElementById('header-greeting');
    if (greetingMsg) {
        greetingMsg.textContent = name ? `Welcome, ${name}!` : "Welcome to our shop!";
    }
}

function handleStarRating() {
    let rating = prompt("On a scale of 1-5, how many stars for Furrravorite Paws?");
    rating = parseInt(rating);

    if (isNaN(rating) || rating < 1 || rating > 5) rating = 5; // Default to 5 if input is weird

    const container = document.getElementById('star-container');
    const msg = document.getElementById('rating-message');
    
    let starHTML = '';
    for (let i = 0; i < rating; i++) {
        starHTML += `<img src="image/star.png" class="star-img" alt="star">`;
    }
    
    if (container) container.innerHTML = starHTML;
    if (msg) msg.textContent = `You gave us ${rating} stars!`;
}

function setupDiscountGame() {
    const btn = document.getElementById('discount-btn');
    const status = document.getElementById('game-status-message');

    if (btn) {
        btn.onclick = function() {
            const secretNum = Math.floor(Math.random() * 10) + 1;
            let guess = prompt("Guess a number between 1 and 10 to win a code!");
            
            if (parseInt(guess) === secretNum) {
                status.textContent = "🏆 Correct! Use code: PAWS20";
                status.style.color = "green";
            } else {
                alert(`Oops! The number was ${secretNum}. Try again!`);
                status.textContent = "Try again next time!";
                status.style.color = "red";
            }
        };
    }
}

// RUN ON LOAD
window.onload = function() {
    initializeGreeting();
    handleStarRating();
    setupDiscountGame();
    // Your other footer/utility code here
    document.getElementById('current-year').textContent = new Date().getFullYear();
};