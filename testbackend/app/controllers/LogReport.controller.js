
const { getLogs } = require('../utils/logger');

exports.findAll = (req, res) => {
  try {
     const logs = getLogs();

    // send as JSON
    res.status(200).json(logs);
  } catch (err) {
    console.error("Error reading logs:", err);
    res.status(500).json({ message: "Failed to read logs" });
  }
};