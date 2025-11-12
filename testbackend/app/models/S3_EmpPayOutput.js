const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const S3_EmpPayOutput = sequelize.define(
    'S3_EmpPayOutput',
    {
      empNum: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'emp_num'
      },
      firstname: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'firstname'
      },
      middleini: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'middleini'
      },
      lastname: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'lastname'
      },
      address1: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'address1'
      },
      address2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'address2'
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'city'
      },
      state: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'state'
      },
      zip: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'zip'
      },
      suffix: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'suffix'
      },
      dept: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'dept'
      },
      gender: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'gender'
      },
      hispanic: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'hispanic'
      },
      nativeAm: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'native_am'
      },
      asian: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'asian'
      },
      africanAm: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'african_am'
      },
      pacislHaw: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'pacisl_haw'
      },
      white: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'white'
      },
      smid: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'smid'
      },
      location: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'location'
      },
      hiredate: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'hiredate'
      },
      termdate: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'termdate'
      },
      lastsaldte: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'lastsaldte'
      },
      absStat: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'abs_stat'
      },
      birthdate: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'birthdate'
      },
      active: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'active'
      },
      phone: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'phone'
      },
      phone2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'phone2'
      },
      account1: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account1'
      },
      account2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account2'
      },
      account3: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account3'
      },
      account4: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account4'
      },
      account5: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account5'
      },
      account6: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account6'
      },
      account7: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account7'
      },
      account8: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account8'
      },
      account9: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account9'
      },
      account10: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'account10'
      },
      scname: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'scname'
      },
      jtcode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'jtcode'
      },
      mode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'mode'
      },
      workdays: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'workdays'
      },
      long: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'long'
      },
      salary: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'salary'
      },
      rate: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'rate'
      },
      rateunit: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'rateunit'
      },
      hours: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'hours'
      },
      edCode: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'ed_code'
      },
      civilserv: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'civilserv'
      },
      activeS: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'active_s'
      },
      activeE: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'active_e'
      },
      deactiveS: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'deactive_s'
      },
      deactiveE: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'deactive_e'
      },
      monthYear: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'MonthYear'
      }
    },
    {
      sequelize,
      tableName: 'S3_EmpPayOutput',
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

  
  S3_EmpPayOutput.removeAttribute('id');

  return S3_EmpPayOutput;
};