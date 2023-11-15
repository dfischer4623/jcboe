const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY121', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ABKEY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ABDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ABTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ABCAT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABSCAT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABQMON: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ABBONA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABTAX: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ABFICA: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ABBASE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ABFC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ABDH: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MN1: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MN2: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    MN3: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    MN4: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MN5: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MN6: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MN7: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MN8: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MN9: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MN10: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PR1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR3: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR4: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR5: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR6: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR7: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR8: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR9: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PR10: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR1: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR2: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR3: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR4: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR5: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR6: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR7: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR8: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR9: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    YR10: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABMNA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABMEA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABYRMA: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABDISP: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ABMND: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABMED: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABEXDD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ABDKRT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABDKPC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABACT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABEPCT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ABAL01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABOMIT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AVAIL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABAL1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY121',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
