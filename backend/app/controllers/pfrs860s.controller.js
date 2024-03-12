const db = require("../models");
const Pfrs860s = db.pfrs860s;
const Op = db.Sequelize.Op;

// Retrieve all pfrs860s from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { W2SSN: Number(empNum) };
    var sortOrder = [
        ['W2CLYR', 'ASC'],
    ]
    console.log(condition + ' ' + sortOrder)
    console.log(req.query)
    Pfrs860s.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.pfrs860s."
            });
        });
};;

// Find a single dbo.pfrs860s with an id
exports.findOne = (req, res) => {
    var ssn = req.params.SSN
    var estb = req.params.ESTB
    var year = req.params.YEAR
    var condition = { W2CLYR: Number(year), W2SSN: Number(ssn), W2ESTB: String(estb) };
    console.log(year + ' ' + estb + ' ' + ssn)
    Pfrs860s.findOne({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: "Error retrieving dbo.pfrs860s with req.params=" + req.params
            });
        });
};