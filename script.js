"use strict";
window.addEventListener("load", initApp);
function initApp() {
  console.log("JS kører");
  const bars = document.querySelectorAll(".bar");
  const firstBar = bars[0];
  const height = 50;
  firstBar.style.height = `${height}px`;
}
