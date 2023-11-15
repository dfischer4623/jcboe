const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPUR301C', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNNO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VNCATG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VNNAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PPUR301C',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
