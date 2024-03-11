const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppay125s', {
    PHKEY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PHDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'ppay125s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
