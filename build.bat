@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

echo 🚀 Building HappyMarketDocs for deployment...
echo.

REM Kiểm tra xem Hugo có được cài đặt không
hugo version >nul 2>&1
if errorlevel 1 (
    echo ❌ Hugo is not installed. Please install Hugo first.
    pause
    exit /b 1
)

echo 📦 Building Hugo site...
hugo --minify

if errorlevel 1 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo.
echo ✅ Build completed successfully!
echo 📁 Output directory: public/
echo.
echo 🚀 Ready for deployment!
echo.

pause
