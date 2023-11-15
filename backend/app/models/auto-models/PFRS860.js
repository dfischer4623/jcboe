const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PFRS860', {
    W2CLYR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    W2SSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    W2ESTB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2LOC: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    W2FEIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    W2NAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2ADD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2ADD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2CTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2ST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2FPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2ZIP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    W2ZIP2: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    W2SEC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2FICW: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2FICT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2FICM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2WAGE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2FTWH: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2FMWH: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2FEDT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2ALOT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2BEN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2SSTC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    W2SST2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2SEIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2SEI2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2SENC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2SEN2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2STPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2STP2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2SWAG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2SWA2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2SITW: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2SIT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2SOTH: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2SOT2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2STRP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2STR2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2LEIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2LEI2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2LTPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2LTP2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2LENC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2LEN2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2LWAG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2LWA2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2LITW: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2LIT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2LTRP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2LTR2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2GTLC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2DCC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2UEFT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2AEIC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2DFRD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2DTOT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2DAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2DAM2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2DAM3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2DAM4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2DCH1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2DCH2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2DCH3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2DCH4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2DMS1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2DMS2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2DMS3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2DMS4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2RET: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2LNAM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2LNA2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2SNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2SNA2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2MSGF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2MSG1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2MSG2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    W2MSG3: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    W2B181: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2B182: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2B183: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2SUPP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2N457: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2N45S: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2NQPL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    W2NQMS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W23PSP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    W2BUSY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PFRS860',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
