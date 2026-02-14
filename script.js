let bodyDOM = document.querySelector('.body-content');
const buttonDOM = document.querySelector('.switch-button');
const colorNameDOM = document.querySelector('.color-name');
let colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let currentColorIndex = 0;

bodyDOM.style.backgroundColor = colorArray[currentColorIndex];
colorNameDOM.style.color = colorArray[currentColorIndex];
colorNameDOM.textContent = colorArray[currentColorIndex];

buttonDOM.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colorArray.length;

    bodyDOM.style.backgroundColor = colorArray[currentColorIndex];
    colorNameDOM.style.color = colorArray[currentColorIndex];
    colorNameDOM.textContent = colorArray[currentColorIndex];
})