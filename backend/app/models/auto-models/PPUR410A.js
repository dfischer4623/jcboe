const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPUR410A', {
    PAUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PABUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAPODC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PAPO#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PALINE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PAUSER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PASWA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAALVL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PARTGO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PAACCT: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    PADATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAAPRV: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAREVS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAMEMO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAFLAG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPUR410A',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
