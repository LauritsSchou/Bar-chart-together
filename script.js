"use strict";
window.addEventListener("load", initApp);

const data = [16, 25, 6, 22, 11, 4, 7, 15, 19, 1, 6, 31, 19, 11, 9, 8, 2, 29, 31, 18, 7, 17, 3, 22, 6, 21, 26, 14, 24, 4, 11, 22, 17, 20, 10, 29, 20, 22, 26, 25];

function initApp() {
  console.log("JS is running");
  displayData();
}
function displayData() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < 40; i++) {
    const currentBar = bars[i];
    const height = (data[i] / 32) * 100;
    currentBar.style.height = `${height}px`;
  }
}
function updateData() {
  data.push(9);
  data.shift();
}
