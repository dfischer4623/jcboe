// const db = require("../models");
// const S3_CheckRegister = db.S3_CheckRegister;
// const Op = db.Sequelize.Op;
// const { Sequelize, col,QueryTypes  } = require("sequelize");
// Retrieve all employees from the database.


const { Op, Sequelize,QueryTypes } = require("sequelize");
const db = require("../models");
const S3_CheckRegister = db.S3_CheckRegister;
const { logError } = require('../utils/logger'); // import logger
exports.findAll = async (req, res) => {
  const empNum = req.params.id;

  if (!empNum) {
    return res.status(400).send({ message: "Employee ID is required." });
  }

  try {
    const allRecords = await S3_CheckRegister.findAll({
      where: {
        employee: empNum
      },
      raw: true,
      order: [["year", "ASC"]]
    });

    if (!allRecords.length) {
      return res.status(404).send({ message: "No records found." });
    }

    // Sort manually by year ASC
    const sortedRecords = allRecords.sort((a, b) => {
      return parseInt(a.year || '0') - parseInt(b.year || '0');
    });

    // Group by chkno and take first entry (lowest year)
    const grouped = {};
    sortedRecords.forEach(record => {
      const key = record.chkno;
      if (!grouped[key]) {
        grouped[key] = record;
      }
    });

    const result = Object.values(grouped);
    res.send(result);
  } catch (err) {
      logError('/api/checkregister/:id', err);
    console.error("❌ Sequelize Error:", err);
    res.status(500).send({
      message: err.message || "Error retrieving data."
    });
  }
};

// Find a single dbo.employees with an id
exports.findDetails = (req, res) => {


  var CHKNO = req.query.CHKNO
  var condition = { chkno: (CHKNO) };
  S3_CheckRegister.findAll({ where: condition ,order: [["year", "ASC"]]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
          logError('/api/checkregisterch/details', err);
      res.status(500).send({
        message: "Error retrieving dbo.S3_CheckRegister with req.query=" + req.query
      });
    });
};