const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS305', {
    'EC#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ECCAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ECCATT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ECUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ECBUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PEIS305',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
