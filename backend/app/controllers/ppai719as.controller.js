const db = require("../models");
const Ppai719as = db.ppai719as;
const Op = db.Sequelize.Op;

// Retrieve all pp719as from the database.
exports.findAll = (req, res) => {
    var TMLSSN = req.query.TMLSSN
    var TMLJOB = req.query.TMLJOB
    var TMLABS = req.query.TMLABS
    console.log(TMLSSN + ' ' + TMLJOB + ' ' + TMLABS)
    var condition = { TMLSSN: TMLSSN, TMLJOB: TMLJOB, TMLABS: TMLABS } ;
    var sortOrder = [
        ['TMLPED', 'ASC'],
    ]
    console.log('-------------------')
    console.log(condition)
    console.log(sortOrder)
    Ppai719as.findAll({ where: condition, order: sortOrder })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppai719as."
            });
        });
};;