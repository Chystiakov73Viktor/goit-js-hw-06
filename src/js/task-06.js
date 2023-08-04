const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", () => {
  const inputElementData = Number(inputElement.dataset.length);
  const inputElementValue = Number(inputElement.value.length);
  if (inputElementData === inputElementValue) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
  }
});
