const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PAOE301', {
    EMPNUM: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EMPSSN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PAOE301',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
