const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY125L', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADAT: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RETN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SESN: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    CM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PLTNM: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PLRGE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PLSTEP: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PLAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PLLIN: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY125L',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
