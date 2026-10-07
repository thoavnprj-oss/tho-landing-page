# THOA Landing Page

Landing page responsive lấy cảm hứng từ thiết kế tham chiếu THOA.

## Cấu trúc

- `index.html` — cấu trúc nội dung
- `style.css` — toàn bộ giao diện, responsive và màu sắc
- `script.js` — tương tác menu + event tracking
- `assets/` — thư mục dành cho ảnh/logo nội bộ nếu bạn muốn thay ảnh URL bằng file local

## Font

- Body: Manrope
- Heading: Cormorant Garamond

## Palette

- `#dde5f7`
- `#b7c6e8`
- `#92a8d6`
- `#f7f9fd`
- `#0e0f19`

## Chạy local

Mở trực tiếp `index.html` bằng trình duyệt.

## Deploy GitHub + Vercel

Upload các file này lên một GitHub repository, sau đó Import repository vào Vercel.
Vercel sẽ tự deploy lại khi repository có commit mới.

## Google Analytics 4

Thêm mã GA4 vào `<head>` của `index.html` và thay `G-XXXXXXXXXX` bằng Measurement ID thật.
`script.js` đã có sẵn hook cho các element có `data-track`.
