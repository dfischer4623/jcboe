const { db } = require("../models/index.js");

module.exports = app => {

    const employees = require("../controllers/employee.controller.js");
    const ppay802s = require("../controllers/ppay802.controller.js");
    const ppai719as = require("../controllers/ppai719as.controller.js");
    const peis480ds = require("../controllers/peis480ds.controller.js");
    const certificates = require("../controllers/certificates.controller.js");
    const salaries = require("../controllers/salaries.controller.js");

    var router = require("express").Router();

    // Retrieve "all or search" from employees
    router.get("/", employees.findAll);

    // Retrieve "all or search" from ppay802s
    router.get("/attendance/:id", ppay802s.findAll);

    // Retrieve "all or search" from ppay802s
    router.get("/attendancedetail?", ppai719as.findAll);

    // Retrieve "all or search" from peis480ds
    router.get("/miscdata/:id", peis480ds.findAll);

    // Retrieve "all or search" from certificates
    router.get("/certificates/:id", certificates.findAll);

    // Retrieve "all or search" from assignments/contracts
    router.get("/salaries/:id", salaries.findAll);

    // Retrieve an employee from employees using id
    router.get("/:id", employees.findOne);

    app.use('/api/employees', router);
};