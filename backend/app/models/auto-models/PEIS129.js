const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS129', {
    LPCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LPNAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LPSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LPUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    LPBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS129',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
