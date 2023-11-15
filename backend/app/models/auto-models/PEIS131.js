const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS131', {
    CRTID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CRTDES: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CRSHRT: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CRUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CRBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS131',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
