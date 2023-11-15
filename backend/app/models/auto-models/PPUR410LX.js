const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPUR410LX', {
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PODOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PO#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POLINE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POLQTY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POLCAN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POLREC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POLPAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POLOUT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POLDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLPAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLUM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLIPT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLFAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'POLFA#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLSUB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLDGR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLCST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLTX1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLCAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLTX2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLFRE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLDS$: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'POLDS#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLEXT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLACR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    POLAPV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPUR410LX',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
