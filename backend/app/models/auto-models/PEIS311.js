const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS311', {
    'ES#': {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    ESKILL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ESRATE: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ESUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESBUSY: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS311',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
