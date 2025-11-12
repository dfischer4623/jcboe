const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('S3_EmpPayOutput', {
    emp_num: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    middleini: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    suffix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dept: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hispanic: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    native_am: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    asian: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    african_am: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pacisl_haw: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    white: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    smid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hiredate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    termdate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lastsaldte: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    abs_stat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    active: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phone2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account3: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account4: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account5: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account6: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account7: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account8: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account9: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    account10: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    scname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    jtcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    workdays: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    long: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salary: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rate: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rateunit: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hours: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ed_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    civilserv: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    active_s: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    active_e: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deactive_s: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    deactive_e: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MonthYear: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'S3_EmpPayOutput',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
