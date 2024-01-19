const { db } = require("../models/index.js");

module.exports = app => {

    const employees = require("../controllers/employee.controller.js");
    const ppay802s = require("../controllers/ppay802.controller.js");

    var router = require("express").Router();

    // Retrieve "all or search" from employees
    router.get("/", employees.findAll);

    // Retrieve "all or search" from ppay802s
    router.get("/attendance/:id", ppay802s.findAll);

    // Retrieve an employee from employees using id
    router.get("/:id", employees.findOne);

    app.use('/api/employees', router);
};