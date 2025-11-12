const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const S3_ProfileReport = sequelize.define(
    'S3_ProfileReport',
    {
     employee: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Employee#'
  },
  absenceStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Absence Status'
  },
  socSec: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Soc Sec #'
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Last Name'
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'First Name'
  },
  middleInitial: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Middle Initial'
  },
  active: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Active?'
  },
  emInactda: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_INACTDA'
  },
  addressLine1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Address Line 1'
  },
  addressLine2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Address Line 2'
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'City'
  },
  state: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'State'
  },
  zip: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Zip'
  },
  mailingAddrLine1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Mailing Addr Line 1'
  },
  mailingAddrLine2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Mailing Addr Line 2'
  },
  mailingCity: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Mailing City'
  },
  mailingState: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Mailing State'
  },
  mailingZip: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Mailing Zip'
  },
  phone1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Phone#1'
  },
  phone2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Phone#2'
  },
  emergencyInfo1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Emergency Info 1'
  },
  emergencyInfo2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Emergency Info 2'
  },
  substitute: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Substitute'
  },
  hireDate: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Hire Date'
  },
  terminationDate: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Termination Date'
  },
  reasonForTermination: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Reason for Termination'
  },
  race: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Race'
  },
  birthDate: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Birth Date'
  },
  location: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Location'
  },
  department: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Department'
  },
  frequency: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Frequency'
  },
  pensionCode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Pension Code'
  },
  pension: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Pension#'
  },
  tenured: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Tenured?'
  },
  gender: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Gender'
  },
  misc1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Misc 1'
  },
  misc2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Misc 2'
  },
  misc3: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Misc 3'
  },
  married: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Married?'
  },
  emWorkext: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_WORKEXT'
  },
  emUnliste: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_UNLISTE'
  },
  degree: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Degree'
  },
  tenureDate: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Tenure Date'
  },
  uniquePositionCode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Unique Position Code'
  },
  emRehire: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_REHIRE'
  },
  emAvsdate: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_AVSDATE'
  },
  emSeniori: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SENIORI'
  },
  emSenfac: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SENFAC'
  },
  emCpdminh: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_CPDMINH'
  },
  emCpdstar: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_CPDSTAR'
  },
  emCpdend: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_CPDEND'
  },
  emHireovr: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_HIREOVR'
  },
  emUpcstar: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_UPCSTAR'
  },
  emLastsal: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_LASTSAL'
  },
  emLastsa2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_LASTSA2'
  },
  emStatus: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_STATUS'
  },
  emType: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_TYPE'
  },
  emMisc4: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_MISC4'
  },
  emMisc5: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_MISC5'
  },
  emEmail: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EMAIL'
  },
  emFmrname: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_FMRNAME'
  },
  emTrackno: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_TRACKNO'
  },
  emPentier: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_PENTIER'
  },
  emChkloc: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_CHKLOC'
  },
  emSmid: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SMID'
  },
  emPrefix: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_PREFIX'
  },
  emSuffix: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SUFFIX'
  },
  emEthnic: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_ETHNIC'
  },
  emRace1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RACE1'
  },
  emRace2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RACE2'
  },
  emRace3: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RACE3'
  },
  emRace4: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RACE4'
  },
  emRace5: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RACE5'
  },
  emCert: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_CERT'
  },
  emEntrycd: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_ENTRYCD'
  },
  emExitcd: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EXITCD'
  },
  emReentry: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_REENTRY'
  },
  emEval: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EVAL'
  },
  emExcsal: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EXCSAL'
  },
  emLang: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_LANG'
  },
  emMepcat: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_MEPCAT'
  },
  emMeptype: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_MEPTYPE'
  },
  emTitle1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_TITLE1'
  },
  emNatboar: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_NATBOAR'
  },
  emSecat: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SECAT'
  },
  emLeptype: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_LEPTYPE'
  },
  emHbctype: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_HBCTYPE'
  },
  emHbyear: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_HBYEAR'
  },
  emLsid: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_LSID'
  },
  emExclude: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EXCLUDE'
  },
  issueForm1095C: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Issue Form 1095-C?'
  },
  emBureau: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_BUREAU'
  },
  emHbcovm: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_HBCOVM'
  },
  emHbchks: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_HBCHKS'
  },
  phone3: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Phone#3'
  },
  phone1Type: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Phone1 Type'
  },
  phone2Type: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Phone2 Type'
  },
  phone3Type: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Phone3 Type'
  },
  emEmail2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EMAIL2'
  },
  emEmtype: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EMTYPE'
  },
  emEmtype2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EMTYPE2'
  },
  emGtstaff: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_GTSTAFF'
  },
  emNjsstat: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_NJSSTAT'
  },
  emNjssep: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_NJSSEP'
  },
  emTeacher: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_TEACHER'
  },
  emVp: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_VP'
  },
  emCaseman: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_CASEMAN'
  },
  em504: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_504'
  },
  emSec: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SEC'
  },
  emCocurr: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_COCURR'
  },
  emAdmin: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_ADMIN'
  },
  emNurse: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_NURSE'
  },
  emRestea: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RESTEA'
  },
  emLibadm: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_LIBADM'
  },
  emDir: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_DIR'
  },
  emPrinc: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_PRINC'
  },
  emDisc: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_DISC'
  },
  emOth: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_OTH'
  },
  emRsp: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RSP'
  },
  emAth: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_ATH'
  },
  emSuper: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SUPER'
  },
  emSubst: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SUBST'
  },
  emSuperv: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_SUPERV'
  },
  emAide: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_AIDE'
  },
  emChair: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_CHAIR'
  },
  emCouns: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_COUNS'
  },
  emLts: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_LTS'
  },
  emRetired: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RETIRED'
  },
  emResign: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_RESIGN'
  },
  emInv: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_INV'
  },
  employee1: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Employee#_1'
  },
  year: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Year'
  },
  districtExperience: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'District Experience'
  },
  militaryExperience: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Military Experience'
  },
  publicExperience: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Public Experience'
  },
  stateExperience: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'State Experience'
  },
  otherExperience: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Other Experience'
  },
  rCalculat: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'R_CALCULAT'
  },
  calculatedSalary: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Calculated Salary'
  },
  rExtra: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'R_EXTRA'
  },
  enum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'ENUM'
  },
  seqno: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'SEQNO'
  },
  racecode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'RACECODE'
  },
  racedesc: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'RACEDESC'
  },
  loccode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'LOCCODE'
  },
  locdesc: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'LOCDESC'
  },
  grpPage: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'GRP_PAGE'
  },
  evald: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EVALD'
  },
  addlangd: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'ADDLANGD'
  },
  mepStaffd: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'MEP_STAFFD'
  },
  mepSessd: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'MEP_SESSD'
  },
  mepTitled: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'MEP_TITLED'
  },
  secatd: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'SECATD'
  },
  emExcsald: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EM_EXCSALD'
  },
  employee2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Employee#_2'
  },
  jobTitle: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Job Title'
  },
  primaryJobTitle: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Primary Job Title?'
  },
  active3: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Active?_3'
  },
  code: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Code'
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Category'
  },
  jobTitle4: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Job Title_4'
  },
  calendar: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'Calendar'
  },
  jtWorkday: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_WORKDAY'
  },
  jtCpd: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_CPD'
  },
  jtCpdmaxc: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_CPDMAXC'
  },
  jtCpdmax2: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_CPDMAX2'
  },
  jtTenure: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_TENURE'
  },
  jtTenurey: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_TENUREY'
  },
  jtOccup: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_OCCUP'
  },
  jtInstr: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_INSTR'
  },
  jtEmptype: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_EMPTYPE'
  },
  jtContrac: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_CONTRAC'
  },
  jtStart: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_START'
  },
  jtEnd: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_END'
  },
  jtLastday: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_LASTDAY'
  },
  jtState: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_STATE'
  },
  jtNotif: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_NOTIF'
  },
  jtReturn: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_RETURN'
  },
  jtLastpai: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'JT_LASTPAI'
  },
  attEnum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'ATT_ENUM'
  },
  expEnum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'EXP_ENUM'
  },
  assEnum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'ASS_ENUM'
  },
  fcEmpno: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'FC_EMPNO'
  },
  medEnum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'MED_ENUM'
  },
  salEnum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'SAL_ENUM'
  },
  cpropEnum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'CPROP_ENUM'
  },
  cpdEnum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'CPD_ENUM'
  },
  district: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'DISTRICT'
  },
  upcEnum: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'UPC_ENUM'
  },
  primUcode: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'PRIM_UCODE'
  },
  primUdesc: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'PRIM_UDESC'
  }
    },
    {
      sequelize,
      tableName: 'S3_ProfileReport',
      schema: 'dbo',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      primaryKey: false,
      createdAt: false,
      updatedAt: false,
      defaultScope: {
        order: [] 
      }
    }
  );

  
  S3_ProfileReport.removeAttribute('id');

  return S3_ProfileReport;
};