const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppur201s', {
    ADAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RETN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SESN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHZIP2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHPROV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHAREA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SHPHON: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
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
