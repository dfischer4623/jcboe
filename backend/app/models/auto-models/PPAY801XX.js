const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY801XX', {
    'HP#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HPTYPE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    PHSUB: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HPJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HPREF: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HPREF2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'HPRUN#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HPALST: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPPDTC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HPPDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HPCDTC: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    HPCDT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HPPUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HPALTT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPACTT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC01: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC02: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC03: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC04: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC05: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC06: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC07: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC08: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC09: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC10: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC11: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAC12: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAFTT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF01: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF02: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF03: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF04: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF05: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF06: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF07: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF08: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF09: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF10: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF11: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPAF12: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    HPUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    HPBUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY801XX',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
