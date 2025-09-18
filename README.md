# WEBDESIGN_THETHREE
## 💻 Tổng quan về dự án

**WEBDESIGN_THETHREE** là dự án thiết kế trang web được thực hiện cho cuộc thi Web Design với chủ đề **“35 năm thành lập Đại học Mở Thành phố Hồ Chí Minh”**. Mục đích là tạo ra những mẫu giao diện (templates/website) sáng tạo, thân thiện với người dùng, đáp ứng được các tiêu chí:

- Thể hiện được bản sắc, hình ảnh, giá trị của trường Đại học Mở TP.HCM trong suốt hành trình 35 năm thành lập và hoạt động.
- Giao diện hiện đại, responsive, tương thích với nhiều thiết bị (máy tính, tablet, điện thoại).
- Dễ dàng tùy chỉnh, dễ triển khai / bảo trì

Dự án gồm các phần:  
- `frontend/`: mã nguồn giao diện (HTML, CSS, JS).
- `backend/`: mã nguồn cho xử lý backend và database (đang phát triển).
- `docs/`: tài liệu, hướng dẫn thiết kế, sử dụng.
- Các file cấu hình, hỗ trợ phát triển, build, deploy sử dụng nền tảng Netlify.

## 💼 Thông tin về nhóm

Tên nhóm: **THE THREE**  
Các thành viên:

| Tên | Vai trò |
|---|---|
| Nguyễn Thị Tuyết Trinh | Trưởng nhóm / Quản lý dự án / Thiết kế frontend |
| Nguyễn Minh Tú | Triển khai ý tưởng / Thiết kế frontend |
| Hoàng Phi Hùng | Đề xuất giao diện / Thiết kế Responsive / Thiết kế frontend |

Liên hệ Trưởng nhóm: 2351010216trinh@ou.edu.vn

## 🎯 Giới thiệu về White Label của dự án

Trong dự án này, **white label** được hiểu là khả năng tái sử dụng, tùy chỉnh giao diện cho các dịp kỷ niệm, dưới tổ chức hay trường học tùy chỉnh mà không cần thay đổi cấu trúc cơ bản. Dưới đây là cách áp dụng white label với dự án này:

1. **Tách phần giao diện và nội dung riêng biệt**  
   - Các thành phần giao diện bao gồm layout, màu sắc, fonts, logo, hình ảnh,... được đặt ở các file và folder riêng biệt: `style.css`, `scripts.js`, folder `/assets/`.  
   - Phần nội dung được hiện thực trực tiếp trên các file `.html`.

2. **Sử dụng biến / cấu hình để thay đổi branding**  
   - Trong file `styles.css` và `scripts.js` chứa các thông tin tùy chỉnh: Logo, slogan, các màu chủ đạo.  
   - Giao diện sử dụng các biến trong CSS và JS để đọc cấu hình này và hiển thị theo.  

3. **Tách thư mục assets linh hoạt**  
   - Các assets như logo, banner, ảnh minh họa nằm trong các thư mục riêng dễ thay thế.  
   - Font chữ, icon dùng thư viện bên ngoài được import linh hoạt để thay bằng thư viện khác nếu cần.

4. **Xây dựng layout component hóa**  
   - Sử dụng component (header, main, footer,...) dễ tái sử dụng và thay thế.  
   - Khi muốn white label, chỉ cần thay component branding (ví dụ header chứa logo, màu của các component,...) là có thể đổi toàn bộ look and feel.

5. **Hướng dẫn người triển khai**
   - Đọc trực tiếp file `README.md` này để hiểu rõ hơn về dự án.
   - Cung cấp tài liệu (`docs/`) rõ ràng cách thay logo, đổi màu chủ đạo, chỉnh sửa slogan, tên tổ chức.  
   - Giải thích cấu trúc file: Những nơi nào cần thay đổi, những nơi nào không nên chỉnh nhiều để đảm bảo responsive.

6. **Kiểm thử & đảm bảo chất lượng sau khi thay branding**  
   - Sau khi thay logo, màu, nội dung thì cần kiểm tra lại: hiển thị trên mobile, tablet, desktop.  
   - Kiểm thử các tương tác (menu, navigation, form nếu có) để chắc mọi thứ vẫn hoạt động tốt.

## 📖 Diễn giải class cho White Label

### 🎨 Design System
- `:root`: Khai báo biến toàn cục cho font, màu chủ đạo, màu phụ, màu nhấn, nền, màu chữ, màu button,...

### 🖼️ Global Layout
- `body`: Thiết lập font mặc định, màu nền toàn trang, layout dạng grid.
- `header`, `.announcement`, `.navigation`: Phần đầu trang, gồm thanh thông báo, logo, menu.
- `main`: Khối nội dung chính, khoảng cách top đã tính cho header cố định.
- `footer`, `footer-flex`, `.footer-container`, `.footer-col`: Footer chuẩn.

### 🏞️ Banner & Logo
- `.banner`, `.banner-image`: Banner hình nền / poster.
- `.banner-logo`: Logo chính giữa banner, có hover effect.

### 📰 Content Container
- `.content-container`: Khối nội dung nền trắng.
- `.content-container-header`: Header của khối (màu chủ đạo).
- `.content-container-content`: Nội dung, text, hình.

### 📊 Cards
- `.stat-card`: Card thống kê (số liệu).
- `.info-card`, `.info-card2`: Card thông tin (giới thiệu thành viên, thông tin nổi bật).

### 🕒 Timeline
- `.timeline-container`, `.timeline-item`, `.timeline-content`: Khung timeline 2 cột.
- `.timeline-date`, `.timeline-event`, `.timeline-`: Thời gian, sự kiện, mô tả.

### 📖 Guestbook
- `.guestbook-container`: Container chính cho sổ lưu bút.
- `.guestbook-container-stats`: Số liệu hiển thị dạng thẻ.
- `.guestbook-container-form`: Form nhập lời nhắn.
- `.guestbook-container-comment`: Danh sách bình luận.

### 🔘 Buttons
- `.custom-button`: Nút chuẩn, sử dụng biến `--button-bg-color` và `--button-text-color`.
- `.gradient-button`: Nút gradient, dùng `--primary-color` và `--accent-color`.

### 🏷️ Logo Frame & Group
- `.logo-frame`: Khung logo bo tròn, dùng cho branding.
- `.group-container`, `.group-image`, `.group-infor`: Thông tin nhóm.
- `.group-title`, `.group-subtitle`: Tên nhóm, slogan.

### 👥 Introduce & Members
- `.introduce-container`: Phần giới thiệu chung.
- `.member-container`, `.member`: Phần hiển thị thành viên nhóm (ảnh, tên, vai trò).

## ✅ Cách áp dụng White Label
1. Chỉ sửa ở `:root` để đổi màu, font, theme → toàn site thay đổi.
2. Thay ảnh logo, banner trong HTML và JS → đổi branding nhanh.
3. Chỉnh text, slogan trong các container `.group-title`, `.footer-col`, `.content-container`,...
4. Không cần đụng đến CSS layout, chỉ quản lý nội dung + biến màu.
---
*© THE THREE - Web Design Contest 2025 - Ho Chi Minh City Open University*