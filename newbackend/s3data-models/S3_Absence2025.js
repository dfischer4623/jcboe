const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_Absence2025', {
    SEQNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Employee#': {
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
    Location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOCDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Department: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEPTDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Out Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Notes: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Substitute Employee#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Amount used this occasion': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Reason for absence': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Charge to': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CHARGEDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REASONDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DISTRICT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Job Title': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Primary Job Title?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Job Title2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SUBENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SUBFNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SUBLNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TOTSUN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TOTMON: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TOTTUE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TOTWED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TOTTHU: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TOTFRI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TOTSAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_Absence2025',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
