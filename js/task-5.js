function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const bodyElement = document.body;
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', function () {
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;

  colorSpan.style.color = randomColor; 
});
