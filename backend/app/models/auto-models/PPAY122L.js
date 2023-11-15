const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY122L', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DOLTAB: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DDLJUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDLPER: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DDLMAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDLHIG: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    DDLLIN: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    DDLLOW: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    DDLAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    DDLPCT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DDLEMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    DDLECT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY122L',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
