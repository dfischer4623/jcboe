const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PATT420L', {
    ABPSTU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ABPJDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ABSCDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ABPREA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PATT420L',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
