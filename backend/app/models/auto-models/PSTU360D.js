const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PSTU360D', {
    RGNDIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNSCH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNSTU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RGNNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNYR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RGNLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNCNC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNROM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNTCH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNAMB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNPMB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RGNPAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RGNTUI: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PSTU360D',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
