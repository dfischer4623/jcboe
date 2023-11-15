const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS144', {
    ITCODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ITDESC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ITSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ITUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ITBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS144',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
