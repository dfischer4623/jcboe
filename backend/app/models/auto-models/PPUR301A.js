const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPUR301A', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNNO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNFXAR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NVFXON: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNCOM1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VNCOM2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VNCOM3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VNCOM4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VNCOM5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VNCOM6: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VNRMAR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNRMON: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNRMEX: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNNM99: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNBOXN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNSHRT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNW9RC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VNBWVN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPUR301A',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
