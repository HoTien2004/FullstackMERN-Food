## FullstackMERN-Food

## Mô tả
Dự án FullstackMERN-Food là một ứng dụng web quản lý đặt món ăn. Dự án được xây dựng với các công nghệ chính:
- **Frontend**: React, Vite, Axios, React Router, React Toastify
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Stripe, Multer

## Cấu trúc dự án
- `admin`: Thư mục chứa mã nguồn của phần quản trị viên.
- `backend`: Thư mục chứa mã nguồn của phần backend.
- `frontend`: Thư mục chứa mã nguồn của phần frontend cho người dùng.

## Cài đặt và chạy dự án

### Yêu cầu
- Node.js (phiên bản mới nhất)
- MongoDB (đã cài đặt và chạy trên máy tính)

### Bước 1: Clone repository
```sh
git clone https://github.com/HoTien2004/FullstackMERN-Food.git
cd FullstackMERN-Food
```

### Bước 2: Cài đặt các gói phụ thuộc

#### Admin
```sh
cd admin
npm install
```

#### Backend
```sh
cd ../backend
npm install
```

#### Frontend
```sh
cd ../frontend
npm install
```

### Bước 3: Cấu hình môi trường
Tạo file `.env` trong thư mục `backend` và điền các thông tin cấu hình cần thiết (ví dụ như MongoDB URI, JWT Secret, Stripe Key...).

### Bước 4: Chạy dự án

#### Chạy phần backend
```sh
cd backend
npm run server
```

#### Chạy phần admin
Mở một terminal mới và chạy:
```sh
cd admin
npm run dev
```

#### Chạy phần frontend
Mở một terminal khác và chạy:
```sh
cd frontend
npm run dev
```

#### Database
Sử dụng MongoDB Compass để có giao diện trực quan


### Kết quả
- Truy cập vào `http://localhost:3000` để xem giao diện người dùng.
- Truy cập vào `http://localhost:4000` để xem server khởi chạy thành công hay không.
- Truy cập vào `http://localhost:5000` để xem giao diện quản trị viên.
