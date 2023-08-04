const spanElement = document.querySelector("#value");
const increment = document.querySelector("[data-action='increment']");
const decrement = document.querySelector("[data-action='decrement']");

increment.addEventListener('click', onIncrement);
decrement.addEventListener('click', onDecrement);
let counterValue = 0;

function onIncrement() {
    counterValue += 1;
    spanElement.innerHTML = counterValue;
};

function onDecrement() {
    counterValue -= 1;
    spanElement.innerHTML = counterValue;
};