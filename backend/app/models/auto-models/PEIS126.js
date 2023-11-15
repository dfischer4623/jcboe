const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS126', {
    SCCODE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    SCNAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SCSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SCUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SCBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS126',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
