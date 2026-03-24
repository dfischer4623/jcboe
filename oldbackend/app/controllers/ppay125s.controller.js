const db = require("../models");
const Ppay125s = db.ppay125s;
const Op = db.Sequelize.Op;

// Retrieve all cpay125s from the database.
exports.findAll = (req, res) => {
    var sortOrder = [
        ['PHKEY', 'ASC'],
    ]
    console.log(sortOrder)

    Ppay125s.findAll({ order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppay125s."
            });
        });
};;