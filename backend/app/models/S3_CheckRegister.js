const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const S3_CheckRegister = sequelize.define(
    'S3_CheckRegister',
    {
      chkno: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CHKNO'
      },
      checkDate: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Check Date'
      },
      chkvdate: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CHKVDATE'
      },
      checkRun: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Check Run#'
      },
      status: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'STATUS'
      },
      employee: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Employee#'
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
      employeeType: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Employee Type'
      },
      workingMonths: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Working Months'
      },
      totalPays: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Total Pays'
      },
      bldgLocation: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Bldg Location'
      },
      department: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DEPARTMENT'
      },
      checkLocation: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Check Location'
      },
      statusCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Status Code'
      },
      employmentType: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Employment Type'
      },
      refunds: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'REFUNDS'
      },
      dockage: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DOCKAGE'
      },
      gwages: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'GWAGES'
      },
      cgwages: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CGWAGES'
      },
      taxes: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TAXES'
      },
      ded: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DED'
      },
      netpayadj: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'NETPAYADJ'
      },
      netwages: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'NETWAGES'
      },
      cnetwages: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CNETWAGES'
      },
      directDepositAmt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'Direct Deposit Amt'
      },
      paycode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'PAYCODE'
      },
      dcode1: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE1'
      },
      ckdesc1: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC1'
      },
      amount1: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT1'
      },
      dcode2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE2'
      },
      ckdesc2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC2'
      },
      amount2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT2'
      },
      dcode3: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE3'
      },
      ckdesc3: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC3'
      },
      amount3: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT3'
      },
      dcode4: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE4'
      },
      ckdesc4: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC4'
      },
      amount4: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT4'
      },
      dcode5: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE5'
      },
      ckdesc5: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC5'
      },
      amount5: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT5'
      },
      dcode6: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE6'
      },
      ckdesc6: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC6'
      },
      amount6: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT6'
      },
      dcode7: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE7'
      },
      ckdesc7: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC7'
      },
      amount7: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT7'
      },
      dcode8: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE8'
      },
      ckdesc8: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC8'
      },
      amount8: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT8'
      },
      dcode9: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCODE9'
      },
      ckdesc9: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CKDESC9'
      },
      amount9: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'AMOUNT9'
      },
      cdistrict: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CDISTRICT'
      },
      chkcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'CHKCNT'
      },
      empcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'EMPCNT'
      },
      tpafcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TPAFCNT'
      },
      perscnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'PERSCNT'
      },
      dcrpcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'DCRPCNT'
      },
      othercnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'OTHERCNT'
      },
      malecnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'MALECNT'
      },
      femalecnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'FEMALECNT'
      },
      undesigcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'UNDESIGCNT'
      },
      nogendcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'NOGENDCNT'
      },
      singlecnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'SINGLECNT'
      },
      marriedcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'MARRIEDCNT'
      },
      ftcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'FTCNT'
      },
      ptcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'PTCNT'
      },
      ltsubcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'LTSUBCNT'
      },
      pdsubcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'PDSUBCNT'
      },
      nostatcnt: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'NOSTATCNT'
      },
      trefunds: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TREFUNDS'
      },
      tdockage: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TDOCKAGE'
      },
      tgwages: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TGWAGES'
      },
      tcgwages: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TCGWAGES'
      },
      ttaxes: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TTAXES'
      },
      tded: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TDED'
      },
      tnetpayadj: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TNETPAYADJ'
      },
      tnetwages: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TNETWAGES'
      },
      tcnetwages: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TCNETWAGES'
      },
      tddep: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'TDDEP'
      },
      empadj: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'EMPADJ'
      },
      year: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'year'
      }
    },
    {
      sequelize,
      tableName: 'S3_CheckRegister',
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

  
  S3_CheckRegister.removeAttribute('id');

  return S3_CheckRegister;
};