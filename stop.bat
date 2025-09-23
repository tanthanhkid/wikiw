@echo off
chcp 65001 >nul
setlocal

echo 🛑 Stopping HappyMarketDocs Development Environment...
echo.

REM Dừng Hugo server (port 1313)
echo 🌐 Stopping Hugo Server...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":1313"') do (
    if "%%a" neq "" (
        taskkill /f /pid %%a >nul 2>&1
        echo    ✅ Hugo Server stopped
    )
)

REM Dừng API server (port 3001)
echo 🔧 Stopping API Server...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3001"') do (
    if "%%a" neq "" (
        taskkill /f /pid %%a >nul 2>&1
        echo    ✅ API Server stopped
    )
)

REM Dừng tất cả process node.js có chứa simple-server.js
echo 🔍 Cleaning up remaining processes...
wmic process where "name='node.exe' and commandline like '%%simple-server.js%%'" delete >nul 2>&1

REM Dừng tất cả process hugo
wmic process where "name='hugo.exe'" delete >nul 2>&1

echo.
echo ✅ All services stopped successfully!
echo.
pause