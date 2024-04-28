const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppur301s', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VNNO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNNAM2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNADDR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNADD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNATTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNCITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNZIP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNIP2: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    VNPROV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNRMAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNRMA1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNRMA2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNRMCT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNRMST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNRMZ1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNRMZ2: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    VNRMPR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VNRMPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VNAREA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNPHON: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNEXTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNREL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNCATY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VNHOLO: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    VNHOLP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNMIN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VNCASH: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VNTRAD: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VNSHIP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNPMT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNENC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VNACCR: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VNCUR: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VNPRI: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VNACCT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNPRY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    VNNOPO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VN1099: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VN10RF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNCR10: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    VNPY10: {
      type: DataTypes.FLOAT,
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
    tableName: 'ppur301s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
