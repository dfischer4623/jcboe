const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppai714s', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PDRUN: {
      type: DataTypes.TEXT,
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
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PDRAT: {
      type: DataTypes.FLOAT,
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
    tableName: 'ppai714s',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
