function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonCreateElem = document.querySelector('button[data-create]');
// console.log(buttonCreateElem);
const buttonDestroyElem = document.querySelector('button[data-destroy]');
// console.log(buttonDestroyElem);
const inputElem = document.querySelector('input');
// console.log(inputElem);
const boxesElem = document.querySelector('#boxes');
// console.log(boxesElem);

function onInput(event) {
  const inputValue = event.currentTarget.value;
  console.log(inputValue);
  return inputValue;
};

function createBoxes(amount) {
  console.log(inputElem.value);
  let width = 30;
let height = 30;
  for (let i = 1; i <= inputElem.value; i += 1) {
  const box = document.createElement("div");
  box.classList.add("new-box");
  box.style.width = `${width}px`;
  box.style.height =`${height}px`;
  box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  boxesElem.append(box); 
   width += 10;
   height += 10;
   console.log(box);
 }
 }

function onClickDestroy() {
inputElem.value = "";
boxesElem.innerHTML = "";
};

inputElem.addEventListener('input', onInput );
buttonCreateElem.addEventListener('click', createBoxes);
buttonDestroyElem.addEventListener('click', onClickDestroy );
