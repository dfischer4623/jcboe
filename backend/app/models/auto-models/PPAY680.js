const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY680', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDSSN: {
      type: DataTypes.SMALLINT,
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
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DDEFDT: {
      type: DataTypes.DATEONLY,
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
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DDBDAT: {
      type: DataTypes.DATEONLY,
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
    tableName: 'PPAY680',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
