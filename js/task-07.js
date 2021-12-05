const inputElem = document.querySelector('#font-size-control');
// console.log(inputElem);
const spanElem = document.querySelector('#text');
// console.log(spanElem);
inputElem.addEventListener('input', onInput );
function onInput(event) {
    // console.log(event.currentTarget.value);  
    // console.log(`${event.currentTarget.value}`);
    spanElem.style.fontSize = `${event.currentTarget.value}px`;
console.log(spanElem);
}