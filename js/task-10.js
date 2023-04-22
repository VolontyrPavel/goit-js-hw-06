function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-create]');

inputNumber.addEventListener('input', event => {
  let amount = event.currentTarget.value;
});

create.addEventListener('click', createBoxes)

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    let div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
  }
}

