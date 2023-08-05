function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const buttonElement = document.querySelector(".change-color");
const spanElement = document.querySelector(".color");

buttonElement.addEventListener("click", onBodiChangeColor);

function onBodiChangeColor() {
  spanElement.textContent = getRandomHexColor();
  body.style.backgroundColor = `${getRandomHexColor()}`;
}
