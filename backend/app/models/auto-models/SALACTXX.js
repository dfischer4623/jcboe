const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SALACTXX', {
    EM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMLNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMFNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ASSTAB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADPCT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CONTRACT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    LONG: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    JDTITL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SUB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRJ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FND: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PGM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FUN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OBJ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CTR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACCOUNT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    YEAR: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SALACTXX',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
