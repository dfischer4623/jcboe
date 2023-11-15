const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PFRS123', {
    TJJUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TJJTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'TJREF#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TJNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TJSNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TJENTC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TJTTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TJFIPS: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TJRLOC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TJUSG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TJBUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PFRS123',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
