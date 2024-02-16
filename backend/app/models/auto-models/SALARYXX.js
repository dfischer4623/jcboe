const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SALARYXX', {
    EMLOC: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    EM: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    EMLNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EMLFNAM: {
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
    ASGRAD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ASSTEP: {
      type: DataTypes.TINYINT,
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
    YEAR: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SALARYXX',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
