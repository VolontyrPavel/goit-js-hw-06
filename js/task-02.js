const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const arrayLi = [];

ingredients.forEach (ingredient => {
  const ingredientList = document.createElement('li');
  ingredientList.textContent = ingredient;
  ingredientList.classList.add('item');
  arrayLi.push(ingredientList);
})

list.append(...arrayLi);
