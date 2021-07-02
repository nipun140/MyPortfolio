const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const firstSlider = document.querySelector(".slider.first");
const secondSlider = document.querySelector(".slider.second");
const thirdSlider = document.querySelector(".slider.third");
const fourthSlider = document.querySelector(".slider.fourth");
const fifthSlider = document.querySelector(".slider.fifth");
const sliders = document.querySelectorAll(".slider");
const modalMenu = document.querySelector(".modalMenu");

let timeoutIds = [];

function showSlides() {
  console.log("showslide");
  let timeoutId1 = setTimeout(() => {
    firstSlider.classList.add("animateSlider");
  }, 500);
  timeoutIds.push(timeoutId1);

  let timeoutId2 = setTimeout(() => {
    secondSlider.classList.add("animateSlider");
  }, 700);
  timeoutIds.push(timeoutId2);

  let timeoutId3 = setTimeout(() => {
    thirdSlider.classList.add("animateSlider");
  }, 900);
  timeoutIds.push(timeoutId3);

  let timeoutId4 = setTimeout(() => {
    fourthSlider.classList.add("animateSlider");
  }, 1100);
  timeoutIds.push(timeoutId4);

  let timeoutId5 = setTimeout(() => {
    fifthSlider.classList.add("animateSlider");
  }, 1300);
  timeoutIds.push(timeoutId5);
}

openBtn.addEventListener("click", () => {
  modalMenu.classList.remove("animateClose");
  modalMenu.classList.add("animateOpen");
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
  showSlides();
});

closeBtn.addEventListener("click", () => {
  modalMenu.classList.remove("animateOpen");
  modalMenu.classList.add("animateClose");
  //remove animate class from all sliders once close is pressed
  for (i = 0; i < sliders.length; ++i) {
    sliders[i].classList.remove("animateSlider");
  }

  //   remove timeoutIds of all
  timeoutIds.forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});
