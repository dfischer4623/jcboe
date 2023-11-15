const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS202', {
    SKCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SKDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SKSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SKUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SKBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS202',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
