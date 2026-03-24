module.exports = (sequelize, Sequelize) => {
  const Salaries = sequelize.define("salaries", {
    EMLOC: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    EM: {
      type: Sequelize.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    EMLNAM: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASJD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASSTAB: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASGRAD: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    ASSTEP: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    SALARY: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    JDTITL: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: Sequelize.STRING(50),
      allowNull: true
    },
    SCHYEAR: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  });
 
    return Salaries;
  };