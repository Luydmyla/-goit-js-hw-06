const form = document.querySelector('.login-form');
console.log(form);
let message;
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
// console.log('это сабмит формы');
    const formElements = event.currentTarget.elements;
    // console.dir(formElements);
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === "" || password === "") {
        return alert( message = "Please fill in all the fields!");
    }
    const formData = {
        mail,
        password,
    };
    console.log(formData);
    event.currentTarget.reset();
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log('onFormSubmit -> name', name);
    //     console.log('onFormSubmit -> value', value);
    // });
}