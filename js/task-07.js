const sizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

sizeControl.addEventListener("input", event => {
    const newSize = event.currentTarget.value;
    console.log(newSize);

    //text.classList.add('font-size');
    text.style.fontSize = newSize  + 'px';
});