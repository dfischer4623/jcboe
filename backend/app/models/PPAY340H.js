module.exports = (sequelize, Sequelize) => {
  const Ppay340hs = sequelize.define("ppay340hs", {
    USG: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASSSAN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASJD: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASSEQ: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASCON: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASSUPV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASSTDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASENDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASACTV: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASSTAB: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASGRAD: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASSTEP: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASSCAT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASAMT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASPER: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASPAYA: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASONEA: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASNCHK: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASACHK: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASPCHK: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASNDAY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASADAY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASPDAY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASCFDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASCTDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASCTHR: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASAFCT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASPCT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASFTE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASAFTE: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASDEDL: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASABSL: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASCPYL: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASCPAM: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASRPYL: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASPLIN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASEAMT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASTLIN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASTAMT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASDLIN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASDPCT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASDAMT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASJDE1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJDE2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJDE3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJDE4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJDE5: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJDE6: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJDE7: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJDE8: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAB1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAB2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAB3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAB4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAB5: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAB6: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAB7: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAB8: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAD1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAD2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAD3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAD4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAD5: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAD6: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAD7: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJAD8: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASFED: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASST: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASCTY: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASLOC: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASOTH: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASACCT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASFICA: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASMTCH: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASENC: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASACCR: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASACKW: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASACPT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASWCMP: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASWCYN: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASWCU1: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASWCU2: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASPYAM: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASAPAM: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASDPAM: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASADAM: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    ASMIS1: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASMIS2: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASMIS3: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASMIS4: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASMIS5: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASCAT1: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASCAT2: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASCAT3: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASCAT4: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASCAT5: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASLRUN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASCDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASBNK: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASBACT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    ASFRM: {
      type: Sequelize.CHAR(10),
      allowNull: true
    },
    ASCHK: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: Sequelize.CHAR(10),
      allowNull: true
    }
  });
 
    return Ppay340hs;
  };