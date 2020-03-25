'use strict'

const element = document.querySelector('ul');
const fragment = document.createDocumentFragment();
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

ingredients.forEach(function(ingredient) {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('listItem');
    fragment.appendChild(li);
});

element.appendChild(fragment);



