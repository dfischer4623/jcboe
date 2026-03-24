const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_VendorMaster', {
    'Vendor #': {
      type: DataTypes.STRING(50),
      allowNull: true,
      primaryKey: true
    },
    'Remit to name': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Index name': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Remit to address line 1': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Remit to address line 2': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Remit to city': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Remit to state': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Remit to zip': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PO mailing name': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'PO mailing address line 1': {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'PO mailing address line 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PO mailing city': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PO mailing state': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PO mailing zip': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Phone #': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Fax #': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Minority?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Federal ID #': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Deleted info': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'State contract #': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'State contract expiry': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Auto del June 30th?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Various?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1099?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Disable Vendor?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Pr Yr Encumbrances': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Trx Time': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Trx Type': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    User: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Minority Code': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Multiple Remit to Locations?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Soc Sec#': {
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
    V_CERTREC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_CERTEXP: {
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
    V_CONTACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    V_CERTNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_CERTISSUE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_AFFACERT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_W9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_PAYPLAY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_BRCEXEMPT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_ACH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_ANUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_RNUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_ATYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    V_PRENOTE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1099 Type': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    '1099 Box #': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Russia-Belarus Cert': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'YTD Encumbrances': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'YTD Exp (July - June)': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'FYTD Exp (Jan - Dec)': {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_VendorMaster',
    schema: 'dbo',
    timestamps: false,
    indexes: []
  });
};
