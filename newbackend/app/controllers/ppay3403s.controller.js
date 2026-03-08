const db = require("../models");
const Ppay3403s = db.ppay3403s;
const Op = db.Sequelize.Op;

// Retrieve all ppay3403s from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { DVSSAN: Number(empNum) } ;
    var sortOrder = [
        ['schyear', 'ASC'],
        ['DVDED', 'ASC'],
    ]
    Ppay3403s.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppay3403s."
            });
        });
};;