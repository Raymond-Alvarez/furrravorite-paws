'use strict'; // Prevents common coding mistakes by throwing errors for "silent" bugs.

// -----------------------------------------------------------
// 🎯 Part 1: THE GLOBAL TOOLS (Available to all functions)
// -----------------------------------------------------------
let userName = ''; // Creates an empty "container" to store the user's name later.
// Creates a strict rulebook (Regex) to check if an email has an @ and a domain (like .com).
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

// -----------------------------------------------------------
// 🎯 Part 2: THE GREETING (Initial interaction)
// -----------------------------------------------------------

function initializeGreeting() { // This function manages the opening pop-ups.
    console.log('hey from my external sheet!'); // Leaves a "hidden" note in the browser console.

    alert('Welcome to my page'); // Shows a simple "OK" pop-up box with a welcome message.
    alert('Nice to have you here'); // Shows a second "OK" pop-up box.

    // Shows a box with a text field; whatever the user types is saved into 'userName'.
    userName = prompt('What is your name?'); 

    console.log("User Name: " + userName); // Logs the name to the console for the developer to see.
    console.log('Welcome ' + userName + '!'); // Logs a personalized welcome to the console.

    // Asks for the hour, then 'parseInt' converts that text (e.g., "14") into a real number (14).
    let time = parseInt(prompt('What hour is it? (0-23))')); 
    let message; // Creates an empty variable to hold the final greeting string.

    if(time <= 11) { // Checks if the number is 11 or less (Morning).
        message = 'Good Morning!'; // Assigns the morning text if the condition is true.
    } else if (time <= 18) { // Checks if the number is between 12 and 18 (Afternoon).
        message = 'Good Afternoon!'; // Assigns the afternoon text if true.
    } else if (time < 24) { // Checks if the number is between 19 and 23 (Evening).
        message = 'Good Evening!'; // Assigns the evening text if true.
    } else { // If the user typed a number that doesn't fit (like 99).
        message = " Whoa! That hour doesn't exist on Earth."; // Assigns an error message.
    } // Closes the logic tree.

    // Uses the "Bridge" (DOM) to find the HTML element with the ID 'header-greeting'.
    const outputElement = document.getElementById('header-greeting'); 
    
    

    if (outputElement) { // Safety check: Only run this if the HTML element actually exists.
        // Combines "Hello", the user's name, and the time-based message into the HTML.
        outputElement.textContent = 'Hello ' + userName + '! ' + message;
    } // Closes the safety check.
} // Closes the initializeGreeting function.


// -----------------------------------------------------------
// 🎯 Part 3: FORM SETUP (Connecting things together)
// -----------------------------------------------------------

function setupSubscriptionForm() { // This function prepares the form for use.
    // Reaches into the HTML to grab the container, the button, the input, and the error span.
    const formElement = document.getElementById('subscription-form-container');
    const subscribeButton = document.getElementById('subscribe-btn');
    const emailInput = document.getElementById('userEmail');
    const errorMessage = document.getElementById('emailError'); 

    // Removes the CSS class that keeps the form hidden (opacity 0).
    formElement.classList.remove('form-hidden');
    // Adds the CSS class that triggers the fade-in effect (opacity 1).
    formElement.classList.add('form-visible'); 

    // Tells the 'emailInput' box to run a check every single time the user types a letter.
    emailInput.addEventListener('input', () => {
        // Runs the validation function and "passes" it the input and the error message spot.
        runRealTimeValidation(emailInput, errorMessage);
    }); // Closes the 'input' listener.
    
    // Tells the 'subscribeButton' to wait for a click and then run the processing logic.
    subscribeButton.addEventListener('click', processSubscription);
} // Closes the setupSubscriptionForm function.

// -----------------------------------------------------------
// 🎯 Part 4: THE CHECKER (Real-time feedback)
// -----------------------------------------------------------

function runRealTimeValidation(emailInput, errorMessage) { // Accepts the elements as "arguments."
    
    // Asks: "Does the current value inside the input box match our email rulebook (Regex)?"
    if (EMAIL_PATTERN.test(emailInput.value)) {
        // If it matches: Tells the browser the data is valid (sets error to nothing).
        emailInput.setCustomValidity(''); 
        // Clears the visible error message text on the screen.
        errorMessage.textContent = '';
        // Resets the color to the default.
        errorMessage.style.color = ''; 
    } else { // If the email looks wrong (no @, etc.).
        // Creates a specific error message string.
        const message = 'Please enter a valid email address (e.g., user@domain.com)';
        // Tells the browser: "This field is currently invalid" and attaches the message.
        emailInput.setCustomValidity(message); 
        // Shows the error message to the user in the HTML span.
        errorMessage.textContent = message;
        // Changes the color of the message to red.
        errorMessage.style.color = 'red'; 
    } // Closes the if/else block.
} // Closes the validation function.


function processSubscription(event) { // Runs when the "Subscribe" button is clicked.
    // Prevents the browser from its default behavior of refreshing the whole page.
    event.preventDefault(); 
    
    // Grabs the input box and the output paragraph where success/fail messages go.
    const emailInput = document.getElementById('userEmail');
    const email = emailInput.value; // Grabs the actual text typed into the box.
    const outputArea = document.getElementById('sub-message-output');
    
    // Immediately clears any old messages from previous attempts.
    outputArea.textContent = '';
    // Resets the text color.
    outputArea.style.color = '';
    
    // Final check: Is the email empty (!email) OR does it fail the pattern check?
    if (!email || !EMAIL_PATTERN.test(email)) {
        // Sets the error text in the output area.
        outputArea.textContent = "Please enter a valid email address (e.g., user@domain.com)";
        // Makes the text red.
        outputArea.style.color = 'red';
        
        // Tells the browser to pop up its built-in error bubble near the input.
        emailInput.reportValidity(); 
        
        return; // CRITICAL: Stops the function here so the user isn't subscribed.
    } // Closes the final check.
    
    // If the check passed, show a pop-up asking for one last confirmation.
    let confirmSubscribe = confirm("Please confirm: Subscribe " + email + " to the newsletter?");
    
    if (confirmSubscribe) { // If the user clicked "OK" in the confirm box.
        // Creates a friendly success message using the 'userName' from Part 2.
        let successMessage = "Thank thank you for subscribing " + userName + "! Check your inbox at " + email + " for your free gift.";
        
        // Puts the success message into the output area.
        outputArea.textContent = successMessage;
        // Makes the message green to signal success.
        outputArea.style.color = 'green';
        
        // Empties the input box so it's ready for someone else (or just to look clean).
        emailInput.value = ''; 
    } else { // If the user clicked "Cancel" in the confirm box.
        // Tells the user the process was stopped.
        outputArea.textContent = 'Subscription canceled by user.';
        // Makes the message orange (a warning color).
        outputArea.style.color = 'orange';
    } // Closes the confirm check.
} // Closes the processSubscription function.

// -----------------------------------------------------------
// 🎯 Part 5: THE ENGINE (Starting the page)
// -----------------------------------------------------------

// Runs the Greeting function as soon as the JavaScript file is loaded.
initializeGreeting();

// Sets a timer: Wait 3000 milliseconds (3 seconds), then run the 'setupSubscriptionForm' function.
setTimeout(setupSubscriptionForm, 3000);