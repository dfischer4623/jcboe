module.exports = (sequelize, Sequelize) => {
  const Certificates = sequelize.define("certificates", {
    CTSSN: {
      type: Sequelize.SMALLINT,
      allowNull: true,
      primaryKey: true
    },
    CTID: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    CTTYPE: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    CTRANK: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    CTLEVL: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    CTVCEN: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    CTVDAT: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    CTECEN: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    CTEDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    CTICEN: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    CTIDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    CTRCEN: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    CTRDAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    CTVRCN: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    CTVRDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    CTUSG: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    CTBUSY: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    CRTDES: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    TYDESC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    LVDESC: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  });
 
    return Certificates;
  };