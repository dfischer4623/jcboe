const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPUR420H', {
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
    ROVEND: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ROLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROATTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROREQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROREF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROTYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RODAT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RODREQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ROSHIP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROMSG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROSTRM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROPTRM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RONOTE: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    RORREC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROHOLD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROAPCL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROACCT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROEACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROBLNK: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROSUB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ROTAX1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROTCAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROTAX2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RODISC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROTFRE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROFRT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROTOT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROTTAX: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROTDIS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROTPAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROTFP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ROPRNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROREV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RODRAF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROCONF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROREC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROIUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROASUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ROUNAP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RORSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPUR420H',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
