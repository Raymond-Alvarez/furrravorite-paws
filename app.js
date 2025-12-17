console.log('hey from the home page!');
'use strict'; // Keeps our code "clean" by signaling errors for bad syntax.

// -----------------------------------------------------------
// 🎯 Part 1: THE GLOBAL TOOLS
// -----------------------------------------------------------
let userName = ''; // A container to hold the name we get from the user.
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Our email rulebook.

// -----------------------------------------------------------
// 🎯 Part 2: THE GREETING (Runs first)
// -----------------------------------------------------------
function initializeGreeting() { 
    // This combined alert uses \n to put the second sentence on a new line.
    alert('Welcome to my page!\nNice to have you here.');

    // Get the name from the user
    userName = prompt('What is your name?'); 
    
    // Get the hour and convert text to a number
    let time = parseInt(prompt('What hour is it? (0-23)')); 

    // --- REQUIREMENT: CHECK INPUT & SECOND CHANCE ---
    if (isNaN(time) || time < 0 || time > 23) {
        alert("Whoa! That hour doesn't exist on Earth."); 
        time = parseInt(prompt('Please try again. Enter a number between 0 and 23:'));
    }

    // Determine the time message (we removed the exclamation points here)
    let timeMessage; 
    if (time <= 11) { 
        timeMessage = 'Good Morning'; 
    } else if (time <= 18) { 
        timeMessage = 'Good Afternoon';
    } else if (time < 24) { 
        timeMessage = 'Good Evening';
    } else { 
        timeMessage = "Have a great day"; // Fallback if time is still weird
    
    }
    // Find the spot in the HTML to show the text
    const outputElement = document.getElementById('header-greeting'); 
    
    if (outputElement) { 
        // --- LOGIC FIX: REPLACE "HELLO" WITH "WELCOME" ---
        // We check if the name is valid. 
        // If valid: "Welcome [Name]! " 
        // If invalid/cancelled: "Welcome! "
        let welcomePart = (userName && userName !== "null" && userName.trim() !== "") 
            ? 'Welcome ' + userName + '! ' 
            : 'Welcome! ';
        
        // Combine them: "Welcome [Name]! Good Morning"
        outputElement.textContent = welcomePart + timeMessage; 
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
// 🎯 Part 5: THE MINI-GAME (Logic for Guessing)
// -----------------------------------------------------------
function playGuessingGame() {
    // 1. Math.random() picks a decimal. * 10 makes it 0-9. + 1 makes it 1-10.
    // Math.floor() rounds it down to a whole number.
    const targetNumber = Math.floor(Math.random() * 10) + 1; 

    // 2. We set userGuess to 0 initially so it doesn't match the target yet.
    let userGuess = 0;

    // 3. We create a counter to track how many times they tried.
    let attempts = 0;

    // 4. WHILE LOOP: This says "Keep doing the code inside these brackets {} 
    // as long as the guess is NOT EQUAL (!==) to the secret target number."
    while (userGuess !== targetNumber) {
        
        // 5. Ask the user for a number and turn their text into a real number using parseInt.
        userGuess = parseInt(prompt("GUESS THE NUMBER: I'm thinking of a number between 1 and 10. What is it?"));

        // 6. CHECK: If the user clicked 'Cancel', userGuess becomes NaN (Not a Number).
        if (isNaN(userGuess)) {
            alert("Game exited. Maybe next time!");
            break; // This 'break' forces the loop to stop immediately so they aren't trapped.
        }

        // 7. If they didn't quit, we add 1 to their total attempts.
        attempts++; 

        // 8. CONDITIONAL LOGIC: Provide feedback based on the guess.
        if (userGuess < targetNumber) {
            // Tell them they are too low. Because the guess is still wrong, the loop restarts.
            alert("Too low! Try again.");
        } else if (userGuess > targetNumber) {
            // Tell them they are too high. The loop restarts.
            alert("Too high! Try again.");
        } else {
            // If it's not too low or too high, it must be correct!
            alert("CORRECT! The number was " + targetNumber + ". It took you " + attempts + " tries.");
        }
    } // 9. The loop ends here once the guess matches the target.
}


// -----------------------------------------------------------
// 🎯 Part 6: EXECUTION (No more setTimeout)
// -----------------------------------------------------------

// 1. Run the greeting and pop-ups.
initializeGreeting();

// 2. Run the form setup IMMEDIATELY. 
// 3. Launch the game pop-ups.
playGuessingGame();
// Now, as soon as the greeting finishes, the form is ready.
setupSubscriptionForm();