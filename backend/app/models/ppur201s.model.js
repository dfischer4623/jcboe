module.exports = (sequelize, Sequelize) => {
  const Ppur201s = sequelize.define("ppur201s", {
    ADAT: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    RETN: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    BA: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    SESN: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    CM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.INTEGER,
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
      type: Sequelize.INTEGER,
      allowNull: true
    },
    SHZIP2: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    SHPROV: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    SHPC: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    SHAREA: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    SHPHON: {
      type: Sequelize.INTEGER,
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