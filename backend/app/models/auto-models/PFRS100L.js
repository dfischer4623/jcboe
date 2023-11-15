const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PFRS100L', {
    FLCODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLTYPE: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FLDEDC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLJURS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLSTYP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLLOCT: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FLB17C: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLBMSG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLMAXV: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    FLUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLBUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PFRS100L',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
