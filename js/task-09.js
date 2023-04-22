function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const pressBtn = document.querySelector('button');
const body = document.querySelector('body');
const color = document.querySelector('span')

pressBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();

  body.style.backgroundColor = newColor;

  color.textContent = newColor;
})
