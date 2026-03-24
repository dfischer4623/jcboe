var DataTypes = require("sequelize").DataTypes;
var _PSTU301D = require("./PSTU301D");
var _PSTU320D = require("./PSTU320D");
var _PSTU350D = require("./PSTU350D");
var _PSTU360D = require("./PSTU360D");

function initModels(sequelize) {
  var PSTU301D = _PSTU301D(sequelize, DataTypes);
  var PSTU320D = _PSTU320D(sequelize, DataTypes);
  var PSTU350D = _PSTU350D(sequelize, DataTypes);
  var PSTU360D = _PSTU360D(sequelize, DataTypes);


  return {
    PSTU301D,
    PSTU320D,
    PSTU350D,
    PSTU360D,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
