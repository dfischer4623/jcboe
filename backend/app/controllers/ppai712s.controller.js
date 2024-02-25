const db = require("../models");
const Ppai712s = db.ppai712s;
const Op = db.Sequelize.Op;

// Retrieve all ppai712s from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { PCSSN: Number(empNum) } ;
    var sortOrder = [
        ['PCRUN', 'DESC'],
    ]
    Ppai712s.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppai712s."
            });
        });
};;