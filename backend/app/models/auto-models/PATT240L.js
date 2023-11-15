const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PATT240L', {
    RGLDIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGLID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGLSUB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGLFTE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PATT240L',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
