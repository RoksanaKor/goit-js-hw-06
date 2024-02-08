const categories = document.getElementById("categories");
let categoriesNumber = categories.childElementCount;
console.log(`Number of categories: ${categoriesNumber}`);
console.log("");

let list = document.querySelectorAll(".item");
let arrayItems = [...list];
let headings = document.getElementsByTagName("h2");
let listElements = document.querySelectorAll(".item ul");

function consoleElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Category: ${headings[i].innerHTML}`);
    console.log(`Elements: ${listElements[i].childElementCount}`);
    console.log("");
  }
}
consoleElements(arrayItems);
