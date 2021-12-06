const bodyElem = document.querySelector('body');
// console.log(bodyElem);
const buttonElem = document.querySelector('button');
// console.log(buttonElem);
const spanElem = document.querySelector('.color');
// console.log(spanElem);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonElem.addEventListener('click', onClickButton);
function onClickButton() {
   bodyElem.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//  console.log(bodyElem.style.backgroundColor); 
   spanElem.textContent = bodyElem.style.backgroundColor;
   console.log(spanElem.textContent) ;
};