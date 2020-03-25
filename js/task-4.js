'use strict'

let clickCount = 0;
const incrementButton = document.querySelector('button[data-action=increment]');
const decrementButton = document.querySelector('button[data-action=decrement]');
const spanContent = document.querySelector('#value');

function counterIncrement (element){
    spanContent.textContent = clickCount +=1;
}
function counterDecrement (element){
    spanContent.textContent = clickCount -=1;
}

incrementButton.addEventListener('click', counterIncrement)
decrementButton.addEventListener('click', counterDecrement)