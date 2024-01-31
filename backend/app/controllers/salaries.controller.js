const db = require("../models");
const Salaries = db.salaries;
const Op = db.Sequelize.Op;

// Retrieve all salaries from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { EM: Number(empNum) } ;
    var sortOrder = [
        ['SCHYEAR', 'ASC'],
    ]
    Salaries.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.salaries."
            });
        });
};;