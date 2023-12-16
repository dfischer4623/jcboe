const db = require("../models");
const Peis205 = db.peis205s;
const Op = db.Sequelize.Op;


// Find a single Peis205 with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(req.params)
    Peis205.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Peis205 with id=" + id
            });
        });
};