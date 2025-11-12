const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UKG-Absences', {
    'Employee Id': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Date: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Absent: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'Column 4': {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UKG-Absences',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
