module.exports = (sequelize, Sequelize) => {
  const Ppay125s = sequelize.define("ppay125s", {
    PHKEY: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    PHDESC: {
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
 
    return Ppay125s;
  };