function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputDiv = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes() {
  let width = 30;
  let height = 30;
  let boxesArray = [];
  if (1 <= Number(inputDiv.value) <= 100) {
    for (let i = 0; i < Number(inputDiv.value); i++) {
      const newBox = document.createElement("div");
      newBox.style.width = `${width}px`;
      newBox.style.height = `${height}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxesArray.push(newBox);
      width += 10;
      height += 10;
    }
  }
  boxes.append(...boxesArray);
  inputDiv.value = "";
}

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
  inputDiv.value = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
