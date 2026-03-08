const db = require("../models");
const S3_VendorMaster = db.S3_VendorMaster;
const { Op, fn, col, where } = db.Sequelize;
const { logError } = require('../utils/logger'); // import logger
// Find a single vendor by Vendor #
// Find a single vendor by vendorNumber
exports.findByVendorNumber = (req, res) => {
    const vendorNumber = req.params.vendorNumber;
    const sortOrder = [['indexName', 'ASC']];
    S3_VendorMaster.findOne({
        where: {
            vendorNumber: vendorNumber
        },
        order: sortOrder
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
                logError('/api/s3-vendor/:vendorNumber', err);
            console.error("Error in findByVendorNumber:", err);
            res.status(500).send({
                message: `Error retrieving vendor with Vendor Number: ${vendorNumber}: ${err.message}`
            });
        });
};

// Find vendors by indexName (supports partial matching)
exports.findByIndexName = (req, res) => {
    const indexName = req.query.indexName;

    
     const condition =  indexName
    ? where(fn('LOWER', col('Index name')), {
        [Op.like]: `%${indexName.toLowerCase()}%`
      })
    : null;;
    const sortOrder = [['indexName', 'ASC']];

    S3_VendorMaster.findAll({
        where: condition,
        order: sortOrder
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
                   logError('/api/s3-vendors', err);
            console.error("Error in findByIndexName:", err);
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving vendors by index name."
            });
        });
};