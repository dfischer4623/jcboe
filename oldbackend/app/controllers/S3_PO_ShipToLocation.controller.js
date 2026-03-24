const db = require("../models");
const S3_PO_ShipToLocation = db.S3_PO_ShipToLocation;
const Op = db.Sequelize.Op;

// Find a single ship-to location by Code
exports.findByCode = (req, res) => {
    const code = req.params.code;
    
    S3_PO_ShipToLocation.findOne({ 
        where: { 
            Code: code 
        } 
    })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `No ship-to location found with Code ${code}`
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            console.error("Error in findByCode:", err);
            res.status(500).send({
                message: `Error retrieving ship-to location with Code ${code}: ${err.message}`
            });
        });
};