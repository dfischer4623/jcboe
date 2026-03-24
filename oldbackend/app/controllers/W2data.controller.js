const db = require("../models");
const S3_W2 = db.S3_W2;
const Op = db.Sequelize.Op;
const { logError } = require('../utils/logger'); // import logger

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
  const empNum = req.params.id;

  // Validate the input
  if (!empNum) {
    return res.status(400).send({ message: "Employee ID (SSN) is required." });
  }

  const condition = { ssn: (empNum) };
  const sortOrder = [["year", "ASC"]];

  S3_W2.findAll({ where: condition, order: sortOrder })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send({ message: "No W2 data found for this employee." });
      }
      res.send(data);
    })
    .catch((err) => {
        logError('/api/w2data/:id', err);
      console.error("❌ Database error:", err);
      res.status(500).send({
        message: "Error retrieving W2 data.",
      });
    });
};;

// Find a single dbo.employees with an id
exports.findDetails = (req, res) => {
    var ssn = req.query.SSN
      const sortOrder = [["year", "ASC"]];
    var year = req.query.year
    var condition = { year: (year), ssn: (ssn) };
    S3_W2.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
           logError('/api/w2datayr/details', err);
            console.log(err)
            res.status(500).send({
                message: "Error retrieving dbo.S3_W2 with req.query=" + req.query
            });
        });
};