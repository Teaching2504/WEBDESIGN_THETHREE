//Click vao doi logo
const logo = document.getElementById('logo');
let clicked = false;

logo.addEventListener('click', () => {
  if (!clicked) {
    logo.src = "assets/WebsiteVaFanpage/logo2.jpg"; // logo mới
    clicked = true;
  } else {
    logo.src = "assets/WebsiteVaFanpage/logo1.jpg"; // trở về logo cũ
    clicked = false;
  }
});