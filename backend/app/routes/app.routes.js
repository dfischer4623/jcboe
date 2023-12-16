module.exports = app => {
    
    const peis301s = require("../controllers/peis301.controller.js");
    const peis205s = require("../controllers/peis205.controller.js");

    var router = require("express").Router();

    // Retrieve "all or search" from Peis301s
    router.get("/", peis301s.findAll);

    // Retrieve an employee from Peis301 using id
    router.get("/:id", peis301s.findOne);

    // Retrieve data from Peis205 using id
    router.get("/:id", peis205s.findOne);

    app.use('/api/peis301s', router);
    app.use('/api/peis205s', router);
};