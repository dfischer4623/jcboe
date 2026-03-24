module.exports = (sequelize, Sequelize) => {
  const Pfrs860s = sequelize.define("pfrs860s", {
    W2CLYR: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    W2SSN: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    W2ESTB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LOC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2FEIN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    W2NAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2ADD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2ADD2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2CTY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2ST: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2FPC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2ZIP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2ZIP2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SEC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2FICW: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2FICT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2FICM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2WAGE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2FTWH: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2FMWH: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2FEDT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2ALOT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2BEN: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2SSTC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SST2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SEIN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SEI2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SENC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SEN2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2STPC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2STP2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SWAG: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SWA2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SITW: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SIT2: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2SOTH: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SOT2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2STRP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2STR2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LEIN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LEI2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LTPC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LTP2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LENC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LEN2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LWAG: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LWA2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LITW: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LIT2: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2LTRP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LTR2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2GTLC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DCC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2UEFT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2AEIC: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2DFRD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DTOT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DAMT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DAM2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DAM3: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2DAM4: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    W2DCH1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DCH2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DCH3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DCH4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DMS1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DMS2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DMS3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2DMS4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2RET: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2LNA2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SNA2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2MSGF: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2MSG1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2MSG2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2MSG3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2B181: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2B182: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2B183: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2SUPP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2N457: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2N45S: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2NQPL: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2NQMS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W23PSP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2USG: {
      type: Sequelize.STRING(50), 
      allowNull: true
    },
    W2BUSY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    W2FNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATEONLY,
      allowNull: true
    }
  });
 
    return Pfrs860s;
  };
