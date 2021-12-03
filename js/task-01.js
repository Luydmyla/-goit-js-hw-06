// const listElem = document.querySelectorAll('.item');
// console.log(listElem);
// console.log(`Number of categories: ${listElem.length}`);
// console.log(listElem);
// for (let elem of listElem) {
//     const listTitle = elem.querySelector('h2');
//     console.log('Category:', listTitle.textContent);
//     const listChild = elem.querySelectorAll('li');
//     console.log('Elements:', listChild.length);
// }

const listEl = document.querySelectorAll('.item');
// console.log(listEl);
console.log(`Number of categories: ${listEl.length}`);
listEl.forEach(element => {
    // console.log(element);
    const TitleEl = element.firstElementChild;
    console.log('Category:', TitleEl.textContent);
     const listChild = element.querySelectorAll('li');
     // const liElChild = element.lastElementChild;
    // console.log(liElChild);
    console.log('Elements:', listChild.length);
});
