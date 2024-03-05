const db = require("../models");
const Ppay121s = db.ppay121s;
const Op = db.Sequelize.Op;

// Retrieve all cpay121s from the database.
exports.findAll = (req, res) => {
    var employeeName = req.query.name
    var sortOrder = [
        ['ABKEY', 'ASC'],
    ]
    console.log(sortOrder)
    console.log(employeeName)

    Ppay121s.findAll({ order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppay121s."
            });
        });
};;