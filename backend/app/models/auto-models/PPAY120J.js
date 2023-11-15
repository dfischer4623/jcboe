const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PPAY120J', {
    USG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BUSY: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    JUSER: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    JLINE: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    JJOBC: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PPAY120J',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
