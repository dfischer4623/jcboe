const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY302D', {
    'ED#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EDLINE: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    'EDSEQ#': {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EDACT: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    EDPDTC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    EDPDAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EDBBNK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EDBACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EDBTCD: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    'EDBRT#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EDAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EDPCT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EDUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EDBUSY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY302D',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
