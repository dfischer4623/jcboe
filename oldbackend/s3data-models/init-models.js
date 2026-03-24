var DataTypes = require("sequelize").DataTypes;
var _CR_Staging_2016_1 = require("./CR_Staging_2016_1");
var _CR_Staging_2017_1 = require("./CR_Staging_2017_1");
var _CR_Staging_2018_1 = require("./CR_Staging_2018_1");
var _CR_Staging_2019_1 = require("./CR_Staging_2019_1");
var _CR_Staging_2020_1 = require("./CR_Staging_2020_1");
var _CR_Staging_2021_1 = require("./CR_Staging_2021_1");
var _CR_Staging_2022_1 = require("./CR_Staging_2022_1");
var _CR_Staging_2023_1 = require("./CR_Staging_2023_1");
var _CR_Staging_2024_1 = require("./CR_Staging_2024_1");
var _CR_Staging_2025_1 = require("./CR_Staging_2025_1");
var _CheckRegister-2024 = require("./CheckRegister-2024");
var _S3_Absence2025 = require("./S3_Absence2025");
var _S3_CheckRegister = require("./S3_CheckRegister");
var _S3_EmpPayOutput = require("./S3_EmpPayOutput");
var _S3_EmpPayoutputHistory = require("./S3_EmpPayoutputHistory");
var _S3_PO_ShipToLocation = require("./S3_PO_ShipToLocation");
var _S3_ProfileReport = require("./S3_ProfileReport");
var _S3_PurchaseOrders = require("./S3_PurchaseOrders");
var _S3_VendorCheckRegister = require("./S3_VendorCheckRegister");
var _S3_VendorMaster = require("./S3_VendorMaster");
var _S3_W2 = require("./S3_W2");
var _S3_W22019 = require("./S3_W22019");
var _S3_W22020 = require("./S3_W22020");
var _S3_W22021 = require("./S3_W22021");
var _S3_W22022 = require("./S3_W22022");
var _S3_W22023 = require("./S3_W22023");
var _S3_W22024 = require("./S3_W22024");
var _S3_ratebase2017 = require("./S3_ratebase2017");
var _S3_ratebase2018 = require("./S3_ratebase2018");
var _S3_ratebase2019 = require("./S3_ratebase2019");
var _S3_ratebase2020 = require("./S3_ratebase2020");
var _S3_ratebase2021 = require("./S3_ratebase2021");
var _S3_ratebase2022 = require("./S3_ratebase2022");
var _S3_ratebase2023 = require("./S3_ratebase2023");
var _S3_ratebase2024 = require("./S3_ratebase2024");
var _S3_ratebase2025 = require("./S3_ratebase2025");
var _UKG-Absences = require("./UKG-Absences");
var _UKG-Exceptions = require("./UKG-Exceptions");
var _ratebase2017 = require("./ratebase2017");

function initModels(sequelize) {
  var CR_Staging_2016_1 = _CR_Staging_2016_1(sequelize, DataTypes);
  var CR_Staging_2017_1 = _CR_Staging_2017_1(sequelize, DataTypes);
  var CR_Staging_2018_1 = _CR_Staging_2018_1(sequelize, DataTypes);
  var CR_Staging_2019_1 = _CR_Staging_2019_1(sequelize, DataTypes);
  var CR_Staging_2020_1 = _CR_Staging_2020_1(sequelize, DataTypes);
  var CR_Staging_2021_1 = _CR_Staging_2021_1(sequelize, DataTypes);
  var CR_Staging_2022_1 = _CR_Staging_2022_1(sequelize, DataTypes);
  var CR_Staging_2023_1 = _CR_Staging_2023_1(sequelize, DataTypes);
  var CR_Staging_2024_1 = _CR_Staging_2024_1(sequelize, DataTypes);
  var CR_Staging_2025_1 = _CR_Staging_2025_1(sequelize, DataTypes);
  var CheckRegister-2024 = _CheckRegister-2024(sequelize, DataTypes);
  var S3_Absence2025 = _S3_Absence2025(sequelize, DataTypes);
  var S3_CheckRegister = _S3_CheckRegister(sequelize, DataTypes);
  var S3_EmpPayOutput = _S3_EmpPayOutput(sequelize, DataTypes);
  var S3_EmpPayoutputHistory = _S3_EmpPayoutputHistory(sequelize, DataTypes);
  var S3_PO_ShipToLocation = _S3_PO_ShipToLocation(sequelize, DataTypes);
  var S3_ProfileReport = _S3_ProfileReport(sequelize, DataTypes);
  var S3_PurchaseOrders = _S3_PurchaseOrders(sequelize, DataTypes);
  var S3_VendorCheckRegister = _S3_VendorCheckRegister(sequelize, DataTypes);
  var S3_VendorMaster = _S3_VendorMaster(sequelize, DataTypes);
  var S3_W2 = _S3_W2(sequelize, DataTypes);
  var S3_W22019 = _S3_W22019(sequelize, DataTypes);
  var S3_W22020 = _S3_W22020(sequelize, DataTypes);
  var S3_W22021 = _S3_W22021(sequelize, DataTypes);
  var S3_W22022 = _S3_W22022(sequelize, DataTypes);
  var S3_W22023 = _S3_W22023(sequelize, DataTypes);
  var S3_W22024 = _S3_W22024(sequelize, DataTypes);
  var S3_ratebase2017 = _S3_ratebase2017(sequelize, DataTypes);
  var S3_ratebase2018 = _S3_ratebase2018(sequelize, DataTypes);
  var S3_ratebase2019 = _S3_ratebase2019(sequelize, DataTypes);
  var S3_ratebase2020 = _S3_ratebase2020(sequelize, DataTypes);
  var S3_ratebase2021 = _S3_ratebase2021(sequelize, DataTypes);
  var S3_ratebase2022 = _S3_ratebase2022(sequelize, DataTypes);
  var S3_ratebase2023 = _S3_ratebase2023(sequelize, DataTypes);
  var S3_ratebase2024 = _S3_ratebase2024(sequelize, DataTypes);
  var S3_ratebase2025 = _S3_ratebase2025(sequelize, DataTypes);
  var UKG-Absences = _UKG-Absences(sequelize, DataTypes);
  var UKG-Exceptions = _UKG-Exceptions(sequelize, DataTypes);
  var ratebase2017 = _ratebase2017(sequelize, DataTypes);


  return {
    CR_Staging_2016_1,
    CR_Staging_2017_1,
    CR_Staging_2018_1,
    CR_Staging_2019_1,
    CR_Staging_2020_1,
    CR_Staging_2021_1,
    CR_Staging_2022_1,
    CR_Staging_2023_1,
    CR_Staging_2024_1,
    CR_Staging_2025_1,
    CheckRegister-2024,
    S3_Absence2025,
    S3_CheckRegister,
    S3_EmpPayOutput,
    S3_EmpPayoutputHistory,
    S3_PO_ShipToLocation,
    S3_ProfileReport,
    S3_PurchaseOrders,
    S3_VendorCheckRegister,
    S3_VendorMaster,
    S3_W2,
    S3_W22019,
    S3_W22020,
    S3_W22021,
    S3_W22022,
    S3_W22023,
    S3_W22024,
    S3_ratebase2017,
    S3_ratebase2018,
    S3_ratebase2019,
    S3_ratebase2020,
    S3_ratebase2021,
    S3_ratebase2022,
    S3_ratebase2023,
    S3_ratebase2024,
    S3_ratebase2025,
    UKG-Absences,
    UKG-Exceptions,
    ratebase2017,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
