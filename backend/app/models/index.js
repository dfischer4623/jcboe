const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require("./employee.model.js")(sequelize, Sequelize);
db.ppay802s = require("./ppay802s.model.js")(sequelize, Sequelize);
db.ppai719as = require("./ppai719as.model.js")(sequelize, Sequelize);
db.peis480ds = require("./peis480ds.model.js")(sequelize, Sequelize);
db.certificates = require("./certificates.model.js")(sequelize, Sequelize);
db.salaries = require("./salaries.model.js")(sequelize, Sequelize);

module.exports = db;