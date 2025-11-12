const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_W22020', {
    SSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Fisrt Name': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Middle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Last Name': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Address_1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Ciy , State, Zip': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'ID#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'LIN#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Employer: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Employer Address': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Employer City State Zip': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 13': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 3': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 4': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 5': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 6': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 7': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 8': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 9': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 10': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 11': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 12A CODE': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 12A AMOUNT': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 12B CODE': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 12B AMOUNT': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 12 C CODE': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 12 C AMOUNT': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 12 D CODE': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 12 D AMOUNT': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 33': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 34': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 35': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 14 CODE-1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 14 AMOUNT-1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 14 CODE-2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 14 AMOUNT-2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 14 CODE-3': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 14 AMOUNT-3': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 14 CODE-4': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 14 AMOUNT-4': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '[BOX 14 CODE-5]': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '[BOX 14 AMOUNT-5]': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Box 15 state': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'State ID': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 16': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 17': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Box 15 STATE-2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 15 STATE ID': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 16 A AMOUNT': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'BOX 17 A AMOUNT': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 54': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 55': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 56': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 57': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 58': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 59': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 60': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 61': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 62': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 63': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 64': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 65': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 66': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 67': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 68': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 69': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 70': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 71': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 72': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 73': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 74': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    year: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_W22020',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
