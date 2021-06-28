///////////////////////////////////////////////// welcome div//////////////////////////////////////
var letterP = document.querySelector(".letters.P");
var letterR = document.querySelector(".letters.R");
var letterO = document.querySelector(".letters.O");
var letterJ = document.querySelector(".letters.J");
var letterE1 = document.querySelector(".letters.E1");
var letterC = document.querySelector(".letters.C");
var letterT = document.querySelector(".letters.T");
var letterS = document.querySelector(".letters.S");
let count = 0;

setTimeout(() => {
  letterP.classList.add("animateShow");
}, 600);
setTimeout(() => {
  letterR.classList.add("animateShow");
}, 800);
setTimeout(() => {
  letterO.classList.add("animateShow");
}, 1000);
setTimeout(() => {
  letterJ.classList.add("animateShow");
}, 1200);
setTimeout(() => {
  letterE1.classList.add("animateShow");
}, 1400);
setTimeout(() => {
  letterC.classList.add("animateShow");
}, 1600);
setTimeout(() => {
  letterT.classList.add("animateShow");
}, 1800);
setTimeout(() => {
  letterS.classList.add("animateShow");
}, 2000);

// number increase
var intervalId;
letterS.addEventListener("webkitAnimationEnd", () => {
  intervalId = setInterval(() => {
    increaseCount();
  }, 200);
});

function increaseCount() {
  count++;
  if (count == 20) {
    document.getElementById("countSpan").innerHTML = "15+";
    clearInterval(intervalId);
  } else {
    document.getElementById("countSpan").innerHTML = " " + count;
  }
}
