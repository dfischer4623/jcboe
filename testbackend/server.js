var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('./wildcard_jcboe_org.key', 'utf8');
var certificate = fs.readFileSync('./wildcard_jcboe_org.crt', 'utf8');

// Initialize Express app
var credentials = {key: privateKey, cert: certificate};
var express = require('express');
const app = express()

const cors = require("cors");
var corsOptions = {
    origin: "https://testas400.jcboe.org"
};

//app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the JCBoE application." });
});

require("./app/routes/app.routes")(app);

// set port, listen for requests

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8081, '10.0.0.43', () => {
    console.log('Server is running on https://10.0.0.43:8081');
});

// app.listen(8080, () => {
//     console.log(`Server is running on port 8080.`);
// })