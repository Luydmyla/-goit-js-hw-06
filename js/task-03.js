const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector("ul");
console.log(list);
const listElements = images.map(image => 
  `<li class="list-item"  style = "list-style-type: none">
<img class="img-item" src = "${image.url}" alt = "${image.alt}" width = "480"  /> 
  </li>`
// const listElem = document.createElement('li');
// // console.log(listElem);
//   // listElem.classList.add('item');
  // const imgElem = document.createElement('img')
//   imgElem.src = image.url;
//   imgElem.alt = image.alt;
//   // console.log(imgElem);
 
//   listElem.appendChild(imgElem);
//   console.log(listElem);
   // return listElem;
 )
  .join("");
  // listElements.classList = 
  list.insertAdjacentHTML("beforeend", listElements);
console.log(list);
// const listElem = document.createElement('li');
//   const imgElem = document.createElement('img')
//   imgElem.src = images.url;
// imgElem.alt = images.alt;
//   listElem.appendChild(imgElem);
//   console.log(listElem);