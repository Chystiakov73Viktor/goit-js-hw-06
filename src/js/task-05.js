const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");

inputElement.addEventListener("input", oninput);

function oninput(evt) {
  if (evt.currentTarget.value !== "") {
    spanElement.textContent = evt.currentTarget.value;
  } else {
    spanElement.textContent = "Anonymous";
  }
}
