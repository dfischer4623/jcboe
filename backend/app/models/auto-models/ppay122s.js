const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppay122s', {
    DDTABL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DDHDES: {
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
    tableName: 'ppay122s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
