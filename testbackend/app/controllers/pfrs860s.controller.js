const db = require("../models");
const Pfrs860s = db.pfrs860s;

// Retrieve W2 data for a specific employee by SSN
exports.findAll = (req, res) => {
  const empNum = req.params.id;

  // Validate the input
  if (!empNum) {
    return res.status(400).send({ message: "Employee ID (SSN) is required." });
  }

  const condition = { W2SSN: Number(empNum) };
  const sortOrder = [["W2CLYR", "ASC"]];

  Pfrs860s.findAll({ where: condition, order: sortOrder })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send({ message: "No W2 data found for this employee." });
      }
      res.send(data);
    })
    .catch((err) => {
      console.error("❌ Database error:", err);
      res.status(500).send({
        message: "Error retrieving W2 data.",
      });
    });
};
