const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY680DSV', {
    DDSSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DDNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDCBNK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDCBAC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDCFRM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDCHCK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDCDAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDEFDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DDEBNK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDERTG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDEACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDETCD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDDSRY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'DDTRC#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDBDAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDBTIM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDRUN: {
      type: DataTypes.STRING(50),
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
    tableName: 'PPAY680DSV',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
