const { ppay802s } = require("../models/index.js");

module.exports = app => {
    
    const employees = require("../controllers/employee.controller.js");

    var router = require("express").Router();

    // Retrieve "all or search" from employees
    router.get("/", employees.findAll);

    // Retrieve an employee from employees using id
    router.get("/:id", employees.findOne);

    // Retrieve "all or search" from ppay802s
    router.get("/", ppay802s.findAll);

    app.use('/api/employees', router);
};