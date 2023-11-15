const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY3401', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    CM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ADSSAN: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'ADJD#': {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    'ADSEQ#': {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ADLNUM: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADDESC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADFND: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADLOC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ADACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADPCT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADENC: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ADEAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADEADJ: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADEDIS: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ADEOPN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADECNT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY3401',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
