//Branding elements
const mainLogo = document.getElementById('main-logo');
const announcement = document.getElementById('announcement');
const footerLogo = document.getElementById('footer-logo');

mainLogo.src = 'assets/logo.png';
footerLogo.src = 'assets/logo.png';
announcement.innerText = 'CHÀO MỪNG KỶ NIỆM 35 NĂM NGÀY THÀNH LẬP TRƯỜNG ĐẠI HỌC MỞ THÀNH PHỐ HỒ CHÍ MINH (15/06/1990 - 15/06/2025)';

//Thanh cong cu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

//Click vao doi logo
const logo = document.getElementById('logo');
let clicked = false;

logo.addEventListener('click', () => {
  if (!clicked) {
    logo.src = "assets/WebsiteVaFanpage/logo2.jpg";
    clicked = true;
  } else {
    logo.src = "assets/WebsiteVaFanpage/logo1.jpg";
    clicked = false;
  }
});
