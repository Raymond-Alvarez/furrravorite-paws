# Furrravorite Paws: Project Analysis

`This document provides a line-by-line breakdown of the HTML/CSS/JavaScript structure for the Furrravorite Paws site.`

## **home.html**

## 1. The "Brains" (The `<head>` Section)

This part is invisible to the user but essential for the site to function and look good.

* **`<!DOCTYPE html>`**: Tells the browser, "I am a modern HTML5 document."
* **`<html lang="en">`**: Declares that the primary language of the page is English.
* **`<meta charset="UTF-8">`**: Ensures all characters (like emojis 🛒 or special symbols) display correctly.
* **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: This is the "mobile-friendly" tag. It tells the browser to scale the page to fit the screen size (phone, tablet, or desktop).
* **`<link rel="stylesheet" href="style.css">`**: Connects your CSS "paint" to this HTML "skeleton."
* **`<link href="https://fonts.googleapis...">`**: Reaches out to Google’s servers to grab professional fonts (**Inter** and **Poppins**) so your text looks chic.

---

## 2. The `<header>` (Navigation & Branding)

`<header class="main-header">`

`<div class="menu-icon" id="hamburger-menu">`:

Creates the three-line "hamburger" menu. The three empty <span></span> tags inside are likely styled in CSS to look like horizontal lines.

`<h1 class="brand-name">`:

Your main title. Use only one `<h1>` per page for the best SEO (Search Engine Optimization).

`<nav id="nav-menu">`:

A semantic tag specifically for navigation links. The `<ul>` (Unordered List) and `<li>` (List Item) structure is the industry standard for menus.

`<div class="menu-icon" id="hamburger-menu">`:
    
Creates the three-line "hamburger" menu. The three empty `<span></span>` tags inside are likely styled in CSS to look like horizontal lines.

`<h1 class="brand-name">`:

Your main title. Use only one `<h1>` per page for the best SEO (Search Engine Optimization).

`<nav id="nav-menu">`:

A semantic tag specifically for navigation links. The `<ul>` (Unordered List) and `<li>` (List Item) structure is the industry standard for menus.

---

## 3. The Main Content Area

`<main>`

### A. The Cohort Link & Greeting

`<--- ... --->`:

These are Character Entities. HTML uses `<` and `>` for tags, so we use ` < ` (less than) and  ` > ` (greater than) to show the arrows as actual text.

` <span id="header-greeting"></span> `: An empty container. Your JavaScript likely finds this ID and injects a dynamic greeting based on the time of day.

### B. The Hero & Newsletter Section

` <section class="hero-section"> `:

The "Hero" is the big, eye-catching part of a website that tells people what you do immediately.

` <div id="subscription-form-container" class="form-hidden"> `:

The class ` form-hidden ` suggests this is invisible until triggered by a button or a timer.

` <input type="email" ... required> `:

The ` required ` attribute is a built-in HTML feature that prevents form submission if the box is empty.

## 4. The Product Sections

You used the ` <figure> ` tag here, which is excellent practice.

` <section class="product-section"> `:

Groups all products together.

` <div class="product-list"> `:

This is likely a Flexbox or Grid container in your CSS that lines the products up side-by-side.

` <figure> ` and ` <figcaption> `:

This is the semantic way to pair an image with its caption. It tells the computer, "This text describes this specific image."

## 5. The Footer & The "Back to Top"

` ©️ ` :

The HTML code for the copyright symbol (©️).

` <span id="current-year"></span> `:

An empty spot for JavaScript to automatically update the year every January 1st.

` <button id="backToTop">↑</button> `:

A floating button that uses JavaScript to scroll the user back to the top of the page smoothly.

---

# **style.css**

---

## 1. THE FOUNDATION (Global Reset)
This section uses a "Global Reset" to clear out hidden browser defaults, ensuring your site looks identical across all browsers like Chrome, Safari, and Edge[cite: 1, 2].

* [cite_start]`* {` — **The Universal Selector.** This character targets every single HTML tag on your page simultaneously[cite: 3].
    * [cite_start]`box-sizing: border-box;` — **Sizing Logic.** This forces the browser to include padding and borders *inside* the width you set[cite: 4]. [cite_start]It’s like measuring a suitcase from the outside—the contents don't change the size of the bag[cite: 5].
    * [cite_start]`margin: 0;` — **Resetting Outer Space.** This removes the default "invisible" gaps that browsers add around headers and the edges of the page[cite: 3].
    * [cite_start]`padding: 0;` — **Resetting Inner Space.** This removes the default "cushioning" inside elements like buttons or lists[cite: 3].
* `}` — **Closing the Declaration.** This tells the browser these universal instructions are finished.



* `body {` — **The Root Container.** This targets the visible part of the entire document.
    * [cite_start]`font-family: 'Inter', sans-serif;` — **Typography.** It sets 'Inter' as the primary font; if unavailable, it falls back to the system's basic `sans-serif`[cite: 6].
    * [cite_start]`background-color: #F7F4F0;` — **Site Canvas.** Defines a "soft cream/bone" background color for a premium feel[cite: 6, 7].
    * [cite_start]`color: #333333;` — **Text Color.** Sets the default text color to a soft charcoal black[cite: 7].
    * [cite_start]`overflow-x: hidden;` — **The Layout Safety Net.** This prevents the screen from "shaking" or scrolling sideways if an element accidentally pokes off the edge[cite: 8].
* `}` — **Ends the body declaration.**

---

## 2. THE HEADER (Top Bar Layout)
[cite_start]This section creates a navigation bar at the top of your site using **Flexbox**[cite: 9].

* `.main-header {` — **Class Selector.** Targets the HTML element named "main-header".
    * [cite_start]`display: flex;` — **The Flexbox Engine.** This turns the header into a flexible container, allowing children to sit side-by-side[cite: 9].
    * [cite_start]`align-items: center;` — **Vertical Alignment.** This ensures that the hamburger icon, logo, and cart are all perfectly centered vertically[cite: 10].
    * [cite_start]`padding: 15px 20px;` — **Breathing Room.** Adds 15px of space to the top/bottom and 20px to the left/right inside the header[cite: 11].
    * [cite_start]`border-bottom: 1px solid #E0DEDC;` — **Separation.** Adds a thin, light-gray line to visually separate the header from the page[cite: 11, 12].
    * [cite_start]`box-shadow: 0 2px 10px rgba(0,0,0,0.05);` — **Depth.** Adds a subtle shadow to make the header look like it is floating[cite: 12].
    * [cite_start]`z-index: 1001;` — **Stacking Order.** This high number ensures the header stays "on top" of other images when scrolling[cite: 13].
* `}`

---

## 3. HEADER GROUPS & LOGO
* [cite_start]`.header-left-group {` — Targets the container holding the hamburger and logo together on the left[cite: 14].
    * [cite_start]`display: flex;` — Keeps the icon and logo in a row[cite: 14].
    * [cite_start]`align-items: center;` — Centers them vertically relative to each other[cite: 14].
    * [cite_start]`gap: 50px;` — **Controlled Space.** Creates a physical 50px gap between the hamburger menu and the logo[cite: 15].
    * [cite_start]`flex: 1;` — **Proportion Logic.** This tells this group to take up 1/4th of the header width[cite: 16].
* `}`

* `.header-logo {` — Targets the logo image.
    * `height: 100px;` — Sets the vertical size.
    * `width: 100px;` — Sets the horizontal size.
    * [cite_start]`object-fit: contain;` — **Visual Integrity.** Ensures your logo isn't squished or stretched[cite: 17].
    * [cite_start]`transition: transform 0.8s ease-in-out;` — **Animation Prep.** Prepares the logo for a smooth "Spin" animation[cite: 18].
* `}`

---

## 4. BRANDING & CART
* `.brand-name {` — Targets the main shop title.
    * [cite_start]`flex: 2;` — **Center Logic.** Takes up 2/4th of the space, forcing the brand name to the center of the header[cite: 19].
    * [cite_start]`text-align: center;` — Centers the text within its container[cite: 20].
    * [cite_start]`font-family: 'Poppins', sans-serif;` — Switches the title font to Poppins[cite: 20].
    * [cite_start]`font-size: clamp(1.5rem, 4vw, 3.5rem);` — **Fluid Typography.** This (Minimum size, Dynamic size, Maximum size) formula scales the font automatically based on screen width[cite: 21, 22].
    * [cite_start]`white-space: nowrap;` — **Layout Rule.** Prevents the brand name from breaking into two lines[cite: 22].
* `}`

* `.cart-icon {` — Targets the shopping cart link.
    * [cite_start]`flex: 1;` — Balances the right side width with the left side[cite: 23].
    * [cite_start]`text-align: right;` — Pushes the icon to the far right[cite: 23].
    * [cite_start]`font-size: 1.8rem;` — Sets a large icon size[cite: 24].
    * [cite_start]`text-decoration: none;` — Removes the standard blue link underline[cite: 24].
    * [cite_start]`cursor: pointer;` — Changes the mouse cursor to a "hand" icon[cite: 24].
* `}`

---

## 5. BANNER & GREETING
* `.cohort-link {` — Targets the promotional banner.
    * [cite_start]`text-align: center;` — Centers the text within the banner[cite: 25].
    * [cite_start]`padding: 15px 0;` — Adds 15px of internal vertical space[cite: 25].
    * [cite_start]`margin: 10px 0;` — Adds external spacing above and below the banner[cite: 25].
    * [cite_start]`border: 2px dashed #8B4513;` — **Style.** Creates a "vintage coupon" dashed look[cite: 26].
    * [cite_start]`background-color: #F0F0F0;` — Sets a light-gray banner background[cite: 26].
* `}`

* `.cohort-link a {` — Targets the link inside that banner.
    * [cite_start]`color: #1e90ff !important;` — **Force Rule.** Forces the link to be brand blue, overriding other settings[cite: 27].
    * [cite_start]`font-weight: 700;` — Makes the link text extra bold[cite: 27].
* `}`

* `#greeting-container {` — **ID Selector.** Targets the unique greeting text area.
    * [cite_start]`text-align: center;` — Centers the greeting message[cite: 28].
    * [cite_start]`margin: 20px 0;` — Adds vertical spacing around the greeting[cite: 28].
    * [cite_start]`font-size: 1.2rem;` — Sets text size[cite: 28].
    * [cite_start]`font-weight: 600;` — Sets semi-bold weight[cite: 28].
* `}`

---

## 6. THE HAMBURGER (Menu Icon)
[cite_start]This builds the "three lines" for mobile navigation[cite: 29].

* `.menu-icon {` — Targets the icon container.
    * [cite_start]`display: flex;` — Uses Flexbox[cite: 30].
    * [cite_start]`flex-direction: column;` — **The Stack.** Stacks the 3 lines vertically[cite: 30].
    * [cite_start]`gap: 5px;` — Puts 5px of space between the lines[cite: 30].
    * [cite_start]`cursor: pointer;` — Makes it feel clickable[cite: 30].
* `}`

* [cite_start]`.menu-icon span {` — Targets the 3 individual lines[cite: 31].
    * [cite_start]`width: 25px;` — Sets the line width[cite: 31].
    * [cite_start]`height: 3px;` — Sets the line thickness[cite: 31].
    * [cite_start]`background-color: #333;` — Colors the lines dark gray[cite: 31].
    * [cite_start]`transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);` — **The Physics Engine.** Adds a "bounce" effect when the menu lines move[cite: 32, 33].
* `}`

---

## 7. ANIMATION LOGIC (The "X")
[cite_start]These rules activate the transition from 3 lines to an "X" when the menu is clicked[cite: 34].

* `.menu-icon.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); [cite_start]}` — Moves the top line down and tilts it 45 degrees[cite: 34].
* `.menu-icon.active span:nth-child(2) { opacity: 0; [cite_start]}` — **Hiding Logic.** Makes the middle line completely invisible[cite: 35].
* `.menu-icon.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); [cite_start]}` — Moves the bottom line up and tilts it 45 degrees in the opposite direction[cite: 36].

---

## 8. THE NAVIGATION LIST
* [cite_start]`.main-nav {` — Targets the actual dropdown menu list[cite: 36].
    * [cite_start]`display: none;` — **Hidden State.** Hidden by default until JavaScript toggles the '.active' class[cite: 36].
    * [cite_start]`position: absolute;` — **Overlay Logic.** Allows the menu to float over the rest of your content[cite: 37].
    * [cite_start]`top: 100%;` — Pins the menu to start at the bottom of the header[cite: 38].
    * [cite_start]`left: 0;` — Aligns it to the left edge[cite: 38].
    * [cite_start]`width: 100%;` — Stretches the menu across the full width[cite: 38].
    * [cite_start]`background-color: #F7F4F0;` — Sets the menu background color[cite: 38].
    * [cite_start]`padding: 30px 0;` — Adds vertical room inside the menu[cite: 39].
    * [cite_start]`box-shadow: 0 15px 35px rgba(0,0,0,0.1);` — Adds a deep shadow for depth[cite: 39].
* `}`

* `.main-nav.active { display: block; [cite_start]}` — **The Reveal.** Shows the menu when activated[cite: 40].

---

## 9. MENU LINKS
* [cite_start]`.main-nav a {` — Controls the styling of the links (Shop, About, etc.) inside the menu[cite: 41].
    * [cite_start]`display: block;` — Makes each link take up its own full line[cite: 41].
    * [cite_start]`padding: 15px 20px;` — Sets the size of the clickable area[cite: 41].
    * [cite_start]`text-decoration: none;` — Removes underlining[cite: 41].
    * [cite_start]`color: #333;` — Sets the text color[cite: 41].
    * [cite_start]`font-weight: 500;` — Sets medium text weight[cite: 41].
    * [cite_start]`transition: all 0.3s ease;` — **Smooth Glue.** Makes hover effects look smooth[cite: 42, 43].
* `}`

* [cite_start]`.main-nav a:hover {` — Activates when the mouse cursor sits on top of a link[cite: 44].
    * [cite_start]`background-color: #F0EDE9;` — Subtle background change to show selection[cite: 44, 45].
    * [cite_start]`color: #1e90ff;` — Turns the text blue on hover[cite: 45].
    * [cite_start]`padding-left: 30px;` — **Slide Animation.** Creates a "slide-right" effect[cite: 46].
* `}`

* [cite_start]`.main-nav a:active {` — Activates the split-second you click the link[cite: 47].
    * [cite_start]`background-color: #E0DEDC;` — Darkens the background during the click[cite: 47, 48].
    * [cite_start]`transform: scale(0.98);` — **Haptic Feel.** Shrinks the text slightly to feel like a real button press[cite: 49].
* `}`

---

## 10. HERO & NEWSLETTER
* [cite_start]`.hero-flex-container {` — Splits the screen into Text (Left) and Form (Right) using Flexbox[cite: 50].
    * [cite_start]`display: flex;` — Activates Flexbox layout[cite: 50].
    * [cite_start]`justify-content: space-between;` — Pushes text and form to opposite ends[cite: 50].
    * [cite_start]`align-items: flex-start;` — Aligns both to the top[cite: 50].
    * [cite_start]`padding: 60px 20px;` — Adds vertical and horizontal spacing[cite: 50].
    * [cite_start]`max-width: 1200px;` — Keeps content centered and prevents over-stretching[cite: 50].
    * [cite_start]`margin: 0 auto;` — Centers the entire container[cite: 50].
    * [cite_start]`gap: 40px;` — Adds space between the text and the form[cite: 51].
* `}`

* `.hero-section { flex: 2; }` — Gives the text side twice as much space as the form side.

* `.hero-title {` — Targets the main headline.
    * [cite_start]`font-family: 'Poppins', sans-serif;` — Sets title font[cite: 51].
    * [cite_start]`font-size: 2.5rem;` — Sets a large font size[cite: 51].
    * [cite_start]`margin-bottom: 50px;` — Adds space below the headline[cite: 51].
    * [cite_start]`line-height: 1.1;` — Keeps lines close together for a bold, modern look[cite: 52].
* `}`

* [cite_start]`.shop-now-btn, #subscribe-btn {` — Consistent styling for all primary action buttons[cite: 53].
    * [cite_start]`display: inline-block;` — Allows buttons to have padding and margin[cite: 53].
    * [cite_start]`padding: 12px 25px;` — Defines button size[cite: 53].
    * [cite_start]`background-color: #1e90ff;` — Sets brand blue color[cite: 53].
    * [cite_start]`color: white;` — Sets text color[cite: 53].
    * [cite_start]`font-weight: bold;` — Makes text bold[cite: 53].
    * [cite_start]`border-radius: 4px;` — Slightly rounds the corners[cite: 53, 54].
    * [cite_start]`text-decoration: none;` — Removes underlining[cite: 54].
    * [cite_start]`border: none;` — Removes default button borders[cite: 54].
    * [cite_start]`cursor: pointer;` — Makes it feel clickable[cite: 54].
* `}`

---

## 11. SUBSCRIPTION FORM
* `#subscription-form-container {` — Targets the newsletter box.
    * [cite_start]`flex: 1;` — Occupies 1/3rd of the hero area[cite: 54].
    * [cite_start]`min-width: 320px;` — Prevents the form from becoming too skinny[cite: 54].
    * [cite_start]`padding: 30px;` — Adds internal room[cite: 54].
    * [cite_start]`border: 1px solid #CFCFCE;` — Adds a thin border[cite: 55].
    * [cite_start]`border-radius: 12px;` — Rounds the corners significantly[cite: 55].
    * [cite_start]`background: #fff;` — Sets a white background[cite: 55].
    * [cite_start]`box-shadow: 0 4px 20px rgba(0,0,0,0.08);` — Adds a soft shadow for depth[cite: 55].
* `}`

* `#subscription-form-container h3 { margin-bottom: 15px; [cite_start]}` — Spacing after the title[cite: 55, 56].
* `#subscription-form-container p { margin-bottom: 20px; [cite_start]}` — Spacing after the paragraph[cite: 56].

* `.email-input-group {` — Container for the input and button.
    * [cite_start]`display: flex;` — Puts input and button side-by-side[cite: 56].
    * [cite_start]`flex-wrap: wrap;` — **Mobile Logic.** Stacks the input and button on small screens[cite: 57].
    * [cite_start]`gap: 20px;` — Spacing between elements[cite: 57].
    * [cite_start]`margin-top: 15px;` — Adds space above the group[cite: 57].
* `}`

* `#userEmail {` — Targets the email entry box.
    * [cite_start]`flex: 1 1 250px;` — Flexible sizing with a 250px baseline[cite: 58].
    * [cite_start]`padding: 15px;` — Makes the box taller for typing[cite: 58].
    * [cite_start]`border: 1px solid #ccc;` — Sets a light gray border[cite: 58].
    * [cite_start]`border-radius: 4px;` — Rounds the input corners[cite: 58].
* `}`

---

## 12. PRODUCT GRID SYSTEM
* [cite_start]`.product-list {` — Targets the main product area[cite: 59].
    * [cite_start]`display: grid;` — **Grid Engine.** Activates the 2D grid layout[cite: 59].
    * [cite_start]`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` — **The Magic Formula.** Automatically decides how many columns fit based on screen width (Minimum 250px)[cite: 60, 61].
    * [cite_start]`gap: 20px;` — Spacing between product cards[cite: 61].
    * [cite_start]`padding: 20px;` — Spacing around the entire grid[cite: 61].
* `}`



---

## 13. PRODUCT DETAILS & EFFECTS
* `.product-image {` — Targets product photos.
    * [cite_start]`width: 120px;` — Sets width[cite: 62].
    * [cite_start]`height: 120px;` — Sets height[cite: 62].
    * [cite_start]`object-fit: cover;` — Ensures photo fills space without distortion[cite: 62].
    * [cite_start]`border-radius: 50%;` — **Shape Logic.** Makes product photos perfect circles[cite: 62, 63].
    * [cite_start]`border: 2px solid #8B4513;` — Adds a brown border[cite: 63].
    * [cite_start]`margin-bottom: 15px;` — Pushes product text down[cite: 63].
* `}`

* [cite_start]`@keyframes logoSpin {` — **The Script.** Defines the spin movement script[cite: 64].
    * `from { transform: rotate(0deg); [cite_start]}` — Starts at 0 degrees[cite: 64].
    * `to { transform: rotate(360deg); [cite_start]}` — Ends at a full circle[cite: 65].
* `}`

* [cite_start]`.header-logo:hover, #hamburger-menu:hover ~ .header-logo {` — **Sibling Logic.** Triggers the spin when you hover the logo OR the menu icon[cite: 65, 66].
    * [cite_start]`animation: logoSpin 0.8s ease-in-out;` — Runs the spin script for 0.8 seconds[cite: 66].
* `}`

* `#backToTop {` — Targets the "Up" button.
    * [cite_start]`display: none;` — **Initial State.** Hidden until user scrolls (controlled by JS)[cite: 66, 67].
    * [cite_start]`position: fixed;` — **Floating Logic.** Button stays pinned to the screen[cite: 67].
    * [cite_start]`bottom: 20px;` — Pins 20px from bottom[cite: 67].
    * [cite_start]`right: 20px;` — Pins 20px from right[cite: 67].
    * [cite_start]`background: #1e90ff;` — Sets background to brand blue[cite: 67, 68].
    * [cite_start]`color: white;` — Makes the icon white[cite: 68].
    * [cite_start]`border: none;` — Removes border[cite: 68].
    * [cite_start]`cursor: pointer;` — Makes it feel clickable[cite: 68].
    * [cite_start]`border-radius: 50%;` — Makes it a circle[cite: 68].
    * [cite_start]`width: 50px;` — Sets button width[cite: 68].
    * [cite_start]`height: 50px;` — Sets button height[cite: 68].
    * [cite_start]`font-size: 20px;` — Sets icon size[cite: 68].
    * [cite_start]`box-shadow: 0 4px 10px rgba(0,0,0,0.2);` — Adds floating shadow[cite: 69].
* `}`

---

## 14. RESPONSIVE DESIGN (Tablets & Phones)
[cite_start]This section triggers when the screen width is 768px or less[cite: 69, 70].

* `@media (max-width: 768px) {` — **The Breakpoint.**
    * `.header-logo { height: 60px; width: 60px; [cite_start]}` — Shrinks the logo for phones[cite: 70, 71, 72].
    * `.header-left-group { gap: 20px; [cite_start]}` — Reduces spacing between menu and logo[cite: 72, 73].
    * `.brand-name { font-size: 1.8rem; white-space: normal; line-height: 1.2; [cite_start]}` — Allows title to wrap to 2 lines on phones[cite: 73, 74, 75, 76].
    * `.hero-flex-container { flex-direction: column; text-align: center; padding: 40px 20px; [cite_start]}` — **The Big Flip.** Stacks text and form vertically[cite: 76, 77, 78].
    * `.hero-title { font-size: 2.2rem; margin-bottom: 30px; [cite_start]}` — Resizes headline for mobile[cite: 78, 79].
    * `#subscription-form-container { width: 100%; min-width: unset; [cite_start]}` — Makes form take full screen width[cite: 79, 80].
* `}`

---

## 15. INTERACTIVE PRODUCT HOVER
* [cite_start]`.product-item {` — Targets each product card[cite: 80].
    * [cite_start]`background: #fff;` — White background[cite: 80].
    * [cite_start]`padding: 20px;` — Adds internal room[cite: 80].
    * [cite_start]`border-radius: 8px;` — Slightly rounds corners[cite: 80, 81].
    * [cite_start]`text-align: center;` — Centers content[cite: 81].
    * [cite_start]`transition: transform 0.3s ease, box-shadow 0.3s ease;` — **Timing.** Controls how fast the 'lift' and 'shadow' appear[cite: 81, 82].
    * [cite_start]`cursor: pointer;` — Makes it feel clickable[cite: 82].
* `}`

* `.product-item:hover {` — Activates on hover.
    * [cite_start]`transform: translateY(-10px);` — **The Lift.** Lifts the card up by 10 pixels[cite: 83, 84].
    * [cite_start]`box-shadow: 0 10px 20px rgba(0,0,0,0.15);` — **Hover Depth.** Spreads shadow for floating look[cite: 84, 85].
* `}`

---

## 16. THE FOOTER (The Bottom of the Page)
* `footer {` — Targets the final section.
    * [cite_start]`text-align: center;` — Centers copyright text[cite: 85, 86].
    * [cite_start]`padding: 50px 20px;` — Adds 50px of breathing room[cite: 86, 87, 88].
    * [cite_start]`border-top: 1px solid #E0DEDC;` — Adds separation line[cite: 88, 89].
    * [cite_start]`background-color: #F7F4F0;` — Matches site "bone" background[cite: 89, 90].
    * [cite_start]`color: #777777;` — Soft gray text color[cite: 90, 91].
    * [cite_start]`font-size: 0.9rem;` — Professional small font size[cite: 91, 92].
    * [cite_start]`width: 100%;` — Takes full screen width[cite: 92].
* `}`

---
**Teaching Tip:** CSS is read from top to bottom. Rules at the bottom (like Media Queries) will override rules at the top if they target the same element!

---

## ` app.js `