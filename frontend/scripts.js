//Click vao doi logo
const logo = document.getElementById('logo');
let clicked = false;

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});