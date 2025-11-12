const db = require("../models");
const S3_VendorMaster = db.S3_VendorMaster;
const Op = db.Sequelize.Op;

// Find a single vendor by Vendor #
exports.findByVendorNumber = (req, res) => {
    const vendorNumber = req.params.vendorNumber;
    
    S3_VendorMaster.findOne({ 
        where: { 
            'Vendor #': vendorNumber 
        } 
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No vendor found with Vendor # ${vendorNumber}`
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            console.error("Error in findByVendorNumber:", err);
            res.status(500).send({
                message: `Error retrieving vendor with Vendor # ${vendorNumber}: ${err.message}`
            });
        });
};

// Find vendors by Index name (supports partial matching)
exports.findByIndexName = (req, res) => {
    const indexName = req.query.indexName;
    const condition = indexName ? { 'Index name': { [Op.like]: `%${indexName}%` } } : null;
    const sortOrder = [['Index name', 'ASC']];

    S3_VendorMaster.findAll({ 
        where: condition, 
        order: sortOrder 
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error("Error in findByIndexName:", err);
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving vendors by index name."
            });
        });
};