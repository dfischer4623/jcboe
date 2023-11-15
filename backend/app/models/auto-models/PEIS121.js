const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS121', {
    CGCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CGDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CGSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CGUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CGBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS121',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
