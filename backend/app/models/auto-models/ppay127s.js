const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppay127s', {
    ADDKEY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ADDDES: {
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
    tableName: 'ppay127s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
