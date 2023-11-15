const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI714U', {
    'PDRUN#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PDSEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PDSSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PDJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDRTYP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PDRAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDQTY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PDHD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAI714U',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
