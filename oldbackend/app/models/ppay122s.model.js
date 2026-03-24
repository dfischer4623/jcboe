module.exports = (sequelize, Sequelize) => {
  const Ppay122s = sequelize.define("ppay122s", {
    DDTABL: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    DDHDES: {
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
 
    return Ppay122s;
  };