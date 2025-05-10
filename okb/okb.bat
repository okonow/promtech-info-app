cd %~dp0
start python -m http.server
timeout 1
start http://localhost:8000/okb.html