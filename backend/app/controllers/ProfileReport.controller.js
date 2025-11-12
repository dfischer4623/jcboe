const db = require("../models");
const S3_ProfileReport = db.S3_ProfileReport;
const Op = db.Sequelize.Op;
const S3_W2 = db.S3_W2;
const S3_EmpPayOutput = db.S3_EmpPayOutput;
const { logError } = require('../utils/logger'); // import logger
// Retrieve all employees from the database.
exports.findAll = (req, res) => {
    var employeeName = req.query.name
    
    let  condition = employeeName ? { 'Last Name': { [Op.like]: `%${employeeName}%` } } : null;

     // Exclude blank and null employee and firstName
    condition = {
        ...condition,
        employee: { [Op.and]: { [Op.ne]: '', [Op.not]: null } },
        firstName: { [Op.and]: { [Op.ne]: '', [Op.not]: null } }
    }
    var sortOrder = [
        ['Last Name', 'ASC'],
        ['First Name', 'ASC'],
    ]
    console.log(condition + ' ' + sortOrder)
    console.log(req.query)
    S3_ProfileReport.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
               logError('/api/empsys/s3data', err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ProfileReport."
            });
        });
};;

// Find a single dbo.employees with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    var condition = { 'Employee#': id };
 var sortOrder = [
        ['Last Name', 'ASC'],
        ['First Name', 'ASC'],
    ];
      const sortOrderpay = [["empNum", "ASC"]];
    console.log(req.params);
    S3_ProfileReport.findOne({ where: condition, order: sortOrder })
        .then(data => {

            S3_W2.findAll({ where: { idn: (id) }, order: [["year", "ASC"]] })
                .then((datawe) => {
                    if (!datawe.length) {
                        return res.status(404).send({
                            data: data
                        });
                    }
                       S3_EmpPayOutput.findAll({ where: { empNum: (id) }, order: sortOrderpay })
                .then((datapay) => {
                    if (!datapay.length) {
                        return res.status(404).send({
                            data: data,
                            datawe: datawe[0],
                        });
                    }
                    res.send({
                        data: data,
                        datawe: datawe[0],
                        datapay: datapay[0],

                    });
                })
                .catch((err) => {
                      logError('/api/empsys/:id', err);
                    console.error("❌ Database error:", err);
                    res.status(500).send({
                        message: "Error retrieving emppay data.",
                    });
                });
                    // res.send({
                    //     data: data,
                    //     datawe: datawe[0]

                    // });
                })
                .catch((err) => {
                      logError('/api/empsys/:id', err);
                    console.error("❌ Database error:", err);
                    res.status(500).send({
                        message: "Error retrieving W2 data.",
                    });
                });

        })
        .catch(err => {
            console.log(err);
              logError('/api/empsys/:id', err);

            res.status(500).send({
                message: "Error retrieving dbo.ProfileReport with id=" + id
            });
        });




};