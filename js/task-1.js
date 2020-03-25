"use strict";

const listCategories = document.querySelectorAll("#categories li.item");
console.log(`В списке ${listCategories.length} категории`);
const list = document.querySelectorAll(".item");
list.forEach(item =>
  console.log(`В категории "${item.children[0].innerText}" находится ${item.children[1].children.length} элементов`));
