const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY600H', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRSID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PREGRP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRESSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRJB01: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRJB02: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    PRJB03: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    PRJB04: {
      type: DataTypes.TIME,
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
    'PRRUN#': {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    PRPRTP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRRQER: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSBDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRSBTM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRSTDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRSTTM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRENDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRENTM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRUSER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRWKST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRBNK1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRBAC1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRFRM1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRCHK1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRBKF1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRCPG1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRCLB1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRBNK2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRBAC2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRFRM2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRCHK2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRBKF2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRCPG2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRCLB2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRBNK3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRBAC3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRFRM3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRCHK3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRBKF3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRCPG3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRCLB3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PRVCH#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRRTYP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRCKDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRPEDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRTRDT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRPERD: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRFYRE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRCYRE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRFMON: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRCMON: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRMAXC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRMINC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRMAXP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRCDAY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRDPRI: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRDDAC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PRABAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRVOLD: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRABSM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRTAXT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRFICT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRFICA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRCOMP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PREICT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHAAB: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRJURU: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRJURS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRJURC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRJURL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRJURO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRACGR: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRACDK: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRACD1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRACD2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRACD3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRACD4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PRACD5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PREMPR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PREMPD: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PREMUP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRCPD1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRCPD2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRCPD3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRCFIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRPYXT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRDEXT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRDFLG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRVFIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRENAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRTDST: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PREDST: {
      type: DataTypes.TINYINT,
      allowNull: true
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
      allowNull: true
    },
    PREAKW: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRTCRT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRABRT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRJBPR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PROPPR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRFG01: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRFG02: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRFG03: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRFG04: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRFG05: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRFG06: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PRFG07: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRFG08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG09: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRFG10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRFG11: {
      type: DataTypes.STRING(1),
      allowNull: true
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
      allowNull: true
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
      type: DataTypes.STRING(1),
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
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PRDREG: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRABSL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRDSTA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRDSTE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRDSEA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRDSEE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRACED: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRCOTH: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRSC01: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRSC02: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRSC03: {
      type: DataTypes.TINYINT,
      allowNull: true
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROQ05: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROQ06: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROQ07: {
      type: DataTypes.STRING(50),
      allowNull: true
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROL05: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROL06: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROL07: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRHD01: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRHD09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRHD10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRHD11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRHD12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRHD13: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRHD14: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRHD15: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PRPGM1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRPGM2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRPGM3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRPGM4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRPGM5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRLIB1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRLIB2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRLIB3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRLIB4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRLIB5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRRWH1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRRWH2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRRWH3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRRWH4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRRWH5: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PRRPL1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPL2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPL3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPL4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPL5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRMSG1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PRMSG2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PRMSG3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PRCMSG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRSUM1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRSUM2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRSUM3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRSUM4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSUM5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRSUM6: {
      type: DataTypes.STRING(1),
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
      type: DataTypes.STRING(1),
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
    PRJNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRJUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRJNBR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRPR01: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPR02: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPR03: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPR04: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPR05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPR06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY600H',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
