const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY120L', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    KUSER: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    KLINE: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    KLOCN: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY120L',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
