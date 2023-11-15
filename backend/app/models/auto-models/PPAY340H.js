const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY340H', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ASSAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'ASJD#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'ASSEQ#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'ASCON#': {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASACTV: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ASSTAB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASGRAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASSTEP: {
      type: DataTypes.TINYINT,
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
      type: DataTypes.TINYINT,
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
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASACHK: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASPCHK: {
      type: DataTypes.SMALLINT,
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
      type: DataTypes.INTEGER,
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
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASABSL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASCPYL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASCPAM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASRPYL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASPLIN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASEAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASTLIN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASTAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASDLIN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASDPCT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASDAMT: {
      type: DataTypes.FLOAT,
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
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAB7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAB8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJAD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAD3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAD4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAD5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAD6: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAD7: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASJAD8: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASFED: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ASST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASCTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASOTH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASACCT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASFICA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASMTCH: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ASENC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ASACCR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASACKW: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASACPT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ASWCMP: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASWCYN: {
      type: DataTypes.STRING(50),
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
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASMIS2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASMIS3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASMIS4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASMIS5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASCAT1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASCAT2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASCAT3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASCAT4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASCAT5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASLRUN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASCDAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASBNK: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ASBACT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ASFRM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    'ASCHK#': {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY340H',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
