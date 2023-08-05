const itemEl = document.querySelector("#categories");
console.log(`Number of categories: ${itemEl.children.length}`);

[...itemEl.children].forEach((number) => {
  console.log(`Category: ${number.firstElementChild.textContent}`);
  console.log(`Elements: ${number.lastElementChild.children.length}`);
});
