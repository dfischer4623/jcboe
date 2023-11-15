const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY605', {
    USG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    PDWSID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PDWDAY: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    PDWWKS: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY605',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
