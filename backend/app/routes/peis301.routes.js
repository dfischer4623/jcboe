module.exports = app => {
    const peis301s = require("../controllers/peis301.controller.js");

    var router = require("express").Router();

    // Retrieve all Peis301s
    router.get("/", peis301s.findAll);

    // Retrieve a single Peis301 with id
    router.get("/:id", peis301s.findOne);

    app.use('/api/peis301s', router);
};