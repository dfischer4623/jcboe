const db = require("../models");
const Pfrs860s = db.pfrs860s;
const Op = db.Sequelize.Op;

// Retrieve all pfrs860ss from the database.
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
}