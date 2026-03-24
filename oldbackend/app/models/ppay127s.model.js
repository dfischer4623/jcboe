module.exports = (sequelize, Sequelize) => {
  const Ppay127s = sequelize.define("ppay127s", {
    ADDKEY: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    ADDDES: {
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
 
    return Ppay127s;
  };