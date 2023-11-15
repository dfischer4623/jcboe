const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PATT250', {
    ENWDIS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENWID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENWTTL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENWDES: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ENWTYP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEMBER: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PATT250',
    schema: 'dbo',
    timestamps: false,
    underscored: true
  });
};
