module.exports = (sequelize, Sequelize) => {
  const Ppay121s = sequelize.define("ppay121s", {
    ABKEY: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    ABDESC: {
      type: Sequelize.STRING(50),
      allowNull: false,
    }
  });
 
    return Ppay121s;
  };