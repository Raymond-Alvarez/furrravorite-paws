'use strict';

// -----------------------------------------------------------
// 🎯 Part 1: GLOBAL VARIABLE
// Declared globally so both the greeting and subscription functions can use it.
// -----------------------------------------------------------
let userName = ''; 

// -----------------------------------------------------------
// 🎯 Part 2: INITIAL GREETING AND TIME LOGIC
// -----------------------------------------------------------

function initializeGreeting() {
    console.log('hey from my external sheet!');

    alert('Welcome to my page');
    alert('Nice to have you here');

    // 1. Get User Name (Pop-up sequence)
    userName = prompt('What is your name?'); 
    
    // 🛑 Confirmation check has been REMOVED as requested.

    console.log("User Name: " + userName);
    console.log('Welcome ' + userName + '!');

    // 2. Get Time and Check
    let time = parseInt(prompt('What hour is it? (0-23))')); 
    let message;

    if(time <= 11) {
        message = 'Good Morning!';
    } else if (time <= 18) {
        message = 'Good Afternoon!';
    } else if (time < 24) {
        message = 'Good Evening!';
    } else {
        message = " Whoa! That hour doesn't exist on Earth."; 
    }

    // 3. Output the greeting to the NEW HEADER ELEMENT
    const outputElement = document.getElementById('header-greeting'); // 🎯 TARGETING NEW ID
    if (outputElement) {
        outputElement.textContent = 'Hello ' + userName + '! ' + message;
    }
}


// -----------------------------------------------------------
// 🎯 Part 3: SUBSCRIPTION FORM LOGIC
// -----------------------------------------------------------

function setupSubscriptionForm() {
    const formElement = document.getElementById('subscription-form-container');
    const subscribeButton = document.getElementById('subscribe-btn');
    
    // Visually Reveal the Form (The Fade-in)
    formElement.classList.remove('form-hidden');
    formElement.classList.add('form-visible'); 

    // Attach the click handler to the button
    subscribeButton.addEventListener('click', processSubscription);
}

function processSubscription() {
    // This uses the GLOBAL 'userName' variable
    
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value; 
    const outputArea = document.getElementById('sub-message-output');
    
    let isValid = false;

    if (email.includes('@') && email.includes('.') && email.length > 5) {
        isValid = true;
    } else {
        outputArea.textContent = "Please enter a valid email address (must contain @ and .)";
        outputArea.style.color = 'red';
        return; 
    }

    if (isValid) {
        let confirmSubscribe = confirm("Please confirm: Subscribe " + email + " to the newsletter?");
        
        if (confirmSubscribe) {
            let successMessage = "Thank thank you for subscribing " + userName + "! Check your inbox at " + email + " for your free gift.";
            outputArea.textContent = successMessage;
            outputArea.style.color = 'green';
            emailInput.value = ''; 
        } else {
            outputArea.textContent = 'Subscription canceled by user.';
            outputArea.style.color = 'orange';
        }
    }
}


// -----------------------------------------------------------
// 🎯 Part 4: EXECUTION BLOCK
// -----------------------------------------------------------

// 1. Run the initial pop-ups and greeting immediately
initializeGreeting();

// 2. Start the form fade-in process after 3 seconds
setTimeout(setupSubscriptionForm, 3000);