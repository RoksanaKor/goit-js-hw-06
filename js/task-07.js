const fontRange = document.getElementById("font-size-control");
const outputText = document.getElementById("text");

outputText.style.fontSize = `${fontRange.value}px`;

fontRange.addEventListener("input", (event) => {
  outputText.style.fontSize = `${event.currentTarget.value}px`;
});
