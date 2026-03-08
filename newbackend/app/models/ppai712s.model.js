module.exports = (sequelize, Sequelize) => {
  const Ppai712s = sequelize.define("ppai712s", {
    USG: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    PCRUN: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    PCSEQ: {
      type: Sequelize.SMALLINT,
      allowNull: true
    },
    PCSSN: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    PCCK: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PCAMT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    PCVDAT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PCSORT: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    PCTYP: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PC613: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PC614: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PC615: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PC615E: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PC615R: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    PC616: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: Sequelize.STRING(50),
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
    HRCKDT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    HRBNK2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    HRBAC2: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    HRFRM2: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  });
 
    return Ppai712s;
  };