const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salaries', {
    EMLOC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EMLNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASJD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASSTAB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASGRAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASSTEP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SALARY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    JDTITL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SCHYEAR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'salaries',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
