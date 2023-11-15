const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY739', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ID: {
      type: DataTypes.STRING(1),
      allowNull: true,
      primaryKey: true
    },
    REPORT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TITLE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TONLY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABSID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WSBR01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR16: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    WSBR17: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUTOFF: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FORMNO: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COPIES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DEVICE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    LINES: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL5: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL6: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL7: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL8: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL9: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL10: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL11: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL12: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL13: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    COL14: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL15: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL16: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL17: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL18: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL19: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL20: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL21: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    REPFMT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PYSSN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYORG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYBLD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCC1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCC2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCC3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCC4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCC5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCV1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCV2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCV3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCB4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCV5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYSSNP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYAPHP: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PYORGP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYBLDP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYCT1P: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYCT2P: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYCT3P: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYCT4P: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYCT5P: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PYINOM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PYSNGL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PYAOOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY739',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
