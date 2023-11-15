const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY140', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCCLI: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCYR: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCTYPE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCDENS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DCPRI: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCOPRE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCONUM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DONAM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCPRE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DCDNUM: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DCDNAM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCFMOD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCRSIZ: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCBSIZ: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCFMCD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCHREF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DCCNAM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCCDTA: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCCIPR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DCCINO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DCCDES: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCCPRE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCCBNK: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DCCCLS: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCCSCL: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCOFF: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    DCOTRN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DCORTG: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DCOACT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DCTDAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DCTTIM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DCTUSR: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCUUSR: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCCAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    DCDAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    DCDSTS: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCSET: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCBVER: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DCFLG1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DCFLG2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DCFLG3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DCFLG4: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DCFLG5: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY140',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
