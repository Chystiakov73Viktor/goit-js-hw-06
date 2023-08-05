const inputElement = document.querySelector("#font-size-control");
const spanElement = document.querySelector("#text");

inputElement.addEventListener("input", onElementFontSize);
function onElementFontSize(evt) {
  let newSpanElement = evt.currentTarget.value;
  console.log(newSpanElement);
  spanElement.style.fontSize = `${newSpanElement}px`;
}
