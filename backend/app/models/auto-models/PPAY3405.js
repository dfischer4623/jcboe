const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY3405', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DDSSN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DDDCDE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DDDJUR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDBNK: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    DDBACT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DDBTCD: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    'DDBRT#': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DDVEND: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    'DDSEQ#': {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DDFLAG: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DDXTRA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY3405',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
