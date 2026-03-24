module.exports = (sequelize, Sequelize) => {
  const Ppur201s = sequelize.define("ppur201s", {
    ADAT: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    RETN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    BA: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SESN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    CM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHCODE: {
      type: Sequelize.STRING(50),
      allowNull: true,
      primaryKey: true
    },
    SHNAME: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHATTN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHADR1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHADR2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHCITY: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHST: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHZIP1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHZIP2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHPROV: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHPC: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHAREA: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SHPHON: {
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
    }
  });
 
    return Ppur201s;
  };