module.exports = (sequelize, Sequelize) => {
  const Pfrs860s = sequelize.define("pfrs860s", {
    W2CLYR: {
      type: Sequilize.TINYINT,
      allowNull: true
    },
    W2SSN: {
      type: Sequilize.INTEGER,
      allowNull: true
    },
    W2ESTB: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LOC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2FEIN: {
      type: Sequilize.INTEGER,
      allowNull: true
    },
    W2NAM: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2ADD: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2ADD2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2CTY: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2ST: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2FPC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2ZIP: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2ZIP2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SEC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2FICW: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2FICT: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2FICM: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2WAGE: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2FTWH: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2FMWH: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2FEDT: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2ALOT: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2BEN: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2SSTC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SST2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SEIN: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SEI2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SENC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SEN2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2STPC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2STP2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SWAG: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SWA2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SITW: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SIT2: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2SOTH: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SOT2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2STRP: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2STR2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LEIN: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LEI2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LTPC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LTP2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LENC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LEN2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LWAG: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LWA2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LITW: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LIT2: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2LTRP: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LTR2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2GTLC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DCC: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2UEFT: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2AEIC: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2DFRD: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DTOT: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DAMT: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DAM2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DAM3: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2DAM4: {
      type: Sequilize.FLOAT,
      allowNull: true
    },
    W2DCH1: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DCH2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DCH3: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DCH4: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DMS1: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DMS2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DMS3: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2DMS4: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2RET: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LNAM: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2LNA2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SNAM: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SNA2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2MSGF: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2MSG1: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2MSG2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2MSG3: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2B181: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2B182: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2B183: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2SUPP: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2N457: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2N45S: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2NQPL: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2NQMS: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W23PSP: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2USG: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2BUSY: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    W2FNAM: {
      type: Sequilize.STRING(50),
      allowNull: true
    }
  });
 
    return Pfrs860s;
  };
