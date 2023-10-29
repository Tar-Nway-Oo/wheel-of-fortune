const marker = document.querySelector(".marker");
const wheel = document.querySelector(".wheel");
const button = document.querySelector(".button");
let degree = 0;

function spinWheel() {

   button.style.pointerEvents = "none";
   degree = Math.floor(5000 + Math.random() * 5000);
   wheel.style.transition = "all 7s ease-out";
   wheel.style.transform = `rotate(${degree}deg)`;

}

function resetWheel() {

   button.style.pointerEvents = "auto";
   wheel.style.transition = "none";
   const newDegree = degree % 360;
   wheel.style.transform = `rotate(${newDegree}deg)`;

}

button.addEventListener("click", spinWheel);
wheel.addEventListener("transitionend", resetWheel);