const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_VendorCheckRegister', {
    HORDER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Trans Code': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'CR GL Acct#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'DB GL Acct#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Cycle#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Account#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ANUMCONNECT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Acct#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Receipt#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Vendor#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Vendor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Trans Amt': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Chk Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    H_DESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Check Desc': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'CR GL Acct': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Check#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Hand Chk?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Batch#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Void Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Void?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Invoice#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Check Series': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DISTRICT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POST_ORDER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    H_PAYEE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Acct #': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Acct Desc': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Orig Appr': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'W Appr': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Curr Appr': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'YTD Disbursed': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Curr Outstanding': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Pending Charges': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Expenditure % flag': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Refunds: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Extn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'User Extn': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'F Asset?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Payroll Acct?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Clearing Account?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Expiration Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'YTD Transfers': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Authorized Locations': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'R Loc exceed Exp flag?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Current Year Invoices': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Payment Var': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_FLAG1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_FLAG2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_FLAG3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Fund Category': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Orig Fund Category': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_TRXTIME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_TRXTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_USER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_NOIMPORT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_STLINE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    A_CDSREQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Remit to name': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Various?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Multiple Remit to Locations?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADDRESS1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADDRESS2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    STATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ZIPCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Remit to Name 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Year: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_VendorCheckRegister',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
