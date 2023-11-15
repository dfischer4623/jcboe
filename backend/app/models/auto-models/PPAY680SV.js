const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY680SV', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDSSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DDNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDCBNK: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDCBAC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDCFRM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DDCHCK: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDCDAT: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DDEFDT: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DDAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDEBNK: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DDERTG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DDEACT: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    DDETCD: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDDSRY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    'DDTRC#': {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DDBDAT: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DDBTIM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DDRUN: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DDSTAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY680SV',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
