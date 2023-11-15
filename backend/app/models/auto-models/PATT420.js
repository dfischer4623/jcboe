const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PATT420', {
    ABSSTU: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ABSJDT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ABSCDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ABSDIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ABSSCH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ABSREA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ABSPER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ABSNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ABFNAM: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PATT420',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
