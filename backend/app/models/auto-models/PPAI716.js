const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI716', {
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'LARUN#': {
      type: DataTypes.STRING(50),
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
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    LACODE: {
      type: DataTypes.CHAR(10),
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
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    LARATE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAI716',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
