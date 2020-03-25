'use strict'

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
  function fun1(e) {
  span.style.fontSize = e.currentTarget.value +'px';
}
input.addEventListener("change", fun1);

