const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY680D', {
    DDSSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DDNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDCBNK: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DDCBAC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DDCRM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DDCHCK: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
    tableName: 'PPAY680D',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
