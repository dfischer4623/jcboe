const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require("cors");

console.log("--- Starting server initialization ---");

// 1. SSL Certificate Handling
let credentials = {};
try {
    console.log("Step 1: Reading SSL certificates...");
    const privateKey = fs.readFileSync('./wildcard_jcboe_org.key', 'utf8');
    const certificate = fs.readFileSync('./wildcard_jcboe_org.crt', 'utf8');
    credentials = { key: privateKey, cert: certificate };
    console.log("SUCCESS: Certificates loaded.");
} catch (err) {
    console.error("FATAL ERROR: Could not read SSL certificates.");
    console.error(err.message);
    process.exit(1); // Stop the process so it doesn't hang silently
}

const app = express();

// 2. Middleware Configuration
console.log("Step 2: Configuring middleware...");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. Database Initialization
try {
    console.log("Step 3: Loading database models...");
    const db = require("./app/models");
    console.log("SUCCESS: Database models loaded.");
} catch (err) {
    console.error("ERROR: Failed to load database models.");
    console.error(err);
}

// 4. Route Definitions
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the JCBoE application." });
});

try {
    console.log("Step 4: Initializing routes...");
    require("./app/routes/app.routes")(app);
    console.log("SUCCESS: Routes initialized.");
} catch (err) {
    console.error("ERROR: Failed to initialize routes.");
    console.error(err);
}

// 5. Global Error Handling Middleware
// This catches any errors that happen during request processing
app.use((err, req, res, next) => {
    console.error("RUNTIME ERROR:", err.stack);
    res.status(500).send({
        message: "An internal server error occurred.",
        error: err.message
    });
});

// 6. Server Creation and Lifecycle Events
const PORT = 8080;
const httpsServer = https.createServer(credentials, app);

httpsServer.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`FATAL ERROR: Port ${PORT} is already in use.`);
    } else {
        console.error("HTTPS Server Error:", e);
    }
});

httpsServer.listen(PORT, () => {
    console.log(`\n--- Server Status ---`);
    console.log(`URL: https://localhost:${PORT}`);
    console.log(`Status: Running`);
    console.log(`---------------------\n`);
});