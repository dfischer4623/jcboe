const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPUR420L', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RODOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'RO#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ROLINE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLQTY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLCAN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLREC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLPAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLOUT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROLPAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROLUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROLIPT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROLFAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'ROLFA#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ROLACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROLSUB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ROLDGR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROLCST: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLTX1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLCAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROLTX2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLFRE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLDS$: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    'ROLDS#': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLEXT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLACR: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROLC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPUR420L',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
