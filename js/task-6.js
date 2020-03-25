"use strict";
const input = document.querySelector("#validation-input");
const inputLength = Number(input.getAttribute("data-length"));
input.addEventListener("blur", changeColor);
function changeColor(e) {
  const input = e.currentTarget;
  if (input.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  console.log(input);
  console.log(inputLength);
}

// const changeColor = () => {
//   input.value.length >= inputLength ? input.classList.add("valid") : input.classList.add("invalid");
// };
// input.addEventListener("blur", changeColor);
