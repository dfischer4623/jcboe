const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY122HL', {
    DEDCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEDESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY122HL',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
