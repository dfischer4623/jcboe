const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PFRS100', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FOCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOTXYR: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FOSCPY: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    FOTCPY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FOIDNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FODENS: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FOVOLM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOOWNR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FODMS1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FODMS2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FODMS3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOMSG1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOMSG2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOMSG3: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FONQMS: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOFEID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FOTCOD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOTNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOTADD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOTADR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOTCTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOTST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOTFPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOTZIP: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FOTEXZ: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FO69NM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOCGRP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOCPYP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FORNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORADD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORADR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORCTY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORFPC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FORZIP: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FOREXZ: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    FOTPP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FOOUTQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOQLIB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOQHLD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOQSAV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOCNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FOCPHN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FOCEXT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOCFAX: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOCEML: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FORMTH: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FOAGNT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    'FOAGT#': {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FOPCDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PFRS100',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
