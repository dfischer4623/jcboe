const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI715U', {
    'DERUN#': {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEDESC: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAI715U',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
