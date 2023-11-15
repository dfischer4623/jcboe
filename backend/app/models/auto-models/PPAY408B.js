const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY408B', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLSSN: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    TWLJOB: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLJSQ: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLPED: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    TWLLIN: {
      type: DataTypes.TIME,
      allowNull: false
    },
    TWLSRL: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLDAT: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    TWLDAY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLLOC: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLDES: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TWLQTY: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TWLTYP: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLORT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TWLRAT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TWLACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TWLXSN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLXJB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TWLXJS: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLXSR: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLSPF: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLSPT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLSCD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    TWLCUS: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TWLCDT: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY408B',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
