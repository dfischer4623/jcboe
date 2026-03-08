const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CheckRegister-2024', {
    CHKNO: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Check Date': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CHKVDATE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    'Check Run#': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Employee#': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Last Name': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'First Name': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Middle Initial': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Employee Type': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Working Months': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Total Pays': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Bldg Location': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Department: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Check Location': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Status Code': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'Employment Type': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    REFUNDS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DOCKAGE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    GWAGES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CGWAGES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TAXES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DED: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NETPAYADJ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NETWAGES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    CNETWAGES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'Direct Deposit Amt': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PAYCODE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCODE1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCODE2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCODE3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCODE4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCODE5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCODE6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC6: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCODE7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC7: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCODE8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT8: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DCODE9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CKDESC9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AMOUNT9: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CDISTRICT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CHKCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EMPCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TPAFCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PERSCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DCRPCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    OTHERCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MALECNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FEMALECNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    UNDESIGCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NOGENDCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SINGLECNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MARRIEDCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FTCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PTCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LTSUBCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PDSUBCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    NOSTATCNT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TREFUNDS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TDOCKAGE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TGWAGES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TCGWAGES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TTAXES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TDED: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TNETPAYADJ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TNETWAGES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TCNETWAGES: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TDDEP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EMPADJ: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CheckRegister-2024',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
