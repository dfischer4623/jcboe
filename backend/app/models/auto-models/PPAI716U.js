const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI716U', {
    'LARUN#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LASEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LASSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LAPSEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LAJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LACODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LAERN: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LAABS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LAADJ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LALOST: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LACOMP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LAPD: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LABAL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LAHD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LARATE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LABEG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LADESC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAI716U',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
