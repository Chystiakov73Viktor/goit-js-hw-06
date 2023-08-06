const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (!email || !password) {
    return alert("the form has blank fields");
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  formElement.reset();
}
