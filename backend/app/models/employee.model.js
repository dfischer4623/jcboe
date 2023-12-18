module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    EMSSAN: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DOB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    HID: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    OHD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TRD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SCD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMLNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMFNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMNPRE: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMNSUF: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMNCNT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMFMTN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMLNMC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMFNMC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMNMC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPNMC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMADD1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMADD2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMCITY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMCNTY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMST: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPRV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMZIP1: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMZIP2: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMGPC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMCTRY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMADSC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPAD1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPAD2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPCTY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPCNT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPST: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPPRV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPZP1: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMPZP2: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMPGPC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPCTR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMHTL0: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMHTL2: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMHTLS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMOTL0: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMOTL2: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMEXTN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMOTLS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMLOC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMLOC2: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMLOCP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMHDT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMHSC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMDEPT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMROOM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPASN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMSTAT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMCLS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMSEX: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMPREV: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMSDST: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    EMSST: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    EMSTOT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    EMSOT1: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    EMSOT2: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    EMSOT3: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    EMLNSP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMSPSE: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMNSP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    'EMSPS#': {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMETH: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMETHX: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMVET: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMVETC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMDRUG: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMDTDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMDTDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMDFDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMDFDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMBTDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMBDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMCHDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMCHDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMOHDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMOHDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMSRDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMSRDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    'EMSR#': {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMTMDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMTDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMSCDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMCDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMAPDC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMADAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EMMSC1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMSC2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMSC3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMSC4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMSC5: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMSC6: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMSC7: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMSC8: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMMSC9: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMUSG: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    EMBUSY: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    ETDESC: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  });

  return Employee;
};