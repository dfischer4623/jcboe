const db = require("../models");
const PurchaseOrders = db.purchaseOrders;
const Op = db.Sequelize.Op;

// Retrieve all purchaseOrders from the database.
exports.findAll = (req, res) => {
    console.log(req.query)
    var  poDoc = req.query.poDoc
    var poNum = req.query.poNum
    var condition = { 
        PODOC: poDoc,
        PO: Number(poNum) 
    };

    PurchaseOrders.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving dbo.purchaseOrders."
            });
        });
};;