# Portfolio & Interactive CV — Mai Hoàng Tuấn (ArtCraft Style)

Trang web Portfolio kiêm CV cá nhân tương tác cao của **Mai Hoàng Tuấn** (Lập trình viên Fullstack), lấy cảm hứng từ ngôn ngữ thiết kế **ArtCraft — Controllable AI for Artists**: giao diện tối hiện đại, tương tác chuột thời gian thực, Canvas 2D Particles, Scrollytelling, hiệu ứng Bento Grid Spotlight và kiến trúc Dual-Mode (ArtCraft Mode ⇋ Recruiter CV Mode).

Dự án được tối ưu hóa toàn diện cho việc triển khai trực tiếp lên **Vercel** bằng Next.js App Router, TypeScript và Tailwind CSS.

---

## 🚀 Tính năng nổi bật

1. **Dual-Mode Chuyển đổi linh hoạt:**
   - **ArtCraft Mode (Mặc định):** Trải nghiệm thị giác cao cấp với nền tối `#070709`, vùng sáng Radial Gradient Cam-Đỏ, hiệu ứng hạt Canvas 2D chuyển động mượt theo con trỏ chuột, thẻ Bento Spotlight phát sáng bám viền, khung ảnh 3D Tilt Mesh Gradient.
   - **Recruiter CV Mode:** Giao diện sáng tối giản (Clean Minimalist), tắt các hiệu ứng động nặng để nhà tuyển dụng đọc nhanh nội dung, hỗ trợ phím tắt `Ctrl + P` / nút In trang để xuất thành file PDF chuẩn A4.

2. **Dự án Trọng điểm DNTU-FORUM:**
   - Showcase dạng card điện ảnh với tab phân hệ chức năng tương tác (Hỏi đáp Q&A, Chợ sinh viên, Bạn trọ, Lịch xe buýt, Danh bạ CLB).
   - Tích hợp **ProjectDrawer** mở modal chi tiết sâu, sơ đồ kiến trúc, tech stack và nút truy cập trực tiếp sản phẩm tại: [https://dntu-forum.vercel.app](https://dntu-forum.vercel.app).

3. **Bento Resume Grid:**
   - **Học vấn:** Trường Đại học Công nghệ Đồng Nai (2022 - 2026), Chuyên ngành CNTT, Tiếng Anh B2.
   - **Kỹ năng lập trình:** C++, C#, Java, HTML5, CSS3, TypeScript / JavaScript.
   - **Frameworks & Nền tảng:** Next.js, ASP.NET Core MVC, React Native, Tailwind CSS, Supabase, Vercel.
   - **Sở thích:** Cầu lông, Lập trình, Chụp ảnh với thẻ trực quan.

4. **Liên hệ nhanh:**
   - Sao chép số điện thoại (`0865846074`) và email (`mhtuan.work@gmail.com`) chỉ với 1 click.
   - Nút gọi thoại và gửi mail trực tiếp.

---

## 🛠️ Cài đặt & Chạy Local

```bash
# 1. Cài đặt các gói phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển
npm run dev
```

Mở trình duyệt tại [http://localhost:3000](http://localhost:3000) để trải nghiệm.

### Kiểm tra build sản xuất:
```bash
npm run build
npm run start
```

---

## 🖼️ Hướng dẫn thay thế ảnh đại diện (`/public/avatar.png`)

Dự án đã chuẩn bị sẵn ảnh đại diện tương thích với bảng màu Cam - Đỏ tại đường dẫn `/public/avatar.png`.

Để thay bằng ảnh cá nhân của bạn:
1. Chuẩn bị ảnh chân dung vuông (tỷ lệ 1:1, độ phân giải khuyến nghị từ `500x500` đến `1000x1000` px).
2. Đổi tên ảnh thành `avatar.png`.
3. Chép đè vào thư mục:
   ```text
   public/avatar.png
   ```
4. Khi chạy `npm run dev` hoặc deploy lên Vercel, khung Avatar 3D Tilt Mesh Gradient sẽ tự động nhận ảnh mới ngay lập tức.

---

## 📝 Quản lý dữ liệu CV (`src/data/cv-data.ts`)

Toàn bộ thông tin cá nhân, học vấn, kinh nghiệm, dự án và liên hệ được tập trung trong một file duy nhất:
```text
src/data/cv-data.ts
```
Khi cần cập nhật nội dung, bạn chỉ cần chỉnh sửa file này mà không phải sửa mã nguồn giao diện.

---

## 🌐 Triển khai lên Vercel (Deployment)

1. Đẩy mã nguồn lên kho chứa GitHub cá nhân:
   ```bash
   git add .
   git commit -m "feat: complete artcraft portfolio & interactive cv"
   git push origin main
   ```
2. Truy cập [vercel.com](https://vercel.com) -> **Add New Project** -> Chọn repository này.
3. Vercel sẽ tự động phát hiện Next.js và hoàn tất build trong ~1 phút mà không cần cấu hình thêm.
