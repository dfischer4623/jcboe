const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS151', {
    CYCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CYDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CYSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CYUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CYBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS151',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
