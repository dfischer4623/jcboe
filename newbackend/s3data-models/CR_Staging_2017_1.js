const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CR_Staging_2017_1', {
    CHKNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Check Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CHKVDATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Check Run#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STATUS: {
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
    'Employee Type': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Working Months': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Total Pays': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Bldg Location': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Department: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Check Location': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Status Code': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Employment Type': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REFUNDS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DOCKAGE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GWAGES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CGWAGES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TAXES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NETPAYADJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NETWAGES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CNETWAGES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Direct Deposit Amt': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAYCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCODE9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CKDESC9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AMOUNT9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CDISTRICT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CHKCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TPAFCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PERSCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DCRPCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OTHERCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MALECNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FEMALECNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UNDESIGCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOGENDCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SINGLECNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MARRIEDCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FTCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PTCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LTSUBCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDSUBCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOSTATCNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TREFUNDS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDOCKAGE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TGWAGES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TCGWAGES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TTAXES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TNETPAYADJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TNETWAGES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TCNETWAGES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TDDEP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMPADJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CR_Staging_2017_1',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
