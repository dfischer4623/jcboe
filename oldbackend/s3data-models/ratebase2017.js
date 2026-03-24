const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ratebase2017', {
    Prefix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Last Name': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'First Name': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Middle Initial': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Suffix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Emp#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Def Code': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Payline: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Units: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Rate Factor': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Account#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Run Amt': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Unit Factor': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Check Run': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Paydate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Amount: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ratebase2017',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
