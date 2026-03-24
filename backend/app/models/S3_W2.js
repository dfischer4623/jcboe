const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const S3_W2 = sequelize.define(
    'S3_W2',
    {
     ssn: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'SSN'
  },
  fisrtName: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Fisrt Name'
  },
  middle: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Middle'
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Last Name'
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Address'
  },
  address1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Address_1'
  },
  ciyStateZip: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Ciy , State, Zip'
  },
  idn: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'ID#'
  },
  lin: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'LIN#'
  },
  ein: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EIN'
  },
  employer: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Employer'
  },
  employerAddress: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Employer Address'
  },
  employerCityStateZip: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Employer City State Zip'
  },
  column13: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 13'
  },
  box1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 1'
  },
  box2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 2'
  },
  box3: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 3'
  },
  box4: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 4'
  },
  box5: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 5'
  },
  box6: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 6'
  },
  box7: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 7'
  },
  box8: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 8'
  },
  box9: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 9'
  },
  box10: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 10'
  },
  box11: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 11'
  },
  box12aCode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 12A CODE'
  },
  box12aAmount: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 12A AMOUNT'
  },
  box12bCode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 12B CODE'
  },
  box12bAmount: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 12B AMOUNT'
  },
  box12cCode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 12 C CODE'
  },
  box12cAmount: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 12 C AMOUNT'
  },
  box12dCode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 12 D CODE'
  },
  box12dAmount: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 12 D AMOUNT'
  },
  column33: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 33'
  },
  column34: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 34'
  },
  column35: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 35'
  },
  box14Code1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 CODE-1'
  },
  box14Amount1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 AMOUNT-1'
  },
  box14Code2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 CODE-2'
  },
  box14Amount2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 AMOUNT-2'
  },
  box14Code3: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 CODE-3'
  },
  box14Amount3: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 AMOUNT-3'
  },
  box14Code4: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 CODE-4'
  },
  box14Amount4: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 AMOUNT-4'
  },
  box14Code5: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 CODE-5'
  },
  box14Amount5: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 14 AMOUNT-5'
  },
  box15State: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Box 15 state'
  },
  stateId: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'State ID'
  },
  box16: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 16'
  },
  box17: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 17'
  },
  box15State2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Box 15 STATE-2'
  },
  box15StateId: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 15 STATE ID'
  },
  box16aAmount: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 16 A AMOUNT'
  },
  box17aAmount: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'BOX 17 A AMOUNT'
  },
  column54: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 54'
  },
  column55: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 55'
  },
  column56: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 56'
  },
  column57: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 57'
  },
  column58: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 58'
  },
  column59: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 59'
  },
  column60: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 60'
  },
  column61: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 61'
  },
  column62: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 62'
  },
  column63: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 63'
  },
  column64: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 64'
  },
  column65: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 65'
  },
  column66: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 66'
  },
  column67: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 67'
  },
  column68: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 68'
  },
  column69: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 69'
  },
  column70: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 70'
  },
  column71: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 71'
  },
  column72: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 72'
  },
  column73: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 73'
  },
  column74: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Column 74'
  },
  year: {
    type: DataTypes.SMALLINT,
    allowNull: true,
    field: 'year'
  }
    },
    {
      sequelize,
      tableName: 'S3_W2',
      schema: 'dbo',
    timestamps: false,
      underscored: true,
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
      defaultScope: {
        order: [] 
      }
    }
  );

  
  S3_W2.removeAttribute('id');

  return S3_W2;
};