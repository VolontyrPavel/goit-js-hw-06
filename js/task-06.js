const textInput = document.querySelector('#validation-input');
const numberCheck = +textInput.dataset.length;

const checkString = (event => {
    const lengthEnteredString = event.target.value.trim().length;
    if (lengthEnteredString === numberCheck) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
})

textInput.addEventListener('blur', checkString);