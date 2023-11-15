const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY1241', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ACJJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACJNCK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACJACT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ACCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY1241',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
