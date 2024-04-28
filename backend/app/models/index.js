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
db.ppay3403s = require("./ppay3403s.model.js")(sequelize, Sequelize);
db.peis480hs = require("./peis480hs.model.js")(sequelize, Sequelize);
db.ppai712s = require("./ppai712s.model.js")(sequelize, Sequelize);
db.ppai713s = require("./ppai713s.model.js")(sequelize, Sequelize);
db.ppai715s = require("./ppai715s.model.js")(sequelize, Sequelize);
db.ppay121s = require("./ppay121s.model.js")(sequelize, Sequelize);
db.ppay122s = require("./ppay122s.model.js")(sequelize, Sequelize);
db.ppay125s = require("./ppay125s.model.js")(sequelize, Sequelize);
db.ppay124s = require("./ppay124s.model.js")(sequelize, Sequelize);
db.ppay127s = require("./ppay127s.model.js")(sequelize, Sequelize);
db.pfrs860s = require("./pfrs860s.model.js")(sequelize, Sequelize);
db.purchaseOrders = require("./purchaseOrders.model.js")(sequelize, Sequelize);
db.ppur301s = require("./ppur301s.model.js")(sequelize, Sequelize);
db.lacp441s = require("./lacp441s.model.js")(sequelize, Sequelize);

module.exports = db;