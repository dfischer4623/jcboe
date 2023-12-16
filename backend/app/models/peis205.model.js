module.exports = (sequelize, Sequelize) => {
  const Peis205 = sequelize.define("peis205", {
    ETCODE: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ETDESC: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    ETSHRT: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    ETEEOC: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    ETUSG: {
      type: Sequelize.STRING(1),
      allowNull: true
    },
    ETBUSY: {
      type: Sequelize.INTEGER,
      allowNull: false
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

  return Peis205;
};