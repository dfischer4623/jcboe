const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS133', {
    TYCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TYDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TYSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TYUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TYBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS133',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
