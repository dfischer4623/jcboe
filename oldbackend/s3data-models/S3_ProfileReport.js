const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_ProfileReport', {
    'Employee#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Absence Status': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Soc Sec #': {
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
    'Active?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_INACTDA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Address Line 1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Address Line 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Zip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Mailing Addr Line 1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Mailing Addr Line 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Mailing City': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Mailing State': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Mailing Zip': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Phone#1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Phone#2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Emergency Info 1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Emergency Info 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Substitute: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Hire Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Termination Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Reason for Termination': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Race: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Birth Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Department: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Frequency: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Pension Code': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Pension#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Tenured?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Misc 1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Misc 2': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Misc 3': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Married?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_WORKEXT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_UNLISTE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Degree: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Tenure Date': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Unique Position Code': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_REHIRE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_AVSDATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SENIORI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SENFAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_CPDMINH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_CPDSTAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_CPDEND: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_HIREOVR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_UPCSTAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_LASTSAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_LASTSA2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_STATUS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_TYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_MISC4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_MISC5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EMAIL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_FMRNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_TRACKNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_PENTIER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_CHKLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SMID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_PREFIX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SUFFIX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_ETHNIC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RACE1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RACE2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RACE3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RACE4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RACE5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_CERT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_ENTRYCD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EXITCD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_REENTRY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EVAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EXCSAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_LANG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_MEPCAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_MEPTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_TITLE1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_NATBOAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SECAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_LEPTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_HBCTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_HBYEAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_LSID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EXCLUDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Issue Form 1095-C?': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_BUREAU: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_HBCOVM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_HBCHKS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Phone#3': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Phone1 Type': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Phone2 Type': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Phone3 Type': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EMAIL2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EMTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EMTYPE2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_GTSTAFF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_NJSSTAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_NJSSEP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_TEACHER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_VP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_CASEMAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_504: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SEC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_COCURR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_ADMIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_NURSE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RESTEA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_LIBADM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_DIR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_PRINC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_DISC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_OTH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RSP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_ATH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SUPER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SUBST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_SUPERV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_AIDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_CHAIR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_COUNS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_LTS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RETIRED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_RESIGN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_INV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Employee#_1': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Year: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'District Experience': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Military Experience': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Public Experience': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'State Experience': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Other Experience': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    R_CALCULAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Calculated Salary': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    R_EXTRA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SEQNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RACECODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RACEDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOCCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LOCDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GRP_PAGE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EVALD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADDLANGD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEP_STAFFD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEP_SESSD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEP_TITLED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SECATD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EM_EXCSALD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Employee#_2': {
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
    'Active?_3': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Job Title_4': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Calendar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_WORKDAY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_CPD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_CPDMAXC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_CPDMAX2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_TENURE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_TENUREY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_OCCUP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_INSTR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_EMPTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_CONTRAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_START: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_END: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_LASTDAY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_STATE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_NOTIF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_RETURN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    JT_LASTPAI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ATT_ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EXP_ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASS_ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FC_EMPNO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MED_ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SAL_ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CPROP_ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CPD_ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DISTRICT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UPC_ENUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRIM_UCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PRIM_UDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_ProfileReport',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
