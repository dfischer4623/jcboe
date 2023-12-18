const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

// Retrieve all Peis301s from the database.
exports.findAll = (req, res) => {
    const lname = req.query.sValue;
    var condition = lname ? { EMLNAM: { [Op.like]: `%${lname}%` } } : null;
    console.log(req.query)
    Employee.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Peis301s."
            });
        });
};;

// Find a single Peis301 with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(req.params)
    Employee.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Peis301 with id=" + id
            });
        });
};