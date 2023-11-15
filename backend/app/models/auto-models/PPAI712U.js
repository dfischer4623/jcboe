const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI712U', {
    'PCRUN#': {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    PCSEQ: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    PCSSN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'PCCK#': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PCAMT: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PCSORT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PCTYP: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PC613: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PC614: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PC615: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PC615E: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PC615R: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PC616: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PC618: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAI712U',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
