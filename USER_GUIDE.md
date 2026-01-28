# Hướng dẫn sử dụng và cập nhật Web Tĩnh (Dangg)

## 1. Cách chạy trang web (Sử dụng Web tĩnh)

Vì đây là một trang web tĩnh (chỉ gồm HTML/CSS), bạn có thể chạy nó theo các cách sau:

**Cách 1: Mở trực tiếp**
- Vào thư mục chứa code: `d:/Servers/Code/dangg-github/dangg`
- Nhấn đúp chuột vào file `index.html`.
- Trang web sẽ mở ra trên trình duyệt mặc định của bạn.

**Cách 2: Sử dụng Live Server (Khuyên dùng với VS Code)**
- Cài extension **Live Server** trong Visual Studio Code.
- Chuột phải vào file `index.html` -> Chọn **Open with Live Server**.
- Cách này giúp trang web tự động tải lại mỗi khi bạn sửa code.

---

## 2. Hướng dẫn Push / Pull Code (Cập nhật)

Để quản lý code trên GitHub, bạn sử dụng Terminal (trong VS Code hoặc PowerShell) tại thư mục dự án.

### A. Lấy code mới về (Pull)
Khi có thay đổi trên GitHub mà máy bạn chưa có, hãy chạy lệnh:

```bash
git pull
```

### B. Đẩy code lên GitHub (Push)
Sau khi bạn đã sửa code (ví dụ sửa file `index.html`), hãy làm theo 3 bước sau để đưa code lên mạng:

**Bước 1: Thêm các file đã sửa vào danh sách chờ**
```bash
git add .
```

**Bước 2: Lưu thay đổi (Commit) kèm ghi chú**
```bash
git commit -m "Ghi chú về thay đổi của bạn (ví dụ: sua tieu de)"
```

**Bước 3: Đẩy lên GitHub (Push)**
```bash
git push
```

---
*Lưu ý: Nếu `git push` bị lỗi, có thể do trên mạng có code mới mà bạn chưa lấy về. Hãy chạy `git pull` trước rồi thử lại.*

---

## 3. Đường dẫn quan trọng

- **GitHub Repository**: [https://github.com/giangnguyen2904/dangg](https://github.com/giangnguyen2904/dangg)
- **File Shortcut**: Bạn có thể nhấn vào file `GitHub_Repo.url` trong thư mục để mở nhanh trang web này.

---

## 4. Cách đưa web lên mạng (Public)
Để mọi người có thể truy cập web của bạn, hãy sử dụng **GitHub Pages**:

1. Vào trang GitHub của bạn: [https://github.com/giangnguyen2904/dangg](https://github.com/giangnguyen2904/dangg)
2. Chọn tab **Settings** (Cài đặt) ở thanh trên cùng.
3. Ở menu bên trái, tìm và chọn mục **Pages**.
4. Tại phần **Build and deployment** -> **Branch**, chọn `main` (hoặc `master`) rồi nhấn **Save**.
5. Đợi khoảng 1-2 phút, load lại trang. Bạn sẽ thấy đường dẫn web của mình hiện ra ở trên cùng.

**Đường dẫn dự kiến của bạn sẽ là:**
👉 [https://giangnguyen2904.github.io/dangg/](https://giangnguyen2904.github.io/dangg/)


