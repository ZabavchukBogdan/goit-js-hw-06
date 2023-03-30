const formEl = document.querySelector('.login-form')
formEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    const { email, password } = evt.currentTarget.elements.trim();
    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!😉");
    } else {
    const dataUser = {
        email: email.value,
        password: password.value,
    };
    }

    evt.currentTarget.reset();

    
}