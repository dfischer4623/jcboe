const db = require("../models");
const Peis480ds = db.peis480ds;
const Op = db.Sequelize.Op;

// Retrieve all peis480ds from the database.
exports.findAll = (req, res) => {
    var empNum = req.params.id
    var condition = { PC: Number(empNum) } ;
    var sortOrder = [
        ['PCLINE', 'ASC'],
    ]
    Peis480ds.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.peis480ds."
            });
        });
};;