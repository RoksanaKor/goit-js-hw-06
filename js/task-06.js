const inputToValidate = document.getElementById("validation-input");

const numberValue = Number(inputToValidate.dataset.length);

inputToValidate.addEventListener("input", () => {
  if (inputToValidate.value.length === numberValue) {
    inputToValidate.classList.replace("invalid", "valid");
  } else {
    inputToValidate.classList.add("invalid");
  }
});
