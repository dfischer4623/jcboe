const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_ratebase2022', {
    Prefix: {
      type: DataTypes.STRING(4),
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
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Suffix: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    'Emp#': {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    'Def Code': {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Payline: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Units: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Rate Factor': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Account#': {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    'Run Amt': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Unit Factor': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Check Run': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Paydate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_ratebase2022',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
