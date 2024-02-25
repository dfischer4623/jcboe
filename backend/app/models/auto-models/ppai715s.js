const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppai715s', {
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'DERUN#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DESEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DESSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DEPSEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DEPRI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DECODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEJUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEFIS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DECAL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DEAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DEAMT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DESUBJ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DETYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ppai715s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
