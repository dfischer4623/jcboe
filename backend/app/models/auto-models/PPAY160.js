const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY160', {
    PYCKD1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PYCKD2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY160',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
