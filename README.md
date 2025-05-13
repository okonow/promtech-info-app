# promtech-info-app
Corporate application "PROMTECH" ("ПРОМТЕХ") designed to simplify the access of company employees to important information and internal services

# instructions for backend

1. Install docker to your server 
    curl -fsSL https://get.docker.com -o get-docker.sh
2. Clone repo with project to server
    git clone https://github.com/okonow/promtech-info-app.git
3. Change directory to project current directory
    cd ./promtech-info-app
4. Compose containers.
    docker compose up

    big-command: 
    curl -fsSL https://get.docker.com -o get-docker.sh & git clone https://github.com/okonow/promtech-info-app.git & cd ./promtech-info-app & docker compose up

# instructions for frontend

1. Run server python -m http.server
2. Go to url http://localhost:8000/okb/okbPK.html or http://localhost:8000/okb/okb.html

# comment

for now backend and frontend aren't binded together

