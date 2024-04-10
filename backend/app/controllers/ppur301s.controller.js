const db = require("../models");
const Ppur301s = db.ppur301s;
const Op = db.Sequelize.Op;

// Retrieve all ppur301s from the database.
exports.findOne = (req, res) => {
    var venNum = req.params.id
    var condition = { VNNO: Number(venNum) };

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