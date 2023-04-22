const inputForm = document.querySelector('form');

inputForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = inputForm.elements.email.value;
    const passValue = inputForm.elements.password.value;

    if (emailValue === '' || passValue === '') {
        const alert = `<h4 style='color: red'>all fields must be filled</h4>`;
        inputForm.insertAdjacentHTML('beforeend', alert);
    }
    else {
        const userData = {
            email: emailValue,
            password: passValue,
        }

        console.log(userData);
    }
    inputForm.reset();
})
