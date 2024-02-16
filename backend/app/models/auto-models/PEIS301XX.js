const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS301XX', {
    EMSSAN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EMLNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMFNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMNPRE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMNSUF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMNCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMFMTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMLNMC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMFNMC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMNMC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPNMC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMADD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMADD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMCITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMCNTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPRV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMZIP1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMZIP2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMGPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMCTRY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMADSC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPAD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPAD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPCTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPPRV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPZP1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPZP2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPGPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPCTR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMHTL0: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMHTL2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMHTLS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMOTL0: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMOTL2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMEXTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMOTLS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMLOC2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMLOCP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMHDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMHSC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMDEPT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMROOM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPASN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMSTAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMCLS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMSEX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPREV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMSDST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMSST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMSTOT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EMSOT1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EMSOT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EMSOT3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EMLNSP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMSPSE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMNSP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'EMSPS#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMETH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMETHX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMVET: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMVETC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMDRUG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMDTDC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMDTDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMDFDC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMDFDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMBTDC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMBDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMCHDC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMCHDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMOHDC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMOHDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMSRDC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMSRDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'EMSR#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMTMDC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMTDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMSCDC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMCDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMAPDC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMADAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMMSC1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMSC2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMSC3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMSC4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMSC5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMSC6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMSC7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMSC8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMMSC9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMUSG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMBUSY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    YEAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PEIS301XX',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
