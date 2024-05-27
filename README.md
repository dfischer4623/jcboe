# jcboe

(1) cd auth-server
    node app.js

    Server is running on port 3080

(2) cd backend
    node server.js

    Server is running on port 8080

(3) cd frontend
    HTTPS=true SSL_CRT_FILE=\wildcard_jcboe_org.crt SSL_KEY_FILE=\wildcard_jcboe_org.key npm start

    website URL:   https://"IP Address":443

SQL Server

    "IP Address":1433
    