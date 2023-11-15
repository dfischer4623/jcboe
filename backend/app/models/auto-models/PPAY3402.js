const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY3402', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    CM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AASSAN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'AAJD#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'AASEQ#': {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AALNUM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    AADESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AAACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AAAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    AADPCT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'AAADD#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AADOCK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AAENC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    AASDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AAEDAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AANCHK: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AAPCHK: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    AAAMTP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    AACON: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AAHRLY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY3402',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
