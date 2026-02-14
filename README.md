# Interactive Color Flipper 🎨

A dynamic web application that generates random colors and applies them to the background in real-time. This project focuses on DOM manipulation, hexadecimal color generation, and interactive UI updates.

## 🚀 Live Demo
[View Live Site](https://daniel-chijioke.github.io/Color-Flipper/)

## ✨ Key Features
* **Random Hex Color Generation:** Implements a logic-driven system that selects characters from a 16-element array to construct valid hexadecimal color codes.
* **Dynamic DOM Manipulation:** Real-time updates to the document's background color and text display upon user interaction.
* **Efficient Logic Loop:** Uses a `for` loop to generate six-digit hex codes, ensuring a virtually infinite variety of color combinations.
* **Clean & Professional UI:** Features a minimalist design with a clear navigation bar, focus-centered action button, and a responsive layout.
* **Integrated Branding:** Includes a custom favicon to ensure a complete and professional browser tab appearance.

## 🛠️ Technologies Used
* **HTML5:** Structural foundation for the interactive elements and display.
* **CSS3:** Custom styling for button states, layout centering, and aesthetic consistency.
* **JavaScript (ES6):** Functional programming for color generation logic and event listeners.

## 📂 Project Structure
* `index.html` - The structural entry point.
* `style.css` - Custom UI aesthetics and layout rules.
* `script.js` - Logic for hex code generation and background transitions.
* `favicon.png` - Branded browser icon for a professional finish.

## 🧠 Technical Insight
For this project, I chose to use a character array containing numbers `0-9` and letters `A-F`. This allowed me to practice using `Math.random()` and `Math.floor()` to pick indices from the array and build a string dynamically, which is a fundamental skill in creating unpredictable, data-driven interfaces.
