const db = require("../models");
const Ppai713s = db.ppai713s;
const Op = db.Sequelize.Op;

// Retrieve all ppai713s from the database.
exports.findAll = (req, res) => {
    var empNum = req.query.SSN
    var run = req.query.RUN
    var condition = { PASSN: Number(empNum), PARUN: Number(run) };
    var sortOrder = [
        ['PARUN', 'ASC'],
    ]
    Ppai713s.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppai713s."
            });
        });
};;