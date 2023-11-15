const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY765L', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDLIND: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDLVND: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RDLDED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDLJUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDLINE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDLSEL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDLCOL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDLTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDLGRP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDLGTL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RDLSUB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDLDES: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY765L',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
