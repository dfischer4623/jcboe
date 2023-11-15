const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PATT240', {
    REGDIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REGID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REGSUB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REGTTL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REGDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REGMM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    REGDD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    REGAOP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PATT240',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
