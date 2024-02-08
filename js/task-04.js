const counterValue = document.getElementById("value");
counterValue.innerHTML = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", () => {
  counterValue.innerHTML--;
  console.log(counterValue.innerHTML);
});

incrementBtn.addEventListener("click", () => {
  counterValue.innerHTML++;
  console.log(counterValue.innerHTML);
});
