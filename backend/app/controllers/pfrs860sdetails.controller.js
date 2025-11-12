const db = require("../models");
const Pfrs860s = db.pfrs860s;
const Op = db.Sequelize.Op;

// Find a single dbo.pfrs860s with an id
exports.findAll = (req, res) => {
    var ssn = req.query.W2SSN
    var estb = req.query.W2ESTB
    var year = req.query.W2CLYR
    var condition = { W2CLYR: Number(year), W2SSN: Number(ssn), W2ESTB: String(estb) };
    Pfrs860s.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: "Error retrieving dbo.pfrs860s with req.query=" + req.query
            });
        });
};