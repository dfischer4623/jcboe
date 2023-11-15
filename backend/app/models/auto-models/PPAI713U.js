const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI713U', {
    'PARUN#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PASEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PASSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAPSEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PATYP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAADN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PAFIS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PACAL: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PACUR: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PADESC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAI713U',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
