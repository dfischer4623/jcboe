const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI711', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    HRRUN: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    HRBNK1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HRBAC1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HRFRM1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HRBNK2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HRBAC2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HRFRM2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HRBNK3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HRBAC3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HRFRM3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HRVCH: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    HRCKDT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HRPEDT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HRTRDT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HRFMON: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    HRCMON: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAI711',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
