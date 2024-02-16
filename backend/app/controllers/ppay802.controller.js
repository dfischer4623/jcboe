const db = require("../models");
const Ppay802s = db.ppay802s;
const Op = db.Sequelize.Op;

// Retrieve all ppay802s from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { HANUM: Number(empNum) } ;
    var sortOrder = [
        ['MEMBER', 'ASC'],
        ['HAJOB', 'ASC'],
        ['HAABS', 'ASC'],
    ]
    Ppay802s.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppay802s."
            });
        });
};;