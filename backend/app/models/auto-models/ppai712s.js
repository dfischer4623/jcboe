const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppai712s', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    'PCRUN#': {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    PCSEQ: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    PCSSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'PCCK#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PCAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PCVDAT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PCSORT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PCTYP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PC613: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PC614: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PC615: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PC615E: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PC615R: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PC616: {
      type: DataTypes.INTEGER,
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
    tableName: 'ppai712s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
