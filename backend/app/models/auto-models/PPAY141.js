const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY141', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DTCODE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DTDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DTDES: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DTPCDE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY141',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
