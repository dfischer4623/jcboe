const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

// Retrieve all employees from the database.
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
                    err.message || "Some error occurred while retrieving dbo.employees."
            });
        });
};;

// Find a single dbo.employees with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    console.log(req.params)
    Employee.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving dbo.employees with id=" + id
            });
        });
};