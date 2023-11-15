const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI719B', {
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLRUN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLRSQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLSSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLJSQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLPED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLLIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLSRL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLDAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLDAY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLQTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLORT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLRAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLXSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLXJB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLXJS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLXSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLSPF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLSPT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLSCD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLCUS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLCDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAI719B',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
