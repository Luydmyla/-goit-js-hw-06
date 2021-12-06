const inputElem = document.querySelector('#validation-input');
// console.log(inputElem);
// console.log(inputElem.dataset.length);
inputElem.addEventListener('blur', onInputBlur );
function onInputBlur(event) {
    // console.log(event.currentTarget.value.length);
    inputElem.classList.add('#validation-input');
    if (event.currentTarget.value.length == inputElem.dataset.length) {
        inputElem.classList.remove('invalid');
        inputElem.classList.add('valid');
        // console.log(inputElem);
    } else {
        inputElem.classList.remove('valid');
        inputElem.classList.add('invalid');
        // console.log(inputElem);
        // event.currentTarget.value = '';
    }
}