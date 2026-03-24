const db = require("../models");
const Ppai713s = db.ppai713s;
const Op = db.Sequelize.Op;

// Retrieve all ppai715s from the database.

exports.findAll = (req, res) => {
    console.log("🔍 Incoming request:", req.query); // Log request params

    var empNum = req.query.SSN;
    var run = req.query.RUN;

    if (!empNum || !run) {
        console.error("❌ Missing SSN or RUN parameters:", req.query);
        return res.status(400).send({ message: "Missing SSN or RUN parameters" });
    }

    console.log("🛠 Fetching payroll data for SSN:", empNum, " RUN:", run);

    var condition = { PASSN: Number(empNum), PARUN: Number(run) };
    var sortOrder = [['PARUN', 'ASC']];

    Ppai713s.findAll({ where: condition, order: sortOrder })
        .then(data => {
            if (!data.length) {
                console.warn("⚠️ No payroll data found for:", condition);
                return res.status(404).send({ message: "No payroll data found." });
            }
            console.log("✅ Data retrieved successfully:", data.length, "records");
            res.send(data);
        })
        .catch(err => {
            console.error("❌ Database error:", err);
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving payroll data."
            });
        });
};
