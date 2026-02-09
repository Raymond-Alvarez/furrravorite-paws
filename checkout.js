'use strict';

/**
 * 1. CONFIGURATION & STATE
 */
const SHIPPING_FEE = 0.00; // You can change this to 5.00 etc.

/**
 * 2. LOAD & RENDER CHECKOUT
 */
function loadCheckout() {
    const savedCart = JSON.parse(localStorage.getItem('savedCart')) || [];
    const container = document.getElementById('checkout-items');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('final-total');
    
    // Check if a discount was earned from the discount.html page
    // We expect a value like "0.20" (20%) stored in localStorage
    const activeDiscount = localStorage.getItem('pawsDiscount') || 0;

    // Handle Empty Cart
    if (savedCart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding: 30px;">
                <p>Your cart is empty! 🐾</p>
                <a href="index.html" class="shop-now-btn" style="display:inline-block; margin-top:10px;">Go Shopping</a>
            </div>
        `;
        subtotalEl.innerText = "$0.00";
        totalEl.innerText = "$0.00";
        return;
    }

    // Build Item List
    let subtotal = 0;
    container.innerHTML = '';

    savedCart.forEach((item, index) => {
        subtotal += item.price;
        container.innerHTML += `
            <div class="cart-summary-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${item.image}" style="width:40px; height:40px; border-radius:4px; object-fit:cover;">
                    <span>${item.name}</span>
                </div>
                <div style="display:flex; align-items:center; gap:15px;">
                    <span>$${item.price.toFixed(2)}</span>
                    <button onclick="removeItem(${index})" class="remove-item-btn">✕</button>
                </div>
            </div>
        `;
    });

    // --- DISCOUNT CALCULATIONS ---
    let discountAmount = subtotal * parseFloat(activeDiscount);
    let finalTotal = (subtotal - discountAmount) + SHIPPING_FEE;

    // Update UI Totals
    if (activeDiscount > 0) {
        subtotalEl.innerHTML = `
            <span style="text-decoration: line-through; color: #888;">$${subtotal.toFixed(2)}</span> 
            <span style="color: #2ecc71; font-weight:bold;">-$${discountAmount.toFixed(2)}</span>
        `;
    } else {
        subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
    }

    totalEl.innerText = `$${finalTotal.toFixed(2)}`;
}

/**
 * 3. REMOVE ITEM
 */
function removeItem(index) {
    let savedCart = JSON.parse(localStorage.getItem('savedCart')) || [];
    savedCart.splice(index, 1);
    localStorage.setItem('savedCart', JSON.stringify(savedCart));
    loadCheckout();
}

/**
 * 4. FORM SUBMISSION
 */
const orderForm = document.getElementById('order-form');
if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('checkout-email').value;
        const btn = e.target.querySelector('button');

        btn.innerText = "Processing... 🐾";
        btn.disabled = true;

        setTimeout(() => {
            alert("Order Confirmed! Your pet's gear is on the way.");
            // Clear cart and discount after purchase
            localStorage.removeItem('savedCart');
            localStorage.removeItem('pawsDiscount'); 
            window.location.href = "index.html";
        }, 1500);
    });
}

// Initial Load
window.onload = loadCheckout;