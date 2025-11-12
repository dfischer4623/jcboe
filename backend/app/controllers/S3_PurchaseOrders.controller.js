const db = require("../models");
const S3_PurchaseOrders = db.S3_PurchaseOrders;
const Op = db.Sequelize.Op;

// Find all purchase orders by Vendor #
exports.findByVendorNumber = (req, res) => {
    const vendorNumber = req.params.vendorNumber;
    const sortOrder = [['PO#', 'ASC']];

    S3_PurchaseOrders.findAll({ 
        where: { 
            'Vendor #': vendorNumber 
        },
        order: sortOrder
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error("Error in findByVendorNumber:", err);
            res.status(500).send({
                message: `Error retrieving purchase orders for Vendor # ${vendorNumber}: ${err.message}`
            });
        });
};