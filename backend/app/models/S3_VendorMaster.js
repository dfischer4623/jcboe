const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const S3_VendorMaster = sequelize.define(
    'S3_VendorMaster',
    {
   vendorNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
     
      field: 'Vendor #'
    },
    remitToName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Remit to name'
    },
    indexName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Index name'
    },
    remitToAddressLine1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Remit to address line 1'
    },
    remitToAddressLine2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'Remit to address line 2'
    },
    remitToCity: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Remit to city'
    },
    remitToState: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Remit to state'
    },
    remitToZip: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Remit to zip'
    },
    poMailingName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'PO mailing name'
    },
    poMailingAddressLine1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'PO mailing address line 1'
    },
    poMailingAddressLine2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'PO mailing address line 2'
    },
    poMailingCity: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'PO mailing city'
    },
    poMailingState: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'PO mailing state'
    },
    poMailingZip: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'PO mailing zip'
    },
    phoneNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Phone #'
    },
    faxNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Fax #'
    },
    minority: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Minority?'
    },
    federalId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Federal ID #'
    },
    deletedInfo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Deleted info'
    },
    stateContractNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'State contract #'
    },
    stateContractExpiry: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'State contract expiry'
    },
    autoDeleteJune30th: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Auto del June 30th?'
    },
    various: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Various?'
    },
    is1099: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '1099?'
    },
    disableVendor: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Disable Vendor?'
    },
    previousYearEncumbrances: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Pr Yr Encumbrances'
    },
    trxTime: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Trx Time'
    },
    trxType: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Trx Type'
    },
    user: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'User'
    },
    minorityCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Minority Code'
    },
    multipleRemitLocations: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Multiple Remit to Locations?'
    },
    socialSecurityNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Soc Sec#'
    },
    userDefinedData1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'User Defined Data 1'
    },
    userDefinedData2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'User Defined Data 2'
    },
    userDefinedData3: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'User Defined Data 3'
    },
    userDefinedData4: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'User Defined Data 4'
    },
    userDefinedData5: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'User Defined Data 5'
    },
    vCertRec: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_CERTREC'
    },
    vCertExp: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_CERTEXP'
    },
    vendorClassification: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Vendor Classification'
    },
    vendorCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Vendor Code'
    },
    vContact: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_CONTACT'
    },
    vEmail: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'V_EMAIL'
    },
    vCertNo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_CERTNO'
    },
    vCertIssue: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_CERTISSUE'
    },
    vAffaCert: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_AFFACERT'
    },
    vW9: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_W9'
    },
    vPayPlay: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_PAYPLAY'
    },
    vBrcExempt: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_BRCEXEMPT'
    },
    vAch: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_ACH'
    },
    vANum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_ANUM'
    },
    vRNum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_RNUM'
    },
    vAType: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_ATYPE'
    },
    vPrenote: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'V_PRENOTE'
    },
    type1099: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '1099 Type'
    },
    box1099: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: '1099 Box #'
    },
    russiaBelarusCert: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'Russia-Belarus Cert'
    },
    ytdEncumbrances: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'YTD Encumbrances'
    },
    ytdExpJulyJune: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'YTD Exp (July - June)'
    },
    fytdExpJanDec: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'FYTD Exp (Jan - Dec)'
    }
    },
    {
      sequelize,
      tableName: 'S3_VendorMaster',
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

  
  S3_VendorMaster.removeAttribute('id');

  return S3_VendorMaster;
};