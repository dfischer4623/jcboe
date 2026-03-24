const db = require("../models");
const S3_VendorCheckRegister = db.S3_VendorCheckRegister;
const { fn, col, where, Op } = db.Sequelize;
const { logError } = require('../utils/logger'); // import logger
// Find all vendor check register entries by vendorNumber
exports.findByVendorNumber = (req, res) => {
 const vendorNumber = req.params.vendorNumber?.trim(); // ✅ Trim input safely

    S3_VendorCheckRegister.findAll({ 
          where: where(
      fn("TRIM", col("Vendor#")), // ✅ Trim DB column
      {
        [Op.eq]: vendorNumber,         // ✅ Compare with trimmed input
      }
    ),
        order: [ ['year', 'ASC'],    ['checkNumber', 'DESC']] // also using model field
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
            logError('/api/s3-vendor-checks/:vendorNumber', err);
        console.error("Error in findByVendorNumber:", err);
        res.status(500).send({
            message: `Error retrieving vendor check register for vendorNumber ${vendorNumber}: ${err.message}`
        });
    });
};
