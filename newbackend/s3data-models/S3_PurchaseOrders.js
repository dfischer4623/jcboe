const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_PurchaseOrders', {
    ACCNO_D: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PO#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OPENPO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Vendor #': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Remit to name': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    V_YTD_EXP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_ENCUMB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FYEAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OPENAMT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ORIGAMT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAYMENTS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAYLIQUID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CANCELLED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CREDITED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UNDERPAY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    INVOICED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VOIDED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COMMIT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POADJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COMMDATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UNCOMMDEL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MULTIVENDOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    INPOMSTR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Vendor#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PO_CLASS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Batch#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Committed Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Control#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Print Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Recurring PO?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Originally Entered By': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Marked for Re-Printing?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Approved by': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Time Created': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Time Approved': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PO# Overridden?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Original PO#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Receiving Status': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PO_ITEMS: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    'PO Aggregation': {
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
    'Curr Outstanding': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Pending Charges': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'YTD Disbursed': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Current Year Invoices': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Orig Appr': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Curr Appr': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'W Appr': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Refunds: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Payment Var': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BALANCE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DISADJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Index name': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Minority Code': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_CLASS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DISTRICT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'User Defined Data 1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'User Defined Data 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'User Defined Data 3': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'User Defined Data 4': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'User Defined Data 5': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Vendor Classification': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Vendor Code': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PO_CONTNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Year: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_PurchaseOrders',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
