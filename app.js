'use strict';

/**
 * 1. DATABASE (The Inventory)
 * This is where your items live. Make sure your image folder is named 'image'.
 */
const productInventory = [
    { id: 1, name: "Premium Harness", price: 25.00, category: "Best Sellers", image: "image/harness.png" },
    { id: 2, name: "Interactive Toys", price: 15.00, category: "Best Sellers", image: "image/toys.png" },
    { id: 3, name: "Collars", price: 20.00, category: "Best Sellers", image: "image/collars.png" },
    { id: 4, name: "Snacks & Kibbles", price: 45.00, category: "Pet Essentials", image: "image/food.png" },
    { id: 5, name: "Beds", price: 35.00, category: "Pet Essentials", image: "image/beds.png" },
    { id: 6, name: "Transport Carriers", price: 55.00, category: "Pet Essentials", image: "image/crates.png" }
];

/**
 * 2. STATE
 * This temporary memory holds items while the user shops.
 */
let shoppingCart = [];

/**
 * 3. LOGIC FUNCTIONS
 */

// Calculates the sum of all items in the cart
function calculateCartTotal() {
    return shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);
}

// Adds a product to the cart and saves it to the browser's storage
function addToCart(productId) {
    const product = productInventory.find(item => item.id === productId);
    
    if (product) {
        shoppingCart.push(product);
        
        // Save to LocalStorage so items stay there if the page refreshes
        localStorage.setItem('savedCart', JSON.stringify(shoppingCart));
        
        // Update the UI
        updateCartUI();
        
        // Button Feedback: Changes text to "Added! 🐾" temporarily
        const btn = window.event ? window.event.target : null; 
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = "Added! 🐾";
            btn.style.backgroundColor = "#2ecc71"; // Turns green
            btn.disabled = true; 
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = ""; // Reverts to original CSS
                btn.disabled = false;
            }, 800);
        }
    }
}

// Validates the email and shows a success message
function handleSubscription() {
    const emailInput = document.getElementById('userEmail');
    const container = document.getElementById('subscription-form-container');
    
    if (!emailInput || !container) return;

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        // Success: Change the HTML content of the box
        container.innerHTML = `
            <div style="text-align: center; padding: 20px; animation: starPop 0.5s ease-out;">
                <h3 style="color: #1e90ff;">Welcome to the Pack! 🐕</h3>
                <p>Check <strong>${emailValue}</strong> for your treat.</p>
                <span style="font-size: 2rem;">🦴</span>
            </div>
        `;
    } else {
        // Error: Alert the user
        alert("Please enter a valid email address! 🐾");
        emailInput.style.borderColor = "#ff4757";
    }
}

/**
 * 4. VIEW FUNCTIONS (Updating the Screen)
 */

// Injects the productInventory into the HTML grid
function displayProducts() {
    // This looks for the ID first, then the Class, just to be safe
    const productContainer = document.getElementById('main-product-container') || document.querySelector('.product-list'); 
    
    if (!productContainer) {
        console.error("Warehouse Error: Could not find the product container on the page.");
        return;
    }

    productContainer.innerHTML = ''; // This removes the "Loading..." text

    productInventory.forEach(product => {
        const productCard = `
            <div class="product-item">
                <figure>
                    <img src="${product.image}" alt="${product.name}" class="product-image" 
                         onerror="this.src='https://via.placeholder.com/150?text=Pet+Gear'">
                    <figcaption style="font-weight:bold; margin-top:10px;">${product.name}</figcaption>
                </figure>
                <p style="color: #8B4513; font-weight:bold; margin: 10px 0;">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})" class="shop-now-btn" style="font-size:0.8rem;">Add to Cart</button>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Updates the cart count in the header
function updateCartUI() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = `(${shoppingCart.length})`;
    }
}

/**
 * 5. INITIALIZATION
 * Runs as soon as the page finishes loading
 */
window.onload = function() {
    // 1. Restore Cart from LocalStorage
    const savedData = localStorage.getItem('savedCart');
    if (savedData) {
        shoppingCart = JSON.parse(savedData);
        updateCartUI();
    }

    // 2. Render the products to the grid
    displayProducts(); 
    
    // 3. Set the Copyright Year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 4. Mobile Menu Toggle Logic
    const menuIcon = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('nav-menu');
    
    if (menuIcon && mainNav) {
        menuIcon.onclick = function() {
            menuIcon.classList.toggle('active');
            mainNav.classList.toggle('active');
        };
    }
};