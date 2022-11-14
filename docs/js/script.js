"use strict";

// function qs(element) {
//    let newEl = document.querySelector(element);
//    if (newEl) return newEl;
// }
// function qa(element) {
//    let newEl = document.querySelectorAll(element);
//    if (newEl) return newEl;
// }

// import {} from "./lazy.js";
// import {} from "./menu.js";
// import {} from "./spoiler.js";
// import {} from "./accordion.js";
// import {} from "./animate.js";
// import {} from "./pop-up-video.js";
// import {} from "./pop-up.js";
// import {} from "./slider.js";

let rings = document.querySelectorAll(".ring__wrapper");
rings.forEach((el) => {
   let random = Math.floor(Math.random() * 360);
   // el.style.transform = `translate(-50%,-50%) rotate(${random}deg)`;
});
let startButton = document.querySelector(".ring__button");
// setTimeout(() => {
//    startButton.textContent = `Запуск через 3`;
//    setTimeout(() => {
//       startButton.textContent = `Запуск через 2`;
//       setTimeout(() => {
//          startButton.textContent = `Запуск через 1`;
//          setTimeout(() => {
//          //   тут
//          }, 1000);
//       }, 1000);
//    }, 1000);
// }, 1000);
startButton.addEventListener("click", twist);
let maxDeg = 360 * 3;
function twist(e) {
   rings.forEach((el) => {
      let random = Math.floor(Math.random() * maxDeg);
      while (random < maxDeg / 2) {
         random = Math.floor(Math.random() * maxDeg);
      }
      el.style.transition = `transform 3s ease 0s`;
      el.style.transform = `translate(-50%,-50%) rotate(${random}deg)`;
   });
}
