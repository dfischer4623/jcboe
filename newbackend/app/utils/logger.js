const fs = require("fs");
const path = require("path");

// define the log file path internally
const logFile = path.join(__dirname, "../logs/errorLogs.json");

// Ensure log folder & file exist
if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}
if (!fs.existsSync(logFile)) {
  fs.writeFileSync(logFile, JSON.stringify([]), "utf8");
}

function logError(api, error) {
  try {
    let logs = [];

    const data = fs.readFileSync(logFile, "utf8").trim();
    if (data) {
      try {
        logs = JSON.parse(data);
      } catch (parseErr) {
        console.error("⚠️ Corrupted log file. Resetting logs.", parseErr);
        logs = [];
      }
    }

    const newLog = {
      api,
      message: error?.message || String(error),
      stack: error?.stack || null,
      timestamp: new Date().toISOString(),
    };

    logs.push(newLog);
     console.log("testsing data");
     console.log(data);
     console.log(newLog);


    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2), "utf8");
  } catch (err) {
    console.error("❌ Failed to log error:", err);
  }
}

function getLogs() {
  try {
    const data = fs.readFileSync(logFile, "utf8").trim();
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("❌ Failed to read logs:", err);
    return [];
  }
}

module.exports = {
  logError,
  getLogs,
};