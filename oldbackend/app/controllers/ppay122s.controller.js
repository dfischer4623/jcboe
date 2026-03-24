const db = require("../models");
const Ppay122s = db.ppay122s;
const Op = db.Sequelize.Op;

// Retrieve all cpay122s from the database.
exports.findAll = (req, res) => {
    var sortOrder = [
        ['DDTABL', 'ASC'],
    ]
    console.log(sortOrder)

    Ppay122s.findAll({ order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppay122s."
            });
        });
};;