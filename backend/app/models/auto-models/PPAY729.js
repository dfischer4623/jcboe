const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY729', {
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
    SRT1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT5: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT6: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT7: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT8: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT9: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT10: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT11: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT12: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT13: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT14: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT15: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT16: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT17: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SRT18: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EMSSAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMHORG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMBLDG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMSTAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPASN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMMAJ1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMMIN1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMEXP1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMDEG1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMETH8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMSEX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMBDT1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EMBDT2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EMBDT3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EMCAT1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMCAT2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMCAT3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMCAT4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMCAT5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ACTIVE: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    TONLY: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DEDID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEDJUR: {
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
    WSBR18: {
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
      type: DataTypes.BOOLEAN,
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
      type: DataTypes.BOOLEAN,
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
      type: DataTypes.TINYINT,
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
    COL22: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL23: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL24: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL25: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL26: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL27: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL28: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL29: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL30: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL31: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    COL32: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MTTL1E: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MTTL2E: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MTTL3E: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MTTL4E: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL5E: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MTTL6E: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL7E: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MTTL8E: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL1R: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL2R: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL3R: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL4R: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL5R: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL6R: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL7R: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MTTL8R: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REPFMT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PYSSN: {
      type: DataTypes.INTEGER,
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
    PYJOB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCAT1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCAT2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCAT3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCAT4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCAT5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCT1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCT2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCT3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCT4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCT5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYSSNP: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PYAPHP: {
      type: DataTypes.TINYINT,
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
    PYJOBP: {
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
    tableName: 'PPAY729',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
