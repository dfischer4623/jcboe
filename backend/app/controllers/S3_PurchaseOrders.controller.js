const db = require("../models");
const S3_PurchaseOrders = db.S3_PurchaseOrders;
const { fn, col, where, Op } = db.Sequelize;
const { logError } = require('../utils/logger'); // import logger
// Find all purchase orders by vendorNumber
exports.findByVendorNumber = (req, res) => {
 const vendorNumber = req.params.vendorNumber?.trim(); // ✅ Trim input safely

    S3_PurchaseOrders.findAll({ 
        where: where(
      fn("TRIM", col("Vendor#")), // ✅ Trim DB column
      {
        [Op.eq]: vendorNumber,         // ✅ Compare with trimmed input
      }
    ),
        order: [
             ['year', 'ASC'],       // first order by year
            ['poNumber', 'ASC']]   // ✅ Use model field name
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
           logError('/api/s3-purchase-orders/:vendorNumber', err);
        console.error("Error in findByVendorNumber:", err);
        res.status(500).send({
            message: `Error retrieving purchase orders for Vendor # ${vendorNumber}: ${err.message}`
        });
    });
};