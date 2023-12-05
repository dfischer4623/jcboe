module.exports = app => {
    const logins = require("../controllers/login.controller.js");
    const peis301s = require("../controllers/peis301.controller.js");

    var router = require("express").Router();

    // Retrieve from Login
    router.get("/login", logins.findAll);

    // Retrieve "all or search" from Peis301s
    router.get("/", peis301s.findAll);

    // Retrieve an employee from Peis301 using id
    router.get("/:id", peis301s.findOne);

    app.use('/api/logins', router);
    app.use('/api/peis301s', router);
};