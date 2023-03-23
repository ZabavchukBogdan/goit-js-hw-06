function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorBtn = document.querySelector('.change-color')
const colorHex = document.querySelector('.color')

colorBtn.addEventListener('click',changeHexColor)


function changeHexColor(evt) {
  document.body.style.background = getRandomHexColor();
  colorHex.textContent = getRandomHexColor();
};








