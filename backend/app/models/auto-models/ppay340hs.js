const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppay340hs', {
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASSSAN: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASJD: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASSEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASCON: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ASSUPV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASSTDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASENDT: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASACTV: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ASSTAB: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASGRAD: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASSTEP: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASSCAT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASPER: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASPAYA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASONEA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASNCHK: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASACHK: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASPCHK: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ASNDAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASADAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASPDAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASCFDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASCTDT: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ASCTHR: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASAFCT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASPCT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASFTE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASAFTE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASDEDL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASABSL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASCPYL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASCPAM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASRPYL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASPLIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASEAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASTLIN: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ASTAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASDLIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASDPCT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASDAMT: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ASJDE1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJDE2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJDE3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJDE4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJDE5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJDE6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJDE7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJDE8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAB1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAB2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAB3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAB4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAB5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAB6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAB7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAB8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASFED: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASST: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASCTY: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASLOC: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASOTH: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASACCT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASFICA: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASMTCH: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASENC: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASACCR: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASACKW: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASACPT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASWCMP: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASWCYN: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASWCU1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASWCU2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASPYAM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASAPAM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASDPAM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASADAM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASMIS1: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASMIS2: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASMIS3: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASMIS4: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASMIS5: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASCAT1: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASCAT2: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASCAT3: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASCAT4: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASCAT5: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASLRUN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASCDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASBNK: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASBACT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASFRM: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ASCHK: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    STRDTE: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ENDDTE: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppay340hs',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
