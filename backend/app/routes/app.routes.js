//const { db } = require("../models/index.js");

module.exports = app => {

    const employees = require("../controllers/employee.controller.js");
    const ppay802s = require("../controllers/ppay802s.controller.js");
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
    const ppay122s = require("../controllers/ppay122s.controller.js");
    const ppay125s = require("../controllers/ppay125s.controller.js");
    const ppay124s = require("../controllers/ppay124s.controller.js");
    const ppay127s = require("../controllers/ppay127s.controller.js");
    const pfrs860s = require("../controllers/pfrs860s.controller.js");
    const pfrs860sdetails = require("../controllers/pfrs860sdetails.controller.js");
    const purchaseOrders = require("../controllers/purchaseOrders.controller.js");
    const ppur301s = require("../controllers/ppur301s.controller.js");
    const lacp441s = require("../controllers/lacp441s.controller.js");

    var router = require("express").Router();

    // Retrieve "all or search" from employees
    router.get("/", employees.findAll);

    // Retrieve "all or search" from ppay802s
    router.get("/attendance/:id", ppay802s.findAll);

    // Retrieve ppay121s
    router.get("/ppay121s", ppay121s.findAll);

    // Retrieve ppay122s
    router.get("/ppay122s", ppay122s.findAll);

    // Retrieve ppay125s
    router.get("/ppay125s", ppay125s.findAll);

    // Retrieve ppay124s
    router.get("/ppay124s", ppay124s.findAll);

    // Retrieve ppay127s
    router.get("/ppay127s", ppay127s.findAll);

    // Retrieve "all or search" from ppay802s
    router.get("/attendancedetail/:id", ppai719as.findAll);

    // Retrieve "all or search" from ppay802s
    router.get("/pfrs860s/:id", pfrs860s.findAll);

    // Retrieve an employee from employees using id
    router.get("/pfrs860sdetails/data", pfrs860sdetails.findAll);

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

    // Retrieve a purchase order from purchaseOrders using ?poDoc=POC11&poNum=91401
    router.get("/purchaseOrders/", purchaseOrders.findAll);

    // Retrieve "all or search" from lacp441s
    router.get("/lacp441s/", lacp441s.findAll);

    // Retrieve "all or search" from ppur301s
    router.get("/ppur301s/", ppur301s.findAll);

    // Retrieve a vendor from ppur301s using id
    router.get("/ppur301s/:id", ppur301s.findOne);

    // Retrieve an employee from employees using id
    router.get("/:id", employees.findOne);

    app.use('/api/employees', router);
};