module.exports = (sequelize, Sequelize) => {
  const Ppai715s = sequelize.define("ppai715s", {
    USG: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    DERUN: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DESEQ: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    DESSN: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    DEPSEQ: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    DEPRI: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DECODE: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DEJUR: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    DEFIS: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DECAL: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DEAMT: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DEAMT2: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DESUBJ: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    DETYP: {
      type: Sequelize.STRING(50),
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
    DEDESC: {
      type: Sequelize.STRING(50),
      allowNull: true
    }
  });
 
    return Ppai715s;
  };