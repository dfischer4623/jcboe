const db = require("../models");
const S3_VendorCheckRegister = db.S3_VendorCheckRegister;
const Op = db.Sequelize.Op;

// Find all vendor check register entries by Vendor#
exports.findByVendorNumber = (req, res) => {
    const vendorNumber = req.params.vendorNumber;
    const sortOrder = [['Check#', 'DESC']];

    S3_VendorCheckRegister.findAll({ 
        where: { 
            'Vendor#': vendorNumber 
        },
        order: sortOrder
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error("Error in findByVendorNumber:", err);
            res.status(500).send({
                message: `Error retrieving vendor check register for Vendor# ${vendorNumber}: ${err.message}`
            });
        });
};