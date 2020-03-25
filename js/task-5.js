"use strict";

const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const changeSpan = () =>
  inputName.value !== ""
    ? (outputName.textContent = inputName.value)
    : (outputName.textContent = "незнакомец");

inputName.addEventListener("input", changeSpan);
