const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

let outputList = [];
for (let i = 0; i < ingredients.length; i++) {
  let element = document.createElement("li");
  element.textContent = ingredients[i];
  element.classList.add("item");
  outputList.push(element);
}

ingredientsList.append(...outputList);

// another valid version
// const list = ingredients
// .map(ingredient => `<li class="item">${ingredient}</li>`)
// .join("");

// ingredientsList.innerHTML = list;
