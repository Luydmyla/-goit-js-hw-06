const counterValueElem = document.querySelector('#value');
let counterValue = + counterValueElem.textContent;
console.log(counterValue);

const refs = {
btnDecrementElem: document.querySelector('[data-action="decrement"]'),
btnIncrementElem: document.querySelector('[data-action="increment"]'),
}

const onBtnIncrementClick = () => {
    counterValue += 1;
    console.log(counterValue);
    counterValueElem.textContent = counterValue;
};

const onBtnDecrementClick = () => {
    counterValue -= 1;
    console.log(counterValue);
    counterValueElem.textContent = counterValue;
};
refs.btnDecrementElem.addEventListener("click", onBtnDecrementClick);
refs.btnIncrementElem.addEventListener("click", onBtnIncrementClick);


