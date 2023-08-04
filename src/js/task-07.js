const inputElement = document.querySelector("#font-size-control");
const spanElement = document.querySelector("#text");

inputElement.addEventListener("input", oninput);
function oninput(evt) {
  let newSpanElement = evt.currentTarget.value;
  console.log(newSpanElement);
  spanElement.style.fontSize = `${newSpanElement}px`;
}
