const db = require("../models");
const Ppur410hs = db.ppur410hs;
const Op = db.Sequelize.Op;

// Retrieve all ppur410hs from the database.
exports.findAll = (req, res) => {
    var poNum = req.params.poNum
    var condition = { PO: Number(poNum) } ;
    var sortOrder = [
        ['PO', 'ASC'],
    ]
    console.log(sortOrder)

    Ppur410hs.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppur410hs."
            });
        });
};;