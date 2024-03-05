const { db } = require("../models/index.js");

module.exports = app => {

    const employees = require("../controllers/employee.controller.js");
    const ppay802s = require("../controllers/ppay802.controller.js");
    const ppai719as = require("../controllers/ppai719as.controller.js");
    const peis480ds = require("../controllers/peis480ds.controller.js");
    const certificates = require("../controllers/certificates.controller.js");
    const salaries = require("../controllers/salaries.controller.js");
    const ppay3403s = require("../controllers/ppay3403s.controller.js");
    const peis480hs = require("../controllers/peis480hs.controller.js");
    const ppai712s = require("../controllers/ppai712s.controller.js");
    const ppai713s = require("../controllers/ppai713s.controller.js");
    const ppai715s = require("../controllers/ppai715s.controller.js");
    const ppay121s = require("../controllers/ppay121s.controller.js");
    
    var router = require("express").Router();

    // Retrieve "all or search" from employees
    router.get("/", employees.findAll);

    // Retrieve "all or search" from ppay802s
    router.get("/attendance/:id", ppay802s.findAll);

    // Retrieve ppay121s
    router.get("/ppay121s", ppay121s.findAll);

    // Retrieve "all or search" from ppay802s
    router.get("/attendancedetail/:id", ppai719as.findAll);

    // Retrieve "all or search" from peis480ds
    router.get("/miscdata/:id", peis480ds.findAll);

    // Retrieve "all or search" from certificates
    router.get("/certificates/:id", certificates.findAll);

    // Retrieve "all or search" from assignments/contracts
    router.get("/salaries/:id", salaries.findAll);

    // Retrieve "all or search" from voluntary deductions
    router.get("/voldeductions/:id", ppay3403s.findAll);

    // Retrieve "all or search" from voluntary deductions
    router.get("/tags/:id", peis480hs.findAll);

    // Retrieve "all or search" from voluntary deductions
    router.get("/payroll/:id", ppai712s.findAll);

    // Retrieve "all or search" from voluntary deductions
    router.get("/payrollCheck/", ppai713s.findAll);

    // Retrieve "all or search" from voluntary deductions
    router.get("/payrollCheckDeductions/", ppai715s.findAll);

    // Retrieve an employee from employees using id
    router.get("/:id", employees.findOne);

    app.use('/api/employees', router);
};