const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS121A', {
    CVCAT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CVCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CVDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CVUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CVBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS121A',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
