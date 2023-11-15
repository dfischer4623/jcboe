const db = require("../models");
const Peis301 = db.peis301s;
const Op = db.Sequelize.Op;

// Retrieve all Peis301s from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Peis301.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving peis301s."
            });
        });
};;

// Find a single Peis301 with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Peis301.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Peis301 with id=" + id
            });
        });
};