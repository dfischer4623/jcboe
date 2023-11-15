const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY151', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BDCODE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BDVALU: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    BDCOST: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    BDDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDPROF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDYR01: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BDMO01: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BODY01: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BDUSER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BDTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY151',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
