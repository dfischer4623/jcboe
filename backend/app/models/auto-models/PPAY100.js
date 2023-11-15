const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY100', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    CM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    STMP: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    POPKEY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    OPFY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    CGDES1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGDES2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGDES3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGDES4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGDES5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGVCD1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGVCD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGVCD3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGVCD4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGVCD5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROP1: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRJURU: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRJURS: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRJURC: {
      type: DataTypes.STRING(1),
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
    PRTAXT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRFICT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRFICA: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRFROM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRTO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRSET: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRMSC1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRMSC2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRMSC3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRBANK: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRACCT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRCOMP: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PREICT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PRRUN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRHAAB: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRJOB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRFND: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRBNK: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRACT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRBFRM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRDAT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    'PRRCK#': {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRMIN: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PRRMAX: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PRRTOT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PRRTO: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRPRD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRDDD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRTTT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRVOU: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRDDEP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRCON: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRABH: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRFDH: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMPRNM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EADDR1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EADDR2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ECITY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EST: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EZIP: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EZIPF: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    EAREA: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    EPHONE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PRBGPG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PREDPG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPG1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRRPG2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPG3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPG4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPG5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPG6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRRPG7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPG8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRBGLB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PREBLB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPLB1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRPLB2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPLB3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPLB4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPLB5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPLB6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRPLB7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPLB8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRPBDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PREDES: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRDES1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRDES2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRDES3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRDES4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRDES5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRDES6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRDES7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRDES8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRBWH: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PREWH: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRWH1: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRWH2: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRWH3: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRWH4: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRWH5: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRWH6: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRWH7: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRRWH8: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PRBPL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PREPL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPL1: {
      type: DataTypes.STRING(50),
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
    PRRPL6: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PRRPL7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRRPL8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY100',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
