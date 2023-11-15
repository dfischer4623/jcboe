const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPUR4101', {
    PDUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PDBUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PDPODC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PDPO#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PDLINE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PDIUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDIUWA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDMUSR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDMUWA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDAHDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PDXTRA: {
      type: DataTypes.STRING(130),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPUR4101',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
