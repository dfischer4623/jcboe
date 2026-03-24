module.exports = (sequelize, Sequelize) => {
  const Ppay3403s = sequelize.define("ppay3403s", {
    ADAT: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    RETN: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    SESN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    CM: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    DVSSAN: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    DVDED: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVJUR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVAMT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DVPCT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    SJ1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SJ2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SJ3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SJ4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SJ5: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SJ6: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVNTCK: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    'DVID#': {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVCKS: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVEMT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVECT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DVSDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    DVSCEN: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    DVEDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    DVECEN: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    DVOTCF: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVOTCD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVOTCC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVDLTF: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVDPRI: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVEMXP: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVEMXY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DVEMXL: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DVRMXP: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DVRMXY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DVRMXL: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DVEXT1: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    DVEXT2: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    DVEXT3: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    schyear: {
      type: Sequelize.CHAR(10),
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
 
    return Ppay3403s;
  };