const fontRange = document.getElementById("font-size-control");
const outputText = document.getElementById("text");

fontRange.addEventListener("input", (event) => {
 outputText.style.fontSize = `${event.currentTarget.value}px`;
})