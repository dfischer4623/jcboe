module.exports = (sequelize, Sequelize) => {
  const Ppay124s = sequelize.define("ppay124s", {
    JDKEY: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    JDTITL: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    updatedAt: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      primaryKey: true
    }
  });
 
    return Ppay124s;
  };