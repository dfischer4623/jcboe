const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PEIS780', {
    RNAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RTITLE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RTAG01: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RTAG02: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RTAG03: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RTAG04: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RTAG05: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RTAG06: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RTAG07: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RTAG08: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RTAG09: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RTAG10: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RTAG11: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RTAG12: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RPDATA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RBUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PEIS780',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
