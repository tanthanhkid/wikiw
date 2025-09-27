---
title: "Hình ảnh - Đồ hình"
description: ""
date: 2025-09-23
draft: false
weight: 1
---

<style>
.image-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 8px;
  max-width: 100%;
}

 .image-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* đẩy nút xuống cuối */
  height: 100%; /* card cao bằng nhau */
  border: 1px solid #fff; /* đổi viền trắng */
  border-radius: 8px;
  padding: 12px;
  background: #fff;
  text-align: center;
}


.image-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 10px;
  display: block;
  margin: 0 auto;
}

.image-card p {
  min-height: 48px; /* tạo chiều cao đồng nhất cho text */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.image-card .buttons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
  flex-direction: row;
}

.image-card .buttons a {
  background: #007bff;
  color: #fff;
  padding: 5px;
  border-radius: 6px;
  font-size: 14px;
  text-decoration: none;
  flex: 1;
  max-width: 120px;
  text-align: center;
  font-weight: 500;
}

.image-card .buttons a:last-child {
  background: #28a745;
}

/* Tablet - 2 cột */
@media (min-width: 768px) {
  .image-grid {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  }
  
  .image-card {
    flex: 1 1 calc(50% - 6px);
    max-width: calc(50% - 6px);
  }
}

/* Desktop - 3 cột */
@media (min-width: 1024px) {
  .image-card {
    flex: 1 1 calc(33.333% - 8px);
    max-width: calc(33.333% - 8px);
  }
}

/* Large Desktop - 4 cột */
@media (min-width: 1200px) {
  .image-card {
    flex: 1 1 calc(25% - 9px);
    max-width: calc(25% - 9px);
  }
}

/* Extra small mobile */
@media (max-width: 480px) {
  .image-grid {
    padding: 0 4px;
    gap: 12px;
  }
  
  .image-card {
    padding: 10px;
  }
  
  .image-card img {
    height: 180px;
    padding: 8px;
  }
  
  .image-card p {
    font-size: 15px;
    margin: 10px 0;
  }
  
  .image-card .buttons {
    gap: 10px;
    margin-top: 10px;
  }
  
  .image-card .buttons a {
    padding: 8px 16px;
    font-size: 13px;
    max-width: 100px;
  }
}
</style>

<div class="image-grid">

  <div class="image-card">
    <img src="/images/hinh1a.png" alt="Hình 1">
    <p>Lộ trình nâng tầm nhận thức nội tâm</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh2a.png" alt="Hình 2">
    <p>Hưởng thụ học tập</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh3a.png" alt="Hình 3">
    <p>Nhận thức về nhân quả</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="../BAI-HOC/01-tvhl-nhan-thuc-ve-nhan-qua/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh4a.png" alt="Hình 4">
    <p>Nguyên lý thuận dòng nước</p>
    <div class="buttons">
      <a href="/chi-tiet4">Khái Niệm</a>
      <a href="/mua4">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh5a.png" alt="Hình 5">
    <p>I.5-Quy luật chuyển hóa</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh6a.png" alt="Hình 6">
    <p>II.1-Nguyên lý Ánh Sáng</p>
    <div class="buttons">
      <a href="../TU-KHAINIEM/nguyen-ly-anh-sang/">Khái Niệm</a>
      <a href="../BAI-HOC/bai-hoc-nguyen-ly-anh-sang/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh7a.png" alt="Hình 7">
    <p>WiT HOME</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh8a.png" alt="Hình 8">
    <p>7 sự giàu toàn diện </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh9a.png" alt="Hình 9">
    <p>Phi vật chất Hóa</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh10a.png" alt="Hình 10">
    <p>Nguyên lý Kích hoạt não </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="../BAI-HOC/03-tvhl-nguyen-ly-kich-hoat-nao/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh11a.png" alt="Hình 11">
    <p>Chất lượng cuộc sống</p>
    <div class="buttons">
      <a href="\">Khái Niệm</a>
      <a href="../BAI-HOC/01-tvhl-nhan-thuc-ve-nhan-qua/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh12a.png" alt="Hình 12">
    <p>II.3-Nguyên lý nghi vấn Thuận chiều mong muốn</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="../BAI-HOC/04-tvhl-nguyen-ly-nghi-van-thuan-chieu-mong-muon/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh13a.png" alt="Hình 13">
    <p>Mong muốn Thuận - ngược </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh14a.png" alt="Hình 14">
    <p>Thành công</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh15a.png" alt="Hình 15">
    <p>Bốn mong muốn </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh16a.png" alt="Hình 16">
    <p>Nguyên lý vòng tri thức </p>
    <div class="buttons">
      <a href="\">Khái Niệm</a>
      <a href="../BAI-HOC/05-tvhl-nguyen-ly-vong-tri-thuc/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh17a.png" alt="Hình 17">
    <p>Biết-hiểu-thấu suốt-chuyển hóa</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh18a.png" alt="Hình 18">
    <p>Tam giác sức khỏe</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh19a.png" alt="Hình 19">
    <p>Tâm tài lực - Lâu lớn lành</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh20a.png" alt="Hình 20">
    <p>Mong muốn</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh21a.png" alt="Hình 21">
    <p>Công thức nhân duyên quả </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh22a.png" alt="Hình 22">
    <p>Tam giác ba góc chi phối cuộc sống</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh23a.png" alt="Hình 23">
    <p>X.3-Hệ quy chiếu công thức Cội Nguồn Cuộc Sống </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh24a.png" alt="Hình 24">
    <p>Mong muốn ý thức - Niềm tin bên trong</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh25a.png" alt="Hình 25">
    <p>Tính không</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh26a.png" alt="Hình 26">
    <p>Đổi hình - Đổi Đời </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh27a.png" alt="Hình 27">
    <p>Xây dựng góp ý </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh28a.png" alt="Hình 28">
    <p>Chân thật </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh29a.png" alt="Hình 29">
    <p>Cấu trúc con người </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh30a.png" alt="Hình 30">
    <p>Ba cách gọi về tâm tánh tình thân  </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh31a.png" alt="Hình 31">
    <p>Đồ hình tâm tánh tình thân </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh32a.png" alt="Hình 32">
    <p>Tánh không</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh33a.png" alt="Hình 33">
    <p>Cấu trúc con người </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh34a.png" alt="Hình 34">
    <p>3 Trạng thái nội tâm </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh35a.png" alt="Hình 35">
    <p>16 tánh người</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh36a.png" alt="Hình 36">
    <p>Khái niệm tham tưởng </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh37a.png" alt="Hình 37">
    <p>Bảy khái niệm âm dương của tính tham sân si mạn Nghi ác kiến </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh38a.png" alt="Hình 38">
    <p>Ý Niệm âm - dương </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh39a.png" alt="Hình 39">
    <p>Vòng tham tưởng</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh40a.png" alt="Hình 40">
    <p>Tam giác giới</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh41a.png" alt="Hình 41">
    <p>Cấu trúc con người </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh42a.png" alt="Hình 42">
    <p>Bảy bố thí quan trọng đời người </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh43a.png" alt="Hình 43">
    <p>5 Giải pháp </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh44a.png" alt="Hình 44">
    <p>Hạt phước đức công đức</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh45a.png" alt="Hình 45">
    <p>Vật chất -thời gian- không gian </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh46a.png" alt="Hình 46">
    <p>Tương đồng tần số rung động vật chất </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh47a.png" alt="Hình 47">
    <p>I.1- Quy luật tâm thức</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh48a.png" alt="Hình 48">
    <p>Ba trạng thái nội tâm về nhận thức </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh49a.png" alt="Hình 49">
    <p>Nhận thức - có hiện thực </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh50a.png" alt="Hình 50">
    <p>Tổng nghiệp thức Duyên quả</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh51a.png" alt="Hình 51">
    <p>Nghiệp Mệnh </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh52a.png" alt="Hình 52">
    <p>Uyên bác khôn ngoan thông thái trí tuệ </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh53a.png" alt="Hình 53">
    <p>V.2- Phương pháp thụ đắc</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh54a.png" alt="Hình 54">
    <p>Ba thời trải nghiệm </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh55a.png" alt="Hình 55">
    <p>Trân trọng -biết ơn, bao dung, An Vui </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh56a.png" alt="Hình 56">
    <p>Quan trọng và gấp </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh57a.png" alt="Hình 57">
    <p>Công thức a n</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh58a.png" alt="Hình 58">
    <p>Huân tập</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh59a.png" alt="Hình 59">
    <p>Quy luật tiềm thức </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh60a.png" alt="Hình 60">
    <p>Công thức</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh61a.png" alt="Hình 61">
    <p>Nhân quả không Hồi tố </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh62a.png" alt="Hình 62">
    <p>Dính mắc nhân xưng</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh63a.png" alt="Hình 63">
    <p>Quả như ý quả bất như ý đến từ đâu</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh64a.png" alt="Hình 64">
    <p>Trạng thái nội tâm công đức Phước Đức </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh65a.png" alt="Hình 65">
    <p>Kiểm thảo bản thân</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh66a.png" alt="Hình 66">
    <p>Tin biết nghi vấn mong muốn</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh67a.png" alt="Hình 67">
    <p>Tam giác hiện thực </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh68a.png" alt="Hình 68">
    <p>Biểu hiện vật chất </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh69a.png" alt="Hình 69">
    <p>Hiện Thực hạnh phúc  sức khỏe hôn nhân tài chính </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh70a.png" alt="Hình 70">
    <p>Khái niệm nguồn có lợi - bất lợi </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh71a.png" alt="Hình 71">
    <p>Hiện thực hôn nhân Như Ý -bất như ý </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh72a.png" alt="Hình 72">
    <p>Ba Hệ quy chiếu chuẩn </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh73a.png" alt="Hình 73">
    <p>Tam giác thông tin </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh74a.png" alt="Hình 74">
    <p>Tâm thức -tư duy -hành vi </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh75a.png" alt="Hình 75">
    <p>Tam giác hiện thực</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh76a.png" alt="Hình 76">
    <p>Ngọn nến trí tuệ </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh77a.png" alt="Hình 77">
    <p>Ba trạng thái trí tuệ </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh78a.png" alt="Hình 78">
    <p>Người Có Trí Tuệ Tầng Bậc 1</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh79a.png" alt="Hình 79">
    <p>Cách âm vô minh </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh80a.png" alt="Hình 80">
    <p>Người Có Trí Tuệ Tầng Bậc 2</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh81a.png" alt="Hình 81">
    <p>Sống có triết lý </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh82a.png" alt="Hình 82">
    <p>Người Có Trí Tuệ Tầng Bậc 3</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh83a.png" alt="Hình 83">
    <p> Luân hồi (nhân sinh )</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh84a.png" alt="Hình 84">
    <p>Bè tánh không </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh85a.png" alt="Hình 85">
    <p>Thực tại </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh86a.png" alt="Hình 86">
    <p>3 câu hỏi quan trọng đời người</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh87a.png" alt="Hình 87">
    <p>Trạng thái tin -tưởng </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh88a.png" alt="Hình 88">
    <p>3 góc trạng thái An Vui </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh89a.png" alt="Hình 89">
    <p>Hình 89</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh90a.png" alt="Hình 90">
    <p>Hình 90</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh91a.png" alt="Hình 91">
    <p>Lắng nghe </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh92a.png" alt="Hình 92">
    <p>Thụ Đắc ngôn ngữ </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh93a.png" alt="Hình 93">
    <p>Ba tầng bao dung </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh94a.png" alt="Hình 94">
    <p>Tự giác đến sự tốt đẹp </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh95a.png" alt="Hình 95">
    <p>Ba trạng thái bao dung </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh96a.png" alt="Hình 96">
    <p>Sở hữu -không sở hữu </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh97a.png" alt="Hình 97">
    <p>Thừa kế </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh98a.png" alt="Hình 98">
    <p>Hình 98</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh99a.png" alt="Hình 99">
    <p>Cảm động -Trân trọng biết ơn </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh100a.png" alt="Hình 100">
    <p>Trạng thái trân trọng biết ơn </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh101a.png" alt="Hình 101">
    <p>Kho tống nghiệp </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh102a.png" alt="Hình 102">
    <p>Ba lớp tâm tánh tình</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh103a.png" alt="Hình 103">
    <p>Thầy /cô </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh104a.png" alt="Hình 104">
    <p>Hình 104</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh105a.png" alt="Hình 105">
    <p>Người Có Trí Tuệ Tầng Bậc 4-5</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh106a.png" alt="Hình 106">
    <p>Hữu sư trí </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh107a.png" alt="Hình 107">
    <p>Ba trạng thái trí tuệ </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh108a.png" alt="Hình 108">
    <p>Khái niệm đơn giản </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh109a.png" alt="Hình 109">
    <p>Sứ mệnh </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh110a.png" alt="Hình 110">
    <p>6 chữ vàng trong hành động</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh111a.png" alt="Hình 111">
    <p>Hình 111</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh112a.png" alt="Hình 112">
    <p>Chìa khóa - Tin tưởng</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh113a.png" alt="Hình 113">
    <p> Đức Hành Thiên Hạ </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh114a.png" alt="Hình 114">
    <p>Tam giác ý chân thật </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh115a.png" alt="Hình 115">
    <p>Làm việc 20% -Làm người 80%</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh116a.png" alt="Hình 116">
    <p>Thành công - Duyên lành</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh117a.png" alt="Hình 117">
    <p>Triết lý “ngu “</p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>

  <div class="image-card">
    <img src="/images/hinh117a.png" alt="Hình 117">
    <p>Cảm nhận cảm nhận </p>
    <div class="buttons">
      <a href="/">Khái Niệm</a>
      <a href="/">Bài Học</a>
    </div>
  </div>
</div>