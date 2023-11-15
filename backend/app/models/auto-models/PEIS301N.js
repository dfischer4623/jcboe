const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS301N', {
    'EN#': {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    ENLINE: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ENLNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENFNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENMNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENPNAM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENNFMT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENLNMC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENFNMC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENMNMC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENPNMC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENBUSY: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PEIS301N',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
