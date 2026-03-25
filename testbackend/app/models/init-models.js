var DataTypes = require("sequelize").DataTypes;
var _PATT420 = require("./PATT420.model");
var _PGRD450 = require("./PGRD450.model");
var _PSTU301D = require("./PSTU301D.model");
var _PSTU320D = require("./PSTU320D.model");
var _PSTU350D = require("./PSTU350D.model");
var _PSTU360D = require("./PSTU360D.model");

function initModels(sequelize) {
  var PATT420 = _PATT420(sequelize, DataTypes);
  var PGRD450 = _PGRD450(sequelize, DataTypes);
  var PSTU301D = _PSTU301D(sequelize, DataTypes);
  var PSTU320D = _PSTU320D(sequelize, DataTypes);
  var PSTU350D = _PSTU350D(sequelize, DataTypes);
  var PSTU360D = _PSTU360D(sequelize, DataTypes);


  return {
    PATT420,
    PGRD450,
    PSTU301D,
    PSTU320D,
    PSTU350D,
    PSTU360D,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
