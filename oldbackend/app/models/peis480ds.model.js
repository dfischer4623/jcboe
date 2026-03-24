module.exports = (sequelize, Sequelize) => {
  const Peis480ds = sequelize.define("peis480ds", {
    PC: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PCTID: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    PCLINE: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    PCCOL1: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PCCOL2: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PCCOL3: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PCCOL4: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PCCOL5: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    PCCOL6: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PCCOL7: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    PCUSG: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    PCBUSY: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    MEMBER: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  });
 
    return Peis480ds;
  };