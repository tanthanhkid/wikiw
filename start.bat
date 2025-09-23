@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

echo 🚀 Starting HappyMarketDocs Development Environment...
echo.

REM Kiểm tra xem Node.js có được cài đặt không
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Kiểm tra xem Hugo có được cài đặt không
hugo version >nul 2>&1
if errorlevel 1 (
    echo ❌ Hugo is not installed. Please install Hugo first.
    pause
    exit /b 1
)

REM Tạo thư mục logs nếu chưa có
if not exist logs mkdir logs

echo 📦 Installing dependencies...
call npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo 🔧 Starting API Server on port 3001...
start /b cmd /c "node simple-server.js > logs\api-server.log 2>&1"

REM Chờ API server khởi động
timeout /t 2 /nobreak >nul

echo 🌐 Starting Hugo Server on port 1313...
start /b cmd /c "hugo server -D --bind 0.0.0.0 --baseURL http://localhost:1313 > logs\hugo-server.log 2>&1"

REM Chờ Hugo server khởi động
timeout /t 3 /nobreak >nul

echo.
echo ✅ Development Environment Started Successfully!
echo.
echo 📊 Services:
echo    🌐 Hugo Server:    http://localhost:1313
echo    🔧 API Server:     http://localhost:3001
echo    📋 Admin Panel:    http://localhost:1313/admin/
echo    🏥 Health Check:   http://localhost:3001/api/health
echo.
echo 📁 Logs:
echo    📄 Hugo Logs:      logs\hugo-server.log
echo    📄 API Logs:       logs\api-server.log
echo.
echo 🛑 To stop all services, press Ctrl+C or run: stop.bat
echo.

echo Press Ctrl+C to stop all services...

REM Chờ user nhấn Ctrl+C hoặc đóng cửa sổ
:wait_loop
timeout /t 1 /nobreak >nul
goto wait_loop