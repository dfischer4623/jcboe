const db = require("../models");
const Ppur201s = db.ppur201s;
const Op = db.Sequelize.Op;

// Retrieve all ppur201s from the database.
exports.findOne = (req, res) => {
    var shCode = req.params.shCode
    var condition = { SHCODE: shCode } ;

    Ppur201s.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppur201s."
            });
        });
};;