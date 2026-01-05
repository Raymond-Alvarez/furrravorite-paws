'use strict';

// 🎯 GLOBAL BUCKET
let userName = ''; 
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

// 🎯 GREETING LOGIC
function initializeGreeting() { 
    alert('Welcome to Furrravorite Paws!');
    userName = prompt('What is your name?'); 
    let time = parseInt(prompt('What hour is it? (0-23)')); 

    if (isNaN(time) || time < 0 || time > 23) {
        time = new Date().getHours(); 
    }

    let timeMessage = (time <= 11) ? 'Good Morning' : (time <= 18) ? 'Good Afternoon' : 'Good Evening';
    const outputElement = document.getElementById('header-greeting'); 
    
    if (outputElement) { 
        let welcomePart = (userName && userName.trim() !== "" && userName !== "null") ? `Welcome ${userName}! ` : 'Welcome! '; 
        outputElement.textContent = welcomePart + timeMessage; 
    }
}

// 🎯 THE STAR RATING (CLASS ASSIGNMENT)
function handleStarRating() {
    let rating;
    while (true) {
        let input = prompt("On a scale of 1-5, how many stars would you rate our shop?");
        if (input === null) return; 
        rating = parseInt(input);

        if (!isNaN(rating) && rating >= 1 && rating <= 5) {
            alert(`Thank you for the ${rating} star rating!`);
            break; 
        } else {
            alert("Please enter a number from 1 to 5.");
        }
    }

    const starContainer = document.getElementById('star-container');
    const messageArea = document.getElementById('rating-message');
    let starHTML = '';

    // Requirement 2 & 3: Use a loop to repeat the image
    for (let i = 1; i <= rating; i++) {
        // Labels removed per your request
        starHTML += `
            <div class="star-item">
                <img src="image/star.png" class="star-img" alt="Star">
            </div>`;
    } // Bracket was fixed here

    if (starContainer) starContainer.innerHTML = starHTML;
    if (messageArea) messageArea.textContent = `You gave us ${rating} stars!`;
}

// 🎯 SUBSCRIPTION & VALIDATION
function setupSubscriptionForm() { 
    const subscribeButton = document.getElementById('subscribe-btn'); 
    const emailInput = document.getElementById('userEmail'); 

    if (subscribeButton) {
        subscribeButton.addEventListener('click', (event) => {
            event.preventDefault();
            const email = emailInput.value;
            const outputArea = document.getElementById('sub-message-output'); 

            if (EMAIL_PATTERN.test(email)) {
                outputArea.textContent = `Thank you ${userName || "Friend"}!`;
                outputArea.style.color = 'green';
                emailInput.value = '';
            } else {
                outputArea.textContent = "Please enter a valid email.";
                outputArea.style.color = 'red';
            }
        });
    }
}

// 🎯 MENU & NAVIGATION
function setupGlobalMenu() {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// 🎯 UTILITIES (Year & Scroll)
function setupUtilities() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();

    const topBtn = document.getElementById("backToTop");
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 300) topBtn.style.display = "block";
        else topBtn.style.display = "none";
    };
    if (topBtn) {
        topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// 🎯 THE ON SWITCHES
initializeGreeting();
handleStarRating(); 
setupSubscriptionForm();
setupGlobalMenu();
setupUtilities();