const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppay121s', {
    ABKEY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ABDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppay121s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
