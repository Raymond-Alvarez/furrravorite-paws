'use strict'; // Keeps our code "clean" by signaling errors for bad syntax.

// -----------------------------------------------------------
// 🎯 Part 1: THE GLOBAL TOOLS
// -----------------------------------------------------------
let userName = ''; // A container to hold the name we get from the user.
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Our email rulebook.

// -----------------------------------------------------------
// 🎯 Part 2: THE GREETING (Runs first)
// -----------------------------------------------------------
function initializeGreeting() { // Logic for the welcome pop-ups.
    alert('Welcome to my page'); // First welcome box.
    alert('Nice to have you here'); // Second welcome box.

    userName = prompt('What is your name?'); // Gets the name from the user.
    
    let time = parseInt(prompt('What hour is it? (0-23))')); // Gets hour and converts text to a number.
    let message; // A variable to store our "Good Morning/Evening" text.

    if(time <= 11) { // If it's before noon.
        message = 'Good Morning!'; 
    } else if (time <= 18) { // If it's between noon and 6 PM.
        message = 'Good Afternoon!';
    } else if (time < 24) { // If it's 7 PM to midnight.
        message = 'Good Evening!';
    } else { // If the number is outside 0-23.
        message = " Whoa! That hour doesn't exist on Earth."; 
    }

    const outputElement = document.getElementById('header-greeting'); // Finds the header in the HTML.
    if (outputElement) { // If the header exists...
        outputElement.textContent = 'Hello ' + userName + '! ' + message; // Show the greeting on screen.
    }
}

// -----------------------------------------------------------
// 🎯 Part 3: INSTANT FORM SETUP (The Change is Here)
// -----------------------------------------------------------
function setupSubscriptionForm() { // Logic to prepare the form.
    const formElement = document.getElementById('subscription-form-container'); // Finds the form container.
    const subscribeButton = document.getElementById('subscribe-btn'); // Finds the button.
    const emailInput = document.getElementById('userEmail'); // Finds the typing box.
    const errorMessage = document.getElementById('emailError'); // Finds the error message spot.

    // We still swap these classes so the CSS knows the form is now active, 
    // but because we call this function immediately, it happens instantly.
    formElement.classList.remove('form-hidden'); // Removes the "invisible" state.
    formElement.classList.add('form-visible'); // Adds the "visible" state.

    // Sets up the typing checker (Real-time).
    emailInput.addEventListener('input', () => {
        runRealTimeValidation(emailInput, errorMessage);
    });
    
    // Sets up the click checker (Final submission).
    subscribeButton.addEventListener('click', processSubscription);
}

// -----------------------------------------------------------
// 🎯 Part 4: THE CHECKERS (Validation)
// -----------------------------------------------------------
function runRealTimeValidation(emailInput, errorMessage) { 
    if (EMAIL_PATTERN.test(emailInput.value)) { // Does the text match the email rules?
        emailInput.setCustomValidity(''); // Tell browser: "Everything is fine."
        errorMessage.textContent = ''; // Hide error text.
    } else {
        const message = 'Please enter a valid email address.';
        emailInput.setCustomValidity(message); // Tell browser: "This is a mistake."
        errorMessage.textContent = message; // Show the error text.
        errorMessage.style.color = 'red'; // Make it red.
    }
}

function processSubscription(event) {
    event.preventDefault(); // Stop the page from refreshing.
    
    const emailInput = document.getElementById('userEmail');
    const email = emailInput.value; 
    const outputArea = document.getElementById('sub-message-output');
    
    outputArea.textContent = ''; // Clear old messages.
    
    if (!email || !EMAIL_PATTERN.test(email)) { // If empty OR wrong format.
        outputArea.textContent = "Please enter a valid email address.";
        outputArea.style.color = 'red';
        emailInput.reportValidity(); // Show the browser's error bubble.
        return; // Stop the code here.
    }
    
    let confirmSubscribe = confirm("Subscribe " + email + "?"); // Ask for final confirmation.
    
    if (confirmSubscribe) { // If they click OK.
        outputArea.textContent = "Thank you " + userName + "!";
        outputArea.style.color = 'green';
        emailInput.value = ''; // Clear the box.
    } else { // If they click Cancel.
        outputArea.textContent = 'Subscription canceled.';
        outputArea.style.color = 'orange';
    }
}

// -----------------------------------------------------------
// 🎯 Part 5: EXECUTION (No more setTimeout)
// -----------------------------------------------------------

// 1. Run the greeting and pop-ups.
initializeGreeting();

// 2. Run the form setup IMMEDIATELY. 
// I removed the "setTimeout" and the "3000" (3 seconds).
// Now, as soon as the greeting finishes, the form is ready.
setupSubscriptionForm();