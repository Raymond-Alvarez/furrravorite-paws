'use strict'; // Tells the browser: "Be strict! If I make a typo, tell me immediately."

// -----------------------------------------------------------
// 🎯 Part 1: THE GLOBAL TOOLS
// -----------------------------------------------------------

// A "bucket" to hold the name so we can use it in different functions later.
let userName = ''; 

// A pattern that checks if a string looks like a real email (has @ and a dot).
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

// -----------------------------------------------------------
// 🎯 Part 2: THE GREETING
// -----------------------------------------------------------

function initializeGreeting() { 
    // Show a simple pop-up box when the page first loads.
    alert('Welcome to my page!\nNice to have you here.');

    // Ask the user for their name and save it in our "userName" bucket.
    userName = prompt('What is your name?'); 
    
    // Ask for the hour and convert the text they type into a real number.
    let time = parseInt(prompt('What hour is it? (0-23)')); 

    // If they typed something that isn't a number, or a number like 99...
    if (isNaN(time) || time < 0 || time > 23) {
        // Show an error message.
        alert("Whoa! That hour doesn't exist on Earth."); 
        // Give them one more chance to type a real hour.
        time = parseInt(prompt('Please try again. Enter a number between 0 and 23:'));
    }

    // Create a variable to hold our "Morning/Afternoon" message.
    let timeMessage; 
    
    // If it's 11am or earlier...
    if (time <= 11) { 
        timeMessage = 'Good Morning'; 
    } 
    // If it's between 12pm and 6pm (18:00)...
    else if (time <= 18) { 
        timeMessage = 'Good Afternoon'; 
    } 
    // If it's 7pm or later...
    else if (time < 24) { 
        timeMessage = 'Good Evening'; 
    } 
    // If something weird happens, use this backup message.
    else { 
        timeMessage = "Have a great day"; 
    }

    // Find the spot in the HTML where we want to write the greeting.
    const outputElement = document.getElementById('header-greeting'); 
    // Find the container div we added in the main section.
    const greetingContainer = document.getElementById('greeting-container');
    
    // If we actually found that spot in the HTML...
    if (outputElement) { 
        // If the name isn't empty and they didn't hit 'Cancel'...
        let welcomePart = (userName && userName !== "null" && userName.trim() !== "") 
            ? 'Welcome ' + userName + '! '  // Use their name.
            : 'Welcome! ';                  // Otherwise, just say "Welcome!"
        
        // Put the combined text (Name + Time Message) into the HTML spot.
        outputElement.textContent = welcomePart + timeMessage; 
        
        // Make the whole greeting area visible on the screen.
        if (greetingContainer) {
            greetingContainer.style.display = 'block';
        }
    }
}

// -----------------------------------------------------------
// 🎯 Part 3: SETTING UP THE FORM
// -----------------------------------------------------------

function setupSubscriptionForm() { 
    // Grab all the pieces of our newsletter form.
    const formElement = document.getElementById('subscription-form-container'); 
    const subscribeButton = document.getElementById('subscribe-btn'); 
    const emailInput = document.getElementById('userEmail'); 
    const errorMessage = document.getElementById('emailError'); 

    // If the form exists, make it show up by switching its CSS class.
    if (formElement) {
        formElement.classList.remove('form-hidden'); 
        formElement.classList.add('form-visible'); 
    }

    // Listen to the user typing. Every time they press a key, check the email.
    emailInput.addEventListener('input', () => {
        runRealTimeValidation(emailInput, errorMessage);
    });
    
    // Listen for when they click the "Subscribe" button.
    subscribeButton.addEventListener('click', processSubscription);
}

// -----------------------------------------------------------
// 🎯 Part 4: CHECKING THE EMAIL
// -----------------------------------------------------------

function runRealTimeValidation(emailInput, errorMessage) { 
    // Check if what they typed matches our "email pattern" from Part 1.
    if (EMAIL_PATTERN.test(emailInput.value)) { 
        // If it's good, tell the browser the box is valid.
        emailInput.setCustomValidity(''); 
        // Clear out any old error messages.
        errorMessage.textContent = ''; 
    } else {
        // If it's bad, create an error message.
        const message = 'Please enter a valid email address.';
        // Tell the browser this box is "invalid" (this blocks the form).
        emailInput.setCustomValidity(message); 
        // Show the message to the user in red text.
        errorMessage.textContent = message; 
        errorMessage.style.color = 'red'; 
    }
}

function processSubscription(event) {
    // Stop the page from refreshing (which is what forms usually do).
    event.preventDefault(); 
    
    // Get the email box and the place where the "Thank You" message goes.
    const emailInput = document.getElementById('userEmail');
    const email = emailInput.value; 
    const outputArea = document.getElementById('sub-message-output'); 
    
    // Clear any old messages.
    outputArea.textContent = ''; 
    
    // If the box is empty OR the email is typed wrong...
    if (!email || !EMAIL_PATTERN.test(email)) { 
        // Show an error and stop everything.
        outputArea.textContent = "Please enter a valid email address.";
        outputArea.style.color = 'red';
        emailInput.reportValidity(); 
        return; // This exits the function early.
    }
    
    // Pop up a box asking if they are sure.
    let confirmSubscribe = confirm("Subscribe " + email + "?"); 
    
    // If they clicked "OK"...
    if (confirmSubscribe) { 
        // Show a thank you message using the name from earlier.
        outputArea.textContent = "Thank you " + (userName || "Friend") + "!";
        outputArea.style.color = 'green';
        // Empty the email box so it looks like it was sent.
        emailInput.value = ''; 
    } else { 
        // If they clicked "Cancel", show this instead.
        outputArea.textContent = 'Subscription canceled.';
        outputArea.style.color = 'orange';
    }
}

// -----------------------------------------------------------
// 🎯 Part 5: THE GUESSING GAME
// -----------------------------------------------------------

function playGuessingGame() {
    // Pick a random number between 1 and 10.
    const targetNumber = Math.floor(Math.random() * 10) + 1; 
    let userGuess = 0; // Start the guess at 0.
    let attempts = 0; // Start the try-counter at 0.

    // Keep asking as long as their guess is NOT the right number.
    while (userGuess !== targetNumber) {
        // Ask for a guess and turn their text into a number.
        userGuess = parseInt(prompt("GUESS THE NUMBER: 1 to 10. What is it?"));

        // If they hit "Cancel", stop the game immediately.
        if (isNaN(userGuess)) {
            alert("Game exited.");
            break; 
        }

        // Add 1 to our "try-counter".
        attempts++; 

        // Give them a hint.
        if (userGuess < targetNumber) {
            alert("Too low!"); 
        } else if (userGuess > targetNumber) {
            alert("Too high!"); 
        } else {
            // They got it!
            alert("CORRECT! It took you " + attempts + " tries.");
        }
    } 
}

// -----------------------------------------------------------
// 🎯 Part 6: CHANGING BUTTON COLORS
// -----------------------------------------------------------

function pickButtonColor() {
    // Ask for a color name.
    let userColor = prompt("What is your favorite color for the subscribe button?");

    // If they hit cancel, just stop.
    if (!userColor) return; 

    // Create a "test" style to see if the browser knows that color.
    let s = new Option().style;
    s.color = userColor;

    // If the color is real...
    if (s.color !== "") {
        const subBtn = document.getElementById('subscribe-btn');
        if (subBtn) {
            // Change the button color to what they typed!
            subBtn.style.backgroundColor = userColor; 
            subBtn.style.color = "white"; 
        }
    } else {
        // If they typed something fake like "burrito".
        alert("I don't know that color!");
    }
}

// -----------------------------------------------------------
// 🎯 Part 7: THE MENU AND BLUR
// -----------------------------------------------------------

function setupGlobalMenu() {
    // Get the hamburger icon, the menu, and the main content of the page.
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.main-nav a');

    // If the menu elements exist...
    if (hamburger && navMenu) {
        // When the hamburger is clicked...
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class (on/off).
            const isMenuOpening = navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // For every link inside the menu...
        navLinks.forEach(link => {
            // If a link is clicked, close the menu and un-blur the page.
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                
            });
        });
    }
}

// -----------------------------------------------------------
// 🎯 Part 8: THE "BACK TO TOP" BUTTON
// -----------------------------------------------------------

function setupBackToTop() {
    const topBtn = document.getElementById("backToTop");

    // Every time the user scrolls the mouse...
    window.onscroll = function() {
        // If they have scrolled down more than 300 pixels...
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            // Show the button.
            topBtn.style.display = "block"; 
        } else {
            // Otherwise, hide it.
            topBtn.style.display = "none"; 
        }
    };

    // When they click that button...
    topBtn.onclick = function() {
        // Roll the screen back to the very top smoothly.
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

// -----------------------------------------------------------
// 🎯 Part 9: THE ON SWITCHES
// -----------------------------------------------------------

// These lines tell the computer: "Run these functions right now!"
initializeGreeting();
playGuessingGame();
setupSubscriptionForm();
pickButtonColor();
setupBackToTop();
setupGlobalMenu();