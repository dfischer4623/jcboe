const db = require("../models");
const Peis480hs = db.peis480hs;
const Op = db.Sequelize.Op;

// Retrieve all peis480hs from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { PA: Number(empNum) } ;
    var sortOrder = [
        ['PACENT', 'ASC'],
        ['PADATE', 'ASC']
    ]
    Peis480hs.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.peis480hs."
            });
        });
};;