const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS480H', {
    'PA#': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PATID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PADATE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PACENT: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PADATA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PABUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS480H',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
