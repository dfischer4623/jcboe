const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_PO_ShipToLocation', {
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Code: {
      type: DataTypes.STRING(50),
      allowNull: true,
      primaryKey: true
    },
    'Addr 1': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Addr 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Zip: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_PO_ShipToLocation',
    schema: 'dbo',
    timestamps: false,
    indexes: []
  });
};
