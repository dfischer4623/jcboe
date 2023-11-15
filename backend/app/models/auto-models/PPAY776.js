const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY776', {
    BDDATA: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY776',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
