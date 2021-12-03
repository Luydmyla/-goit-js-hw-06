const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients);
const ingredientsElem = document.querySelector('ul');
ingredientsElem.classList.add('ingredients');
console.log(ingredientsElem);
const liElements = ingredients.map(ingredient => {
const listElem = document.createElement('li');
listElem.textContent = (`${ingredient}`) ;
listElem.classList.add('item');
  return listElem;
})
console.log(liElements);
ingredientsElem.append(...liElements);
 