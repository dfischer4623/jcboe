const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY142', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DBBANK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'DBRTG#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DBSTS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBUCNT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    DBATTN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBADD1: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBADD2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBCITY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBST: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DBZIP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DBZIP2: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DBAREA: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    DBPHON: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY142',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
