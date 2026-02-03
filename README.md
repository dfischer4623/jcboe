# jcboe
______________________________________________________________________________
Production

(1) cd backend
    node server.js

    Server is running on port 10.0.0.42:8080

(2) cd frontend
    HOST=10.0.0.42 PORT=443 HTTPS=true SSL_CRT_FILE=wildcard_jcboe_org.crt SSL_KEY_FILE=wildcard_jcboe_org.key npm start
______________________________________________________________________________
Test

(1) cd testbackend
    node server.js

    Server is running on port 10.0.0.43:8081

(2) cd testfrontend
    HOST=10.0.0.43 PORT=3001 HTTPS=true SSL_CRT_FILE=wildcard_jcboe_org.crt SSL_KEY_FILE=wildcard_jcboe_org.key npm start

______________________________________________________________________________
- Production: https://as400.jcboe.org/ (10.0.0.42:443 frontend, :8080 backend)
- Test: https://testas400.jcboe.org:3001/ (10.0.0.43:3001 frontend, :8081 backend)
______________________________________________________________________________

    website URL:    https://as400.jcboe.org/
                    https://as400.jcboe.org/adminlogin
    
    https://10.0.0.42:443       frontend
    https://10.0.0.42:8080      backend

    10.0.0.42:1433              SQL Server