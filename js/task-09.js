function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const currentBodyColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  let chosenColor = getRandomHexColor();
  document.body.style.backgroundColor = chosenColor;
  currentBodyColor.textContent = chosenColor;
});
