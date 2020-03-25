"use strict";

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", changeSpan);

function changeSpan (e){
  if( e.currentTarget.value !== ""){
    outputName.textContent = e.currentTarget.value;
  } else {
    outputName.textContent = "незнакомец";
  }
}

// const changeSpan = () =>
//   inputName.value !== "" ? (outputName.textContent = inputName.value) : (outputName.textContent = "незнакомец");

// inputName.addEventListener("input", changeSpan);
