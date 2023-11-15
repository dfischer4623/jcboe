const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY600J', {
    HARUN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HXCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY600J',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
