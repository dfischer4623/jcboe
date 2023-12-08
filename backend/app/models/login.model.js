module.exports = (sequelize, Sequelize) => {
  const Login = sequelize.define("login", {
    ID: {
      type: Sequelize.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    PassWord: {
      type: Sequelize.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true
    }
  });
  
  return Login;
};