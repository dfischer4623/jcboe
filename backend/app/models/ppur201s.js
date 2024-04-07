const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppur201s', {
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SHCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHATTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHADR1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHADR2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHCITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHZIP1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SHZIP2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SHPROV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SHPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SHAREA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SHPHON: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppur201s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
