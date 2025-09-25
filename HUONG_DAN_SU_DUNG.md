# Hướng dẫn sử dụng script tự động cập nhật bảng từ vựng

## Mô tả
Script này giúp tự động cập nhật bảng từ vựng - khái niệm trong file `content/TU-KHAINIEM/_index.md` bằng cách lấy nội dung từ các file markdown tương ứng.

## Cách hoạt động
1. Script sẽ đọc file `content/TU-KHAINIEM/_index.md`
2. Tìm các dòng có cột "Khái niệm" trống
3. Tìm file markdown tương ứng trong thư mục `content/TU-KHAINIEM/[tên-thư-mục]/_index.md`
4. Trích xuất nội dung từ phần "## Khái Niệm" trong file markdown
5. Cắt ngắn nội dung xuống 15 ký tự và thêm dấu "..."
6. Cập nhật vào bảng

## Cách sử dụng

### Chạy script
```bash
python vocabulary_table_updater.py
```

### Chọn chế độ cập nhật
Script sẽ hỏi bạn chọn chế độ:

1. **Cập nhật với nội dung thực từ file markdown**
   - Lấy nội dung thực từ phần "## Khái Niệm" trong các file markdown
   - Cắt ngắn xuống 15 ký tự và thêm "..."
   - Nếu không có nội dung thực, sẽ thêm placeholder "Đang trong quá trình bổ sung..."

2. **Chỉ cập nhật các dòng trống với placeholder**
   - Chỉ thêm placeholder "Đang trong quá trình bổ sung..." cho các dòng trống
   - Không đọc nội dung từ file markdown

## Cấu trúc file
```
content/TU-KHAINIEM/
├── _index.md                    # File bảng chính
├── ac-duc/
│   └── _index.md               # File chứa khái niệm "Ác đức"
├── an-vui/
│   └── _index.md               # File chứa khái niệm "An vui"
└── ...
```

## Ví dụ
Trước khi chạy script:
```
| [Ác đức](ac-duc/) | Ác Đức tương ứng khối điện từ âm, chứa trong vỏ bọc tánh người, được tạo ra khi làm cho người khác đau khổ... |
| [Bao Dung](bao-dung/) | |
| [Cao nhân](cao-nhan/) | |
```

Sau khi chạy script:
```
| [Ác đức](ac-duc/) | Ác Đức tương ứng khối điện từ âm, chứa trong vỏ bọc tánh người, được tạo ra khi làm cho người khác đau khổ... |
| [Bao Dung](bao-dung/) | Đang trong quá trình bổ sung... |
| [Cao nhân](cao-nhan/) | Đang trong quá trình bổ sung... |
```

## Lưu ý
- Script sẽ tự động backup file gốc trước khi cập nhật
- Nếu có lỗi, bạn có thể rollback lại file gốc
- Script chỉ cập nhật các dòng có cột "Khái niệm" trống
- Nội dung sẽ được cắt ngắn xuống 15 ký tự và thêm dấu "..."

## Troubleshooting
- Đảm bảo bạn đang chạy script từ thư mục gốc của project
- Kiểm tra quyền ghi file trong thư mục `content/TU-KHAINIEM/`
- Nếu có lỗi encoding, đảm bảo file markdown được lưu với encoding UTF-8
