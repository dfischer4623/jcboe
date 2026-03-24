const db = require("../models");
const Ppay124s = db.ppay124s;
const Op = db.Sequelize.Op;

// Retrieve all cpay124s from the database.
exports.findAll = (req, res) => {
    var sortOrder = [
        ['JDKEY', 'ASC'],
    ]
    console.log(sortOrder)

    Ppay124s.findAll({ order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppay124s."
            });
        });
};;