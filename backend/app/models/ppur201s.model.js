module.exports = (sequelize, Sequelize) => {
  const Ppur201s = sequelize.define("ppur201s", {
    ADAT: {
      type: Sequilize.INTEGER,
      allowNull: true
    },
    RETN: {
      type: Sequilize.STRING(1),
      allowNull: true
    },
    BA: {
      type: Sequilize.STRING(1),
      allowNull: true
    },
    SESN: {
      type: Sequilize.INTEGER,
      allowNull: true
    },
    CM: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: Sequilize.INTEGER,
      allowNull: true
    },
    SHCODE: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    SHNAME: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    SHATTN: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    SHADR1: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    SHADR2: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    SHCITY: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    SHST: {
      type: Sequilize.STRING(50),
      allowNull: true
    },
    SHZIP1: {
      type: Sequilize.INTEGER,
      allowNull: true
    },
    SHZIP2: {
      type: Sequilize.INTEGER,
      allowNull: true
    },
    SHPROV: {
      type: Sequilize.STRING(1),
      allowNull: true
    },
    SHPC: {
      type: Sequilize.STRING(1),
      allowNull: true
    },
    SHAREA: {
      type: Sequilize.INTEGER,
      allowNull: true
    },
    SHPHON: {
      type: Sequilize.INTEGER,
      allowNull: true
    }
  });
 
    return Ppur201s;
  };