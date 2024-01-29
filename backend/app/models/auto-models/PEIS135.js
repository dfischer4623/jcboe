const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS135', {
    LVCODE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    LVDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LVSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LVUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LVBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS135',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
