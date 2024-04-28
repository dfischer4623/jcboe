const db = require("../models");
const Lacp441s = db.lacp441s;
const Op = db.Sequelize.Op;

// Retrieve all lacp441s from the database.

exports.findOne = (req, res) => {
    console.log(req.query)
    var aphbnk = req.query.aphbnk
    var aphbac = req.query.aphbac
    var condition =  { 
        APHBNK: aphbnk,
        APHBAC: aphbac
    } 
    
    console.log(condition)
    var sortOrder = [
        ['APHPOV', 'ASC'],
    ]
    
    Lacp441s.findOne({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.lacp441s."
            });
        });
};;