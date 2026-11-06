@echo off
setlocal
set "HTML=%~dp0iVeron_Navigator_Desktop_V36_Ivy_Login.html"
if not exist "%HTML%" (
  echo Die iVeron HTML-Datei fehlt. Bitte die ZIP-Datei vollstaendig entpacken.
  pause
  exit /b 1
)
set "BROWSER="
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" set "BROWSER=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not defined BROWSER if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" set "BROWSER=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
if not defined BROWSER if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" set "BROWSER=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not defined BROWSER if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" set "BROWSER=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if defined BROWSER (
  start "" "%BROWSER%" --new-window --start-fullscreen "%HTML%"
) else (
  echo Edge oder Chrome wurde nicht am Standardort gefunden.
  echo Die HTML-Datei wird im Standardbrowser geoeffnet.
  start "" "%HTML%"
)
exit /b 0
