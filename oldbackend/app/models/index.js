const Sequelize = require("sequelize");
// Database configurations
const as400Config = require("../config/db.config.js"); 
const s3Config = require("../config/db.config.s3data.js");

// Create two separate Sequelize instances for each database
const as400sequelize = new Sequelize(
  as400Config.database,
  as400Config.username,
  as400Config.password,
  {
    host: as400Config.host,
    dialect: as400Config.dialect,
    port: as400Config.port,
    pool: as400Config.pool,
    dialectOptions: as400Config.dialectOptions
  }
);

const s3sequelize = new Sequelize(
  s3Config.database,
  s3Config.username,
  s3Config.password,
  {
    host: s3Config.host,
    dialect: s3Config.dialect,
    port: s3Config.port,
    pool: s3Config.pool,
    dialectOptions: s3Config.dialectOptions,
    attributeBehavior: 'escape'
  }
);

const db = {};

db.Sequelize = Sequelize;
// Keep original sequelize for backward compatibility (as400data)
db.sequelize = as400sequelize;
// Add new connections
db.as400sequelize = as400sequelize;
db.s3sequelize = s3sequelize;

// AS400DATA MODELS (existing models using as400data database)
db.employees = require("./employee.model.js")(as400sequelize, Sequelize);
db.ppay802s = require("./ppay802s.model.js")(as400sequelize, Sequelize);
db.ppai719as = require("./ppai719as.model.js")(as400sequelize, Sequelize);
db.peis480ds = require("./peis480ds.model.js")(as400sequelize, Sequelize);
db.certificates = require("./certificates.model.js")(as400sequelize, Sequelize);
db.salaries = require("./salaries.model.js")(as400sequelize, Sequelize);
db.ppay3403s = require("./ppay3403s.model.js")(as400sequelize, Sequelize);
db.peis480hs = require("./peis480hs.model.js")(as400sequelize, Sequelize);
db.ppai712s = require("./ppai712s.model.js")(as400sequelize, Sequelize);
db.ppai713s = require("./ppai713s.model.js")(as400sequelize, Sequelize);
db.ppai715s = require("./ppai715s.model.js")(as400sequelize, Sequelize);
db.ppay121s = require("./ppay121s.model.js")(as400sequelize, Sequelize);
db.ppay122s = require("./ppay122s.model.js")(as400sequelize, Sequelize);
db.ppay125s = require("./ppay125s.model.js")(as400sequelize, Sequelize);
db.ppay124s = require("./ppay124s.model.js")(as400sequelize, Sequelize);
db.ppay127s = require("./ppay127s.model.js")(as400sequelize, Sequelize);
db.pfrs860s = require("./pfrs860s.model.js")(as400sequelize, Sequelize);
db.purchaseOrders = require("./purchaseOrders.model.js")(as400sequelize, Sequelize);
db.ppur301s = require("./ppur301s.model.js")(as400sequelize, Sequelize);
db.lacp441s = require("./lacp441s.model.js")(as400sequelize, Sequelize);
db.users = require("./users.model.js")(as400sequelize, Sequelize); 
db.ppur410lxs = require("./ppur410lxs.model.js")(as400sequelize, Sequelize);

// S3DATA MODELS (models that use s3data database)
db.S3_PO_ShipToLocation = require("./S3_PO_ShipToLocation.js")(s3sequelize, Sequelize);
db.S3_PurchaseOrders = require("./S3_PurchaseOrders.js")(s3sequelize, Sequelize);
db.S3_VendorCheckRegister = require("./S3_VendorCheckRegister.js")(s3sequelize, Sequelize);
db.S3_VendorMaster = require("./S3_VendorMaster.js")(s3sequelize, Sequelize); 

module.exports = db;