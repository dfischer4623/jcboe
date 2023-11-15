const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAI720', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    'DWRUN#': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DWSEQ: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DWSSN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DWDAYS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DWWKS: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPAI720',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
