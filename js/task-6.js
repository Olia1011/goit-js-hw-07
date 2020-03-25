"use strict";
const input = document.querySelector("#validation-input");
const inputLength = Number(input.getAttribute("data-length"));

const changeColor = () => {
  input.value.length >= inputLength ? input.classList.add("valid") : input.classList.add("invalid");
};
input.addEventListener("blur", changeColor);
