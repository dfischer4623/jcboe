const db = require("../models");
const Login = db.logins;
const Op = db.Sequelize.Op;

// Retrieve Login from the database.
exports.findAll = (req, res) => {
    console.log(req.query.id, req.query.password)
    Login.findAll({ where: { ID: req.query.id, PassWord: req.query.password } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving logins."
            });
        });
};;