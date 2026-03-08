const db = require("../models");
const Certificates = db.certificates;
const Op = db.Sequelize.Op;

// Retrieve all certificates from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { CTSSN: Number(empNum) } ;
    var sortOrder = [
        ['CTID', 'ASC'],
    ]
    console.log(condition + ' ' + sortOrder)
    console.log(req.query)
    Certificates.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.certificates."
            });
        });
};;