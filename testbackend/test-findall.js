const db = require("./app/models");
const PSTU301D = db.PSTU301D;

console.log("Starting findAll test...");
PSTU301D.findAll({ where: {}, limit: 100 })
    .then(data => {
        console.log("Success! Found " + data.length + " students.");
        if (data.length > 0) {
            console.log("First student: " + JSON.stringify(data[0].toJSON(), null, 2));
        }
        process.exit(0);
    })
    .catch(err => {
        console.error("Error in findAll test:", err);
        process.exit(1);
    });
