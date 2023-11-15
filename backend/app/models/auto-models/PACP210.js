const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PACP210', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    BLANK: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EDTAMT: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PACP210',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
