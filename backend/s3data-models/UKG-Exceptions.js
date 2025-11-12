const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UKG-Exceptions', {
    'Last Name': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'First Name': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Employee Id': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'CC 1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Weekday: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Exception: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UKG-Exceptions',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
