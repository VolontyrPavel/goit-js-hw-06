const numberOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach (elem => {
    const nameOfCategories = elem.querySelector('h2');
    console.log(`Category: ${nameOfCategories.textContent}`);

    const amountOfElements = elem.querySelectorAll('li')
    console.log(`Elements: ${amountOfElements.length}`);
})


