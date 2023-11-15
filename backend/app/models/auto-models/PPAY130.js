const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY130', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TRMCDE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TRMGRP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TRMTTL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TRMDS1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TRMDS2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TRMDS3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TRMDS4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TRMDS5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TRMDST: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY130',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
