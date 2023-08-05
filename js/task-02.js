const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemEl = document.querySelector("#ingredients");
const elements = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item");
  return li;
});
itemEl.append(...elements);