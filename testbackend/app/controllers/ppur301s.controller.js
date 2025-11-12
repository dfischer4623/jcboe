const db = require("../models");
const Ppur301s = db.ppur301s;
const Op = db.Sequelize.Op;

// Retrieve all ppur301s from the database.

exports.findAll = (req, res) => {
    var vendorName = req.query.name
    var condition = vendorName ? { VNNAME: { [Op.like]: `%${vendorName}%` } } : null;
    var sortOrder = [
        ['VNNAME', 'ASC'],
    ]
    
    Ppur301s.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppur301s."
            });
        });
};;


exports.findOne = (req, res) => {
    var venNum = req.params.id
    var condition = { VNNO: venNum };

    Ppur301s.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppur301s."
            });
        });
};;