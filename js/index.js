const menuToggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("mostrar");
});

const close = document.querySelector("nav");
close.addEventListener("click", () => {
  menu.classList.remove("mostrar");
});

// close toggle outside click
