'use strict';

let winningBall = Math.floor(Math.random() * 3);
const items = ['🦴', '🎾', '🐾', '🥩', '🥓', '🐕', '🐈'];

window.onload = () => {
    const layer = document.getElementById('item-layer');
    if (layer) {
        for(let i = 0; i < 40; i++) {
            const div = document.createElement('div');
            div.className = 'floating-item';
            div.innerText = items[Math.floor(Math.random() * items.length)];
            div.style.left = Math.random() * 100 + 'vw';
            div.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            div.style.animationDuration = (Math.random() * 8 + 4) + 's';
            div.style.animationDelay = (Math.random() * 5) + 's';
            layer.appendChild(div);
        }
    }
};

function checkBall(index) {
    const overlay = document.getElementById('game-overlay');
    const msg = document.getElementById('overlay-msg');
    const sub = document.getElementById('overlay-sub');
    const checkoutBtn = document.getElementById('checkout-btn-win');
    const retryBtn = document.getElementById('retry-btn');
    
    const winSfx = document.getElementById('sfx-win');
    const loseSfx = document.getElementById('sfx-lose');

    overlay.style.display = 'flex';

    if (index === winningBall) {
        if (winSfx) {
            winSfx.currentTime = 0;
            winSfx.play().catch(e => console.log("Audio play blocked"));
        }
        
        msg.innerText = "HUZZAH! 🎉";
        msg.style.color = "#1e90ff";
        sub.innerText = "You found the treat! 20% discount applied.";
        
        if (checkoutBtn) checkoutBtn.style.display = "block";
        if (retryBtn) retryBtn.style.display = "none";
        
        createConfetti();
        localStorage.setItem('pawsDiscount', '0.20'); 
    } else {
        if (loseSfx) {
            loseSfx.currentTime = 0;
            loseSfx.play().catch(e => console.log("Audio play blocked"));
        }
        
        msg.innerText = "OH NO! 🐭";
        msg.style.color = "#ff4757";
        sub.innerText = "The ball was empty. Give it another shot!";
        
        if (checkoutBtn) checkoutBtn.style.display = "none";
        if (retryBtn) retryBtn.style.display = "block";
        
        localStorage.removeItem('pawsDiscount');
    }
}

function resetGame() {
    winningBall = Math.floor(Math.random() * 3);
    document.getElementById('game-overlay').style.display = 'none';
}

function createConfetti() {
    for(let i = 0; i < 150; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.setProperty('--x', (Math.random() * 200 - 100) + 'vw');
        c.style.left = '50%';
        c.style.top = '40%';
        c.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 4000);
    }
}