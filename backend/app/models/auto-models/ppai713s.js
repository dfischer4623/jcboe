const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppai713s', {
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PARUN#': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PASEQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PASSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAPSEQ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PATYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAADN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAFIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PACAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PACUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PADESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    'PA#CK': {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAONEA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
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
    tableName: 'ppai713s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
