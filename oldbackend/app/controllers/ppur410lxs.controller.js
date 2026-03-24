const db = require("../models");
const Ppur410lxs = db.ppur410lxs;
const Op = db.Sequelize.Op;

// Retrieve all ppur410lxs from the database based on a condition.
// FIX: Changed function name from findOne to findAll to match the router.
exports.findAll = (req, res) => {
    console.log(req.query);
    var poDoc = req.query.poDoc;
    var poNum = req.query.poNum;
    var condition = { 
        PODOC: poDoc,
        PO: Number(poNum) 
    };

    Ppur410lxs.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.ppur410lxs."
            });
        });
};