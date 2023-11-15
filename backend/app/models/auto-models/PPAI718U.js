const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI718U', {
    'ACRUN#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACSEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACSSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACSTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACENC: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ACEAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ACACT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACFUND: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACFSCL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACJOB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACADN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACDED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACJUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACVND: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACVDED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACVAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ACASEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAI718U',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
