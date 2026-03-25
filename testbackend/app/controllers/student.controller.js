const db = require("../models");
const PSTU301D = db.PSTU301D;
const PSTU320D = db.PSTU320D;
const PSTU350D = db.PSTU350D;
const PSTU360D = db.PSTU360D;
const PATT420 = db.PATT420;
const PGRD450 = db.PGRD450;
const Op = db.Sequelize.Op;

// Retrieve all students from the database.
exports.findAll = (req, res) => {
    const studentName = req.query.name;
    const studentId = req.query.studentId;

    let condition = {};
    if (studentName) {
        condition[Op.or] = [
            { STUSNM: { [Op.like]: `%${studentName}%` } },
            { STUFNM: { [Op.like]: `%${studentName}%` } }
        ];
    }
    if (studentId) {
        condition.STUID = studentId;
    }

    PSTU301D.findAll({ where: condition, limit: 100 })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error("Error in findAll students:", err);
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving students."
            });
        });
};

// Find a single student with details from all tables
exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const student = await PSTU301D.findOne({ where: { STUID: id } });
        if (!student) {
            return res.status(404).send({ message: "Student not found with id " + id });
        }

        // Fetch related data
        const registration = await PSTU360D.findAll({ where: { RGNSTU: id } });
        
        // Family data - linked by phone in PSTU350D
        const family = await PSTU350D.findOne({ 
            where: { 
                FAMARA: student.STUPHA,
                FAMPHN: student.STUPHN
            } 
        });

        // School data - linked by school id
        const school = await PSTU320D.findOne({ where: { SCHID: student.STUSCH } });

        // Attendance data - PATT420 (ABSSTU is the ID)
        const attendance = await PATT420.findAll({ where: { ABSSTU: id }, order: [['ABSCDT', 'DESC']] });

        // Grades/Transcript data - PGRD450 (TRNSTU is the ID)
        const grades = await PGRD450.findAll({ where: { TRNSTU: id }, order: [['TRNYR', 'DESC'], ['TRNTRM', 'DESC']] });

        res.send({
            student,
            registration,
            family,
            school,
            attendance,
            grades
        });
    } catch (err) {
        console.error("Error in findOne student details:", err);
        res.status(500).send({
            message: "Error retrieving student details with id=" + id + ": " + err.message
        });
    }
};
