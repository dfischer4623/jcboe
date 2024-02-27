const db = require("../models");
const Ppai715s = db.ppai715s;
const Op = db.Sequelize.Op;

// Retrieve all ppai715s from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { PCSSN: Number(empNum) } ;
    var sortOrder = [
        ['PCRUN', 'DESC'],
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