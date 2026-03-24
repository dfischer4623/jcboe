const db = require("../models");
const Ppai715s = db.ppai715s;
const Op = db.Sequelize.Op;

// Retrieve all ppai715s from the database.
exports.findAll = (req, res) => {
    var empNum = req.query.SSN
    var run = req.query.RUN
    var condition = { DESSN: Number(empNum), DERUN: Number(run) };
    var sortOrder = [
        ['DERUN', 'ASC'],
    ]
    Ppai715s.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppai715s."
            });
        });
};;