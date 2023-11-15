const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY122I', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DATABL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DAJURS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DATYPE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DASCOD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DASJUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DAPROC: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DALLIN: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY122I',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
