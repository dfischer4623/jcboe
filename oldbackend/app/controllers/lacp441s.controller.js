const db = require("../models");
const Lacp441s = db.lacp441s;
const Op = db.Sequelize.Op;

// Retrieve all lacp441s from the database.

exports.findAll = (req, res) => {
    console.log(req.query)
    var aphbnk = req.query.aphbnk
    var aphbac = req.query.aphbac
    var aphfrm = req.query.aphfrm
    var aphchk = req.query.aphchk
    var aphven = req.query.aphven

    var condition =  { 
        APHBNK: aphbnk,
        APHBAC: aphbac,
        APHFRM: aphfrm,
        APHCHK: aphchk,
        APHVEN: aphven
    } 
    
    console.log(condition)
    var sortOrder = [
        ['APHNAM', 'ASC'],
    ]
    
    Lacp441s.findAll({ where: condition, order: sortOrder })    
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



// Retrieve all lacp441s from the database.

exports.checkSearch = (req, res) => {
    console.log(req.query)

    var aphven = req.query.aphven

    var condition =  { 
      
        APHVEN: aphven
    } 
    
    console.log(condition)
    var sortOrder = [
        ['APHNAM', 'ASC'],
    ]
    
    Lacp441s.findAll({ where: condition, order: sortOrder })    
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