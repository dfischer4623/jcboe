const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS128', {
    SLCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CLNAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SLSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SLUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SLBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS128',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
