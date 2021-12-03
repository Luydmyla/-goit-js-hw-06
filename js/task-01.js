const listElem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listElem.length}`);
// console.log(listElem);
for (let elem of listElem) {
    const listTitle = elem.querySelector('h2');
    console.log('Category:', listTitle.textContent);
    const listChild = elem.querySelectorAll('li');
    console.log('Elements:', listChild.length);
}
