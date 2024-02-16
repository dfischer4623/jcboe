const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('peis480hs', {
    PA: {
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
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'peis480hs',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
