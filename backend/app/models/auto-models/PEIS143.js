const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS143', {
    DGCODE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    DGDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DGSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DGUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DGBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS143',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
