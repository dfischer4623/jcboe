const db = require("../models");
const Ppay127s = db.ppay127s;
const Op = db.Sequelize.Op;

// Retrieve all cpay127s from the database.
exports.findAll = (req, res) => {
    var sortOrder = [
        ['ADDKEY', 'ASC'],
    ]
    console.log(sortOrder)

    Ppay127s.findAll({ order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppay127s."
            });
        });
};;