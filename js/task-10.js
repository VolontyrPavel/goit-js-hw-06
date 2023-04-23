function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes (amount) {

  let width = 30;
  let height = 30;
  
  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();

    box.classList.add('box');
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    width += 10;
    height += 10;

    boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.querySelectorAll('.box').forEach(item => item.remove());

}

const inputNumber = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
let amount = 0;

inputNumber.addEventListener('input', ev => amount = ev.currentTarget.value);
inputNumber.addEventListener('blur', () => inputNumber.value = '');
create.addEventListener ('click', () => createBoxes(amount));
destroy.addEventListener ('click', () => destroyBoxes());
