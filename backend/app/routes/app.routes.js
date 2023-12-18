module.exports = app => {
    
    const employees = require("../controllers/employee.controller.js");

    var router = require("express").Router();

    // Retrieve "all or search" from Peis301s
    router.get("/", employees.findAll);

    // Retrieve an employee from Peis301 using id
    router.get("/:id", employees.findOne);

    app.use('/api/employees', router);
};