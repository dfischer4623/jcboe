const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PSTU320D', {
    SCHDIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHTTL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHAD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHAD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHCTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHPRV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHZIP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCHZP2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCHCPC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHPRI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHARA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCHPHN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCHSTR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHGTR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHPAM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SCHPAA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SCHCAM: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SCHLRA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PSTU320D',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
