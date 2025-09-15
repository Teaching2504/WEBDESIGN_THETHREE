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

async function loadComments() {
  const container = document.querySelector(".guestbook-container-comment");
  container.innerHTML = ""; // Xóa nội dung cũ

  try {
    // Đọc file JSON
    const response = await fetch("comments.json");
    const comments = await response.json();

    comments.forEach((comment) => {
      // Tạo phần tử HTML
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");

      commentDiv.innerHTML = `
        <div class="comment-header">
          <p class="comment-name">${comment.name}</p>
          <div class="comment-subcription">
            <p>${comment.role} - ${comment.company}</p>
            <p>${comment.time}</p>
          </div>
        </div>
        <p class="comment-text">${comment.comment}</p>
        <div class="comment-footer">
          <a href="#">Chỉnh sửa</a> 
          <a href="#">Xóa</a>
        </div>
      `;

      // Thêm vào container
      container.appendChild(commentDiv);
    });
  } catch (error) {
    console.error("Không thể tải comment.json:", error);
    container.innerHTML = "<p>Lỗi tải bình luận.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadComments);