const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY605H', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    RDWSID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RDWBDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    RDWBTM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RDWDAY: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RDWWKS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAY605H',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
