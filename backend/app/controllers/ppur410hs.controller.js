const db = require("../models");
const Ppur410hs = db.ppur410hs;
const Op = db.Sequelize.Op;

// Retrieve all ppur410hs from the database.
exports.findOne = (req, res) => {
    console.log(req.query)
    var  poDoc = req.query.poDoc
    var poNum = req.query.poNum
    var condition = { 
        PODOC: poDoc,
        PO: Number(poNum) 
    };

    Ppur410hs.findAll({ where: condition })
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