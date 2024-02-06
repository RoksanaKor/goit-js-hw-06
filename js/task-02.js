const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

// const list = ingredients
// .map(ingredient => `<li class="item">${ingredient}</li>`)
// .join("");

// ingredientsList.innerHTML = list;

const element1 = document.createElement('li');
const element2 = document.createElement('li');
const element3 = document.createElement('li');
const element4 = document.createElement('li');
const element5 = document.createElement('li');
const element6 = document.createElement('li');
element1.classList.add('link');
element2.classList.add('link');
element3.classList.add('link');
element4.classList.add('link');
element5.classList.add('link');
element6.classList.add('link');
element1.textContent = ingredients[0];
element2.textContent = ingredients[1];
element3.textContent = ingredients[2];
element4.textContent = ingredients[3];
element5.textContent = ingredients[4];
element6.textContent = ingredients[5];


ingredientsList.append(element1,element2,element3,element4,element5,element6);

