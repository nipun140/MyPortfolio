///////////////////////////////////////////////// welcome div//////////////////////////////////////
var letterC1 = document.querySelector("#contact .letters.C1");
var letterO = document.querySelector("#contact .letters.O");
var letterN = document.querySelector("#contact .letters.N");
var letterT1 = document.querySelector("#contact .letters.T1");
var letterA = document.querySelector("#contact .letters.A");
var letterC2 = document.querySelector("#contact .letters.C2");
var letterT2 = document.querySelector("#contact .letters.T2");

setTimeout(() => {
  letterC1.classList.add("animateShow");
}, 200);
setTimeout(() => {
  letterO.classList.add("animateShow");
}, 400);
setTimeout(() => {
  letterN.classList.add("animateShow");
}, 600);
setTimeout(() => {
  letterT1.classList.add("animateShow");
}, 800);
setTimeout(() => {
  letterA.classList.add("animateShow");
}, 1000);

setTimeout(() => {
  letterC2.classList.add("animateShow");
}, 1200);
setTimeout(() => {
  letterT2.classList.add("animateShow");
}, 1400);

////////////////////////////////////////////////form///////////////////////////////////////////////////
const inputArr = document.querySelectorAll(".input-field .field");

inputArr.forEach((input) => {
  input.addEventListener("focus", (e) => {
    const focusedInput = e.target;
    const icon = focusedInput.previousElementSibling;
    input.classList.add("on-focus-input");
    icon.classList.add("on-focus-icon");
  });

  input.addEventListener("blur", (e) => {
    const focusedInput = e.target;
    const icon = focusedInput.previousElementSibling;
    input.classList.remove("on-focus-input");
    icon.classList.remove("on-focus-icon");
  });
});
