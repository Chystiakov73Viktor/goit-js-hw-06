function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divElement = document.querySelector("#controls");
const inputElement = divElement.firstElementChild;
const buttonCreateElement = document.querySelector("[data-create]");
const buttonDestroyElement = document.querySelector("[data-destroy]");
const boxesElement = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let elem = document.createElement("div");
    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + 10 * i + "px";
    elem.style.backgroundColor = getRandomHexColor();

    boxesElement.append(elem);
  }
}

buttonCreateElement.addEventListener("click", createElements);
function createElements() {
  let amount = inputElement.value;
  createBoxes(amount);
}

buttonDestroyElement.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesElement.innerHTML = "";
}
