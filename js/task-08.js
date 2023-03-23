const formEl = document.querySelector('.login-form')
formEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    const { email, password } = evt.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!😉");
    } else {
    const dataUser = {
        email: email.value,
        password: password.value,
    };
        console.log(dataUser)
    }

    evt.currentTarget.reset();

    
}