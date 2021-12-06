function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonCreateElem = document.querySelector('button[data-create]');
console.log(buttonCreateElem);
const buttonDestroyElem = document.querySelector('button[data-destroy]');
console.log(buttonDestroyElem);
const inputElem = document.querySelector('input');
console.log(inputElem);
const boxesElem = document.querySelector('#boxes');
console.log(boxesElem);

function onInput(event) {
  const amount = event.currentTarget.value;
  console.log(amount);
  return amount;
 };
function createBoxes(amount) {
  
}
function onClickCreate() {
  // let i = 0;
  // while (i < amount) {
  //   createBoxes(i);
  const box = document.createElement("div");
  box.classList.add("new-box");
  box.style.width = "30px";
  box.style.height = "30px";
  box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    boxesElem.append(box);
    // i += 1;
    console.log(box);
    
    // }
  
};

function onClickDestroy() {
  const newBox = document.querySelector(".new-box");
  console.log(newBox);
  newBox.remove();
//  console.log(event.currentTarget.value); 

};

inputElem.addEventListener('input', onInput );
buttonCreateElem.addEventListener('click', onClickCreate);
buttonDestroyElem.addEventListener('click', onClickDestroy );
