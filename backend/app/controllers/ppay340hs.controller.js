const db = require("../models");
const Ppay340hs = db.ppay340hs;
const Op = db.Sequelize.Op;

// Retrieve all ppay340hs from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { ASSSAN: Number(empNum) } ;
    var sortOrder = [
        ['STRDTE', 'ASC'],
        ['MEMBER', 'ASC'],
    ]
    Ppay340hs.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppay340hs."
            });
        });
};;