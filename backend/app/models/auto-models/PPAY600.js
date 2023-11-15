const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY600', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRSID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PREGRP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRESSN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRJB01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRJB15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRBNK1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRBAC1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRFRM1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRCHK1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRBKF1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRCPG1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRCLB1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRBNK2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRBAC2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRFRM2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRCHK2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRBKF2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRCPG2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRCLB2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRBNK3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRBAC3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRFRM3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRCHK3: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRBKF3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRCPG3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRCLB3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'PRVCH#': {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRTYP: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRCKDT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRPEDT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRTRDT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRPERD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRMAXC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PRMINC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PRMAXP: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PRCDAY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRDPRI: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRDDAC: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRABAC: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRVOLD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRABSM: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRCFIN: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRPYXT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRDEXT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRDFLG: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRVFIN: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRENAC: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRTDST: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PREDST: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRTHST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PREHST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PREATP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PREAPT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PREAKW: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRTCRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRABRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRJBPR: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PROPPR: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRFG01: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRFG02: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRFG03: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRFG04: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRFG05: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRFG06: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRFG07: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRFG08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG09: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRFG10: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRFG11: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRFG12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG16: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG17: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG18: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG19: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG20: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRAPAC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PROC01: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PROC02: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PROC03: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PROC04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROC15: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRMSF1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRMSF2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRCREG: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRDREG: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRABSL: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRDSTA: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRDSTE: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRDSEA: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRDSEE: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRACED: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRCOTH: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRSC01: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRSC02: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    PRSC03: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PROQ01: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROQ02: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROQ03: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROQ04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROQ05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROQ06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROQ07: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PROL01: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROL02: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROL03: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROL04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROL05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROL06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROL07: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRHD01: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRHD02: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD03: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD04: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD05: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD06: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD07: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD08: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD09: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD11: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD12: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD13: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD14: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD15: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRMSG1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PRMSG2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRMSG3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRCMSG: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRSUM1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRSUM2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSUM3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSUM4: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PRSUM5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSUM6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRSV01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV15: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRSV16: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV17: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV18: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV19: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV20: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSV21: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPR01: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRPR02: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRPR03: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRPR04: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRPR05: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRPR06: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY600',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
